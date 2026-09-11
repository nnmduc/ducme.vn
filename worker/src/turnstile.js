/**
 * Cloudflare Turnstile Verification Helper
 */

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export async function verifyTurnstileToken({ token, ip, env }) {
  // Check local development bypass
  const isDevMode =
    env.DEV_BYPASS_TURNSTILE === 'true' ||
    env.DEV_BYPASS_TURNSTILE === true ||
    env.ENVIRONMENT === 'development';

  if (isDevMode && (token === 'dev-bypass' || !token || token.startsWith('1x00000000000000000000AA'))) {
    return { success: true, bypass: true };
  }

  if (!token) {
    return { success: false, error: 'Thiếu mã xác thực Turnstile (X-Turnstile-Token)' };
  }

  try {
    const formData = new URLSearchParams();
    formData.append('secret', env.TURNSTILE_SECRET_KEY || '');
    formData.append('response', token);
    if (ip) {
      formData.append('remoteip', ip);
    }

    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      return { success: false, error: `Lỗi kết nối máy chủ Turnstile (${response.status})` };
    }

    const result = await response.json();

    if (!result.success) {
      return {
        success: false,
        error: 'Mã xác thực Turnstile không hợp lệ hoặc đã hết hạn',
        codes: result['error-codes'],
      };
    }

    // In production, verify hostname matches ducme.vn if hostname is provided in result
    if (result.hostname && !isDevMode && result.hostname !== 'ducme.vn') {
      return { success: false, error: 'Tên miền xác thực Turnstile không khớp' };
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: `Lỗi xác thực Turnstile: ${err.message}` };
  }
}
