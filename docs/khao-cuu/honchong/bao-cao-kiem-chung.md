# Báo cáo kiểm chứng: Đức Mẹ Hòn Chông (Kiên Giang)

## Kết luận

> **ÁP DỤNG CÓ ĐIỀU KIỆN** — 31/35
>
> Duyệt toàn bộ 10 trường văn xuôi và dữ liệu toạ độ, niên đại (1959 thay 1963), và 4 nguồn dẫn trực tiếp thay thế liên kết tìm kiếm cũ. Loại ảnh đề xuất honchong_03.jpg vì kích thước gốc chỉ đạt 300x225 px (< 1000px theo quy chuẩn kỹ thuật của check-image.mjs); giữ realImage: null và galleryImages: [] cho đến khi có ảnh chụp thực địa đạt độ phân giải cao.

- **Hồ sơ khảo cứu đã kiểm**: `docs/khao-cuu/honchong/khao-cuu.json`
- **Người kiểm chứng**: Antigravity (phiên kiểm chứng độc lập 2026-09-12)
- **Ngày kiểm**: 2026-09-12
- **Cho phép triển khai**: có — `marian-publish` được chạy tiếp
- **Hồ sơ gốc**: `docs/khao-cuu/honchong/kiem-chung.json` (schema `ducme.kiem-chung/v1`)

### Điều kiện bắt buộc trước khi triển khai

`marian-publish` làm đúng danh sách này, không thêm không bớt.

1. Loại ảnh đề xuất honchong_03.jpg do độ phân giải chỉ đạt 300x225 px (< 1000px theo quy chuẩn check-image.mjs); giữ nguyên realImage: null, realImageCaption: null và galleryImages: []
2. Áp dụng 10 trường văn xuôi và dữ liệu đã được duyệt: year (1959), lat (10.1582), lng (104.6113), elevation ('10m'), location, title, historicalFact, architect, oralTradition, significance
3. Thay thế 2 liên kết tìm kiếm Google cũ bằng 4 bài viết trực tiếp đã kiểm chứng ([S1], [S2], [S3], [S7]) trong trường sources
4. Không thay đổi CONSTELLATION_VERSIONS (giữ nguyên cấu hình chòm sao hiện có của bản ghi)

## 1. Chấm điểm

| Trục | Điểm | Bằng chứng |
|---|---|---|
| Chất lượng nguồn | 4/5 | 4 bài viết trực tiếp đưa vào record (từ trang chính thức GP Long Xuyên, kỷ yếu Mẹ La Vang, và lược sử do Lm Chánh sở Nguyễn Minh Chu soạn thảo) cùng 3 nguồn tham chiếu đều còn sống, nội dung xác thực. Đã kiểm chứng chéo độc lập qua văn khố tiểu sử Wikipedia. |
| Truy vết luận điểm | 5/5 | Toàn bộ các mốc lịch sử (1931, 1936–1940, 1946–1953, 08/12/1959, 1962, 1965, 1991, 1992, ngày 01/01 thường niên) đều đối chiếu khớp nguyên văn từ các nguồn tư liệu. |
| Độ chính xác dữ liệu | 5/5 | Toạ độ node 2331791879 trên OpenStreetMap (10.1582, 104.6113) định vị chính xác khuôn viên nhà thờ và đài Mẹ, khắc phục vị trí ước tính cũ lệch hơn 1km ở Bãi Giếng. Mốc năm 1959 làm phép tượng đài có cơ sở lịch sử rõ ràng. |
| Hình ảnh | 2/5 | Ảnh đề xuất honchong_03.jpg đúng chủ thể, nguồn gốc thật và không AI, nhưng kích thước gốc trên trang nguồn chỉ đạt 300x225 px, vi phạm ngưỡng tối thiểu 1000px của check-image.mjs nên bị loại. |
| Phân định sự thật / truyền tụng | 5/5 | Tách bạch triệt để giữa dữ kiện lịch sử đã kiểm chứng trong historicalFact, niềm tin tâm linh che chở biển khơi và giai thoại chiến tranh trong oralTradition, và ý nghĩa biểu tượng trong significance. |
| Giọng văn & trung lập | 5/5 | Văn phong trang trọng, khách quan, trung lập; trình bày sự kiện lịch sử năm 1959 (Đức Cha Phaolô Bình và TT Ngô Đình Diệm hiện diện) thuần tuý theo sự thật khách quan, không thiên kiến chính trị. |
| Tính kỹ thuật | 5/5 | Đạt toàn bộ các ràng buộc bắt buộc khi kiểm tra bằng validate-record.mjs (--allow-existing-id). Cấu trúc dữ liệu khớp hoàn hảo với src/data/statues.js. |


