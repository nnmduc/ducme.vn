# Kiến Trúc Hệ Thống

Cập nhật 2026-09-11. Trang tĩnh hoàn toàn, dựng bằng Astro, triển khai trên Netlify.

## 1. Nguyên Tắc Nền Tảng

**Một linh địa, một URL.** Mọi nội dung phải nằm trong HTML trả về từ máy chủ. Không có
nội dung nào chỉ xuất hiện sau một cú bấm chuột.

Đây là điều kiện để nội dung xếp hạng được, và cũng là lý do hộp thoại chi tiết của bản
cũ đã bị loại bỏ hoàn toàn.

## 2. Bản Đồ Đường Dẫn

| Đường dẫn | Số trang | Nội dung |
|---|---|---|
| `/` | 1 | Trang chủ. Toàn bộ 18 linh địa dưới dạng HTML thật, gom theo vùng miền |
| `/linh-dai/[id]/` | 18 | Trang tư liệu đầy đủ. Bề mặt xếp hạng chính |
| `/chom-sao-bac-dau/` | 1 | Bốn phiên bản của giả thuyết Bắc Đẩu |
| `/ban-do/` | 1 | Bản đồ tương tác. Nơi duy nhất nạp Leaflet |
| `/gioi-thieu/` | 1 | Phương pháp khảo cứu, nguyên tắc về ảnh, cách dẫn nguồn |
| `/404.html` | 1 | Có `noindex`, kèm danh mục đầy đủ |
| `/robots.txt`, `/sitemap-index.xml` | 2 | Sinh lúc build |

## 3. Luồng Dữ Liệu

```
src/data/statues.js          <- NGUỒN DUY NHẤT. Hai export ESM.
        |
        +-- src/lib/statues.js     (gom vùng miền, tách tỉnh, thứ tự, liền kề)
        +-- src/lib/photos.js      (khớp tên file với ảnh trong src/assets)
        +-- src/lib/seo.js         (cắt mô tả, dựng JSON-LD)
        |
        +-- Trang .astro           dựng HTML lúc build
        +-- MarianMap.astro        chọn lọc trường cần thiết, đưa qua thẻ JSON
                                   cho đảo tương tác đọc
```

Dữ liệu chỉ tồn tại **một bản** trong repo. Đảo tương tác nhận dữ liệu từ đúng module mà
trang dùng để dựng HTML, nên không thể có hiện tượng hai bản lệch nhau.

`tests/test_data_and_integrity.js` kiểm 347 điều kiện trên dữ liệu này: id không trùng,
tọa độ nằm trong lãnh thổ, đúng 5 pho tượng thời Đệ nhất Cộng hòa, mọi node của chòm sao
khớp linh địa có thật, mỗi linh địa có ít nhất hai nguồn dẫn https không phải tên miền trần.

## 4. Ranh Giới JavaScript

| Trang | JavaScript gửi xuống |
|---|---|
| `/`, `/linh-dai/*/`, `/chom-sao-bac-dau/`, `/gioi-thieu/`, `/404` | **0 byte** |
| `/ban-do/` | Khoảng 151 KB, gồm Leaflet và mã điều khiển bản đồ |

Ngay cả `/ban-do/` cũng dựng sẵn khung trang, bảng thông tin và toàn bộ danh sách 18 linh
địa ở phía máy chủ, nên tắt JavaScript vẫn đọc được nội dung.

## 5. Hệ Token Màu

Hai lớp, trong `src/styles/tokens.css`:

1. **Nguyên thủy**: `--navy-950`, `--gold-500`. Tên màu thô, không mang nghĩa sử dụng.
2. **Ngữ nghĩa**: `--bg-page`, `--text-primary`, `--accent`, `--border-subtle`.

Component **chỉ được** tham chiếu lớp ngữ nghĩa. Thêm theme sáng về sau là việc điền lại
16 biến ngữ nghĩa trong một khối `[data-theme="light"]`, không sửa component nào.

Đã đo tương phản: `#64748b` chỉ đạt 4.13:1 trên nền `#060b19`, trượt chuẩn WCAG AA, nên
đã bị loại bỏ và thay bằng `#8494a8` (6.34:1).

## 6. Dữ Liệu Có Cấu Trúc

- Trang chi tiết: `TouristAttraction` kèm `geo`, `address`, `image`, cộng `BreadcrumbList`.
- Trang chủ: `WebSite` và `ItemList` liệt kê cả 18 linh địa.
- `/gioi-thieu/`: `AboutPage`.

`og:image:width` và `og:image:height` **chỉ** được phát ra khi biết chắc kích thước thật.
Khai báo sai còn tệ hơn không khai báo.
