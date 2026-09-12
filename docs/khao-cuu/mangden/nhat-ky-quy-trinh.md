# Nhật ký quy trình tự động: Đức Mẹ Măng Đen

**Kết quả cuối cùng:** Hoàn thành — nội dung đã lên nhánh / Pull Request

- Mã linh địa: `mangden`
- Bắt đầu: 2026-09-12 07:32 · Kết thúc: 2026-09-12 07:49 · Tổng: 17 phút
- Số vòng khảo cứu đã chạy: 1 / tối đa 2
- Số lần sửa lược đồ: 0 / tối đa 2
- Tạo Pull Request: có
- Nhánh: `data/bo-sung-tu-lieu-mangden`
- Pull Request: https://github.com/nnmduc/ducme.vn/pull/14
- Ghi chú: Trien khai thanh cong len website qua PR #14

## 1. Các bước đã chạy

| Thời điểm | Bước | Chế độ | Vòng | Kết quả | Ghi chú |
|---|---|---|---|---|---|
| 2026-09-12 07:37 | Khảo cứu | làm mới từ đầu | 1 | xong | Hoan tat khao cuu mangden: 7 nguon, 4 truyen tung, 5 anh ung vien |
| 2026-09-12 07:43 | Kiểm chứng | làm mới từ đầu | 1 | xong | Ket luan AP_DUNG_CO_DIEU_KIEN (39/40 diem), cho phep trien khai |
| 2026-09-12 07:46 | Triển khai | — | 1 | xong | Trien khai mangden vao src/data/statues.js, bo sung 4 nguon truc tiep va mo rong noi dung |
| 2026-09-12 07:49 | Triển khai | — | 1 | xong | Trien khai thanh cong: 403 test assertions pass, da commit va tao PR #14 |


## 2. Các điểm rẽ nhánh

Mỗi dòng là một quyết định đã thực sự được thi hành: bộ điều phối đọc trạng thái trên đĩa, chọn bước
kế tiếp, và bước đó đã chạy xong. Quyết định chưa thi hành không nằm ở đây.

| Thời điểm | Chọn bước | Chế độ | Kết luận kiểm chứng | Lý do |
|---|---|---|---|---|
| 2026-09-12 07:32 | Khảo cứu | làm mới từ đầu | — | Chưa có docs/khao-cuu/<id>/khao-cuu.json — khảo cứu từ đầu |
| 2026-09-12 07:37 | Kiểm chứng | làm mới từ đầu | — | Đã có hồ sơ khảo cứu hợp lệ, chưa có hồ sơ kiểm chứng |
| 2026-09-12 07:43 | Triển khai | — | ÁP DỤNG CÓ ĐIỀU KIỆN | Kết luận kiểm chứng: ÁP DỤNG CÓ ĐIỀU KIỆN |
| 2026-09-12 07:49 | Kết thúc | — | — | Lượt chạy đã kết thúc: Hoàn thành — nội dung đã lên nhánh / Pull Request |


## 3. Hồ sơ sinh ra

| Tệp | Nội dung | Tồn tại |
|---|---|---|
| khao-cuu.json | hồ sơ khảo cứu (bản gốc) | có |
| bao-cao-khao-cuu.md | báo cáo khảo cứu | có |
| kiem-chung.json | hồ sơ kiểm chứng (bản gốc) | có |
| bao-cao-kiem-chung.md | báo cáo kiểm chứng | có |
| phieu-thi-cong.md | phiếu thi công cho triển khai | có |
| quy-trinh.json | trạng thái lượt chạy (bản gốc của trang này) | có |


## 4. Tóm tắt khảo cứu

- Nguồn thu được: 7 · đưa vào dữ liệu: 4
- Chuyện kể ghi nhận: 4
- Ảnh đề xuất: 3 · ảnh ứng viên đã gom: 5
- Điểm chưa rõ (`unknowns`): 3 · mâu thuẫn nguồn: 2
- Hồ sơ đúng lược đồ: có
- Rủi ro lớn nhất người khảo cứu tự nêu: Nguồn gốc tượng năm 1971 và các sự kiện phục chế 1987 chủ yếu dựa trên các bài viết hồi ức và tường trình của linh mục đăng trên website Giáo phận Kon Tum và Wikipedia, chưa tiếp cận được hồ sơ văn bản giấy gốc tại Văn khố Tòa Giám mục.

## 5. Tóm tắt kiểm chứng

- Kết luận: **ÁP DỤNG CÓ ĐIỀU KIỆN** — 39/40 điểm
- Trường được duyệt: 8 · nguồn được duyệt: 4 · ảnh được duyệt: 3
- Vấn đề mức chặn: 0 · tổng số vấn đề ghi nhận: 3
- Hồ sơ đúng lược đồ: có

**Điều kiện bắt buộc khi triển khai:**

- Không gán nguồn Wikipedia [S3] cho luận điểm 'ngôi sao Alioth trong chòm sao Bắc Đẩu' trong oralTradition; giữ nguyên câu văn trong oralTradition theo baseline của dự án.
- Dùng assets/real_photos/mangden.jpg làm realImage với realImageCaption cập nhật theo đề xuất (ghi rõ nguồn Wikimedia Commons, tác giả Baojcn01, giấy phép CC BY-SA 4.0).
- Thay thế liên kết tìm kiếm Google bằng 4 nguồn bài viết trực tiếp S1, S2, S3, S4 trong trường sources của bản ghi.
- Áp dụng chuẩn hóa tọa độ lat: 14.6009, lng: 108.2979 theo OpenStreetMap node 5490688957.
- Viết oralTradition đúng 3 chuyện đã duyệt, bảo đảm mỗi ý đều mở đầu bằng nhãn truyền tụng như bản dự thảo.
- Nếu đưa 2 ảnh phụ (the-statue-of-our-lady-of-fatima-in-mang-den.jpg, ducmemang_den_2010.jpg) vào galleryImages, bắt buộc phải nén dung lượng xuống dưới 3.0 MB trước khi commit; nếu không, giữ galleryImages: [] như đề xuất ban đầu.

## 6. Việc còn lại cho người đọc

Không còn việc bắt buộc. Người duyệt Pull Request vẫn nên đọc báo cáo kiểm chứng trước khi merge —
bộ điều phối không bao giờ tự merge.

---

_Trang này sinh tự động từ `quy-trinh.json`. Đừng sửa tay — sửa JSON rồi chạy lại `format-run.mjs`._
