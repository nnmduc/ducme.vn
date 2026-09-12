---
name: marian-audit
description: Kiểm chứng và audit độc lập một báo cáo khảo cứu linh đài Đức Mẹ — xác thực từng nguồn dẫn, kiểm tra bản quyền và tính thật của hình ảnh, đối chiếu dữ liệu với ràng buộc của ducme.vn, rồi ra kết luận có nên áp dụng vào website hay không. Use when verifying or auditing a research report, fact-checking sources and photos, validating proposed statue data before it reaches the site, or deciding whether to approve/reject a content change. Dùng khi người dùng nói "kiểm chứng", "audit báo cáo", "xác thực nguồn", "kiểm tra ảnh", "có nên áp dụng không", "duyệt nội dung".
---

# Kiểm chứng & audit báo cáo khảo cứu

Giai đoạn 2 trong quy trình ba bước: **khảo cứu → kiểm chứng → triển khai**.

Vai trò ở đây là **người gác cổng**, không phải người phụ khảo cứu. Giả định mặc định là báo cáo có
thể sai. Nhiệm vụ là tìm ra chỗ sai trước khi nội dung lên website công khai.

**Không sửa nội dung báo cáo, không sửa `src/data/statues.js`, không tạo PR.** Nếu báo cáo sai, kết
luận là trả lại cho khảo cứu, không phải tự tay vá.

Đầu vào là hồ sơ JSON của khảo cứu, đầu ra cũng là hồ sơ JSON — `marian-publish` đọc bằng máy để biết
chính xác được phép đưa lên những gì:

```
docs/khao-cuu/<id>/khao-cuu.json            <- đọc (marian-research viết)
docs/khao-cuu/<id>/kiem-chung.json          <- viết file này (bản gốc)
docs/khao-cuu/<id>/bao-cao-kiem-chung.md    <- sinh ra bằng format-audit.mjs
docs/khao-cuu/<id>/bao-cao-kiem-chung.html  <- sinh ra khi chạy với --html
```

## Quy tắc độc lập

1. **Không tin phần tóm tắt của báo cáo.** Mở từng URL nguồn và đọc. Một nguồn còn sống nhưng không
   hề chứa luận điểm được gán cho nó là lỗi nặng hơn cả link chết.
2. **Không dùng lại kết quả tìm kiếm của người khảo cứu.** Tự tìm ít nhất một nguồn độc lập cho mỗi
   khẳng định cốt lõi (năm thành lập, tên tượng, giáo phận, toạ độ).
3. **Nghi ngờ thứ tự hợp lý.** Số liệu tròn trịa đáng ngờ (tượng "cao đúng 30m"), tên riêng lạ, ngày
   tháng chi tiết bất thường — đối chiếu lại.
4. **Ảnh AI là điều tuyệt đối không chấp nhận.** Ảnh từ nguồn công khai (giữ nguyên URL gốc, caption
   ghi rõ nguồn) là đủ để duyệt — không bắt buộc xác định một loại giấy phép Creative Commons cụ thể.
   Chỉ loại ảnh khi: có dấu hiệu AI, trang gốc không còn kiểm tra lại được (chết, riêng tư, hoặc chỉ
   là lời xin phép cá nhân không ai khác xác minh lại được), hoặc sai chủ thể. Loại đúng ảnh đó
   (chính hoặc phụ), giữ `realImage: null` và/hoặc `galleryImages: []` tương ứng, và vẫn có thể duyệt
   phần văn bản.

## Quy trình

### Bước 1 — Đọc đầu vào

Đọc `docs/khao-cuu/<id>/khao-cuu.json` — đây là bản gốc, đọc thẳng JSON chứ không đọc bản markdown đã
render. Không có hồ sơ khảo cứu thì dừng lại: không audit một thay đổi nội dung không có hồ sơ.

```bash
node .claude/skills/marian-research/scripts/format-report.mjs docs/khao-cuu/<id>/khao-cuu.json --check
```

