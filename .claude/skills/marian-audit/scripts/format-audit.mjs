#!/usr/bin/env node
/**
 * Sinh bao cao kiem chung tu ho so JSON.
 *
 * JSON la ban goc duy nhat; markdown va HTML deu sinh ra tu no. marian-publish doc
 * thang kiem-chung.json de biet duoc phep dua len nhung gi, con nguoi doc ban markdown/HTML.
 *
 * Cach dung:
 *   node .claude/skills/marian-audit/scripts/format-audit.mjs docs/khao-cuu/<id>/kiem-chung.json
 *   ... --html                      # ghi them bao-cao-kiem-chung.html
 *   ... --html bao-cao.html         # ghi HTML ra duong dan chi dinh
 *   ... --stdout                    # in markdown ra man hinh
 *   ... --out-dir <thu-muc>         # doi thu muc dich
 *   ... --check                     # chi kiem tinh hop le cua ho so
 *
 * Tu dong doi chieu voi ho so khao cuu cung thu muc (khao-cuu.json) neu tim thay.
 *
 * Ma thoat: 0 = ho so hop le, 1 = ho so co loi.
 */

import fs from 'node:fs';
import path from 'node:path';

import {
  readJson, validateAudit, AUDIT_SCHEMA, AXES, MAX_SCORE, VERDICT_LABEL, VERDICT_ALLOWS_PUBLISH,
  FOLKLORE_VERACITY_LABEL,
} from '../../_lib/bundle.mjs';
import { parseArgs, emitReport, reportIssues, table, rel, verdictTone } from '../../_lib/cli.mjs';

const STATUS = { OK: 'còn sống', CHET: 'CHẾT', CHUYEN_HUONG: 'chuyển hướng', PROXY_CHAN: 'proxy chặn' };
const RESULT = {
  dat: 'Đạt',
  sua: 'Sửa câu chữ',
  bo: 'Bỏ',
  chuyentruyentung: 'Chuyển sang truyền tụng',
};
const LEVEL = { chan: 'CHẶN', nang: 'Nặng', nhe: 'Nhẹ' };

const flags = parseArgs(process.argv);
const file = flags._[0];

if (!file) {
  console.error('Thieu duong dan ho so. Vi du:');
  console.error('  node .claude/skills/marian-audit/scripts/format-audit.mjs docs/khao-cuu/nuicui/kiem-chung.json [--html]');
  process.exit(1);
}

let bundle;
try {
  bundle = readJson(file);
} catch (e) {
  console.error(e.message);
  process.exit(1);
}

// Doi chieu cheo voi ho so khao cuu neu co
let research = null;
const researchPath = bundle.researchReport
  ? path.resolve(bundle.researchReport)
  : path.join(path.dirname(path.resolve(file)), 'khao-cuu.json');
if (fs.existsSync(researchPath)) {
  try {
    research = readJson(researchPath);
  } catch (e) {
    console.error(`Canh bao: khong doc duoc ho so khao cuu (${e.message}). Bo qua phan doi chieu cheo.`);
  }
} else {
  console.error(`Canh bao: khong tim thay ho so khao cuu tai ${rel(researchPath)}. Bo qua phan doi chieu cheo.`);
}

const result = validateAudit(bundle, research);
if (reportIssues(result, 'KIEM CHUNG')) {
  console.error(`\n=> Ho so chua dat chuan ${AUDIT_SCHEMA}. Sua het loi roi chay lai.`);
  process.exit(1);
}

if (flags.check) {
  console.log(`=> Ho so kiem chung hop le (${bundle.id}, ket luan ${VERDICT_LABEL[bundle.verdict]}, ${result.totalScore}/${MAX_SCORE}).`);
  process.exit(0);
}

const verdictLabel = VERDICT_LABEL[bundle.verdict];
const canPublish = VERDICT_ALLOWS_PUBLISH[bundle.verdict];
const scoreByAxis = new Map((bundle.scores || []).map((s) => [s.axis, s]));

const md = [];
const P = (s = '') => md.push(s);

P(`# Báo cáo kiểm chứng: ${research?.name || bundle.name || bundle.id}`);
P();
P('## Kết luận');
P();
P(`> **${verdictLabel}** — ${result.totalScore}/${MAX_SCORE}`);
P('>');
P(`> ${bundle.summary}`);
P();
P(`- **Hồ sơ khảo cứu đã kiểm**: \`${bundle.researchReport || rel(researchPath)}\``);
P(`- **Người kiểm chứng**: ${bundle.auditor || '—'}`);
P(`- **Ngày kiểm**: ${bundle.date}`);
P(`- **Cho phép triển khai**: ${canPublish ? 'có — `marian-publish` được chạy tiếp' : '**không** — dừng tại đây'}`);
P(`- **Hồ sơ gốc**: \`${rel(file)}\` (schema \`${bundle.schema}\`)`);
P();

