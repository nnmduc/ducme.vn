# Tóm Tắt Mã Nguồn (Codebase Summary)

## 1. Tổng Quan Kiến Trúc
Ứng dụng được thiết kế theo cấu trúc module độc lập bằng Vanilla JavaScript (IIFE Module Pattern), tách biệt dữ liệu, lớp hiển thị bản đồ, lớp phủ thiên văn, bộ điều khiển thời gian và giao diện chi tiết.

## 2. Các Module Chính
| Tệp / Thư mục | Trách nhiệm chính |
|---|---|
| `index.html` | Trang đích SPA duy nhất chứa layout chuẩn, header, bản đồ Leaflet, HUD panels và modal |
| `src/data/statues.js` | Cơ sở dữ liệu tĩnh gồm 18+ tượng Thánh Mẫu với tọa độ WGS84, năm, giáo phận, lịch sử xác thực, giả thuyết Bắc Đẩu và 4 cấu hình chòm sao |
| `src/css/style.css` | Hệ thống thiết kế chuẩn anti-slop: palette màu đêm sao, typography Playfair Display/Lora/Be Vietnam Pro/JetBrains Mono, WCAG AA, hiệu ứng phát sáng |
| `src/js/map.js` | Khởi tạo bản đồ CartoDB Dark Matter, quản lý marker tùy biến, tính năng pan/zoom mượt mà, chủ quyền Hoàng Sa - Trường Sa |
| `src/js/constellation.js` | Vẽ đường nối SVG/Polyline chòm sao Bắc Đẩu, hiệu ứng sao chổi phát sáng, đường tia chỉ hướng Sao Bắc Cực (Polaris) |
| `src/js/timeline.js` | Thanh trượt dòng thời gian 1798–2026, nút Play/Pause tự động chạy theo năm, lọc hiển thị các tượng theo niên đại |
| `src/js/list-view.js` | Drawer tìm kiếm tức thời và lọc đa tiêu chí (5 tượng Diệm, vùng miền, chòm sao) |
| `src/js/modal.js` | Hộp thoại chi tiết sâu với tranh nghệ thuật AI, dữ liệu GPS, phân tích lịch sử vs truyền thuyết, nút liên kết Google Maps |
| `tests/test_data_and_integrity.js` | 204 bài test tự động kiểm tra tính hợp lệ của tọa độ, liên kết đồ thị các phiên bản sao và ảnh |

## 3. Thống Kê Dữ Liệu
- **Số lượng linh địa Thánh Mẫu:** 18 địa điểm trên 3 miền Bắc - Trung - Nam.
- **Bộ 5 tượng TT Ngô Đình Diệm (1959–1961):** Phượng Hoàng (Gia Lai), Giang Sơn (Đắk Lắk), Trinh Phong (Ninh Thuận), Thác Mơ (Bình Phước), Tà Pao (Bình Thuận).
- **Số phiên bản chòm sao:** 4 phiên bản với đồ thị kết nối khép kín và đường hướng Polaris.
- **Tác phẩm mỹ thuật AI:** 4 bức tranh sơn dầu nghệ thuật biểu tượng lưu tại `assets/images/`.
