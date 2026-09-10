# Kiến Trúc Hệ Thống (System Architecture)

## 1. Sơ Đồ Khối Luồng Hoạt Động (Data & Component Flow)

```
[ Người Dùng Tương Tác ]
     │
     ├── 1. Chọn Phiên Bản (V1 / V2 / V3 / V4)
     │        └──> [ MarianMap.setVersion ] ───> Render Marker & Highlight Node
     │        └──> [ MarianConstellation ] ───> Vẽ Polyline SVG chòm sao + Tia Polaris
     │        └──> [ MarianListView ] ───────> Đồng bộ danh sách thẻ bài
     │
     ├── 2. Kéo / Phát Dòng Thời Gian (Timeline Player)
     │        └──> [ MarianTimeline ] ────────> Cập nhật năm hiện hành (1798–2026)
     │        └──> [ MarianMap ] ─────────────> Cập nhật độ hiển thị Marker theo năm
     │
     ├── 3. Tra Cứu & Lọc (List View Drawer)
     │        └──> [ MarianListView ] ───────> Lọc theo từ khóa / 5 tượng Diệm / vùng
     │
     └── 4. Nhấp Vào Marker / Thẻ Bài
              └──> [ MarianMap.focusStatue ] ─> Di chuyển mượt mà tới tọa độ GPS
              └──> [ MarianModal.open ] ──────> Hiển thị Popup khảo cứu sâu
```

## 2. Các Lớp Dịch Vụ
1. **Lớp Dữ Liệu (Data Layer):**
   - `src/data/statues.js`: Nguồn dữ liệu duy nhất (Single Source of Truth) định nghĩa thông số 18 tượng và đồ thị các phiên bản chòm sao.
2. **Lớp Trình Diễn Địa Lý (Geospatial Presentation Layer):**
   - Leaflet.js + CartoDB Dark Matter Engine.
   - SVG Layer với bộ lọc phát sáng `feGaussianBlur` và animation `stroke-dashoffset`.
3. **Lớp Điều Khiển Thời Gian (Temporal Controller Layer):**
   - Thuật toán bước nhảy thông minh: Tăng tốc ở thế kỷ 18-19 và tăng từng năm ở thế kỷ 20-21.
4. **Lớp Tương Tác Người Dùng (Interactive UI Layer):**
   - Trực tiếp trên DOM thông qua Glassmorphism CSS, hỗ trợ phím tắt bàn phím và phản hồi xúc giác.
