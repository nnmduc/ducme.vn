#!/usr/bin/env node
// SINH TU DONG tu .claude/skills — dung sua tay file nay, sua ban goc roi chay: npm run sync:agents
/**
 * Sinh NHAT KY QUY TRINH tu quy-trinh.json — bao cao chi tiet cua mot luot chay tu dong:
 * di qua nhung buoc nao, moi buoc ra ket qua gi, quyet dinh re nhanh o dau va vi sao.
 *
 * Giong cac lenh format khac cua bo skill: khong bao gio sua tay file .md sinh ra,
 * sua quy-trinh.json roi chay lai lenh nay.
 *
 * Cach dung:
 *   node .agents/skills/marian-pipeline/scripts/format-run.mjs <id> [--html] [--stdout] [--check]
 */

import fs from 'node:fs';
import path from 'node:path';

import { readJson, validateResearch, validateAudit, VERDICT_LABEL, MAX_SCORE } from '../../_lib/bundle.mjs';
import { parseArgs, emitReport, table, rel } from '../../_lib/cli.mjs';
import { RUN_SCHEMA, STEP_LABEL, MODE_LABEL, TERMINAL, dirOf, stateFileOf } from './pipeline-lib.mjs';

const flags = parseArgs(process.argv);
const id = flags._[0];

if (!id) {
  console.error('Thieu id. Vi du: node .agents/skills/marian-pipeline/scripts/format-run.mjs nuicui --html');
  process.exit(1);
}

const stateFile = stateFileOf(id);
if (!fs.existsSync(stateFile)) {
  console.error(`Khong tim thay ${rel(stateFile)}. Luot chay chua duoc khoi tao.`);
  process.exit(1);
}

const state = readJson(stateFile);
const errors = [];
if (state.schema !== RUN_SCHEMA) errors.push(`"schema" phai la "${RUN_SCHEMA}"`);
if (!state.id) errors.push('thieu "id"');
if (!Array.isArray(state.steps)) errors.push('"steps" phai la mang');
if (errors.length) {
  console.error(`LOI HO SO QUY TRINH (${errors.length}):`);
  errors.forEach((e) => console.error(`  x ${e}`));
  process.exit(1);
}
if (flags.check) {
  console.log(`quy-trinh.json cua "${id}" dat chuan (${state.steps.length} buoc, trang thai ${state.status}).`);
  process.exit(0);
}

// Doc them hai ho so de bao cao co con so that, khong phai chi loi ke cua nhat ky.
const dir = dirOf(id);
const researchFile = path.join(dir, 'khao-cuu.json');
const auditFile = path.join(dir, 'kiem-chung.json');
const research = fs.existsSync(researchFile) ? readJson(researchFile) : null;
const audit = fs.existsSync(auditFile) ? readJson(auditFile) : null;

const fmtTime = (iso) => (iso ? iso.replace('T', ' ').slice(0, 16) : '—');
const dur = (a, b) => {
  if (!a || !b) return '—';
  const m = Math.round((Date.parse(b) - Date.parse(a)) / 60000);
  return Number.isFinite(m) ? `${m} phút` : '—';
};

const md = [];
const P = (s = '') => md.push(s);

const name = research?.name || audit?.name || state.id;
const statusLabel = TERMINAL[state.status] || 'Đang chạy';

P(`# Nhật ký quy trình tự động: ${name}`);
P();
P(`**Kết quả cuối cùng:** ${statusLabel}`);
P();
P(`- Mã linh địa: \`${state.id}\``);
P(`- Bắt đầu: ${fmtTime(state.started)} · Kết thúc: ${fmtTime(state.ended)} · Tổng: ${dur(state.started, state.ended || state.updated)}`);
P(`- Số vòng khảo cứu đã chạy: ${state.rounds || 0} / tối đa ${state.maxRounds ?? 2}`);
P(`- Số lần sửa lược đồ: ${state.fixes || 0} / tối đa ${state.maxFixes ?? 2}`);
P(`- Tạo Pull Request: ${state.options?.pr === false ? 'không (dừng ở commit)' : 'có'}`);
if (state.final?.branch) P(`- Nhánh: \`${state.final.branch}\``);
if (state.final?.pr) P(`- Pull Request: ${state.final.pr}`);
if (state.final?.note) P(`- Ghi chú: ${state.final.note}`);
P();

