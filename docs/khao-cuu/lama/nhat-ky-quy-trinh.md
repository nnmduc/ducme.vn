# Nhật ký quy trình tự động: Đức Mẹ La Mã Bến Tre

**Kết quả cuối cùng:** Đang chạy

- Mã linh địa: `lama`
- Bắt đầu: 2026-09-12 08:00 · Kết thúc: — · Tổng: 51 phút
- Số vòng khảo cứu đã chạy: 1 / tối đa 2
- Số lần sửa lược đồ: 0 / tối đa 2
- Tạo Pull Request: có

## 1. Các bước đã chạy

| Thời điểm | Bước | Chế độ | Vòng | Kết quả | Ghi chú |
|---|---|---|---|---|---|
| 2026-09-12 08:27 | Khảo cứu | làm mới từ đầu | 1 | xong | Khao cuu lai tu dau: 19 nguon, 3 truyen tung, 5 anh de xuat, 780 tu. De xuat sua year 1950->1951 va toa do. |
| 2026-09-12 08:51 | Kiểm chứng | làm mới từ đầu | 1 | xong | AP_DUNG_CO_DIEU_KIEN 38/40: toa do va nam 1951 xac nhan doc lap dung; 2 dieu kien: bo cau suy luan trong significance, doi .webp sang .jpg/.png |


## 2. Các điểm rẽ nhánh

Mỗi dòng là một quyết định đã thực sự được thi hành: bộ điều phối đọc trạng thái trên đĩa, chọn bước
kế tiếp, và bước đó đã chạy xong. Quyết định chưa thi hành không nằm ở đây.

| Thời điểm | Chọn bước | Chế độ | Kết luận kiểm chứng | Lý do |
|---|---|---|---|---|
| 2026-09-12 08:00 | Khảo cứu | làm mới từ đầu | — | Chưa có docs/khao-cuu/<id>/khao-cuu.json — khảo cứu từ đầu |
| 2026-09-12 08:27 | Kiểm chứng | làm mới từ đầu | — | Đã có hồ sơ khảo cứu hợp lệ, chưa có hồ sơ kiểm chứng |


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

- Nguồn thu được: 19 · đưa vào dữ liệu: 5
- Chuyện kể ghi nhận: 3
- Ảnh đề xuất: 5 · ảnh ứng viên đã gom: 7
- Điểm chưa rõ (`unknowns`): 6 · mâu thuẫn nguồn: 4
- Hồ sơ đúng lược đồ: có
- Rủi ro lớn nhất người khảo cứu tự nêu: Hai rủi ro chính: (1) Toạ độ mới lấy từ OpenStreetMap — dữ liệu cộng đồng, có thể có sai số vài chục đến vài trăm mét dù đã đối chiếu 2 điểm độc lập; công cụ geocoding chính quy (Nominatim, Overpass) đều bị chặn trong phiên này nên không đối chiếu thêm được. (2) Ảnh đề xuất vai trò 'phu' lấy từ Wikimedia Commons (lama-linh-anh-hcg.jpg) có mô tả tự mâu thuẫn về tác giả ('Own work' nhưng ghi chú tiếng Việt là 'ảnh sưu tầm') — cần audit kiểm tra kỹ trước khi duyệt, dù bản thân bức ảnh chắc chắn không phải do AI tạo (EXIF cho thấy ảnh gốc năm 2010, chỉnh bằng Photoshop 7.0, và nội dung khớp hoàn toàn với mô tả linh ảnh trong sử liệu).

## 5. Tóm tắt kiểm chứng

- Kết luận: **ÁP DỤNG CÓ ĐIỀU KIỆN** — 38/40 điểm
- Trường được duyệt: 9 · nguồn được duyệt: 5 · ảnh được duyệt: 5
- Vấn đề mức chặn: 0 · tổng số vấn đề ghi nhận: 4
- Hồ sơ đúng lược đồ: có

**Điều kiện bắt buộc khi triển khai:**

- Bỏ vế 'đồng thời là trung tâm hành hương lớn nhất vùng châu thổ sông Cửu Long dưới tước hiệu Đức Mẹ Hằng Cứu Giúp' trong trường significance trước khi đăng — không nguồn nào trong 5 nguồn được dẫn (S1-S5) xác nhận xếp hạng này; chỉ giữ lại phần có nguồn (thứ ba toàn quốc, một trong ba trung tâm hành hương của Giáo phận Vĩnh Long).
- Chuyển đổi file lama-thap-chuong.webp sang định dạng .jpg hoặc .png trước khi lưu vào src/assets/real_photos, giữ nguyên caption và vai trò ảnh phụ (galleryImages) đã đề xuất trong hồ sơ khảo cứu.

## 6. Việc còn lại cho người đọc

Lượt chạy chưa kết thúc.

---

_Trang này sinh tự động từ `quy-trinh.json`. Đừng sửa tay — sửa JSON rồi chạy lại `format-run.mjs`._
