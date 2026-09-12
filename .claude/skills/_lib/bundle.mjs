/**
 * Hop dong du lieu giua ba skill noi dung cua ducme.vn.
 *
 *   marian-research  -> docs/khao-cuu/<id>/khao-cuu.json    (schema ducme.khao-cuu/v1)
 *   marian-audit     -> docs/khao-cuu/<id>/kiem-chung.json  (schema ducme.kiem-chung/v1)
 *   marian-publish   -> doc ca hai, sinh phieu thi cong
 *
 * Bao cao markdown/HTML deu sinh RA TU cac file JSON nay, khong viet tay song song.
 * Sua lược đồ o day thi phai sua ca ba script format/read tuong ung.
 */

import fs from 'node:fs';
import path from 'node:path';

export const RESEARCH_SCHEMA = 'ducme.khao-cuu/v1';
export const AUDIT_SCHEMA = 'ducme.kiem-chung/v1';

export const VERDICTS = ['AP_DUNG', 'AP_DUNG_CO_DIEU_KIEN', 'TRA_LAI_KHAO_CUU', 'TU_CHOI'];

export const VERDICT_LABEL = {
  AP_DUNG: 'ÁP DỤNG',
  AP_DUNG_CO_DIEU_KIEN: 'ÁP DỤNG CÓ ĐIỀU KIỆN',
  TRA_LAI_KHAO_CUU: 'TRẢ LẠI KHẢO CỨU',
  TU_CHOI: 'TỪ CHỐI',
};

/** Chi hai ket luan dau cho phep marian-publish dong vao ma nguon. */
export const VERDICT_ALLOWS_PUBLISH = {
  AP_DUNG: true,
  AP_DUNG_CO_DIEU_KIEN: true,
  TRA_LAI_KHAO_CUU: false,
  TU_CHOI: false,
};

export const AXES = [
  { key: 'nguon', label: 'Chất lượng nguồn' },
  { key: 'truyvet', label: 'Truy vết luận điểm' },
  { key: 'chinhxac', label: 'Độ chính xác dữ liệu' },
  { key: 'hinhanh', label: 'Hình ảnh' },
  { key: 'phandinh', label: 'Phân định sự thật / truyền tụng' },
  { key: 'giongvan', label: 'Giọng văn & trung lập' },
  { key: 'kythuat', label: 'Tính kỹ thuật' },
];

/** Cac truong van xuoi + du lieu ma bao cao kiem chung co the duyet tung phan. */
export const APPROVABLE_FIELDS = [
  'name', 'title', 'year', 'lat', 'lng', 'elevation', 'location', 'region', 'diocese',
  'historicalFact', 'oralTradition', 'architect', 'significance',
  'realImage', 'realImageCaption', 'galleryImages', 'sources', 'constellationRole',
];

export const FIELD_ACTIONS = ['them', 'sua', 'giunguyen'];
export const CLAIM_RESULTS = ['dat', 'sua', 'bo'];
export const SOURCE_TIERS = ['A', 'B', 'C'];
export const ISSUE_LEVELS = ['chan', 'nang', 'nhe'];

/**
 * Vai tro cua mot anh de xuat trong "images[]" cua khao-cuu.json:
 *   - "chinh": anh chinh, do vao record.realImage (toi da 1 anh moi ho so).
 *   - "phu":   anh phu minh hoa them, do vao record.galleryImages[] (0..nhieu anh).
 */
export const IMAGE_ROLES = ['chinh', 'phu'];

/**
 * Tach mang "images[]" (co truong role) thanh anh chinh va danh sach anh phu, dung chung
 * boi cac lenh format/read-handoff de hien thi dung noi anh se do vao (realImage vs galleryImages).
 */
export function splitImagesByRole(images) {
  const list = Array.isArray(images) ? images : [];
  const main = list.find((im) => im?.role === 'chinh') || null;
  const gallery = list.filter((im) => im?.role !== 'chinh');
  return { main, gallery };
}

export function readJson(file) {
  const abs = path.resolve(file);
  if (!fs.existsSync(abs)) {
    const err = new Error(`Khong tim thay file: ${file}`);
    err.code = 'ENOENT';
    throw err;
  }
  try {
    return JSON.parse(fs.readFileSync(abs, 'utf8'));
  } catch (e) {
    throw new Error(`File ${file} khong phai JSON hop le: ${e.message}`);
  }
}

