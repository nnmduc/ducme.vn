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

## Quy tắc độc lập

1. **Không tin phần tóm tắt của báo cáo.** Mở từng URL nguồn và đọc. Một nguồn còn sống nhưng không
   hề chứa luận điểm được gán cho nó là lỗi nặng hơn cả link chết.
2. **Không dùng lại kết quả tìm kiếm của người khảo cứu.** Tự tìm ít nhất một nguồn độc lập cho mỗi
   khẳng định cốt lõi (năm thành lập, tên tượng, giáo phận, toạ độ).
3. **Nghi ngờ thứ tự hợp lý.** Số liệu tròn trịa đáng ngờ (tượng "cao đúng 30m"), tên riêng lạ, ngày
   tháng chi tiết bất thường — đối chiếu lại.
4. **Ảnh là điểm rủi ro cao nhất.** Dự án cấm tuyệt đối ảnh AI. Không xác minh được nguồn gốc ảnh thì
   loại ảnh, giữ `realImage: null`, và vẫn có thể duyệt phần văn bản.

## Quy trình

### Bước 1 — Đọc đầu vào

Đọc `docs/khao-cuu/<id>/bao-cao-khao-cuu.md` và `de-xuat-du-lieu.json`. Nếu không có báo cáo khảo cứu,
dừng lại: không audit một thay đổi nội dung không có hồ sơ. Yêu cầu chạy `marian-research` trước.

Đọc `references/tieu-chi-kiem-chung.md` — 7 trục chấm điểm và các tiêu chí chặn.

### Bước 2 — Kiểm cấu trúc dữ liệu

```bash
node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/<id>/de-xuat-du-lieu.json
```

Còn lỗi chặn nghĩa là `npm test` sẽ đỏ. Đây là điều kiện cần, chưa phải điều kiện đủ.

### Bước 3 — Kiểm nguồn dẫn

```bash
node .claude/skills/marian-audit/scripts/check-sources.mjs --file docs/khao-cuu/<id>/de-xuat-du-lieu.json
```

Script kiểm: URL còn sống, chuyển hướng đi đâu, trang có thật sự nhắc tới linh địa không, có phải chỉ
là link tìm kiếm hay root domain trần không.

Nếu script báo `PROXY CHAN`, đó là chính sách egress của phiên làm việc chặn host, **không phải nguồn
chết**. Kiểm lại host đó bằng `WebFetch` rồi ghi kết quả vào báo cáo kiểm chứng.

Sau khi script chạy xong, phần việc quan trọng vẫn phải làm bằng tay: **mở từng nguồn và đối chiếu
từng luận điểm**. Lập bảng luận điểm → nguồn → xác nhận (đúng / không thấy trong nguồn / mâu thuẫn).

### Bước 4 — Kiểm hình ảnh

```bash
node .claude/skills/marian-audit/scripts/check-image.mjs <đường/dẫn/ảnh>
```

Script bắt dấu hiệu metadata AI, C2PA, kích thước, định dạng. Phần con người phải làm:

- Mở trang mô tả file gốc (trang `File:` trên Wikimedia Commons chẳng hạn), xác nhận nó có thật.
- Đọc đúng tên giấy phép. "Free to use", "sưu tầm", "nguồn: internet" đều **không** phải giấy phép.
- Xác nhận ảnh đúng là linh địa đang xét — nhiều tượng Đức Mẹ khác nhau trông rất giống nhau.
- Nghi ngờ thì tìm ảnh ngược. Ảnh sắc nét bất thường, ánh sáng quá hoàn hảo, chi tiết kiến trúc méo,
  chữ trên bảng hiệu nhoè thành ký tự vô nghĩa — đều là dấu hiệu ảnh tạo sinh.

### Bước 5 — Kiểm nội dung

- `historicalFact` có lẫn phỏng đoán không? Có câu nào không truy được về nguồn nào không?
- `oralTradition` có bị viết như sự thật lịch sử không?
- Giọng văn có trung lập, kính trọng không? Có câu mang tính tuyên truyền chính trị không?
  (Dự án có nội dung nhạy cảm về thời Đệ nhất Cộng hòa — mô tả sự kiện, không ca ngợi hay lên án.)
- Có trùng lặp với linh địa đã có trong dữ liệu không?
- Có ảnh hưởng tới `CONSTELLATION_VERSIONS` không? V1 và V2 bị test chốt cứng ở đúng 7 node; mọi đề
  xuất đụng vào chòm sao phải có lập luận lịch sử riêng và nêu rõ trong kết luận.

### Bước 6 — Chấm điểm và kết luận

Chấm 7 trục theo `references/tieu-chi-kiem-chung.md`, rồi chọn đúng một trong bốn kết luận:

| Kết luận | Nghĩa là |
|---|---|
| **ÁP DỤNG** | Đạt toàn bộ tiêu chí chặn. `marian-publish` triển khai nguyên trạng. |
| **ÁP DỤNG CÓ ĐIỀU KIỆN** | Duyệt phần đạt, nhưng phải sửa/lược bỏ đúng những mục ghi rõ trước khi đưa lên. Ví dụ thường gặp: duyệt văn bản, loại ảnh. |
| **TRẢ LẠI KHẢO CỨU** | Thiếu bằng chứng, sai sót còn sửa được. Ghi rõ cần bổ sung gì. |
| **TỪ CHỐI** | Sai về bản chất, nguồn bịa, ảnh AI, hoặc đối tượng không thuộc phạm vi dự án. |

Kết luận **ÁP DỤNG có điều kiện phải liệt kê chính xác từng điểm phải sửa** — `marian-publish` sẽ
thực hiện đúng danh sách đó, không diễn giải thêm.

Viết kết quả theo `references/mau-bao-cao-kiem-chung.md`, lưu tại:

```
docs/khao-cuu/<id>/bao-cao-kiem-chung.md
```

### Bước 7 — Bàn giao

Nêu kết luận ngay câu đầu khi báo với người dùng, kèm lý do ngắn gọn và các điều kiện nếu có. Nếu kết
luận là ÁP DỤNG hoặc ÁP DỤNG CÓ ĐIỀU KIỆN, nói rõ bước tiếp theo là `marian-publish`.

## Tiêu chí chặn — chạm một cái là không được ÁP DỤNG

- Dưới 2 nguồn truy cập được, hoặc toàn bộ nguồn đều là link tìm kiếm.
- Có nguồn được dẫn nhưng không chứa luận điểm được gán cho nó.
- Ảnh không xác minh được giấy phép, hoặc có dấu hiệu AI.
- Toạ độ ngoài lãnh thổ Việt Nam, hoặc lệch quá 500m so với nguồn đối chiếu.
- `validate-record.mjs` còn lỗi chặn.
- Nội dung khẳng định điều siêu nhiên như sự kiện lịch sử đã kiểm chứng.
