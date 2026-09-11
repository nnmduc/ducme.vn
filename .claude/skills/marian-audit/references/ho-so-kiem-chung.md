# Hồ sơ kiểm chứng `kiem-chung.json`

Đầu ra chính của `marian-audit` — bản gốc duy nhất. Báo cáo markdown và HTML sinh ra từ file này;
`marian-publish` cũng đọc thẳng file này để biết được phép đưa lên những gì.

```
docs/khao-cuu/<id>/kiem-chung.json          <- viết file này
docs/khao-cuu/<id>/bao-cao-kiem-chung.md    <- sinh ra, không sửa tay
docs/khao-cuu/<id>/bao-cao-kiem-chung.html  <- sinh ra khi chạy với --html
```

Bản mẫu đầy đủ để sao chép: [`../../_lib/examples/kiem-chung.example.json`](../../_lib/examples/kiem-chung.example.json).

## Lệnh

```bash
# kiểm hồ sơ hợp lệ (có đối chiếu chéo với khao-cuu.json cùng thư mục)
node .claude/skills/marian-audit/scripts/format-audit.mjs docs/khao-cuu/<id>/kiem-chung.json --check

# sinh bao-cao-kiem-chung.md
node .claude/skills/marian-audit/scripts/format-audit.mjs docs/khao-cuu/<id>/kiem-chung.json

# sinh thêm bản HTML
node .claude/skills/marian-audit/scripts/format-audit.mjs docs/khao-cuu/<id>/kiem-chung.json --html
```

Lệnh tự tìm `khao-cuu.json` cùng thư mục (hoặc theo `researchReport`) để đối chiếu: duyệt một trường
mà hồ sơ khảo cứu không đề xuất, hoặc dẫn mã nguồn không tồn tại, đều bị bắt ngay.

## Lược đồ `ducme.kiem-chung/v1`

### Đầu hồ sơ

| Khoá | Kiểu | Bắt buộc | Ghi chú |
|---|---|---|---|
| `schema` | string | có | Đúng chuỗi `"ducme.kiem-chung/v1"` |
| `id` | string | có | Trùng id hồ sơ khảo cứu |
| `researchReport` | string | nên có | Đường dẫn hồ sơ khảo cứu đã kiểm |
| `auditor` | string | nên có | Người hoặc phiên làm việc |
| `date` | string | có | `YYYY-MM-DD` |
| `verdict` | enum | có | `AP_DUNG` \| `AP_DUNG_CO_DIEU_KIEN` \| `TRA_LAI_KHAO_CUU` \| `TU_CHOI` |
| `summary` | string | có | Lý do kết luận, 1–3 câu |

### `scores[]` — chấm điểm 7 trục

Đủ 7 phần tử, mỗi phần tử `{ axis, score, evidence }`. `axis` nhận đúng các giá trị:

| `axis` | Trục |
|---|---|
| `nguon` | Chất lượng nguồn |
| `truyvet` | Truy vết luận điểm |
| `chinhxac` | Độ chính xác dữ liệu |
| `hinhanh` | Hình ảnh |
| `phandinh` | Phân định sự thật / truyền tụng |
| `giongvan` | Giọng văn & trung lập |
| `kythuat` | Tính kỹ thuật |

`score` là số nguyên 0–5. `evidence` bắt buộc — điểm số không có bằng chứng là điểm vô nghĩa.
`totalScore` nếu ghi thì phải khớp tổng, lệch là lỗi.

### `sourceChecks[]` — kiểm từng nguồn

`{ code, url, status, containsClaim, recheckedWith, note }`

- `status`: `OK` | `CHUYEN_HUONG` | `CHET` | `PROXY_CHAN`.
- `containsClaim` (bắt buộc, boolean): nguồn **có thật sự chứa** luận điểm được gán cho nó không. Đây
  là câu hỏi quan trọng hơn cả việc link còn sống.
- `PROXY_CHAN` bắt buộc kèm `recheckedWith` (ví dụ `"WebFetch"`) và kết quả kiểm lại trong `note` —
  proxy chặn không phải là nguồn chết, không được kết luận thay.

Chạy trước: `node .claude/skills/marian-audit/scripts/check-sources.mjs --file docs/khao-cuu/<id>/khao-cuu.json`
(lệnh nhận thẳng hồ sơ khảo cứu và in kèm mã nguồn `[S1]`, `[S2]`).

### `claimChecks[]` — đối chiếu luận điểm

`{ claim, sources[], result, note }` với `result` là `dat` | `sua` | `bo`. Không có mức "tạm chấp nhận".

### `crossChecks[]` — kiểm chéo độc lập

`{ title, url, finding }` — nguồn do chính người kiểm chứng tự tìm, không lấy từ báo cáo. Đây là phần
phân biệt một lượt audit thật với một lượt đọc lại báo cáo.

### `imageChecks[]`

`{ file, licenseVerified, license, subjectMatches, aiSignals[], result, note }`, `result` là `duyet`
hoặc `loai`. Hai ràng buộc cứng: không được `duyet` khi `licenseVerified` khác `true`, và không được
`duyet` khi `aiSignals` còn phần tử nào.

### `issues[]`

`{ level, issue, where, fix }` với `level` là `chan` | `nang` | `nhe`. Còn bất kỳ mục `chan` nào mà
`verdict` là `AP_DUNG` thì hồ sơ bị báo lỗi.

### `conditions[]`

Bắt buộc khi `verdict` là `AP_DUNG_CO_DIEU_KIEN`. Viết thành câu lệnh cụ thể, làm được ngay:

> "Sửa 'Tượng cao 3m' thành 'Tượng cao khoảng 3m' trong historicalFact theo nguyên văn nguồn [S2]"

chứ không phải "cần cẩn thận hơn với con số". `marian-publish` thực hiện đúng danh sách này, không
diễn giải thêm.

### `approved` — phạm vi được phép đưa lên

| Khoá | Kiểu | Ghi chú |
|---|---|---|
| `fields[]` | array | Tên trường được duyệt; phải nằm trong `fields[]` của hồ sơ khảo cứu |
| `sources[]` | array | Mã nguồn đưa vào dữ liệu; tối thiểu 2 khi cho phép triển khai |
| `images[]` | array | Tên file ảnh được duyệt; `[]` nghĩa là giữ `realImage: null` |
| `constellation` | boolean | Có cho phép sửa `CONSTELLATION_VERSIONS` không |

Đây là phần `marian-publish` đọc bằng máy. Trường nào không có tên trong `approved.fields` thì không
được đụng tới, kể cả khi hồ sơ khảo cứu có đề xuất.

### `impact`

Đối tượng tự do ghi ảnh hưởng hệ thống: số lượng linh địa, chòm sao, số assertion `npm test`, tài
liệu phải cập nhật. In thẳng vào báo cáo và phiếu thi công.
