/**
 * Automated Test Suite for ducme.vn Feedback Worker API
 * Run against running wrangler dev (default: http://localhost:8787)
 */

const BASE_URL = process.env.TEST_API_URL || 'http://localhost:8787';
const DEFAULT_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
};

async function apiFetch(path, options = {}) {
  const url = `${BASE_URL}${path}`;
  const headers = {
    ...DEFAULT_HEADERS,
    ...(options.headers || {}),
  };
  return await fetch(url, {
    ...options,
    headers,
  });
}

function createDummyJpeg() {
  // Valid JPEG magic bytes: FF D8 FF E0 ...
  const bytes = new Uint8Array([0xff, 0xd8, 0xff, 0xe0, 0x00, 0x10, 0x4a, 0x46, 0x49, 0x46, 0x00]);
  return new Blob([bytes], { type: 'image/jpeg' });
}

function createFakeJpg() {
  // Spoofed file: text content disguised as jpg
  const text = 'This is not a real JPEG image file, it is plain text!';
  return new Blob([text], { type: 'image/jpeg' });
}

function createOversizedBlob() {
  // 5.5 MB blob (> 5 MB limit)
  const size = 5.5 * 1024 * 1024;
  const chunk = new Uint8Array(size);
  chunk[0] = 0xff;
  chunk[1] = 0xd8;
  chunk[2] = 0xff;
  return new Blob([chunk], { type: 'image/jpeg' });
}

let passed = 0;
let failed = 0;

function assert(condition, testName, detail = '') {
  if (condition) {
    console.log(`  ✓ PASS: ${testName}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${testName} ${detail ? `- ${detail}` : ''}`);
    failed++;
  }
}

