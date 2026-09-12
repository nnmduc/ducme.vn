/**
 * Logic dieu phoi dung chung cho quy trinh ba buoc cua ducme.vn.
 *
 * Nguyen tac: buoc ke tiep suy ra tu TRANG THAI THAT tren dia (hai ho so JSON),
 * khong suy ra tu nhat ky. decide() la ham thuan tuy: goi bao nhieu lan cung ra cung ket qua
 * va khong ghi gi — nho vay chay lai lenh de tiep tuc khong lam phinh nhat ky. quy-trinh.json chi giu nhung gi khong doc duoc tu ho so:
 * so vong da chay, moc thoi gian, ket qua tung buoc, trang thai ket thuc.
 */

import fs from 'node:fs';
import path from 'node:path';

import { readJson, validateResearch, validateAudit, VERDICT_LABEL } from '../../_lib/bundle.mjs';

export const RUN_SCHEMA = 'ducme.quy-trinh/v1';
export const ROOT = path.resolve(import.meta.dirname, '..', '..', '..', '..');

export const STEPS = ['khaocuu', 'kiemchung', 'trienkhai', 'ketthuc'];

export const STEP_LABEL = {
  khaocuu: 'Khảo cứu',
  kiemchung: 'Kiểm chứng',
  trienkhai: 'Triển khai',
  ketthuc: 'Kết thúc',
  luutru: 'Lưu trữ hồ sơ cũ',
};

/** Che do lam viec giao cho subagent — quyet dinh noi dung cua ban brief. */
export const MODE_LABEL = {
  moi: 'làm mới từ đầu',
  bosung: 'bổ sung theo yêu cầu của kiểm chứng',
  sualuocdo: 'sửa hồ sơ cho đúng lược đồ',
};

/** Trang thai ket thuc: cham vao mot trong nhung cai nay la vong lap dung han. */
export const TERMINAL = {
  hoanthanh: 'Hoàn thành — nội dung đã lên nhánh / Pull Request',
  tuchoi: 'Từ chối — kiểm chứng kết luận TỪ CHỐI, không triển khai',
  hetvong: 'Hết vòng — đã khảo cứu lại đủ số vòng cho phép mà vẫn chưa được duyệt',
  cannguoiquyet: 'Cần người quyết — gặp điểm chặn mà máy không được phép tự quyết',
  dungkythuat: 'Dừng kỹ thuật — lỗi hồ sơ hoặc lỗi công cụ không tự sửa được',
};

export const dirOf = (id) => path.join(ROOT, 'docs', 'khao-cuu', id);

/** Ho so kiem chung cua vong gan nhat da duoc luu tru (neu co). */
export function latestArchivedAudit(dir) {
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir)
    .filter((f) => /^kiem-chung\.vong(\d+)\.json$/.test(f))
    .sort((a, b) => Number(a.match(/vong(\d+)/)[1]) - Number(b.match(/vong(\d+)/)[1]));
  return files.length ? path.join(dir, files[files.length - 1]) : null;
}
export const stateFileOf = (id) => path.join(dirOf(id), 'quy-trinh.json');
export const now = () => new Date().toISOString();

/**
 * Quyet dinh buoc ke tiep. Thu tu kiem tra chinh la thu tu uu tien:
 * trang thai ket thuc > ho so khao cuu > ho so kiem chung > ket luan kiem chung.
 * Ham thuan tuy: doc file, khong ghi gi.
 */
