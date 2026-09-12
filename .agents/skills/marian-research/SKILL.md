---
name: marian-research
description: Khảo cứu, tìm kiếm và thu thập tư liệu, chuyện kể, hình ảnh về một linh đài / tượng đài / trung tâm hành hương Đức Mẹ tại Việt Nam, rồi viết báo cáo khảo cứu kèm bản ghi dữ liệu đề xuất cho ducme.vn. Use when researching a new or under-documented Marian shrine, gathering historical sources, folklore and legends, collecting candidate photos, filling gaps in src/data/statues.js, or writing a research report (báo cáo khảo cứu) before any website change. Dùng khi người dùng nói "khảo cứu", "nghiên cứu linh đài", "tìm tư liệu", "tìm ảnh thực địa", "tìm sự tích / giai thoại", "bổ sung thông tin linh địa còn thiếu".
---

<!-- SINH TU DONG tu .claude/skills — dung sua tay file nay, sua ban goc roi chay: npm run sync:agents -->
# Khảo cứu linh đài Đức Mẹ

Giai đoạn 1 trong quy trình ba bước của dự án: **khảo cứu → kiểm chứng → triển khai**.

Nhiệm vụ ở đây là **thu thập và trình bày**, không phải quyết định, cũng không phải tự kiểm duyệt.

## Tinh thần: gom rộng, gắn nhãn kỹ, lọc sau

ducme.vn là dự án **phi lợi nhuận, mục đích khảo cứu và học tập**. Vì thế khảo cứu ở đây không phải
biên tập một cuốn từ điển bách khoa: mục tiêu là dựng lại **toàn bộ bức tranh tư liệu** quanh một
linh địa — gồm cả những mảnh chưa chính thống.

Ba câu để tự nhắc trong suốt quá trình làm:

1. **Thiếu tư liệu tệ hơn tư liệu chưa chắc chắn.** Một trang trắng không giúp được ai. Một chuyện kể
   dân gian được gắn nhãn "tương truyền" thì vừa giữ được tri thức, vừa không lừa ai cả.
2. **Không vứt, chỉ xếp đúng ngăn.** Nguồn yếu không bị loại — nó xuống ngăn khác (`folklore`,
   `imageCandidates`, `leads`). Việc của khảo cứu là xếp, không phải xoá.
3. **Càng ly kỳ càng đáng thu.** Sự tích tượng trôi dạt, chuyện tượng đứng nguyên sau bão, lời kể của
   ông từ giữ đền, cái tên dân gian đặt cho quả đồi — đó chính là thứ người đọc tìm đến. Đừng bỏ qua
   chỉ vì "không có nguồn chính thống": ghi lại, gắn nhãn, và nói rõ nó lưu hành ở đâu.

Đầu ra là **một hồ sơ JSON** (`khao-cuu.json`) — bản gốc duy nhất, máy đọc được, để `marian-audit` và
`marian-publish` dùng tiếp. Báo cáo markdown và HTML cho người đọc đều sinh ra từ hồ sơ đó bằng lệnh
format, không viết tay song song.

**Tuyệt đối không sửa `src/data/statues.js`, không thêm ảnh vào `src/assets/`, không tạo PR.** Đó là
việc của `marian-publish` sau khi `marian-audit` kết luận cho phép.

```
docs/khao-cuu/<id>/khao-cuu.json          <- viết file này (bản gốc)
docs/khao-cuu/<id>/bao-cao-khao-cuu.md    <- sinh ra bằng format-report.mjs
docs/khao-cuu/<id>/bao-cao-khao-cuu.html  <- sinh ra khi chạy với --html
```

## Bốn lằn ranh không được vượt

Ngoài bốn điều này, mọi thứ khác đều nới được — cứ thu thập rồi gắn nhãn.

1. **Không bịa.** Không tự nghĩ ra năm xây dựng, chiều cao tượng, tên kiến trúc sư. Nhưng "không bịa"
   khác "không ghi": chuyện có người kể thì cứ ghi, kèm ai kể và kể ở đâu. Cái cấm là dựng chuyện từ
   hư không, không phải chép lại chuyện đang lưu hành.
