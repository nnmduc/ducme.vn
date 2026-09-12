# Tiêu chí kiểm chứng

Đọc trước khi chấm: dự án này **phi lợi nhuận, phục vụ khảo cứu và học tập**. Vai trò kiểm chứng
không phải chặn cho bằng được, mà là **đảm bảo mỗi thứ nằm đúng ngăn của nó**. Một chuyện kể dân gian
gắn nhãn "tương truyền" là nội dung hợp lệ và đáng giá, không phải lỗi cần sửa. Cái phải chặn là
**nhầm ngăn**: truyền tụng đội lốt sử liệu, ảnh AI đội lốt ảnh thực địa, suy diễn đội lốt nguồn.

## A. Tám trục chấm điểm

Mỗi trục 0–5, tổng 40. Kèm bằng chứng cho mỗi điểm số — điểm không có lý do là điểm vô nghĩa.

| # | Trục | 0 | 3 | 5 |
|---|---|---|---|---|
| 1 | **Chất lượng nguồn** | Không nguồn nào mở được | Đủ 2 nguồn mở được, chủ yếu cấp C | Có nguồn cấp A, hoặc nhiều nguồn cấp B độc lập |
| 2 | **Truy vết luận điểm** | Nội dung không truy được về nguồn nào | Phần lớn truy được, vài câu trôi nổi | Mọi khẳng định gắn nguồn cụ thể và nguồn thật sự chứa nội dung đó |
| 3 | **Độ chính xác dữ liệu** | Sai vùng miền/toạ độ/niên đại | Có sai lệch nhỏ đã nêu | Mọi trường khớp nguồn, toạ độ đối chiếu được |
| 4 | **Hình ảnh** | Ảnh AI, hoặc ảnh sai chủ thể | Không đề xuất ảnh nhưng có ghi kho ứng viên và đã tìm qua nhiều nguồn | Ảnh thật, nguồn mở được, đúng linh địa, có cả ảnh phụ — giấy phép cụ thể không tính |
| 5 | **Phân định sự thật / truyền tụng** | Trộn lẫn, khẳng định siêu nhiên như lịch sử | Có phân định nhưng vài chỗ lẫn hoặc thiếu nhãn | Ranh giới rõ, mỗi ý truyền tụng đều có nhãn, dùng đúng trường |
| 6 | **Giọng văn & tính trung lập** | Tuyên truyền, thiên kiến chính trị/tôn giáo | Tạm ổn, vài câu cảm tính | Trung lập, kính trọng, mô tả niềm tin như niềm tin |
| 7 | **Tính kỹ thuật** | `validate-record.mjs` lỗi chặn | Đạt nhưng nhiều cảnh báo | Đạt, cảnh báo đã giải trình |
| 8 | **Sức hấp dẫn & chiều sâu tư liệu** | Vài dòng khô khốc, không chuyện kể, không ảnh ứng viên, không manh mối | Có nội dung dùng được nhưng mỏng, mới quét 1–2 nhóm nguồn | Quét rộng nhiều nhóm nguồn, thu được chuyện kể có chi tiết sống, kho ảnh ứng viên và manh mối để lượt sau nối tiếp |

Trục 8 là trục mới và có chủ ý: một hồ sơ "sạch" nhưng nhạt — hai nguồn, ba câu, không chuyện kể —
không phải hồ sơ tốt. Người đọc tìm đến trang này vì chuyện, và tư liệu truyền tụng có gắn nhãn là
đóng góp thật, không phải phần phụ.

Quy đổi tham khảo (tiêu chí chặn ở mục B luôn thắng):

- **≥ 28/40 và không chạm tiêu chí chặn** → ÁP DỤNG
- **20–27** → ÁP DỤNG CÓ ĐIỀU KIỆN, liệt kê rõ điều kiện
- **13–19** → TRẢ LẠI KHẢO CỨU
- **< 13, hoặc có nguồn bịa / ảnh AI** → TỪ CHỐI

## B. Tiêu chí chặn — chạm một cái là không thể kết luận ÁP DỤNG

