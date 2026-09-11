#!/usr/bin/env node
/**
 * Doc ho so khao cuu + ho so kiem chung, kiem dieu kien tien quyet, roi sinh
 * PHIEU THI CONG cho marian-publish.
 *
 * Day la cua ngo duy nhat cua marian-publish: khong doc bao cao markdown bang mat roi
 * tu suy dien, ma lay dung nhung gi bao cao kiem chung da duyet.
 *
 * Cach dung:
 *   node .claude/skills/marian-publish/scripts/read-handoff.mjs docs/khao-cuu/<id>/
 *   node .claude/skills/marian-publish/scripts/read-handoff.mjs <id>        # tu tim trong docs/khao-cuu/
 *   ... --json                      # in phieu thi cong dang JSON de xu ly tiep
 *   ... --md                        # ghi phieu-thi-cong.md
 *   ... --html                      # ghi them phieu-thi-cong.html
 *   ... --stdout                    # in markdown ra man hinh
 *
 * Ma thoat:
 *   0 = duoc phep trien khai
 *   1 = thieu ho so, ho so sai chuan, hoac ket luan khong cho phep trien khai
 */

import fs from 'node:fs';
import path from 'node:path';

import {
  readJson, validateResearch, validateAudit, buildWorkOrder,
  VERDICT_LABEL, VERDICT_ALLOWS_PUBLISH,
} from '../../_lib/bundle.mjs';
import { parseArgs, emitReport, reportIssues, table, rel, verdictTone } from '../../_lib/cli.mjs';

const ROOT = path.resolve(import.meta.dirname, '..', '..', '..', '..');
const ACTION = { them: 'thêm mới', sua: 'sửa', giunguyen: 'giữ nguyên' };

const flags = parseArgs(process.argv);
const target = flags._[0];

if (!target) {
  console.error('Thieu id hoac thu muc ho so. Vi du:');
  console.error('  node .claude/skills/marian-publish/scripts/read-handoff.mjs nuicui [--html]');
  process.exit(1);
}

const dir = fs.existsSync(path.resolve(target))
  ? path.resolve(target)
  : path.join(ROOT, 'docs', 'khao-cuu', target);

if (!fs.existsSync(dir)) {
  console.error(`Khong tim thay thu muc ho so: ${rel(dir)}`);
  console.error('=> Chua co ho so khao cuu. DUNG LAI: chay marian-research truoc.');
  process.exit(1);
}

const researchFile = path.join(dir, 'khao-cuu.json');
const auditFile = path.join(dir, 'kiem-chung.json');

const missing = [];
if (!fs.existsSync(researchFile)) missing.push(`${rel(researchFile)} (marian-research)`);
if (!fs.existsSync(auditFile)) missing.push(`${rel(auditFile)} (marian-audit)`);
if (missing.length) {
  console.error('THIEU HO SO BAT BUOC:');
  missing.forEach((m) => console.error(`  x ${m}`));
  console.error('\n=> DUNG LAI. Khong dua noi dung len website khi chua co du ca hai ho so.');
  process.exit(1);
}

const research = readJson(researchFile);
const audit = readJson(auditFile);

let hasError = 0;
hasError += reportIssues(validateResearch(research), 'KHAO CUU');
const auditResult = validateAudit(audit, research);
hasError += reportIssues(auditResult, 'KIEM CHUNG');
if (hasError) {
  console.error('\n=> Ho so khong dat chuan. Khong trien khai cho toi khi sua xong.');
  process.exit(1);
}

const order = buildWorkOrder(research, audit);
const verdictLabel = VERDICT_LABEL[order.verdict];

if (flags.json) {
  console.log(JSON.stringify(order, null, 2));
  process.exit(order.canPublish ? 0 : 1);
}

const md = [];
const P = (s = '') => md.push(s);

P(`# Phiếu thi công: ${order.name || order.id}`);
P();
P(`> **${verdictLabel}** — ${auditResult.totalScore}/35`);
P('>');
P(`> ${order.canPublish ? 'Được phép triển khai theo đúng phạm vi dưới đây.' : '**KHÔNG được triển khai.** Dừng lại và báo người dùng.'}`);
P();
P(`- **Mã linh địa**: \`${order.id}\``);
P(`- **Hồ sơ khảo cứu**: \`${rel(researchFile)}\``);
P(`- **Hồ sơ kiểm chứng**: \`${rel(auditFile)}\``);
P(`- **Nhánh đề nghị**: \`data/bo-sung-tu-lieu-${order.id}\``);
P();

if (order.conditions.length) {
  P('## Điều kiện bắt buộc');
  P();
  P('Làm đúng từng mục, không thêm không bớt. Tick khi đã thực hiện.');
  P();
  order.conditions.forEach((c) => P(`- [ ] ${c}`));
  P();
}

P('## 1. Trường được phép sửa');
P();
P(
  table(order.apply, [
    { key: 'field', label: 'Trường', map: (r) => `\`${r.field}\`` },
    { key: 'action', label: 'Thao tác', map: (r) => ACTION[r.action] || r.action },
    { key: 'note', label: 'Ghi chú' },
  ])
);
P();

