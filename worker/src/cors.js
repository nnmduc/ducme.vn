/**
 * CORS Middleware for Cloudflare Worker
 * Strict whitelist: https://ducme.vn and http://localhost:4321
 */

const ALLOWED_ORIGINS = new Set([
  'https://ducme.vn',
  'http://localhost:4321',
  'http://127.0.0.1:4321',
]);

export function getCorsHeaders(request) {
  const origin = request.headers.get('Origin');
  const headers = new Headers();

  if (origin && ALLOWED_ORIGINS.has(origin)) {
    headers.set('Access-Control-Allow-Origin', origin);
    headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type, X-Turnstile-Token');
    headers.set('Access-Control-Max-Age', '86400');
    headers.set('Vary', 'Origin');
  }

  return headers;
}

export function handleCorsPreflight(request) {
  if (request.method === 'OPTIONS') {
    const headers = getCorsHeaders(request);
    return new Response(null, {
      status: 204,
      headers,
    });
  }
  return null;
}

export function withCors(response, request) {
  const corsHeaders = getCorsHeaders(request);
  const newHeaders = new Headers(response.headers);
  for (const [key, value] of corsHeaders.entries()) {
    newHeaders.set(key, value);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
}
