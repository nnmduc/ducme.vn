# Hồ sơ khảo cứu `khao-cuu.json`

Đây là **đầu ra chính** của `marian-research` — bản gốc duy nhất. Báo cáo markdown và HTML đều sinh
ra từ file này, nên không bao giờ sửa tay vào file `.md`: sửa JSON rồi chạy lại lệnh format.

Lý do dùng JSON: `marian-audit` và `marian-publish` đọc được bằng máy, không phải đoán ý từ văn xuôi.
Việc gì máy kiểm được (nguồn có tồn tại không, luận điểm có gắn nguồn không, trường nào được duyệt)
thì để máy kiểm.

```
docs/khao-cuu/<id>/khao-cuu.json      <- viết file này
docs/khao-cuu/<id>/bao-cao-khao-cuu.md    <- sinh ra, không sửa tay
docs/khao-cuu/<id>/bao-cao-khao-cuu.html  <- sinh ra khi chạy với --html
```

Bản mẫu đầy đủ để sao chép: [`../../_lib/examples/khao-cuu.example.json`](../../_lib/examples/khao-cuu.example.json).

## Lệnh

```bash
# kiểm hồ sơ hợp lệ, chưa sinh báo cáo
node .claude/skills/marian-research/scripts/format-report.mjs docs/khao-cuu/<id>/khao-cuu.json --check

# sinh bao-cao-khao-cuu.md
node .claude/skills/marian-research/scripts/format-report.mjs docs/khao-cuu/<id>/khao-cuu.json

# sinh thêm bản HTML (tự chứa, mở được khi không có mạng, in ra giấy được)
node .claude/skills/marian-research/scripts/format-report.mjs docs/khao-cuu/<id>/khao-cuu.json --html

# in markdown ra màn hình, không ghi file
node .claude/skills/marian-research/scripts/format-report.mjs docs/khao-cuu/<id>/khao-cuu.json --stdout
```

Tuỳ chọn khác: `--html <đường dẫn>` đổi tên file HTML, `--out-dir <thư mục>` đổi thư mục đích,
`--quiet` bớt dòng thông báo.

## Lược đồ `ducme.khao-cuu/v1`

### Đầu hồ sơ

| Khoá | Kiểu | Bắt buộc | Ghi chú |
|---|---|---|---|
| `schema` | string | có | Đúng chuỗi `"ducme.khao-cuu/v1"` |
| `id` | string | có | `^[a-z0-9]+$`, trùng với `record.id` |
| `name` | string | có | Tên hiển thị: "Đức Mẹ ..." |
| `kind` | enum | có | `moi` \| `capnhat` |
| `researcher` | string | nên có | Người hoặc phiên làm việc |
| `date` | string | có | `YYYY-MM-DD` |
| `scope` | string | nên có | Phạm vi khảo cứu lần này |

### `baseline` — hiện trạng trước khi khảo cứu

Lấy thẳng từ `site-gaps.mjs --id <id> --json`: `hasPhoto`, `directSources`, `searchSources`,
`totalWords`, `missing[]`. Với linh địa mới thì bỏ trống.

### `fields[]` — đề xuất theo từng trường

| Khoá | Kiểu | Ghi chú |
|---|---|---|
| `field` | enum | Tên trường trong `src/data/statues.js` |
| `action` | enum | `them` \| `sua` \| `giunguyen` |
| `value` | any | Nội dung đề xuất. Bắt buộc khi action khác `giunguyen` |
| `note` | string | Lưu ý khi triển khai |
| `claims[]` | array | **Bắt buộc** với `historicalFact`, `architect`, `significance`, `year`, `lat`, `lng` |
| `claims[].text` | string | Một khẳng định cụ thể |
| `claims[].sources[]` | array | Mã nguồn, phải tồn tại trong `sources[]` |
| `claims[].confidence` | enum | `cao` \| `trungbinh` \| `thap` |

Đây là chỗ quan trọng nhất của cả hồ sơ: mỗi khẳng định phải gắn được vào một nguồn có thật. Người
kiểm chứng sẽ mở đúng những nguồn này và đối chiếu từng dòng.

### `sources[]` — danh mục nguồn

| Khoá | Kiểu | Ghi chú |
|---|---|---|
| `code` | string | `S1`, `S2`, ... duy nhất trong hồ sơ |
| `title` | string | Dài hơn 5 ký tự, mô tả được nguồn |
| `url` | string | `https://`, trỏ thẳng bài viết |
| `tier` | enum | `A` (gốc) \| `B` (thứ cấp đáng tin) \| `C` (chỉ là manh mối) |
| `accessed` | string | `YYYY-MM-DD` |
| `supports` | string | Nguồn này chứng minh điều gì |
| `inRecord` | boolean | Có đưa vào trường `sources` của dữ liệu không |

Ràng buộc: tối thiểu 2 nguồn `inRecord: true`. Nguồn cấp `C` **không được** `inRecord: true`.

### `images[]` — ảnh đề xuất

Mảng rỗng `[]` là hợp lệ và thường là kết quả đúng. Mỗi phần tử cần: `file`, `filePage` (trang mô tả
file gốc, không phải URL ảnh thô), `author`, `license`, `year`, `content`, `caption`, và
`notAi: true` — thiếu một trong số đó thì hồ sơ không hợp lệ.

Khi không đề xuất ảnh, ghi `imageSearchNote` cho biết đã tìm qua những đâu.

### `conflicts[]`, `unknowns[]`, `selfAssessment`

- `conflicts[]`: `{ issue, a:{claim,source}, b:{claim,source}, resolution }` — nguồn mâu thuẫn nhau
  và cách xử lý đề xuất.
- `unknowns[]`: những gì không tìm được nguồn và đã cố ý để ngoài đề xuất. Mảng rỗng sẽ bị cảnh báo —
  một báo cáo không còn điểm nào chưa chắc chắn thường là chưa đào đủ sâu.
- `selfAssessment`: `{ confidence, biggestRisk, reviewFocus }`.

### `record` — bản ghi dữ liệu đề xuất

Bản ghi đầy đủ đúng lược đồ của `src/data/statues.js` (xem [`luoc-do-du-lieu.md`](luoc-do-du-lieu.md)).
Đây là thứ `marian-publish` sẽ đối chiếu khi sửa dữ liệu.

Kiểm bằng:

```bash
node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/<id>/khao-cuu.json
# thêm --allow-existing-id khi là bản cập nhật cho linh địa đã có
```

Lệnh này nhận thẳng hồ sơ khảo cứu, tự lấy phần `record` bên trong.

### `validation`

Dán kết quả tự kiểm: `{ command, output }`. Báo cáo sẽ in nguyên văn để người kiểm chứng thấy được
hồ sơ đã qua bước nào.
