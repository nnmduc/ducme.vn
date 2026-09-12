#!/usr/bin/env node
/**
 * Sinh bao cao khao cuu tu ho so JSON.
 *
 * JSON la ban goc duy nhat; markdown va HTML deu sinh ra tu no. Nho vay marian-audit
 * doc duoc bang may (doc thang khao-cuu.json), con nguoi doc duoc ban markdown/HTML.
 *
 * Cach dung:
 *   node .claude/skills/marian-research/scripts/format-report.mjs docs/khao-cuu/<id>/khao-cuu.json
 *   ... --html                      # ghi them bao-cao-khao-cuu.html
 *   ... --html bao-cao.html         # ghi HTML ra duong dan chi dinh
 *   ... --stdout                    # in markdown ra man hinh, khong ghi file
 *   ... --out-dir <thu-muc>         # doi thu muc dich
 *   ... --check                     # chi kiem tinh hop le cua ho so, khong sinh bao cao
 *
 * Ma thoat: 0 = ho so hop le, 1 = ho so co loi.
 */

import path from 'node:path';

import { readJson, validateResearch, RESEARCH_SCHEMA, splitImagesByRole } from '../../_lib/bundle.mjs';
import { parseArgs, emitReport, reportIssues, table, rel } from '../../_lib/cli.mjs';

const CONF = { cao: 'cao', trungbinh: 'trung bình', thap: 'thấp' };
const ACTION = { them: 'thêm mới', sua: 'sửa', giunguyen: 'giữ nguyên' };
const KIND = { moi: 'linh địa mới', capnhat: 'bổ sung tư liệu cho linh địa đã có' };

const flags = parseArgs(process.argv);
const file = flags._[0];

if (!file) {
  console.error('Thieu duong dan ho so. Vi du:');
  console.error('  node .claude/skills/marian-research/scripts/format-report.mjs docs/khao-cuu/nuicui/khao-cuu.json [--html]');
  process.exit(1);
}

let bundle;
try {
  bundle = readJson(file);
} catch (e) {
  console.error(e.message);
  process.exit(1);
}

const result = validateResearch(bundle);
if (reportIssues(result, 'KHAO CUU')) {
  console.error(`\n=> Ho so chua dat chuan ${RESEARCH_SCHEMA}. Sua het loi roi chay lai.`);
  process.exit(1);
}

if (flags.check) {
  console.log(`=> Ho so khao cuu hop le (${bundle.id} — ${bundle.name}).`);
  process.exit(0);
}

const wordCount = (t) => (typeof t === 'string' ? t.trim().split(/\s+/).filter(Boolean).length : 0);
const PROSE = ['historicalFact', 'architect', 'oralTradition', 'significance'];
const totalWords = PROSE.reduce((n, f) => n + wordCount(bundle.record?.[f]), 0);
const sourceByCode = new Map((bundle.sources || []).map((s) => [s.code, s]));
const refs = (codes) => (codes || []).map((c) => `[${c}]`).join(' ');

const md = [];
const P = (s = '') => md.push(s);

P(`# Báo cáo khảo cứu: ${bundle.name}`);
P();
P(`- **Mã linh địa**: \`${bundle.id}\``);
P(`- **Loại**: ${KIND[bundle.kind] || bundle.kind}`);
P(`- **Người khảo cứu**: ${bundle.researcher || '—'}`);
P(`- **Ngày hoàn thành**: ${bundle.date}`);
P(`- **Phạm vi**: ${bundle.scope || '—'}`);
P(`- **Hồ sơ gốc**: \`${rel(file)}\` (schema \`${bundle.schema}\`)`);
P();

