// SINH TU DONG tu .claude/skills — dung sua tay file nay, sua ban goc roi chay: npm run sync:agents
/**
 * Chuyen bao cao markdown thanh mot trang HTML doc lap.
 *
 * Khong phu thuoc goi ngoai, khong tai tai nguyen tu mang: bao cao mo duoc khi khong
 * co mang, gui kem email hoac in ra giay deu duoc. Ho tro tap con markdown ma cac
 * script format thuc su sinh ra: tieu de, doan van, danh sach, danh sach co checkbox,
 * bang, trich dan, khoi ma, duong ke ngang, dam/nghieng/ma/lien ket.
 */

/** Ky tu danh dau tam thoi cho doan ma inline. Khong bao gio xuat hien trong bao cao. */
const MARK = '\u0001';

const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function inline(text) {
  let out = escapeHtml(text);
  const codes = [];
  out = out.replace(/`([^`]+)`/g, (_m, c) => {
    codes.push(c);
    return `${MARK}${codes.length - 1}${MARK}`;
  });
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, label, href) => {
    const safe = /^(https?:|mailto:|#|\.|\/)/i.test(href) ? href : '#';
    return `<a href="${safe}">${label}</a>`;
  });
  out = out.replace(new RegExp(`${MARK}(\\d+)${MARK}`, 'g'), (_m, i) => `<code>${codes[Number(i)]}</code>`);
  return out;
}

const isTableSep = (line) => /^\|[\s:|-]+\|$/.test(line.trim());

function renderRow(line, cellTag) {
  const cells = line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|');
  return `<tr>${cells.map((c) => `<${cellTag}>${inline(c.trim())}</${cellTag}>`).join('')}</tr>`;
}

/** Markdown -> cac khoi HTML (khong kem khung trang). */
export function mdToBody(md) {
  const lines = String(md).replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }

    if (/^```/.test(line.trim())) {
      const lang = line.trim().slice(3).trim();
      const buf = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i].trim())) buf.push(lines[i++]);
      i++;
      out.push(
        `<pre class="code"${lang ? ` data-lang="${escapeHtml(lang)}"` : ''}><code>${escapeHtml(buf.join('\n'))}</code></pre>`
      );
      continue;
    }

    if (/^(-{3,}|\*{3,}|_{3,})$/.test(line.trim())) { out.push('<hr>'); i++; continue; }

    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      out.push(`<h${h[1].length}>${inline(h[2].trim())}</h${h[1].length}>`);
      i++;
      continue;
    }

    if (line.trim().startsWith('|') && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const head = renderRow(line, 'th');
      i += 2;
      const body = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) body.push(renderRow(lines[i++], 'td'));
      out.push(`<div class="table-wrap"><table><thead>${head}</thead><tbody>${body.join('')}</tbody></table></div>`);
      continue;
    }

    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) buf.push(lines[i++].replace(/^>\s?/, ''));
      out.push(`<blockquote>${mdToBody(buf.join('\n'))}</blockquote>`);
      continue;
    }

    if (/^\s*([-*+]|\d+\.)\s+/.test(line)) {
      const ordered = /^\s*\d+\.\s+/.test(line);
      const items = [];
      while (i < lines.length && /^\s*([-*+]|\d+\.)\s+/.test(lines[i])) {
        let text = lines[i].replace(/^\s*([-*+]|\d+\.)\s+/, '');
        i++;
        while (i < lines.length && /^\s{2,}\S/.test(lines[i]) && !/^\s*([-*+]|\d+\.)\s+/.test(lines[i])) {
          text += ' ' + lines[i].trim();
          i++;
        }
        const box = text.match(/^\[([ xX])\]\s+(.*)$/);
        if (box) {
          const checked = box[1].toLowerCase() === 'x';
          items.push(
            `<li class="task ${checked ? 'done' : 'todo'}"><span class="box" aria-hidden="true">${checked ? '✓' : '○'}</span>${inline(box[2])}</li>`
          );
        } else {
          items.push(`<li>${inline(text)}</li>`);
        }
      }
      const tag = ordered ? 'ol' : 'ul';
      out.push(`<${tag}>${items.join('')}</${tag}>`);
      continue;
    }

    const buf = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,6})\s/.test(lines[i]) &&
      !/^\s*([-*+]|\d+\.)\s+/.test(lines[i]) &&
      !lines[i].trim().startsWith('|') &&
      !/^>\s?/.test(lines[i]) &&
      !/^```/.test(lines[i].trim())
    ) {
      buf.push(lines[i++]);
    }
    out.push(`<p>${inline(buf.join(' ').trim())}</p>`);
  }

  return out.join('\n');
}

const CSS = `
:root{
  --bg:#faf8f5; --surface:#fff; --text:#1c1917; --muted:#57534e; --line:#e7e2da;
  --accent:#8a6d3b; --accent-soft:#f3ecdf;
  --ok:#166534; --ok-bg:#dcfce7; --warn:#854d0e; --warn-bg:#fef3c7;
  --bad:#991b1b; --bad-bg:#fee2e2; --info:#1e40af; --info-bg:#dbeafe;
}
@media (prefers-color-scheme:dark){
  :root{
    --bg:#17150f; --surface:#211e17; --text:#f0ece4; --muted:#a8a29e; --line:#37322a;
    --accent:#d4b483; --accent-soft:#2c261c;
    --ok:#86efac; --ok-bg:#14311f; --warn:#fcd34d; --warn-bg:#33280c;
    --bad:#fca5a5; --bad-bg:#3a1616; --info:#93c5fd; --info-bg:#152647;
  }
}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--text);
  font:16px/1.65 "Be Vietnam Pro","Segoe UI",system-ui,-apple-system,sans-serif;
  -webkit-text-size-adjust:100%}