P('## 1. Các bước đã chạy');
P();
P(table(state.steps || [], [
  { label: 'Thời điểm', map: (s) => fmtTime(s.at) },
  { label: 'Bước', map: (s) => STEP_LABEL[s.step] || s.step },
  { label: 'Chế độ', map: (s) => (s.mode ? MODE_LABEL[s.mode] || s.mode : '—') },
  { label: 'Vòng', map: (s) => s.round ?? '—' },
  { label: 'Kết quả', map: (s) => (s.result === 'xong' ? 'xong' : 'LỖI') },
  { label: 'Ghi chú', map: (s) => s.note || '—' },
]));
P();

P('## 2. Các điểm rẽ nhánh');
P();
P('Mỗi dòng là một quyết định đã thực sự được thi hành: bộ điều phối đọc trạng thái trên đĩa, chọn bước');
P('kế tiếp, và bước đó đã chạy xong. Quyết định chưa thi hành không nằm ở đây.');
P();
P(table(state.decisions || [], [
  { label: 'Thời điểm', map: (d) => fmtTime(d.at) },
  { label: 'Chọn bước', map: (d) => STEP_LABEL[d.step] || d.step },
  { label: 'Chế độ', map: (d) => (d.mode ? MODE_LABEL[d.mode] || d.mode : '—') },
  { label: 'Kết luận kiểm chứng', map: (d) => (d.verdict ? VERDICT_LABEL[d.verdict] || d.verdict : '—') },
  { label: 'Lý do', map: (d) => d.why },
]));
P();

P('## 3. Hồ sơ sinh ra');
P();
const artifacts = [
  ['khao-cuu.json', 'hồ sơ khảo cứu (bản gốc)'],
  ['bao-cao-khao-cuu.md', 'báo cáo khảo cứu'],
  ['kiem-chung.json', 'hồ sơ kiểm chứng (bản gốc)'],
  ['bao-cao-kiem-chung.md', 'báo cáo kiểm chứng'],
  ['phieu-thi-cong.md', 'phiếu thi công cho triển khai'],
  ['quy-trinh.json', 'trạng thái lượt chạy (bản gốc của trang này)'],
]
  .map(([file, what]) => ({ file, what, có: fs.existsSync(path.join(dir, file)) ? 'có' : 'không' }))
  .concat(
    fs.readdirSync(dir)
      .filter((f) => /^(kiem-chung|bao-cao-kiem-chung)\.vong\d+\./.test(f))
      .map((f) => ({ file: f, what: 'hồ sơ kiểm chứng của vòng trước (lưu trữ)', có: 'có' })),
  );
P(table(artifacts, [
  { key: 'file', label: 'Tệp' },
  { key: 'what', label: 'Nội dung' },
  { key: 'có', label: 'Tồn tại' },
]));
P();

if (research) {
  const v = validateResearch(research);
  P('## 4. Tóm tắt khảo cứu');
  P();
  P(`- Nguồn thu được: ${research.sources?.length || 0} · đưa vào dữ liệu: ${(research.sources || []).filter((s) => s.inRecord).length}`);
  P(`- Chuyện kể ghi nhận: ${research.folklore?.length || 0}`);
  P(`- Ảnh đề xuất: ${research.images?.length || 0} · ảnh ứng viên đã gom: ${research.imageCandidates?.length || 0}`);
  P(`- Điểm chưa rõ (\`unknowns\`): ${research.unknowns?.length || 0} · mâu thuẫn nguồn: ${research.conflicts?.length || 0}`);
  P(`- Hồ sơ đúng lược đồ: ${v.errors.length ? `KHÔNG (${v.errors.length} lỗi)` : 'có'}${v.warnings.length ? ` · ${v.warnings.length} cảnh báo` : ''}`);
  if (research.selfAssessment?.biggestRisk) P(`- Rủi ro lớn nhất người khảo cứu tự nêu: ${research.selfAssessment.biggestRisk}`);
  P();
}

