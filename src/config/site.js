/**
 * Hang so toan trang. Doi domain hay ten thuong hieu thi sua DUY NHAT o day.
 * astro.config.mjs, canonical, sitemap, og:url va JSON-LD deu doc tu file nay.
 */

/** Khong co dau "/" o cuoi. Astro tu noi duong dan. */
export const SITE_URL = 'https://ducme.vn';

export const SITE_NAME = 'Linh Đài Đức Mẹ Việt Nam';

export const SITE_TAGLINE =
  'Bản đồ và tư liệu các trung tâm Thánh Mẫu tại Việt Nam';

export const SITE_DESCRIPTION =
  'Tư liệu lịch sử, tọa độ và ảnh xác thực của 18 trung tâm hành hương Đức Mẹ ' +
  'trên khắp các giáo phận Việt Nam, từ năm 1798 đến nay.';

export const SITE_LOCALE = 'vi_VN';
export const SITE_LANG = 'vi';

/**
 * Anh chia se mang xa hoi dung chung.
 * Can thiet vi 10 trong 18 linh dia chua co anh thuc dia da xac minh,
 * nhung moi trang van phai co og:image hop le.
 */
export const OG_FALLBACK_IMAGE = '/og-default.png';
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

/** Dieu huong chinh. Nhan rut gon dung cho man hinh hep. */
export const NAV_ITEMS = [
  { href: '/ban-do/', label: 'Bản đồ', short: 'Bản đồ' },
  { href: '/chom-sao-bac-dau/', label: 'Chòm sao Bắc Đẩu', short: 'Bắc Đẩu' },
  { href: '/gioi-thieu/', label: 'Giới thiệu', short: 'Giới thiệu' },
];

/**
 * Thu tu hien thi cac vung mien tren trang chu.
 * Chuoi phai khop tuyet doi voi truong `region` trong src/data/statues.js.
 */
export const REGION_ORDER = [
  'Đồng bằng sông Hồng',
  'Bắc Trung Bộ',
  'Duyên hải Nam Trung Bộ',
  'Tây Nguyên',
  'Đông Nam Bộ',
  'Đồng bằng sông Cửu Long',
];
