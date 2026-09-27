# Nhật ký quy trình tự động: Đức Mẹ Hòn Chông (Kiên Giang)

**Kết quả cuối cùng:** Hoàn thành — nội dung đã lên nhánh / Pull Request

- Mã linh địa: `honchong`
- Bắt đầu: 2026-09-24 14:50 · Kết thúc: 2026-09-24 15:53 · Tổng: 63 phút
- Số vòng khảo cứu đã chạy: 2 / tối đa 2
- Số lần sửa lược đồ: 0 / tối đa 2
- Tạo Pull Request: có
- Nhánh: `claude/duc-me-hon-chong-pipeline-cmhjpd`
- Pull Request: https://github.com/nnmduc/ducme.vn/pull/20
- Ghi chú: Anh chinh 800px theo ngoai le tam thoi cua chu du an

## 1. Các bước đã chạy

| Thời điểm | Bước | Chế độ | Vòng | Kết quả | Ghi chú |
|---|---|---|---|---|---|
| 2026-09-24 15:15 | Khảo cứu | làm mới từ đầu | 1 | xong | Vong 1 cap nhat: 20 nguon (13 A/B), 4 truyen tung, 3 anh de xuat (thap chuong/phe tich, chua co anh tuong >=1000px) |
| 2026-09-24 15:30 | Kiểm chứng | làm mới từ đầu | 1 | xong | AP_DUNG_CO_DIEU_KIEN 32/40, 8 dieu kien; anh chinh la thap chuong vi chua co anh tuong >=1000px |
| 2026-09-24 15:30 | Lưu trữ hồ sơ cũ | — | 1 | xong | kiem-chung.json -> kiem-chung.vong1.json, bao-cao-kiem-chung.md -> bao-cao-kiem-chung.vong1.md, bao-cao-kiem-chung.html -> bao-cao-kiem-chung.vong1.html |
| 2026-09-24 15:36 | Khảo cứu | bổ sung theo yêu cầu của kiểm chứng | 2 | xong | Bo sung theo quyet dinh nguoi dung (noi nguong anh 800px): anh chinh la tuong Duc Me 800x600 (gplongxuyen.net qua melavang.info); ap dung 6/8 dieu kien vong 1, 2 dieu kien anh thay theo quyet dinh moi |
| 2026-09-24 15:47 | Kiểm chứng | làm mới từ đầu | 2 | xong | Vong 2: AP_DUNG_CO_DIEU_KIEN 35/40, duyet 4 anh (anh chinh tuong 800px theo nguong noi tam thoi), 2 sua cau chu |
| 2026-09-24 15:53 | Triển khai | — | 2 | xong | Commit 8a71491, npm test 473 PASS, build OK, PR #20 |


## 2. Các điểm rẽ nhánh

Mỗi dòng là một quyết định đã thực sự được thi hành: bộ điều phối đọc trạng thái trên đĩa, chọn bước
kế tiếp, và bước đó đã chạy xong. Quyết định chưa thi hành không nằm ở đây.

| Thời điểm | Chọn bước | Chế độ | Kết luận kiểm chứng | Lý do |
|---|---|---|---|---|
| 2026-09-24 14:50 | Khảo cứu | làm mới từ đầu | — | Chưa có docs/khao-cuu/<id>/khao-cuu.json — khảo cứu từ đầu |
| 2026-09-24 15:15 | Kiểm chứng | làm mới từ đầu | — | Đã có hồ sơ khảo cứu hợp lệ, chưa có hồ sơ kiểm chứng |
| 2026-09-24 15:36 | Kiểm chứng | làm mới từ đầu | — | Đã có hồ sơ khảo cứu hợp lệ, chưa có hồ sơ kiểm chứng |
| 2026-09-24 15:47 | Triển khai | — | ÁP DỤNG CÓ ĐIỀU KIỆN | Kết luận kiểm chứng: ÁP DỤNG CÓ ĐIỀU KIỆN |
| 2026-09-24 15:53 | Kết thúc | — | ÁP DỤNG CÓ ĐIỀU KIỆN | Đã triển khai xong |


## 3. Hồ sơ sinh ra

| Tệp | Nội dung | Tồn tại |
|---|---|---|
| khao-cuu.json | hồ sơ khảo cứu (bản gốc) | có |
| bao-cao-khao-cuu.md | báo cáo khảo cứu | có |
| kiem-chung.json | hồ sơ kiểm chứng (bản gốc) | có |
| bao-cao-kiem-chung.md | báo cáo kiểm chứng | có |
| phieu-thi-cong.md | phiếu thi công cho triển khai | không |
| quy-trinh.json | trạng thái lượt chạy (bản gốc của trang này) | có |
| bao-cao-kiem-chung.vong1.html | hồ sơ kiểm chứng của vòng trước (lưu trữ) | có |
| bao-cao-kiem-chung.vong1.md | hồ sơ kiểm chứng của vòng trước (lưu trữ) | có |
| kiem-chung.vong1.json | hồ sơ kiểm chứng của vòng trước (lưu trữ) | có |


