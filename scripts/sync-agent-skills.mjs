#!/usr/bin/env node
/**
 * Sinh ban sao skill cho Antigravity tu ban goc cua Claude Code.
 *
 * Chi co MOT ban goc duy nhat: `.claude/skills/`. Thu muc `.agents/skills/` la ban sinh ra,
 * khac ban goc dung mot thu: duong dan lenh trong tai lieu tro ve `.agents/skills/` de nguoi
 * dung Antigravity copy-paste chay duoc ngay.
 *
 * Dung sua tay bat cu file nao trong `.agents/skills/` — sua ban goc roi chay lai lenh nay.
 *
 * Cach dung:
 *   node scripts/sync-agent-skills.mjs           # sinh lai toan bo ban sao
 *   node scripts/sync-agent-skills.mjs --check   # chi kiem, thoat 1 neu lech (dung cho CI)
 *   node scripts/sync-agent-skills.mjs --quiet   # chi in dong tong ket
 *
 * Ma thoat: 0 = dong bo, 1 = co lech (o che do --check) hoac loi.
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, '.claude', 'skills');
const DEST = path.join(ROOT, '.agents', 'skills');

/** Chi doi duong dan CO dau "/" theo sau — de cac cau van nhac ten thu muc goc giu nguyen. */
const PATH_FROM = '.claude/skills/';
const PATH_TO = '.agents/skills/';

const BANNER = 'SINH TU DONG tu .claude/skills — dung sua tay file nay, sua ban goc roi chay: npm run sync:agents';

const TEXT_EXT = new Set(['.md', '.mjs', '.js', '.json', '.txt', '.yml', '.yaml']);

const flags = new Set(process.argv.slice(2));
const checkOnly = flags.has('--check');
const quiet = flags.has('--quiet');

/** Liet ke moi file (duong dan tuong doi) trong mot cay thu muc. */
function walk(dir, base = dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full, base);
    return [path.relative(base, full)];
  });
}

/**
 * Chen dong banner vao dung cho hop le cua tung dinh dang:
 * - markdown: sau khoi frontmatter (chen truoc se lam hong frontmatter)
 * - javascript: sau dong shebang
 * - json: khong chen duoc, bo qua
 */
function withBanner(content, ext) {
  if (ext === '.json') return content;

  if (ext === '.md') {
    const fm = content.match(/^---\n[\s\S]*?\n---\n/);
    const comment = `<!-- ${BANNER} -->\n`;
    if (fm) return `${fm[0]}\n${comment}${content.slice(fm[0].length).replace(/^\n/, '')}`;
    return `${comment}\n${content}`;
  }

  const comment = `// ${BANNER}\n`;
  const shebang = content.match(/^#![^\n]*\n/);
  if (shebang) return `${shebang[0]}${comment}${content.slice(shebang[0].length)}`;
  return `${comment}${content}`;
}

/** Don thu muc rong con lai sau khi xoa file thua. */
function pruneEmptyDirs(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) pruneEmptyDirs(path.join(dir, entry.name));
  }
  if (dir !== DEST && fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
}

function render(srcFile) {
  const ext = path.extname(srcFile);
  if (!TEXT_EXT.has(ext)) return fs.readFileSync(srcFile); // nhi phan: chep nguyen xi
  const rewritten = fs.readFileSync(srcFile, 'utf8').split(PATH_FROM).join(PATH_TO);
  return Buffer.from(withBanner(rewritten, ext), 'utf8');
}

if (!fs.existsSync(SRC)) {
  console.error(`Khong tim thay ban goc: ${path.relative(ROOT, SRC)}`);
  process.exit(1);
}

const srcFiles = walk(SRC);
const destFiles = walk(DEST);

const added = [];
const changed = [];
const removed = destFiles.filter((f) => !srcFiles.includes(f));

for (const relFile of srcFiles) {
  const wanted = render(path.join(SRC, relFile));
  const target = path.join(DEST, relFile);
  if (!fs.existsSync(target)) {
    added.push(relFile);
  } else if (!fs.readFileSync(target).equals(wanted)) {
    changed.push(relFile);
  }
  if (checkOnly) continue;
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, wanted);
}

if (!checkOnly) {
  // Xoa file thua: thieu buoc nay chinh la cach ban sao tro nen lech ban goc.
  for (const relFile of removed) fs.rmSync(path.join(DEST, relFile));
  pruneEmptyDirs(DEST);
}

const drift = added.length + changed.length + removed.length;

if (!quiet) {
  const show = (label, list) => list.forEach((f) => console.log(`  ${label} ${f}`));
  show(checkOnly ? 'thieu   ' : 'them    ', added);
  show(checkOnly ? 'lech    ' : 'cap nhat', changed);
  show(checkOnly ? 'thua    ' : 'xoa     ', removed);
}

if (checkOnly) {
  if (drift) {
    console.error(`\n.agents/skills LECH ban goc: ${added.length} thieu, ${changed.length} lech, ${removed.length} thua.`);
    console.error('=> Chay: npm run sync:agents');
    process.exit(1);
  }
  console.log(`.agents/skills dong bo voi .claude/skills (${srcFiles.length} file).`);
  process.exit(0);
}

console.log(`Da sinh ${srcFiles.length} file vao .agents/skills — ${added.length} them, ${changed.length} cap nhat, ${removed.length} xoa.`);
