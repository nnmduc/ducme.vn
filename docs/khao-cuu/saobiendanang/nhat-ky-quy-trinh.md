# Nhật ký quy trình tự động: Đức Mẹ Sao Biển (Đà Nẵng)

**Kết quả cuối cùng:** Hoàn thành — nội dung đã lên nhánh / Pull Request

- Mã linh địa: `saobiendanang`
- Bắt đầu: 2026-09-24 15:10 · Kết thúc: 2026-09-24 15:43 · Tổng: 33 phút
- Số vòng khảo cứu đã chạy: 1 / tối đa 2
- Số lần sửa lược đồ: 0 / tối đa 2
- Tạo Pull Request: có
- Nhánh: `claude/full-pipeline-duc-me-sao-bien-e069ft`
- Pull Request: https://github.com/nnmduc/ducme.vn/pull/19

## 1. Các bước đã chạy

| Thời điểm | Bước | Chế độ | Vòng | Kết quả | Ghi chú |
|---|---|---|---|---|---|
| 2026-09-24 15:25 | Khảo cứu | làm mới từ đầu | 1 | xong | DONE_WITH_CONCERNS: 16 nguon (7 vao ban ghi), 7 chuyen ke, 4 anh de xuat; lich su dua chu yeu vao GSR 2015 |
| 2026-09-24 15:35 | Kiểm chứng | làm mới từ đầu | 1 | xong | AP_DUNG_CO_DIEU_KIEN 34/40, 7 dieu kien; 4 anh duyet |
| 2026-09-24 15:41 | Triển khai | — | 1 | xong | Commit 7f0b6c1: 482 PASS, build 23 trang; 7 dieu kien da lam; 4 anh (<1000px, da duoc kiem chung chap nhan) |


## 2. Các điểm rẽ nhánh

Mỗi dòng là một quyết định đã thực sự được thi hành: bộ điều phối đọc trạng thái trên đĩa, chọn bước
kế tiếp, và bước đó đã chạy xong. Quyết định chưa thi hành không nằm ở đây.

| Thời điểm | Chọn bước | Chế độ | Kết luận kiểm chứng | Lý do |
|---|---|---|---|---|
| 2026-09-24 15:10 | Khảo cứu | làm mới từ đầu | — | Chưa có docs/khao-cuu/<id>/khao-cuu.json — khảo cứu từ đầu |
| 2026-09-24 15:25 | Kiểm chứng | làm mới từ đầu | — | Đã có hồ sơ khảo cứu hợp lệ, chưa có hồ sơ kiểm chứng |
| 2026-09-24 15:35 | Triển khai | — | ÁP DỤNG CÓ ĐIỀU KIỆN | Kết luận kiểm chứng: ÁP DỤNG CÓ ĐIỀU KIỆN |


## 3. Hồ sơ sinh ra

| Tệp | Nội dung | Tồn tại |
|---|---|---|
| khao-cuu.json | hồ sơ khảo cứu (bản gốc) | có |
| bao-cao-khao-cuu.md | báo cáo khảo cứu | có |
| kiem-chung.json | hồ sơ kiểm chứng (bản gốc) | có |
| bao-cao-kiem-chung.md | báo cáo kiểm chứng | có |
| phieu-thi-cong.md | phiếu thi công cho triển khai | không |
| quy-trinh.json | trạng thái lượt chạy (bản gốc của trang này) | có |


## 4. Tóm tắt khảo cứu

- Nguồn thu được: 16 · đưa vào dữ liệu: 7
- Chuyện kể ghi nhận: 7
- Ảnh đề xuất: 4 · ảnh ứng viên đã gom: 10
- Điểm chưa rõ (`unknowns`): 8 · mâu thuẫn nguồn: 4
- Hồ sơ đúng lược đồ: có · 2 cảnh báo
- Rủi ro lớn nhất người khảo cứu tự nêu: Phần lịch sử dựa chủ yếu vào một phóng sự cấp B (GSR 2015) thuật lại lời một nữ tu — cả năm 1974, mốc 2008, 2014 lẫn các chi tiết tranh chấp đều từ một người kể; chưa có nguồn cấp A hay trang giáo phận. Tranh chấp đất đai và vụ phá hoại là nội dung nhạy cảm, được nhắc theo quyết định của chủ dự án với câu từ chối trách nhiệm đặt ngay trong historicalFact; vụ phá hoại chỉ có nguồn cấp C nên validator có thể cảnh báo. Ảnh chính lấy từ trang của một cơ sở bán tượng, có watermark đè lên ảnh. Hai cảnh báo còn lại của format-report (claim rước thứ Bảy đầu tháng và claim vụ phá hoại) là do chỉ có nguồn cấp C: cả hai đã được viết dạng quy về nguồn (“một số trang hành hương mô tả…”, “Theo trang tin CGvST…”) thay vì khẳng định trơn; nếu kiểm chứng không chấp nhận thì chuyển câu rước sang significance và bỏ/giữ câu phá hoại tuỳ quyết định của chủ dự án.

