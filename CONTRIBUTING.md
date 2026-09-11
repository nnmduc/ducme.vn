# Hướng Dẫn Đóng Góp (Contributing Guide)

Cảm ơn bạn đã quan tâm và muốn đóng góp cho dự án **Linh Đài Đức Mẹ Việt Nam**! 

Dự án này là một sáng kiến nguồn mở phi lợi nhuận nhằm lưu trữ, số hóa và phổ biến tư liệu lịch sử, văn hóa, kiến trúc về các trung tâm hành hương Thánh Mẫu tại Việt Nam. Mọi sự hỗ trợ từ cộng đồng — dù là sửa một lỗi chính tả, bổ sung tư liệu lịch sử, cập nhật tọa độ chính xác, hay tối ưu hóa mã nguồn — đều vô cùng quý giá.

---

## Mục lục

1. [Quy tắc ứng xử](#1-quy-tắc-ứng-xử)
2. [Các hình thức đóng góp](#2-các-hình-thức-đóng-góp)
3. [Quy chuẩn dữ liệu & Trích dẫn (Rất quan trọng)](#3-quy-chuẩn-dữ-liệu--trích-dẫn-rất-quan-trọng)
4. [Quy trình phát triển mã nguồn](#4-quy-trình-phát-triển-mã-nguồn)
5. [Quy chuẩn viết mã (Coding Standards)](#5-quy-chuẩn-viết-mã-coding-standards)
6. [Quy ước đặt tên nhánh & Thông điệp Commit](#6-quy-ước-đặt-tên-nhánh--thông-điệp-commit)
7. [Quy trình gửi Pull Request (PR)](#7-quy-trình-gửi-pull-request-pr)

---

## 1. Quy tắc ứng xử

Khi tham gia vào dự án này, bạn đồng ý tuân thủ bản **[Quy tắc ứng xử (CODE_OF_CONDUCT.md)](CODE_OF_CONDUCT.md)** của chúng tôi. Xin hãy luôn giữ thái độ tôn trọng, lịch sự và cởi mở với mọi thành viên.

---

## 2. Các hình thức đóng góp

### A. Đóng góp tư liệu & Hình ảnh thực địa
Đây là mảng đóng góp được **ưu tiên cao nhất**. Nhiều linh địa hiện vẫn còn thiếu ảnh chụp thực tế hoặc phần văn bản lịch sử còn ngắn:
- **Gửi trực tiếp qua web (Không cần tài khoản GitHub):** Bạn có thể gửi ảnh chụp thực địa, kỷ yếu, bài viết khảo cứu hoặc phản hồi đính chính thông qua biểu mẫu trực tuyến tại **[ducme.vn/lien-he/](https://ducme.vn/lien-he/)**. Hệ thống hỗ trợ đính kèm tối đa 3 tệp (JPG, PNG, WebP, PDF) và cung cấp mã biên nhận theo dõi.
- **Bổ sung ảnh chụp thực địa qua Pull Request:** Hiện vẫn còn nhiều linh địa chưa có ảnh thực tế xác thực (xem các bản ghi có `realImage: null` trong `src/data/statues.js` để biết danh sách cụ thể). Nếu bạn có ảnh chụp tại thực địa (chính diện tượng, toàn cảnh linh đài) và sẵn lòng cấp phép dưới dạng Creative Commons (CC-BY-SA, CC-BY) hoặc Public Domain, xin hãy đóng góp!
  - Xem danh sách chi tiết từng linh địa còn thiếu ảnh, nguồn tham khảo và nội dung tại
    [`docs/marian-sites-missing-info.md`](docs/marian-sites-missing-info.md) — đã xếp theo thứ tự ưu
    tiên để biết nên bắt đầu từ đâu.
- **Hiệu đính & Mở rộng tư liệu:** Cung cấp thêm tư liệu lịch sử, giai thoại xây dựng, sự kiện làm phép tượng từ các kỷ yếu giáo phận hoặc văn khố có thật.

### B. Báo cáo lỗi (Bug Report)
Nếu bạn phát hiện lỗi hiển thị, lỗi bản đồ, hoặc sai lệch thông tin:
- Kiểm tra danh sách [Existing Issues](https://github.com/nnmduc/ducme.vn/issues) xem vấn đề đã được ghi nhận chưa.
- Nếu chưa, hãy tạo Issue mới bằng cách sử dụng mẫu **Bug Report**. Mô tả chi tiết các bước tái hiện, ảnh chụp màn hình và thiết bị/trình duyệt đang sử dụng.

### C. Đề xuất tính năng (Feature Request)
Nếu bạn có ý tưởng mới giúp nâng cao trải nghiệm người dùng hoặc cải thiện chất lượng nghiên cứu, hãy mở một Issue với mẫu **Feature Request** để thảo luận cùng cộng đồng trước khi bắt tay vào lập trình.

---

## 3. Quy chuẩn dữ liệu & Trích dẫn (Rất quan trọng)

Tất cả dữ liệu linh địa được quản lý tập trung tại một nơi duy nhất: `src/data/statues.js`. Mọi thay đổi dữ liệu phải đáp ứng các tiêu chí nghiêm ngặt sau để vượt qua hệ thống kiểm thử tự động:

1. **Tuyệt đối không dùng ảnh do AI sinh ra (AI-generated images):**
   - Dự án kiên quyết nói **KHÔNG** với ảnh tạo từ Midjourney, DALL-E, Stable Diffusion,...
   - Chỉ chấp nhận ảnh chụp thực địa thật, có thể kiểm chứng nguồn gốc hoặc do chính bạn chụp và đồng ý phát hành công khai.
   - Nếu chưa có ảnh thực tế, hãy để trường `realImage: null`.

2. **Yêu cầu về trích dẫn nguồn (`sources`):**
   - Mỗi linh địa bắt buộc phải có **ít nhất 2 nguồn tham khảo** có thể tra cứu được.
   - URL nguồn phải dùng giao thức `https://` và phải trỏ trực tiếp đến bài viết hoặc kết quả truy vấn liên quan cụ thể (không được dùng domain gốc không có ngữ cảnh, ví dụ `https://wikipedia.org` là không hợp lệ).
   - Phân định rạch ròi giữa sự kiện lịch sử kiểm chứng được (`historicalFact`) và truyền tụng dân gian (`oralTradition`).

3. **Tọa độ địa lý GPS (`lat`, `lng`):**
   - Hai trường số riêng biệt, ví dụ `"lat": 16.7214, "lng": 107.1947`.
   - Bắt buộc nằm trong phạm vi lãnh thổ Việt Nam: vĩ độ (`lat`) từ 8.5 đến 23.5, kinh độ (`lng`) từ 102.0 đến 110.0.

4. **Định danh (`id`):**
   - Viết thường, không dấu, không khoảng trắng, chỉ dùng chữ cái và số (ví dụ: `lavang`, `trakieu`, `mangden`).

---

## 4. Quy trình phát triển mã nguồn

1. **Fork** kho lưu trữ về tài khoản GitHub của bạn.
2. **Clone** bản fork về máy cục bộ:
   ```bash
   git clone https://github.com/<your-username>/ducme.vn.git
   cd ducme.vn
   ```
3. Cài đặt các gói phụ thuộc (cần Node.js `>= 20.11`):
   ```bash
   npm install
   ```
4. Tạo nhánh mới cho công việc của bạn:
   ```bash
   git checkout -b feat/bo-sung-tu-lieu-ba-trieu
   ```
5. Khởi động môi trường phát triển cục bộ:
   ```bash
   npm run dev
   ```
6. Thực hiện các chỉnh sửa và **chạy bộ kiểm thử**:
   ```bash
   npm test
   ```
   *Tất cả 353 điều kiện kiểm thử phải báo PASS.*
7. Kiểm tra quá trình dựng trang tĩnh (build):
   ```bash
   npm run build
   ```

---

## 5. Quy chuẩn viết mã (Coding Standards)

- **Triết lý 0-byte JavaScript:** Các trang nội dung (`/`, `/linh-dai/[id]/`, `/chom-sao-bac-dau/`, `/gioi-thieu/`) bắt buộc phải hiển thị đầy đủ văn xuôi dưới dạng HTML thô gửi từ máy chủ. Không thêm các đoạn mã JS client-side vào các trang này trừ khi là tính năng tương tác đặc biệt đã được thông qua.
- **CSS Design Tokens:** Sử dụng các biến CSS token ngữ nghĩa được định nghĩa trong `src/styles/tokens.css` (ví dụ: `var(--color-text-primary)`, `var(--color-bg-surface)`). Tuyệt đối không hardcode mã màu hex trực tiếp trong component.
- **Semantic HTML & Khả năng tiếp cận (a11y):** Đảm bảo sử dụng thẻ HTML ngữ nghĩa (`<main>`, `<article>`, `<header>`, `<nav>`), văn bản thay thế `alt` cho hình ảnh và tỷ lệ tương phản màu sắc đáp ứng tiêu chuẩn WCAG AA (≥ 4.5:1).
- **Hỗ trợ Tiếng Việt:** Đảm bảo mọi tệp tin lưu dưới bảng mã `UTF-8`. Các font chữ sử dụng phải có subset `vietnamese` hoàn chỉnh.

---

## 6. Quy ước đặt tên nhánh & Thông điệp Commit

Chúng tôi khuyến khích tuân thủ định dạng **Conventional Commits**:

### Tiền tố nhánh:
- `feat/ten-tinh-nang`: Tính năng mới
- `fix/loi-can-sua`: Sửa lỗi hiển thị hoặc logic
- `data/ten-noi-dung`: Thêm/cập nhật dữ liệu linh địa
- `docs/ten-tai-lieu`: Cập nhật tài liệu kỹ thuật
- `refactor/mo-ta`: Tái cấu trúc mã nguồn mà không đổi chức năng

### Định dạng thông điệp commit:
```text
<loại>(phạm vi): <mô tả ngắn gọn bằng tiếng Việt hoặc tiếng Anh>

[Nội dung chi tiết nếu cần]
```
Ví dụ:
- `data(lavang): bo sung trich dan ky yeu Dai hoi Thanh Mau 1959`
- `fix(map): sua loi giat khung hinh khi chuyen che do ve tinh tren mobile`
- `docs: cap nhat huong dan trien khai Cloudflare Pages`

---

## 7. Quy trình gửi Pull Request (PR)

1. Đẩy nhánh của bạn lên bản fork trên GitHub:
   ```bash
   git push origin feat/ten-tinh-nang
   ```
2. Mở giao diện GitHub và nhấn nút **Compare & pull request**.
3. Điền đầy đủ thông tin theo mẫu **Pull Request Template**:
   - Mô tả mục đích thay đổi.
   - Đính kèm mã Issue liên quan (ví dụ: `Closes #12`).
   - Ảnh chụp màn hình kết quả (nếu có thay đổi về giao diện).
   - Xác nhận đã chạy `npm test` thành công.
4. Chờ các kiểm tra tự động (GitHub Actions CI) hoàn tất và người bảo trì dự án phản hồi/review mã nguồn.

*Một lần nữa, xin chân thành cảm ơn mọi nỗ lực và thời gian bạn dành cho dự án Linh Đài Đức Mẹ Việt Nam!*
