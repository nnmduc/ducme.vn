/**
 * Tien ich dung chung cho cac lenh format bao cao.
 * Moi lenh deu nhan cung mot bo tuy chon de nguoi dung khong phai nho ba cach khac nhau.
 */

import path from 'node:path';

import { writeFileSafe } from './bundle.mjs';
import { mdToHtml } from './html.mjs';

export function parseArgs(argv) {
  const args = argv.slice(2);
  const flags = { _: [] };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--html') {
      // --html co the di kem duong dan, hoac dung mot minh de lay ten mac dinh
      const next = args[i + 1];
      flags.html = next && !next.startsWith('--') ? args[++i] : true;
    } else if (a === '--md') {
      const next = args[i + 1];
      flags.md = next && !next.startsWith('--') ? args[++i] : true;
    } else if (a === '--out-dir') {
      flags.outDir = args[++i];
    } else if (a === '--stdout') {
      flags.stdout = true;
    } else if (a === '--json') {
      flags.json = true;
    } else if (a === '--check') {
      flags.check = true;
    } else if (a === '--quiet') {
      flags.quiet = true;
    } else if (a.startsWith('--')) {
      flags[a.slice(2)] = true;
    } else {
      flags._.push(a);
    }
  }
  return flags;
}

/**
 * Ghi bao cao ra dia theo tuy chon dong lenh.
 * Mac dinh: ghi markdown canh file JSON nguon. --html ghi them ban HTML.
 */
export function emitReport({ md, flags, bundleFile, baseName, htmlMeta }) {
  if (flags.stdout) {
    process.stdout.write(md);
    return [];
  }

  const dir = flags.outDir ? path.resolve(flags.outDir) : path.dirname(path.resolve(bundleFile));
  const written = [];

  const wantMd = flags.md !== false;
  if (wantMd) {
    const target = typeof flags.md === 'string' ? flags.md : path.join(dir, `${baseName}.md`);
    written.push(writeFileSafe(target, md));
  }

  if (flags.html) {
    const target = typeof flags.html === 'string' ? flags.html : path.join(dir, `${baseName}.html`);
    written.push(writeFileSafe(target, mdToHtml(md, htmlMeta)));
  }

  return written;
}

export function reportIssues({ errors, warnings }, label) {
  if (warnings.length) {
    console.error(`\nCANH BAO ${label} (${warnings.length}):`);
    warnings.forEach((w) => console.error(`  ! ${w}`));
  }
  if (errors.length) {
    console.error(`\nLOI HO SO ${label} (${errors.length}):`);
    errors.forEach((e) => console.error(`  x ${e}`));
  }
  return errors.length;
}

/** Duong dan ngan gon de in ra man hinh: tuong doi neu nam trong du an, tuyet doi neu khong. */
export function rel(p) {
  const r = path.relative(process.cwd(), path.resolve(p));
  return r.startsWith('..') ? path.resolve(p) : r;
}

export const fmtDate = (d) => (d && /^\d{4}-\d{2}-\d{2}$/.test(d) ? d : new Date().toISOString().slice(0, 10));

/** Doi ma ket luan thanh mau sac cua huy hieu tren ban HTML. */
export const verdictTone = (verdict) =>
  ({ AP_DUNG: 'ok', AP_DUNG_CO_DIEU_KIEN: 'warn', TRA_LAI_KHAO_CUU: 'info', TU_CHOI: 'bad' })[verdict] || 'info';

/** Bang markdown tu mang doi tuong. cols = [{key, label, map?}] */
export function table(rows, cols) {
  if (!rows || rows.length === 0) return '_Không có._\n';
  const head = `| ${cols.map((c) => c.label).join(' | ')} |`;
  const sep = `|${cols.map(() => '---').join('|')}|`;
  const body = rows
    .map((r) => `| ${cols.map((c) => String(c.map ? c.map(r) : (r[c.key] ?? '—')).replace(/\n+/g, ' ').replace(/\|/g, '\\|')).join(' | ')} |`)
    .join('\n');
  return `${head}\n${sep}\n${body}\n`;
}