## 5. Tóm tắt kiểm chứng

- Kết luận: **ÁP DỤNG CÓ ĐIỀU KIỆN** — 34/40 điểm
- Trường được duyệt: 13 · nguồn được duyệt: 7 · ảnh được duyệt: 4
- Vấn đề mức chặn: 0 · tổng số vấn đề ghi nhận: 8
- Hồ sơ đúng lược đồ: có

**Điều kiện bắt buộc khi triển khai:**

- Trong constellationRole.v4 của bản ghi saobiendanang, đổi star từ “Chính danh Stella Maris Miền Trung” thành “Stella Maris Miền Trung”; giữ nguyên role “Bảo hộ Duyên hải”, code “NAT-14”, v1/v2/v3 = null; không sửa CONSTELLATION_VERSIONS.
- Trong historicalFact, xoá đoạn “; một số trang hành hương mô tả thêm rằng vào sáng thứ Bảy đầu tháng, sau Thánh lễ tại nguyện đường cộng đoàn Dòng Phaolô, Đức Giám mục cùng các nữ tu và giáo dân rước ra viếng tượng” sao cho câu kết thúc bằng “...chủ sự giờ cầu nguyện hằng tháng trước tượng.”; rồi thêm vào cuối significance đúng câu: “Một số trang hành hương mô tả thêm rằng vào sáng thứ Bảy đầu tháng, sau Thánh lễ tại nguyện đường cộng đoàn Dòng Phaolô, Đức Giám mục cùng các nữ tu và giáo dân rước ra viếng tượng.”
- Trong architect, sửa “Theo bài viết năm 2007, khi ấy tượng đặt trên kệ đá sơ sài dưới một mái tôn dựng trên bốn cột sắt, sát rừng phi lao ven biển.” thành “Theo bài viết năm 2007, khi ấy tượng đặt trên bệ đá dưới một mái tôn tuềnh toàng dựng trên bốn cột sắt, sát rừng phi lao ven biển.” theo nguyên văn [S3].
- Trong oralTradition, sửa “và kể về một thanh niên sáng mưa nào cũng mang hoa đến, chỉ nói mình đã được ơn và xin giữ ơn ấy trong lòng.” thành “và kể về một thanh niên mang hoa đến trong một buổi sáng mưa, chỉ nói mình đã được ơn, xin giữ ơn ấy trong lòng và từ đó ngày nào cũng đến tạ ơn.” theo nguyên văn [S3].
- Trong sources của bản ghi, đổi tier của mục “Viếng thăm và tạ ơn Đức Mẹ Sao Biển, Đà Nẵng — Minh Nguyên, Radio Veritas Asia (01/05/2007)” (https://vntaiwan.catholic.org.tw/07news/7news275.htm) từ “B” thành “C”; các mục nguồn khác giữ nguyên như record đề xuất.
- Dùng duc-me-sao-bien-da-nang-b1.jpg (bản tải về: docs/khao-cuu/saobiendanang/anh/tcg2023-b1.jpg) làm realImage với đúng caption đề xuất trong images[]; dùng mesaobien3.jpg (anh/veritas2007-3.jpg), mesaobien2.jpg (anh/veritas2007-2.jpg), sb5_n.jpg (anh/ymag2021-sb5.jpg) làm galleryImages theo thứ tự này, đúng caption đề xuất. Không cần bổ sung giấy phép.
- Giữ nguyên hai đoạn tranh chấp đất đai và vụ phá hoại 26/12/2024 trong historicalFact đúng như record đề xuất, kể cả hai câu “ducme.vn chỉ thuật lại theo nguồn đã dẫn, không xác minh độc lập và không đưa ra nhận định...”; không thêm tên người, không chuyển thành khẳng định trơn. Không đưa chuyện “Điều kỳ diệu” khiến thành phố đổi ý định dùng khu đất lên website dưới bất kỳ trường nào.

## 6. Việc còn lại cho người đọc

Không còn việc bắt buộc. Người duyệt Pull Request vẫn nên đọc báo cáo kiểm chứng trước khi merge —
bộ điều phối không bao giờ tự merge.

---

_Trang này sinh tự động từ `quy-trinh.json`. Đừng sửa tay — sửa JSON rồi chạy lại `format-run.mjs`._
