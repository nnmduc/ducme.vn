# Hướng Dẫn Thiết Kế (Design Guidelines): Bản Đồ Tượng Đức Mẹ & Chòm Sao Bắc Đẩu

## 1. Triết Lý Thiết Kế: "Stella Maris - Ánh Sao Dẫn Lối"
- **Tôn nghiêm & Thanh tao:** Gợi lên sự linh thiêng của các linh địa Thánh Mẫu nhưng mang hơi thở hiện đại, học thuật và chính xác về mặt lịch sử - địa lý.
- **Không gian Bầu trời Đêm & Ánh sao (Celestial Starlight):** Kết hợp nền đêm lam thẳm (Deep Navy / Midnight Cosmos) với những chòm sao vàng óng (Starlight Gold) và ánh thiên thanh (Marian Cyan) tượng trưng cho Mẹ Sao Biển (Stella Maris).
- **Trải nghiệm Tương tác Liền mạch:** Giao diện trực quan cho phép người xem tự do chiêm ngưỡng toàn cảnh đất nước, ngắm nhìn chòm sao Bắc Đẩu hình thành và lắng nghe từng câu chuyện lịch sử.

## 2. Bảng Màu Chuẩn (Color Palette)
- **Nền chính (Celestial Dark):** `#0a0f1e` (Màn đêm vũ trụ), `#111827` (Mặt bản đồ), `#1e293b` (Bảng điều khiển / Card).
- **Màu nhấn Ánh sao (Starlight Amber & Gold):**
  - Vàng Bắc Đẩu chính: `#f59e0b` / `#fbbf24` (Ánh sao Dubhe, Merak...)
  - Hiệu ứng phát sáng (Glow): `rgba(245, 158, 11, 0.4)` & `rgba(251, 191, 36, 0.8)`
- **Màu Thánh Mẫu (Marian Sky Blue):** `#38bdf8` (Xanh áo Đức Mẹ, đường viền tương tác, thẻ thông tin).
- **Màu thời kỳ Ngô Đình Diệm 1959 (Vintage Ruby/Bronze):** `#e11d48` / `#f43f5e` (Đánh dấu 5 tượng lịch sử).
- **Chữ & Nội dung (Typography Colors):**
  - Tiêu đề & Điểm nhấn: `#ffffff` & `#f8fafc`
  - Nội dung chính: `#e2e8f0` (Độ tương phản cao, dễ đọc)
  - Chú thích phụ: `#94a3b8`

## 3. Kiểu Chữ (Typography - Google Fonts)
- **Tiêu đề & Thương hiệu:** `Cinzel` hoặc `Playfair Display` (Serif cổ điển, vương giả, uy nghiêm phù hợp kiến trúc thánh đường và thiên văn).
- **Nội dung thân & Giao diện:** `Be Vietnam Pro` (Sans-serif hiện đại, tối ưu dấu tiếng Việt, sắc nét ở mọi kích cỡ).
- **Số liệu & Tọa độ thiên văn:** `JetBrains Mono` (Monospace cho tọa độ vệ tinh, năm thành lập, thông số kỹ thuật).

## 4. Bố Cục & Các Phân Khu Giao Diện (Layout & Spatial Hierarchy)
- **Thanh đỉnh (Header & Quick Action):**
  - Logo/Biểu tượng Đức Mẹ Sao Biển + Tiêu đề chính.
  - Bộ nút chuyển đổi phiên bản Bắc Đẩu (Version 1 Kinh điển, Version 2 Măng Đen, Version 3 Bộ 5 tượng TT Diệm, Version 4 Toàn quốc).
  - Nút chuyển chế độ Bản đồ / Danh sách (Map View vs List View) & Nút Bật/Tắt đường nối chòm sao.
- **Khu vực trung tâm (Main Viewport):**
  - Bản đồ Việt Nam toàn màn hình với style Dark Night / Voyager tương thích cao.
  - Lớp phủ Constellation Overlay với đường nối nét đứt phát sáng (Glowing Animated Polyline) và biểu tượng 7 ngôi sao Bắc Đẩu đối chiếu.
  - Marker tùy biến dạng huy hiệu sao phát sáng khi hover/active.
- **Thanh trượt dòng thời gian (Floating Timeline Player):**
  - Đặt nổi ở mép dưới trung tâm (Bottom-center Dock).
  - Trục thời gian từ 1798 đến 2026.
  - Nút Play/Pause, tua lùi, tua tới, kèm nhãn mốc sự kiện quan trọng (1798: La Vang, 1885: Trà Kiệu, 1959: Đại hội Thánh Mẫu & 5 Tượng TT Diệm, 1971: Măng Đen, 2020: Núi Cúi).
- **Khung so sánh thiên văn (Celestial Comparison Widget):**
  - Cửa sổ nhỏ góc bản đồ mô phỏng hình dạng chòm sao Đại Hùng (Ursa Major) thực tế trên bầu trời đêm để đối sánh góc nghiêng và khoảng cách với bản đồ Việt Nam.
- **Hộp thoại chi tiết sâu (Deep Reading Modal):**
  - Slide ảnh chất lượng cao, thông số năm - tọa độ - địa chỉ, bản trích lịch sử chính xác, câu chuyện truyền tụng dân gian, và trích dẫn nguồn uy tín.
