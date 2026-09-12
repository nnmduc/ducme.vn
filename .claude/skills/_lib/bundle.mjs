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
  { key: 'hapdan', label: 'Sức hấp dẫn & chiều sâu tư liệu' },
];

/** Diem toi da = so truc x 5. Dung chung cho ca ba lenh format, dung viet cung "/35". */
export const MAX_SCORE = AXES.length * 5;

/** Cac truong van xuoi + du lieu ma bao cao kiem chung co the duyet tung phan. */
export const APPROVABLE_FIELDS = [
  'name', 'title', 'year', 'lat', 'lng', 'elevation', 'location', 'region', 'diocese',
  'historicalFact', 'oralTradition', 'architect', 'significance',
  'realImage', 'realImageCaption', 'galleryImages', 'sources', 'constellationRole',
];

export const FIELD_ACTIONS = ['them', 'sua', 'giunguyen'];

/**
 * Ket qua doi chieu mot luan diem khi kiem chung:
 *   - "dat":               nguon chua dung luan diem, giu nguyen.
 *   - "sua":               nguon co nhung khac cau chu / con so, sua lai cho khop.
 *   - "bo":                khong nguon nao chong do, bo han.
 *   - "chuyentruyentung":  khong kiem chung duoc nhu su that lich su, NHUNG van dang gia
 *                          va co nguoi ke lai -> khong bo, chuyen sang oralTradition /
 *                          folklore kem nhan "tuong truyen / theo loi ke".
 */
export const CLAIM_RESULTS = ['dat', 'sua', 'bo', 'chuyentruyentung'];

/**
 * Thu bac nguon. Cap C VAN TRICH DAN DUOC (du an phi loi nhuan, muc dich khao cuu &
 * hoc tap) mien la gan nhan dung cho: no chong do phan truyen tung, khong chong do
 * phan su that lich su. Chi cap D la khong duoc dua vao du lieu website.
 */
export const SOURCE_TIERS = ['A', 'B', 'C', 'D'];

export const SOURCE_TIER_LABEL = {
  A: 'A · nguồn gốc (văn khố, kỷ yếu, bia ký)',
  B: 'B · thứ cấp đáng tin (trang giáo phận, báo có toà soạn, sách có NXB)',
  C: 'C · tư liệu mở (blog hành hương, trang du lịch, báo mạng tổng hợp, diễn đàn) — trích dẫn được, phải gắn nhãn',
  D: 'D · manh mối thô (mạng xã hội, video, bình luận, lời kể chép lại) — chỉ để lần ra nguồn khác',
};

/** Cap nguon duoc phep dung lam cho dua cho mot khang dinh trong historicalFact. */
export const FACT_TIERS = ['A', 'B'];

export const ISSUE_LEVELS = ['chan', 'nang', 'nhe'];

/**
 * Do xac thuc cua mot chuyen ke trong "folklore[]":
 *   - "chuakiemchung": dang luu hanh, chua co nguon cap A/B doi chieu. VAN DUOC DANG,
 *                      voi dieu kien viet o oralTradition kem nhan "tuong truyen".
 *   - "codoichieu":    co it nhat mot nguon cap A/B xac nhan phan su kien nen cua chuyen.
 *   - "dabacbo":       co nguon bac bo. Giu lai trong ho so de khoi ai di tim lai,
 *                      nhung khong duoc dua len website.
 */
export const FOLKLORE_VERACITY = ['chuakiemchung', 'codoichieu', 'dabacbo'];

export const FOLKLORE_VERACITY_LABEL = {
  chuakiemchung: 'chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng',
  codoichieu: 'có nguồn A/B đối chiếu phần nền',
  dabacbo: 'đã bị bác bỏ — không đưa lên website',
};