P('## 1. Hiện trạng trước khảo cứu');
P();
if (bundle.baseline) {
  const b = bundle.baseline;
  P(
    table(
      [
        { k: 'Ảnh thực địa', v: b.hasPhoto ? 'có' : 'chưa có' },
        { k: 'Nguồn trực tiếp', v: b.directSources ?? '—' },
        { k: 'Nguồn tìm kiếm', v: b.searchSources ?? '—' },
        { k: 'Tổng văn xuôi', v: b.totalWords !== undefined ? `${b.totalWords} từ` : '—' },
        { k: 'Còn thiếu', v: (b.missing || []).join('; ') || '—' },
      ],
      [
        { key: 'k', label: 'Mục' },
        { key: 'v', label: 'Hiện trạng' },
      ]
    )
  );
} else if (bundle.kind === 'moi') {
  P('Chưa có bản ghi trong `src/data/statues.js`. Đây là linh địa mới.');
} else {
  P('_Không ghi nhận._');
}
P();

P('## 2. Đề xuất theo từng trường dữ liệu');
P();
P(
  table(bundle.fields, [
    { key: 'field', label: 'Trường', map: (r) => `\`${r.field}\`` },
    { key: 'action', label: 'Thao tác', map: (r) => ACTION[r.action] || r.action },
    { key: 'claims', label: 'Nguồn', map: (r) => refs([...new Set((r.claims || []).flatMap((c) => c.sources || []))]) || '—' },
  ])
);
P();

for (const f of bundle.fields) {
  P(`### \`${f.field}\` — ${ACTION[f.action] || f.action}`);
  P();
  if (f.value !== undefined && f.value !== null) {
    if (typeof f.value === 'string') {
      P('> ' + f.value.replace(/\n/g, '\n> '));
    } else {
      P('```json');
      P(JSON.stringify(f.value, null, 2));
      P('```');
    }
    P();
  }
  if (f.note) {
    P(`_Ghi chú:_ ${f.note}`);
    P();
  }
  if (f.claims?.length) {
    P(
      table(f.claims, [
        { key: 'text', label: 'Khẳng định' },
        { key: 'sources', label: 'Nguồn', map: (c) => refs(c.sources) },
        { key: 'confidence', label: 'Tin cậy', map: (c) => CONF[c.confidence] || c.confidence || '—' },
      ])
    );
    P();
  }
}

P('## 3. Danh mục nguồn');
P();
P(
  table(bundle.sources, [
    { key: 'code', label: 'Mã' },
    { key: 'title', label: 'Tiêu đề' },
    { key: 'url', label: 'URL', map: (s) => `[liên kết](${s.url})` },
    { key: 'tier', label: 'Cấp' },
    { key: 'accessed', label: 'Ngày truy cập' },
    { key: 'supports', label: 'Chứng minh điều gì' },
    { key: 'inRecord', label: 'Vào dữ liệu', map: (s) => (s.inRecord ? 'có' : '—') },
  ])
);
P();
const inRecord = (bundle.sources || []).filter((s) => s.inRecord);
P(`Đưa vào trường \`sources\` của dữ liệu: ${inRecord.map((s) => `[${s.code}]`).join(', ')} (${inRecord.length} nguồn).`);
P();

P('## 4. Hình ảnh');
P();
if (!bundle.images?.length) {
  P('**Không đề xuất ảnh** — giữ `realImage: null` và `galleryImages: []`. Đây là trạng thái hợp lệ theo quy chuẩn dự án.');
  if (bundle.imageSearchNote) {
    P();
    P(`_Đã tìm qua:_ ${bundle.imageSearchNote}`);
  }
} else {
  const { main, gallery } = splitImagesByRole(bundle.images);
  P(`Đề xuất ${bundle.images.length} ảnh: ${main ? '1 ảnh chính' : 'chưa có ảnh chính'}, ${gallery.length} ảnh phụ.`);
  P();
  for (const im of bundle.images) {
    const roleLabel = im.role === 'chinh' ? 'Ảnh chính (→ `realImage`)' : 'Ảnh phụ (→ `galleryImages[]`)';
    P(`### ${im.file || '(chưa đặt tên file)'} — ${roleLabel}`);
    P();
    P(
      table(
        [
          { k: 'Trang mô tả file gốc', v: `[${im.filePage}](${im.filePage})` },
          { k: 'Tác giả', v: im.author },
          { k: 'Giấy phép', v: im.license },
          { k: 'Năm chụp', v: im.year ?? '—' },
          { k: 'Nội dung ảnh', v: im.content || '—' },
          {
            k: im.role === 'chinh' ? '`realImageCaption` đề xuất' : '`galleryImages[].caption` đề xuất',
            v: im.caption || '—',
          },
          { k: 'Cam kết', v: im.notAi ? 'Ảnh chụp thực địa, không do AI tạo sinh' : '**CHƯA CAM KẾT**' },
        ],
        [
          { key: 'k', label: 'Mục' },
          { key: 'v', label: 'Nội dung' },
        ]
      )
    );
    P();
  }
}
P();