## 4. Tóm tắt khảo cứu

- Nguồn thu được: 20 · đưa vào dữ liệu: 6
- Chuyện kể ghi nhận: 3
- Ảnh đề xuất: 4 · ảnh ứng viên đã gom: 19
- Điểm chưa rõ (`unknowns`): 9 · mâu thuẫn nguồn: 6
- Hồ sơ đúng lược đồ: có
- Rủi ro lớn nhất người khảo cứu tự nêu: Ảnh: ảnh chính là ảnh tượng 800x600 (2012) — dưới chuẩn 1000px của dự án, chỉ đạt nhờ quyết định nới ngưỡng xuống 800px của người dùng, là ngoại lệ tạm thời riêng cho honchong; tác giả ảnh không được ghi (chỉ biết nguồn gplongxuyen.net qua bản đăng lại trên melavang.info), chưa tìm được bài gốc hay bản lớn hơn vì web.archive.org không vào được. Ảnh có đoàn linh mục đồng tế đứng trước tượng (nhân vật công khai trong nghi lễ, không phải trẻ em). Ba ảnh phụ là ảnh Flickr "All rights reserved" — hợp quy chuẩn dự án (không đòi CC). Nội dung: đã áp dụng các điều kiện câu chữ của kiểm chứng vòng 1 (historicalFact 3 chỗ, oralTradition bỏ câu S19); chuyện Khmer Đỏ 1978 vẫn chỉ ở oralTradition với nhãn, viết trung tính. S2 là bản chép lại trên trang cá nhân violet.vn của lược sử giáo phận. Điều kiện 6–7 của vòng 1 (tháp chuông làm realImage) đã được thay theo quyết định ảnh mới của người dùng nên người kiểm chứng cần duyệt lại phần ảnh.

## 5. Tóm tắt kiểm chứng

- Kết luận: **ÁP DỤNG CÓ ĐIỀU KIỆN** — 35/40 điểm
- Trường được duyệt: 14 · nguồn được duyệt: 6 · ảnh được duyệt: 4
- Vấn đề mức chặn: 0 · tổng số vấn đề ghi nhận: 5
- Hồ sơ đúng lược đồ: có

**Điều kiện bắt buộc khi triển khai:**

- realImageCaption: không dùng giá trị đề xuất trong hồ sơ khảo cứu; thay bằng đúng chuỗi sau: 'Tượng Đức Mẹ Nữ Vương Hòa Bình Hòn Chông và đoàn linh mục đồng tế, Giáo xứ Hòn Chông, Giáo phận Long Xuyên; ảnh đi kèm bài tin về thánh lễ hành hương ngày 01/01/2012 (Nguồn: trang Mẹ La Vang, melavang.info/hanh-huong-duc-me-hon-chong, bài ghi nguồn gplongxuyen.net; không rõ tác giả)'. Lý do: trang S4 không ghi ngày chụp hay nguồn riêng của ảnh, và tên trang là 'Mẹ La Vang', không phải 'Kỷ yếu Mẹ La Vang'.
- architect: thay cụm '(theo ảnh đại lễ 01/01/2012 trên Kỷ yếu Mẹ La Vang)' bằng '(theo ảnh đi kèm bài tin đại lễ 01/01/2012 trên trang Mẹ La Vang, melavang.info)'. Phần còn lại của architect giữ nguyên văn như hồ sơ khảo cứu.
- realImage: chép docs/khao-cuu/honchong/anh/honchong-ungvien-dai-me-2012-800px.jpg thành assets/real_photos/honchong.jpg (ảnh 800x600, dùng theo ngoại lệ 800px tạm thời của chủ dự án, chỉ cho honchong).
- galleryImages: dùng đúng 3 phần tử và đúng thứ tự, đúng caption như giá trị đề xuất trong hồ sơ khảo cứu: honchong-2.jpg chép từ honchong-thap-chuong-2015.jpg; honchong-3.jpg chép từ honchong-phe-tich-toan-canh-2010.jpg; honchong-4.jpg chép từ honchong-phe-tich-tu-thap-chuong-2010.jpg.
- Các trường title, year, lat, lng, elevation, location, historicalFact, oralTradition, significance, sources dùng đúng giá trị trong hồ sơ khảo cứu; không đổi id, name, region, diocese, diemStatue5, constellationRole. Không đưa S19 hay ý 'Đức Mẹ che chở người đi biển' vào bất kỳ trường nào.

## 6. Việc còn lại cho người đọc

Không còn việc bắt buộc. Người duyệt Pull Request vẫn nên đọc báo cáo kiểm chứng trước khi merge —
bộ điều phối không bao giờ tự merge.

---

_Trang này sinh tự động từ `quy-trinh.json`. Đừng sửa tay — sửa JSON rồi chạy lại `format-run.mjs`._
