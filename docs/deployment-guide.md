# Hướng Dẫn Triển Khai

Cập nhật 2026-09-11.

## 1. Yêu Cầu

- Node.js từ 20.11 trở lên. Netlify dùng 22, khai trong `netlify.toml`.
- `npm install` một lần sau khi tải mã về.

## 2. Lệnh

| Lệnh | Việc |
|---|---|
| `npm run dev` | Máy chủ phát triển, có nạp lại nóng |
| `npm run build` | Dựng trang tĩnh vào thư mục build |
| `npm run preview` | Xem thử bản đã dựng |
| `npm test` | 353 điều kiện kiểm tính toàn vẹn dữ liệu & backend |

Chạy `npm test` trước mỗi lần đẩy mã. Bộ kiểm này bắt được id trùng, tọa độ ngoài lãnh
thổ, ảnh khai trong dữ liệu nhưng không có file, nguồn dẫn không hợp lệ, và các file cấu hình backend.

## 3. Triển Khai Frontend (Netlify)

Cấu hình thật nằm ở **`netlify.toml` tại thư mục gốc** và được theo dõi trong git.

> **Cảnh báo.** File `.netlify/netlify.toml` **không phải** cấu hình. Đó là trạng thái do
> Netlify CLI sinh ra, có `publish` trỏ tới đường dẫn tuyệt đối trên máy cục bộ, và cả thư
> mục `.netlify` đã bị `.gitignore` loại trừ. Sửa file đó **không có tác dụng gì** khi
> triển khai. Chỉ sửa `netlify.toml` ở gốc.

Thiết lập hiện tại:

- `command = "npm run build"`
- `publish` trỏ tới thư mục build của Astro
- Tài nguyên trong `/_astro/*` được cache vĩnh viễn, vì tên file có vân tay băm
- Có các header `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`

Mã site: `141e85a8-31f1-4c2f-bc40-2340e9bea6b0`. Tên miền `https://ducme.vn` đã trỏ sẵn.

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
