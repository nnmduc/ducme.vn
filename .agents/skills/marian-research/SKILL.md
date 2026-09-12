---
name: marian-research
description: Khảo cứu, tìm kiếm và thu thập tư liệu, hình ảnh về một linh đài / tượng đài / trung tâm hành hương Đức Mẹ tại Việt Nam, rồi viết báo cáo khảo cứu kèm bản ghi dữ liệu đề xuất cho ducme.vn. Use when researching a new or under-documented Marian shrine, gathering historical sources or verified photos, filling gaps in src/data/statues.js, or writing a research report (báo cáo khảo cứu) before any website change. Dùng khi người dùng nói "khảo cứu", "nghiên cứu linh đài", "tìm tư liệu", "tìm ảnh thực địa", "bổ sung thông tin linh địa còn thiếu".
---

# Khảo cứu linh đài Đức Mẹ

Giai đoạn 1 trong quy trình ba bước của dự án: **khảo cứu → kiểm chứng → triển khai**.

Nhiệm vụ ở đây là **thu thập và trình bày bằng chứng**, không phải quyết định.

Đầu ra là **một hồ sơ JSON** (`khao-cuu.json`) — bản gốc duy nhất, máy đọc được, để `marian-audit` và
`marian-publish` dùng tiếp mà không phải đoán ý từ văn xuôi. Báo cáo markdown và HTML cho người đọc
đều sinh ra từ hồ sơ đó bằng một lệnh format, không viết tay song song.

**Tuyệt đối không sửa `src/data/statues.js`, không thêm ảnh vào `src/assets/`, không tạo PR.** Đó là
việc của `marian-publish` sau khi `marian-audit` kết luận cho phép.

```
docs/khao-cuu/<id>/khao-cuu.json          <- viết file này (bản gốc)
docs/khao-cuu/<id>/bao-cao-khao-cuu.md    <- sinh ra bằng format-report.mjs
docs/khao-cuu/<id>/bao-cao-khao-cuu.html  <- sinh ra khi chạy với --html
```

## Nguyên tắc không được vi phạm

1. **Không bịa.** Mỗi câu khẳng định trong báo cáo phải gắn với một nguồn cụ thể `[S1]`, `[S2]`...
   Không suy ra năm xây dựng, chiều cao tượng hay tên kiến trúc sư từ suy luận. Không biết thì ghi
   thẳng "chưa tìm được nguồn".
2. **Không ảnh AI.** Đây là điều khoản nghiêm ngặt nhất của dự án (`CONTRIBUTING.md` mục 3.1). Không
   tạo ảnh, không dùng ảnh nghi do máy tạo sinh, không dùng ảnh nâng cấp/tô vẽ bằng AI. Chưa tìm được
   ảnh hợp lệ thì để `realImage: null` — đó là trạng thái chấp nhận được, không phải thiếu sót cần lấp.
3. **Phân định sự thật và truyền tụng.** Sự kiện có nguồn kiểm chứng vào `historicalFact`. Chuyện kể
   dân gian, giai thoại hiện ra, lời truyền miệng vào `oralTradition`. Không trộn lẫn. Không viết
   "tương truyền" trong `historicalFact`.
4. **Tôn trọng chủ thể.** Đây là tư liệu tôn giáo và lịch sử. Giữ giọng văn trung lập, kính trọng,
   mô tả niềm tin như niềm tin chứ không khẳng định thay, cũng không hạ thấp.
5. **Nguồn phải truy cập được.** Link chết, link chỉ mình bạn xem được, hay nguồn không kiểm tra lại
   được thì không tính là nguồn.

## Quy trình

### Bước 1 — Xác định đối tượng và hiện trạng

```bash
node .agents/skills/marian-research/scripts/site-gaps.mjs            # toàn bộ, xếp theo độ ưu tiên
node .agents/skills/marian-research/scripts/site-gaps.mjs --id <id>  # một linh địa cụ thể
```