Danh sách này đã được rút gọn có chủ ý. Những gì không nằm ở đây thì không chặn — cùng lắm là một
điều kiện phải sửa, hoặc một dòng ghi nhận.

1. **Dưới 2 nguồn mở được**, hoặc toàn bộ nguồn chỉ là link tìm kiếm. (Nguồn cấp C tính là nguồn hợp
   lệ; cấp D thì không tính vào 2 nguồn này.)
2. **Nguồn được dẫn nhưng mở ra không hề chứa luận điểm được gán cho nó.** Đây vẫn là lỗi nặng nhất
   của cả quy trình — nặng hơn link chết.
3. **Ảnh có dấu hiệu do máy tạo sinh**, hoặc **ảnh không đúng linh địa đang xét**.
4. **Toạ độ ngoài lãnh thổ Việt Nam**, hoặc lệch hơn 500m so với vị trí đối chiếu được.
5. **`validate-record.mjs` còn lỗi chặn** (nghĩa là `npm test` sẽ đỏ).
6. **Chuyện kể hoặc sự kiện siêu nhiên được viết trong `historicalFact`**, hoặc viết trong
   `oralTradition` mà không có nhãn truyền tụng.
7. **Đề xuất sửa `CONSTELLATION_VERSIONS`** mà không có lập luận lịch sử riêng.
8. **Trùng lặp với một bản ghi đã có** mà báo cáo không nhận ra.

### Những gì KHÔNG còn chặn

Ghi rõ ra đây vì đây là chỗ trước kia hay bị siết quá tay:

- Ảnh không xác định được giấy phép Creative Commons cụ thể → **không chặn**. Nguồn mở được + caption
  ghi rõ nguồn là đủ.
- Ảnh không rõ tên tác giả cá nhân → **không chặn**. Ghi tên trang, hoặc "Không rõ tác giả".
- Nguồn là blog, trang du lịch, diễn đàn (cấp C) → **không chặn**, dẫn được, kể cả đưa vào trường
  `sources` của dữ liệu.
- Chuyện kể không có nguồn chính thống xác nhận → **không chặn**. `veracity: "chuakiemchung"` + nhãn
  truyền tụng là đủ để đăng.
- Không tìm được ảnh nào → **không chặn**, `realImage: null` là trạng thái hợp lệ.
- Nội dung nghe ly kỳ, khó tin → **không chặn**, miễn nằm đúng ngăn và có nhãn.

Chạm tiêu chí 3 ở **riêng một ảnh** không chặn cả hồ sơ: loại đúng ảnh đó, giữ các ảnh khác. Chạm ở
**toàn bộ ảnh** thì vẫn ÁP DỤNG CÓ ĐIỀU KIỆN cho phần văn bản: duyệt văn bản, loại hết ảnh, giữ
`realImage: null` và `galleryImages: []`.

## C. Bảng đối chiếu luận điểm (phải làm bằng tay)

Lập bảng cho mọi khẳng định trong `historicalFact` và các trường dữ liệu chính:

| # | Luận điểm | Nguồn được gán | Đã mở? | Nguồn có chứa? | Kết luận |
|---|---|---|---|---|---|
| 1 | "Tượng đúc năm 1959" | [S1] | ✓ | ✓ đúng nguyên văn | Đạt |
| 2 | "Cao 3m" | [S2] | ✓ | ✗ nguồn ghi "khoảng 3m" | Sửa câu chữ |
| 3 | "Tượng đứng nguyên sau bão 1972" | [S4] [S5] | ✓ | ✓ nhưng chỉ là lời kể | Chuyển sang truyền tụng |
| 4 | "Do KTS X thiết kế" | [S3] | ✓ | ✗ không nhắc tới | Bỏ |

Bốn mức kết quả (`result` trong `claimChecks[]`):

- **`dat`** — nguồn chứa đúng, giữ nguyên.
- **`sua`** — nguồn có nhưng khác câu chữ hoặc con số, sửa cho khớp.
- **`chuyentruyentung`** — không kiểm chứng được như sự thật lịch sử, **nhưng không bỏ**: chuyển sang
  `oralTradition` / `folklore` kèm nhãn. Đây là mức dùng nhiều nhất cho phần chuyện kể, và là lý do
  danh mục này không còn mức "tạm chấp nhận" mơ hồ.
