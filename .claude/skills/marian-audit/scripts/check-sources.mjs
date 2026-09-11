#!/usr/bin/env node
/**
 * Kiem tra tung URL nguon dan: con song khong, chuyen huong toi dau, tra ve HTML that
 * hay trang loi, va tieu de trang co lien quan toi linh dia khong.
 *
 * Goi curl de di qua proxy va CA bundle cua moi truong (fetch cua Node khong tu doc
 * HTTPS_PROXY). Khong can cai them goi nao.
 *
 * Cach dung:
 *   node .claude/skills/marian-audit/scripts/check-sources.mjs --id lavang
 *   node .claude/skills/marian-audit/scripts/check-sources.mjs --file docs/khao-cuu/nuicui/khao-cuu.json
 *   node .claude/skills/marian-audit/scripts/check-sources.mjs https://... https://... --expect "Núi Cúi"
 *
 * Ma thoat: 0 = moi URL deu truy cap duoc, 1 = co URL chet hoac loi.
 */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

import { MARIAN_STATUES_DATA } from '../../../../src/data/statues.js';

const UA = 'Mozilla/5.0 (compatible; ducme.vn-source-audit/1.0)';
const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf(name);
  return i === -1 ? null : args[i + 1];
};
const idArg = flag('--id');
const fileArg = flag('--file');
const expect = flag('--expect');
const offline = args.includes('--offline');

let sources = [];
let expectText = expect;

if (idArg) {
  const s = MARIAN_STATUES_DATA.find((x) => x.id === idArg);
  if (!s) {
    console.error(`Khong co linh dia id "${idArg}" trong src/data/statues.js`);
    process.exit(1);
  }
  sources = s.sources || [];
  expectText = expectText || s.name;
} else if (fileArg) {
  const payload = JSON.parse(fs.readFileSync(path.resolve(fileArg), 'utf8'));
  if (payload?.schema === 'ducme.khao-cuu/v1') {
    // Ho so khao cuu: kiem toan bo danh muc nguon, ke ca nguon khong dua vao du lieu.
    sources = payload.sources || [];
    expectText = expectText || payload.name;
  } else {
    const records = Array.isArray(payload) ? payload : [payload];
    sources = records.flatMap((r) => r.sources || []);
    expectText = expectText || records[0]?.name;
  }
} else {
  sources = args.filter((a) => a.startsWith('https://') || a.startsWith('http://')).map((url) => ({ title: '', url }));
}

if (sources.length === 0) {
  console.error('Khong co URL nao de kiem. Dung --id, --file hoac liet ke URL truc tiep.');
  process.exit(1);
}

