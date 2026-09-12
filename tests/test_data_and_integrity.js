/**
 * Test Suite: Xác thực tính toàn vẹn của Dữ liệu Tượng Đức Mẹ & Cấu trúc Chòm Sao Bắc Đẩu
 */

import fs from 'node:fs';
import path from 'node:path';

import { MARIAN_STATUES_DATA, CONSTELLATION_VERSIONS } from '../src/data/statues.js';

const statues = MARIAN_STATUES_DATA;
const versions = CONSTELLATION_VERSIONS;

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✓ PASS: ${message}`);
  } else {
    failed++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log(`--- 1. KIỂM TRA BỘ DỮ LIỆU TƯỢNG ĐỨC MẸ (${statues.length} TƯỢNG) ---`);
const MIN_STATUE_COUNT = 18;
assert(
  Array.isArray(statues) && statues.length >= MIN_STATUE_COUNT,
  `Số lượng tượng phải >= ${MIN_STATUE_COUNT} (hiện có: ${statues.length})`
);

const idSet = new Set();
statues.forEach(s => {
  assert(!idSet.has(s.id), `ID "${s.id}" phải là duy nhất`);
  idSet.add(s.id);

  assert(s.name && s.name.length > 0, `Tượng "${s.id}" phải có tên`);
  assert(s.year >= 1700 && s.year <= 2026, `Tượng "${s.id}" có năm thành lập hợp lệ: ${s.year}`);
  
  // Tọa độ Việt Nam: Vĩ độ khoảng 8.5° đến 23.5° Bắc, Kinh độ 102.0° đến 110.0° Đông
  assert(s.lat >= 8.5 && s.lat <= 23.5, `Tượng "${s.name}" có vĩ độ trong lãnh thổ VN: ${s.lat}`);
  assert(s.lng >= 102.0 && s.lng <= 110.0, `Tượng "${s.name}" có kinh độ trong lãnh thổ VN: ${s.lng}`);

  // Kiểm tra file ảnh thực tế tồn tại nếu có
  if (s.realImage) {
    const imgPath = path.join(import.meta.dirname, '..', 'src', s.realImage);
    assert(fs.existsSync(imgPath), `File ảnh thực tế ${s.realImage} của tượng "${s.name}" phải tồn tại`);
  }

  // Ảnh phụ (galleryImages): trường phải tồn tại (mảng, có thể rỗng khi chưa khảo cứu ảnh),
  // mỗi phần tử đã khai báo phải có caption và file thật trên đĩa.
  assert(Array.isArray(s.galleryImages), `Tượng "${s.id}" phải có trường galleryImages (mảng, có thể rỗng)`);
  (s.galleryImages || []).forEach((item, i) => {
    assert(
      typeof item?.image === 'string' && item.image.length > 0,
      `Tượng "${s.id}" galleryImages[${i}] phải có đường dẫn image`
    );
    assert(
      typeof item?.caption === 'string' && item.caption.length > 0,
      `Tượng "${s.id}" galleryImages[${i}] phải có caption ghi rõ nguồn/giấy phép`
    );
    if (item?.image) {
      const imgPath = path.join(import.meta.dirname, '..', 'src', item.image);
      assert(fs.existsSync(imgPath), `File ảnh phụ ${item.image} của tượng "${s.name}" phải tồn tại`);
    }
  });
});

console.log('\n--- 2. KIỂM TRA 5 TƯỢNG THỜI TT NGÔ ĐÌNH DIỆM (1959–1961) ---');
const diemStatues = statues.filter(s => s.diemStatue5);
assert(diemStatues.length === 5, `Phải có chính xác 5 pho tượng thời TT Ngô Đình Diệm (hiện có: ${diemStatues.length})`);

const expectedDiemIds = ['phuonghoang', 'giangson', 'trinhphong', 'thacmo', 'tapao'];
expectedDiemIds.forEach(id => {
  const found = diemStatues.find(s => s.id === id);
  assert(!!found, `Tượng thời Diệm "${id}" phải tồn tại và có cờ diemStatue5: true`);
});

console.log('\n--- 3. KIỂM TRA CÁC PHIÊN BẢN CHÒM SAO BẮC ĐẨU (V1, V2, V3, V4) ---');
const versionKeys = ['v1', 'v2', 'v3', 'v4'];
versionKeys.forEach(vKey => {
  const v = versions[vKey];
  assert(!!v, `Phiên bản "${vKey}" phải tồn tại`);
  assert(v.nodes.length > 0, `Phiên bản "${vKey}" phải có các đỉnh node`);
  assert(v.segments.length > 0, `Phiên bản "${vKey}" phải có các đoạn nối segment`);

  // Kiểm tra mọi node trong version đều tồn tại trong danh sách tượng
  v.nodes.forEach(nodeId => {
    assert(idSet.has(nodeId), `Node "${nodeId}" trong "${vKey}" phải khớp với một tượng có thật`);
  });

  // Kiểm tra mọi segment kết nối các node hợp lệ
  v.segments.forEach(([from, to]) => {
    assert(idSet.has(from) && idSet.has(to), `Đoạn nối [${from} -> ${to}] trong "${vKey}" phải hợp lệ`);
  });
});

console.log('\n--- 4. KIỂM TRA ĐẶC TÍNH THIÊN VĂN BẮC ĐẨU (V1 & V2) ---');
// V1 và V2 phải có đủ 7 ngôi sao
assert(versions.v1.nodes.length === 7, `V1 phải gồm đúng 7 ngôi sao Bắc Đẩu (hiện có: ${versions.v1.nodes.length})`);
assert(versions.v2.nodes.length === 7, `V2 phải gồm đúng 7 ngôi sao Bắc Đẩu (hiện có: ${versions.v2.nodes.length})`);
assert(versions.v1.pointerStars.length === 2, `V1 phải có 2 sao dẫn đường (The Pointers)`);
assert(versions.v1.pointerStars[0] === 'tapao' && versions.v1.pointerStars[1] === 'thacmo', `The Pointers phải là Tà Pao (Merak) và Thác Mơ (Dubhe)`);

console.log('\n--- 5. KIỂM TRA NGUỒN TÀI LIỆU THAM KHẢO (SOURCES & DEEP LINKS) ---');
statues.forEach(s => {
  assert(Array.isArray(s.sources) && s.sources.length >= 2, `Tượng "${s.name}" (${s.id}) phải có ít nhất 2 nguồn tham khảo (hiện có: ${s.sources ? s.sources.length : 0})`);
  (s.sources || []).forEach(src => {
    assert(typeof src.title === 'string' && src.title.length > 5, `Tiêu đề nguồn "${src.title}" của tượng "${s.id}" phải hợp lệ`);
    assert(typeof src.url === 'string' && src.url.startsWith('https://'), `URL nguồn "${src.url}" của tượng "${s.id}" phải là https hợp lệ`);
    
    // Đảm bảo link không phải là root domain trần
    try {
      const parsed = new URL(src.url);
      const isBareRoot = (parsed.pathname === '/' || parsed.pathname === '') && !parsed.search;
      assert(!isBareRoot, `URL nguồn "${src.url}" không được là root domain trần mà phải là bài viết hoặc query cụ thể`);
    } catch (e) {
      assert(false, `URL "${src.url}" bị lỗi cú pháp: ${e.message}`);
    }
  });
});

console.log('\n--- 6. KIỂM TRA TRANG LIÊN HỆ & CẤU HÌNH BACKEND ---');
import { NAV_ITEMS, TURNSTILE_SITE_KEY, API_BASE_URL } from '../src/config/site.js';
assert(NAV_ITEMS.some(item => item.href === '/lien-he/'), 'NAV_ITEMS phải chứa đường dẫn /lien-he/');
assert(typeof TURNSTILE_SITE_KEY === 'string' && TURNSTILE_SITE_KEY.length > 0, 'TURNSTILE_SITE_KEY phải được định nghĩa');
assert(typeof API_BASE_URL === 'string' && API_BASE_URL.startsWith('http'), 'API_BASE_URL phải được định nghĩa hợp lệ');

const contactPagePath = path.join(import.meta.dirname, '..', 'src', 'pages', 'lien-he.astro');
assert(fs.existsSync(contactPagePath), 'File trang src/pages/lien-he.astro phải tồn tại');

const workerSchemaPath = path.join(import.meta.dirname, '..', 'worker', 'schema.sql');
assert(fs.existsSync(workerSchemaPath), 'File worker/schema.sql phải tồn tại');

const workerWranglerPath = path.join(import.meta.dirname, '..', 'worker', 'wrangler.jsonc');
assert(fs.existsSync(workerWranglerPath), 'File worker/wrangler.jsonc phải tồn tại');

console.log(`\n========================================`);
console.log(`TỔNG KẾT: ${passed} PASS, ${failed} FAIL`);
console.log(`========================================`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('>>> TẤT CẢ KIỂM THỬ ĐÃ VƯỢT QUA XUẤT SẮC! <<<');
}
