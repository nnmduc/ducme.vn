<!-- SINH TU DONG tu .claude/skills — dung sua tay file nay, sua ban goc roi chay: npm run sync:agents -->

# Bộ skill nội dung — ducme.vn

Ba skill chuyên môn nối thành một quy trình khép kín để đưa tư liệu về một linh đài Đức Mẹ lên
website, có hồ sơ truy vết ở từng bước — cộng một skill điều phối chạy trọn cả ba bằng một lệnh.

```
                        marian-pipeline
          (điều phối: một lệnh, chạy hết, không cần người can thiệp)
                               │
        ┌──────────────────────┼──────────────────────┐
        v                      v                      v
marian-research  →  marian-audit  →  marian-publish
  khảo cứu           kiểm chứng        triển khai
  thu thập           chấm điểm         sửa dữ liệu
  viết báo cáo       ra kết luận       chạy test, tạo PR
```

Ba skill dưới chạy được độc lập từng cái một. `marian-pipeline` là lớp điều phối phía trên: nó gọi cả
ba theo đúng thứ tự, **mỗi bước một subagent với ngữ cảnh riêng**, và rẽ nhánh theo kết luận kiểm
chứng — duyệt thì triển khai, trả lại thì khảo cứu bổ sung rồi kiểm chứng lại, từ chối thì dừng.

| Skill | Đầu vào | Đầu ra | Được phép sửa mã nguồn? |
|---|---|---|---|
| `marian-research` | tên linh địa, hoặc danh sách thiếu tư liệu | `khao-cuu.json` + báo cáo md/html | Không |
| `marian-audit` | `khao-cuu.json` | `kiem-chung.json` + báo cáo md/html | Không |
| `marian-publish` | cả hai hồ sơ JSON | commit + Pull Request | Có |
| `marian-pipeline` | tên/mã linh địa | `quy-trinh.json` + nhật ký md/html | Không (giao subagent làm) |

Tách vai trò là chủ ý: người viết báo cáo không được tự duyệt báo cáo của mình, và người triển khai
chỉ thi công đúng phần đã duyệt.

## Hợp đồng dữ liệu giữa các skill

Bàn giao bằng **JSON**, không bằng văn xuôi. Mỗi skill đọc được đầu ra của skill trước bằng máy, nên
không có chỗ cho việc đoán ý: trường nào được duyệt, nguồn nào được dùng, ảnh nào bị loại đều là dữ
liệu có cấu trúc, kiểm được bằng lệnh.

```
khao-cuu.json  ──(validate + đối chiếu chéo)──>  kiem-chung.json  ──(gộp)──>  phiếu thi công
  schema: ducme.khao-cuu/v1                        schema: ducme.kiem-chung/v1
```

Báo cáo cho người đọc **sinh ra từ** hồ sơ JSON bằng lệnh format — markdown mặc định, thêm `--html`
thì có bản HTML tự chứa (không cần mạng, in ra giấy được). Không sửa tay vào file `.md`: sửa JSON rồi
chạy lại lệnh.

Lược đồ đầy đủ: `marian-research/references/ho-so-khao-cuu.md` và
`marian-audit/references/ho-so-kiem-chung.md`. Bản mẫu sao chép được: `_lib/examples/`.

## Nơi lưu hồ sơ

```
docs/khao-cuu/<id>/
├── khao-cuu.json             # marian-research viết — BẢN GỐC
├── bao-cao-khao-cuu.md       # sinh ra từ khao-cuu.json
├── bao-cao-khao-cuu.html     # sinh ra khi chạy với --html
├── kiem-chung.json           # marian-audit viết — BẢN GỐC
├── bao-cao-kiem-chung.md     # sinh ra từ kiem-chung.json
├── bao-cao-kiem-chung.html   # sinh ra khi chạy với --html
├── phieu-thi-cong.md         # sinh ra từ cả hai, cho marian-publish
├── quy-trinh.json            # marian-pipeline viết — BẢN GỐC của lượt chạy tự động
├── nhat-ky-quy-trinh.md      # sinh ra từ quy-trinh.json
└── anh/                      # ảnh ứng viên đã tải về (nếu có)
```

Khi một vòng kiểm chứng bị trả lại, hồ sơ kiểm chứng vòng đó được giữ lại thành
`kiem-chung.vong<N>.json` (kèm báo cáo cùng tên) — bằng chứng của vòng cũ, không còn là hồ sơ hiện hành.

## Công cụ

```bash
# hiện trạng tư liệu của toàn bộ / một linh địa
node .agents/skills/marian-research/scripts/site-gaps.mjs [--id <id>] [--json]

# kiểm bản ghi đề xuất theo đúng ràng buộc mà npm test sẽ kiểm
# (nhận cả hồ sơ khao-cuu.json lẫn bản ghi trần)
node .agents/skills/marian-publish/scripts/validate-record.mjs <file.json> [--allow-existing-id]

# kiểm URL nguồn còn sống, đúng nội dung, không phải link tìm kiếm
node .agents/skills/marian-audit/scripts/check-sources.mjs --id <id> | --file <file.json> [--offline]

# kiểm kỹ thuật ảnh, bắt dấu hiệu ảnh do máy tạo sinh
node .agents/skills/marian-audit/scripts/check-image.mjs <ảnh...>
```

