/**
 * Ham dan xuat tren bo du lieu linh dia.
 * KHONG sua doi du lieu goc. Moi gia tri o day deu tinh tu src/data/statues.js.
 */

import { MARIAN_STATUES_DATA } from '../data/statues.js';
import { REGION_ORDER } from '../config/site.js';

/**
 * Tach ten tinh hoac thanh pho tu chuoi dia chi day du.
 *
 * Quy tac: bo phan trong ngoac don, lay doan cuoi sau dau phay, bo tien to
 * hanh chinh. Da doi chieu dung voi toan bo ban ghi hien co.
 *
 *   "Xa Dong Kho, huyen Tanh Linh, tinh Binh Thuan"        -> "Bình Thuận"
 *   "... quan Son Tra, TP. Da Nang"                        -> "Đà Nẵng"
 *   "... huyen Ninh Son, Ninh Thuan (giap Lam Dong)"        -> "Ninh Thuận"
 */
export function getProvince(location) {
  if (!location) return '';
  const withoutParens = location.replace(/\s*\([^)]*\)/g, '').trim();
  const lastSegment = withoutParens.split(',').pop().trim();
  return lastSegment.replace(/^(tỉnh|thành phố|TP\.|TP)\s+/i, '').trim();
}

/**
 * Thu tu hien thi chuan cua toan trang: theo vung mien, roi theo nam thanh lap.
 * Trang chu, dieu huong truoc/sau va sitemap deu dung chung thu tu nay.
 */
export function getOrderedStatues() {
  return [...MARIAN_STATUES_DATA].sort((a, b) => {
    const regionDelta =
      REGION_ORDER.indexOf(a.region) - REGION_ORDER.indexOf(b.region);
    if (regionDelta !== 0) return regionDelta;
    if (a.year !== b.year) return a.year - b.year;
    return a.name.localeCompare(b.name, 'vi');
  });
}

/** Gom linh dia theo vung mien, giu dung thu tu REGION_ORDER. */
export function getStatuesByRegion() {
  const ordered = getOrderedStatues();
  return REGION_ORDER.map((region) => ({
    region,
    statues: ordered.filter((s) => s.region === region),
  })).filter((group) => group.statues.length > 0);
}

/** Linh dia lien ke trong thu tu chuan, dung cho lien ket truoc/sau. */
export function getNeighbours(id) {
  const ordered = getOrderedStatues();
  const index = ordered.findIndex((s) => s.id === id);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? ordered[index - 1] : ordered[ordered.length - 1],
    next: index < ordered.length - 1 ? ordered[index + 1] : ordered[0],
  };
}

/** Duong dan chuan cua mot linh dia. Luon co dau "/" o cuoi. */
export function statuePath(id) {
  return `/linh-dai/${id}/`;
}

/** Toa do dang hien thi tieng Viet: B = Bac, D = Dong. */
export function formatCoords(lat, lng) {
  return `${lat.toFixed(4)}° B, ${lng.toFixed(4)}° Đ`;
}

/** Nam som nhat va muon nhat trong toan bo du lieu. */
export function getYearRange() {
  const years = MARIAN_STATUES_DATA.map((s) => s.year);
  return { min: Math.min(...years), max: Math.max(...years) };
}
