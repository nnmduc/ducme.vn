# Tổng Quan Dự Án & Yêu Cầu Phát Triển Sản Phẩm (PDR)

Cập nhật 2026-09-11 sau đợt tái cấu trúc sang Astro.

## 1. Mục Đích & Bối Cảnh Sản Phẩm

Tạo một công cụ trực quan hóa địa lý và lịch sử, tôn nghiêm và chính xác, nhằm:

1. Hệ thống hóa thông tin các đại trung tâm hành hương Thánh Mẫu tại Việt Nam từ năm 1798 đến nay.
2. Làm sáng tỏ bối cảnh lịch sử về 5 pho tượng Đức Mẹ do chính phủ Đệ nhất Cộng hòa và Phủ Tổng ủy
   Dinh điền chủ trương xây dựng giai đoạn 1959 tới 1961.
3. Khảo cứu giả thuyết dân gian về việc sắp xếp các tượng đài theo hình thế chòm sao Bắc Đẩu.
4. **Để những tư liệu này tìm thấy được.** Mỗi linh địa có một URL riêng, nội dung nằm sẵn trong
   HTML trả về từ máy chủ, đọc được cả khi tắt JavaScript.

> **Thay đổi so với bản trước.** Mục 4 trước đây là "có thể mở offline hoặc lưu trữ vĩnh viễn".
> Yêu cầu đó đã được thay thế ngày 2026-09-11. Kiến trúc mở bằng `file://` buộc trang phải là một
> URL duy nhất, và chính điều đó khiến toàn bộ nội dung vô hình với máy tìm kiếm. Xem
> `docs/tech-stack.md` mục 3.

## 2. Tiêu Chuẩn Nghiệm Thu

### Đã đạt

- [x] Bản đồ Việt Nam tương tác, có địa danh và chủ quyền biển đảo.
- [x] Lớp phủ chòm sao Bắc Đẩu bật tắt được.
- [x] Đủ 4 phiên bản: V1 kinh điển, V2 biến thể Măng Đen, V3 bộ 5 tượng 1959, V4 toàn quốc.
- [x] Dòng thời gian 1798 tới 2026, có nút chạy tự động.
- [x] Danh mục có tìm kiếm và lọc đa tiêu chí.
- [x] **Mỗi linh địa là một trang riêng** tại `/linh-dai/[id]/`, gồm tư liệu lịch sử, truyền tụng dân
      gian, tọa độ và nguồn dẫn. _Hộp thoại popup của bản cũ đã được thay bằng các trang này: nội dung
      trong hộp thoại không có URL nên không thể tìm thấy hay chia sẻ được._
- [x] Độ tương phản đạt WCAG AA, đã đo từng cặp màu. Không dùng gradient lòe loẹt.
- [x] Trang nội dung không nạp JavaScript. Leaflet chỉ có ở `/ban-do/`.
- [x] Sitemap, robots.txt, canonical, thẻ chia sẻ và JSON-LD đầy đủ trên cả 23 trang.
- [x] Trang Liên hệ & Đóng góp tư liệu (`/lien-he/`) tiếp nhận phản hồi, tư liệu lịch sử và ảnh thực địa.
- [x] Hạ tầng Serverless Backend (Cloudflare Worker API, D1 Database, R2 Storage, Email Routing, Turnstile).
- [x] 397 điều kiện kiểm tính toàn vẹn dữ liệu và cấu hình backend, đều đạt.

### Còn lại

- [ ] Chạy Lighthouse trên thiết bị di động.
- [ ] Triển khai và nộp sitemap trong Google Search Console.
- [ ] **Bổ sung nội dung.** Xem mục 3.

## 3. Hạn Chế Đã Biết: Dung Lượng Nội Dung

Đợt tái cấu trúc đã sửa được **kiến trúc**, nhưng không sửa được **dung lượng nội dung**. Đã đo văn
xuôi trên cả 18 trang chi tiết:

| Chỉ số | Giá trị |
|---|---|
| Ít nhất | 105 từ (Fatima Vĩnh Long) |
| Trung vị | 162 từ |
| Nhiều nhất | 225 từ (Tà Pao) |
| Dưới 200 từ | 13 trong 18 trang |

**Không trang nào vượt 250 từ.** Mốc thường được xem là đủ sức cạnh tranh cho một trang nội dung là
khoảng 300 từ trở lên, nên hiện **cả 18 trang đều mỏng**, không riêng gì những trang thiếu ảnh. Dung
lượng nội dung cũng không liên quan tới việc có ảnh hay không: Tà Pao có ảnh và đạt 225 từ, trong khi
Bãi Dâu có ảnh nhưng chỉ 124 từ.

Đây là vấn đề về **dữ liệu**, không phải về mã nguồn. Không thể bù bằng kỹ thuật, vì không được phép
bịa thêm sử liệu. Việc cần làm là khảo cứu bổ sung, ưu tiên theo thứ tự tăng dần số từ ở trên, tập
trung vào các trường `historicalFact`, `architect` và `significance` trong `src/data/statues.js`.

Hai trang mỏng nhất, Fatima Vĩnh Long và Hòn Chông, cũng chỉ có đúng hai nguồn dẫn, mức tối thiểu.