# chay tron quy trinh bang mot lenh (dieu phoi, spawn subagent cho tung buoc)
node .agents/skills/marian-pipeline/scripts/run-state.mjs next <id> --json
```

### Sinh báo cáo

Ba lệnh format dùng chung một bộ tuỳ chọn: `--html [đường dẫn]`, `--stdout`, `--out-dir <thư mục>`,
`--check` (chỉ kiểm hồ sơ), `--json` (riêng `read-handoff`), `--quiet`.

```bash
# khảo cứu -> bao-cao-khao-cuu.md (+ .html)
node .agents/skills/marian-research/scripts/format-report.mjs docs/khao-cuu/<id>/khao-cuu.json --html

# kiểm chứng -> bao-cao-kiem-chung.md (+ .html)
node .agents/skills/marian-audit/scripts/format-audit.mjs docs/khao-cuu/<id>/kiem-chung.json --html

# gộp hai hồ sơ -> phiếu thi công cho marian-publish
node .agents/skills/marian-publish/scripts/read-handoff.mjs <id> --html

# nhat ky mot luot chay tu dong -> nhat-ky-quy-trinh.md (+ .html)
node .agents/skills/marian-pipeline/scripts/format-run.mjs <id> --html
```

Toàn bộ script chạy bằng Node có sẵn (>= 20.11), không cần cài thêm gói. `check-image.mjs` đọc thêm
kích thước ảnh nếu đã có `sharp` (chạy `npm install`).

## Hai runtime, một bản gốc

Bộ skill này chạy trên cả Claude Code (`.agents/skills/`) và Antigravity (`.agents/skills/`). Bản gốc
duy nhất là `.claude/skills`; thư mục của Antigravity **sinh ra bằng lệnh**, khác bản gốc đúng một
thứ: đường dẫn lệnh trong tài liệu trỏ về thư mục của chính nó để copy-paste chạy được ngay.

```bash
npm run sync:agents         # sinh lai ban sao cho Antigravity
npm run sync:agents:check   # kiem xem ban sao con khop ban goc khong (thoat 1 neu lech)
```

Sửa skill thì sửa trong `.agents/skills/` rồi chạy lệnh trên. **Không sửa tay file nào trong
`.agents/skills/`** — mỗi file ở đó đều có dòng banner nhắc điều này, và lần sinh sau sẽ ghi đè.
Lệnh cũng xoá file thừa, nên đổi tên hay bỏ bớt file ở bản gốc đều theo sang.

### Thư mục `_lib/`

Mã dùng chung, không phải skill: `bundle.mjs` (lược đồ + kiểm hợp lệ + gộp phiếu thi công),
`html.mjs` (markdown sang HTML tự chứa), `cli.mjs` (tuỳ chọn dòng lệnh dùng chung),
`examples/` (hai file JSON mẫu sao chép được).

## Ba nguyên tắc xuyên suốt

1. **Không bịa.** Mọi câu trên website phải truy được về một nguồn công khai mở được. "Không bịa" khác
   "không ghi": chuyện có người kể thì cứ ghi, kèm ai kể và kể ở đâu.
2. **Không ảnh do máy tạo sinh.** Chưa có ảnh thật thì để trống — đó là trạng thái hợp lệ.
3. **Phân định sự thật lịch sử và truyền tụng dân gian.** Hai trường dữ liệu riêng, không trộn lẫn.
   Chính cái nhãn này là thứ cho phép dự án thoải mái thu thập và đăng tư liệu chưa chính thống.

## Gom rộng, gắn nhãn kỹ, lọc sau

ducme.vn là dự án **phi lợi nhuận, phục vụ khảo cứu và học tập**. Bộ skill được chỉnh theo hướng thu
thập rộng thay vì siết chặt:

| Nguồn / tư liệu | Trước | Nay |
|---|---|---|
| Blog hành hương, trang du lịch, diễn đàn (cấp C) | chỉ là manh mối, không được dẫn | **dẫn được**, kể cả vào trường `sources` của dữ liệu |
| Mạng xã hội, video, bình luận (cấp D) | không ghi nhận | ghi vào hồ sơ để chống lưng `folklore`, không vào dữ liệu |
| Chuyện kể, sự tích, giai thoại | rải rác trong `oralTradition` | có hẳn `folklore[]` với `veracity`, `motif`, `spread` |
| Ảnh thiếu giấy phép Creative Commons | hay bị loại | **không phải lý do loại** |
| Ảnh nhặt được trong lúc đọc | mất luôn | vào kho `imageCandidates[]`, lọc ở vòng sau |
| Manh mối chưa lần hết | mất luôn | vào `leads[]` cho lượt khảo cứu sau |

Hai thứ vẫn tuyệt đối không được: **ảnh do AI tạo sinh**, và **truyền tụng viết như sự thật lịch sử**.
