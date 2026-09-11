/**
 * Cloudflare Worker API for ducme.vn Contact & Feedback
 */

import { handleCorsPreflight, withCors } from './cors.js';
import { verifyTurnstileToken } from './turnstile.js';
import { validateFields, validateFiles } from './validator.js';
import { uploadFileToR2, cleanupR2Files, verifyHmacToken, getFileFromR2 } from './r2.js';
import { insertSubmission, checkDbHealth } from './db.js';
import { sendSubmissionEmail } from './email.js';

const MAX_BODY_BYTES = 16 * 1024 * 1024; // 16 MB early check

export default {
  async fetch(request, env, ctx) {
    // 1. Handle CORS Preflight (OPTIONS)
    const preflight = handleCorsPreflight(request);
    if (preflight) return preflight;

    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    try {
      // 2. Health check route
      if (method === 'GET' && path === '/health') {
        const isDbHealthy = await checkDbHealth(env);
        return withCors(
          new Response(
            JSON.stringify({
              status: 'ok',
              service: 'ducmevn-feedback-worker',
              timestamp: new Date().toISOString(),
              d1: isDbHealthy,
            }),
            {
              status: isDbHealthy ? 200 : 503,
              headers: { 'Content-Type': 'application/json' },
            }
          ),
          request
        );
      }

      // 3. Secure file download / preview route for admin
      // Route pattern: /api/submissions/:id/files/:fileKey
      const fileRouteMatch = path.match(/^\/api\/submissions\/([^/]+)\/files\/(.+)$/);
      if (method === 'GET' && fileRouteMatch) {
        const submissionId = decodeURIComponent(fileRouteMatch[1]);
        const fileKey = decodeURIComponent(fileRouteMatch[2]);
        const token = url.searchParams.get('token');
        const expires = url.searchParams.get('expires');

        if (!token || !expires) {
          return withCors(
            new Response(JSON.stringify({ success: false, error: 'Thiếu tham số xác thực tệp' }), {
              status: 401,
              headers: { 'Content-Type': 'application/json' },
            }),
            request
          );
        }

        const isValidToken = await verifyHmacToken(
          submissionId,
          fileKey,
          token,
          expires,
          env.TURNSTILE_SECRET_KEY
        );

        if (!isValidToken) {
          return withCors(
            new Response(
              JSON.stringify({
                success: false,
                error: 'Mã xác thực tệp không hợp lệ hoặc liên kết đã hết hạn (14 ngày)',
              }),
              {
                status: 403,
                headers: { 'Content-Type': 'application/json' },
              }
            ),
            request
          );
        }

        const r2Object = await getFileFromR2(env, fileKey);
        if (!r2Object) {
          return withCors(
            new Response(JSON.stringify({ success: false, error: 'Tệp không tồn tại trên hệ thống' }), {
              status: 404,
              headers: { 'Content-Type': 'application/json' },
            }),
            request
          );
        }

        const headers = new Headers();
        r2Object.writeHttpMetadata(headers);
        headers.set('etag', r2Object.httpEtag);
        headers.set('Cache-Control', 'private, max-age=86400');

        return withCors(
          new Response(r2Object.body, {
            status: 200,
            headers,
          }),
          request
        );
      }

      // 4. Submissions API endpoint
      if (method === 'POST' && path === '/api/submissions') {
        const clientIp = request.headers.get('CF-Connecting-IP') || '';
        const userAgent = request.headers.get('User-Agent') || '';
        const ipCountry = request.headers.get('CF-IPCountry') || '';

        // 4.1. Guard early: Content-Length check to prevent OOM
        const contentLength = parseInt(request.headers.get('Content-Length') || '0', 10);
        if (contentLength > MAX_BODY_BYTES) {
          return withCors(
            new Response(
              JSON.stringify({
                success: false,
                error: 'Dung lượng yêu cầu vượt quá giới hạn cho phép (tối đa 16 MB)',
              }),
              {
                status: 413,
                headers: { 'Content-Type': 'application/json' },
              }
            ),
            request
          );
        }

        // 4.2. Verify Turnstile token from header BEFORE buffering multipart body (Red Team #2)
        const turnstileHeader = request.headers.get('X-Turnstile-Token');
        let turnstileResult = await verifyTurnstileToken({
          token: turnstileHeader,
          ip: clientIp,
          env,
        });

        // Observation 1: If header was provided but invalid, reject immediately without parsing body
        if (turnstileHeader && !turnstileResult.success) {
          return withCors(
            new Response(
              JSON.stringify({
                success: false,
                error: turnstileResult.error || 'Xác thực bảo vệ Turnstile thất bại',
              }),
              {
                status: 403,
                headers: { 'Content-Type': 'application/json' },
              }
            ),
            request
          );
        }

        // 4.3. Parse multipart body
        let formData;
        try {
          formData = await request.formData();
        } catch (err) {
          return withCors(
            new Response(
              JSON.stringify({
                success: false,
                error: 'Không thể xử lý dữ liệu biểu mẫu (multipart/form-data error)',
              }),
              {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
              }
            ),
            request
          );
        }

        // Fallback: If Turnstile was not in header, check body
        if (!turnstileResult.success && !turnstileHeader) {
          const bodyToken = formData.get('cf-turnstile-response') || formData.get('turnstile_token');
          turnstileResult = await verifyTurnstileToken({
            token: bodyToken,
            ip: clientIp,
            env,
          });
        }

        if (!turnstileResult.success) {
          return withCors(
            new Response(
              JSON.stringify({
                success: false,
                error: turnstileResult.error || 'Xác thực bảo vệ Turnstile thất bại',
              }),
              {
                status: 403,
                headers: { 'Content-Type': 'application/json' },
              }
            ),
            request
          );
        }

        // 4.4. Extract and validate text fields
        const type = formData.get('type');
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const statue_id = formData.get('statue_id');
        const message = formData.get('message');

        const fieldsValidation = validateFields({
          type,
          name,
          email,
          phone,
          statue_id,
          message,
        });

        if (!fieldsValidation.valid) {
          return withCors(
            new Response(
              JSON.stringify({
                success: false,
                error: fieldsValidation.errors.join('. '),
                errors: fieldsValidation.errors,
              }),
              {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
              }
            ),
            request
          );
        }

        // 4.5. Extract and validate files
        const rawFiles = formData.getAll('files').filter((f) => f && typeof f === 'object' && f.size > 0);
        const filesValidation = await validateFiles(rawFiles);

        if (!filesValidation.valid) {
          return withCors(
            new Response(
              JSON.stringify({
                success: false,
                error: filesValidation.error,
              }),
              {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
              }
            ),
            request
          );
        }

        // 4.6. Generate UUID for submission
        const submissionId = crypto.randomUUID();
        const uploadedMetas = [];
        const uploadedKeys = [];

        // 4.7. Stream files to R2
        if (filesValidation.verifiedFiles && filesValidation.verifiedFiles.length > 0) {
          try {
            for (const item of filesValidation.verifiedFiles) {
              const meta = await uploadFileToR2(env, submissionId, item);
              uploadedMetas.push(meta);
              uploadedKeys.push(meta.key);
            }
          } catch (uploadErr) {
            console.error('[R2 UPLOAD ERROR]', uploadErr);
            // Rollback uploaded files
            await cleanupR2Files(env, uploadedKeys);
            return withCors(
              new Response(
                JSON.stringify({
                  success: false,
                  error: 'Lưu trữ tệp tin thất bại, vui lòng thử lại',
                }),
                {
                  status: 500,
                  headers: { 'Content-Type': 'application/json' },
                }
              ),
              request
            );
          }
        }

        // 4.8. Insert record into Cloudflare D1
        const submissionRecord = {
          id: submissionId,
          ...fieldsValidation.sanitized,
          file_keys: uploadedKeys,
          file_meta: uploadedMetas,
          ip_country: ipCountry,
          user_agent: userAgent.slice(0, 500),
          status: 'new',
          email_status: 'pending',
          email_error: null,
          created_at: new Date().toISOString(),
        };

        try {
          await insertSubmission(env, submissionRecord);
        } catch (dbErr) {
          console.error('[D1 INSERT ERROR]', dbErr);
          // Rollback R2 files on DB insertion failure (Red Team #4)
          await cleanupR2Files(env, uploadedKeys);
          return withCors(
            new Response(
              JSON.stringify({
                success: false,
                error: 'Ghi nhận thông tin thất bại, vui lòng thử lại sau',
              }),
              {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
              }
            ),
            request
          );
        }

        // 4.9. Send notification email via Cloudflare Email Routing (asynchronous resilience)
        // Red Team #14: If email fails, D1 records failed status, but user still gets success response
        await sendSubmissionEmail(env, submissionRecord, request.url);

        // 4.10. Return success response with receipt ID
        return withCors(
          new Response(
            JSON.stringify({
              success: true,
              id: submissionId,
              message: 'Cảm ơn bạn! Thông tin đóng góp đã được tiếp nhận thành công.',
            }),
            {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
            }
          ),
          request
        );
      }

      // Default 404
      return withCors(
        new Response(
          JSON.stringify({
            success: false,
            error: 'Đường dẫn API không tồn tại',
          }),
          {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
          }
        ),
        request
      );
    } catch (err) {
      console.error('[UNHANDLED ERROR]', err);
      return withCors(
        new Response(
          JSON.stringify({
            success: false,
            error: 'Đã xảy ra lỗi nội bộ máy chủ',
          }),
          {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          }
        ),
        request
      );
    }
  },
};
