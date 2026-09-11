/**
 * Input and File Validation Helpers
 */

const VALID_TYPES = new Set(['contact', 'feedback', 'contribution']);
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
const PHONE_REGEX = /^[0-9+()\-.\s]{6,20}$/;

export function sanitizeText(str) {
  if (typeof str !== 'string') return '';
  // Remove control characters, especially \r and \n (CRLF injection prevention)
  return str.replace(/[\r\n\x00-\x1F\x7F]/g, ' ').trim();
}

export function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function validateFields({ type, name, email, phone, statue_id, message }) {
  const errors = [];

  if (!type || !VALID_TYPES.has(type)) {
    errors.push('Mục đích gửi không hợp lệ (hỗ trợ: contact, feedback, contribution)');
  }

  const cleanName = sanitizeText(name);
  if (!cleanName || cleanName.length < 2 || cleanName.length > 100) {
    errors.push('Họ và tên bắt buộc, từ 2 đến 100 ký tự');
  }

  const cleanEmail = sanitizeText(email);
  if (!cleanEmail || cleanEmail.length > 100 || !EMAIL_REGEX.test(cleanEmail)) {
    errors.push('Địa chỉ email không hợp lệ (tối đa 100 ký tự)');
  }

  let cleanPhone = null;
  if (phone && phone.trim()) {
    cleanPhone = sanitizeText(phone);
    if (!PHONE_REGEX.test(cleanPhone)) {
      errors.push('Số điện thoại không đúng định dạng');
    }
  }

  let cleanStatueId = null;
  if (statue_id && statue_id.trim()) {
    cleanStatueId = sanitizeText(statue_id).slice(0, 50);
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10 || message.length > 5000) {
    errors.push('Nội dung tin nhắn bắt buộc, từ 10 đến 5000 ký tự');
  }

  return {
    valid: errors.length === 0,
    errors,
    sanitized: {
      type,
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      statue_id: cleanStatueId,
      message: message ? message.trim() : '',
    },
  };
}

export const MAX_FILES_COUNT = 3;
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
export const MAX_TOTAL_SIZE = 15 * 1024 * 1024; // 15 MB

export async function validateMagicBytes(file) {
  if (!file || typeof file.slice !== 'function') {
    return { valid: false, mime: null, error: 'Tệp không hợp lệ' };
  }

  const buffer = await file.slice(0, 16).arrayBuffer();
  const bytes = new Uint8Array(buffer);

  if (bytes.length < 4) {
    return { valid: false, mime: null, error: 'Tệp rỗng hoặc hỏng' };
  }

  // JPEG: FF D8 FF
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return { valid: true, mime: 'image/jpeg' };
  }

  // PNG: 89 50 4E 47 0D 0A 1A 0A
  if (
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47 &&
    bytes[4] === 0x0d &&
    bytes[5] === 0x0a &&
    bytes[6] === 0x1a &&
    bytes[7] === 0x0a
  ) {
    return { valid: true, mime: 'image/png' };
  }

  // WebP: 'RIFF' .... 'WEBP'
  if (
    bytes[0] === 0x52 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x46 &&
    bytes.length >= 12 &&
    bytes[8] === 0x57 &&
    bytes[9] === 0x45 &&
    bytes[10] === 0x42 &&
    bytes[11] === 0x50
  ) {
    return { valid: true, mime: 'image/webp' };
  }

  // PDF: %PDF (25 50 44 46)
  if (bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46) {
    return { valid: true, mime: 'application/pdf' };
  }

  return {
    valid: false,
    mime: null,
    error: `Định dạng tệp "${file.name || 'không rõ'}" không được hỗ trợ (chỉ hỗ trợ JPG, PNG, WebP, PDF)`,
  };
}

export async function validateFiles(files) {
  if (!files || files.length === 0) {
    return { valid: true, verifiedFiles: [] };
  }

  if (files.length > MAX_FILES_COUNT) {
    return {
      valid: false,
      error: `Chỉ được đính kèm tối đa ${MAX_FILES_COUNT} tệp (bạn đã chọn ${files.length} tệp)`,
    };
  }

  let totalSize = 0;
  const verifiedFiles = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (!file || !file.size) continue;

    if (file.size > MAX_FILE_SIZE) {
      return {
        valid: false,
        error: `Tệp "${file.name}" vượt quá dung lượng tối đa 5 MB (${(file.size / (1024 * 1024)).toFixed(2)} MB)`,
      };
    }

    totalSize += file.size;
    if (totalSize > MAX_TOTAL_SIZE) {
      return {
        valid: false,
        error: `Tổng dung lượng các tệp vượt quá giới hạn 15 MB`,
      };
    }

    const magicCheck = await validateMagicBytes(file);
    if (!magicCheck.valid) {
      return {
        valid: false,
        error: magicCheck.error,
      };
    }

    verifiedFiles.push({
      file,
      mime: magicCheck.mime,
      originalName: sanitizeText(file.name) || `file-${i + 1}`,
      size: file.size,
    });
  }

  return { valid: true, verifiedFiles };
}
