/**
 * Email notification helper using Cloudflare Email Routing
 */

import { createMimeMessage } from 'mimetext';
import { EmailMessage } from 'cloudflare:email';
import { escapeHtml, sanitizeText } from './validator.js';
import { generateSignedFileUrl } from './r2.js';
import { updateSubmissionEmailStatus } from './db.js';

const TYPE_LABELS = {
  contact: 'Liên hệ chung',
  feedback: 'Góp ý & phản hồi',
  contribution: 'Đóng góp tư liệu & hình ảnh',
};

export async function sendSubmissionEmail(env, submission, requestUrl) {
  if (!env.EMAIL || typeof env.EMAIL.send !== 'function') {
    console.warn('[EMAIL] Cloudflare Email Routing binding (env.EMAIL) is not configured or in dev mode.');
    await updateSubmissionEmailStatus(env, submission.id, 'skipped', 'Binding env.EMAIL not available');
    return { sent: false, skipped: true };
  }

  const recipient = 'nnmduc@gmail.com';
  const envelopeSender = 'noreply@ducme.vn';
  const typeLabel = TYPE_LABELS[submission.type] || submission.type;
  const safeName = sanitizeText(submission.name);
  const subject = `[ducme.vn] [${typeLabel}] từ ${safeName}`;

  // Build file links if any
  let filesHtml = '';
  if (submission.file_meta && submission.file_meta.length > 0) {
    const urlObj = new URL(requestUrl);
    const origin = urlObj.origin;

    const fileListItems = await Promise.all(
      submission.file_meta.map(async (meta) => {
        const downloadUrl = await generateSignedFileUrl(
          origin,
          submission.id,
          meta.key,
          env.TURNSTILE_SECRET_KEY
        );
        const sizeMb = (meta.size / (1024 * 1024)).toFixed(2);
        return `<li><strong>${escapeHtml(meta.name)}</strong> (${sizeMb} MB, ${escapeHtml(meta.mime)}) - <a href="${downloadUrl}" style="color: #c99738; text-decoration: underline;">Xem/Tải tệp đính kèm</a> (Link hết hạn sau 14 ngày)</li>`;
      })
    );

    filesHtml = `
      <div style="margin-top: 20px; padding: 15px; background: #262626; border-radius: 6px; border: 1px solid #404040;">
        <h3 style="margin-top: 0; color: #f5f5f5; font-size: 15px;">📁 Tệp tin đính kèm (${submission.file_meta.length} tệp):</h3>
        <ul style="margin: 0; padding-left: 20px; color: #d4d4d4; font-size: 14px; line-height: 1.6;">
          ${fileListItems.join('')}
        </ul>
      </div>
    `;
  }

  const htmlBody = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="utf-8">
      <title>${escapeHtml(subject)}</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #121212; color: #f0f0f0; margin: 0; padding: 24px;">
      <div style="max-width: 600px; margin: 0 auto; background: #1c1c1c; border: 1px solid #333333; border-radius: 8px; overflow: hidden;">
        <div style="background: #2a2215; border-bottom: 2px solid #c99738; padding: 20px 24px;">
          <h2 style="margin: 0; color: #e5b869; font-size: 20px; font-weight: 600;">Linh Đài Đức Mẹ Việt Nam - Thông Báo Mới</h2>
          <p style="margin: 6px 0 0 0; color: #a3a3a3; font-size: 13px;">Nhận được từ biểu mẫu trực tuyến tại ducme.vn/lien-he/</p>
        </div>

        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #888888; width: 140px; font-weight: 500;">Mã hồ sơ (ID):</td>
              <td style="padding: 8px 0; color: #f0f0f0; font-family: monospace; font-size: 13px;">${escapeHtml(submission.id)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888888; font-weight: 500;">Chuyên mục:</td>
              <td style="padding: 8px 0; color: #e5b869; font-weight: 600;">${escapeHtml(typeLabel)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888888; font-weight: 500;">Họ và tên:</td>
              <td style="padding: 8px 0; color: #f0f0f0; font-weight: 600;">${escapeHtml(submission.name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888888; font-weight: 500;">Email:</td>
              <td style="padding: 8px 0; color: #f0f0f0;"><a href="mailto:${escapeHtml(submission.email)}" style="color: #60a5fa;">${escapeHtml(submission.email)}</a></td>
            </tr>
            ${
              submission.phone
                ? `<tr>
                    <td style="padding: 8px 0; color: #888888; font-weight: 500;">Số điện thoại:</td>
                    <td style="padding: 8px 0; color: #f0f0f0;">${escapeHtml(submission.phone)}</td>
                  </tr>`
                : ''
            }
            ${
              submission.statue_id
                ? `<tr>
                    <td style="padding: 8px 0; color: #888888; font-weight: 500;">Linh đài liên quan:</td>
                    <td style="padding: 8px 0; color: #f0f0f0;"><strong>${escapeHtml(submission.statue_id)}</strong></td>
                  </tr>`
                : ''
            }
            <tr>
              <td style="padding: 8px 0; color: #888888; font-weight: 500;">Thời gian:</td>
              <td style="padding: 8px 0; color: #a3a3a3;">${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })} (Việt Nam)</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888888; font-weight: 500;">Địa chỉ IP / Quốc gia:</td>
              <td style="padding: 8px 0; color: #a3a3a3;">${escapeHtml(submission.ip_country || 'Không rõ')}</td>
            </tr>
          </table>

          <div style="margin-top: 16px;">
            <h3 style="margin: 0 0 8px 0; color: #f0f0f0; font-size: 15px;">💬 Nội dung lời nhắn:</h3>
            <div style="background: #242424; padding: 16px; border-radius: 6px; border-left: 3px solid #c99738; color: #e5e5e5; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(submission.message)}</div>
          </div>

          ${filesHtml}
        </div>

        <div style="background: #171717; padding: 14px 24px; border-top: 1px solid #2e2e2e; text-align: center; font-size: 12px; color: #737373;">
          Hệ thống ghi nhận đóng góp tự động — <a href="https://ducme.vn" style="color: #a3a3a3; text-decoration: none;">ducme.vn</a>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const msg = createMimeMessage();
    msg.setSender({ name: 'Linh Đài Đức Mẹ Việt Nam', addr: envelopeSender });
    msg.setRecipient(recipient);
    msg.setSubject(subject);
    msg.addMessage({
      contentType: 'text/html',
      data: htmlBody,
    });

    const rawMessage = msg.asRaw();
    const emailMsg = new EmailMessage(envelopeSender, recipient, rawMessage);
    await env.EMAIL.send(emailMsg);

    try {
      await updateSubmissionEmailStatus(env, submission.id, 'sent', null);
    } catch (dbErr) {
      console.warn('[EMAIL] Could not update D1 email_status to sent:', dbErr);
    }
    return { sent: true };
  } catch (err) {
    console.error(`[EMAIL ERROR] Failed to send notification email:`, err);
    try {
      await updateSubmissionEmailStatus(env, submission.id, 'failed', err.message || 'Unknown email error');
    } catch (dbErr) {
      console.warn('[EMAIL] Could not update D1 email_status to failed:', dbErr);
    }
    return { sent: false, error: err.message };
  }
}
