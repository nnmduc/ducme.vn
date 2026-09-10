# Tượng Đức Mẹ Việt Nam & Chòm Sao Bắc Đẩu (Stella Maris)

Ứng dụng web tương tác chuyên sâu khảo cứu lịch sử, vị trí địa lý của các tượng Đức Mẹ lớn trên khắp Việt Nam, sự tích 5 pho tượng thời Đệ nhất Cộng hòa (Tổng thống Ngô Đình Diệm 1959–1961), và các giả thuyết - truyền thuyết dân gian về việc sắp đặt theo hình dáng chòm sao Bắc Đẩu (Ursa Major / The Big Dipper).

![Stella Maris Hero](../assets/images/stella_maris_hero.jpg)

## 1. Tính Năng Nổi Bật

* **Bản đồ tương tác Đêm sao (Celestial Dark Map):** Tích hợp Leaflet.js với lớp nền CartoDB Dark Matter, hiển thị các marker phát sáng (halo pulse) cho 18+ đại trung tâm Thánh Mẫu từ Bắc chí Nam.
* **4 Phiên Bản Chòm Sao Bắc Đẩu & Ngũ Giác Đài:**
  - **V1: 7 Tượng Bắc Đẩu Kinh Điển (1959–1961):** La Vang $\to$ Trà Kiệu $\to$ Phượng Hoàng (Gia Lai) $\to$ Giang Sơn (Đắk Lắk) $\to$ Trinh Phong (Ninh Thuận) $\to$ Thác Mơ (Bình Phước) $\to$ Tà Pao (Bình Thuận). Cặp sao Thác Mơ - Tà Pao kéo dài hướng thẳng về Sao Bắc Cực (Polaris).
  - **V2: Biến Thể Hành Hương Hiện Đại:** Thay thế Đức Mẹ Phượng Hoàng (hoang phế sau chiến tranh) bằng Đức Mẹ Măng Đen (Kon Tum, tìm lại năm 2002).
  - **V3: Bộ 5 Tượng TT Ngô Đình Diệm (1959):** Ngũ Giác Đài bảo trợ miền Nam và Tây Nguyên.
  - **V4: Tuyến Thánh Mẫu Toàn Quốc:** Hành hương nối dài 18+ linh địa xuyên Việt.
* **Thanh trượt Dòng thời gian (Timeline Player 1798–2026):**
  - Trục thời gian từ năm Đức Mẹ hiện ra tại La Vang (1798) đến hiện tại.
  - Nút Play/Pause tự động trình chiếu sự xuất hiện của các tượng đài theo dòng lịch sử.
  - Các mốc lịch sử quan trọng: 1798, 1885, 1950, 1959, 1963, 1971, 1992, 2020.
* **Hộp thoại Khảo cứu Sâu (Deep Reading Modal):**
  - Tác phẩm tranh nghệ thuật sơn dầu tôn nghiêm được tạo riêng cho từng linh địa.
  - Tọa độ vệ tinh WGS84 chính xác, độ cao địa hình, giáo phận.
  - Đối chiếu khách quan: **Sự thật lịch sử** (Văn khố Dinh điền, KTS Ngô Viết Thụ, LM Antôn Nguyễn Văn Kiệm, thợ điêu khắc Hải xóm tượng Phát Diệm) vs **Truyền tụng dân gian**.
* **Danh mục Tra cứu Đa Tiêu Chí (List View Drawer):**
  - Tìm kiếm thời gian thực theo tên tượng, giáo phận, tỉnh thành, hoặc từ khóa lịch sử.
  - Lọc nhanh theo vùng miền hoặc theo bộ 5 tượng thời TT Diệm.
* **Khung đối sánh thiên văn (Ursa Major Sky Inset):**
  - Sơ đồ hình học đối chiếu trực quan 7 ngôi sao thiên văn với các linh địa trên đất nước.

## 2. Cấu Trúc Thư Mục

```
tuong-duc-me/
├── index.html                   # Ứng dụng chính (Single Page Application)
├── assets/
│   └── images/                  # Tranh nghệ thuật & ảnh tư liệu
│       ├── stella_maris_hero.jpg
│       ├── our_lady_lavang.jpg
│       ├── our_lady_tapao.jpg
│       └── our_lady_mangden.jpg
├── src/
│   ├── css/
│   │   └── style.css            # Stylesheet master (Starlight theme, WCAG AA)
│   ├── data/
│   │   └── statues.js           # Bộ dữ liệu 18+ tượng & 4 phiên bản Bắc Đẩu
│   └── js/
│       ├── map.js               # Khởi tạo bản đồ Leaflet & marker
│       ├── constellation.js     # Lớp phủ SVG chòm sao & đối sánh thiên văn
│       ├── timeline.js          # Điều khiển dòng thời gian & phát tự động
│       ├── list-view.js         # Drawer danh sách & bộ lọc
│       └── modal.js             # Hộp thoại khảo cứu chi tiết
├── docs/                        # Tài liệu nghiên cứu & kỹ thuật
│   ├── research-report.md
│   ├── tech-stack.md
│   ├── design-guidelines.md
│   ├── system-architecture.md
│   └── codebase-summary.md
├── plans/                       # Kế hoạch triển khai dự án
└── tests/
    └── test_data_and_integrity.js # Test suite kiểm thử dữ liệu & hình học
```

## 3. Hướng Dẫn Chạy Ứng Dụng

Ứng dụng là web tĩnh hoàn toàn (Vanilla HTML5 / CSS3 / ES6 + Leaflet CDN), không cần cài đặt backend hay build tool phức tạp.

### Cách 1: Mở trực tiếp trong trình duyệt
Chỉ cần nhấp đúp vào file `index.html` hoặc chạy lệnh:
```bash
open index.html
```

### Cách 2: Chạy với local HTTP server
```bash
python3 -m http.server 8080
# Mở trình duyệt tại http://localhost:8080
```

### Cách 3: Chạy bộ kiểm thử (Unit Tests)
```bash
node tests/test_data_and_integrity.js
```

## 4. Nguồn Dữ Liệu & Tham Khảo
* Kỷ yếu Đại hội Thánh Mẫu Toàn quốc lần I (Sài Gòn, 1959).
* Lịch sử Giáo phận Ban Mê Thuột, Giáo phận Phan Thiết, Giáo phận Nha Trang, Giáo phận Kon Tum, Tổng Giáo phận Huế.
* Tài liệu Phủ Tổng ủy Dinh điền Việt Nam Cộng hòa (1959–1961).
* Tư liệu kiến trúc sư Ngô Viết Thụ (Khôi nguyên La Mã 1955).
