# Mẫu báo cáo khảo cứu

Lưu tại `docs/khao-cuu/<id>/bao-cao-khao-cuu.md`. Giữ nguyên thứ tự các mục — người kiểm chứng đọc
theo đúng trình tự này.

---

```markdown
# Báo cáo khảo cứu: <Tên linh địa>

- **Mã linh địa (`id`)**: `<id>`
- **Loại**: linh địa mới | bổ sung tư liệu cho linh địa đã có
- **Người khảo cứu**: <tên / phiên làm việc>
- **Ngày hoàn thành**: YYYY-MM-DD
- **Phạm vi**: <ví dụ: bổ sung historicalFact, architect và 2 nguồn trực tiếp; tìm ảnh thực địa>

## 1. Hiện trạng trước khảo cứu

Kết quả `site-gaps.mjs --id <id>`:

| Mục | Hiện trạng |
|---|---|
| Ảnh thực địa | có / chưa có |
| Nguồn trực tiếp | n |
| Nguồn tìm kiếm | n |
| Tổng văn xuôi | n từ |
| Thiếu | ... |

(Với linh địa mới: ghi "chưa có bản ghi trong `src/data/statues.js`" và nêu lý do nên đưa vào —
tiêu chí: là trung tâm hành hương / linh đài Đức Mẹ có quy mô, được giáo phận công nhận, có tư liệu
công khai kiểm chứng được.)

## 2. Phát hiện theo từng trường dữ liệu

Mỗi mục: nội dung đề xuất → nguồn → mức tin cậy (cao / trung bình / thấp).

### 2.1. Nhận dạng và địa lý

| Trường | Giá trị đề xuất | Nguồn | Tin cậy |
|---|---|---|---|
| `name` | | [S1] | |
| `title` | | [S1] | |
| `year` | | [S2] | |
| `location` | | [S1] | |
| `region` | | — | |
| `diocese` | | [S1] | |
| `lat` / `lng` | | [S3] | |
| `elevation` | | [S2] | |

Cách xác định toạ độ: <đo từ đâu, đối chiếu với nguồn nào, sai số ước lượng>.

### 2.2. `historicalFact`

> <đoạn văn đề xuất, nguyên văn sẽ đưa vào dữ liệu>

Từng khẳng định và nguồn tương ứng:

- "..." → [S1]
- "..." → [S2]

### 2.3. `oralTradition`

> <đoạn văn đề xuất>

Nguồn ghi nhận truyền tụng: [S4]. Ghi rõ đây là truyền tụng, không phải sự kiện đã kiểm chứng.

### 2.4. `architect`

> <đoạn văn đề xuất>

### 2.5. `significance`

> <đoạn văn đề xuất>

### 2.6. Chòm sao

Có đề xuất đưa vào phiên bản chòm sao nào không? Nếu không: "Không tham gia chòm sao nào
(`v1`–`v4` đều `null`)". Nếu có: nêu lập luận lịch sử và nguồn, và ghi rõ phải sửa
`CONSTELLATION_VERSIONS` ở đâu.

## 3. Danh mục nguồn

| Mã | Tiêu đề | URL | Cấp | Ngày truy cập | Nội dung dùng để chứng minh |
|---|---|---|---|---|---|
| S1 | | https:// | A/B/C | YYYY-MM-DD | |
| S2 | | https:// | | | |

Nguồn đưa vào trường `sources` của dữ liệu (tối thiểu 2, ưu tiên bài viết trực tiếp): S1, S2.

## 4. Hình ảnh

Với mỗi ảnh đề xuất:

| Mục | Nội dung |
|---|---|
| Trang mô tả file gốc | https:// (trang `File:`, không phải URL ảnh thô) |
| Tác giả | |
| Giấy phép | CC-BY-SA 4.0 / CC-BY / Public Domain |
| Năm chụp | |
| Nội dung ảnh | |
| `realImageCaption` đề xuất | |
| Cam kết | Ảnh chụp thực địa, không do AI tạo sinh |

Nếu không tìm được ảnh hợp lệ: ghi rõ "**Không đề xuất ảnh** — giữ `realImage: null`", kèm những nơi
đã tìm qua. Đây là kết quả chấp nhận được, không phải thất bại.

## 5. Mâu thuẫn giữa các nguồn & điểm chưa chắc chắn

Mục quan trọng nhất với người kiểm chứng. Liệt kê thẳng thắn:

| Vấn đề | Nguồn nói A | Nguồn nói B | Xử lý đề xuất |
|---|---|---|---|
| Năm khánh thành | [S1] ghi 1960 | [S3] ghi 1961 | Ghi 1960 theo nguồn sớm hơn, nêu cả hai trong `historicalFact` |

Những điều **không** tìm được nguồn và đã cố ý bỏ ra khỏi đề xuất: ...

## 6. Tự đánh giá

| Trục | Đánh giá |
|---|---|
| Độ đầy đủ của nguồn | |
| Độ tin cậy tổng thể | cao / trung bình / thấp |
| Rủi ro lớn nhất của báo cáo này | |
| Đề nghị người kiểm chứng soi kỹ mục | |

## 7. Kết quả tự kiểm

```
$ node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/<id>/de-xuat-du-lieu.json
<dán nguyên kết quả>
```

Cảnh báo chưa xử lý được và lý do: ...
```
