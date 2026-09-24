# Nhật ký quy trình tự động: Vương Cung Thánh Đường Phú Nhai

**Kết quả cuối cùng:** Đang chạy

- Mã linh địa: `phunhai`
- Bắt đầu: 2026-09-24 06:42 · Kết thúc: — · Tổng: 11 phút
- Số vòng khảo cứu đã chạy: 1 / tối đa 2
- Số lần sửa lược đồ: 0 / tối đa 2
- Tạo Pull Request: có

## 1. Các bước đã chạy

| Thời điểm | Bước | Chế độ | Vòng | Kết quả | Ghi chú |
|---|---|---|---|---|---|
| 2026-09-24 06:53 | Khảo cứu | làm mới từ đầu | 1 | xong | 16 nguon, 4 chuyen ke, 3 anh de xuat; sua toa do, ngay phong, title |


## 2. Các điểm rẽ nhánh

Mỗi dòng là một quyết định đã thực sự được thi hành: bộ điều phối đọc trạng thái trên đĩa, chọn bước
kế tiếp, và bước đó đã chạy xong. Quyết định chưa thi hành không nằm ở đây.

| Thời điểm | Chọn bước | Chế độ | Kết luận kiểm chứng | Lý do |
|---|---|---|---|---|
| 2026-09-24 06:42 | Khảo cứu | làm mới từ đầu | — | Chưa có docs/khao-cuu/<id>/khao-cuu.json — khảo cứu từ đầu |


## 3. Hồ sơ sinh ra

| Tệp | Nội dung | Tồn tại |
|---|---|---|
| khao-cuu.json | hồ sơ khảo cứu (bản gốc) | có |
| bao-cao-khao-cuu.md | báo cáo khảo cứu | có |
| kiem-chung.json | hồ sơ kiểm chứng (bản gốc) | không |
| bao-cao-kiem-chung.md | báo cáo kiểm chứng | không |
| phieu-thi-cong.md | phiếu thi công cho triển khai | không |
| quy-trinh.json | trạng thái lượt chạy (bản gốc của trang này) | có |


## 4. Tóm tắt khảo cứu

- Nguồn thu được: 16 · đưa vào dữ liệu: 4
- Chuyện kể ghi nhận: 4
- Ảnh đề xuất: 3 · ảnh ứng viên đã gom: 12
- Điểm chưa rõ (`unknowns`): 6 · mâu thuẫn nguồn: 9
- Hồ sơ đúng lược đồ: có · 1 cảnh báo
- Rủi ro lớn nhất người khảo cứu tự nêu: Nhiều nguồn chép chuyền nhau (hddmvn chép gpbuichu; trang xã, VOV5 có thể chép Wikipedia) nên số nguồn độc lập ít hơn vẻ ngoài. Giai đoạn chiếm đóng 1949-1953 chỉ dựa Wikipedia (dẫn sách lịch sử Đảng bộ xã) — đã viết trung tính, nhưng người kiểm chứng cân nhắc có giữ trong historicalFact không. Câu 'Tiểu Vương cung đầu tiên ở miền Bắc' trong significance chỉ dựa nguồn C chưa đọc toàn văn. Các trang du lịch không mở được nên phần chuyện kể còn mỏng. Về cảnh báo tự kiểm: (1) 'lat chỉ có 1 chữ số thập phân' là do 20.3000 được JSON viết gọn thành 20.3 — giá trị thật đo được là 20.30002 (OSM) / 20.299946 (Wikipedia), đã đủ độ chính xác 4 chữ số; (2) trường elevation chưa có claims vì không tìm được nguồn nào cho con số 10m — đã ghi ở unknowns.

## 6. Việc còn lại cho người đọc

Lượt chạy chưa kết thúc.

---

_Trang này sinh tự động từ `quy-trinh.json`. Đừng sửa tay — sửa JSON rồi chạy lại `format-run.mjs`._
