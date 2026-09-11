# Tiêu Chuẩn Lập Trình & Quy Ước Mã Nguồn (Code Standards)

## 1. Triết Lý Thiết Kế & Quy Chuẩn Frontend (Anti-Slop)
Dự án tuân thủ nghiêm ngặt các nguyên tắc từ `design-taste-frontend`:
- **Độ tương phản khả dụng (Accessibility WCAG AA):** Mọi văn bản, nút bấm, nhãn mác đều đạt tỷ lệ tương phản tối thiểu 4.5:1 với màu nền.
- **Tính toán bố cục:** Không dùng các phép tính phần trăm flexbox rời rạc; ưu tiên CSS Grid và Flexbox hiện đại có gap chuẩn mực.
- **Hệ thống đơn vị & font chữ:**
  - Tiêu đề & Vương giả: `Playfair Display` & `Lora` (Google Fonts, hỗ trợ 100% tiếng Việt).
  - Nội dung tiếng Việt: `Be Vietnam Pro` (tối ưu hiển thị dấu thanh và độ đọc trên thiết bị di động).
  - Tọa độ vệ tinh & Niên đại: `JetBrains Mono`.

## 2. JavaScript & Quản Lý Trạng Thái Frontend
- Đối với các đảo tương tác (Leaflet map), áp dụng mẫu thiết kế Module Pattern gắn vào không gian tên `window.Marian*` để tránh ô nhiễm biến toàn cục:
  - `window.MarianMap`
  - `window.MarianConstellation`
  - `window.MarianTimeline`
  - `window.MarianListView`
- Xử lý bất đồng bộ và sự kiện DOM:
  - Sử dụng sự kiện `DOMContentLoaded` hoặc `astro:page-load` để đảm bảo tài nguyên DOM đã sẵn sàng trước khi nạp thư viện bản đồ.
  - Ngăn chặn sự kiện nổi bọt (`L.DomEvent.stopPropagation`) khi bấm vào các marker bản đồ để tránh kích hoạt sự kiện click nền.
- Ranh giới tải JS: Các trang nội dung (`/`, `/linh-dai/*`, `/chom-sao-bac-dau/`, `/gioi-thieu/`) tuyệt đối không đính kèm logic nghiệp vụ client-side; chỉ có inline drawer script phục vụ điều hướng responsive di động.

## 3. Bản Đồ & Dữ Liệu Địa Lý
- Hệ tọa độ chuẩn: WGS84 (EPSG:4326), biểu diễn dưới dạng số thực thập phân `[lat, lng]` với độ chính xác 4 chữ số thập phân (~11m).
- Luôn kiểm tra tính hợp lệ của cặp tọa độ trước khi vẽ Polyline hoặc Marker để tránh lỗi `NaN` trong Leaflet.
- Đảm bảo chủ quyền biển đảo Việt Nam: Luôn hiển thị nhãn địa danh Quần đảo Hoàng Sa và Quần đảo Trường Sa.

## 4. Quy Chuẩn Backend Cloudflare Worker & API
- **CORS Whitelist Chặt Chẽ:** Chỉ chấp nhận `https://ducme.vn` và `http://localhost:4321` (chế độ phát triển). Luôn xử lý đúng preflight `OPTIONS` và phản hồi kèm headers `Access-Control-Allow-*`.
- **Bảo Vệ Đa Tầng Trước Tải (Early Guard):**
  - Kiểm tra `Content-Length` ngay từ request header trước khi parse dữ liệu `multipart/form-data` để ngăn chặn cạn kiệt bộ nhớ (OOM).
  - Ưu tiên thẩm định Turnstile Token từ header `X-Turnstile-Token` trước khi phân tích payload.
- **Xử Lý Tệp Tin An Toàn (Defense in Depth):**
  - Giới hạn tối đa 3 tệp, dung lượng tối đa 5 MB mỗi tệp.
  - Kiểm định kép: ngoài MIME type do client gửi, bắt buộc kiểm tra **Magic Bytes** (chữ ký byte đầu tệp) cho JPG (`FF D8 FF`), PNG (`89 50 4E 47`), WebP (`RIFF...WEBP`) và PDF (`%PDF`).
  - Đổi tên tệp bằng `crypto.randomUUID()` để tránh tấn công ghi đè đường dẫn (Path Traversal).
- **Rollback Toàn Vẹn Khi Gặp Lỗi (Atomic Cleanup):**
  - Nếu việc lưu dữ liệu vào Cloudflare D1 thất bại, Worker phải lập tức xóa sạch các tệp đã upload lên Cloudflare R2 để tránh dữ liệu rác mồ côi (orphaned files).
- **Bảo Mật Liên Kết & Quyền Riêng Tư:**
  - Không mở bucket R2 ra công cộng (no public read). Tệp đính kèm chỉ có thể truy cập qua URL ký số HMAC SHA-256 có kèm thời gian hết hạn (`expires = 14 ngày`).
  - Tuyệt đối không commit file `.dev.vars` hoặc secret key vào repo; production secret dùng `wrangler secret put`.
  - Không ghi log thông tin cá nhân (PII) như email, số điện thoại người dùng ra console/log stream.