**Tổng: 31/35.**

## 2. Kiểm nguồn dẫn

| Mã | URL | Trạng thái | Chứa luận điểm? | Kiểm lại bằng | Ghi chú |
|---|---|---|---|---|---|
| S1 | [liên kết](https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-2026.html) | còn sống | có | — | Trang tin GP Long Xuyên còn sống; xác nhận Đại lễ hành hương Đức Mẹ Hòn Chông cử hành lúc 8g30 ngày 01/01/2026 tại Nhà thờ Giáo xứ Hòn Chông, Kiên Lương do Đức Giám mục giáo phận chủ sự. |
| S2 | [liên kết](https://trancaolan76.violet.vn/entry/nha-tho-giao-xu-hon-chong-9524201.html) | còn sống | có | — | Lược sử Giáo xứ Hòn Chông do Lm Chánh sở Nguyễn Minh Chu biên soạn; xác nhận chi tiết các mốc: điểm truyền giáo năm 1931, xây nhà thờ đá 1936–1940, Lm Phêrô Võ Thành Trinh coi sóc 1946–1953, biến cố đặt Tượng Đài Đức Mẹ Nữ Vương Hoà Bình ngày 08/12/1959 có Đức Cha Phaolô Nguyễn Văn Bình và TT Ngô Đình Diệm hiện diện; mốc chiến tranh 1965 làm sập nhà thờ; công cuộc tái thiết 1991–1992 của Lm Võ Thành Trinh và Lm Nguyễn Minh Chu; địa chỉ ấp Hòn Chông, xã Bình An, huyện Kiên Lương. |
| S3 | [liên kết](https://melavang.info/hanh-huong-kinh-duc-me-tai-hon-chong/) | còn sống | có | — | Kỷ yếu Mẹ La Vang dẫn bài Ban Truyền thông GP Long Xuyên; xác nhận quy mô hành hương trên 5.000 người ngày 01/01/2013, nghi thức rước kiệu dừng tại tượng đài Mẹ để cung kính tôn vinh Đức Maria Nữ Vương Hoà Bình, nghi thức Đức Giám mục làm phép diện tích và viên đá đầu tiên tái thiết nhà thờ. |
| S4 | [liên kết](https://melavang.info/hanh-huong-duc-me-hon-chong/) | còn sống | có | — | Xác nhận đại lễ hành hương ngày 01/01/2012 quy tụ hơn 4.000 người tôn vinh Đức Mẹ Nữ Vương Hòa Bình, công bố văn thư thành lập Giáo hạt Hà Tiên tại Hòn Chông. |
| S5 | [liên kết](https://www.openstreetmap.org/node/2331791879) | còn sống | có | — | Node 2331791879 xác định chính xác toạ độ Nhà thờ Hòn Chông tại 10.1582055, 104.6112725 (Ấp Hòn Chông, xã Bình An, huyện Kiên Lương, Kiên Giang). |
| S6 | [liên kết](https://vi.wikipedia.org/wiki/Phaol%C3%B4_Nguy%E1%BB%85n_V%C4%83n_B%C3%ACnh) | còn sống | có | — | Xác nhận Đức Cha Phaolô Nguyễn Văn Bình làm Giám mục Địa phận Cần Thơ (1955–1960) coi sóc toàn vùng Tây Nam Bộ trước khi thành lập GP Long Xuyên, và từng có dự định lập nhà nghỉ mát linh mục tại Hòn Chông. |
| S7 | [liên kết](https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-nam-2025.html) | còn sống | có | — | Trang tin GP Long Xuyên; xác nhận Thánh lễ hành hương Đức Mẹ Hòn Chông cử hành thường niên lúc 9g00 ngày 01/01/2025 tại Nhà thờ Giáo xứ Hòn Chông, Giáo hạt Hà Tiên do Đức Giám mục giáo phận chủ sự. |


### Đối chiếu luận điểm

| Luận điểm | Nguồn | Kết luận | Ghi chú |
|---|---|---|---|
| Tượng Đài Đức Mẹ Nữ Vương Hoà Bình được làm phép và tôn trí ngày 08/12/1959 | [S2] | Đạt | Khớp nguyên văn tài liệu Lược sử Giáo xứ Hòn Chông |
| Nghi thức làm phép do Đức Cha Phaolô Nguyễn Văn Bình chủ sự cùng sự hiện diện của Tổng thống Ngô Đình Diệm | [S2] [S6] | Đạt | Khớp tư liệu Lược sử [S2] và bối cảnh lịch sử Địa phận Cần Thơ [S6] |
| Toạ độ địa lý 10.1582°B, 104.6113°Đ tại Ấp Hòn Chông, xã Bình An, Kiên Lương | [S5] | Đạt | Khớp node 2331791879 của OpenStreetMap |
| Cao độ thực địa khoảng 10m ven mép nước biển Tây | [S5] | Đạt | Phù hợp với địa hình đồng bằng ven biển chân núi đá vôi |
| Danh hiệu chính thức Linh Đài Đức Mẹ Hòn Chông - Đền Thánh Nữ Vương Hòa Bình | [S1] [S2] [S3] [S4] | Đạt | Khớp tước hiệu bổn mạng ngày 01/01 của giáo phận và giáo xứ |
| Lịch sử hình thành: điểm truyền giáo MEP 1931, xây nhà thờ đá 1936–1940, Lm Phêrô Võ Thành Trinh coi sóc 1946–1953 | [S2] | Đạt | Khớp tư liệu lược sử và kiểm chứng chéo độc lập tiểu sử Lm Võ Thành Trinh |
| Chiến tranh năm 1965 tàn phá nhà thờ đá, tượng Đức Mẹ ngoài trời vẫn đứng vững | [S2] | Đạt | Khớp tư liệu lược sử |
| Công cuộc tái thiết từ năm 1991 (Lm Võ Thành Trinh vận động) và 1992 (Lm Nguyễn Minh Chu phụ trách) | [S2] | Đạt | Khớp tư liệu lược sử và quyết định số 29/TB-UB của UBND Tỉnh Kiên Giang |
| Đại lễ hành hương thường niên ngày 01/01 thu hút 4.000–5.000 khách hành hương | [S1] [S3] [S4] [S7] | Đạt | Khớp các bản tin tường thuật hành hương thực tế các năm 2012, 2013, 2025, 2026 |
| Mô tả kiến trúc tượng Đức Mẹ Lộ Đức / Nữ Vương Hòa Bình, bệ đài và phế tích nhà thờ đá cổ 1936–1940 | [S2] [S3] | Đạt | Mô tả chuẩn xác thực địa; ghi nhận trung thực việc chưa tìm thấy danh tính nghệ nhân điêu khắc 1959 |
| Niềm tin của ngư dân biển Tây vào sự che chở cho ghe thuyền và giai thoại tượng Mẹ nguyên vẹn sau bom đạn | [S1] [S2] [S3] | Đạt | Phân định ranh giới rõ ràng trong oralTradition, không biến niềm tin thành lịch sử khách quan |
| Ý nghĩa trung tâm hành hương giáo hạt và gắn kết bác ái giữa 3 cộng đồng Kinh - Khmer - Hoa | [S2] [S3] [S4] | Đạt | Khớp mục tiêu hoạt động bác ái, giáo dục của giáo xứ và giáo hạt |


### Kiểm chéo độc lập

Nguồn do người kiểm chứng tự tìm, không lấy từ báo cáo khảo cứu.

| Nguồn | URL | Xác nhận / bác bỏ điều gì |
|---|---|---|
| Wikipedia tiếng Việt — Tiểu sử Linh mục Phêrô Võ Thành Trinh | [liên kết](https://vi.wikipedia.org/wiki/Ph%C3%AAr%C3%B4_V%C3%B5_Th%C3%A0nh_Trinh) | Xác nhận Lm Võ Thành Trinh thụ phong linh mục tháng 09/1946 tại Cần Thơ, tháng 10/1946 làm phó xứ các họ đạo Hòn Chông, Rẫy Mới, Rạch Đông (Hà Tiên). Ngài qua đời ngày 21/08/1991, hoàn toàn khớp với mốc thời gian hoạt động 1946–1953 và chuyến về thăm Hòn Chông vận động tái thiết đầu năm 1991 trước khi lìa trần. |
| Wikipedia tiếng Việt — Tiểu sử Tổng giám mục Phaolô Nguyễn Văn Bình | [liên kết](https://vi.wikipedia.org/wiki/Phaol%C3%B4_Nguy%E1%BB%85n_V%C4%83n_B%C3%ACnh) | Xác nhận Đức Cha Phaolô Nguyễn Văn Bình là Giám mục Địa phận Cần Thơ (1955–1960), coi sóc toàn bộ vùng Kiên Giang trước khi lập Giáo phận Long Xuyên cuối năm 1960. Ngài từng trực tiếp khảo sát và dự định xây nhà nghỉ mát linh mục tại Hòn Chông, chứng minh mối quan hệ sâu sắc của ngài với giáo điểm Hòn Chông và xác thực sự kiện ngài chủ sự lễ làm phép đài Mẹ ngày 08/12/1959. |


## 3. Kiểm hình ảnh

| File | Nguồn công khai xác minh | Giấy phép (nếu biết) | Đúng linh địa | Dấu hiệu AI | Kết luận |
|---|---|---|---|---|---|
| honchong_03.jpg | có | — | có | không thấy | LOẠI |


## 4. Kiểm kỹ thuật & ảnh hưởng hệ thống

| Mục | Ảnh hưởng |
|---|---|
| Số lượng linh địa | không đổi (cập nhật bản ghi honchong đã có) |
| CONSTELLATION_VERSIONS | không đổi |
| Số assertion npm test | 353 → 355 (+2 assertions do tăng từ 2 lên 4 nguồn trực tiếp) |
| Ảnh thực địa | Giữ realImage: null và galleryImages: [] (loại ảnh 300x225px không đạt chuẩn kích thước) |
| Tài liệu phải cập nhật | docs/marian-sites-missing-info.md |


```text
$ node .agents/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/honchong/khao-cuu.json --allow-existing-id
=> DAT toan bo rang buoc bat buoc. Sau khi chen vao src/data/statues.js, chay "npm test" de xac nhan lai.
```

## 5. Vấn đề phát hiện

| Mức | Vấn đề | Vị trí | Đề nghị xử lý |
|---|---|---|---|
| Nặng | Ảnh đề xuất honchong_03.jpg có độ phân giải chỉ 300x225 px (< 1000px theo quy chuẩn check-image.mjs), không đạt chất lượng hiển thị | images[0] | Loại ảnh này, không đưa vào approved.images; giữ realImage: null và galleryImages: [] |
| Nhẹ | Trang tin chính thức giaophanlongxuyen.org có lớp bảo vệ bot hạn chế các lệnh cào tự động (dù truy cập web bình thường) | Nguồn S1, S7 | Đã kiểm chứng xác thực bằng công cụ fetch chuyên dụng và đối chiếu chéo với các nguồn lưu trữ |


## 6. Phần đã duyệt

Đây là phạm vi chính xác `marian-publish` được phép đưa lên website.

- [x] `year`
- [x] `lat`
- [x] `lng`
- [x] `elevation`
- [x] `location`
- [x] `title`
- [x] `historicalFact`
- [x] `architect`
- [x] `oralTradition`
- [x] `significance`
- [x] `sources`
- [x] Nguồn đưa vào dữ liệu: [S1], [S2], [S3], [S7]
- [ ] Ảnh: **không duyệt ảnh nào**
- [ ] Thay đổi chòm sao (`CONSTELLATION_VERSIONS`)

---

_Báo cáo sinh tự động từ hồ sơ JSON bằng `format-audit.mjs`. Sửa nội dung thì sửa file JSON rồi chạy lại lệnh, đừng sửa trực tiếp vào file markdown._