if (bundle.conditions?.length) {
  P('### Điều kiện bắt buộc trước khi triển khai');
  P();
  P('`marian-publish` làm đúng danh sách này, không thêm không bớt.');
  P();
  bundle.conditions.forEach((c, i) => P(`${i + 1}. ${c}`));
  P();
}

P('## 1. Chấm điểm');
P();
P(
  table(
    AXES.map((a) => ({ ...(scoreByAxis.get(a.key) || {}), axis: a.label })),
    [
      { key: 'axis', label: 'Trục' },
      { key: 'score', label: 'Điểm', map: (r) => `${r.score ?? '—'}/5` },
      { key: 'evidence', label: 'Bằng chứng' },
    ]
  )
);
P();
P(`**Tổng: ${result.totalScore}/${MAX_SCORE}.**`);
P();

P('## 2. Kiểm nguồn dẫn');
P();
P(
  table(bundle.sourceChecks, [
    { key: 'code', label: 'Mã' },
    { key: 'url', label: 'URL', map: (c) => (c.url ? `[liên kết](${c.url})` : '—') },
    { key: 'status', label: 'Trạng thái', map: (c) => STATUS[c.status] || c.status },
    { key: 'containsClaim', label: 'Chứa luận điểm?', map: (c) => (c.containsClaim ? 'có' : '**KHÔNG**') },
    { key: 'recheckedWith', label: 'Kiểm lại bằng' },
    { key: 'note', label: 'Ghi chú' },
  ])
);
P();

const blockedSources = (bundle.sourceChecks || []).filter((c) => c.status === 'PROXY_CHAN');
if (blockedSources.length) {
  P(
    `${blockedSources.length} nguồn bị chính sách egress của phiên làm việc chặn, không phải nguồn chết. ` +
      'Các nguồn này đã được kiểm lại bằng công cụ ghi ở cột "Kiểm lại bằng".'
  );
  P();
}

P('### Đối chiếu luận điểm');
P();
P(
  table(bundle.claimChecks, [
    { key: 'claim', label: 'Luận điểm' },
    { key: 'sources', label: 'Nguồn', map: (c) => (c.sources || []).map((s) => `[${s}]`).join(' ') || '—' },
    { key: 'result', label: 'Kết luận', map: (c) => RESULT[c.result] || c.result },
    { key: 'note', label: 'Ghi chú' },
  ])
);
P();

const movedClaims = (bundle.claimChecks || []).filter((c) => c.result === 'chuyentruyentung');
if (movedClaims.length) {
  P(
    `${movedClaims.length} luận điểm không kiểm chứng được như sự thật lịch sử nhưng **không bị bỏ**: ` +
      'chuyển sang `oralTradition` / `folklore` kèm nhãn "tương truyền", đúng nguyên tắc giữ lại tư liệu ' +
      'truyền tụng thay vì xoá trắng.'
  );
  P();
}

if (bundle.folkloreChecks?.length) {
  P('### Kiểm chuyện kể & giai thoại');
  P();
  P('Chuyện kể không bị chấm theo chuẩn sự thật lịch sử. Chỉ kiểm ba điều: có nguồn đọc lại được không, có bị nguồn nào bác bỏ không, và có được gắn nhãn truyền tụng không.');
  P();
  P(
    table(bundle.folkloreChecks, [
      { key: 'title', label: 'Chuyện kể' },
      { key: 'veracity', label: 'Độ xác thực', map: (c) => FOLKLORE_VERACITY_LABEL[c.veracity] || c.veracity || '—' },
      { key: 'labelled', label: 'Có gắn nhãn truyền tụng', map: (c) => (c.labelled === false ? '**chưa**' : 'có') },
      { key: 'result', label: 'Kết luận', map: (c) => (c.result === 'duyet' ? 'DUYỆT' : 'LOẠI') },
      { key: 'note', label: 'Ghi chú' },
    ])
  );
  P();
}

if (bundle.crossChecks?.length) {
  P('### Kiểm chéo độc lập');
  P();
  P('Nguồn do người kiểm chứng tự tìm, không lấy từ báo cáo khảo cứu.');
  P();
  P(
    table(bundle.crossChecks, [
      { key: 'title', label: 'Nguồn' },
      { key: 'url', label: 'URL', map: (c) => (c.url ? `[liên kết](${c.url})` : '—') },
      { key: 'finding', label: 'Xác nhận / bác bỏ điều gì' },
    ])
  );
  P();
}