Script báo linh địa nào thiếu ảnh, thiếu nguồn trực tiếp, văn xuôi bao nhiêu từ. Nếu id chưa tồn tại,
script báo "linh địa MỚI" — khảo cứu từ đầu.

Đọc thêm `docs/marian-sites-missing-info.md` để biết bối cảnh đã ghi nhận trước đó.

Nếu người dùng chưa chỉ định linh địa nào, đề xuất 2–3 linh địa điểm ưu tiên cao nhất và hỏi họ chọn.

### Bước 2 — Thu thập tư liệu

Đọc `references/nguon-tu-lieu.md` để biết thứ bậc nguồn, danh sách trang giáo phận đáng tin và các
mẫu truy vấn tìm kiếm tiếng Việt (có dấu / không dấu / `site:`).

Nguyên tắc tìm kiếm:

- Tìm bằng cả tên có dấu và không dấu, cả tên cũ lẫn tên hành chính mới (nhiều linh địa đổi địa chỉ
  sau các đợt sáp nhập tỉnh).
- Ưu tiên trang giáo phận sở tại, `hdgmvietnam.com`, kỷ yếu, báo Công giáo. Wikipedia tiếng Việt dùng
  được nhưng nên lần theo phần chú thích của nó để lấy nguồn gốc.
- Blog hành hương, Facebook, YouTube chỉ dùng làm **manh mối** để tìm nguồn thật, không trích dẫn làm
  nguồn chính.
- Khi hai nguồn mâu thuẫn (thường là niên đại), ghi lại cả hai và nói rõ mâu thuẫn trong báo cáo.
  Không tự chọn một bên rồi im lặng.

Công cụ: dùng `WebSearch` để tìm, `WebFetch` để đọc trang. Ghi lại URL đầy đủ và ngày truy cập ngay
lúc đọc — không để đến cuối mới dựng lại danh mục nguồn.

### Bước 3 — Tọa độ

- Lấy `lat`/`lng` của chính linh đài (bệ tượng, đền thánh), không phải tâm xã hay nhà thờ giáo xứ
  cách đó vài km.
- Đối chiếu tối thiểu 2 nguồn (ví dụ toạ độ ghi trên trang giáo phận và vị trí đọc từ bản đồ).
- Làm tròn 4 chữ số thập phân (~11m). Bắt buộc nằm trong khung: `lat` 8.5–23.5, `lng` 102.0–110.0.
- Ghi rõ trong báo cáo độ tin cậy của toạ độ: đo chính xác, ước lượng từ ảnh vệ tinh, hay chỉ tương đối.

### Bước 4 — Hình ảnh

Trang có một ảnh chính (`realImage`) và có thể có thêm nhiều **ảnh phụ** (`galleryImages[]`) — toàn
cảnh khuôn viên, góc chụp khác, bảng ghi công, chi tiết kiến trúc. Đừng dừng lại ngay khi tìm được một
ảnh: nếu nguồn cho phép, tiếp tục tìm thêm ảnh phụ hợp lệ cho cùng linh địa, mỗi ảnh vẫn phải qua đúng
quy trình xác minh nguồn gốc như ảnh chính — không hạ thấp tiêu chuẩn cho ảnh phụ.

Với mỗi ảnh đề xuất (chính lẫn phụ), ghi vào `images[]` các thông tin:
URL trang gốc (không phải URL ảnh thô) · tên tác giả (hoặc tên trang/toà soạn nếu không rõ tác giả cá
nhân) · năm chụp (nếu biết) · nội dung ảnh · `role` (`"chinh"` cho ảnh chính, tối đa 1 ảnh mỗi hồ sơ;
`"phu"` cho ảnh phụ, có thể nhiều).

Quy chuẩn ảnh của dự án là **nguồn công khai + giữ nguyên URL + ghi rõ nguồn trong caption**, không
bắt buộc xác định một loại giấy phép cụ thể (CC-BY-SA, CC-BY, Public Domain...). Biết rõ giấy phép thì
cứ ghi thêm vào `license` cho đầy đủ, nhưng thiếu nó không phải lý do bỏ qua một ảnh tốt.