Hồ sơ không hợp lệ thì trả lại ngay, chưa cần đọc nội dung.

Đọc `references/tieu-chi-kiem-chung.md` — 7 trục chấm điểm và các tiêu chí chặn.

### Bước 2 — Kiểm cấu trúc dữ liệu

```bash
node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/<id>/khao-cuu.json
```

Còn lỗi chặn nghĩa là `npm test` sẽ đỏ. Đây là điều kiện cần, chưa phải điều kiện đủ.

### Bước 3 — Kiểm nguồn dẫn

```bash
node .claude/skills/marian-audit/scripts/check-sources.mjs --file docs/khao-cuu/<id>/khao-cuu.json
```

Script kiểm: URL còn sống, chuyển hướng đi đâu, trang có thật sự nhắc tới linh địa không, có phải chỉ
là link tìm kiếm hay root domain trần không.

Nếu script báo `PROXY CHAN`, đó là chính sách egress của phiên làm việc chặn host, **không phải nguồn
chết**. Kiểm lại host đó bằng `WebFetch` rồi ghi kết quả vào báo cáo kiểm chứng.

Sau khi script chạy xong, phần việc quan trọng vẫn phải làm bằng tay: **mở từng nguồn và đối chiếu
từng luận điểm**. Lập bảng luận điểm → nguồn → xác nhận (đúng / không thấy trong nguồn / mâu thuẫn).

### Bước 4 — Kiểm hình ảnh

```bash
node .claude/skills/marian-audit/scripts/check-image.mjs <đường/dẫn/ảnh...>
```

Kiểm **từng ảnh trong `images[]`** của hồ sơ khảo cứu, không chỉ ảnh đầu tiên — hồ sơ có thể đề xuất
nhiều ảnh (`role: "chinh"` lẫn `"phu"`). Ảnh phụ (`galleryImages`) không được kiểm lỏng tay hơn ảnh
chính: cùng một bộ tiêu chí, cùng khả năng bị loại.

Script bắt dấu hiệu metadata AI, C2PA, kích thước, định dạng. Phần con người phải làm cho mỗi ảnh:

- Mở `filePage` (trang gốc — trang `File:` trên Wikimedia Commons, bài tin giáo phận, bài báo...),
  xác nhận nó có thật, còn sống, và đúng nội dung ảnh. Đây là điều kiện chính để duyệt (`sourceVerified: true`).
- Giấy phép cụ thể (CC-BY-SA, CC-BY, Public Domain...) **không bắt buộc** — nếu trang có ghi thì lưu
  lại làm thông tin tham khảo (`license`), nhưng thiếu nó không phải lý do loại ảnh. Chỉ loại khi
  nguồn không còn công khai kiểm tra lại được: link chết, trang riêng tư, hoặc chỉ là lời xin phép cá
  nhân qua email/điện thoại mà không ai khác xác minh lại được.
- Xác nhận ảnh đúng là linh địa đang xét — nhiều tượng Đức Mẹ khác nhau trông rất giống nhau.
- Nghi ngờ thì tìm ảnh ngược. Ảnh sắc nét bất thường, ánh sáng quá hoàn hảo, chi tiết kiến trúc méo,
  chữ trên bảng hiệu nhoè thành ký tự vô nghĩa — đều là dấu hiệu ảnh tạo sinh.
- Kiểm `role`: tối đa một ảnh `"chinh"` trong hồ sơ; ảnh nào đã loại thì không được lọt vào
  `approved.images[]`, kể cả khi đó là ảnh phụ duy nhất tìm được.

### Bước 5 — Kiểm nội dung

- `historicalFact` có lẫn phỏng đoán không? Có câu nào không truy được về nguồn nào không?
- `oralTradition` có bị viết như sự thật lịch sử không?
- Giọng văn có trung lập, kính trọng không? Có câu mang tính tuyên truyền chính trị không?
  (Dự án có nội dung nhạy cảm về thời Đệ nhất Cộng hòa — mô tả sự kiện, không ca ngợi hay lên án.)
