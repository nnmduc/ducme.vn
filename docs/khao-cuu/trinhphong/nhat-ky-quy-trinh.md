# Nhật ký quy trình tự động: Đức Mẹ Trinh Phong

**Kết quả cuối cùng:** Đang chạy

- Mã linh địa: `trinhphong`
- Bắt đầu: 2026-09-27 02:52 · Kết thúc: — · Tổng: 33 phút
- Số vòng khảo cứu đã chạy: 1 / tối đa 2
- Số lần sửa lược đồ: 0 / tối đa 2
- Tạo Pull Request: có

## 1. Các bước đã chạy

| Thời điểm | Bước | Chế độ | Vòng | Kết quả | Ghi chú |
|---|---|---|---|---|---|
| 2026-09-27 03:12 | Khảo cứu | làm mới từ đầu | 1 | xong | 17 nguon (5 A/B), 3 chuyen ke, 1 anh de xuat; van xuoi 780 tu; toa do va nguon goc anh can kiem |
| 2026-09-27 03:25 | Kiểm chứng | làm mới từ đầu | 1 | xong | AP_DUNG_CO_DIEU_KIEN 33/40; 5 dieu kien; toa do chua doi chieu duoc, khong duyet lat/lng |


## 2. Các điểm rẽ nhánh

Mỗi dòng là một quyết định đã thực sự được thi hành: bộ điều phối đọc trạng thái trên đĩa, chọn bước
kế tiếp, và bước đó đã chạy xong. Quyết định chưa thi hành không nằm ở đây.

| Thời điểm | Chọn bước | Chế độ | Kết luận kiểm chứng | Lý do |
|---|---|---|---|---|
| 2026-09-27 02:52 | Khảo cứu | làm mới từ đầu | — | Chưa có docs/khao-cuu/<id>/khao-cuu.json — khảo cứu từ đầu |
| 2026-09-27 03:12 | Kiểm chứng | làm mới từ đầu | — | Đã có hồ sơ khảo cứu hợp lệ, chưa có hồ sơ kiểm chứng |


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

- Nguồn thu được: 17 · đưa vào dữ liệu: 4
- Chuyện kể ghi nhận: 3
- Ảnh đề xuất: 1 · ảnh ứng viên đã gom: 10
- Điểm chưa rõ (`unknowns`): 10 · mâu thuẫn nguồn: 5
- Hồ sơ đúng lược đồ: có
- Rủi ro lớn nhất người khảo cứu tự nêu: Toạ độ bản ghi chưa được xác nhận và có dấu hiệu lệch khỏi vị trí tả trong nguồn trực tiếp. Phần lớn mốc 1961 chỉ đến qua Wikipedia (dẫn báo Thẳng Tiến) — chưa tiếp cận được nguồn A. Ảnh chính đề xuất có nguồn gốc đáng ngờ (Commons khai 'Own work' nhưng tự ghi 'ảnh sưu tầm', ảnh đã lưu hành trước đó). Nguồn đưa vào dữ liệu gồm 3 nguồn B và 1 nguồn C; validate-record và format-report --check đều sạch, không cảnh báo.

## 5. Tóm tắt kiểm chứng

- Kết luận: **ÁP DỤNG CÓ ĐIỀU KIỆN** — 33/40 điểm
- Trường được duyệt: 8 · nguồn được duyệt: 4 · ảnh được duyệt: 1
- Vấn đề mức chặn: 0 · tổng số vấn đề ghi nhận: 7
- Hồ sơ đúng lược đồ: có

**Điều kiện bắt buộc khi triển khai:**

- Trong oralTradition, thay nguyên câu 'Người Công giáo quanh Sông Pha vẫn gắn tên Mẹ Trinh Phong với ngọn gió Eo Gió.' bằng câu 'Theo cách hiểu lưu truyền trong giới hành hương, tên Mẹ Trinh Phong gắn với ngọn gió Eo Gió.'
- Trong oralTradition, xoá vế '; đến nay nhiều video hành hương vẫn giới thiệu nơi này như pho tượng Mẹ ẩn mình giữa rừng trên đỉnh đèo' để câu kết thúc ở '...hay các cha xứ lân cận thầm lặng tìm vào viếng.'; phần còn lại của oralTradition giữ nguyên văn đề xuất
- Trong significance, thay cụm 'từ đó tượng đài trở thành một điểm hành hương' bằng 'hiện nay tượng đài là một điểm hành hương'; phần còn lại giữ nguyên văn đề xuất
- Dùng File:DucMetrinhphong.jpg làm realImage (bản tải về docs/khao-cuu/trinhphong/anh/commons-DucMetrinhphong.jpg) với realImageCaption đúng nguyên văn caption trong images[0] của hồ sơ khảo cứu; galleryImages giữ []
- Không sửa lat, lng, year, constellationRole, diemStatue5 và CONSTELLATION_VERSIONS — giữ nguyên giá trị hiện có trong src/data/statues.js

## 6. Việc còn lại cho người đọc

Lượt chạy chưa kết thúc.

---

_Trang này sinh tự động từ `quy-trinh.json`. Đừng sửa tay — sửa JSON rồi chạy lại `format-run.mjs`._