// Bo dau tieng Viet de so khop tieu de de dai hon.
const deaccent = (s) =>
  (s || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();

const tmp = path.join(os.tmpdir(), `src-audit-${process.pid}.html`);
let failures = 0;
let blocked = 0;

console.log(`KIEM CHUNG ${sources.length} NGUON${expectText ? ` — tu khoa doi chieu: "${expectText}"` : ''}\n`);

for (const src of sources) {
  const res = offline ? { status: 0, stdout: '', skipped: true } : spawnSync(
    'curl',
    [
      '-sS', '-L', '--max-time', '30', '--retry', '1',
      '-A', UA,
      '-o', tmp,
      '-w', '%{http_code}\t%{url_effective}\t%{content_type}\t%{size_download}\t%{num_redirects}',
      src.url,
    ],
    { encoding: 'utf8' }
  );

  const flags = [];
  let status = 'LOI';
  let title = '';
  let blockedByPolicy = false;

  if (offline) {
    status = 'CHUA GOI MANG';
  } else if (res.status !== 0) {
    const msg = (res.stderr || '').trim().split('\n')[0];
    if (/CONNECT tunnel failed, response (403|407)/.test(msg)) {
      blockedByPolicy = true;
      status = 'PROXY CHAN';
      flags.push('egress cua phien lam viec chan host nay — KHONG ket luan la nguon chet.');
      flags.push('Kiem lai bang cong cu WebFetch/WebSearch roi ghi ket qua vao bao cao kiem chung.');
    } else {
      failures++;
      flags.push(`curl loi: ${msg}`);
    }
  } else {
    const [code, finalUrl, ctype, size, redirects] = (res.stdout || '').split('\t');
    const body = fs.existsSync(tmp) ? fs.readFileSync(tmp, 'utf8').slice(0, 400000) : '';
    title = (body.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '').replace(/\s+/g, ' ').trim().slice(0, 120);

    const codeNum = Number(code);
    if (codeNum >= 200 && codeNum < 300) status = 'OK';
    else if (codeNum >= 300 && codeNum < 400) status = 'CHUYEN HUONG';
    else status = `CHET ${code}`;

    if (codeNum >= 400 || codeNum === 0) failures++;
    if (Number(redirects) > 0) flags.push(`chuyen huong ${redirects} lan -> ${finalUrl}`);
    if (ctype && !/html|xml|pdf|text/i.test(ctype)) flags.push(`content-type la ${ctype}`);
    if (Number(size) < 1500) flags.push(`trang rat nhe (${size} byte) — co the la trang loi hoac chan bot`);
    if (/404|not found|khong tim thay|trang khong ton tai/i.test(deaccent(title))) {
      flags.push('tieu de trang bao 404 du ma tra ve 200');
      failures++;
    }
    if (expectText) {
      const key = deaccent(expectText).replace(/^duc me\s+/, '');
      const haystack = deaccent(title + ' ' + body.slice(0, 200000));
      if (!haystack.includes(key)) flags.push(`KHONG thay tu khoa "${expectText}" trong trang — nguon co the khong lien quan`);
    }
  }

  try {
    const u = new URL(src.url);
    if (!src.url.startsWith('https://')) flags.push('khong phai https');
    if ((u.pathname === '/' || u.pathname === '') && !u.search) flags.push('root domain tran — vi pham quy chuan trich dan');
    if (/(^|\.)google\.|(^|\.)bing\.|(^|\.)duckduckgo\./.test(u.hostname)) {
      flags.push('chi la link tim kiem, khong phai bai viet truc tiep');
    }
    if (/(^|\.)facebook\.com|(^|\.)blogspot\.|(^|\.)wordpress\.com|(^|\.)tiktok\./.test(u.hostname)) {
      flags.push('nguon mang xa hoi/blog ca nhan — chi dung lam manh moi, khong lam nguon chinh');
    }
  } catch {
    flags.push('URL sai cu phap');
    failures++;
  }

  if (blockedByPolicy) blocked++;

  console.log(`${status.padEnd(14)} ${src.code ? `[${src.code}] ` : ''}${src.url}`);
  if (src.title) console.log(`               nhan trong du lieu: ${src.title}`);
  if (title) console.log(`               tieu de that:       ${title}`);
  flags.forEach((f) => console.log(`               ! ${f}`));
  console.log('');
}

fs.rmSync(tmp, { force: true });

if (blocked > 0) {
  console.log(
    `LUU Y: ${blocked} nguon bi chan boi chinh sach egress cua phien lam viec, khong phai loi cua nguon.\n` +
      'Phai kiem lai tung nguon do bang WebFetch/WebSearch truoc khi ket luan.\n'
  );
}
if (failures > 0) {
  console.log(`=> ${failures} nguon KHONG truy cap duoc. Bao cao khong the ket luan "AP DUNG" khi con nguon chet.`);
  process.exit(1);
}
if (offline) {
  console.log('=> Chi moi kiem cau truc URL (--offline). Con phai kiem noi dung that bang WebFetch.');
  process.exit(0);
}
console.log('=> Cac nguon goi duoc deu song. Van phai doc noi dung de xac nhan nguon THUC SU chung minh luan diem.');
