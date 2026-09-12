#!/usr/bin/env node
/**
 * Kiem tra mot ban ghi linh dia de xuat (JSON) TRUOC khi chen vao src/data/statues.js.
 *
 * Ap dung dung cac rang buoc ma tests/test_data_and_integrity.js se kiem, cong them
 * cac quy chuan trong CONTRIBUTING.md muc 3. Muc dich la phat hien loi tu ban nhap
 * bao cao khao cuu, khong phai cho sua du lieu da nam trong repo.
 *
 * Nhan duoc ca hai dang dau vao:
 *   - ho so khao cuu day du (khao-cuu.json, schema ducme.khao-cuu/v1) -> tu lay phan "record"
 *   - mot ban ghi tran, hoac mang ban ghi
 *
 * Cach dung:
 *   node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/<id>/khao-cuu.json
 *   node .claude/skills/marian-publish/scripts/validate-record.mjs <file> --allow-existing-id
 *
 * Ma thoat: 0 = dat (co the con canh bao), 1 = co loi chan.
 */

import fs from 'node:fs';
import path from 'node:path';

import { MARIAN_STATUES_DATA, CONSTELLATION_VERSIONS } from '../../../../src/data/statues.js';
import { REGION_ORDER } from '../../../../src/config/site.js';

const ROOT = path.resolve(import.meta.dirname, '..', '..', '..', '..');
const PROSE_FIELDS = ['historicalFact', 'architect', 'oralTradition', 'significance'];
const REQUIRED_STRINGS = ['id', 'name', 'title', 'location', 'region', 'diocese'];
const DIEM_IDS = ['phuonghoang', 'giangson', 'trinhphong', 'thacmo', 'tapao'];

const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith('--'));
const allowExistingId = args.includes('--allow-existing-id');

if (!file) {
  console.error('Thieu duong dan file JSON. Vi du: ... validate-record.mjs docs/khao-cuu/nuicui/khao-cuu.json');
  process.exit(1);
}

let payload;
try {
  payload = JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'));
} catch (e) {
  console.error(`Khong doc duoc JSON: ${e.message}`);
  process.exit(1);
}

// Ho so khao cuu boc ban ghi trong truong "record"; ban ghi tran thi dung nguyen.
const unwrap = (x) => (x && typeof x === 'object' && x.record && x.schema ? x.record : x);
const records = (Array.isArray(payload) ? payload : [payload]).map(unwrap);
const existingIds = new Set(MARIAN_STATUES_DATA.map((s) => s.id));

const errors = [];
const warnings = [];
const err = (id, m) => errors.push(`[${id}] ${m}`);
const warn = (id, m) => warnings.push(`[${id}] ${m}`);

const countWords = (t) => (typeof t === 'string' ? t.trim().split(/\s+/).filter(Boolean).length : 0);
const isSearchLink = (url) => {
  try {
    const u = new URL(url);
    return /(^|\.)google\.|(^|\.)bing\.|(^|\.)duckduckgo\./.test(u.hostname) || u.pathname === '/search';
  } catch {
    return false;
  }
};