if (audit) {
  const v = validateAudit(audit, research);
  P('## 5. Tóm tắt kiểm chứng');
  P();
  P(`- Kết luận: **${VERDICT_LABEL[audit.verdict] || audit.verdict}**${audit.totalScore != null ? ` — ${audit.totalScore}/${MAX_SCORE} điểm` : ''}`);
  P(`- Trường được duyệt: ${(audit.approved?.fields || []).length} · nguồn được duyệt: ${(audit.approved?.sources || []).length} · ảnh được duyệt: ${(audit.approved?.images || []).length}`);
  const blocking = (audit.issues || []).filter((i) => i.level === 'chan');
  P(`- Vấn đề mức chặn: ${blocking.length} · tổng số vấn đề ghi nhận: ${(audit.issues || []).length}`);
  P(`- Hồ sơ đúng lược đồ: ${v.errors.length ? `KHÔNG (${v.errors.length} lỗi)` : 'có'}${v.warnings.length ? ` · ${v.warnings.length} cảnh báo` : ''}`);
  P();
  if ((audit.conditions || []).length) {
    P('**Điều kiện bắt buộc khi triển khai:**');
    P();
    audit.conditions.forEach((c) => P(`- ${typeof c === 'string' ? c : JSON.stringify(c)}`));
    P();
  }
  if (blocking.length) {
    P('**Vấn đề mức chặn:**');
    P();
    blocking.forEach((i) => P(`- ${i.issue}${i.where ? ` (${i.where})` : ''}${i.fix ? ` — cần: ${i.fix}` : ''}`));
    P();
  }
}

P('## 6. Việc còn lại cho người đọc');
P();
if (state.status === 'hoanthanh') {
  P('Không còn việc bắt buộc. Người duyệt Pull Request vẫn nên đọc báo cáo kiểm chứng trước khi merge —');
  P('bộ điều phối không bao giờ tự merge.');
} else if (state.status === 'cannguoiquyet') {
  P('Lượt chạy dừng vì gặp điểm chỉ con người mới quyết được. Đọc phần ghi chú ở đầu trang, quyết định,');
  P('rồi chạy lại lệnh điều phối — nó sẽ tiếp tục từ đúng chỗ đang dở.');
} else if (state.status === 'tuchoi') {
  P('Kiểm chứng kết luận TỪ CHỐI. Không có gì được đưa lên website. Hồ sơ vẫn giữ lại để lượt sau khỏi đi tìm lại.');
} else if (state.status === 'hetvong') {
  P('Đã khảo cứu lại đủ số vòng cho phép mà kiểm chứng vẫn chưa duyệt. Xem mục vấn đề mức chặn ở trên để biết còn thiếu gì.');
} else if (state.status === 'dungkythuat') {
  P('Dừng vì lỗi kỹ thuật, không phải vì nội dung. Xem cột ghi chú của bước lỗi trong bảng mục 1.');
} else {
  P('Lượt chạy chưa kết thúc.');
}
P();
P('---');
P();
P('_Trang này sinh tự động từ `quy-trinh.json`. Đừng sửa tay — sửa JSON rồi chạy lại `format-run.mjs`._');
P();

const markdown = `${md.join('\n')}`;
const written = emitReport({
  md: markdown,
  flags,
  bundleFile: stateFile,
  baseName: 'nhat-ky-quy-trinh',
  htmlMeta: {
    title: `Nhật ký quy trình: ${name}`,
    kicker: 'Linh Đài Đức Mẹ Việt Nam · Quy trình tự động',
    subtitle: `${state.id} · ${fmtTime(state.started)} → ${fmtTime(state.ended || state.updated)}`,
    badge: {
      text: statusLabel,
      tone: { hoanthanh: 'ok', tuchoi: 'bad', hetvong: 'warn', cannguoiquyet: 'warn', dungkythuat: 'bad' }[state.status] || 'info',
    },
    footer: 'Sinh tự động từ quy-trinh.json. Nguồn sự thật là file JSON, không phải trang này.',
  },
});

if (!flags.quiet && !flags.stdout) written.forEach((f) => console.log(`Da ghi: ${rel(f)}`));