/** Trang thai cua mot anh trong kho ung vien "imageCandidates[]". */
export const CANDIDATE_STATUS = ['ungvien', 'chon', 'loai'];

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
      if (!SOURCE_TIERS.includes(s?.tier)) E(`${tag}.tier phai la A, B, C hoac D`);
      // Cap C duoc phep vao du lieu: du an phi loi nhuan, muc dich khao cuu & hoc tap.
      // Chi cap D (mang xa hoi, video, binh luan) la khong, vi khong co trang goc on dinh.
      if (s?.tier === 'D' && s?.inRecord) {
        E(`${tag}: nguon cap D (mang xa hoi/video/binh luan) khong dua thang vao truong sources — lan ra nguon on dinh hon roi hay dan`);
      }
      if (!/^\d{4}-\d{2}-\d{2}$/.test(s?.accessed || '')) W(`${tag}.accessed nen ghi ngay truy cap dang YYYY-MM-DD`);
      if (!isStr(s?.supports)) W(`${tag}.supports nen ghi nguon nay chung minh dieu gi`);
    });
    const inRecordSources = b.sources.filter((s) => s.inRecord);
    if (inRecordSources.length < 2) {
      E('phai co it nhat 2 nguon danh dau inRecord: true de dua vao truong sources cua du lieu');
    }
    if (inRecordSources.length >= 2 && !inRecordSources.some((s) => FACT_TIERS.includes(s.tier))) {
      W('toan bo nguon dua vao du lieu deu la cap C — dang duoc, nhung nen tim them mot nguon cap A/B lam tru cot');
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
        // Chi bat buoc gan nguon o nhung truong ma sai la sai su that: moc lich su va toa do.
        // architect/significance/oralTradition la van mo ta — thieu claims chi canh bao.
        if (['historicalFact', 'year', 'lat', 'lng'].includes(f?.field)) {
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
          // Khang dinh trong historicalFact ma chi dua nguon mo: khong chan, nhung phai
          // hoac tim them nguon A/B, hoac chuyen xuong oralTradition/folklore kem nhan.
          if (f?.field === 'historicalFact' && isArr(c?.sources) && c.sources.length > 0) {
            const tiers = c.sources.map((code) => b.sources?.find((s) => s.code === code)?.tier);
            if (tiers.every((t) => t === 'C' || t === 'D')) {
              W(`${ctag}: khang dinh lich su chi dua nguon cap C/D — tim them nguon A/B, hoac chuyen sang oralTradition/folklore kem nhan "tuong truyen"`);
            }
          }
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
      // "author" khong con la dieu kien chan: rat nhieu bai tin giao xu khong ky ten.
      // Ghi duoc thi ghi, khong thi de "Khong ro tac gia" va noi ro nguon o caption.
      if (!isStr(im?.author)) W(`${tag}.author de trong — ghi ten tac gia, hoac ten trang/toa soan, hoac "Khong ro tac gia"`);
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

  // Kho anh ung vien: thu thap rong truoc, loc sau. O day co y de rat long —
  // chi can mot URL trang co anh va mot dong ghi chu la du ghi vao.
  if (!isArr(b?.imageCandidates)) {
    W('"imageCandidates" nen la mang — kho anh ung vien gom rong trong luc doc bai, loc dan ve "images[]"');
  } else {
    b.imageCandidates.forEach((c, i) => {
      const tag = `imageCandidates[${i}]`;
      if (!isStr(c?.pageUrl)) E(`${tag}.pageUrl bat buoc — URL trang co chua anh (khong phai URL anh tho)`);
      if (c?.status !== undefined && !CANDIDATE_STATUS.includes(c.status)) {
        E(`${tag}.status phai la ${CANDIDATE_STATUS.join(' | ')}`);
      }
      if (!isStr(c?.note)) W(`${tag}.note nen ghi anh chup gi, vi sao dang de y`);
    });
  }

  if (isArr(b?.images) && b.images.length === 0 && (!isArr(b?.imageCandidates) || b.imageCandidates.length === 0) && !isStr(b?.imageSearchNote)) {
    W('khong co anh de xuat, khong co anh ung vien, cung khong co "imageSearchNote" — phai ghi lai da luc tim qua nhung dau');
  }

  // Chuyen ke dan gian: phan "ly ky" ma nguoi doc tim den. Khong bat buoc,
  // nhung mot ho so khong co lay mot chuyen nao thuong la chua hoi nguoi dia phuong.
  if (!isArr(b?.folklore)) {
    W('"folklore" nen la mang — noi ghi cac chuyen ke, giai thoai, su tich quanh linh dia (mang rong [] neu that su khong tim duoc)');
  } else {
    b.folklore.forEach((f, i) => {
      const tag = `folklore[${i}]`;
      if (!isStr(f?.title)) E(`${tag}.title bat buoc — dat ten cho chuyen ke`);
      if (!isStr(f?.story)) E(`${tag}.story bat buoc — ke lai noi dung chuyen`);
      if (!FOLKLORE_VERACITY.includes(f?.veracity)) {
        E(`${tag}.veracity phai la ${FOLKLORE_VERACITY.join(' | ')}`);
      }
      if (!isArr(f?.sources) || f.sources.length === 0) {
        E(`${tag}.sources phai gan it nhat 1 ma nguon — nguon cap C, D deu duoc, mien la co cho de nguoi khac doc lai`);
      } else {
        f.sources.forEach((code) => {
          if (!codes.has(code)) E(`${tag} tro toi ma nguon "${code}" khong co trong "sources"`);
        });
      }
      if (!isStr(f?.spread)) W(`${tag}.spread nen ghi chuyen nay luu hanh o dau (truyen mieng tai cho, bao mang, blog hanh huong...)`);
    });
    const usable = b.folklore.filter((f) => f.veracity !== 'dabacbo');
    if (b.folklore.length > 0 && usable.length === 0) {
      W('moi chuyen ke trong "folklore" deu da bi bac bo — oralTradition se khong co gi de viet');
    }
  }
  if (isArr(b?.folklore) && b.folklore.length === 0 && !isStr(b?.folkloreSearchNote)) {
    W('"folklore" rong — ghi "folkloreSearchNote" cho biet da tim chuyen ke qua nhung dau roi ma khong co');
  }

  // Manh moi chua lan het: de rat long, chi can mot dong chu. Muc dich la luot khao cuu
  // sau khong phai do lai tu dau.
  if (b?.leads !== undefined && !isArr(b.leads)) {
    E('"leads" neu co phai la mang — moi phan tu la mot chuoi, hoac { lead, where, why }');
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
      if (c?.result === 'duyet' && c?.subjectMatches === false) {
        E(`${tag}: anh khong dung linh dia dang xet thi khong duoc duyet, du nguon co that`);
      }
      if (c?.result === 'loai' && !isStr(c?.note)) {
        W(`${tag}: loai mot anh thi phai ghi "note" ly do — nguoi khao cuu con biet duong tim anh khac`);
      }
    });
  }

  // Chuyen ke duoc kiem theo chuan rieng, nhe hon han su that lich su.
  if (b?.folkloreChecks !== undefined) {
    if (!isArr(b.folkloreChecks)) E('"folkloreChecks" phai la mang');
    else {
      b.folkloreChecks.forEach((c, i) => {
        const tag = `folkloreChecks[${i}]`;
        if (!isStr(c?.title)) E(`${tag}.title thieu ten chuyen ke`);
        if (!['duyet', 'loai'].includes(c?.result)) E(`${tag}.result phai la "duyet" hoac "loai"`);
        if (c?.veracity !== undefined && !FOLKLORE_VERACITY.includes(c.veracity)) {
          E(`${tag}.veracity phai la ${FOLKLORE_VERACITY.join(' | ')}`);
        }
        if (c?.result === 'duyet' && c?.veracity === 'dabacbo') {
          E(`${tag}: chuyen ke da bi nguon khac bac bo thi khong duoc duyet dua len website`);
        }
        if (c?.result === 'duyet' && c?.labelled === false) {
          E(`${tag}: duyet mot chuyen ke chua gan nhan "tuong truyen / theo loi ke" — bat buoc gan nhan truoc`);
        }
        if (research && !research.folklore?.some((f) => f.title === c?.title)) {
          E(`${tag}: chuyen ke "${c?.title}" khong co trong "folklore[]" cua ho so khao cuu`);
        }
      });
    }
  } else if (isArr(research?.folklore) && research.folklore.length > 0) {
    W(`ho so khao cuu co ${research.folklore.length} chuyen ke nhung "folkloreChecks" bo trong — kiem va ghi ket qua tung chuyen`);
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
    if (approved.folklore !== undefined && !isArr(approved.folklore)) {
      E('"approved.folklore" neu co phai la mang tieu de chuyen ke duoc phep viet vao oralTradition');
    }
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
      (approved.folklore || []).forEach((title) => {
        const story = research.folklore?.find((f) => f.title === title);
        if (!story) {
          E(`approved.folklore duyet chuyen ke "${title}" khong co trong "folklore[]" cua ho so khao cuu`);
        } else if (story.veracity === 'dabacbo') {
          E(`approved.folklore duyet chuyen ke "${title}" nhung ho so ghi da bi bac bo (veracity: dabacbo)`);
        }
      });
      if (isArr(research.folklore) && research.folklore.some((f) => f.veracity !== 'dabacbo')
          && (approved.folklore || []).length === 0
          && (approved.fields || []).includes('oralTradition')) {
        W('duyet oralTradition nhung "approved.folklore" rong — ghi ro chuyen ke nao duoc phep viet vao, ke ca khi duyet het');
      }
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

  const approvedFolklore = new Set(audit?.approved?.folklore || []);
  const folklore = (research?.folklore || []).filter((f) => approvedFolklore.has(f.title));
  const rejectedFolklore = (research?.folklore || []).filter((f) => !approvedFolklore.has(f.title));

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
    folklore,
    rejectedFolklore,
    constellationAllowed: Boolean(audit?.approved?.constellation),
    record: research?.record || null,
    impact: audit?.impact || null,
  };
}
