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
| `claims[]` | array | **Bắt buộc** với `historicalFact`, `year`, `lat`, `lng`. Các trường khác nên có (thiếu chỉ bị cảnh báo) |
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
| `tier` | enum | `A` (gốc) \| `B` (thứ cấp đáng tin) \| `C` (tư liệu mở) \| `D` (manh mối thô) |
| `accessed` | string | `YYYY-MM-DD` |
| `supports` | string | Nguồn này chứng minh điều gì |
| `inRecord` | boolean | Có đưa vào trường `sources` của dữ liệu không |

Ràng buộc:

- Tối thiểu 2 nguồn `inRecord: true`.
- Nguồn cấp **C được** `inRecord: true` — thay đổi so với quy ước cũ. Blog hành hương, trang du lịch,
  diễn đàn đều dẫn được, miễn trang còn mở.
- Nguồn cấp **D không được** `inRecord: true` (mạng xã hội, video, bình luận — không có trang gốc ổn
  định). Vẫn ghi vào `sources[]` của hồ sơ với `inRecord: false` để chống lưng cho `folklore[]`.
- Toàn bộ nguồn đưa vào dữ liệu đều là cấp C thì hồ sơ vẫn hợp lệ, chỉ bị **cảnh báo** nhắc tìm thêm
  một nguồn A/B làm trụ cột.
- Khẳng định trong `historicalFact` mà chỉ dựa nguồn cấp C/D sẽ bị cảnh báo: hoặc tìm thêm nguồn A/B,
  hoặc chuyển ý đó xuống `oralTradition` / `folklore` kèm nhãn "tương truyền".

Xem [`nguon-tu-lieu.md`](nguon-tu-lieu.md) mục 1 để biết bảng bốn cấp đầy đủ.

### `imageCandidates[]` — kho ảnh gom rộng

Ghi trong lúc đọc tư liệu, **trước** khi lọc. Cố ý để rất nhẹ để gom cho nhanh.

| Khoá | Bắt buộc | Ghi chú |
|---|---|---|
| `pageUrl` | có | URL trang chứa ảnh (không phải URL ảnh thô) |
| `note` | nên có | Ảnh chụp gì, vì sao đáng để ý |
| `source` | không | Tên trang / toà soạn |
| `status` | không | `ungvien` (mặc định) \| `chon` \| `loai` |
| `why` | không | Lý do chọn hoặc loại, điền ở vòng lọc |

Kho này giữ lại cả ảnh đã loại — để lượt khảo cứu sau không đi tìm lại đúng con đường cũ.

### `images[]` — ảnh đề xuất

Mảng rỗng `[]` là hợp lệ. Mỗi phần tử **bắt buộc** có: `file`, `filePage` (trang gốc còn mở được,
không phải URL ảnh thô), `caption` (ghi rõ nguồn), `notAi: true`, và `role`.

`author` **nên** có nhưng không chặn — không rõ thì ghi `"Không rõ tác giả"` và nói rõ nguồn ở
caption. `license`, `year`, `content` đều tuỳ chọn.

Quy chuẩn ảnh của dự án gồm đúng ba điều: **nguồn công khai còn mở được · giữ nguyên URL gốc · caption
ghi rõ nguồn**. Không đòi giấy phép Creative Commons cụ thể, không đòi tên tác giả cá nhân, không đòi
dấu xác nhận của giáo phận. Hai thứ duy nhất khiến một ảnh bị bỏ hẳn: nghi do AI tạo sinh, hoặc không
đúng linh địa đang xét.

`role` quyết định ảnh đó đổ vào trường nào của `record`:

| `role` | Đổ vào | Số lượng |
|---|---|---|
| `"chinh"` | `record.realImage` + `record.realImageCaption` | Tối đa 1 ảnh mỗi hồ sơ |
| `"phu"` | một phần tử của `record.galleryImages[]` | 0 hoặc nhiều |

Không dừng lại ở một ảnh: nếu tìm được thêm ảnh phụ hợp lệ (nguồn công khai, đúng linh địa), cứ đề
xuất thêm — mỗi ảnh phụ vẫn cần đủ các trường bắt buộc như ảnh chính, không có tiêu chuẩn thấp hơn.
Ví dụ, một ảnh lấy từ trang tin giáo phận không ghi giấy phép Creative Commons cụ thể vẫn hợp lệ:

```json
{
  "file": "anh-phu-trang-giao-phan.jpg",
  "filePage": "https://giaophanvidu.org/tin-tuc/le-khanh-thanh-linh-dai.html",
  "author": "Ban Truyền thông Giáo phận Ví Dụ",
  "content": "Toàn cảnh khuôn viên linh đài nhìn từ cổng vào",
  "caption": "Toàn cảnh khuôn viên linh đài ... (Nguồn: Trang tin Giáo phận Ví Dụ, đăng 2022)",
  "notAi": true,
  "role": "phu"
}
```

Khi không đề xuất được ảnh nào (kể cả ảnh phụ), ghi `imageSearchNote` cho biết đã tìm qua những đâu —
xem `references/nguon-tu-lieu.md` mục "Với ảnh" để biết đầy đủ các nguồn nên thử trước khi kết luận
không có ảnh.

### `folklore[]` — chuyện kể, giai thoại, sự tích

Phần tư liệu "ly kỳ" mà người đọc tìm đến nhiều nhất. Hướng dẫn đầy đủ ở
[`tim-chuyen-ke.md`](tim-chuyen-ke.md).

| Khoá | Bắt buộc | Ghi chú |
|---|---|---|
| `title` | có | Đặt tên cho chuyện kể |
| `story` | có | Kể lại nội dung, giữ chi tiết cụ thể |
| `veracity` | có | `chuakiemchung` \| `codoichieu` \| `dabacbo` |
| `sources[]` | có | Mã nguồn, **cấp C và D đều được** — chỉ cần có chỗ để người khác đọc lại |
| `motif` | nên có | Mô-típ dân gian, xem bảng mô-típ trong `tim-chuyen-ke.md` |
| `spread` | nên có | Chuyện lưu hành ở đâu (truyền miệng, blog, báo mạng, video) |
| `note` | không | Lưu ý khi viết vào `oralTradition` |

`chuakiemchung` là kết quả bình thường và phổ biến nhất, **không** phải thất bại: chuyện vẫn được
đăng, chỉ cần `oralTradition` mở đầu bằng nhãn truyền tụng. `dabacbo` là chuyện có nguồn A/B nói
ngược lại — giữ trong hồ sơ làm ghi chú, không đưa lên website.

Mảng rỗng `[]` hợp lệ, nhưng khi đó phải ghi `folkloreSearchNote` cho biết đã tìm qua những đâu.

### `leads[]` — manh mối chưa lần hết

Mảng chuỗi, hoặc `{ lead, where, why }`. Nơi ghi những sợi dây còn bỏ ngỏ: một kỷ yếu được nhắc tới
mà chưa tìm ra bản số hoá, một chi tiết nghe được ở phút 12:30 của video, một ảnh cũ trên nhóm
Facebook cần hỏi người đăng. Tuỳ chọn, nhưng là thứ làm lượt khảo cứu sau nhanh hơn hẳn.

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