Đọc `references/nguon-tu-lieu.md` mục "Với ảnh" để biết các nguồn có thể tìm — không chỉ Wikimedia
Commons, mà cả trang tin chính thức của giáo phận/giáo xứ và Google Images (dùng để lần ra nguồn gốc,
không phải để trích dẫn trực tiếp).

Không hotlink, không tải ảnh từ Facebook hay mạng xã hội tương đương, không cắt ảnh từ video — không
phải vì thiếu giấy phép, mà vì các nguồn này không giữ được một trang gốc ổn định để dẫn lại. Ảnh
không còn nguồn nào công khai kiểm tra lại được (trang đã gỡ, chỉ còn lời kể miệng) thì ghi lại làm
manh mối trong `imageSearchNote`, không đưa vào `images[]` như một đề xuất chính thức.

### Bước 5 — Viết hồ sơ JSON

Viết `docs/khao-cuu/<id>/khao-cuu.json` theo lược đồ `ducme.khao-cuu/v1`. Đọc
`references/ho-so-khao-cuu.md` để biết từng khoá, và sao chép khung từ
`.agents/skills/_lib/examples/khao-cuu.example.json`.

Bốn phần bắt buộc làm cho tử tế, vì người kiểm chứng làm việc trực tiếp trên chúng:

- `fields[].claims[]` — mỗi khẳng định gắn với mã nguồn cụ thể. Đây là thứ audit đối chiếu từng dòng.
- `sources[]` — có `code`, `tier`, `accessed`, `supports`, `inRecord`. Nguồn cấp C không được `inRecord`.
- `unknowns[]` — những gì không tìm được nguồn. Để rỗng sẽ bị cảnh báo: một hồ sơ không còn điểm nào
  chưa chắc chắn thường là chưa đào đủ sâu, chứ không phải hoàn hảo.
- `record` — bản ghi đầy đủ đúng lược đồ `src/data/statues.js` (xem `references/luoc-do-du-lieu.md`).

### Bước 6 — Tự kiểm và sinh báo cáo

```bash
# 1. bản ghi có vượt được ràng buộc mà npm test sẽ kiểm không
node .agents/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/<id>/khao-cuu.json
#    thêm --allow-existing-id nếu là bản cập nhật cho linh địa đã có

# 2. hồ sơ có đúng lược đồ bàn giao không
node .agents/skills/marian-research/scripts/format-report.mjs docs/khao-cuu/<id>/khao-cuu.json --check

# 3. sinh báo cáo markdown (mặc định) và HTML
node .agents/skills/marian-research/scripts/format-report.mjs docs/khao-cuu/<id>/khao-cuu.json --html
```

Dán kết quả bước 1 vào khoá `validation` của hồ sơ. Sửa hết lỗi chặn; cảnh báo nào không xử lý được
thì giải thích trong `selfAssessment.biggestRisk`.

**Không sửa tay vào `bao-cao-khao-cuu.md`.** File đó sinh ra từ JSON; sửa JSON rồi chạy lại lệnh.

### Bước 7 — Bàn giao

Báo cho người dùng: đã khảo cứu xong linh địa nào, tìm được gì, còn vướng gì, hồ sơ và báo cáo nằm ở
đâu, và bước tiếp theo là chạy `marian-audit` để kiểm chứng độc lập.

Không tự chạy tiếp sang audit trong cùng một lượt trừ khi người dùng yêu cầu rõ — người kiểm chứng
cần đọc báo cáo với con mắt độc lập.

## Dấu hiệu phải dừng lại và hỏi người dùng

- Linh địa tìm được nhưng tư liệu công khai gần như bằng không (dưới 2 nguồn thật).
- Hai nguồn uy tín ngang nhau mâu thuẫn về sự kiện cốt lõi.
- Linh địa có tranh chấp về tính chính thức (chưa được giáo phận công nhận, còn tranh luận).
