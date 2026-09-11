# Linh Đài Đức Mẹ Việt Nam 🇻🇳

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-7.3-ff5d01.svg)](https://astro.build)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20.11-339933.svg)](https://nodejs.org)
[![Tests](https://img.shields.io/badge/Tests-347%20passing-brightgreen.svg)](#kiểm-thử-toàn-vẹn-dữ-liệu)
[![Website](https://img.shields.io/badge/Website-ducme.vn-blue.svg)](https://ducme.vn)

Nền tảng web tư liệu số và bản đồ tương tác về **18 trung tâm hành hương Thánh Mẫu tại Việt Nam**, từ năm 1798 đến nay. Dự án khảo cứu lịch sử 5 pho tượng Đức Mẹ thời Đệ nhất Cộng hòa (1959–1961) và kiểm chứng giả thuyết dân gian về việc các linh đài được xếp theo hình thế chòm sao Bắc Đẩu.

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

- **22 trang tĩnh chuyên sâu:**
  - **Trang chủ (`/`):** Tổng quan dự án, mục lục toàn bộ 18 linh đài theo 6 vùng miền địa lý, bản đồ thu nhỏ dẫn đến ứng dụng bản đồ lớn.
  - **18 trang chi tiết linh địa (`/linh-dai/[id]/`):** Tư liệu lịch sử, kiến trúc, tọa độ địa lý, chỉ đường Google Maps, vai trò trong các phiên bản chòm sao, danh mục nguồn dẫn học thuật.
  - **Khảo cứu chòm sao Bắc Đẩu (`/chom-sao-bac-dau/`):** Phân tích 4 phiên bản chòm sao (V1 kinh điển 1959–1961, V2 biến thể Măng Đen, V3 bộ 5 tượng Đệ nhất Cộng hòa, V4 tuyến Thánh Mẫu toàn quốc).
  - **Bản đồ tương tác toàn màn hình (`/ban-do/`):** Bản đồ Leaflet với 3 lớp nền (CARTO Dark Matter, CARTO Voyager, OpenStreetMap), thanh dòng thời gian 1798–2026 có chế độ tự phát (Auto Play), tìm kiếm và lọc theo thời kỳ / khu vực / chòm sao.
  - **Trang giới thiệu & Phương pháp luận (`/gioi-thieu/`):** Minh bạch phương pháp nghiên cứu, chính sách trích dẫn và tiêu chuẩn bản quyền.
- **Tối ưu hóa tìm kiếm (SEO) & Dữ liệu có cấu trúc:**
  - Tích hợp đầy đủ schema JSON-LD chuẩn Schema.org (`TouristAttraction`, `BreadcrumbList`, `ItemList`, `WebSite`).
  - Canonical URL, thẻ Open Graph, Twitter Card tối ưu cho chia sẻ mạng xã hội.
  - Tự động sinh `sitemap-index.xml`, `robots.txt` và `llms.txt`.
- **Tối ưu hóa tài nguyên & Hiển thị:**
  - Hình ảnh chuyển đổi sang định dạng AVIF/WebP hiện đại, responsive srcset, kích thước nội tại tránh giật khung hình (zero CLS).
  - Bộ token màu 2 lớp (Primitive Tokens & Semantic Tokens), sẵn sàng mở rộng chế độ sáng/tối.
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
| **Hosting & CI** | [Netlify](https://www.netlify.com) | Phân phối tĩnh toàn cầu qua Edge CDN, bảo mật HTTP headers |

---

## 4. Cấu trúc thư mục

```text
tuong-duc-me/
├── .github/                      # Quy trình CI và biểu mẫu Issue/PR trên GitHub
│   ├── workflows/ci.yml          # GitHub Actions tự động kiểm thử và build
│   └── ISSUE_TEMPLATE/           # Mẫu báo lỗi, đề xuất tính năng, cập nhật tư liệu
├── docs/                         # Tài liệu kỹ thuật chuyên sâu
│   ├── architecture.md           # Kiến trúc hệ thống và luồng dữ liệu
│   ├── codebase-summary.md       # Tổng quan cây mã nguồn
│   ├── deployment-guide.md       # Hướng dẫn cấu hình triển khai Netlify
│   ├── design-guidelines.md      # Quy chuẩn thiết kế giao diện, màu sắc, typography
│   ├── research-report.md        # Khảo cứu lịch sử gốc
│   └── tech-stack.md             # Phân tích lựa chọn công nghệ
├── public/                       # Tài nguyên tĩnh công khai (favicon, og-default.png, robots.txt)
├── src/
│   ├── assets/real_photos/       # Kho ảnh chụp thực địa đã kiểm chứng
│   ├── components/               # Các Astro component (SeoHead, MarianMap, StatueCard...)
│   ├── config/site.js            # Cấu hình hằng số toàn trang (SITE_URL, thương hiệu, điều hướng)
│   ├── data/statues.js           # Single Source of Truth (dữ liệu 18 linh đài và các chòm sao)
│   ├── layouts/BaseLayout.astro  # Layout dùng chung cho toàn bộ trang
│   ├── lib/                      # Các hàm trợ giúp xử lý dữ liệu, ảnh, SEO
│   ├── pages/                    # Định tuyến tĩnh (index, linh-dai/[id], ban-do, chom-sao-bac-dau...)
│   └── styles/                   # CSS Design Tokens và kiểu dáng toàn cục
├── tests/
│   └── test_data_and_integrity.js # Bộ 347 bài kiểm thử tính toàn vẹn dữ liệu
├── astro.config.mjs              # Cấu hình Astro
├── netlify.toml                  # Cấu hình triển khai chính thức cho Netlify
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
git clone https://github.com/peter/tuong-duc-me.git
cd tuong-duc-me

# 2. Cài đặt các gói phụ thuộc
npm install
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

> **Lưu ý về tên miền:** Khi cấu hình tên miền mới, chỉ cần cập nhật duy nhất giá trị hằng số `SITE_URL` trong file `src/config/site.js`. Giá trị này sẽ tự động phân phối tới `astro.config.mjs`, thẻ canonical, OpenGraph, sitemap và JSON-LD.

---

## 7. Kiểm thử toàn vẹn dữ liệu

Dự án sở hữu bộ kiểm thử nghiêm ngặt gồm **347 điều kiện kiểm thử** độc lập trong `tests/test_data_and_integrity.js`, đảm bảo dữ liệu không bao giờ bị sai lệch:

```bash
npm test
```

Bộ kiểm thử tự động thẩm định:
1. **Tính định danh & Toàn vẹn:** Không trùng lặp ID, tên, năm khánh thành hợp lệ (1798–2026).
2. **Tọa độ địa lý:** Tọa độ GPS nằm trong lãnh thổ Việt Nam (vĩ độ 8.0°N – 23.5°N, kinh độ 102.0°E – 110.0°E).
3. **Hình ảnh:** Tệp hình ảnh khai báo trong cơ sở dữ liệu phải thực sự tồn tại trên ổ đĩa; tuyệt đối không chứa chuỗi ảnh AI.
4. **Nguồn dẫn xác thực:** Mỗi linh địa bắt buộc phải có ít nhất 2 nguồn tài liệu trích dẫn HTTPS hợp lệ, không trỏ về domain gốc không có ngữ cảnh.
5. **Hình thế chòm sao:** Các đỉnh chòm sao Bắc Đẩu phải trỏ tới đúng ID tượng hợp lệ.

---

## 8. Đóng góp phát triển (Contributing)

Chúng tôi trân trọng và hoan nghênh mọi đóng góp từ cộng đồng:
- **Đóng góp tư liệu:** Bổ sung tư liệu lịch sử, hiệu đính niên đại, chia sẻ ảnh chụp thực địa (yêu cầu bản quyền tự do/CC-BY-SA).
- **Cải thiện tính năng:** Tối ưu hóa giao diện bản đồ, nâng cao khả năng tiếp cận (a11y), báo cáo và sửa lỗi.

Xin vui lòng tham khảo chi tiết tại **[CONTRIBUTING.md](CONTRIBUTING.md)** để nắm rõ quy trình tạo Issue, Pull Request và tiêu chuẩn thẩm định dữ liệu.

---

## 9. Hệ thống tài liệu kỹ thuật

Thư mục [`docs/`](docs/) chứa toàn bộ các tài liệu kiến trúc và hướng dẫn thiết kế chuyên sâu:

| Tài liệu | Mô tả nội dung |
|---|---|
| [architecture.md](docs/system-architecture.md) | Kiến trúc hệ thống, ranh giới JavaScript, luồng dữ liệu SSG |
| [tech-stack.md](docs/tech-stack.md) | Phân tích chi tiết ngăn xếp công nghệ và lý do lựa chọn |
| [design-guidelines.md](docs/design-guidelines.md) | Hệ thống Design Tokens, tỷ lệ tương phản màu sắc, Typography |
| [codebase-summary.md](docs/codebase-summary.md) | Cẩm nang định hướng mã nguồn dành cho lập trình viên |
| [deployment-guide.md](docs/deployment-guide.md) | Quy trình triển khai sản phẩm lên Netlify và Search Console |
| [research-report.md](docs/research-report.md) | Báo cáo nghiên cứu lịch sử nguồn gốc 5 tượng Đức Mẹ 1959–1961 |

---

## 10. Bản quyền & Ghi công

- **Mã nguồn:** Bản quyền thuộc về tác giả, phát hành dưới giấy phép mã nguồn mở **[MIT License](LICENSE)**.
- **Tư liệu hình ảnh:** Các bức ảnh thực địa được sử dụng theo giấy phép Creative Commons (CC-BY-SA, CC-BY) hoặc thuộc Phạm vi Công cộng (Public Domain) từ các tác giả trên Wikimedia Commons. Thông tin tác giả và nguồn gốc được ghi công chi tiết trên từng trang linh địa tương ứng.
- **Dữ liệu nghiên cứu:** Tư liệu lịch sử được tổng hợp từ Kỷ yếu Đại hội Thánh Mẫu Toàn quốc 1959, tư liệu văn khố các Giáo phận Việt Nam và các tài liệu lưu trữ công khai.

---

## 11. Tác giả & Liên hệ

- **Tác giả:** Duc Nguyen ([@peter](https://github.com/peter))
- **Email:** `minh-duc.nguyen-nam@ekino.com`
- **Kho mã nguồn:** [https://github.com/peter/tuong-duc-me](https://github.com/peter/tuong-duc-me)
- **Báo lỗi & Đóng góp ý kiến:** [GitHub Issues](https://github.com/peter/tuong-duc-me/issues)