export function writeFileSafe(file, content) {
  const abs = path.resolve(file);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, content, 'utf8');
  return abs;
}

const isStr = (v) => typeof v === 'string' && v.trim().length > 0;
const isArr = (v) => Array.isArray(v);

/**
 * Kiem ho so khao cuu. Tra ve { errors, warnings }.
 * errors = khong the ban giao cho marian-audit.
 */
export function validateResearch(b) {
  const errors = [];
  const warnings = [];
  const E = (m) => errors.push(m);
  const W = (m) => warnings.push(m);

  if (b?.schema !== RESEARCH_SCHEMA) E(`schema phai la "${RESEARCH_SCHEMA}" (hien: ${b?.schema})`);
  if (!/^[a-z0-9]+$/.test(b?.id || '')) E('id phai viet thuong, khong dau, chi chu cai va so');
  if (!isStr(b?.name)) E('thieu "name" (ten linh dia dang hien thi)');
  if (!['moi', 'capnhat'].includes(b?.kind)) E('"kind" phai la "moi" hoac "capnhat"');
  if (!isStr(b?.researcher)) W('thieu "researcher"');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(b?.date || '')) E('"date" phai dang YYYY-MM-DD');
  if (!isStr(b?.scope)) W('thieu "scope" — mo ta pham vi khao cuu');

  if (!b?.record || typeof b.record !== 'object') {
    E('thieu "record" — ban ghi du lieu de xuat cho src/data/statues.js');
  } else if (b.record.id !== b.id) {
    E(`record.id ("${b.record.id}") khac id cua ho so ("${b.id}")`);
  }

  const codes = new Set();
  if (!isArr(b?.sources) || b.sources.length < 2) {
    E('"sources" phai la mang tu 2 phan tu tro len');
  } else {
    b.sources.forEach((s, i) => {
      const tag = `sources[${i}]`;
      if (!/^S\d+$/.test(s?.code || '')) E(`${tag}.code phai dang "S1", "S2"...`);
      else if (codes.has(s.code)) E(`${tag}.code "${s.code}" bi trung`);
      else codes.add(s.code);
      if (!isStr(s?.title) || s.title.length <= 5) E(`${tag}.title phai dai hon 5 ky tu`);
      if (!isStr(s?.url) || !s.url.startsWith('https://')) E(`${tag}.url phai bat dau bang https://`);
      if (!SOURCE_TIERS.includes(s?.tier)) E(`${tag}.tier phai la A, B hoac C`);
      if (s?.tier === 'C' && s?.inRecord) E(`${tag}: nguon cap C khong duoc dua vao truong sources cua du lieu`);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(s?.accessed || '')) W(`${tag}.accessed nen ghi ngay truy cap dang YYYY-MM-DD`);
      if (!isStr(s?.supports)) W(`${tag}.supports nen ghi nguon nay chung minh dieu gi`);
    });
    if (b.sources.filter((s) => s.inRecord).length < 2) {
      E('phai co it nhat 2 nguon danh dau inRecord: true de dua vao truong sources cua du lieu');
    }
  }

  if (!isArr(b?.fields) || b.fields.length === 0) {
    E('"fields" phai liet ke it nhat mot truong du lieu duoc de xuat thay doi');
  } else {
    b.fields.forEach((f, i) => {
      const tag = `fields[${i}]`;
      if (!APPROVABLE_FIELDS.includes(f?.field)) E(`${tag}.field "${f?.field}" khong thuoc danh sach truong duyet duoc`);
      if (!FIELD_ACTIONS.includes(f?.action)) E(`${tag}.action phai la ${FIELD_ACTIONS.join(' | ')}`);
      if (f?.action !== 'giunguyen' && f?.value === undefined) E(`${tag}.value bat buoc khi action la "${f?.action}"`);
      if (!isArr(f?.claims) || f.claims.length === 0) {
        if (['historicalFact', 'architect', 'significance', 'year', 'lat', 'lng'].includes(f?.field)) {
          E(`${tag}: truong "${f.field}" bat buoc co "claims" gan tung khang dinh voi nguon`);
        } else {
          W(`${tag}: truong "${f?.field}" chua co "claims"`);
        }
      } else {
        f.claims.forEach((c, j) => {
          const ctag = `${tag}.claims[${j}]`;
          if (!isStr(c?.text)) E(`${ctag}.text thieu noi dung khang dinh`);
          if (!isArr(c?.sources) || c.sources.length === 0) E(`${ctag}.sources phai gan it nhat 1 ma nguon`);
          (c?.sources || []).forEach((code) => {
            if (!codes.has(code)) E(`${ctag} tro toi ma nguon "${code}" khong co trong "sources"`);
          });
          if (!['cao', 'trungbinh', 'thap'].includes(c?.confidence)) W(`${ctag}.confidence nen la cao | trungbinh | thap`);
        });
      }
    });
  }

  if (!isArr(b?.images)) {
    W('"images" nen la mang rong [] khi khong de xuat anh');
  } else {
    let mainCount = 0;
    b.images.forEach((im, i) => {
      const tag = `images[${i}]`;
      // Anh tu nguon cong khai: giu nguyen URL goc (filePage) + ghi ro nguon trong caption la du.
      // "license" la thong tin tot-neu-co, khong bat buoc — nhieu trang tin giao phan/bao chi
      // khong ghi giay phep Creative Commons cu the, nhung van la nguon cong khai hop le.
      if (!isStr(im?.filePage)) E(`${tag}.filePage phai la URL trang goc con truy cap duoc`);
      if (!isStr(im?.author)) E(`${tag}.author bat buoc (ten tac gia, hoac ten toa soan/trang neu khong ro tac gia ca nhan)`);
      if (im?.license !== undefined && im.license !== null && !isStr(im.license)) {
        W(`${tag}.license neu co phai la chuoi mo ta — nhung day khong phai truong bat buoc`);
      }
      if (im?.notAi !== true) E(`${tag}.notAi phai la true kem cam ket anh khong do AI tao sinh`);
      if (!IMAGE_ROLES.includes(im?.role)) {
        E(`${tag}.role phai la "chinh" (-> realImage) hoac "phu" (-> galleryImages[])`);
      } else if (im.role === 'chinh') {
        mainCount++;
      }
      if (!isStr(im?.caption)) {
        E(`${tag}.caption bat buoc — phai ghi ro nguon (vi du "Nguon: ten trang/bai viet"), se dat vao realImageCaption (role "chinh") hoac galleryImages[].caption (role "phu")`);
      }
    });
    if (mainCount > 1) {
      E(`"images" co ${mainCount} anh role "chinh" — chi duoc toi da 1 anh chinh moi ho so, con lai phai la "phu"`);
    }
  }

  if (!isArr(b?.conflicts)) W('"conflicts" nen la mang rong [] khi khong co mau thuan nguon');
  if (!isArr(b?.unknowns)) W('"unknowns" nen la mang rong [] khi khong con diem chua ro');
  if (isArr(b?.unknowns) && b.unknowns.length === 0) {
    W('"unknowns" rong — bao cao khong con diem chua chac chan nao thuong la dau hieu dao chua du sau');
  }
  if (!b?.selfAssessment) W('thieu "selfAssessment"');

  return { errors, warnings };
}