for (const f of order.apply) {
  if (f.value === undefined || f.value === null) continue;
  P(`### \`${f.field}\``);
  P();
  if (typeof f.value === 'string') {
    P('> ' + f.value.replace(/\n/g, '\n> '));
  } else {
    P('```json');
    P(JSON.stringify(f.value, null, 2));
    P('```');
  }
  P();
}

if (order.excluded.length) {
  P('## 2. KHÔNG được đưa lên');
  P();
  P('Những đề xuất sau nằm trong hồ sơ khảo cứu nhưng **không** được báo cáo kiểm chứng duyệt.');
  P();
  P(
    table(order.excluded, [
      { key: 'field', label: 'Trường', map: (r) => `\`${r.field}\`` },
      { key: 'reason', label: 'Lý do' },
    ])
  );
  P();
}

P('## 3. Nguồn đưa vào dữ liệu');
P();
P(
  table(order.sources, [
    { key: 'title', label: 'Tiêu đề' },
    { key: 'url', label: 'URL', map: (s) => `[liên kết](${s.url})` },
  ])
);
P();
if (order.sources.length < 2) {
  P('**CẢNH BÁO: dưới 2 nguồn được duyệt — vi phạm quy chuẩn trích dẫn, `npm test` sẽ đỏ.**');
  P();
}

P('## 4. Hình ảnh');
P();
if (!order.images.length) {
  P('**Không có ảnh nào được duyệt — giữ `realImage: null`.**');
  if (order.rejectedImages.length) {
    P();
    P(`Ảnh bị loại: ${order.rejectedImages.map((im) => `\`${im.file}\``).join(', ')}.`);
  }
} else {
  P(
    table(order.images, [
      { key: 'file', label: 'File', map: (im) => `\`src/assets/real_photos/${path.basename(im.file)}\`` },
      { key: 'license', label: 'Giấy phép' },
      { key: 'author', label: 'Tác giả' },
      { key: 'caption', label: '`realImageCaption`' },
    ])
  );
}
P();

P('## 5. Chòm sao');
P();
P(
  order.constellationAllowed
    ? '`CONSTELLATION_VERSIONS` **được phép** sửa theo đúng nội dung hồ sơ khảo cứu.'
    : '`CONSTELLATION_VERSIONS` **không được** sửa. Giữ nguyên `constellationRole` như bản ghi hiện có.'
);
P();

P('## 6. Việc bắt buộc sau khi sửa dữ liệu');
P();
P('- [ ] `node .claude/skills/marian-publish/scripts/validate-record.mjs <file record> --allow-existing-id` — hết lỗi chặn');
P('- [ ] `npm test` — toàn bộ PASS, 0 FAIL');
P('- [ ] `npm run build` — dựng thành công');
P('- [ ] Cập nhật `docs/marian-sites-missing-info.md`');
P('- [ ] Cập nhật số assertion `npm test` ở README và tài liệu nếu con số thay đổi');
P('- [ ] Commit kèm cả `docs/khao-cuu/' + order.id + '/`');
P();

if (order.impact) {
  P('### Ảnh hưởng hệ thống theo báo cáo kiểm chứng');
  P();
  P(
    table(
      Object.entries(order.impact).map(([k, v]) => ({ k, v: Array.isArray(v) ? v.join(', ') : v })),
      [
        { key: 'k', label: 'Mục' },
        { key: 'v', label: 'Ảnh hưởng' },
      ]
    )
  );
  P();
}

P('## 7. Bản ghi đầy đủ sau khi áp dụng');
P();
P('Chỉ dùng các trường đã duyệt ở mục 1. Bản ghi dưới đây là bản đề xuất nguyên vẹn của khảo cứu — đối chiếu, đừng chép nguyên khối.');
P();
P('```json');
P(JSON.stringify(order.record, null, 2));
P('```');
P();

P('---');
P();
P('_Phiếu sinh tự động từ `khao-cuu.json` + `kiem-chung.json` bằng `read-handoff.mjs`._');
P();

const markdown = md.join('\n');

if (flags.stdout || flags.md || flags.html || flags.outDir) {
  const written = emitReport({
    md: markdown,
    flags: { ...flags, md: flags.md ?? (flags.html ? false : true) },
    bundleFile: auditFile,
    baseName: 'phieu-thi-cong',
    htmlMeta: {
      title: `Phiếu thi công: ${order.name || order.id}`,
      kicker: 'Linh Đài Đức Mẹ Việt Nam · Triển khai',
      subtitle: `${order.id} · ${order.apply.length} trường được duyệt · ${order.sources.length} nguồn · ${order.images.length} ảnh`,
      badge: { text: verdictLabel, tone: verdictTone(order.verdict) },
      footer: 'Sinh tự động từ hồ sơ JSON. Chỉ thi công đúng phạm vi trong phiếu này.',
    },
  });
  if (!flags.quiet) written.forEach((w) => console.log(`Đã ghi: ${rel(w)}`));
} else {
  process.stdout.write(markdown);
}

if (!order.canPublish) {
  console.error(`\n=> KET LUAN "${verdictLabel}" KHONG cho phep trien khai. Dung lai va bao nguoi dung.`);
  process.exit(1);
}
