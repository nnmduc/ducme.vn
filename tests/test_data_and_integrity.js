/**
 * Test Suite: Xác thực tính toàn vẹn của Dữ liệu Tượng Đức Mẹ & Cấu trúc Chòm Sao Bắc Đẩu
 */

const fs = require('fs');
const path = require('path');

// Mock window object for node environment
global.window = {};
require('../src/data/statues.js');

const statues = window.MARIAN_STATUES_DATA;
const versions = window.CONSTELLATION_VERSIONS;

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

console.log('--- 1. KIỂM TRA BỘ DỮ LIỆU TƯỢNG ĐỨC MẸ (18+ TƯỢNG) ---');
assert(Array.isArray(statues) && statues.length >= 18, `Số lượng tượng phải >= 18 (hiện có: ${statues.length})`);

const idSet = new Set();
statues.forEach(s => {
  assert(!idSet.has(s.id), `ID "${s.id}" phải là duy nhất`);
  idSet.add(s.id);

  assert(s.name && s.name.length > 0, `Tượng "${s.id}" phải có tên`);
  assert(s.year >= 1700 && s.year <= 2026, `Tượng "${s.id}" có năm thành lập hợp lệ: ${s.year}`);
  
  // Tọa độ Việt Nam: Vĩ độ khoảng 8.5° đến 23.5° Bắc, Kinh độ 102.0° đến 110.0° Đông
  assert(s.lat >= 8.5 && s.lat <= 23.5, `Tượng "${s.name}" có vĩ độ trong lãnh thổ VN: ${s.lat}`);
  assert(s.lng >= 102.0 && s.lng <= 110.0, `Tượng "${s.name}" có kinh độ trong lãnh thổ VN: ${s.lng}`);

  // Kiểm tra file ảnh tồn tại
  if (s.image) {
    const imgPath = path.join(__dirname, '..', s.image);
    assert(fs.existsSync(imgPath), `File ảnh ${s.image} của tượng "${s.name}" phải tồn tại`);
  }
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

console.log(`\n========================================`);
console.log(`TỔNG KẾT: ${passed} PASS, ${failed} FAIL`);
console.log(`========================================`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('>>> TẤT CẢ KIỂM THỬ ĐÃ VƯỢT QUA XUẤT SẮC! <<<');
}