/**
 * Kiem ho so kiem chung. Truyen them ho so khao cuu de doi chieu cheo.
 */
export function validateAudit(b, research = null) {
  const errors = [];
  const warnings = [];
  const E = (m) => errors.push(m);
  const W = (m) => warnings.push(m);

  if (b?.schema !== AUDIT_SCHEMA) E(`schema phai la "${AUDIT_SCHEMA}" (hien: ${b?.schema})`);
  if (!/^[a-z0-9]+$/.test(b?.id || '')) E('id phai viet thuong, khong dau');
  if (!VERDICTS.includes(b?.verdict)) E(`"verdict" phai la mot trong: ${VERDICTS.join(', ')}`);
  if (!isStr(b?.summary)) E('thieu "summary" — ly do ket luan, 1 den 3 cau');
  if (!isStr(b?.auditor)) W('thieu "auditor"');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(b?.date || '')) E('"date" phai dang YYYY-MM-DD');
  if (!isStr(b?.researchReport)) W('thieu "researchReport" — duong dan ho so khao cuu da kiem');

  if (!isArr(b?.scores) || b.scores.length !== AXES.length) {
    E(`"scores" phai co du ${AXES.length} truc: ${AXES.map((a) => a.key).join(', ')}`);
  } else {
    const seen = new Set();
    b.scores.forEach((s, i) => {
      const tag = `scores[${i}]`;
      if (!AXES.some((a) => a.key === s?.axis)) E(`${tag}.axis "${s?.axis}" khong hop le`);
      if (seen.has(s?.axis)) E(`${tag}.axis "${s.axis}" bi trung`);
      seen.add(s?.axis);
      if (!Number.isInteger(s?.score) || s.score < 0 || s.score > 5) E(`${tag}.score phai la so nguyen 0–5`);
      if (!isStr(s?.evidence)) E(`${tag}.evidence bat buoc — diem so khong co bang chung la diem vo nghia`);
    });
  }

  const total = isArr(b?.scores) ? b.scores.reduce((n, s) => n + (Number(s?.score) || 0), 0) : 0;
  if (b?.totalScore !== undefined && b.totalScore !== total) {
    E(`"totalScore" (${b.totalScore}) khong khop tong diem cac truc (${total})`);
  }

  if (!isArr(b?.sourceChecks) || b.sourceChecks.length === 0) E('"sourceChecks" phai ghi ket qua kiem tung nguon');
  else {
    b.sourceChecks.forEach((c, i) => {
      const tag = `sourceChecks[${i}]`;
      if (!isStr(c?.code)) E(`${tag}.code thieu ma nguon`);
      if (!['OK', 'CHET', 'PROXY_CHAN', 'CHUYEN_HUONG'].includes(c?.status)) {
        E(`${tag}.status phai la OK | CHET | CHUYEN_HUONG | PROXY_CHAN`);
      }
      if (typeof c?.containsClaim !== 'boolean') E(`${tag}.containsClaim phai la true/false — nguon co thuc su chua luan diem khong`);
      if (c?.status === 'PROXY_CHAN' && !isStr(c?.recheckedWith)) {
        E(`${tag}: nguon bi proxy chan phai ghi "recheckedWith" (vi du "WebFetch") va ket qua kiem lai`);
      }
    });
  }

  if (!isArr(b?.claimChecks)) E('"claimChecks" phai la mang doi chieu tung luan diem');
  else {
    b.claimChecks.forEach((c, i) => {
      const tag = `claimChecks[${i}]`;
      if (!isStr(c?.claim)) E(`${tag}.claim thieu noi dung`);
      if (!CLAIM_RESULTS.includes(c?.result)) E(`${tag}.result phai la ${CLAIM_RESULTS.join(' | ')}`);
    });
  }

  if (!isArr(b?.imageChecks)) W('"imageChecks" nen la mang rong [] khi khong co anh de kiem');
  else {
    b.imageChecks.forEach((c, i) => {
      const tag = `imageChecks[${i}]`;
      if (!['duyet', 'loai'].includes(c?.result)) E(`${tag}.result phai la "duyet" hoac "loai"`);
      // "sourceVerified": trang goc con song, dung noi dung, cong khai xem lai duoc — KHONG doi hoi
      // phai co giay phep Creative Commons cu the. "license" van la truong tuy chon, chi de tham khao.
      if (c?.result === 'duyet' && c?.sourceVerified !== true) {
        E(`${tag}: khong duoc duyet anh khi sourceVerified khac true (nguon phai cong khai, con song, dung noi dung)`);
      }
      if (c?.result === 'duyet' && isArr(c?.aiSignals) && c.aiSignals.length > 0) {
        E(`${tag}: co dau hieu anh tao sinh (${c.aiSignals.join(', ')}) thi khong duoc duyet`);
      }
    });
  }

  if (!isArr(b?.issues)) W('"issues" nen la mang rong [] khi khong phat hien van de');
  else {
    b.issues.forEach((it, i) => {
      const tag = `issues[${i}]`;
      if (!ISSUE_LEVELS.includes(it?.level)) E(`${tag}.level phai la ${ISSUE_LEVELS.join(' | ')}`);
      if (!isStr(it?.issue)) E(`${tag}.issue thieu mo ta`);
      if (!isStr(it?.fix)) W(`${tag}.fix nen ghi de nghi xu ly`);
    });
    const blocking = b.issues.filter((it) => it.level === 'chan');
    if (blocking.length > 0 && b?.verdict === 'AP_DUNG') {
      E(`con ${blocking.length} van de muc "chan" nhung verdict lai la AP_DUNG`);
    }
  }

  const approved = b?.approved;
  if (!approved || typeof approved !== 'object') {
    E('thieu "approved" — danh sach chinh xac nhung gi marian-publish duoc phep dua len');
  } else {
    if (!isArr(approved.fields)) E('"approved.fields" phai la mang ten truong');
    else {
      approved.fields.forEach((f) => {
        if (!APPROVABLE_FIELDS.includes(f)) E(`approved.fields chua truong khong hop le: "${f}"`);
        if (research && !research.fields?.some((rf) => rf.field === f)) {
          E(`approved.fields duyet truong "${f}" nhung ho so khao cuu khong de xuat truong nay`);
        }
      });
    }
    if (!isArr(approved.sources)) E('"approved.sources" phai la mang ma nguon duoc dua vao du lieu');
    else if (approved.sources.length < 2 && VERDICT_ALLOWS_PUBLISH[b?.verdict]) {
      E('duyet dua len ma chi co duoi 2 nguon — vi pham quy chuan trich dan cua du an');
    }
    if (!isArr(approved.images)) E('"approved.images" phai la mang (rong neu khong duyet anh nao)');
    if (typeof approved.constellation !== 'boolean') E('"approved.constellation" phai la true/false');
    if (research) {
      (approved.sources || []).forEach((code) => {
        if (!research.sources?.some((s) => s.code === code)) {
          E(`approved.sources tro toi ma nguon "${code}" khong co trong ho so khao cuu`);
        }
      });
      (approved.images || []).forEach((file) => {
        if (!research.images?.some((im) => im.file === file)) {
          E(`approved.images tro toi anh "${file}" khong co trong "images[]" cua ho so khao cuu`);
        }
      });
    }
  }

  if (b?.verdict === 'AP_DUNG_CO_DIEU_KIEN' && (!isArr(b?.conditions) || b.conditions.length === 0)) {
    E('ket luan AP_DUNG_CO_DIEU_KIEN bat buoc liet ke "conditions" — marian-publish lam dung danh sach nay');
  }
  if (b?.verdict === 'AP_DUNG' && isArr(b?.conditions) && b.conditions.length > 0) {
    W('verdict la AP_DUNG nhung van co "conditions" — neu that su co dieu kien thi phai dung AP_DUNG_CO_DIEU_KIEN');
  }
  if (research && b?.id && research.id && b.id !== research.id) {
    E(`id ho so kiem chung ("${b.id}") khac ho so khao cuu ("${research.id}")`);
  }

  return { errors, warnings, totalScore: total };
}

