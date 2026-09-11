# Bộ skill nội dung — ducme.vn

Ba skill nối thành một quy trình khép kín để đưa tư liệu về một linh đài Đức Mẹ lên website, có hồ sơ
truy vết ở từng bước.

```
marian-research  →  marian-audit  →  marian-publish
  khảo cứu           kiểm chứng        triển khai
  thu thập           chấm điểm         sửa dữ liệu
  viết báo cáo       ra kết luận       chạy test, tạo PR
```

| Skill | Đầu vào | Đầu ra | Được phép sửa mã nguồn? |
|---|---|---|---|
| `marian-research` | tên linh địa, hoặc danh sách thiếu tư liệu | `khao-cuu.json` + báo cáo md/html | Không |
| `marian-audit` | `khao-cuu.json` | `kiem-chung.json` + báo cáo md/html | Không |
| `marian-publish` | cả hai hồ sơ JSON | commit + Pull Request | Có |

Tách vai trò là chủ ý: người viết báo cáo không được tự duyệt báo cáo của mình, và người triển khai
chỉ thi công đúng phần đã duyệt.

## Hợp đồng dữ liệu giữa ba skill

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
└── anh/                      # ảnh ứng viên kèm ghi chú giấy phép (nếu có)
```

## Công cụ

```bash
# hiện trạng tư liệu của toàn bộ / một linh địa
node .claude/skills/marian-research/scripts/site-gaps.mjs [--id <id>] [--json]

# kiểm bản ghi đề xuất theo đúng ràng buộc mà npm test sẽ kiểm
# (nhận cả hồ sơ khao-cuu.json lẫn bản ghi trần)
node .claude/skills/marian-publish/scripts/validate-record.mjs <file.json> [--allow-existing-id]

# kiểm URL nguồn còn sống, đúng nội dung, không phải link tìm kiếm
node .claude/skills/marian-audit/scripts/check-sources.mjs --id <id> | --file <file.json> [--offline]

# kiểm kỹ thuật ảnh, bắt dấu hiệu ảnh do máy tạo sinh
node .claude/skills/marian-audit/scripts/check-image.mjs <ảnh...>
```

### Sinh báo cáo

Ba lệnh format dùng chung một bộ tuỳ chọn: `--html [đường dẫn]`, `--stdout`, `--out-dir <thư mục>`,
`--check` (chỉ kiểm hồ sơ), `--json` (riêng `read-handoff`), `--quiet`.

```bash
# khảo cứu -> bao-cao-khao-cuu.md (+ .html)
node .claude/skills/marian-research/scripts/format-report.mjs docs/khao-cuu/<id>/khao-cuu.json --html

# kiểm chứng -> bao-cao-kiem-chung.md (+ .html)
node .claude/skills/marian-audit/scripts/format-audit.mjs docs/khao-cuu/<id>/kiem-chung.json --html

# gộp hai hồ sơ -> phiếu thi công cho marian-publish
node .claude/skills/marian-publish/scripts/read-handoff.mjs <id> --html
```

Toàn bộ script chạy bằng Node có sẵn (>= 20.11), không cần cài thêm gói. `check-image.mjs` đọc thêm
kích thước ảnh nếu đã có `sharp` (chạy `npm install`).

### Thư mục `_lib/`

Mã dùng chung, không phải skill: `bundle.mjs` (lược đồ + kiểm hợp lệ + gộp phiếu thi công),
`html.mjs` (markdown sang HTML tự chứa), `cli.mjs` (tuỳ chọn dòng lệnh dùng chung),
`examples/` (hai file JSON mẫu sao chép được).

## Ba nguyên tắc xuyên suốt

1. **Không bịa.** Mọi câu trên website phải truy được về một nguồn công khai kiểm chứng được.
2. **Không ảnh do máy tạo sinh.** Chưa có ảnh thật thì để trống — đó là trạng thái hợp lệ.
3. **Phân định sự thật lịch sử và truyền tụng dân gian.** Hai trường dữ liệu riêng, không trộn lẫn.