- Có trùng lặp với linh địa đã có trong dữ liệu không?
- Có ảnh hưởng tới `CONSTELLATION_VERSIONS` không? V1 và V2 bị test chốt cứng ở đúng 7 node; mọi đề
  xuất đụng vào chòm sao phải có lập luận lịch sử riêng và nêu rõ trong kết luận.

### Bước 6 — Chấm điểm và kết luận

Ghi kết quả vào `docs/khao-cuu/<id>/kiem-chung.json` theo lược đồ `ducme.kiem-chung/v1` — đọc
`references/ho-so-kiem-chung.md`, sao chép khung từ `.claude/skills/_lib/examples/kiem-chung.example.json`.

Chấm 7 trục theo `references/tieu-chi-kiem-chung.md`, rồi chọn đúng một trong bốn kết luận:

| Kết luận | Nghĩa là |
|---|---|
| **ÁP DỤNG** | Đạt toàn bộ tiêu chí chặn. `marian-publish` triển khai nguyên trạng. |
| **ÁP DỤNG CÓ ĐIỀU KIỆN** | Duyệt phần đạt, nhưng phải sửa/lược bỏ đúng những mục ghi rõ trước khi đưa lên. Ví dụ thường gặp: duyệt văn bản, loại ảnh. |
| **TRẢ LẠI KHẢO CỨU** | Thiếu bằng chứng, sai sót còn sửa được. Ghi rõ cần bổ sung gì. |
| **TỪ CHỐI** | Sai về bản chất, nguồn bịa, ảnh AI, hoặc đối tượng không thuộc phạm vi dự án. |

Kết luận **ÁP DỤNG CÓ ĐIỀU KIỆN phải liệt kê chính xác từng điểm phải sửa** trong `conditions[]` —
`marian-publish` thực hiện đúng danh sách đó, không diễn giải thêm.

Phần `approved` là hợp đồng máy đọc: trường nào không có tên trong `approved.fields` thì
`marian-publish` không được đụng tới, kể cả khi hồ sơ khảo cứu có đề xuất. Duyệt một trường mà khảo
cứu không đề xuất, hoặc dẫn mã nguồn không tồn tại, đều bị lệnh format bắt lỗi ngay.

Sinh báo cáo:

```bash
# kiểm hồ sơ, có đối chiếu chéo với khao-cuu.json cùng thư mục
node .claude/skills/marian-audit/scripts/format-audit.mjs docs/khao-cuu/<id>/kiem-chung.json --check

# sinh bao-cao-kiem-chung.md và bản HTML
node .claude/skills/marian-audit/scripts/format-audit.mjs docs/khao-cuu/<id>/kiem-chung.json --html
```

**Không sửa tay vào `bao-cao-kiem-chung.md`.** Sửa JSON rồi chạy lại lệnh.

### Bước 7 — Bàn giao

Nêu kết luận ngay câu đầu khi báo với người dùng, kèm lý do ngắn gọn và các điều kiện nếu có. Nếu kết
luận là ÁP DỤNG hoặc ÁP DỤNG CÓ ĐIỀU KIỆN, nói rõ bước tiếp theo là `marian-publish`.

## Tiêu chí chặn — chạm một cái là không được ÁP DỤNG

- Dưới 2 nguồn truy cập được, hoặc toàn bộ nguồn đều là link tìm kiếm.
- Có nguồn được dẫn nhưng không chứa luận điểm được gán cho nó.
- Ảnh có dấu hiệu AI, hoặc nguồn không còn công khai kiểm tra lại được (giấy phép cụ thể không bắt buộc).
- Toạ độ ngoài lãnh thổ Việt Nam, hoặc lệch quá 500m so với nguồn đối chiếu.
- `validate-record.mjs` còn lỗi chặn.
- Nội dung khẳng định điều siêu nhiên như sự kiện lịch sử đã kiểm chứng.