P('## 3. Kiểm hình ảnh');
P();
if (!bundle.imageChecks?.length) {
  P('Không có ảnh để kiểm — giữ `realImage: null` và `galleryImages: []`.');
} else {
  P(
    table(bundle.imageChecks, [
      { key: 'file', label: 'File' },
      { key: 'sourceVerified', label: 'Nguồn công khai xác minh', map: (c) => (c.sourceVerified ? 'có' : '**không**') },
      { key: 'license', label: 'Giấy phép (nếu biết)', map: (c) => c.license || '—' },
      { key: 'subjectMatches', label: 'Đúng linh địa', map: (c) => (c.subjectMatches ? 'có' : '**không**') },
      { key: 'aiSignals', label: 'Dấu hiệu AI', map: (c) => (c.aiSignals?.length ? c.aiSignals.join(', ') : 'không thấy') },
      { key: 'result', label: 'Kết luận', map: (c) => (c.result === 'duyet' ? 'DUYỆT' : 'LOẠI') },
    ])
  );
}
P();

P('## 4. Kiểm kỹ thuật & ảnh hưởng hệ thống');
P();
if (bundle.impact) {
  P(
    table(
      Object.entries(bundle.impact).map(([k, v]) => ({ k, v: Array.isArray(v) ? v.join(', ') : v })),
      [
        { key: 'k', label: 'Mục' },
        { key: 'v', label: 'Ảnh hưởng' },
      ]
    )
  );
} else {
  P('_Không ghi nhận._');
}
P();
if (bundle.validation?.output) {
  P('```text');
  P(`$ ${bundle.validation.command || 'validate-record.mjs'}`);
  P(bundle.validation.output.trim());
  P('```');
  P();
}

P('## 5. Vấn đề phát hiện');
P();
if (!bundle.issues?.length) {
  P('_Không phát hiện vấn đề nào._');
} else {
  P(
    table(bundle.issues, [
      { key: 'level', label: 'Mức', map: (i) => LEVEL[i.level] || i.level },
      { key: 'issue', label: 'Vấn đề' },
      { key: 'where', label: 'Vị trí' },
      { key: 'fix', label: 'Đề nghị xử lý' },
    ])
  );
}
P();

P('## 6. Phần đã duyệt');
P();
P('Đây là phạm vi chính xác `marian-publish` được phép đưa lên website.');
P();
const approvedFields = new Set(bundle.approved?.fields || []);
const proposedFields = research?.fields?.map((f) => f.field) || [...approvedFields];
for (const f of proposedFields) {
  P(`- [${approvedFields.has(f) ? 'x' : ' '}] \`${f}\``);
}
const approvedSources = bundle.approved?.sources || [];
P(`- [${approvedSources.length >= 2 ? 'x' : ' '}] Nguồn đưa vào dữ liệu: ${approvedSources.map((s) => `[${s}]`).join(', ') || 'chưa duyệt nguồn nào'}`);
const approvedImages = bundle.approved?.images || [];
P(`- [${approvedImages.length ? 'x' : ' '}] Ảnh: ${approvedImages.length ? approvedImages.join(', ') : '**không duyệt ảnh nào**'}`);
const approvedFolklore = bundle.approved?.folklore || [];
P(`- [${approvedFolklore.length ? 'x' : ' '}] Chuyện kể được phép viết vào \`oralTradition\`: ${approvedFolklore.join('; ') || 'không duyệt chuyện nào'}`);
P(`- [${bundle.approved?.constellation ? 'x' : ' '}] Thay đổi chòm sao (\`CONSTELLATION_VERSIONS\`)`);
P();

P('---');
P();
P(
  '_Báo cáo sinh tự động từ hồ sơ JSON bằng `format-audit.mjs`. Sửa nội dung thì sửa file JSON rồi chạy lại lệnh, ' +
    'đừng sửa trực tiếp vào file markdown._'
);
P();

const markdown = md.join('\n');
const written = emitReport({
  md: markdown,
  flags,
  bundleFile: file,
  baseName: 'bao-cao-kiem-chung',
  htmlMeta: {
    title: `Báo cáo kiểm chứng: ${research?.name || bundle.name || bundle.id}`,
    kicker: 'Linh Đài Đức Mẹ Việt Nam · Kiểm chứng',
    subtitle: `${bundle.id} · ${bundle.date} · ${bundle.auditor || 'không ghi người kiểm'}`,
    badge: { text: `${verdictLabel} — ${result.totalScore}/${MAX_SCORE}`, tone: verdictTone(bundle.verdict) },
    footer: 'Sinh tự động từ hồ sơ JSON. Nguồn sự thật là file kiem-chung.json, không phải trang này.',
  },
});

if (!flags.quiet && written.length) {
  written.forEach((w) => console.log(`Đã ghi: ${rel(w)}`));
  console.log(`Kết luận: ${verdictLabel} (${result.totalScore}/${MAX_SCORE}) — ${canPublish ? 'được phép triển khai' : 'KHÔNG được triển khai'}`);
}
