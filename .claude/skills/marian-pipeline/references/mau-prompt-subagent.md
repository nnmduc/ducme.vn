# Mẫu prompt cho subagent

Ba khung dưới đây là prompt gửi kèm tool `Agent` (`subagent_type: "general-purpose"`). Thay phần trong
`<...>` rồi gửi nguyên văn. Đừng rút gọn: mỗi mục đều có lý do.

Nguyên tắc chung khi viết prompt:

- **Không truyền lịch sử hội thoại.** Subagent chỉ biết những gì viết trong prompt. Đó là chủ ý — nó
  phải tự đọc hồ sơ trên đĩa, không được thừa hưởng kết luận của bước trước.
- **Đường dẫn tuyệt đối hoặc tính từ gốc dự án**, không viết "tìm quanh repo".
- **Nói rõ file nào được sửa.** Bước nào cũng có danh sách đóng.
- Luôn kết bằng khối `Status:` để điều phối đọc được kết quả.

Khối môi trường dán vào cuối mọi prompt:

```
## Môi trường
- Thư mục làm việc: /Users/duc/Projects/peter/tuong-duc-me
- Node >= 20.11, chạy script bằng `node`, không cần cài thêm gói
- Hệ điều hành: darwin · Múi giờ: Asia/Saigon
- Không spawn thêm subagent. Làm trực tiếp.
```

---

## 1. Khảo cứu — chế độ `moi`

```
Đọc .claude/skills/marian-research/SKILL.md và làm đúng theo đó.

## Việc phải làm
Khảo cứu linh địa "<tên>" (mã: <id>) cho website ducme.vn, từ đầu.

## Được đọc
- .claude/skills/marian-research/SKILL.md và toàn bộ references/ của nó
- .claude/skills/_lib/examples/khao-cuu.example.json (khung sao chép)
- docs/marian-sites-missing-info.md
- src/data/statues.js (tham chiếu lược đồ, KHÔNG sửa)
- WebSearch / WebFetch để tìm và đọc nguồn

## Được ghi (ngoài danh sách này thì không đụng tới file nào)
- docs/khao-cuu/<id>/khao-cuu.json
- docs/khao-cuu/<id>/bao-cao-khao-cuu.md và .html (sinh bằng lệnh, không viết tay)
- docs/khao-cuu/<id>/anh/ (ảnh ứng viên tải về, nếu có)

## Xong việc nghĩa là
1. `node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/<id>/khao-cuu.json` không còn lỗi chặn
   (thêm --allow-existing-id nếu đây là bản cập nhật cho linh địa đã có trong dữ liệu)
2. `node .claude/skills/marian-research/scripts/format-report.mjs docs/khao-cuu/<id>/khao-cuu.json --check` sạch
3. `node .claude/skills/marian-research/scripts/format-report.mjs docs/khao-cuu/<id>/khao-cuu.json --html` đã chạy

## Ràng buộc
- Không sửa src/data/statues.js, không thêm ảnh vào src/assets/, không tạo nhánh, không commit, không tạo PR.
- Không tự kiểm chứng rồi tự kết luận — việc đó của bước sau, một agent khác.
- Bốn lằn ranh trong SKILL.md là tuyệt đối: không bịa, không ảnh AI, phân định sự thật với truyền tụng,
  tôn trọng chủ thể.
- Gặp một trong ba tình huống "phải dừng lại và hỏi người dùng" ở cuối SKILL.md: DỪNG, trả về BLOCKED
  kèm lý do. Không tự quyết thay người dùng.

<khối môi trường>

## Kết thúc bằng
Status: DONE | DONE_WITH_CONCERNS | BLOCKED | NEEDS_CONTEXT
Summary: tìm được bao nhiêu nguồn, bao nhiêu chuyện kể, bao nhiêu ảnh, còn vướng gì
Concerns/Blockers: nếu có
```

## 1b. Khảo cứu — chế độ `bosung` (sau khi bị TRẢ LẠI)

Giống khung trên, thay mục "Việc phải làm" và thêm mục yêu cầu:

