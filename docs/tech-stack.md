# Lựa Chọn Công Nghệ: Ứng Dụng Bản Đồ Tượng Đức Mẹ & Chòm Sao Bắc Đẩu

## 1. Mục Tiêu Kỹ Thuật
- **Khả chuyển & Độc lập:** Ứng dụng chạy trực tiếp trên nền web tĩnh (Single Page Application HTML/CSS/JS), không phụ thuộc backend, mở trực tiếp bằng trình duyệt hoặc deploy lên GitHub Pages / Vercel chỉ với 1 lệnh.
- **Trải nghiệm mượt mà & Trực quan:** Bản đồ tương tác sắc nét, zoom mượt, hiệu ứng animation nối các vì sao theo quỹ đạo ánh sáng lung linh (starlight constellation glow), timeline playback trực quan.
- **Đầy đủ dữ liệu & Đa phiên bản:** Dữ liệu chuẩn xác 100% về tọa độ, lịch sử, bối cảnh 1959, ảnh minh họa chất lượng cao, các giả thuyết và đối sánh thiên văn.

## 2. Công Nghệ Đề Xuất
* **Bản đồ tương tác (Mapping Engine):**
  - **Leaflet.js (v1.9.4):** Thư viện bản đồ mã nguồn mở nhẹ nhất (42KB), hoạt động mượt mà trên cả máy tính lẫn điện thoại, hỗ trợ layer đa dạng (CartoDB Dark Matter / Voyager cho phong cách bầu trời sao đêm hoặc bản đồ địa hình ấm áp).
  - **SVG & Canvas Constellation Overlay:** Vẽ các đường nối chòm sao Bắc Đẩu bằng SVG/Canvas với hiệu ứng phát sáng (drop-shadow filter, dash-array animation và star pulse).
* **Kiến trúc Dữ liệu & Quản lý Trạng thái:**
  - `Dataset`: Module JSON/JS nhúng sẵn chi tiết hơn 18 tượng đài lớn trên cả nước, bao gồm tên, năm thành lập, tọa độ chuẩn WGS84, địa chỉ, lịch sử, bối cảnh Đệ nhất Cộng hòa 1959, ảnh tư liệu, và phân loại các phiên bản Bắc Đẩu.
  - State Manager: Quản lý bộ lọc phiên bản (Version 1 Kinh điển, Version 2 Hiện đại/Măng Đen, Version 3 Bộ 5 tượng Ngô Đình Diệm, Version 4 Toàn quốc), trạng thái timeline (năm hiện tại, play/pause, tốc độ), và điểm đang được chọn (modal inspection).
* **Giao diện & Trải nghiệm Người dùng (UI/UX):**
  - Modern CSS (Flexbox, Grid, CSS Variables, Glassmorphism, CSS Transitions).
  - Font: Playfair Display / Cormorant Garamond (tiêu đề tôn nghiêm, học thuật) + Inter / Be Vietnam Pro (nội dung rõ ràng).
  - Bảng màu: Đêm sao huyền bí (`#0a0f1d`, `#131b2e`), Ánh sao vàng kim (`#f5c518`, `#ffd166`), Xanh thiên thanh Maria (`#38bdf8`, `#60a5fa`), Trắng ngọc (`#f8fafc`).
* **Các tính năng tương tác chính:**
  1. **Constellation Switcher:** Nút chuyển đổi nhanh các phiên bản chòm sao Bắc Đẩu & ngũ giác đài.
  2. **Timeline Player:** Thanh trượt thời gian từ năm 1798 đến 2026, nút Play/Pause tự động trình chiếu sự xuất hiện của các tượng đài theo dòng lịch sử.
  3. **Dual-View:** Chuyển đổi linh hoạt giữa Bản đồ toàn cảnh và Danh sách thẻ bài (Card Grid/List View) có công cụ tìm kiếm và lọc theo vùng miền/thời kỳ.
  4. **Deep-Reading Modal:** Hộp thoại chi tiết cung cấp hình ảnh, tư liệu lịch sử xác thực, đối chiếu giả thuyết tâm linh và tọa độ vệ tinh.
  5. **Sky Comparison Overlay:** Khung so sánh hình học trực tiếp giữa chòm sao Bắc Đẩu thiên văn (Ursa Major) và đường nối trên thực địa Việt Nam.

## 3. Lý Do Không Dùng Framework Nặng
- Tránh việc cài đặt npm nặng nề, phức tạp hóa việc triển khai cho một dự án cần tính chia sẻ, lưu trữ vĩnh viễn và dễ dàng mở xem offline hoặc gửi tặng cộng đoàn.
- Tối ưu 100% hiệu năng và khả năng tương thích trên mọi thiết bị.