async function runTests() {
  console.log(`\n🧪 Bắt đầu kiểm thử Worker API tại: ${BASE_URL}\n`);

  // 1. Health check
  try {
    const res = await apiFetch('/health');
    const data = await res.json();
    assert(res.status === 200 && data.status === 'ok', 'Endpoint GET /health phản hồi 200 OK');
  } catch (err) {
    assert(false, 'Endpoint GET /health phản hồi 200 OK', err.message);
  }

  // 2. Kịch bản 1: Happy path text (Gửi liên hệ chung)
  try {
    const form = new FormData();
    form.append('type', 'contact');
    form.append('name', 'Nguyễn Văn A');
    form.append('email', 'nguyenvana@example.com');
    form.append('phone', '0901234567');
    form.append('message', 'Xin chào, đây là tin nhắn liên hệ thử nghiệm từ test script.');

    const res = await apiFetch('/api/submissions', {
      method: 'POST',
      headers: {
        'X-Turnstile-Token': 'dev-bypass',
      },
      body: form,
    });
    const data = await res.json();
    assert(
      res.status === 200 && data.success === true && typeof data.id === 'string',
      'Kịch bản 1: Gửi liên hệ thuần văn bản thành công (200 OK, có UUID)',
      JSON.stringify(data)
    );
  } catch (err) {
    assert(false, 'Kịch bản 1: Gửi liên hệ thuần văn bản thành công', err.message);
  }

  // 3. Kịch bản 2: Happy path file (Gửi kèm tệp JPEG hợp lệ có magic bytes)
  try {
    const form = new FormData();
    form.append('type', 'contribution');
    form.append('name', 'Trần Thị B');
    form.append('email', 'tranthib@example.com');
    form.append('statue_id', 'lavang');
    form.append('message', 'Đóng góp ảnh lưu trữ tư liệu La Vang từ đoàn hành hương 1960.');
    form.append('files', createDummyJpeg(), 'lavang-1960.jpg');

    const res = await apiFetch('/api/submissions', {
      method: 'POST',
      headers: {
        'X-Turnstile-Token': 'dev-bypass',
      },
      body: form,
    });
    const data = await res.json();
    assert(
      res.status === 200 && data.success === true && typeof data.id === 'string',
      'Kịch bản 2: Gửi đóng góp kèm tệp ảnh JPEG hợp lệ thành công (200 OK)',
      JSON.stringify(data)
    );
  } catch (err) {
    assert(false, 'Kịch bản 2: Gửi đóng góp kèm tệp ảnh JPEG hợp lệ thành công', err.message);
  }

  // 4. Kịch bản 3: Chống spoofing file (File .jpg nhưng nội dung văn bản giả mạo)
  try {
    const form = new FormData();
    form.append('type', 'feedback');
    form.append('name', 'Lê Văn C');
    form.append('email', 'levanc@example.com');
    form.append('message', 'Góp ý điều chỉnh thông tin kèm file giả mạo.');
    form.append('files', createFakeJpg(), 'fake-image.jpg');

    const res = await apiFetch('/api/submissions', {
      method: 'POST',
      headers: {
        'X-Turnstile-Token': 'dev-bypass',
      },
      body: form,
    });
    const data = await res.json();
    assert(
      res.status === 400 && data.success === false,
      'Kịch bản 3: Chặn file giả mạo đuôi .jpg sai magic bytes (400 Bad Request)',
      JSON.stringify(data)
    );
  } catch (err) {
    assert(false, 'Kịch bản 3: Chặn file giả mạo đuôi .jpg sai magic bytes', err.message);
  }

  // 5. Kịch bản 4a: Vượt quá số lượng file (4 files > 3)
  try {
    const form = new FormData();
    form.append('type', 'contribution');
    form.append('name', 'Phạm Thị D');
    form.append('email', 'phamthid@example.com');
    form.append('message', 'Gửi quá số lượng 3 tệp cho phép.');
    form.append('files', createDummyJpeg(), 'img1.jpg');
    form.append('files', createDummyJpeg(), 'img2.jpg');
    form.append('files', createDummyJpeg(), 'img3.jpg');
    form.append('files', createDummyJpeg(), 'img4.jpg');

    const res = await apiFetch('/api/submissions', {
      method: 'POST',
      headers: {
        'X-Turnstile-Token': 'dev-bypass',
      },
      body: form,
    });
    const data = await res.json();
    assert(
      res.status === 400 && data.success === false,
      'Kịch bản 4a: Chặn khi gửi quá 3 tệp tin (400 Bad Request)',
      JSON.stringify(data)
    );
  } catch (err) {
    assert(false, 'Kịch bản 4a: Chặn khi gửi quá 3 tệp tin', err.message);
  }

  // 6. Kịch bản 4b: Tệp vượt quá 5 MB
  try {
    const form = new FormData();
    form.append('type', 'contribution');
    form.append('name', 'Hoàng Văn E');
    form.append('email', 'hoangvane@example.com');
    form.append('message', 'Gửi tệp dung lượng lớn hơn 5 MB.');
    form.append('files', createOversizedBlob(), 'huge.jpg');

    const res = await apiFetch('/api/submissions', {
      method: 'POST',
      headers: {
        'X-Turnstile-Token': 'dev-bypass',
      },
      body: form,
    });
    const data = await res.json();
    assert(
      res.status === 400 && data.success === false,
      'Kịch bản 4b: Chặn tệp tin vượt quá 5 MB (400 Bad Request)',
      JSON.stringify(data)
    );
  } catch (err) {
    assert(false, 'Kịch bản 4b: Chặn tệp tin vượt quá 5 MB', err.message);
  }

  // 7. Kịch bản 5: Validation trường dữ liệu thiếu/sai
  try {
    const form = new FormData();
    form.append('type', 'invalid_type');
    form.append('name', '');
    form.append('email', 'not-an-email');
    form.append('message', 'short');

    const res = await apiFetch('/api/submissions', {
      method: 'POST',
      headers: {
        'X-Turnstile-Token': 'dev-bypass',
      },
      body: form,
    });
    const data = await res.json();
    assert(
      res.status === 400 && data.success === false && data.errors?.length >= 3,
      'Kịch bản 5: Chặn biểu mẫu thiếu trường bắt buộc hoặc sai định dạng (400 Bad Request)',
      JSON.stringify(data)
    );
  } catch (err) {
    assert(false, 'Kịch bản 5: Chặn biểu mẫu thiếu trường bắt buộc hoặc sai định dạng', err.message);
  }

  // 8. Kịch bản 6: CORS preflight check
  try {
    const res = await apiFetch('/api/submissions', {
      method: 'OPTIONS',
      headers: {
        'Origin': 'https://ducme.vn',
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type, X-Turnstile-Token',
      },
    });
    const allowOrigin = res.headers.get('Access-Control-Allow-Origin');
    assert(
      res.status === 204 && allowOrigin === 'https://ducme.vn',
      'Kịch bản 6: CORS preflight OPTIONS trả về 204 và Access-Control-Allow-Origin chuẩn xác'
    );
  } catch (err) {
    assert(false, 'Kịch bản 6: CORS preflight OPTIONS', err.message);
  }

  console.log(`\n========================================`);
  console.log(`KẾT QUẢ: ${passed} PASS, ${failed} FAIL`);
  console.log(`========================================\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error('Fatal test runner error:', err);
  process.exit(1);
});
