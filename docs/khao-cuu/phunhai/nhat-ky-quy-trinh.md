# Nhật ký quy trình tự động: Vương Cung Thánh Đường Phú Nhai

**Kết quả cuối cùng:** Đang chạy

- Mã linh địa: `phunhai`
- Bắt đầu: 2026-09-24 06:42 · Kết thúc: — · Tổng: 20 phút
- Số vòng khảo cứu đã chạy: 1 / tối đa 2
- Số lần sửa lược đồ: 0 / tối đa 2
- Tạo Pull Request: có

## 1. Các bước đã chạy

| Thời điểm | Bước | Chế độ | Vòng | Kết quả | Ghi chú |
|---|---|---|---|---|---|
| 2026-09-24 06:53 | Khảo cứu | làm mới từ đầu | 1 | xong | 16 nguon, 4 chuyen ke, 3 anh de xuat; sua toa do, ngay phong, title |
| 2026-09-24 07:02 | Kiểm chứng | làm mới từ đầu | 1 | xong | AP_DUNG_CO_DIEU_KIEN 33/40; 2 loi trich nguon phai sua |


## 2. Các điểm rẽ nhánh

Mỗi dòng là một quyết định đã thực sự được thi hành: bộ điều phối đọc trạng thái trên đĩa, chọn bước
kế tiếp, và bước đó đã chạy xong. Quyết định chưa thi hành không nằm ở đây.

| Thời điểm | Chọn bước | Chế độ | Kết luận kiểm chứng | Lý do |
|---|---|---|---|---|
| 2026-09-24 06:42 | Khảo cứu | làm mới từ đầu | — | Chưa có docs/khao-cuu/<id>/khao-cuu.json — khảo cứu từ đầu |
| 2026-09-24 06:53 | Kiểm chứng | làm mới từ đầu | — | Đã có hồ sơ khảo cứu hợp lệ, chưa có hồ sơ kiểm chứng |


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

- Nguồn thu được: 16 · đưa vào dữ liệu: 4
- Chuyện kể ghi nhận: 4
- Ảnh đề xuất: 3 · ảnh ứng viên đã gom: 12
- Điểm chưa rõ (`unknowns`): 6 · mâu thuẫn nguồn: 9
- Hồ sơ đúng lược đồ: có · 1 cảnh báo
- Rủi ro lớn nhất người khảo cứu tự nêu: Nhiều nguồn chép chuyền nhau (hddmvn chép gpbuichu; trang xã, VOV5 có thể chép Wikipedia) nên số nguồn độc lập ít hơn vẻ ngoài. Giai đoạn chiếm đóng 1949-1953 chỉ dựa Wikipedia (dẫn sách lịch sử Đảng bộ xã) — đã viết trung tính, nhưng người kiểm chứng cân nhắc có giữ trong historicalFact không. Câu 'Tiểu Vương cung đầu tiên ở miền Bắc' trong significance chỉ dựa nguồn C chưa đọc toàn văn. Các trang du lịch không mở được nên phần chuyện kể còn mỏng. Về cảnh báo tự kiểm: (1) 'lat chỉ có 1 chữ số thập phân' là do 20.3000 được JSON viết gọn thành 20.3 — giá trị thật đo được là 20.30002 (OSM) / 20.299946 (Wikipedia), đã đủ độ chính xác 4 chữ số; (2) trường elevation chưa có claims vì không tìm được nguồn nào cho con số 10m — đã ghi ở unknowns.

## 5. Tóm tắt kiểm chứng

- Kết luận: **ÁP DỤNG CÓ ĐIỀU KIỆN** — 33/40 điểm
- Trường được duyệt: 11 · nguồn được duyệt: 4 · ảnh được duyệt: 3
- Vấn đề mức chặn: 1 · tổng số vấn đề ghi nhận: 7
- Hồ sơ đúng lược đồ: có

**Điều kiện bắt buộc khi triển khai:**

- Trong historicalFact, thay nguyên cụm 'nhưng bị trận bão năm 1929 quật đổ cùng 48 nhà thờ khác trong giáo phận.' bằng 'nhưng bị trận bão năm 1929 quật đổ; trận bão ấy làm đổ 48 nhà thờ trong giáo phận, trong đó có đền thánh Phú Nhai.' (theo nguyên văn S2). Phần còn lại của historicalFact giữ đúng giá trị đề xuất trong khao-cuu.json.
- Trong significance, thay nguyên cụm 'Đức Mẹ Vô Nhiễm Nguyên Tội, bổn mạng giáo phận, và là Tiểu Vương cung Thánh đường đầu tiên ở miền Bắc.' bằng 'Đức Mẹ Vô Nhiễm Nguyên Tội, bổn mạng giáo phận.' Phần còn lại của significance giữ đúng giá trị đề xuất.
- Các trường architect, oralTradition, title, location, lat (20.3), lng (106.3632), sources dùng đúng giá trị đề xuất trong khao-cuu.json, không sửa thêm.
- Trường sources của dữ liệu gồm đúng bốn nguồn S1, S2, S4, S5 như giá trị đề xuất; không đưa S13, S14, S15, S16 vào.
- Dùng File:Vương cung thánh đường Phú Nhai.JPG (bản tải sẵn docs/khao-cuu/phunhai/anh/phunhai-mat-tien.jpg) làm realImage, realImageCaption đúng caption đề xuất trong images[0].
- Dùng File:Nội thất vương cung thánh đường Phú Nhai.JPG (anh/phunhai-3-noi-that.jpg) và File:Lăng hài cốt tử đạo Phú Nhai.JPG (anh/phunhai-2-lang-tu-dao.jpg) làm galleryImages, đúng caption đề xuất trong images[1] và images[2].
- Không sửa year, elevation, region, diocese, diemStatue5, constellationRole và CONSTELLATION_VERSIONS.

**Vấn đề mức chặn:**

- Vế 'và là Tiểu Vương cung Thánh đường đầu tiên ở miền Bắc' chỉ dẫn S15, S15 mở ra không có câu này (tiêu chí B2) (significance, câu 1) — cần: Bỏ vế này (conditions[1]). Khảo cứu có thể bổ sung lại ở lượt sau nếu tìm được nguồn nêu thẳng.

## 6. Việc còn lại cho người đọc

Lượt chạy chưa kết thúc.

---

_Trang này sinh tự động từ `quy-trinh.json`. Đừng sửa tay — sửa JSON rồi chạy lại `format-run.mjs`._