for (const r of records) {
  const id = r.id || '(khong co id)';

  // --- Dinh danh ---
  if (!/^[a-z0-9]+$/.test(r.id || '')) {
    err(id, 'id phai viet thuong, khong dau, khong khoang trang, chi chu cai va so');
  }
  if (existingIds.has(r.id) && !allowExistingId) {
    err(id, 'id da ton tai trong src/data/statues.js. Neu day la ban cap nhat, chay lai voi --allow-existing-id');
  }
  if (!existingIds.has(r.id) && allowExistingId) {
    warn(id, 'dung --allow-existing-id nhung id chua ton tai — day thuc ra la ban ghi moi');
  }

  // --- Truong bat buoc ---
  for (const f of REQUIRED_STRINGS) {
    if (typeof r[f] !== 'string' || r[f].trim().length === 0) err(id, `thieu truong "${f}"`);
  }
  if (r.region && !REGION_ORDER.includes(r.region)) {
    err(id, `region "${r.region}" khong nam trong REGION_ORDER (src/config/site.js): ${REGION_ORDER.join(' | ')}`);
  }

  // --- Nien dai ---
  if (!Number.isInteger(r.year) || r.year < 1700 || r.year > 2026) {
    err(id, `year phai la so nguyen trong khoang 1700–2026 (hien: ${r.year})`);
  }

  // --- Toa do ---
  if (typeof r.lat !== 'number' || r.lat < 8.5 || r.lat > 23.5) {
    err(id, `lat phai nam trong lanh tho VN 8.5–23.5 (hien: ${r.lat})`);
  }
  if (typeof r.lng !== 'number' || r.lng < 102.0 || r.lng > 110.0) {
    err(id, `lng phai nam trong lanh tho VN 102.0–110.0 (hien: ${r.lng})`);
  }
  for (const k of ['lat', 'lng']) {
    const dec = String(r[k]).split('.')[1]?.length ?? 0;
    if (dec > 6) warn(id, `${k} co ${dec} chu so thap phan — lam tron 4 chu so la du (~11m)`);
    if (dec < 3) warn(id, `${k} chi co ${dec} chu so thap phan — do chinh xac qua tho cho mot linh dai`);
  }
  const twin = MARIAN_STATUES_DATA.find(
    (s) => s.id !== r.id && Math.abs(s.lat - r.lat) < 0.01 && Math.abs(s.lng - r.lng) < 0.01
  );
  if (twin) warn(id, `toa do gan trung voi "${twin.id}" (${twin.name}) — kiem tra co bi trung ban ghi khong`);

  // --- Van xuoi ---
  let total = 0;
  for (const f of PROSE_FIELDS) {
    const n = countWords(r[f]);
    total += n;
    if (n === 0) err(id, `thieu truong van xuoi "${f}"`);
    else if (n < 15) warn(id, `truong "${f}" chi co ${n} tu — qua ngan de hien thi tren trang chi tiet`);
  }
  if (total < 300) warn(id, `tong van xuoi ${total} tu, duoi muc tieu 300 tu cua du an`);
  if (r.historicalFact && /có lẽ|có thể là|nghe nói|tương truyền|người ta kể/i.test(r.historicalFact)) {
    err(id, 'historicalFact chua ngon ngu phong doan/truyen mieng — chuyen phan do sang oralTradition');
  }

  // --- Anh ---
  if (r.realImage !== null && r.realImage !== undefined) {
    if (!/^assets\/real_photos\/[a-z0-9]+\.(jpg|jpeg|png)$/.test(r.realImage)) {
      err(id, `realImage phai co dang "assets/real_photos/<id>.jpg" (hien: ${r.realImage})`);
    }
    const abs = path.join(ROOT, 'src', r.realImage || '');
    if (!fs.existsSync(abs)) err(id, `file anh khong ton tai: src/${r.realImage}`);
    if (!r.realImageCaption || r.realImageCaption.length < 10) {
      err(id, 'co realImage thi bat buoc co realImageCaption ghi ro noi chup va nguon (giay phep neu biet, khong bat buoc)');
    } else if (!/nguồn|Nguồn|CC|Public Domain|Wikimedia/i.test(r.realImageCaption)) {
      warn(id, 'realImageCaption nen ghi ro nguon anh (vi du "Nguon: ten trang/bai viet") — giay phep khong bat buoc');
    }
  } else if (!('realImage' in r)) {
    err(id, 'thieu truong realImage (dat null neu chua co anh xac thuc — khong duoc bo trong)');
  }

  // --- Anh phu (galleryImages) ---
  if (!Array.isArray(r.galleryImages)) {
    err(id, 'thieu truong galleryImages (phai la mang, de [] neu chua co anh phu nao)');
  } else {
    r.galleryImages.forEach((item, i) => {
      const tag = `galleryImages[${i}]`;
      if (!/^assets\/real_photos\/[a-z0-9]+-[0-9]+\.(jpg|jpeg|png)$/.test(item?.image || '')) {
        err(id, `${tag}.image phai co dang "assets/real_photos/<id>-<so-thu-tu>.jpg" (hien: ${item?.image})`);
      } else {
        const abs = path.join(ROOT, 'src', item.image);
        if (!fs.existsSync(abs)) err(id, `file anh khong ton tai: src/${item.image}`);
      }
      if (!item?.caption || item.caption.length < 10) {
        err(id, `${tag}.caption bat buoc, ghi ro noi chup va nguon (giay phep neu biet, khong bat buoc)`);
      } else if (!/nguồn|Nguồn|CC|Public Domain|Wikimedia/i.test(item.caption)) {
        warn(id, `${tag}.caption nen ghi ro nguon anh (vi du "Nguon: ten trang/bai viet") — giay phep khong bat buoc`);
      }
    });
  }

  // --- Nguon ---
  const sources = Array.isArray(r.sources) ? r.sources : [];
  if (sources.length < 2) err(id, `phai co it nhat 2 nguon (hien: ${sources.length})`);
  let direct = 0;
  sources.forEach((src, i) => {
    const tag = `sources[${i}]`;
    if (typeof src?.title !== 'string' || src.title.length <= 5) err(id, `${tag}.title phai dai hon 5 ky tu`);
    if (typeof src?.url !== 'string' || !src.url.startsWith('https://')) {
      err(id, `${tag}.url phai bat dau bang https:// (hien: ${src?.url})`);
      return;
    }
    try {
      const u = new URL(src.url);
      if ((u.pathname === '/' || u.pathname === '') && !u.search) {
        err(id, `${tag}.url la root domain tran — phai tro toi bai viet hoac truy van cu the`);
      }
    } catch (e) {
      err(id, `${tag}.url sai cu phap: ${e.message}`);
    }
    if (isSearchLink(src.url)) warn(id, `${tag} la link tim kiem, khong phai bai viet truc tiep`);
    else direct++;
  });
  if (sources.length >= 2 && direct === 0) {
    err(id, 'khong co nguon truc tiep hop le nao (deu la link tim kiem hoac URL sai) — can it nhat 1 bai viet/trang truc tiep');
  }
  if (direct === 1) warn(id, 'chi co 1 nguon truc tiep — nen tim them 1 nguon doc lap nua');

  // --- Chom sao & co Diem ---
  if (typeof r.diemStatue5 !== 'boolean') err(id, 'thieu co diemStatue5 (true/false)');
  if (r.diemStatue5 === true && !DIEM_IDS.includes(r.id)) {
    err(id, `diemStatue5 chi dung cho dung 5 tuong: ${DIEM_IDS.join(', ')}. Dat true se lam vo test muc 2`);
  }
  const cr = r.constellationRole;
  if (!cr || typeof cr !== 'object') {
    err(id, 'thieu constellationRole (object gom v1, v2, v3, v4 — dat null cho phien ban khong tham gia)');
  } else {
    for (const v of ['v1', 'v2', 'v3', 'v4']) {
      if (!(v in cr)) err(id, `constellationRole thieu khoa "${v}" (dat null neu khong tham gia)`);
      else if (cr[v] !== null) {
        for (const k of ['star', 'role', 'code']) {
          if (typeof cr[v][k] !== 'string' || !cr[v][k]) err(id, `constellationRole.${v}.${k} phai la chuoi khong rong`);
        }
        if (['v1', 'v2'].includes(v) && !CONSTELLATION_VERSIONS[v].nodes.includes(r.id)) {
          warn(
            id,
            `constellationRole.${v} khac null: V1/V2 bi test chot cung o 7 node. Phai sua CONSTELLATION_VERSIONS tuong ung ` +
              'va chi lam khi bao cao kiem chung cho phep ro rang'
          );
        }
      }
    }
  }

  // --- Truong tuy chon ---
  if (!r.elevation) warn(id, 'thieu elevation — trang chi tiet se hien thieu mot dong');
  if (!r.significance) warn(id, 'thieu significance');
}

const label = records.length > 1 ? `${records.length} ban ghi` : records[0]?.id || 'ban ghi';
console.log(`KIEM TRA: ${label} (${file})\n`);

if (warnings.length) {
  console.log(`CANH BAO (${warnings.length}) — khong chan, nhung nen xu ly:`);
  warnings.forEach((w) => console.log(`  ! ${w}`));
  console.log('');
}
if (errors.length) {
  console.log(`LOI CHAN (${errors.length}) — npm test se that bai neu chen nguyen trang:`);
  errors.forEach((e) => console.log(`  x ${e}`));
  console.log('\n=> KHONG DAT. Sua het loi chan roi chay lai.');
  process.exit(1);
}

console.log('=> DAT toan bo rang buoc bat buoc. Sau khi chen vao src/data/statues.js, chay "npm test" de xac nhan lai.');
