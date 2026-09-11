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
| Khung dựng trang | **Astro 7** (tĩnh hoàn toàn) | 23 trang HTML dựng sẵn lúc build |
| Bản đồ | **Leaflet 1.9** | Chỉ nạp trên `/ban-do/`, không có ở trang nội dung |
| Ảnh nền bản đồ | **OpenStreetMap** | Không cần khóa API. Xem mục 4 |
| Ảnh | `astro:assets` + **sharp** | Xuất AVIF, có `srcset`, giảm khoảng 90% dung lượng |
| Chữ viết | `@fontsource-variable` | Tự lưu trữ, có sẵn bộ ký tự `vietnamese` |
| Sitemap | `@astrojs/sitemap` | Sinh tự động từ `site` trong cấu hình |
| Triển khai tĩnh | **Cloudflare Pages** | Tích hợp CI/CD tự động qua GitHub Actions, `public/_headers` |
| API Serverless | **Cloudflare Workers** | Chạy tại biên (Edge), xử lý `/api/submissions`, zero cold start |
| Cơ sở dữ liệu | **Cloudflare D1** | SQLite serverless phân tán, lưu trữ bản ghi phản hồi |
| Lưu trữ tệp | **Cloudflare R2** | Tương thích S3, lưu tệp đính kèm an toàn, miễn phí egress |
| Chống spam/Bot | **Cloudflare Turnstile** | Không xâm lấn, thay thế CAPTCHA, xác thực token server-side |
| Gửi email | **Cloudflare Email Routing** | Gửi thông báo tức thì qua binding `send_email` |

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
Bù lại có 23 URL riêng biệt, mỗi URL mang nội dung đầy đủ trong HTML trả về từ máy chủ.

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
- Trang nội dung không nạp JavaScript (trừ script biểu mẫu tại `/lien-he/`).

## 6. Vì Sao Chọn Hệ Sinh Thái Serverless Của Cloudflare (Worker, D1, R2, Turnstile)

Để hỗ trợ tính năng Liên hệ & Đóng góp tư liệu (`/lien-he/`), dự án cần nhận biểu mẫu,
lưu trữ bản ghi, lưu tệp ảnh/PDF và gửi thông báo tới ban biên tập. Việc lựa chọn Cloudflare
dựa trên các lý do cốt lõi:

1. **Duy trì chi phí 0đ bền vững cho dự án cộng đồng phi lợi nhuận:**
   - Không cần thuê máy chủ VPS hay container chuyên dụng.
   - Gói miễn phí của Cloudflare Worker (100.000 requests/ngày), D1 (5 triệu rows read, 100.000 writes/ngày)
     và R2 (10 GB lưu trữ, 0đ phí truyền tải egress) vượt xa nhu cầu đóng góp thực tế của website.
2. **Loại bỏ gánh nặng bảo trì hạ tầng & rủi ro bảo mật:**
   - Không có hệ điều hành Linux hay cổng mạng hở cần cập nhật vá lỗi (patching).
   - D1 lưu trữ dữ liệu phân tán, có thể sao lưu và xuất dữ liệu dễ dàng.
   - R2 không mở bucket ra internet (không có Public Access Bucket URL); thay vào đó sử dụng URL
     ký số HMAC SHA-256 có thời hạn (14 ngày) để ban biên tập xem trước an toàn.
3. **Chống spam văn minh với Turnstile:**
   - Thay vì bắt người dùng chọn hình ảnh đèn giao thông hay giải chữ méo mó của reCAPTCHA,
     Turnstile tự động xác thực bằng cryptographic telemetry trong nền.
   - Không đặt cookie theo dõi người dùng, tuân thủ đạo đức dữ liệu và quyền riêng tư.
4. **Email Routing tích hợp nội bộ:**
   - Sử dụng binding `send_email` có sẵn của Cloudflare Worker mà không cần đăng ký tài khoản
     bên thứ ba (SendGrid, Mailgun) vốn dễ bị khóa hoặc đòi hỏi thẻ tín dụng.