2. **Không ảnh AI.** Điều khoản nghiêm ngặt nhất của dự án (`CONTRIBUTING.md` mục 3.1). Không tạo ảnh,
   không dùng ảnh nghi do máy tạo sinh, không dùng ảnh nâng cấp/tô vẽ bằng AI. Đây là lằn ranh duy
   nhất còn lại của phần hình ảnh — mọi yêu cầu khác về ảnh đều đã được nới.
3. **Phân định sự thật và truyền tụng.** `historicalFact` chỉ chứa sự kiện có nguồn cấp A/B. Chuyện
   kể dân gian, giai thoại, sự tích, lời truyền miệng vào `folklore[]` rồi viết vào `oralTradition`,
   luôn mở đầu bằng "Tương truyền", "Theo lời kể", "Người địa phương kể rằng". Không trộn. Nhãn này
   chính là thứ cho phép dự án thoải mái đăng tư liệu chưa chính thống.
4. **Tôn trọng chủ thể.** Tư liệu tôn giáo và lịch sử. Kể chuyện ly kỳ được, nhưng mô tả niềm tin như
   niềm tin — không khẳng định thay người tin, cũng không giễu cợt.

## Quy trình

### Bước 1 — Xác định đối tượng và hiện trạng

```bash
node .agents/skills/marian-research/scripts/site-gaps.mjs            # toàn bộ, xếp theo độ ưu tiên
node .agents/skills/marian-research/scripts/site-gaps.mjs --id <id>  # một linh địa cụ thể
```

Script báo linh địa nào thiếu ảnh, thiếu nguồn trực tiếp, văn xuôi bao nhiêu từ. Nếu id chưa tồn tại,
script báo "linh địa MỚI" — khảo cứu từ đầu.

Đọc thêm `docs/marian-sites-missing-info.md` để biết bối cảnh đã ghi nhận trước đó.

Nếu người dùng chưa chỉ định linh địa nào, đề xuất 2–3 linh địa ưu tiên cao nhất và hỏi họ chọn.

### Bước 2 — Quét rộng trước khi đào sâu

Đọc `references/nguon-tu-lieu.md` — bốn cấp nguồn, các nhóm nguồn nên quét, và một bộ mẫu truy vấn
tiếng Việt khá dài. Nguyên tắc của bước này là **quét cho hết bề rộng trước**, đừng dừng lại ngay khi
tìm được hai nguồn đủ để qua `npm test`.

Một lượt khảo cứu đạt yêu cầu thường chạm được đa số các nhóm sau:

- Trang giáo phận sở tại, giáo xứ, dòng tu · `hdgmvietnam.com` · kỷ yếu, thư chung.
- Wikipedia tiếng Việt và **phần chú thích bên dưới nó** (mỏ nguồn gốc).
- Báo chí: báo Công giáo, báo tỉnh, báo mạng — kể cả bài du lịch.
- Blog hành hương, diễn đàn, trang du lịch, review.
- YouTube, Facebook, TikTok: mô tả video, lời kể trong video, bình luận của người địa phương.
- Google Maps: ảnh và review tại chính điểm đó — nơi hay lộ ra tên gọi dân gian và chuyện kể.
- `web.archive.org` cho trang đã chết, Google Books và thư viện số cho sách cũ.

Cách tìm:

- Tìm cả tên có dấu và không dấu, tên cũ lẫn tên hành chính mới, tên tiếng Pháp/Latinh nếu có.
- Khi hai nguồn mâu thuẫn (thường là niên đại), ghi cả hai vào `conflicts[]`. Không tự chọn một bên
  rồi im lặng.
- Nguồn cấp C (blog, du lịch, diễn đàn) **được trích dẫn**, kể cả đưa vào trường `sources` của dữ
  liệu, miễn là trang còn mở được. Cấp D (mạng xã hội, video, bình luận) thì không đưa thẳng vào dữ
  liệu, nhưng vẫn ghi vào `sources[]` của hồ sơ để chống lưng cho phần `folklore`.

Công cụ: `WebSearch` để tìm, `WebFetch` để đọc. Ghi URL đầy đủ và ngày truy cập ngay lúc đọc.