export function decide(id, state) {
  const dir = dirOf(id);
  const researchFile = path.join(dir, 'khao-cuu.json');
  const auditFile = path.join(dir, 'kiem-chung.json');
  const roundsLeft = Math.max(0, (state.maxRounds ?? 2) - (state.rounds ?? 0));
  // Sua luoc do dem rieng: mot loi cau truc khong duoc an mat mot vong khao cuu noi dung,
  // nhung van phai co tran de ho so hong khong lam vong lap chay mai.
  const fixesLeft = Math.max(0, (state.maxFixes ?? 2) - (state.fixes ?? 0));

  const out = (step, why, extra = {}) => ({
    id,
    step,
    why,
    mode: null,
    verdict: null,
    preAction: null,
    suggestStatus: null,
    blocking: [],
    conditions: [],
    round: state.rounds ?? 0,
    roundsLeft,
    fixesLeft,
    status: state.status,
    ...extra,
  });

  if (state.status && state.status !== 'dangchay') {
    return out('ketthuc', `Lượt chạy đã kết thúc: ${TERMINAL[state.status] || state.status}`);
  }

  // Vua luu tru ho so kiem chung cu nhung chua kip khao cuu lai (vi du lan chay truoc dut giua chung):
  // van phai quay ve khao cuu, khong duoc nhay thang sang kiem chung lai chinh ho so cu.
  const steps = state.steps || [];
  const lastStep = steps[steps.length - 1];
  if (lastStep?.step === 'luutru') {
    if (roundsLeft <= 0) {
      return out('ketthuc', 'Đã lưu trữ hồ sơ kiểm chứng cũ nhưng hết số vòng khảo cứu lại cho phép', {
        suggestStatus: 'hetvong',
      });
    }
    const archived = latestArchivedAudit(dir);
    const prev = archived ? readJson(archived) : null;
    return out('khaocuu', 'Hồ sơ kiểm chứng vòng trước đã lưu trữ — tiếp tục khảo cứu lại theo yêu cầu của nó', {
      mode: 'bosung',
      verdict: prev?.verdict || null,
      blocking: (prev?.issues || [])
        .filter((i) => i.level === 'chan' || i.level === 'nang')
        .map((i) => `[${i.level}] ${i.issue}${i.fix ? ` — cần: ${i.fix}` : ''}`),
      archivedAudit: archived ? path.relative(ROOT, archived) : null,
    });
  }

  if (!fs.existsSync(researchFile)) {
    if (roundsLeft <= 0) {
      return out('ketthuc', 'Chưa có hồ sơ khảo cứu mà đã hết số vòng cho phép', { suggestStatus: 'hetvong' });
    }
    return out('khaocuu', 'Chưa có docs/khao-cuu/<id>/khao-cuu.json — khảo cứu từ đầu', { mode: 'moi' });
  }

  const research = readJson(researchFile);
  const rIssues = validateResearch(research);
  if (rIssues.errors.length) {
    if (fixesLeft <= 0) {
      return out('ketthuc', 'Hồ sơ khảo cứu vẫn sai lược đồ sau khi đã sửa hết số lần cho phép', {
        suggestStatus: 'dungkythuat',
        blocking: rIssues.errors,
      });
    }
    return out('khaocuu', 'Hồ sơ khảo cứu sai lược đồ, phải sửa trước khi kiểm chứng', {
      mode: 'sualuocdo',
      blocking: rIssues.errors,
    });
  }

  if (!fs.existsSync(auditFile)) {
    return out('kiemchung', 'Đã có hồ sơ khảo cứu hợp lệ, chưa có hồ sơ kiểm chứng', { mode: 'moi' });
  }

  const audit = readJson(auditFile);
  const aIssues = validateAudit(audit, research);
  if (aIssues.errors.length) {
    if (fixesLeft <= 0) {
      return out('ketthuc', 'Hồ sơ kiểm chứng vẫn sai lược đồ sau khi đã sửa hết số lần cho phép', {
        suggestStatus: 'dungkythuat',
        blocking: aIssues.errors,
      });
    }
    return out('kiemchung', 'Hồ sơ kiểm chứng sai lược đồ hoặc không khớp hồ sơ khảo cứu', {
      mode: 'sualuocdo',
      blocking: aIssues.errors,
    });
  }

  const verdict = audit.verdict;
  const label = VERDICT_LABEL[verdict] || verdict;

  if (verdict === 'AP_DUNG' || verdict === 'AP_DUNG_CO_DIEU_KIEN') {
    const done = (state.steps || []).some((s) => s.step === 'trienkhai' && s.result === 'xong');
    if (done) return out('ketthuc', 'Đã triển khai xong', { verdict, suggestStatus: 'hoanthanh' });
    return out('trienkhai', `Kết luận kiểm chứng: ${label}`, { verdict, conditions: audit.conditions || [] });
  }

  if (verdict === 'TRA_LAI_KHAO_CUU') {
    if (roundsLeft <= 0) {
      return out('ketthuc', `Kết luận ${label} nhưng đã hết số vòng khảo cứu lại cho phép`, {
        verdict,
        suggestStatus: 'hetvong',
      });
    }
    return out('khaocuu', `Kết luận ${label} — khảo cứu lại theo đúng danh sách thiếu sót`, {
      verdict,
      mode: 'bosung',
      preAction: 'archive-audit',
      blocking: (audit.issues || [])
        .filter((i) => i.level === 'chan' || i.level === 'nang')
        .map((i) => `[${i.level}] ${i.issue}${i.fix ? ` — cần: ${i.fix}` : ''}`),
    });
  }

  return out('ketthuc', `Kết luận ${label} — không triển khai`, { verdict, suggestStatus: 'tuchoi' });
}
