# Mẫu báo cáo kiểm chứng

Lưu tại `docs/khao-cuu/<id>/bao-cao-kiem-chung.md`. Kết luận nằm ngay đầu file, không bắt người đọc
cuộn xuống cuối.

---

```markdown
# Báo cáo kiểm chứng: <Tên linh địa>

## Kết luận

> **<ÁP DỤNG | ÁP DỤNG CÓ ĐIỀU KIỆN | TRẢ LẠI KHẢO CỨU | TỪ CHỐI>**
>
> <Một đến ba câu nêu lý do.>

- **Báo cáo được kiểm**: `docs/khao-cuu/<id>/bao-cao-khao-cuu.md`
- **Người kiểm chứng**: <tên / phiên làm việc>
- **Ngày kiểm**: YYYY-MM-DD
- **Tổng điểm**: nn/35

### Điều kiện bắt buộc trước khi triển khai

(Chỉ điền khi kết luận là ÁP DỤNG CÓ ĐIỀU KIỆN. `marian-publish` sẽ làm đúng danh sách này, không
suy diễn thêm.)

1. Bỏ câu "..." trong `historicalFact` — nguồn [S3] không chứa nội dung này.
2. Giữ `realImage: null` — ảnh đề xuất không xác minh được giấy phép.
3. Thay nguồn [S2] bằng bài viết trực tiếp thay cho link tìm kiếm.

## 1. Chấm điểm

| # | Trục | Điểm | Bằng chứng |
|---|---|---|---|
| 1 | Chất lượng nguồn | /5 | |
| 2 | Truy vết luận điểm | /5 | |
| 3 | Độ chính xác dữ liệu | /5 | |
| 4 | Hình ảnh | /5 | |
| 5 | Phân định sự thật / truyền tụng | /5 | |
| 6 | Giọng văn & trung lập | /5 | |
| 7 | Tính kỹ thuật | /5 | |
| | **Tổng** | **/35** | |

## 2. Kiểm nguồn dẫn

```
$ node .claude/skills/marian-audit/scripts/check-sources.mjs --file docs/khao-cuu/<id>/de-xuat-du-lieu.json
<dán nguyên kết quả>
```

Nguồn bị proxy chặn và đã kiểm lại bằng `WebFetch`:

| Nguồn | Kết quả kiểm lại |
|---|---|
| [S1] | Trang còn sống, đúng nội dung |

### Bảng đối chiếu luận điểm

| # | Luận điểm | Nguồn | Nguồn có chứa? | Kết luận |
|---|---|---|---|---|
| 1 | | [S1] | | Đạt / Sửa câu chữ / Bỏ |

### Kiểm chéo độc lập

Nguồn do người kiểm chứng tự tìm (không lấy từ báo cáo):

| Nguồn | URL | Xác nhận / bác bỏ điều gì |
|---|---|---|

## 3. Kiểm hình ảnh

```
$ node .claude/skills/marian-audit/scripts/check-image.mjs <đường dẫn>
<dán nguyên kết quả>
```

| Mục kiểm | Kết quả |
|---|---|
| Trang mô tả file gốc còn sống | |
| Giấy phép đọc được tại nguồn | |
| Tác giả khớp với báo cáo | |
| Ảnh đúng là linh địa đang xét | |
| Dấu hiệu ảnh tạo sinh | |
| **Kết luận về ảnh** | duyệt / loại |

(Nếu báo cáo không đề xuất ảnh: ghi "Không có ảnh để kiểm — giữ `realImage: null`.")

## 4. Kiểm kỹ thuật

```
$ node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/<id>/de-xuat-du-lieu.json
<dán nguyên kết quả>
```

Ảnh hưởng tới phần còn lại của hệ thống:

| Mục | Ảnh hưởng |
|---|---|
| Số lượng linh địa | 18 → 19 |
| `CONSTELLATION_VERSIONS` | không đổi / sửa v4 |
| Số assertion `npm test` | 353 → nnn (ước tính) |
| Tài liệu phải cập nhật | `docs/marian-sites-missing-info.md`, README, PR template |

## 5. Vấn đề phát hiện

| # | Mức | Vấn đề | Vị trí | Đề nghị xử lý |
|---|---|---|---|---|
| 1 | Chặn / Nặng / Nhẹ | | | |

## 6. Phần đã duyệt

Liệt kê rõ những gì `marian-publish` được phép đưa lên:

- [x] `historicalFact` (sau khi bỏ câu nêu ở điều kiện 1)
- [x] `architect`, `significance`
- [x] `sources` S1, S4
- [ ] Ảnh — **không duyệt**
- [ ] Thay đổi chòm sao — **không duyệt**
```