### Bước 3 — Săn chuyện kể và giai thoại

Đây là bước mới và là bước làm nên giá trị riêng của trang. Đọc `references/tim-chuyen-ke.md`.

Mỗi chuyện thu được ghi vào `folklore[]`: tên chuyện, nội dung kể lại, mô-típ, chuyện lưu hành ở đâu,
mã nguồn, và `veracity` (`chuakiemchung` | `codoichieu` | `dabacbo`).

Đừng tự kiểm duyệt ở bước này. Chuyện nghe hoang đường vẫn ghi — `veracity: "chuakiemchung"` là một
kết quả hợp lệ và phổ biến. Chỉ khi tìm được nguồn cấp A/B **bác bỏ** thì mới đánh `dabacbo`, mà kể
cả thế cũng giữ lại trong hồ sơ để lượt khảo cứu sau khỏi đi tìm lại.

### Bước 4 — Tọa độ

- Lấy `lat`/`lng` của chính linh đài (bệ tượng, đền thánh), không phải tâm xã hay nhà thờ giáo xứ
  cách đó vài km.
- Đối chiếu tối thiểu 2 nguồn (ví dụ toạ độ ghi trên trang giáo phận và vị trí đọc từ bản đồ).
- Làm tròn 4 chữ số thập phân (~11m). Bắt buộc nằm trong khung: `lat` 8.5–23.5, `lng` 102.0–110.0.
- Ghi rõ độ tin cậy của toạ độ: đo chính xác, ước lượng từ ảnh vệ tinh, hay chỉ tương đối.

### Bước 5 — Gom ảnh rộng, lọc sau

Trang có một ảnh chính (`realImage`) và nhiều **ảnh phụ** (`galleryImages[]`). Cách làm là **gom
trước, lọc sau**, đúng nghĩa đen:

**5a. Gom.** Trong lúc đọc tư liệu ở bước 2–3, bài nào có ảnh thì ghi ngay vào `imageCandidates[]`.
Mỗi mục chỉ cần `pageUrl` (trang chứa ảnh) và `note` (ảnh chụp gì) — cố ý để rất nhẹ, gom cho nhanh,
đừng dừng lại cân nhắc. Ảnh bảng ghi công, bia đá, ảnh lễ hội, ảnh cũ đen trắng, ảnh chụp từ xa: gom
hết. Kho này còn giá trị cho cả những lượt khảo cứu sau.

**5b. Lọc.** Xong vòng gom mới quay lại chấm từng ứng viên (`status`: `ungvien` | `chon` | `loai`,
kèm `why`). Ảnh được chọn thì nâng lên `images[]` với đủ trường bắt buộc.

Mỗi ảnh trong `images[]` cần: `file` · `filePage` (URL trang gốc, không phải URL ảnh thô) · `caption`
ghi rõ nguồn · `notAi: true` · `role` (`"chinh"` tối đa 1 ảnh, `"phu"` nhiều tuỳ ý).
`author` nên có nhưng **không chặn** — không rõ thì ghi "Không rõ tác giả" và nói rõ nguồn ở caption.
`license` và `year`: biết thì ghi, không biết thì thôi.

**Quy chuẩn ảnh của dự án — đọc kỹ, đây là chỗ hay bị làm khó quá mức:**

- Cần: nguồn công khai còn mở được + giữ nguyên URL gốc + caption ghi rõ nguồn.
- **Không cần**: giấy phép Creative Commons cụ thể, tên tác giả cá nhân, dấu xác nhận của giáo phận.
- Ảnh từ blog, trang du lịch, báo mạng đều dùng được. Ảnh từ mạng xã hội thì ưu tiên lần ra trang gốc
  ổn định hơn; nếu không có, vẫn được đề xuất kèm ghi chú rằng nguồn có thể biến mất, và nên lưu một
  bản `web.archive.org` làm `filePage` dự phòng.
- Chỉ hai thứ khiến một ảnh bị bỏ hẳn: **nghi do AI tạo sinh**, hoặc **không đúng linh địa đang xét**.

