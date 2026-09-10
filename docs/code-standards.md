# Tiêu Chuẩn Lập Trình & Quy Ước Mã Nguồn (Code Standards)

## 1. Triết Lý Thiết Kế & Quy Chuẩn Frontend (Anti-Slop)
Dự án tuân thủ nghiêm ngặt các nguyên tắc từ `design-taste-frontend`:
- **Độ tương phản khả dụng (Accessibility WCAG AA):** Mọi văn bản, nút bấm, nhãn mác đều đạt tỷ lệ tương phản tối thiểu 4.5:1 với màu nền.
- **Tính toán bố cục:** Không dùng các phép tính phần trăm flexbox rời rạc; ưu tiên CSS Grid và Flexbox hiện đại có gap chuẩn mực.
- **Hệ thống đơn vị & font chữ:**
  - Tiêu đề & Vương giả: `Playfair Display` & `Lora` (Google Fonts, hỗ trợ 100% tiếng Việt).
  - Nội dung tiếng Việt: `Be Vietnam Pro` (tối ưu hiển thị dấu thanh và độ đọc trên thiết bị di động).
  - Tọa độ vệ tinh & Niên đại: `JetBrains Mono`.

## 2. JavaScript & Quản Lý Trạng Thái
- Áp dụng mẫu thiết kế Module Pattern (IIFE - Immediately Invoked Function Expression) gắn vào không gian tên `window.Marian*` để tránh ô nhiễm biến toàn cục:
  - `window.MarianMap`
  - `window.MarianConstellation`
  - `window.MarianTimeline`
  - `window.MarianListView`
  - `window.MarianModal`
- Xử lý bất đồng bộ và sự kiện DOM:
  - Sử dụng sự kiện `DOMContentLoaded` để đảm bảo tài nguyên DOM đã sẵn sàng trước khi nạp thư viện bản đồ.
  - Ngăn chặn sự kiện nổi bọt (`L.DomEvent.stopPropagation`) khi bấm vào các marker bản đồ để tránh kích hoạt sự kiện click nền.

## 3. Bản Đồ & Dữ Liệu Địa Lý
- Hệ tọa độ chuẩn: WGS84 (EPSG:4326), biểu diễn dưới dạng số thực thập phân `[lat, lng]` với độ chính xác 4 chữ số thập phân (~11m).
- Luôn kiểm tra tính hợp lệ của cặp tọa độ trước khi vẽ Polyline hoặc Marker để tránh lỗi `NaN` trong Leaflet.
- Đảm bảo chủ quyền biển đảo Việt Nam: Luôn hiển thị nhãn địa danh Quần đảo Hoàng Sa và Quần đảo Trường Sa.