```
## Việc phải làm
SỬA BỔ SUNG hồ sơ khảo cứu đã có của "<tên>" (mã: <id>). Kiểm chứng độc lập đã trả lại hồ sơ này.
Sửa đúng những điểm dưới đây trên hồ sơ hiện có — KHÔNG viết lại từ đầu, không xoá phần đã đạt.

## Kiểm chứng yêu cầu bổ sung
<dán nguyên mảng blocking[] mà run-state.mjs next trả về>

## Đọc thêm để hiểu ngữ cảnh
- docs/khao-cuu/<id>/khao-cuu.json (hồ sơ đang sửa)
- <đường dẫn kiem-chung.vong<N>.json đã lưu trữ> (báo cáo trả lại, đọc mục issues và conditions)
```

Mục "Xong việc nghĩa là" thêm một dòng:

```
4. Mọi điểm trong danh sách trên đều đã xử lý, hoặc được giải thích rõ trong unknowns[] /
   selfAssessment.biggestRisk vì sao không xử lý được.
```

## 1c. Khảo cứu — chế độ `sualuocdo`

```
## Việc phải làm
Hồ sơ docs/khao-cuu/<id>/khao-cuu.json sai lược đồ ducme.khao-cuu/v1. Sửa cho đúng lược đồ.
Chỉ sửa cấu trúc, không đổi nội dung tư liệu đã thu thập được.

## Lỗi cần sửa
<dán nguyên mảng blocking[]>

## Đọc
- .claude/skills/marian-research/references/ho-so-khao-cuu.md (lược đồ đầy đủ)
- .claude/skills/_lib/examples/khao-cuu.example.json
```

---

## 2. Kiểm chứng

```
Đọc .claude/skills/marian-audit/SKILL.md và làm đúng theo đó.

## Việc phải làm
Kiểm chứng ĐỘC LẬP hồ sơ khảo cứu của linh địa "<tên>" (mã: <id>).

Bạn là người gác cổng, không phải người phụ khảo cứu. Giả định mặc định: báo cáo có thể sai.
Bạn KHÔNG biết người khảo cứu đã suy nghĩ gì — và không cần biết. Chỉ có hồ sơ trên đĩa là bằng chứng.

## Được đọc
- docs/khao-cuu/<id>/khao-cuu.json (đọc thẳng JSON, không đọc bản markdown đã render)
- .claude/skills/marian-audit/SKILL.md và references/tieu-chi-kiem-chung.md, references/ho-so-kiem-chung.md
- .claude/skills/_lib/examples/kiem-chung.example.json
- src/data/statues.js (đối chiếu trùng lặp và ràng buộc, KHÔNG sửa)
- WebSearch / WebFetch để tự tìm nguồn độc lập

## Được ghi (ngoài danh sách này thì không đụng tới file nào)
- docs/khao-cuu/<id>/kiem-chung.json
- docs/khao-cuu/<id>/bao-cao-kiem-chung.md và .html (sinh bằng lệnh)

## Xong việc nghĩa là
1. Đã chạy `node .claude/skills/marian-audit/scripts/check-sources.mjs --file docs/khao-cuu/<id>/khao-cuu.json`
2. Đã chạy `node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/<id>/khao-cuu.json`
3. Đã MỞ TỪNG URL nguồn và đối chiếu từng luận điểm — không tin phần tóm tắt của báo cáo
4. Đã tự tìm ít nhất một nguồn độc lập cho mỗi khẳng định cốt lõi (năm, tên tượng, giáo phận, toạ độ)
5. Đã kiểm từng ảnh trong images[] bằng check-image.mjs và mở filePage của từng ảnh
6. kiem-chung.json có đủ 8 trục điểm, kết luận là đúng một trong: AP_DUNG, AP_DUNG_CO_DIEU_KIEN,
   TRA_LAI_KHAO_CUU, TU_CHOI
7. `node .claude/skills/marian-audit/scripts/format-audit.mjs docs/khao-cuu/<id>/kiem-chung.json --check` sạch
8. `... --html` đã chạy

## Ràng buộc
- Không sửa hồ sơ khảo cứu. Sai thì kết luận TRẢ LẠI, không tự tay vá.
- Không sửa src/data/statues.js, không commit, không tạo PR.
- Kết luận AP_DUNG_CO_DIEU_KIEN bắt buộc liệt kê chính xác từng điểm phải sửa trong conditions[] —
  bước triển khai làm đúng danh sách đó, không diễn giải thêm.
- approved[] là hợp đồng máy đọc: trường nào không có tên trong đó thì bước sau không được đụng tới.
- Đừng loại chuyện kể chỉ vì "không có nguồn chính thống", đừng loại ảnh chỉ vì thiếu giấy phép cụ thể.
  Hai lý do duy nhất loại ảnh: nghi do AI tạo sinh, hoặc sai linh địa.

<khối môi trường>

## Kết thúc bằng
Status: DONE | DONE_WITH_CONCERNS | BLOCKED | NEEDS_CONTEXT
Summary: kết luận là gì, mấy điểm, lý do trong một câu
Concerns/Blockers: nếu có
```