P('## 5. Mâu thuẫn nguồn & điểm chưa chắc chắn');
P();
if (bundle.conflicts?.length) {
  P(
    table(bundle.conflicts, [
      { key: 'issue', label: 'Vấn đề' },
      { key: 'a', label: 'Nguồn nói A', map: (c) => `${c.a?.claim} ${refs([c.a?.source])}` },
      { key: 'b', label: 'Nguồn nói B', map: (c) => `${c.b?.claim} ${refs([c.b?.source])}` },
      { key: 'resolution', label: 'Xử lý đề xuất' },
    ])
  );
} else {
  P('_Không phát hiện mâu thuẫn giữa các nguồn._');
}
P();
P('**Chưa tìm được nguồn, đã cố ý để ngoài đề xuất:**');
P();
if (bundle.unknowns?.length) bundle.unknowns.forEach((u) => P(`- ${u}`));
else P('- _Không ghi nhận._');
P();

P('## 6. Tự đánh giá');
P();
const sa = bundle.selfAssessment || {};
P(
  table(
    [
      { k: 'Độ tin cậy tổng thể', v: CONF[sa.confidence] || sa.confidence || '—' },
      { k: 'Rủi ro lớn nhất', v: sa.biggestRisk || '—' },
      { k: 'Đề nghị người kiểm chứng soi kỹ', v: sa.reviewFocus || '—' },
      { k: 'Tổng văn xuôi sau đề xuất', v: `${totalWords} từ` },
    ],
    [
      { key: 'k', label: 'Trục' },
      { key: 'v', label: 'Đánh giá' },
    ]
  )
);
P();

P('## 7. Bản ghi dữ liệu đề xuất');
P();
P('```json');
P(JSON.stringify(bundle.record, null, 2));
P('```');
P();

if (bundle.validation?.output) {
  P('### Kết quả tự kiểm');
  P();
  P('```text');
  P(`$ ${bundle.validation.command || 'validate-record.mjs'}`);
  P(bundle.validation.output.trim());
  P('```');
  P();
}

P('---');
P();
P(
  '_Báo cáo sinh tự động từ hồ sơ JSON bằng `format-report.mjs`. Sửa nội dung thì sửa file JSON rồi chạy lại lệnh, ' +
    'đừng sửa trực tiếp vào file markdown._'
);
P();

const markdown = md.join('\n');
const written = emitReport({
  md: markdown,
  flags,
  bundleFile: file,
  baseName: 'bao-cao-khao-cuu',
  htmlMeta: {
    title: `Báo cáo khảo cứu: ${bundle.name}`,
    kicker: 'Linh Đài Đức Mẹ Việt Nam · Khảo cứu',
    subtitle: `${bundle.id} · ${bundle.date} · ${KIND[bundle.kind] || bundle.kind}`,
    badge: { text: `${bundle.sources.length} nguồn · ${totalWords} từ · ${bundle.images?.length || 0} ảnh đề xuất`, tone: 'info' },
    footer: 'Sinh tự động từ hồ sơ JSON. Nguồn sự thật là file khao-cuu.json, không phải trang này.',
  },
});

if (!flags.quiet && written.length) {
  written.forEach((w) => console.log(`Đã ghi: ${rel(w)}`));
}
if (result.warnings.length && !flags.quiet) {
  console.log(`\nCòn ${result.warnings.length} cảnh báo ở trên — nên xử lý trước khi bàn giao cho marian-audit.`);
}
