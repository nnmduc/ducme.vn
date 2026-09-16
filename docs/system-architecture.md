# Kiến Trúc Hệ Thống

Cập nhật 2026-09-11. Trang tĩnh hoàn toàn, dựng bằng Astro, triển khai trên Cloudflare Pages.

## 1. Nguyên Tắc Nền Tảng

**Một linh địa, một URL.** Mọi nội dung phải nằm trong HTML trả về từ máy chủ. Không có
nội dung nào chỉ xuất hiện sau một cú bấm chuột.

Đây là điều kiện để nội dung xếp hạng được, và cũng là lý do hộp thoại chi tiết của bản
cũ đã bị loại bỏ hoàn toàn.

## 2. Bản Đồ Đường Dẫn

| Đường dẫn | Số trang | Nội dung |
|---|---|---|
| `/` | 1 | Trang chủ. Toàn bộ linh địa dưới dạng HTML thật, gom theo vùng miền |
| `/linh-dai/[id]/` | 1/linh địa | Trang tư liệu đầy đủ. Bề mặt xếp hạng chính |
| `/chom-sao-bac-dau/` | 1 | Bốn phiên bản của giả thuyết Bắc Đẩu |
| `/ban-do/` | 1 | Bản đồ tương tác. Nơi duy nhất nạp Leaflet |
| `/gioi-thieu/` | 1 | Phương pháp khảo cứu, nguyên tắc về ảnh, cách dẫn nguồn |
| `/lien-he/` | 1 | Tiếp nhận đóng góp tư liệu, hình ảnh, ý kiến đính chính |
| `/404.html` | 1 | Có `noindex`, kèm danh mục đầy đủ |
| `/robots.txt`, `/sitemap-index.xml` | 2 | Sinh lúc build |

## 3. Luồng Dữ Liệu

### 3.1. Luồng Dữ Liệu Tĩnh (Static Site Generation)

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

`tests/test_data_and_integrity.js` kiểm 459 điều kiện trên dữ liệu này: id không trùng,
tọa độ nằm trong lãnh thổ, đúng 5 pho tượng thời Đệ nhất Cộng hòa, mọi node của chòm sao
khớp linh địa có thật, mỗi linh địa có ít nhất hai nguồn dẫn https không phải tên miền trần,
và tính sẵn sàng của backend `/lien-he/`.

### 3.2. Luồng Xử Lý Phản Hồi & Đóng Góp (Serverless Feedback Flow)

```
Người dùng (/lien-he/)
    │  (FormData: text fields + files + Turnstile token)
    ▼
Cloudflare Worker (`worker/src/index.js`)
    │
    ├── 1. Kiểm tra CORS & Giới hạn dung lượng (Content-Length <= 16MB)
    ├── 2. Xác thực Cloudflare Turnstile token (chống spam bot)
    ├── 3. Kiểm định dữ liệu & Magic Bytes tệp đính kèm (JPG, PNG, WebP, PDF)
    ├── 4. Upload tệp vào Cloudflare R2 (`ducmevn-feeback`)
    │      └── Rollback tệp nếu bước sau thất bại
    ├── 5. Ghi bản ghi vào Cloudflare D1 (`ducmevn_feedback` SQLite)
    │      └── Rollback R2 nếu ghi D1 thất bại
    └── 6. Gửi email thông báo tức thì qua Cloudflare Email Routing (`send_email`)
           └── Sinh URL xem trước có chữ ký HMAC SHA-256 (hạn 14 ngày)
```

## 4. Ranh Giới JavaScript

| Trang | JavaScript gửi xuống |
|---|---|
| `/`, `/linh-dai/*/`, `/chom-sao-bac-dau/`, `/gioi-thieu/`, `/404` | **0 byte** (chỉ có ~1.5 KB inline script đóng/mở Mobile Navigation Drawer) |
| `/lien-he/` | Khoảng 12 KB (script xử lý kéo thả tệp, validation client, gửi async FormData) + Turnstile widget |
| `/ban-do/` | Khoảng 151 KB, gồm Leaflet và mã điều khiển bản đồ |

Ngay cả `/ban-do/` và `/lien-he/` cũng dựng sẵn khung trang, thông tin hướng dẫn và nội dung
ở phía máy chủ, nên tắt JavaScript người dùng vẫn đọc được đầy đủ thông tin.

## 5. Hệ Token Màu

Hai lớp, trong `src/styles/tokens.css`:

1. **Nguyên thủy**: `--navy-950`, `--gold-500`, `--emerald-500`, `--rose-500`. Tên màu thô, không mang nghĩa sử dụng.
2. **Ngữ nghĩa**: `--bg-page`, `--text-primary`, `--accent`, `--border-subtle`, `--status-success`, `--status-error`.

Component **chỉ được** tham chiếu lớp ngữ nghĩa. Thêm theme sáng về sau là việc điền lại
16 biến ngữ nghĩa trong một khối `[data-theme="light"]`, không sửa component nào.

Đã đo tương phản: `#64748b` chỉ đạt 4.13:1 trên nền `#060b19`, trượt chuẩn WCAG AA, nên
đã bị loại bỏ và thay bằng `#8494a8` (6.34:1).

## 6. Dữ Liệu Có Cấu Trúc

- Trang chi tiết: `TouristAttraction` kèm `geo`, `address`, `image`, cộng `BreadcrumbList`.
- Trang chủ: `WebSite` và `ItemList` liệt kê toàn bộ linh địa (`numberOfItems` tính động).
- `/gioi-thieu/`: `AboutPage`.
- `/lien-he/`: `ContactPage` kèm `BreadcrumbList`.

`og:image:width` và `og:image:height` **chỉ** được phát ra khi biết chắc kích thước thật.
Khai báo sai còn tệ hơn không khai báo.

## 7. Hạ Tầng Serverless Backend (Cloudflare)

Tách biệt hoàn toàn khỏi máy chủ build tĩnh:

1. **Edge Worker:** Chạy trên mạng lưới Anycast của Cloudflare, độ trễ thấp từ khắp Việt Nam.
2. **SQLite D1 Database:** Không cần quản lý cụm server SQL, lưu trữ cấu trúc bảng `submissions`
   (id, type, name, email, phone, statue_id, message, file_keys, file_meta, ip_country, status, email_status, created_at).
3. **R2 Storage & Secure Download:** Tệp đính kèm không mở public ra internet. Người quản trị truy cập
   thông qua URL có kèm token xác thực HMAC SHA-256 (`/api/submissions/:id/files/:fileKey?token=...&expires=...`).
4. **Cloudflare Turnstile:** Xác thực phía server với secret key không lưu trong repo (dùng `wrangler secret`).