Chế độ `sualuocdo`: giữ nguyên khung, đổi "Việc phải làm" thành sửa `kiem-chung.json` cho đúng lược đồ
`ducme.kiem-chung/v1` và khớp hồ sơ khảo cứu, kèm danh sách lỗi `blocking[]`. Không đổi kết luận đã
chấm trừ khi chính lỗi lược đồ bắt buộc phải đổi.

---

## 3. Triển khai

```
Đọc .claude/skills/marian-publish/SKILL.md và làm đúng theo đó.

## Việc phải làm
Triển khai kết quả đã được kiểm chứng của linh địa "<tên>" (mã: <id>) lên website.
Kết luận kiểm chứng: <AP_DUNG | AP_DUNG_CO_DIEU_KIEN>.

## Bắt buộc làm trước mọi thứ
node .claude/skills/marian-publish/scripts/read-handoff.mjs <id> --html

Thoát khác 0 thì DỪNG NGAY, trả về BLOCKED. Không tự khảo cứu bù, không tự duyệt.
Từ đó trở đi PHIẾU THI CÔNG là toàn bộ phạm vi công việc.

## Điều kiện bắt buộc kèm theo
<dán nguyên conditions[] mà run-state.mjs next trả về, hoặc "không có">

## Được ghi
- src/data/statues.js (chỉ những trường có tên trong phiếu thi công)
- src/assets/real_photos/ (chỉ ảnh được duyệt trong phiếu)
- docs/marian-sites-missing-info.md (cập nhật lại bảng của linh địa này)
- README.md và docs/*.md nếu số lượng bài kiểm thử đổi
- docs/khao-cuu/<id>/ (báo cáo và nhật ký sinh ra)

## Xong việc nghĩa là
1. `npm test` PASS toàn bộ, 0 FAIL
2. `npm run build` dựng thành công
3. Đã chạy `node .claude/skills/marian-pipeline/scripts/format-run.mjs <id> --html` NGAY TRƯỚC `git add`
   (nếu không, nhật ký trong commit sẽ thiếu bước cuối)
4. Đã commit theo Conventional Commits, tiếng Việt không dấu, gồm cả docs/khao-cuu/<id>/
5. <nếu tạo PR: đã push và mở PR theo .github/pull_request_template.md>
   <nếu --no-pr: dừng ở commit trên nhánh, KHÔNG push, KHÔNG tạo PR>

## Ràng buộc
- Không đưa lên nội dung không có trong phiếu thi công, kể cả khi thấy hồ sơ khảo cứu có đề xuất.
- Không bao giờ sửa tests/test_data_and_integrity.js để test xanh.
- Không tự merge Pull Request.
- realImage: null là giá trị hợp lệ khi kiểm chứng không duyệt ảnh nào — không phải chỗ trống cần lấp.
- Chỉ viết vào oralTradition những chuyện có tên trong approved.folklore, mỗi ý mở đầu bằng nhãn
  truyền tụng.
- Test đỏ mà không sửa được bằng cách chỉnh dữ liệu cho đúng chuẩn: DỪNG, trả về BLOCKED.

<khối môi trường>

## Kết thúc bằng
Status: DONE | DONE_WITH_CONCERNS | BLOCKED | NEEDS_CONTEXT
Summary: đã sửa gì, test bao nhiêu assertion, nhánh nào, PR nào
Concerns/Blockers: nếu có
```
