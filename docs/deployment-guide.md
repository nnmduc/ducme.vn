# Hướng Dẫn Triển Khai

Cập nhật 2026-09-11.

## 1. Yêu Cầu

- Node.js từ 20.11 trở lên (khai báo Node 22 trong `.node-version`).
- `npm install` một lần sau khi tải mã về.

## 2. Lệnh

| Lệnh | Việc |
|---|---|
| `npm run dev` | Máy chủ phát triển, có nạp lại nóng |
| `npm run build` | Dựng trang tĩnh vào thư mục build (`dist/`) |
| `npm run preview` | Xem thử bản đã dựng |
| `npm test` | 419 điều kiện kiểm tính toàn vẹn dữ liệu & backend |

Chạy `npm test` trước mỗi lần đẩy mã. Bộ kiểm này bắt được id trùng, tọa độ ngoài lãnh
thổ, ảnh khai trong dữ liệu nhưng không có file, nguồn dẫn không hợp lệ, và các file cấu hình backend.

## 3. Triển Khai Frontend (Cloudflare Pages)

Frontend tĩnh được triển khai tự động lên **Cloudflare Pages** thông qua GitHub Actions (`.github/workflows/deploy.yml`) mỗi khi đẩy mã lên nhánh `main`.

Cấu hình cache và bảo mật HTTP headers nằm ở **`public/_headers`**:
- Tài nguyên trong `/_astro/*` và `/fonts/*` được gán header `Cache-Control: public, max-age=31536000, immutable` do tên file đã có mã băm nội dung.
- Các header bảo mật: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: SAMEORIGIN`.

Tên dự án Cloudflare Pages: `ducme-vn`. Tên miền chính thức `https://ducme.vn` được gắn trực tiếp trong phần Custom domains của Cloudflare Pages.

Triển khai thủ công từ máy cục bộ (nếu cần):
```bash
npm run build
npx wrangler pages deploy dist --project-name=ducme-vn --branch=main
```

## 4. Triển Khai Backend Serverless (Cloudflare Worker)

Backend API phục vụ biểu mẫu Liên hệ & Góp ý nằm trong thư mục `worker/`.

### 4.1. Chuẩn bị tài nguyên Cloudflare

1. **Khởi tạo D1 Database:**
   ```bash
   cd worker
   npx wrangler d1 create ducmevn_feedback
   # Cập nhật database_id vào worker/wrangler.jsonc nếu tạo mới
   npx wrangler d1 execute ducmevn_feedback --remote --file=./schema.sql
   ```

2. **Khởi tạo R2 Bucket lưu tệp:**
   ```bash
   npx wrangler r2 bucket create ducmevn-feeback
   ```

3. **Cấu hình Turnstile Secret:**
   Lấy secret key từ Cloudflare Dashboard (Turnstile > ducme.vn) và lưu vào worker:
   ```bash
   npx wrangler secret put TURNSTILE_SECRET_KEY
   ```

4. **Kích hoạt Cloudflare Email Routing:**
   - Trong dashboard Cloudflare của domain `ducme.vn`, bật Email Routing.
   - Thiết lập địa chỉ nhận thông báo và xác minh hòm thư người nhận.
   - Khai báo email nhận trong biến môi trường hoặc cấu hình `ADMIN_EMAIL`.

### 4.2. Triển khai mã nguồn Worker

```bash
cd worker
npm run deploy
```

Sau khi deploy, thiết lập Custom Domain `api.ducme.vn` trong mục Triggers / Custom Domains của Worker
để trỏ trực tiếp tới Worker.

## 5. Khi Đổi Tên Miền Hoặc Địa Chỉ API

Sửa `SITE_URL` và `API_BASE_URL` trong `src/config/site.js`. Giá trị này chảy tới `astro.config.mjs`,
thẻ canonical, `og:url`, sitemap, JSON-LD và endpoint gửi form. Không viết tên miền ở bất cứ chỗ nào khác.

## 6. Sau Khi Triển Khai

1. Nộp `https://ducme.vn/sitemap-index.xml` trong Google Search Console.
2. Yêu cầu lập chỉ mục cho `/` và vài trang chi tiết để mồi cho bộ thu thập.
3. Kiểm tra tính năng gửi đóng góp tại `https://ducme.vn/lien-he/` (thử gửi một phản hồi và kiểm tra email quản trị).
4. Kiểm một trang chi tiết bằng công cụ Rich Results Test của Google.
5. Xác nhận nội dung hiện ra khi tắt JavaScript. Đây là mục tiêu cốt lõi của cả đợt tái
   cấu trúc, nên cần kiểm lại mỗi khi có thay đổi lớn về bố cục.

## 7. Kiểm Bề Ngang Điện Thoại

Chrome ở chế độ không giao diện trên macOS **ép bề ngang cửa sổ tối thiểu 500px**. Ảnh
chụp dưới 500px sẽ được dựng ở 500px rồi cắt bớt, sinh ra hiện tượng tràn ngang giả và
che mất tràn ngang thật. Muốn đo bề ngang hẹp cho đúng, nhúng trang vào một `iframe` có bề
ngang cố định rồi đo `scrollWidth` bên trong iframe đó.
