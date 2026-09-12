# Tiêu chí kiểm chứng

## A. Bảy trục chấm điểm

Mỗi trục cho điểm 0–5. Kèm bằng chứng cho mỗi điểm số — điểm không có lý do là điểm vô nghĩa.

| # | Trục | 0 | 3 | 5 |
|---|---|---|---|---|
| 1 | **Chất lượng nguồn** | Không nguồn, hoặc toàn blog/mạng xã hội | Đủ 2 nguồn nhưng đều cấp B yếu | Có nguồn cấp A hoặc nhiều nguồn cấp B độc lập |
| 2 | **Truy vết luận điểm** | Nội dung không truy được về nguồn nào | Phần lớn truy được, vài câu trôi nổi | Mọi khẳng định đều gắn nguồn cụ thể và nguồn thật sự chứa nội dung đó |
| 3 | **Độ chính xác dữ liệu** | Sai vùng miền/toạ độ/niên đại | Có sai lệch nhỏ đã nêu | Mọi trường khớp nguồn, toạ độ đối chiếu được |
| 4 | **Hình ảnh** | Ảnh AI, hoặc nguồn không công khai/không kiểm tra lại được | Không đề xuất ảnh (chấp nhận được) | Ảnh thật, nguồn công khai còn sống, tác giả rõ, đúng linh địa — giấy phép cụ thể không bắt buộc; có thêm ảnh phụ (`galleryImages`) hợp lệ là điểm cộng, không bắt buộc |
| 5 | **Phân định sự thật / truyền tụng** | Trộn lẫn, khẳng định siêu nhiên như lịch sử | Có phân định nhưng còn vài chỗ lẫn | Ranh giới rõ ràng, dùng đúng trường |
| 6 | **Giọng văn & tính trung lập** | Tuyên truyền, thiên kiến chính trị/tôn giáo | Tạm ổn, vài câu cảm tính | Trung lập, kính trọng, mô tả thay vì tán dương |
| 7 | **Tính kỹ thuật** | `validate-record.mjs` lỗi chặn | Đạt nhưng nhiều cảnh báo | Đạt, cảnh báo đã giải trình |

Quy đổi tham khảo (chỉ tham khảo — tiêu chí chặn ở mục B luôn thắng):

- **≥ 28/35 và không chạm tiêu chí chặn** → ÁP DỤNG
- **21–27** → ÁP DỤNG CÓ ĐIỀU KIỆN, liệt kê rõ điều kiện
- **14–20** → TRẢ LẠI KHẢO CỨU
- **< 14, hoặc có nguồn bịa/ảnh AI** → TỪ CHỐI

## B. Tiêu chí chặn — chạm một cái là không thể kết luận ÁP DỤNG

1. Dưới 2 nguồn truy cập được, hoặc toàn bộ nguồn chỉ là link tìm kiếm.
2. Có nguồn được dẫn nhưng mở ra không hề chứa luận điểm được gán cho nó.
3. Ảnh không có nguồn công khai còn truy cập/kiểm tra lại được (trang gốc chết, riêng tư, hoặc chỉ
   là lời xin phép cá nhân không ai khác xác minh lại được), hoặc có dấu hiệu do máy tạo sinh. Giấy
   phép Creative Commons cụ thể **không** phải điều kiện chặn — giữ nguyên URL nguồn và ghi rõ nguồn
   trong caption là đủ.
4. Toạ độ ngoài lãnh thổ Việt Nam, hoặc lệch hơn 500m so với vị trí đối chiếu được.
5. `validate-record.mjs` còn lỗi chặn (nghĩa là `npm test` sẽ đỏ).
6. Nội dung khẳng định sự kiện siêu nhiên như sự thật lịch sử đã kiểm chứng.
7. Đề xuất sửa `CONSTELLATION_VERSIONS` mà không có lập luận lịch sử riêng.
8. Trùng lặp với một bản ghi đã có mà báo cáo không nhận ra.

Chạm tiêu chí 1–3 ở **riêng một ảnh** (chính hoặc phụ) không chặn cả hồ sơ: loại đúng ảnh đó, giữ các
ảnh khác đã đạt. Chạm ở **toàn bộ ảnh đề xuất** thì vẫn có thể ÁP DỤNG CÓ ĐIỀU KIỆN cho phần văn bản:
duyệt văn bản, loại hết ảnh, giữ `realImage: null` và `galleryImages: []`.

## C. Bảng đối chiếu luận điểm (phải làm bằng tay)

Lập bảng này cho mọi khẳng định trong `historicalFact` và các trường dữ liệu chính:

| # | Luận điểm trong báo cáo | Nguồn được gán | Đã mở nguồn? | Nguồn có chứa? | Kết luận |
|---|---|---|---|---|---|
| 1 | "Tượng đúc năm 1959" | [S1] | ✓ | ✓ đúng nguyên văn | Đạt |
| 2 | "Cao 3m" | [S2] | ✓ | ✗ nguồn ghi "khoảng 3m" | Sửa thành "khoảng 3m" |
| 3 | "Do KTS X thiết kế" | [S3] | ✓ | ✗ không nhắc tới | **Bỏ hoặc tìm nguồn khác** |

Ba mức kết quả: **Đạt** / **Sửa câu chữ** / **Bỏ**. Không có mức "tạm chấp nhận".

## D. Dấu hiệu ảnh do máy tạo sinh

Không có dấu hiệu nào tự nó là bằng chứng, nhưng nhiều dấu hiệu cùng lúc thì nên loại:

- Metadata chứa tên công cụ tạo sinh, hoặc có C2PA/Content Credentials (script `check-image.mjs` bắt).
- Chữ trên bảng hiệu, bia đá nhoè thành ký tự vô nghĩa hoặc sai chính tả tiếng Việt kỳ lạ.
- Chi tiết kiến trúc không nhất quán: bậc thang lệch nhịp, cột không thẳng hàng, mái chồng lấn vô lý.
- Bàn tay, ngón tay, nếp áo tượng biến dạng.
- Ánh sáng quá hoàn hảo, không có nhiễu cảm biến, nền mờ kiểu ống kính không tồn tại.
- Không tìm được ảnh này ở bất kỳ nguồn nào khác trước thời điểm được đăng.
- Ảnh "quá đúng ý": đúng góc, đúng ánh sáng, đúng thời tiết mà báo cáo mô tả.

## E. Điểm nhạy cảm riêng của dự án

- **Nội dung thời Đệ nhất Cộng hòa (1959–1961).** Mô tả sự kiện lịch sử, không ca ngợi cũng không lên
  án chế độ. Từ chối những đoạn văn biến tư liệu thành lập luận chính trị.
- **Sự kiện hiện ra.** Viết như niềm tin được cộng đồng lưu truyền (`oralTradition`), kể cả khi được
  giáo quyền công nhận. Việc giáo quyền công nhận là sự kiện lịch sử và thuộc `historicalFact`; bản
  thân sự kiện hiện ra thì không.
- **Chủ quyền biển đảo.** Nếu thay đổi động tới bản đồ, kiểm nhãn Hoàng Sa / Trường Sa còn nguyên.
- **Giả thuyết chòm sao Bắc Đẩu.** Đây là giả thuyết dân gian mà dự án khảo cứu, không phải sự thật
  đã chứng minh. Không để báo cáo trình bày nó như sự kiện lịch sử.
