# Lựa Chọn Công Nghệ

Cập nhật 2026-09-11, sau đợt tái cấu trúc sang Astro. Tài liệu này thay thế hoàn toàn
phiên bản trước, vốn mô tả một trang tĩnh thuần HTML/CSS/JS không có bước build.

## 1. Mục Tiêu Kỹ Thuật

- **Nội dung phải đọc được bởi máy tìm kiếm.** Đây là ràng buộc số một và là lý do
  toàn bộ ngăn xếp được làm lại.
- **Trải nghiệm bản đồ giữ nguyên** chất lượng của bản cũ: chòm sao, dòng thời gian,
  bộ lọc đa tiêu chí.
- **Dữ liệu chuẩn xác, có nguồn dẫn**, ảnh 100% thực địa đã xác minh.

## 2. Ngăn Xếp

| Lớp | Lựa chọn | Ghi chú |
|---|---|---|
| Khung dựng trang | **Astro 7** (tĩnh hoàn toàn) | 22 trang HTML dựng sẵn lúc build |
| Bản đồ | **Leaflet 1.9** | Chỉ nạp trên `/ban-do/`, không có ở trang nội dung |
| Ảnh nền bản đồ | **OpenStreetMap** | Không cần khóa API. Xem mục 4 |
| Ảnh | `astro:assets` + **sharp** | Xuất AVIF, có `srcset`, giảm khoảng 90% dung lượng |
| Chữ viết | `@fontsource-variable` | Tự lưu trữ, có sẵn bộ ký tự `vietnamese` |
| Sitemap | `@astrojs/sitemap` | Sinh tự động từ `site` trong cấu hình |
| Triển khai | **Netlify** | `netlify.toml` ở thư mục gốc |

Chữ viết: Playfair Display (tiêu đề), Lora (văn xuôi), Be Vietnam Pro (giao diện).
Cả ba đều đã kiểm chứng là có bộ ký tự `vietnamese`.

## 3. Vì Sao Bỏ Kiến Trúc Không Dùng npm

Phiên bản trước của tài liệu này chủ trương không dùng npm, để trang mở được trực tiếp
bằng `file://` và tặng lại cộng đoàn dưới dạng thư mục offline. Chủ trương đó **đã được
thay thế có chủ đích** vào ngày 2026-09-11.

Lý do: kiến trúc cũ chỉ có **một URL duy nhất**, và toàn bộ văn xuôi lịch sử chỉ được
chèn vào trang sau khi người dùng bấm mở hộp thoại. Máy tìm kiếm vì thế không nhìn thấy
nội dung nào, và cũng không có địa chỉ nào để xếp hạng. Không có cách nào sửa điều đó mà
vẫn giữ mô hình một trang tĩnh mở bằng `file://`.

Đánh đổi đã chấp nhận: trang **không còn mở được bằng `file://`**, cần `npm run build`.
Bù lại có 22 URL riêng biệt, mỗi URL mang nội dung đầy đủ trong HTML trả về từ máy chủ.

## 4. Vì Sao Ảnh Nền Bản Đồ Là OpenStreetMap

Bản cũ dùng ArcGIS của Esri. Lớp nền này đã được gỡ bỏ theo yêu cầu.

Lựa chọn thay thế đầu tiên là CARTO Dark Matter, nhưng khi dựng thử thì **mọi ô bản đồ
CARTO đều bị đóng dấu "API KEY REQUIRED"**. CARTO nay bắt buộc có khóa.

Hiện không còn nhà cung cấp ảnh nền **tối** nào vừa miễn phí vừa không cần khóa API. Giải
pháp đang dùng: lấy ô bản đồ OpenStreetMap (sáng, miễn phí, không cần khóa) rồi đảo màu
bằng bộ lọc CSS ngay trên lớp ô bản đồ. Nhờ vậy trang không phụ thuộc khóa API nào.

Nếu sau này cần nền tối chất lượng cao hơn, Stadia Maps hoặc CARTO đều có gói miễn phí
kèm khóa giới hạn theo tên miền. Khi đó chỉ cần sửa phần `tileLayers` trong
`src/components/MarianMap.astro`.

## 5. Giao Diện

- Chỉ có **theme tối**. Hệ token đã dựng sẵn hai lớp để thêm theme sáng sau này mà không
  phải sửa component nào. Chi tiết trong `src/styles/tokens.css`.
- Không dùng framework CSS. CSS thuần, phạm vi theo từng component của Astro.
- Trang nội dung không nạp một byte JavaScript nào.