/**
 * Gop hai ho so thanh phieu thi cong cho marian-publish.
 * Chi tra ve nhung truong da duoc duyet, kem danh sach bi loai va dieu kien kem theo.
 */
export function buildWorkOrder(research, audit) {
  const approvedFields = new Set(audit?.approved?.fields || []);
  const apply = [];
  const excluded = [];

  for (const f of research?.fields || []) {
    const entry = { field: f.field, action: f.action, value: f.value, note: f.note || null };
    if (approvedFields.has(f.field)) apply.push(entry);
    else excluded.push({ ...entry, reason: 'khong nam trong approved.fields cua bao cao kiem chung' });
  }

  const approvedSourceCodes = new Set(audit?.approved?.sources || []);
  const sources = (research?.sources || [])
    .filter((s) => approvedSourceCodes.has(s.code))
    .map((s) => ({ title: s.title, url: s.url }));

  const approvedImages = new Set(audit?.approved?.images || []);
  const images = (research?.images || []).filter((im) => approvedImages.has(im.file));
  const rejectedImages = (research?.images || []).filter((im) => !approvedImages.has(im.file));

  return {
    id: research?.id || audit?.id,
    name: research?.name,
    verdict: audit?.verdict,
    canPublish: Boolean(VERDICT_ALLOWS_PUBLISH[audit?.verdict]),
    conditions: audit?.conditions || [],
    apply,
    excluded,
    sources,
    images,
    rejectedImages,
    constellationAllowed: Boolean(audit?.approved?.constellation),
    record: research?.record || null,
    impact: audit?.impact || null,
  };
}