.page{max-width:56rem;margin:0 auto;padding:2.5rem 1.25rem 4rem}
header.doc{border-bottom:2px solid var(--accent);padding-bottom:1.25rem;margin-bottom:2rem}
header.doc .kicker{font-size:.78rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin:0 0 .4rem}
header.doc h1{margin:0 0 .5rem;font-size:1.9rem;line-height:1.25;font-weight:650}
header.doc .sub{margin:0;color:var(--muted);font-size:.95rem}
.badge{display:inline-block;margin-top:1rem;padding:.45rem .9rem;border-radius:999px;
  font-weight:650;font-size:.92rem}
.badge.ok{background:var(--ok-bg);color:var(--ok)}
.badge.warn{background:var(--warn-bg);color:var(--warn)}
.badge.bad{background:var(--bad-bg);color:var(--bad)}
.badge.info{background:var(--info-bg);color:var(--info)}
h2{margin:2.4rem 0 .8rem;font-size:1.3rem;font-weight:650;padding-bottom:.35rem;border-bottom:1px solid var(--line)}
h3{margin:1.8rem 0 .6rem;font-size:1.08rem;font-weight:650}
h4{margin:1.4rem 0 .5rem;font-size:.98rem;font-weight:650;color:var(--muted)}
p{margin:.7rem 0}
a{color:var(--accent);text-decoration:underline;text-underline-offset:2px;word-break:break-word}
ul,ol{margin:.7rem 0;padding-left:1.4rem}
li{margin:.3rem 0}
li.task{list-style:none;margin-left:-1.4rem;display:flex;gap:.55rem;align-items:baseline}
li.task .box{flex:0 0 auto;font-weight:700}
li.task.done .box{color:var(--ok)}
li.task.todo .box{color:var(--muted)}
blockquote{margin:1.1rem 0;padding:.85rem 1.1rem;background:var(--accent-soft);
  border-left:4px solid var(--accent);border-radius:0 6px 6px 0}
blockquote p{margin:.3rem 0}
.table-wrap{overflow-x:auto;margin:1.1rem 0;border:1px solid var(--line);border-radius:8px;background:var(--surface)}
table{border-collapse:collapse;width:100%;font-size:.93rem}
th,td{padding:.6rem .75rem;text-align:left;border-bottom:1px solid var(--line);vertical-align:top}
th{background:var(--accent-soft);font-weight:650;white-space:nowrap}
tbody tr:last-child td{border-bottom:0}
code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.88em;
  background:var(--accent-soft);padding:.12em .38em;border-radius:4px}
pre.code{margin:1.1rem 0;padding:.9rem 1rem;background:var(--surface);border:1px solid var(--line);
  border-radius:8px;overflow-x:auto;font-size:.85rem;line-height:1.55}
pre.code code{background:none;padding:0}
hr{border:0;border-top:1px solid var(--line);margin:2rem 0}
footer.doc{margin-top:3rem;padding-top:1rem;border-top:1px solid var(--line);
  color:var(--muted);font-size:.85rem}
@media print{
  :root{--bg:#fff;--surface:#fff;--accent-soft:#f5f2ec}
  body{font-size:11pt}
  .page{max-width:none;padding:0}
  h2{break-after:avoid}
  table,blockquote,pre.code{break-inside:avoid}
}
@media (max-width:480px){
  .page{padding:1.5rem 1rem 3rem}
  header.doc h1{font-size:1.5rem}
}
`;

/**
 * Bao markdown thanh mot file HTML hoan chinh.
 * badge: { text, tone } voi tone la ok | warn | bad | info.
 */
export function mdToHtml(md, { title, kicker, subtitle, badge, footer } = {}) {
  const badgeHtml = badge?.text
    ? `<div class="badge ${badge.tone || 'info'}">${escapeHtml(badge.text)}</div>`
    : '';
  return `<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>${escapeHtml(title || 'Báo cáo')}</title>
<style>${CSS}</style>
</head>
<body>
<div class="page">
<header class="doc">
${kicker ? `<p class="kicker">${escapeHtml(kicker)}</p>` : ''}
<h1>${escapeHtml(title || 'Báo cáo')}</h1>
${subtitle ? `<p class="sub">${escapeHtml(subtitle)}</p>` : ''}
${badgeHtml}
</header>
<main>
${mdToBody(md)}
</main>
<footer class="doc">${escapeHtml(footer || '')}</footer>
</div>
</body>
</html>
`;
}
