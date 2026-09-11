/**
 * Ham dung sieu du lieu SEO va du lieu co cau truc JSON-LD.
 */

import { SITE_URL, SITE_NAME, SITE_LANG } from '../config/site.js';
import { getProvince, statuePath, getOrderedStatues } from './statues.js';

/** Ghep duong dan tuong doi thanh URL tuyet doi. */
export function absoluteUrl(pathname) {
  return new URL(pathname, SITE_URL).href;
}

/**
 * Cat mo ta cho vua o SERP mà khong lam vo chu tieng Viet.
 *
 * Cat theo RANH GIOI TU, khong bao gio cat giua chung. Tieng Viet co nhieu dau
 * to hop, cat giua mot cum ky tu se sinh ra chu hong tren ket qua tim kiem.
 */
export function truncateDescription(text, maxLength = 158) {
  if (!text) return '';
  const normalised = text.replace(/\s+/g, ' ').trim();
  if (normalised.length <= maxLength) return normalised;

  const clipped = normalised.slice(0, maxLength);
  const lastSpace = clipped.lastIndexOf(' ');
  const safe = (lastSpace > 0 ? clipped.slice(0, lastSpace) : clipped).trim();

  // Bo dau cau thua o cuoi truoc khi them dau ba cham.
  return `${safe.replace(/[,;:.\-–]+$/, '')}…`;
}

/** Mo ta trang chi tiet: dia diem truoc, roi den phan dau cua su that lich su. */
export function buildStatueDescription(statue) {
  const province = getProvince(statue.location);
  const prefix = `${statue.name}, ${province}, năm ${statue.year}. `;
  return truncateDescription(prefix + statue.historicalFact);
}

/** Tieu de trang chi tiet. Giu ngan de khong bi cat tren ket qua tim kiem. */
export function buildStatueTitle(statue) {
  return `${statue.name}, ${getProvince(statue.location)} | ${SITE_NAME}`;
}

/**
 * Schema.org cho mot linh dia.
 * TouristAttraction la lop con cua Place, phu hop cho diem hanh huong.
 */
export function buildPlaceSchema(statue, imageUrl) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': absoluteUrl(statuePath(statue.id)),
    name: statue.name,
    alternateName: statue.title,
    description: truncateDescription(statue.historicalFact, 300),
    url: absoluteUrl(statuePath(statue.id)),
    inLanguage: SITE_LANG,
    isAccessibleForFree: true,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: statue.lat,
      longitude: statue.lng,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: statue.location,
      addressRegion: getProvince(statue.location),
      addressCountry: 'VN',
    },
  };

  if (imageUrl) schema.image = imageUrl;
  if (statue.year) schema.foundingDate = String(statue.year);

  /**
   * sameAs: cac trang tham khao da kiem chung ve cung linh dia nay
   * (Wikipedia, trang giao phan...). Giup bo may tra loi AI xac minh
   * nguon goc du lieu thay vi chi doc mot the meta description.
   */
  const sourceUrls = (statue.sources ?? [])
    .map((source) => source.url)
    // Bo link tim kiem Google (vd "site:hdgmvietnam.com ..."): day la trang
    // ket qua tim kiem, khong phai trang dai dien cho chinh linh dia nay.
    .filter((url) => url && !url.includes('google.com/search'));
  if (sourceUrls.length > 0) schema.sameAs = sourceUrls;

  return schema;
}

/** Duong dan phan cap, hien thi duoc tren ket qua tim kiem. */
export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

/** Danh sach toan bo linh dia cho trang chu (so luong lay dong tu du lieu). */
export function buildItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Các linh địa Thánh Mẫu tại Việt Nam',
    numberOfItems: getOrderedStatues().length,
    itemListElement: getOrderedStatues().map((statue, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: statue.name,
      url: absoluteUrl(statuePath(statue.id)),
    })),
  };
}

/** Thuc the goc cua toan trang. */
export function buildWebSiteSchema(description) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description,
    inLanguage: SITE_LANG,
  };
}