- **`bo`** — không nguồn nào chống lưng, kể cả ở mức truyền tụng. Bỏ hẳn.

Mặc định khi phân vân giữa `bo` và `chuyentruyentung`: chọn `chuyentruyentung`. Chỉ dùng `bo` khi
không ai kể chuyện đó cả, hoặc có nguồn bác bỏ trực tiếp.

## D. Kiểm chuyện kể (`folkloreChecks[]`)

Chuyện kể **không** bị chấm theo chuẩn sự thật lịch sử. Chỉ kiểm ba điều:

1. **Có nguồn đọc lại được không** — nguồn cấp C, D đều được, chỉ cần trang còn mở.
2. **Có bị nguồn cấp A/B nào bác bỏ không** — nếu có thì `veracity: "dabacbo"` và `result: "loai"`.
3. **Có gắn nhãn truyền tụng không** — `labelled`. Thiếu nhãn thì không được duyệt, nhưng đây là lỗi
   sửa một câu là xong, ghi vào `conditions[]` chứ không trả lại cả hồ sơ.

Không kiểm: chuyện có thật không, có hợp lý không, có trùng mô-típ với nơi khác không. Trùng mô-típ
là hiện tượng dân gian bình thường, thậm chí đáng ghi nhận.

## E. Dấu hiệu ảnh do máy tạo sinh

Không dấu hiệu nào tự nó là bằng chứng, nhưng nhiều dấu hiệu cùng lúc thì loại:

- Metadata chứa tên công cụ tạo sinh, hoặc có C2PA/Content Credentials (`check-image.mjs` bắt).
- Chữ trên bảng hiệu, bia đá nhoè thành ký tự vô nghĩa hoặc sai chính tả tiếng Việt kỳ lạ.
- Chi tiết kiến trúc không nhất quán: bậc thang lệch nhịp, cột không thẳng hàng, mái chồng lấn vô lý.
- Bàn tay, ngón tay, nếp áo tượng biến dạng.
- Ánh sáng quá hoàn hảo, không nhiễu cảm biến, nền mờ kiểu ống kính không tồn tại.
- Không tìm được ảnh này ở bất kỳ nguồn nào khác trước thời điểm được đăng.
- Ảnh "quá đúng ý": đúng góc, đúng ánh sáng, đúng thời tiết mà báo cáo mô tả.

Ảnh cũ, mờ, chụp lệch, chất lượng thấp **không** phải dấu hiệu AI — thường là dấu hiệu ngược lại.

## F. Điểm nhạy cảm riêng của dự án

- **Nội dung thời Đệ nhất Cộng hòa (1959–1961).** Mô tả sự kiện lịch sử, không ca ngợi cũng không lên
  án chế độ. Từ chối những đoạn biến tư liệu thành lập luận chính trị.
- **Sự kiện hiện ra.** Viết như niềm tin được cộng đồng lưu truyền (`oralTradition`), kể cả khi được
  giáo quyền công nhận. Việc *giáo quyền công nhận* là sự kiện lịch sử và thuộc `historicalFact`;
  bản thân sự kiện hiện ra thì không.
- **Chuyện kể đụng người còn sống.** Giai thoại nêu đích danh người còn sống kèm cáo buộc, tranh chấp
  đất đai, hay mâu thuẫn nội bộ — loại, bất kể nguồn. Đây là vấn đề tôn trọng con người, không phải
  vấn đề kiểm chứng.
- **Chủ quyền biển đảo.** Nếu thay đổi động tới bản đồ, kiểm nhãn Hoàng Sa / Trường Sa còn nguyên.
- **Giả thuyết chòm sao Bắc Đẩu.** Đây là giả thuyết dân gian mà dự án khảo cứu, không phải sự thật
  đã chứng minh. Không để báo cáo trình bày nó như sự kiện lịch sử.
