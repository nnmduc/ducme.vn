# Linh Đài Đức Mẹ Việt Nam 🇻🇳

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-7.3-ff5d01.svg)](https://astro.build)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20.11-339933.svg)](https://nodejs.org)
[![Tests](https://img.shields.io/badge/Tests-397%20passing-brightgreen.svg)](#kiểm-thử-toàn-vẹn-dữ-liệu)
[![Website](https://img.shields.io/badge/Website-ducme.vn-blue.svg)](https://ducme.vn)

Nền tảng web tư liệu số và bản đồ tương tác về **các trung tâm hành hương Thánh Mẫu tại Việt Nam** (hiện có 18, số liệu tính động từ `src/data/statues.js`), từ năm 1798 đến nay. Dự án khảo cứu lịch sử 5 pho tượng Đức Mẹ thời Đệ nhất Cộng hòa (1959–1961) và kiểm chứng giả thuyết dân gian về việc các linh đài được xếp theo hình thế chòm sao Bắc Đẩu.

🌐 **Trang web chính thức:** [https://ducme.vn](https://ducme.vn)

---

## Mục lục

- [1. Tôn chỉ & Triết lý dự án](#1-tôn-chỉ--triết-lý-dự-án)
- [2. Tính năng chính](#2-tính-năng-chính)
- [3. Ngăn xếp công nghệ](#3-ngăn-xếp-công-nghệ)
- [4. Cấu trúc thư mục](#4-cấu-trúc-thư-mục)
- [5. Yêu cầu & Cài đặt](#5-yêu-cầu--cài-đặt)
- [6. Hướng dẫn phát triển](#6-hướng-dẫn-phát-triển)
- [7. Kiểm thử toàn vẹn dữ liệu](#7-kiểm-thử-toàn-vẹn-dữ-liệu)
- [8. Đóng góp phát triển (Contributing)](#8-đóng-góp-phát-triển-contributing)
- [9. Hệ thống tài liệu kỹ thuật](#9-hệ-thống-tài-liệu-kỹ-thuật)
- [10. Bản quyền & Ghi công](#10-bản-quyền--ghi-công)
- [11. Tác giả & Liên hệ](#11-tác-giả--liên-hệ)

---

## 1. Tôn chỉ & Triết lý dự án

1. **Một linh địa, một URL tĩnh riêng biệt (Addressable SSG):**
   - Mọi trang nội dung được sinh trước hoàn toàn (Static Site Generation).
   - Toàn bộ văn xuôi, tư liệu lịch sử, tọa độ GPS, trích dẫn nguồn nằm trực tiếp trong mã nguồn HTML gửi từ máy chủ. Máy tìm kiếm và người dùng đọc được trọn vẹn ngay cả khi tắt JavaScript.
   - Các trang nội dung nạp **0 byte JavaScript**, mang lại tốc độ hiển thị tức thì.

2. **Trung thực tư liệu & Nguồn gốc kiểm chứng:**
   - Dữ liệu lịch sử căn cứ trên Kỷ yếu Đại hội Thánh Mẫu Toàn quốc 1959, văn khố các Giáo phận, tài liệu kiến trúc sư Ngô Viết Thụ, báo chí Công giáo và Wikipedia tiếng Việt.
   - Phân định rõ ràng giữa **sự kiện lịch sử đã kiểm chứng** (`historicalFact`) và **truyền tụng dân gian** (`oralTradition`).

3. **100% Ảnh thực địa xác minh bản quyền:**
   - **Tuyệt đối không dùng ảnh do AI tạo sinh.**
   - Chỉ sử dụng ảnh chụp thực tế đã xác minh bản quyền (chủ yếu từ Wikimedia Commons giấy phép CC-BY-SA hoặc Public Domain).
   - Linh địa nào chưa có ảnh xác thực sẽ để trống để đón nhận đóng góp cộng đồng.

4. **Chủ quyền biển đảo Việt Nam:**
   - Bản đồ hiển thị rõ ràng và chuẩn xác nhãn chủ quyền đối với quần đảo Hoàng Sa và Trường Sa của Việt Nam.

---

## 2. Tính năng chính

- **23 trang tĩnh chuyên sâu:**
  - **Trang chủ (`/`):** Tổng quan dự án, mục lục toàn bộ linh đài theo 6 vùng miền địa lý, bản đồ thu nhỏ dẫn đến ứng dụng bản đồ lớn.
  - **Trang chi tiết linh địa (`/linh-dai/[id]/`), một trang cho mỗi bản ghi trong dữ liệu:** Tư liệu lịch sử, kiến trúc, tọa độ địa lý, chỉ đường Google Maps, vai trò trong các phiên bản chòm sao, danh mục nguồn dẫn học thuật.
  - **Khảo cứu chòm sao Bắc Đẩu (`/chom-sao-bac-dau/`):** Phân tích 4 phiên bản chòm sao (V1 kinh điển 1959–1961, V2 biến thể Măng Đen, V3 bộ 5 tượng Đệ nhất Cộng hòa, V4 tuyến Thánh Mẫu toàn quốc).
  - **Bản đồ tương tác toàn màn hình (`/ban-do/`):** Bản đồ Leaflet với lớp nền OpenStreetMap đảo màu bảo vệ thị lực, thanh dòng thời gian 1798–2026 có chế độ tự phát (Auto Play), tìm kiếm và lọc theo thời kỳ / khu vực / chòm sao.
  - **Trang giới thiệu & Phương pháp luận (`/gioi-thieu/`):** Minh bạch phương pháp nghiên cứu, chính sách trích dẫn và tiêu chuẩn bản quyền.
  - **Trang Liên hệ & Đóng góp tư liệu (`/lien-he/`):** Kênh tiếp nhận ý kiến đóng góp, đính chính niên đại, chia sẻ tài liệu xưa và ảnh thực địa từ cộng đồng; hỗ trợ tải lên tệp an toàn (kèm xem trước, kiểm tra định dạng/dung lượng) và mã tiếp nhận (receipt code).
- **Hạ tầng Serverless Backend (Cloudflare Ecosystem):**
  - **Cloudflare Worker API (`worker/`):** Xử lý endpoint `/api/submissions`, kiểm soát CORS, giới hạn kích thước payload (16 MB), kiểm tra magic bytes tệp đính kèm.
  - **Cloudflare D1 Database:** Cơ sở dữ liệu SQLite serverless lưu trữ thông tin tiếp nhận an toàn và phi tập trung.
  - **Cloudflare R2 Object Storage:** Lưu trữ tệp tin/hình ảnh tải lên; hỗ trợ sinh token HMAC xem trước có thời hạn (14 ngày) cho quản trị viên.
  - **Cloudflare Turnstile:** Cơ chế xác thực chống spam thông minh, bảo vệ quyền riêng tư người dùng mà không cần giải mã CAPTCHA phức tạp.
  - **Cloudflare Email Routing:** Tự động chuyển tiếp thông báo gửi đóng góp tới hòm thư quản trị qua binding `send_email`.
- **Tối ưu hóa tìm kiếm (SEO) & Dữ liệu có cấu trúc:**
  - Tích hợp đầy đủ schema JSON-LD chuẩn Schema.org (`TouristAttraction`, `BreadcrumbList`, `ItemList`, `WebSite`, `ContactPage`).
  - Canonical URL, thẻ Open Graph, Twitter Card tối ưu cho chia sẻ mạng xã hội.
  - Tự động sinh `sitemap-index.xml`, `robots.txt` và `llms.txt`.
- **Tối ưu hóa tài nguyên & Hiển thị:**
  - Hình ảnh chuyển đổi sang định dạng AVIF/WebP hiện đại, responsive srcset, kích thước nội tại tránh giật khung hình (zero CLS).
  - Bộ token màu 2 lớp (Primitive Tokens & Semantic Tokens), tích hợp các token trạng thái `--status-success` và `--status-error`.
  - Bộ phông chữ Tiếng Việt hoàn chỉnh với đầy đủ dấu thanh (`vietnamese` unicode-range).

---

## 3. Ngăn xếp công nghệ

| Thành phần | Công nghệ / Thư viện | Lý do lựa chọn |
|---|---|---|
| **Framework tĩnh** | [Astro](https://astro.build) (v7) | Kiến trúc Islands Architecture, xuất HTML tĩnh với 0-byte JS cho trang nội dung |
| **Bản đồ số** | [Leaflet](https://leafletjs.com) (v1.9) | Thư viện bản đồ nhẹ, linh hoạt, hỗ trợ tuỳ biến đa lớp bản đồ và đường vẽ SVG |
| **Xử lý ảnh** | [Sharp](https://sharp.pixelplumbing.com) (v0.35) | Tối ưu hóa ảnh tự động thành định dạng AVIF/WebP thế hệ mới |
| **Phông chữ** | `@fontsource` (Lora, Playfair Display, Be Vietnam Pro) | Tải phông chữ cục bộ, tối ưu hiệu năng, bảo đảm 100% tiếng Việt |
| **Sitemap** | `@astrojs/sitemap` | Tự động tạo chỉ mục sitemap chuẩn XML |
| **Frontend Hosting & CDN** | [Cloudflare Pages](https://pages.cloudflare.com) | Phân phối tĩnh toàn cầu qua Edge CDN, bảo mật HTTP headers, băng thông không giới hạn |
| **Backend Serverless** | [Cloudflare Workers](https://workers.cloudflare.com) | API xử lý đóng góp tại biên mạng, không tốn tài nguyên chờ (zero cold start) |
| **Cơ sở dữ liệu** | [Cloudflare D1](https://developers.cloudflare.com/d1/) | SQLite phân tán serverless lưu trữ bản ghi phản hồi |
| **Lưu trữ tệp** | [Cloudflare R2](https://developers.cloudflare.com/r2/) | Lưu ảnh/tài liệu đính kèm S3-compatible, không phí egress |
| **Bảo vệ chống Bot** | [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) | Chặn spam tự động không xâm lấn, thay thế CAPTCHA truyền thống |
| **Thông báo email** | [Cloudflare Email Routing](https://developers.cloudflare.com/email-routing/) | Chuyển phát thông báo biên tập tức thì qua worker binding |

---

## 4. Cấu trúc thư mục

```text
tuong-duc-me/
├── .claude/skills/               # Bộ skill quy trình nội dung (khảo cứu → kiểm chứng → triển khai) — BẢN GỐC
├── .agents/skills/               # Bản sao cho Antigravity, sinh bằng `npm run sync:agents`, không sửa tay
├── .github/                      # Quy trình CI/CD và biểu mẫu Issue/PR trên GitHub
│   ├── workflows/deploy.yml      # GitHub Actions tự động kiểm thử, build và deploy Cloudflare Pages & Worker
│   └── ISSUE_TEMPLATE/           # Mẫu báo lỗi, đề xuất tính năng, cập nhật tư liệu
├── docs/                         # Tài liệu kỹ thuật chuyên sâu
│   ├── system-architecture.md    # Kiến trúc hệ thống, ranh giới JavaScript, luồng dữ liệu
│   ├── tech-stack.md             # Phân tích lựa chọn công nghệ frontend & serverless
│   ├── codebase-summary.md       # Tổng quan cây mã nguồn và cẩm nang phát triển
│   ├── deployment-guide.md       # Hướng dẫn triển khai Cloudflare Pages và Cloudflare Worker
│   ├── design-guidelines.md      # Quy chuẩn thiết kế giao diện, màu sắc, typography
│   └── research-report.md        # Khảo cứu lịch sử gốc 5 tượng Đức Mẹ 1959–1961
├── public/                       # Tài nguyên tĩnh công khai (favicon, og-default.png, _headers)
│   └── _headers                  # Cấu hình HTTP security & cache headers cho Cloudflare Pages
├── src/
│   ├── assets/real_photos/       # Kho ảnh chụp thực địa đã kiểm chứng
│   ├── components/               # Các Astro component (SeoHead, MarianMap, SiteHeader...)
│   ├── config/site.js            # Cấu hình hằng số toàn trang (SITE_URL, API_BASE_URL, Turnstile)
│   ├── data/statues.js           # Single Source of Truth (dữ liệu toàn bộ linh đài và các chòm sao)
│   ├── layouts/BaseLayout.astro  # Layout dùng chung cho toàn bộ trang
│   ├── lib/                      # Các hàm trợ giúp xử lý dữ liệu, ảnh, SEO
│   ├── pages/                    # Định tuyến tĩnh (index, linh-dai/[id], ban-do, lien-he...)
│   └── styles/                   # CSS Design Tokens và kiểu dáng toàn cục
├── worker/                       # Cloudflare Worker Backend cho tính năng Liên hệ & Góp ý
│   ├── scripts/                  # Script kiểm thử API tự động
│   ├── src/                      # Source code worker (router, cors, db, r2, turnstile, email)
│   ├── schema.sql                # D1 Database Schema (bảng submissions)
│   ├── wrangler.jsonc            # Cấu hình Cloudflare bindings (D1, R2, SendEmail, Turnstile)
│   └── README.md                 # Hướng dẫn chạy và triển khai worker riêng biệt
├── scripts/
│   └── sync-agent-skills.mjs     # Sinh bản sao skill cho Antigravity từ bản gốc .claude/skills
├── tests/
│   └── test_data_and_integrity.js # Bộ 397 bài kiểm thử tính toàn vẹn dữ liệu & backend
├── astro.config.mjs              # Cấu hình Astro
├── package.json                  # Khai báo phụ thuộc và kịch bản lệnh
├── CONTRIBUTING.md               # Hướng dẫn tham gia đóng góp mã nguồn và tư liệu
├── CODE_OF_CONDUCT.md            # Quy tắc ứng xử cộng đồng
├── LICENSE                       # Giấy phép nguồn mở MIT
└── README.md                     # Tài liệu giới thiệu dự án
```

---

## 5. Yêu cầu & Cài đặt

### Yêu cầu môi trường
- **Node.js**: Phiên bản `>= 20.11.0` (khuyến nghị Node 22 LTS).
- **Trình quản lý gói**: `npm` (đi kèm Node.js).

### Các bước cài đặt

```bash
# 1. Sao chép kho mã nguồn
git clone https://github.com/nnmduc/ducme.vn.git
cd ducme.vn

# 2. Cài đặt các gói phụ thuộc frontend
npm install

# 3. (Tùy chọn) Cài đặt dependencies cho Cloudflare Worker backend
cd worker && npm install && cd ..
```

---

## 6. Hướng dẫn phát triển

```bash
# Chạy máy chủ phát triển cục bộ với tính năng Hot Reload (mặc định tại http://localhost:4321)
npm run dev

# Dựng bản phân phối tĩnh sản phẩm vào thư mục `dist/`
npm run build

# Xem thử (preview) bản dựng tĩnh cục bộ
npm run preview

# Thực thi bộ kiểm thử tự động
npm test
```

> **Lưu ý về tên miền & API:** Khi cấu hình tên miền mới, chỉ cần cập nhật duy nhất giá trị hằng số `SITE_URL` và `API_BASE_URL` trong file `src/config/site.js`. Giá trị này sẽ tự động phân phối tới `astro.config.mjs`, thẻ canonical, OpenGraph, sitemap và JSON-LD.

---

## 7. Kiểm thử toàn vẹn dữ liệu

Dự án sở hữu bộ kiểm thử nghiêm ngặt gồm **397 điều kiện kiểm thử** độc lập trong `tests/test_data_and_integrity.js`, đảm bảo dữ liệu và cấu hình hệ thống không bao giờ bị sai lệch:

```bash
npm test
```

Bộ kiểm thử tự động thẩm định:
1. **Tính định danh & Toàn vẹn:** Không trùng lặp ID, tên, năm khánh thành hợp lệ (1798–2026).
2. **Tọa độ địa lý:** Tọa độ GPS nằm trong lãnh thổ Việt Nam (vĩ độ 8.0°N – 23.5°N, kinh độ 102.0°E – 110.0°E).
3. **Hình ảnh:** Tệp hình ảnh khai báo trong cơ sở dữ liệu phải thực sự tồn tại trên ổ đĩa; tuyệt đối không chứa chuỗi ảnh AI.
4. **Nguồn dẫn xác thực:** Mỗi linh địa bắt buộc phải có ít nhất 2 nguồn tài liệu trích dẫn HTTPS hợp lệ, không trỏ về domain gốc không có ngữ cảnh.
5. **Hình thế chòm sao:** Các đỉnh chòm sao Bắc Đẩu phải trỏ tới đúng ID tượng hợp lệ.
6. **Biểu mẫu & Hạ tầng Backend:** Kiểm tra đường dẫn `/lien-he/` trong thanh điều hướng, cấu hình Cloudflare Turnstile, API endpoint, tính sẵn sàng của file schema SQLite D1 và cấu hình Worker `wrangler.jsonc`.

---

## 8. Đóng góp phát triển (Contributing)

Chúng tôi trân trọng và hoan nghênh mọi đóng góp từ cộng đồng:
- **Đóng góp tư liệu & hình ảnh:** Gửi trực tiếp qua biểu mẫu trực tuyến tại **[ducme.vn/lien-he/](https://ducme.vn/lien-he/)** hoặc mở Issue/Pull Request. Yêu cầu ảnh chụp thực địa có bản quyền tự do/CC-BY-SA hoặc Public Domain.
- **Cải thiện tính năng & mã nguồn:** Tối ưu hóa giao diện bản đồ, nâng cao khả năng tiếp cận (a11y), báo cáo và sửa lỗi.

Xin vui lòng tham khảo chi tiết tại **[CONTRIBUTING.md](CONTRIBUTING.md)** để nắm rõ quy trình tạo Issue, Pull Request và tiêu chuẩn thẩm định dữ liệu.

---

## 9. Hệ thống tài liệu kỹ thuật

Thư mục [`docs/`](docs/) chứa toàn bộ các tài liệu kiến trúc và hướng dẫn thiết kế chuyên sâu:

| Tài liệu | Mô tả nội dung |
|---|---|
| [system-architecture.md](docs/system-architecture.md) | Kiến trúc hệ thống, ranh giới JavaScript, luồng dữ liệu SSG & Serverless |
| [tech-stack.md](docs/tech-stack.md) | Phân tích chi tiết ngăn xếp công nghệ (Astro, Leaflet, Cloudflare Workers/D1/R2) |
| [design-guidelines.md](docs/design-guidelines.md) | Hệ thống Design Tokens, tỷ lệ tương phản màu sắc, Typography, trạng thái biểu mẫu |
| [codebase-summary.md](docs/codebase-summary.md) | Cẩm nang định hướng mã nguồn frontend và worker dành cho lập trình viên |
| [deployment-guide.md](docs/deployment-guide.md) | Quy trình triển khai sản phẩm lên Cloudflare Pages và Cloudflare Worker Edge |
| [research-report.md](docs/research-report.md) | Báo cáo nghiên cứu lịch sử nguồn gốc 5 tượng Đức Mẹ 1959–1961 |

---

## 10. Bản quyền & Ghi công

- **Mã nguồn:** Bản quyền thuộc về tác giả, phát hành dưới giấy phép mã nguồn mở **[MIT License](LICENSE)**.
- **Tư liệu hình ảnh:** Các bức ảnh thực địa được sử dụng theo giấy phép Creative Commons (CC-BY-SA, CC-BY) hoặc thuộc Phạm vi Công cộng (Public Domain) từ các tác giả trên Wikimedia Commons. Thông tin tác giả và nguồn gốc được ghi công chi tiết trên từng trang linh địa tương ứng.
- **Dữ liệu nghiên cứu:** Tư liệu lịch sử được tổng hợp từ Kỷ yếu Đại hội Thánh Mẫu Toàn quốc 1959, tư liệu văn khố các Giáo phận Việt Nam và các tài liệu lưu trữ công khai.

---

## 11. Tác giả & Liên hệ

- **Tác giả:** Duc Nguyen ([@nnmduc](https://github.com/nnmduc))
- **Email:** `minh-duc.nguyen-nam@ekino.com`
- **Trang liên hệ & gửi góp ý:** [https://ducme.vn/lien-he/](https://ducme.vn/lien-he/)
- **Kho mã nguồn:** [https://github.com/nnmduc/ducme.vn](https://github.com/nnmduc/ducme.vn)
- **Báo lỗi kỹ thuật:** [GitHub Issues](https://github.com/nnmduc/ducme.vn/issues)

