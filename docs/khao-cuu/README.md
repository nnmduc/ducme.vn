# Hồ Sơ Khảo Cứu Linh Địa

Thư mục này lưu hồ sơ nguồn gốc của từng thay đổi nội dung trên website: khảo cứu được gì, kiểm chứng
ra sao, và vì sao nội dung đó được (hoặc không được) đưa lên.

Quy trình và công cụ nằm ở `.claude/skills/` (xem `.claude/skills/README.md`).

## Cấu trúc

```
docs/khao-cuu/<id>/
├── bao-cao-khao-cuu.md     # Thu thập tư liệu, ảnh, nguồn; nêu rõ điểm chưa chắc chắn
├── de-xuat-du-lieu.json    # Bản ghi đề xuất cho src/data/statues.js
├── bao-cao-kiem-chung.md   # Kiểm chứng độc lập, chấm điểm, kết luận
└── anh/                    # Ảnh ứng viên kèm ghi chú tác giả và giấy phép (nếu có)
```

`<id>` trùng với trường `id` trong `src/data/statues.js` (viết thường, không dấu, ví dụ `nuicui`).

## Bốn kết luận kiểm chứng

| Kết luận | Nghĩa là |
|---|---|
| **ÁP DỤNG** | Đủ điều kiện đưa lên website nguyên trạng |
| **ÁP DỤNG CÓ ĐIỀU KIỆN** | Chỉ đưa lên phần đã duyệt, sau khi sửa đúng các điểm được liệt kê |
| **TRẢ LẠI KHẢO CỨU** | Còn thiếu bằng chứng, cần khảo cứu thêm |
| **TỪ CHỐI** | Sai về bản chất, nguồn không kiểm chứng được, hoặc ngoài phạm vi dự án |

Mọi Pull Request thay đổi tư liệu linh địa nên dẫn chiếu tới hồ sơ tương ứng trong thư mục này.
