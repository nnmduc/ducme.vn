<!-- SINH TU DONG tu .claude/skills — dung sua tay file nay, sua ban goc roi chay: npm run sync:agents -->

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
node .agents/skills/marian-audit/scripts/format-audit.mjs docs/khao-cuu/<id>/kiem-chung.json --check

# sinh bao-cao-kiem-chung.md
node .agents/skills/marian-audit/scripts/format-audit.mjs docs/khao-cuu/<id>/kiem-chung.json

# sinh thêm bản HTML
node .agents/skills/marian-audit/scripts/format-audit.mjs docs/khao-cuu/<id>/kiem-chung.json --html
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

### `scores[]` — chấm điểm 8 trục

Đủ 8 phần tử, mỗi phần tử `{ axis, score, evidence }`. `axis` nhận đúng các giá trị:

| `axis` | Trục |
|---|---|
| `nguon` | Chất lượng nguồn |
| `truyvet` | Truy vết luận điểm |
| `chinhxac` | Độ chính xác dữ liệu |
| `hinhanh` | Hình ảnh |
| `phandinh` | Phân định sự thật / truyền tụng |
| `giongvan` | Giọng văn & trung lập |
| `kythuat` | Tính kỹ thuật |
| `hapdan` | Sức hấp dẫn & chiều sâu tư liệu |

`score` là số nguyên 0–5, tổng tối đa **40**. `evidence` bắt buộc — điểm số không có bằng chứng là
điểm vô nghĩa. `totalScore` nếu ghi thì phải khớp tổng, lệch là lỗi.

### `sourceChecks[]` — kiểm từng nguồn

`{ code, url, status, containsClaim, recheckedWith, note }`

- `status`: `OK` | `CHUYEN_HUONG` | `CHET` | `PROXY_CHAN`.
- `containsClaim` (bắt buộc, boolean): nguồn **có thật sự chứa** luận điểm được gán cho nó không. Đây
  là câu hỏi quan trọng hơn cả việc link còn sống.
- `PROXY_CHAN` bắt buộc kèm `recheckedWith` (ví dụ `"WebFetch"`) và kết quả kiểm lại trong `note` —
  proxy chặn không phải là nguồn chết, không được kết luận thay.

Chạy trước: `node .agents/skills/marian-audit/scripts/check-sources.mjs --file docs/khao-cuu/<id>/khao-cuu.json`
(lệnh nhận thẳng hồ sơ khảo cứu và in kèm mã nguồn `[S1]`, `[S2]`).

### `claimChecks[]` — đối chiếu luận điểm

`{ claim, sources[], result, note }` với `result` là một trong bốn mức:

| `result` | Nghĩa |
|---|---|
| `dat` | Nguồn chứa đúng luận điểm, giữ nguyên |
| `sua` | Nguồn có nhưng khác câu chữ / con số — sửa cho khớp |
| `chuyentruyentung` | Không kiểm chứng được như sự thật lịch sử, **nhưng không bỏ**: chuyển sang `oralTradition` / `folklore` kèm nhãn "tương truyền" |
| `bo` | Không nguồn nào chống lưng, kể cả ở mức truyền tụng — bỏ hẳn |

Không có mức "tạm chấp nhận". Khi phân vân giữa `bo` và `chuyentruyentung` thì chọn
`chuyentruyentung` — dự án giữ tư liệu truyền tụng, chỉ cần gắn nhãn đúng.

### `crossChecks[]` — kiểm chéo độc lập

`{ title, url, finding }` — nguồn do chính người kiểm chứng tự tìm, không lấy từ báo cáo. Đây là phần
phân biệt một lượt audit thật với một lượt đọc lại báo cáo.

### `imageChecks[]`

`{ file, sourceVerified, license, subjectMatches, aiSignals[], result, note }`, `result` là `duyet`
hoặc `loai`.

Ba ràng buộc cứng: không được `duyet` khi `sourceVerified` khác `true`, khi `aiSignals` còn phần tử
nào, hoặc khi `subjectMatches` là `false`.

`sourceVerified` nghĩa là **trang gốc mở được và đúng nội dung ảnh** (kiểm bằng `check-sources` hoặc
mở tay `filePage`) — không phải xác nhận một loại giấy phép Creative Commons cụ thể, cũng không phải
xác nhận danh tính tác giả. Bản lưu `web.archive.org` của một trang đã gỡ vẫn tính là mở được.
`license` là trường ghi lại nếu biết, **không bắt buộc** và không phải điều kiện để `duyet`.

Loại một ảnh thì ghi `note` nói rõ lý do — người khảo cứu còn biết đường tìm ảnh khác.

### `folkloreChecks[]` — kiểm chuyện kể

`{ title, veracity, labelled, result, note }`. Tuỳ chọn, nhưng hồ sơ khảo cứu có `folklore[]` mà đây
bỏ trống thì bị cảnh báo.

| Khoá | Ghi chú |
|---|---|
| `title` | Khớp `title` trong `folklore[]` của hồ sơ khảo cứu |
| `veracity` | `chuakiemchung` \| `codoichieu` \| `dabacbo` — xác nhận lại hoặc sửa đánh giá của khảo cứu |
| `labelled` | Bản `oralTradition` đề xuất có mở đầu bằng nhãn truyền tụng không |
| `result` | `duyet` hoặc `loai` |
| `note` | Lý do, nhất là khi `loai` |

Ràng buộc cứng: không được `duyet` khi `veracity` là `dabacbo`, và không được `duyet` khi
`labelled: false`. Ngoài hai điều đó, chuyện kể được kiểm rất nhẹ — xem
[`tieu-chi-kiem-chung.md`](tieu-chi-kiem-chung.md) mục D. Không đánh `loai` chỉ vì chuyện nghe khó
tin hoặc không có nguồn chính thống.

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
| `images[]` | array | Tên file ảnh được duyệt (khớp `file` trong `images[]` của hồ sơ khảo cứu, cả ảnh `role: "chinh"` lẫn `"phu"`); `[]` nghĩa là giữ `realImage: null` và `galleryImages: []` |
| `folklore[]` | array | Tiêu đề các chuyện kể được phép viết vào `oralTradition`; phải khớp `title` trong `folklore[]` của hồ sơ khảo cứu và không được là chuyện `dabacbo` |
| `constellation` | boolean | Có cho phép sửa `CONSTELLATION_VERSIONS` không |

Đây là phần `marian-publish` đọc bằng máy. Trường nào không có tên trong `approved.fields` thì không
được đụng tới, kể cả khi hồ sơ khảo cứu có đề xuất.

### `impact`

Đối tượng tự do ghi ảnh hưởng hệ thống: số lượng linh địa, chòm sao, số assertion `npm test`, tài
liệu phải cập nhật. In thẳng vào báo cáo và phiếu thi công.
