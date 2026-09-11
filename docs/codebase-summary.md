# Tổng Quan Mã Nguồn

Cập nhật 2026-09-11.

```
astro.config.mjs             Cấu hình Astro. Đọc SITE_URL từ src/config/site.js
netlify.toml                 Cấu hình triển khai THẬT (xem docs/deployment-guide.md)
package.json                 Astro 7, Leaflet, sharp, fontsource

public/
  favicon.svg                Dấu sao bốn cánh, vàng trên nền navy
  og-default.png             Ảnh chia sẻ dự phòng 1200x630 cho 10 linh địa chưa có ảnh

src/
  config/site.js             SITE_URL, API_BASE_URL, TURNSTILE_SITE_KEY, tên thương hiệu,
                             điều hướng, thứ tự vùng miền. Đổi domain sửa ở đây.

  data/statues.js            NGUỒN DỮ LIỆU DUY NHẤT. 1077 dòng, hai export ESM:
                             MARIAN_STATUES_DATA (18 linh địa)
                             CONSTELLATION_VERSIONS (4 phiên bản chòm sao)

  lib/statues.js             Hàm dẫn xuất: tách tỉnh từ địa chỉ, gom vùng miền,
                             thứ tự hiển thị chuẩn, linh địa liền kề, định dạng tọa độ
  lib/photos.js              Khớp trường realImage với ảnh trong src/assets
  lib/seo.js                 Cắt mô tả theo ranh giới từ, dựng JSON-LD

  layouts/BaseLayout.astro   Khung chung. Nạp chữ viết, CSS nền, header, footer

  components/
    SeoHead.astro            Toàn bộ thẻ head. Mọi trang PHẢI dùng, nhờ đó không
                             trang nào thiếu canonical hay thẻ chia sẻ
    SiteHeader.astro         Điều hướng có Drawer menu cho mobile
    SiteFooter.astro
    Breadcrumb.astro
    SourceList.astro         Lưới thẻ nguồn dẫn, rel="nofollow noopener"
    StatueIndex.astro        18 linh địa gom theo vùng miền. Khối nội dung SEO
                             quan trọng nhất của trang chủ
    ConstellationDiagram.astro  Sơ đồ SVG chòm Bắc Đẩu, nhãn đọc từ dữ liệu
    MarianMap.astro          Đảo tương tác. Leaflet, chòm sao, dòng thời gian, bộ lọc

  pages/
    index.astro              Trang chủ
    linh-dai/[id].astro      18 trang chi tiết qua getStaticPaths
    chom-sao-bac-dau.astro
    ban-do.astro
    gioi-thieu.astro
    lien-he.astro            Tiếp nhận đóng góp, tệp đính kèm, Turnstile
    404.astro
    robots.txt.js            Endpoint, trỏ sitemap bằng URL tuyệt đối

  styles/
    tokens.css               Token hai lớp. Sẵn sàng cho theme sáng
    global.css               Reset, tiện ích, ưu tiên giảm chuyển động

  assets/real_photos/        8 ảnh thực địa đã xác minh. Nằm trong src/ để
                             astro:assets xử lý được

worker/                      Cloudflare Worker backend cho /lien-he/
  src/
    index.js                 Router, CORS, file proxy HMAC token, rate/size check
    cors.js                  Middleware CORS whitelist (ducme.vn, localhost:4321)
    db.js                    Thao tác Cloudflare D1 (chèn submission, kiểm tra health)
    r2.js                    Upload tệp R2, HMAC SHA-256 preview token, cleanup
    turnstile.js             Xác thực token Turnstile qua Cloudflare siteverify
    validator.js             Kiểm tra độ dài text fields, MIME type & magic bytes
    email.js                 Soạn thảo HTML/Text email, gửi qua binding send_email
  schema.sql                 DDL SQLite tạo bảng `submissions`
  wrangler.jsonc             Cấu hình bindings Cloudflare (D1, R2, send_email)
  scripts/test-submission.js Script kiểm thử API tự động

tests/test_data_and_integrity.js   353 điều kiện. Chạy bằng `npm test`
```

## Điều Cần Biết Trước Khi Sửa

- **Không viết mã màu trong component.** Chỉ dùng biến ngữ nghĩa của `tokens.css`.
- **Không nhân bản dữ liệu linh địa.** Mọi thứ dẫn xuất từ `src/data/statues.js`.
- Chữ nghiêng Playfair có right side bearing âm. Mọi đoạn chữ nghiêng trong font hiển thị
  cần `padding-right: 0.14em`, nếu không từ nghiêng sẽ dính vào từ kế tiếp.
- Giữ `trailingSlash: 'always'`. Liên kết nội bộ và canonical đều dựa vào quy ước này.
- Trang nội dung phải giữ mức **0 byte JavaScript** (ngoại trừ script form và Turnstile ở `/lien-he/`).
  Leaflet chỉ được xuất hiện ở `/ban-do/`.
- **An toàn Worker:** Tuyệt đối không commit file `.dev.vars` hoặc secret key; tệp tải lên
  phải luôn được kiểm định magic bytes ở backend trước khi stream vào Cloudflare R2.
