#!/usr/bin/env node
// SINH TU DONG tu .claude/skills — dung sua tay file nay, sua ban goc roi chay: npm run sync:agents
/**
 * Liet ke khoang trong tu lieu cua tung linh dia trong src/data/statues.js.
 *
 * Dung truoc khi bat dau khao cuu de biet linh dia nao dang thieu gi, va sau khi
 * bo sung du lieu de kiem lai. Cach dem tu giong docs/marian-sites-missing-info.md
 * (4 truong van xuoi: historicalFact, architect, oralTradition, significance).
 *
 * Cach dung:
 *   node .agents/skills/marian-research/scripts/site-gaps.mjs
 *   node .agents/skills/marian-research/scripts/site-gaps.mjs --id honchong
 *   node .agents/skills/marian-research/scripts/site-gaps.mjs --json
 */

import { MARIAN_STATUES_DATA, CONSTELLATION_VERSIONS } from '../../../../src/data/statues.js';

const PROSE_FIELDS = ['historicalFact', 'architect', 'oralTradition', 'significance'];
const THIN_THRESHOLD = 300; // so tu muc tieu cho mot trang chi tiet canh tranh duoc

const args = process.argv.slice(2);
const asJson = args.includes('--json');
const idFlag = args.indexOf('--id');
const onlyId = idFlag !== -1 ? args[idFlag + 1] : null;

const countWords = (text) =>
  typeof text === 'string' ? text.trim().split(/\s+/).filter(Boolean).length : 0;

const isSearchLink = (url) => {
  try {
    const u = new URL(url);
    return /(^|\.)google\.|(^|\.)bing\.|(^|\.)duckduckgo\./.test(u.hostname) || u.pathname === '/search';
  } catch {
    return false;
  }
};

function analyse(s) {
  const words = Object.fromEntries(PROSE_FIELDS.map((f) => [f, countWords(s[f])]));
  const totalWords = Object.values(words).reduce((a, b) => a + b, 0);
  const sources = Array.isArray(s.sources) ? s.sources : [];
  const searchSources = sources.filter((src) => isSearchLink(src.url));
  const directSources = sources.filter((src) => !isSearchLink(src.url));

  const inVersions = Object.keys(CONSTELLATION_VERSIONS).filter((v) =>
    CONSTELLATION_VERSIONS[v].nodes.includes(s.id)
  );

  const missing = [];
  if (!s.realImage) missing.push('anh thuc dia');
  if (directSources.length === 0) missing.push('nguon truc tiep (chi co link tim kiem)');
  else if (directSources.length < 2) missing.push('nguon truc tiep thu hai');
  if (sources.length < 2) missing.push('KHONG DAT toi thieu 2 nguon');
  if (totalWords < THIN_THRESHOLD) missing.push(`noi dung mong (${totalWords}/${THIN_THRESHOLD} tu)`);
  PROSE_FIELDS.forEach((f) => {
    if (!s[f]) missing.push(`thieu truong ${f}`);
  });
  if (s.realImage && !s.realImageCaption) missing.push('thieu realImageCaption');
  const galleryCount = Array.isArray(s.galleryImages) ? s.galleryImages.length : 0;
  if (s.realImage && galleryCount === 0) missing.push('chua co anh phu (galleryImages)');

  // Diem uu tien: cang cao cang nen khao cuu truoc.
  const priority =
    (s.realImage ? 0 : 40) +
    (directSources.length === 0 ? 30 : directSources.length < 2 ? 12 : 0) +
    Math.max(0, Math.round((THIN_THRESHOLD - totalWords) / 10));

  return {
    id: s.id,
    name: s.name,
    region: s.region,
    diocese: s.diocese,
    year: s.year,
    hasPhoto: Boolean(s.realImage),
    galleryCount,
    words,
    totalWords,
    sourceCount: sources.length,
    directSourceCount: directSources.length,
    searchSourceCount: searchSources.length,
    constellations: inVersions,
    missing,
    priority,
  };
}

let rows = MARIAN_STATUES_DATA.map(analyse).sort((a, b) => b.priority - a.priority);
if (onlyId) rows = rows.filter((r) => r.id === onlyId);

if (onlyId && rows.length === 0) {
  console.error(`Khong tim thay linh dia co id "${onlyId}" trong src/data/statues.js.`);
  console.error('=> Day la linh dia MOI. Khao cuu tu dau, chua co ban ghi de doi chieu.');
  process.exit(2);
}

if (asJson) {
  console.log(JSON.stringify(rows, null, 2));
  process.exit(0);
}

console.log(`TONG SO LINH DIA: ${MARIAN_STATUES_DATA.length}`);
console.log(`Co anh thuc dia: ${MARIAN_STATUES_DATA.filter((s) => s.realImage).length}`);
console.log(`Muc tieu noi dung: ${THIN_THRESHOLD} tu / linh dia\n`);
console.log('UU TIEN KHAO CUU (diem cao = thieu nhieu nhat):\n');

for (const r of rows) {
  console.log(`[${String(r.priority).padStart(3)}] ${r.id} — ${r.name}`);
  console.log(`      ${r.region} · ${r.diocese} · ${r.year}`);
  console.log(
    `      anh: ${r.hasPhoto ? 'co' : 'CHUA CO'} (anh phu: ${r.galleryCount}) | nguon: ${r.directSourceCount} truc tiep / ${r.searchSourceCount} tim kiem | van xuoi: ${r.totalWords} tu ` +
      `(ls ${r.words.historicalFact}, kt ${r.words.architect}, tt ${r.words.oralTradition}, gt ${r.words.significance})`
  );
  if (r.constellations.length) console.log(`      chom sao: ${r.constellations.join(', ')}`);
  if (r.missing.length) console.log(`      can bo sung: ${r.missing.join('; ')}`);
  console.log('');
}
