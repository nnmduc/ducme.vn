/**
 * Cloudflare R2 Storage Operations & Secure Signed URLs
 */

import { sanitizeText } from './validator.js';

/**
 * Upload verified file to Cloudflare R2
 */
export async function uploadFileToR2(env, submissionId, { file, mime, originalName }) {
  const safeName = sanitizeText(originalName).replace(/[^a-zA-Z0-9._-]/g, '_');
  const timestamp = Date.now();
  const fileKey = `submissions/${submissionId}/${timestamp}-${safeName}`;

  await env.BUCKET.put(fileKey, file.stream(), {
    httpMetadata: {
      contentType: mime,
    },
    customMetadata: {
      originalName,
      submissionId,
      uploadedAt: new Date().toISOString(),
    },
  });

  return {
    key: fileKey,
    name: originalName,
    size: file.size,
    mime,
  };
}

/**
 * Rollback helper: Delete files in R2 if DB insertion fails
 */
export async function cleanupR2Files(env, fileKeys) {
  if (!fileKeys || fileKeys.length === 0 || !env.BUCKET) return;
  await Promise.allSettled(fileKeys.map((key) => env.BUCKET.delete(key)));
}

/**
 * Generate HMAC-SHA256 signature for secure file download links
 */
async function createHmacToken(submissionId, fileKey, expires, secret) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret || 'ducmevn-feedback-fallback-secret-2026'),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const data = enc.encode(`${submissionId}:${fileKey}:${expires}`);
  const signature = await crypto.subtle.sign('HMAC', key, data);
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Verify HMAC token
 */
export async function verifyHmacToken(submissionId, fileKey, token, expires, secret) {
  const now = Date.now();
  const expNum = parseInt(expires, 10);
  if (isNaN(expNum) || now > expNum) {
    return false;
  }
  const expectedToken = await createHmacToken(submissionId, fileKey, expNum, secret);
  return token === expectedToken;
}

/**
 * Generate a signed download URL for an R2 object
 */
export async function generateSignedFileUrl(baseUrl, submissionId, fileKey, secret) {
  const expires = Date.now() + 14 * 24 * 60 * 60 * 1000; // 14 days valid
  const token = await createHmacToken(submissionId, fileKey, expires, secret);
  const cleanBase = baseUrl.replace(/\/+$/, '');
  return `${cleanBase}/api/submissions/${encodeURIComponent(submissionId)}/files/${encodeURIComponent(fileKey)}?token=${token}&expires=${expires}`;
}

/**
 * Retrieve an object from R2
 */
export async function getFileFromR2(env, fileKey) {
  if (!env.BUCKET) return null;
  return await env.BUCKET.get(fileKey);
}
