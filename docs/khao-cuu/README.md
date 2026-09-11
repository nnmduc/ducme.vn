# Hồ Sơ Khảo Cứu Linh Địa

Thư mục này lưu hồ sơ nguồn gốc của từng thay đổi nội dung trên website: khảo cứu được gì, kiểm chứng
ra sao, và vì sao nội dung đó được (hoặc không được) đưa lên.

Quy trình và công cụ nằm ở `.claude/skills/` (xem `.claude/skills/README.md`).

## Cấu trúc

```
docs/khao-cuu/<id>/
├── khao-cuu.json             # HỒ SƠ GỐC: tư liệu, nguồn, ảnh, bản ghi đề xuất, điểm chưa chắc chắn
├── bao-cao-khao-cuu.md       # Báo cáo khảo cứu, sinh tự động từ khao-cuu.json
├── bao-cao-khao-cuu.html     # Bản HTML để đọc/in (tuỳ chọn)
├── kiem-chung.json           # HỒ SƠ GỐC: kết quả kiểm chứng, chấm điểm, kết luận, phạm vi được duyệt
├── bao-cao-kiem-chung.md     # Báo cáo kiểm chứng, sinh tự động từ kiem-chung.json
├── bao-cao-kiem-chung.html   # Bản HTML để đọc/in (tuỳ chọn)
├── phieu-thi-cong.md         # Gộp hai hồ sơ trên thành phạm vi thi công (tuỳ chọn)
└── anh/                      # Ảnh ứng viên kèm ghi chú tác giả và giấy phép (nếu có)
```

Hai file `.json` là bản gốc; mọi file báo cáo đều sinh ra từ chúng. **Đừng sửa tay vào file
markdown** — sửa JSON rồi chạy lại lệnh format, nếu không hai bản sẽ lệch nhau.

`<id>` trùng với trường `id` trong `src/data/statues.js` (viết thường, không dấu, ví dụ `nuicui`).

## Bốn kết luận kiểm chứng

| Kết luận | Nghĩa là |
|---|---|
| **ÁP DỤNG** | Đủ điều kiện đưa lên website nguyên trạng |
| **ÁP DỤNG CÓ ĐIỀU KIỆN** | Chỉ đưa lên phần đã duyệt, sau khi sửa đúng các điểm được liệt kê |
| **TRẢ LẠI KHẢO CỨU** | Còn thiếu bằng chứng, cần khảo cứu thêm |
| **TỪ CHỐI** | Sai về bản chất, nguồn không kiểm chứng được, hoặc ngoài phạm vi dự án |

Mọi Pull Request thay đổi tư liệu linh địa nên dẫn chiếu tới hồ sơ tương ứng trong thư mục này.