Chưa tìm được ảnh nào đạt thì `images: []` — vẫn là trạng thái hợp lệ. Nhưng khi đó `imageCandidates[]`
và `imageSearchNote` phải cho thấy đã tìm qua những đâu.

### Bước 6 — Viết hồ sơ JSON

Viết `docs/khao-cuu/<id>/khao-cuu.json` theo lược đồ `ducme.khao-cuu/v1`. Đọc
`references/ho-so-khao-cuu.md` để biết từng khoá, và sao chép khung từ
`.agents/skills/_lib/examples/khao-cuu.example.json`.

Sáu phần làm cho tử tế, vì người kiểm chứng làm việc trực tiếp trên chúng:

- `fields[].claims[]` — mỗi khẳng định gắn mã nguồn. Bắt buộc với `historicalFact`, `year`, `lat`,
  `lng`; các trường còn lại nên có.
- `sources[]` — có `code`, `tier` (A/B/C/D), `accessed`, `supports`, `inRecord`. Cấp D không `inRecord`.
- `folklore[]` — chuyện kể, giai thoại, sự tích. Rỗng thì phải giải thích ở `folkloreSearchNote`.
- `imageCandidates[]` — kho ảnh đã gom, kể cả ảnh đã loại.
- `unknowns[]` — những gì không tìm được nguồn. Rỗng sẽ bị cảnh báo: hồ sơ không còn điểm nào chưa
  chắc chắn thường là chưa đào đủ sâu.
- `record` — bản ghi đầy đủ đúng lược đồ `src/data/statues.js` (xem `references/luoc-do-du-lieu.md`).

### Bước 7 — Tự kiểm và sinh báo cáo

```bash
# 1. bản ghi có vượt được ràng buộc mà npm test sẽ kiểm không
node .agents/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/<id>/khao-cuu.json
#    thêm --allow-existing-id nếu là bản cập nhật cho linh địa đã có

# 2. hồ sơ có đúng lược đồ bàn giao không
node .agents/skills/marian-research/scripts/format-report.mjs docs/khao-cuu/<id>/khao-cuu.json --check

# 3. sinh báo cáo markdown (mặc định) và HTML
node .agents/skills/marian-research/scripts/format-report.mjs docs/khao-cuu/<id>/khao-cuu.json --html
```

Dán kết quả bước 1 vào khoá `validation` của hồ sơ. Sửa hết lỗi chặn. Cảnh báo thì đọc kỹ rồi quyết:
phần lớn cảnh báo ở lược đồ này là lời nhắc đào thêm, không phải lỗi — cái nào không xử lý được thì
giải thích trong `selfAssessment.biggestRisk`.

**Không sửa tay vào `bao-cao-khao-cuu.md`.** File đó sinh ra từ JSON; sửa JSON rồi chạy lại lệnh.

### Bước 8 — Bàn giao

Báo cho người dùng: đã khảo cứu xong linh địa nào, tìm được gì (bao nhiêu nguồn, bao nhiêu chuyện kể,
bao nhiêu ảnh ứng viên), còn vướng gì, hồ sơ nằm ở đâu, và bước tiếp theo là `marian-audit`.

Không tự chạy tiếp sang audit trong cùng một lượt trừ khi người dùng yêu cầu rõ.

## Dấu hiệu phải dừng lại và hỏi người dùng

Danh sách này ngắn có chủ ý. Tư liệu mỏng, nguồn yếu, chưa có ảnh — đều **không** phải lý do dừng:
cứ làm tiếp, gắn nhãn đúng, ghi vào `unknowns[]`.

- Không tìm được **bất kỳ** nguồn nào mở được cho linh địa (kể cả cấp C, D) — khả năng cao là nhầm
  tên hoặc nơi này không tồn tại như mô tả.
- Hai nguồn cấp A/B uy tín ngang nhau mâu thuẫn về sự kiện cốt lõi và không có cách phân xử.
- Linh địa có tranh chấp về tính chính thức, hoặc chuyện kể thu được đụng tới vấn đề nhạy cảm
  (chính trị, tranh chấp đất đai, cáo buộc cá nhân còn sống).
