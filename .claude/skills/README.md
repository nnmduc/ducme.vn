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
| `marian-research` | tên linh địa, hoặc danh sách thiếu tư liệu | `bao-cao-khao-cuu.md` + `de-xuat-du-lieu.json` | Không |
| `marian-audit` | báo cáo khảo cứu | `bao-cao-kiem-chung.md` + kết luận | Không |
| `marian-publish` | hai báo cáo trên, kết luận cho phép | commit + Pull Request | Có |

Tách vai trò là chủ ý: người viết báo cáo không được tự duyệt báo cáo của mình, và người triển khai
chỉ thi công đúng phần đã duyệt.

## Nơi lưu hồ sơ

```
docs/khao-cuu/<id>/
├── bao-cao-khao-cuu.md     # marian-research viết
├── de-xuat-du-lieu.json    # bản ghi đề xuất, dạng JSON
├── bao-cao-kiem-chung.md   # marian-audit viết
└── anh/                    # ảnh ứng viên kèm ghi chú giấy phép (nếu có)
```

## Công cụ

```bash
# hiện trạng tư liệu của toàn bộ / một linh địa
node .claude/skills/marian-research/scripts/site-gaps.mjs [--id <id>] [--json]

# kiểm bản ghi đề xuất theo đúng ràng buộc mà npm test sẽ kiểm
node .claude/skills/marian-publish/scripts/validate-record.mjs <file.json> [--allow-existing-id]

# kiểm URL nguồn còn sống, đúng nội dung, không phải link tìm kiếm
node .claude/skills/marian-audit/scripts/check-sources.mjs --id <id> | --file <file.json> [--offline]

# kiểm kỹ thuật ảnh, bắt dấu hiệu ảnh do máy tạo sinh
node .claude/skills/marian-audit/scripts/check-image.mjs <ảnh...>
```

Toàn bộ script chạy bằng Node có sẵn (>= 20.11), không cần cài thêm gói. `check-image.mjs` đọc thêm
kích thước ảnh nếu đã có `sharp` (chạy `npm install`).

## Ba nguyên tắc xuyên suốt

1. **Không bịa.** Mọi câu trên website phải truy được về một nguồn công khai kiểm chứng được.
2. **Không ảnh do máy tạo sinh.** Chưa có ảnh thật thì để trống — đó là trạng thái hợp lệ.
3. **Phân định sự thật lịch sử và truyền tụng dân gian.** Hai trường dữ liệu riêng, không trộn lẫn.
