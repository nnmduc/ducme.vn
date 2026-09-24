# Báo cáo khảo cứu: Vương Cung Thánh Đường Phú Nhai

- **Mã linh địa**: `phunhai`
- **Loại**: bổ sung tư liệu cho linh địa đã có
- **Người khảo cứu**: Claude (phiên marian-research, 2026-09-24)
- **Ngày hoàn thành**: 2026-09-24
- **Phạm vi**: Khảo cứu lại từ đầu: thay link tìm kiếm Google bằng nguồn trực tiếp (trang giáo phận, trang xã, báo), sửa toạ độ và địa chỉ hành chính sau sáp nhập 2025, sửa ngày phong Tiểu Vương cung, bổ sung văn xuôi lên trên 300 từ, thu chuyện kể và đề xuất ảnh thực địa từ Wikimedia Commons.
- **Hồ sơ gốc**: `docs/khao-cuu/phunhai/khao-cuu.json` (schema `ducme.khao-cuu/v1`)

## 1. Hiện trạng trước khảo cứu

| Mục | Hiện trạng |
|---|---|
| Ảnh thực địa | chưa có |
| Nguồn trực tiếp | 1 |
| Nguồn tìm kiếm | 1 |
| Tổng văn xuôi | 120 từ |
| Còn thiếu | ảnh thực địa; nguồn trực tiếp thứ hai; nội dung mỏng (120/300 từ) |


## 2. Đề xuất theo từng trường dữ liệu

| Trường | Thao tác | Nguồn |
|---|---|---|
| `historicalFact` | sửa | [S2] [S3] [S7] [S1] [S4] [S5] [S6] |
| `architect` | sửa | [S1] [S2] [S3] [S5] [S6] [S11] |
| `significance` | sửa | [S2] [S7] [S5] [S6] [S15] |
| `oralTradition` | sửa | [S2] [S7] [S8] [S1] [S13] [S14] |
| `lat` | sửa | [S9] [S1] |
| `lng` | sửa | [S9] [S1] |
| `year` | giữ nguyên | [S1] [S4] [S5] |
| `location` | sửa | [S4] [S1] [S9] [S5] |
| `title` | sửa | [S2] [S3] |
| `elevation` | giữ nguyên | — |
| `sources` | sửa | [S1] [S2] [S4] [S5] |
| `realImage` | giữ nguyên | [S11] |
| `galleryImages` | giữ nguyên | [S11] |


### `historicalFact` — sửa

> Năm 1858, giữa thời cấm đạo, Giám mục Valentinô Berrio-Ochoa Vinh và cha chính Emmanuel Riaño Hòa dâng Giáo phận Bùi Chu cho Đức Maria Vô Nhiễm Nguyên Tội, khấn hứa nếu giáo phận được bình an sẽ nhận Người làm bổn mạng và xây một thánh đường xứng đáng dâng kính Người. Năm 1866, sau khi triều Tự Đức chấm dứt lệnh cấm đạo, cha Hòa dựng tại Phú Nhai ngôi nhà thờ đầu tiên bằng gỗ, lợp bổi. Năm 1881, khi đã làm giám mục, ngài khởi công ngôi thánh đường thứ hai kiểu Á Đông, chín gian, cột lim, có hai tháp chuông. Ngôi thánh đường Gothic thứ ba do cha chính Y thiết kế, khánh thành ngày 8/12/1923 với chiều dài 88m và hai tháp cao 30m, nhưng bị trận bão năm 1929 quật đổ cùng 48 nhà thờ khác trong giáo phận. Công cuộc tái thiết hoàn tất năm 1933; ngày 7/12/1933, Giám mục Pedro Muñagorri Trung xức dầu thánh hiến đền thánh dâng kính Đức Mẹ Vô Nhiễm Nguyên Tội. Từ tháng 11/1949 đến tháng 6/1953, quân viễn chinh Pháp chiếm đóng khu nhà thờ làm đồn bốt. Công trình được đại trùng tu từ 17/3/2003 đến 26/9/2004. Ngày 12/8/2008, nhân kỷ niệm 150 năm dâng giáo phận cho Đức Mẹ, Tòa Thánh ban tước hiệu Tiểu Vương cung Thánh đường; sắc lệnh được Giám mục Giuse Hoàng Văn Tiệm công bố ngày 8/12/2008.

_Ghi chú:_ Sửa hai lỗi của bản cũ: (1) ngày phong Tiểu Vương cung là 12/8/2008 (công bố 8/12/2008), không phải 14/01/2008; (2) bỏ cụm 'một trong những thánh đường lớn nhất Đông Nam Á' khỏi historicalFact — đây là cách nói lưu hành, đã chuyển xuống oralTradition. Mốc khánh thành ngôi thứ ba (1923 hay 1922) xem conflicts[].

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Năm 1858 Giám mục Valentinô Berrio-Ochoa Vinh và cha chính Emmanuel Riaño Hòa dâng giáo phận Bùi Chu cho Đức Mẹ Vô Nhiễm, khấn hứa xây thánh đường | [S2] [S3] [S7] | cao |
| Năm 1866 cha Emmanuel Riaño Hòa dựng nhà thờ đầu tiên bằng gỗ, lợp bổi, sau khi lệnh cấm đạo chấm dứt | [S1] [S4] [S5] | cao |
| Năm 1881 khởi công ngôi thánh đường thứ hai kiểu Á Đông, chín gian, cột gỗ lim, hai tháp chuông | [S1] [S2] [S4] | cao |
| Ngôi thánh đường Gothic thứ ba do cha chính Y thiết kế và chỉ huy xây dựng, khánh thành 8/12/1923, dài 88m, hai tháp cao 30m | [S2] [S7] | trung bình |
| Trận bão năm 1929 làm đổ 48 nhà thờ trong giáo phận, trong đó có đền thánh Phú Nhai | [S2] [S1] | cao |
| Ngày 7/12/1933 Giám mục Pedro Muñagorri Trung xức dầu thánh hiến đền thánh | [S2] [S4] | cao |
| Quân viễn chinh Pháp chiếm đóng Phú Nhai từ tháng 11/1949, rút khỏi bốt Phú Nhai ngày 24/6/1953 | [S1] | trung bình |
| Đại trùng tu từ 17/3/2003 đến 26/9/2004 | [S1] [S6] | cao |
| Ngày 12/8/2008 Tòa Thánh phong tước hiệu Tiểu Vương cung Thánh đường; công bố ngày 8/12/2008 bởi GM Giuse Hoàng Văn Tiệm | [S2] [S3] [S6] | cao |


### `architect` — sửa

> Thánh đường theo phong cách Gothic kiểu Pháp, dài 80m, rộng 27m, mái cao 30m, hai tháp chuông mặt tiền cao 44m, diện tích sàn khoảng 2.160m². Trong tháp có bốn quả chuông đúc tại Pháp; Wikipedia tiếng Việt ghi trọng lượng 2.000kg, 1.200kg, 600kg và 100kg, quả lớn nhất chỉ đánh vào dịp đại lễ. Giữa khung Gothic là nhiều chi tiết Á Đông: chữ Hán trang trí quanh các ô kính, búp sen trên mái vòm. Trước mặt tiền, bên phải là đài Thánh Đa Minh cao 17m (riêng phần tượng 2,3m), bên trái là lăng hài cốt các vị tử đạo quê Phú Nhai cao 15m; quanh nhà thờ có phù điêu 14 chặng Đàng Thánh Giá. Ngôi thánh đường Gothic trước đó (1923) do cha chính Y thiết kế và chỉ huy xây dựng; người thiết kế ngôi đền thánh tái thiết năm 1933 thì chưa nguồn nào nêu tên.

_Ghi chú:_ Chiều rộng có ba con số (27/30/35m) — dùng 27m theo trang giáo phận và Wikipedia, xem conflicts[]. Trọng lượng chuông cũng chưa thống nhất giữa các nguồn.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Kích thước 80m x 27m x 30m, tháp 44m | [S1] [S2] [S3] | cao |
| Bốn quả chuông đúc từ Pháp, 2.000/1.200/600/100kg; quả lớn chỉ đánh dịp đại lễ | [S1] [S5] [S6] | trung bình |
| Chữ Hán quanh ô kính, búp sen trên mái vòm; diện tích sàn 2.160m² | [S1] | trung bình |
| Đài Thánh Đa Minh cao 17m bên phải, lăng hài cốt tử đạo cao 15m bên trái mặt tiền; 14 chặng Đàng Thánh Giá | [S1] [S6] [S11] | cao |


### `significance` — sửa

> Đền thánh Phú Nhai là công trình hiện thực hóa lời khấn năm 1858 của Giáo phận Bùi Chu với Đức Mẹ Vô Nhiễm Nguyên Tội, bổn mạng giáo phận, và là Tiểu Vương cung Thánh đường đầu tiên ở miền Bắc. Giáo xứ Phú Nhai là quê hương của sáu trong 117 Thánh Tử đạo Việt Nam: bốn linh mục Dòng Đa Minh Vinhsơn Phạm Hiếu Liêm, Tôma Đinh Viết Dụ, Vinhsơn Đỗ Yến, Đaminh Đinh Đức Mậu và hai giáo dân Đaminh Đinh Đạt, Giuse Trần Văn Tuấn. Hằng năm, lễ kỷ niệm cung hiến (7/12) và lễ Đức Mẹ Vô Nhiễm Nguyên Tội (8/12) là dịp hành hương lớn của giáo phận.

_Ghi chú:_ Câu 'Tiểu Vương cung đầu tiên ở miền Bắc' dựa trên việc Sở Kiện được phong sau (2010) — người kiểm chứng nên xác minh lại; nếu không chắc thì bỏ vế này.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Phú Nhai là quê của 6 trong 117 Thánh Tử đạo Việt Nam (liệt kê tên) | [S2] [S7] | cao |
| Lễ 7/12 (cung hiến) và 8/12 (Vô Nhiễm Nguyên Tội) là các lễ lớn | [S5] [S6] | cao |
| Tiểu Vương cung Thánh đường đầu tiên ở miền Bắc | [S15] | thấp |


### `oralTradition` — sửa

> Người Công giáo Bùi Chu vẫn truyền nhau về lời khấn năm 1858 như một lời hứa đã được Đức Mẹ nhận lời: giữa lúc bách hại ác liệt nhất, Đức cha Vinh và cha chính Hòa hứa rằng nếu giáo phận được bình an sẽ nhận Mẹ làm bổn mạng và dựng một đền thờ nguy nga; các bài viết của giáo phận chép lại rằng “lời khấn hứa đã được Đức Mẹ nhận lời”, và ngôi đền thánh hôm nay được người trong xứ coi là lời tạ ơn ấy. Theo lời các cụ trong vùng kể lại, khoảng thế kỷ XIII có mấy ông tên Tổng, Huyện, Điện, Bành từ miền Tam Đảo về khai khẩn bãi ven sông, lập nên làng Thủy Nhai; đến khoảng thế kỷ XV, theo gia phả, dòng họ Đinh từ Thủy Nhai dời xuống phía nam lập Thủy Nhai Hạ thôn — tức xứ Phú Nhai ngày nay. Một số bài viết chép lại rằng để có tiền dựng lại thánh đường sau trận bão 1929, năm 1930 giáo phận đã mở một cuộc xổ số trên toàn quốc. Còn niềm tự hào lưu truyền lâu nhất có lẽ là lời khen rằng đền thánh 1933 “lớn lao và đồ sộ nhất Đông Dương” — ngày nay báo chí, trang du lịch quen gọi là “Tiểu Vương cung Thánh đường lớn nhất Đông Nam Á”; đó là cách nói lưu hành rộng, chưa có số liệu so sánh đi kèm.

_Ghi chú:_ Mỗi ý mở bằng nhãn truyền tụng riêng. Chuyện 'dấu lạ / tuyết rơi năm 1866' chỉ thấy trong đoạn trích của máy tìm kiếm, chưa đọc được văn bản gốc — CHƯA đưa vào, để ở leads[].

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Lời khấn 1858 và câu 'lời khấn hứa đã được Đức Mẹ nhận lời' được giáo phận chép lại | [S2] [S7] | cao |
| Lời các cụ kể về khai khẩn Thủy Nhai và gia phả họ Đinh lập Thủy Nhai Hạ thôn (Phú Nhai) | [S8] | trung bình |
| Cuộc xổ số toàn quốc năm 1930 để lấy kinh phí tái thiết | [S1] | thấp |
| Cách nói 'đồ sộ nhất Đông Dương' / 'lớn nhất Đông Nam Á' | [S2] [S13] [S14] | trung bình |


### `lat` — sửa

```json
20.3
```

_Ghi chú:_ Toạ độ cũ 20.3275, 106.3317 lệch khoảng 4km về phía tây bắc so với nhà thờ. Toạ độ mới lấy tâm toà nhà thờ trên OpenStreetMap, đối chiếu toạ độ trong hộp thông tin Wikipedia tiếng Việt (lệch dưới 50m). Độ tin cậy: đo từ bản đồ, tốt.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Tâm toà nhà thờ ở 20.3000 N (OSM way 1177046930: 20.30002; Wikipedia vi: 20.299946) | [S9] [S1] | cao |


### `lng` — sửa

```json
106.3632
```

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Tâm toà nhà thờ ở 106.3632 E (OSM: 106.36324; Wikipedia vi: 106.362811) | [S9] [S1] | cao |


### `year` — giữ nguyên

_Ghi chú:_ Giữ 1866 — năm dựng nhà thờ đầu tiên tại Phú Nhai. Lời khấn 1858 là mốc khởi ý nhưng chưa có công trình tại chỗ.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Nhà thờ đầu tiên dựng năm 1866 | [S1] [S4] [S5] | cao |


### `location` — sửa

> Làng Phú Nhai, xã Xuân Hưng, tỉnh Ninh Bình (trước 2025: xã Xuân Phương, huyện Xuân Trường, tỉnh Nam Định)

_Ghi chú:_ Theo đơn vị hành chính sau sáp nhập 2025.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Nhà thờ Phú Nhai thuộc xã Xuân Hưng, tỉnh Ninh Bình | [S4] [S1] [S9] | cao |
| Địa chỉ cũ: xã Xuân Phương, huyện Xuân Trường, tỉnh Nam Định | [S5] | cao |


### `title` — sửa

> Vương Cung Thánh Đường Đức Mẹ Vô Nhiễm Nguyên Tội Phú Nhai

_Ghi chú:_ Bản cũ ghi 'Đại Vương Cung' — sai, Phú Nhai là Tiểu Vương cung (Minor Basilica).

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Tước hiệu là Tiểu Vương cung Thánh đường | [S2] [S3] | cao |


### `elevation` — giữ nguyên

_Ghi chú:_ Giữ '10m' của bản cũ nhưng không tìm được nguồn nào; ghi ở unknowns[].

### `sources` — sửa

```json
[
  {
    "title": "Vương cung thánh đường Phú Nhai - Wikipedia tiếng Việt",
    "url": "https://vi.wikipedia.org/wiki/Vương_cung_thánh_đường_Phú_Nhai",
    "tier": "B"
  },
  {
    "title": "Giới thiệu Giáo phận Bùi Chu - Trang tin Giáo phận Bùi Chu",
    "url": "https://gpbuichu.org/index.php/giao-phan/Gioi-thieu-Giao-phan.html",
    "tier": "B"
  },
  {
    "title": "Lịch sử hình thành và phát triển của Nhà thờ Phú Nhai - Cổng thông tin xã Xuân Hưng, Ninh Bình",
    "url": "https://xuanhung.ninhbinh.gov.vn/2025/08/05/lich-su-hinh-thanh-va-phat-trien-cua-nha-tho-phu-nhai/",
    "tier": "B"
  },
  {
    "title": "Nhà thờ Phú Nhai, một trong 4 Tiểu Vương cung Thánh đường ở Việt Nam - VOV5",
    "url": "https://vovworld.vn/vi-VN/viet-nam-dat-nuoc-con-nguoi/nha-tho-phu-nhai-mot-trong-4-tieu-vuong-cung-thanh-duong-o-viet-nam-817620.vov",
    "tier": "B"
  }
]
```

_Ghi chú:_ Thay link tìm kiếm Google bằng trang giáo phận thật; thêm trang xã và VOV5.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Bốn bài viết trực tiếp, đều mở được ngày 2026-09-24 | [S1] [S2] [S4] [S5] | cao |


### `realImage` — giữ nguyên

_Ghi chú:_ Giữ null trong record vì research không được thêm file vào src/assets/. Ảnh đề xuất nằm ở images[] (role 'chinh'), file tải sẵn ở docs/khao-cuu/phunhai/anh/. marian-publish sẽ chép sang assets/real_photos/phunhai.jpg nếu được duyệt.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Ảnh chính đề xuất là ảnh thực địa mặt tiền trên Wikimedia Commons (Hoangvantoanajc, 2011, CC BY-SA 3.0) | [S11] | cao |


### `galleryImages` — giữ nguyên

_Ghi chú:_ Giữ [] trong record, lý do như trên. Hai ảnh phụ đề xuất ở images[] (role 'phu').

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Hai ảnh phụ đề xuất (nội thất, lăng tử đạo) trên Wikimedia Commons, cùng tác giả, 2011 | [S11] | cao |


## 3. Danh mục nguồn

| Mã | Tiêu đề | URL | Cấp | Ngày truy cập | Chứng minh điều gì | Vào dữ liệu |
|---|---|---|---|---|---|---|
| S1 | Vương cung thánh đường Phú Nhai - Wikipedia tiếng Việt | [liên kết](https://vi.wikipedia.org/wiki/Vương_cung_thánh_đường_Phú_Nhai) | B | 2026-09-24 | Các đời nhà thờ 1866/1881/1916-1922, bão 1929, xổ số 1930, cung hiến 1933, chiếm đóng 1949-1953 (dẫn 'Lịch sử Đảng bộ và nhân dân xã Xuân Phương 1903-2005'), trùng tu 2003-2004, kích thước, chuông, chữ Hán/búp sen, đài Thánh Đa Minh, lăng 83 vị tử đạo, toạ độ 20.299946/106.362811, địa chỉ xã Xuân Hưng | có |
| S2 | Giới thiệu Giáo phận Bùi Chu - Trang tin Giáo phận Bùi Chu | [liên kết](https://gpbuichu.org/index.php/giao-phan/Gioi-thieu-Giao-phan.html) | B | 2026-09-24 | Lời khấn 1858 (nguyên văn), 1881, khánh thành 8/12/1923 do cha chính Y thiết kế, bão 30/9/1929 đổ 48 nhà thờ, kích thước 1933 và câu 'lớn lao và đồ sộ nhất Đông Dương', xức dầu 7/12/1933, 6 thánh tử đạo, 12/8/2008 phong Tiểu Vương cung và 8/12/2008 công bố | có |
| S3 | GP Bùi Chu - Hội đồng Giám mục Việt Nam | [liên kết](https://hdgmvietnam.com/chi-tiet/gp-bui-chu-31467) | B | 2026-09-24 | Khởi công 1881, bão 1929, hoàn thành 1933, kích thước 80x27x30m tháp 44m, 12/8/2008 phong Tiểu Vương cung | — |
| S4 | Lịch sử hình thành và phát triển của Nhà thờ Phú Nhai - Cổng thông tin xã Xuân Hưng, Ninh Bình | [liên kết](https://xuanhung.ninhbinh.gov.vn/2025/08/05/lich-su-hinh-thanh-va-phat-trien-cua-nha-tho-phu-nhai/) | B | 2026-09-24 | Địa chỉ hành chính mới (xã Xuân Hưng, Ninh Bình), 1866, 1881, 1916-1922, bão 1929, cung hiến 7/12/1933, trùng tu 2003-2004, 2008 | có |
| S5 | Nhà thờ Phú Nhai, một trong 4 Tiểu Vương cung Thánh đường ở Việt Nam - VOV5 (Ngọc Anh, 03/01/2020) | [liên kết](https://vovworld.vn/vi-VN/viet-nam-dat-nuoc-con-nguoi/nha-tho-phu-nhai-mot-trong-4-tieu-vuong-cung-thanh-duong-o-viet-nam-817620.vov) | B | 2026-09-24 | Địa chỉ cũ (Xuân Phương, Xuân Trường, Nam Định), các mốc 1866/1881/1916-1922/1933/2003-2004/2008, kích thước (ghi rộng 30m), chuông 2 tấn chỉ đánh dịp đại lễ, các lễ 7/12, 8/12, 24/12 | có |
| S6 | Tiểu Vương cung thánh đường Phú Nhai - Thông tấn xã Việt Nam (vietnam.vnanet.vn) | [liên kết](https://vietnam.vnanet.vn/vietnamese/tin-tuc/tieu-vuong-cung-thanh-duong-phu-nhai-85371.html) | B | 2026-09-24 | Trùng tu 17/3/2003 - 26/9/2004, bốn chuông đúc tại Pháp, tượng Thánh Đa Minh 17m, 12/8/2008 phong Tiểu Vương cung, các lễ 7/12 và 8/12 (ghi rộng 35m) | — |
| S7 | Vương cung thánh đường Phú Nhai - Huynh đoàn Giáo dân Đa Minh Việt Nam | [liên kết](https://hddmvn.net/vuong-cung-thanh-duong-phu-nhai/) | C | 2026-09-24 | Chép lại gần nguyên văn S2 (không tính là nguồn độc lập); thêm tên và năm sinh-tử của 6 thánh tử đạo, 'lăng 87 tôi tớ Chúa', 5 giám mục quê Phú Nhai, câu 'lời khấn hứa đã được Đức Mẹ nhận lời' | — |
| S8 | Thủy Nhai mở Năm Thánh dịp nhà thờ 100 năm - Trang tin Giáo phận Bùi Chu | [liên kết](https://gpbuichu.org/news/TIN-GIAO-PHAN-75/thuy-nhai-mo-nam-thanh-dip-nha-tho-100-nam-5263.html) | B | 2026-09-24 | Lời các cụ kể về khai khẩn Thủy Nhai (ông Tổng, Huyện, Điện, Bành) và gia phả: họ Đinh lập Thủy Nhai Hạ thôn, tức xứ Phú Nhai ngày nay | — |
| S9 | OpenStreetMap - Vương cung thánh đường Đức Mẹ Vô nhiễm Nguyên tội (way 1177046930) | [liên kết](https://www.openstreetmap.org/way/1177046930) | C | 2026-09-24 | Toạ độ tâm toà nhà thờ 20.30002, 106.36324 (thẻ basilica=minor); node 10712565105 gần đó ghi địa chỉ Xã Xuân Hưng, Tỉnh Ninh Bình | — |
| S10 | Basilica of Immaculate Conception, Phu Nhai - English Wikipedia | [liên kết](https://en.wikipedia.org/wiki/Basilica_of_Immaculate_Conception,_Phu_Nhai) | B | 2026-09-24 | Toạ độ khác (20.3077, 106.3298) và câu 'mỗi chuông nặng hai tấn' — chỉ dùng để ghi mâu thuẫn | — |
| S11 | Category:Basilica of Phu Nhai - Wikimedia Commons | [liên kết](https://commons.wikimedia.org/wiki/Category:Basilica_of_Phu_Nhai) | C | 2026-09-24 | Kho ảnh thực địa (chủ yếu của Hoangvantoanajc, 5/4/2011, CC BY-SA 3.0); ảnh xác nhận vị trí đài Thánh Đa Minh và lăng tử đạo | — |
| S12 | Phú Nhai – Dòng chảy ký ức và đức tin - Trang Vương Cung Thánh Đường Phú Nhai | [liên kết](https://phunhai.com/phu-nhai-dong-chay-ky-uc-va-duc-tin/) | B | 2026-09-24 | Giáo xứ đang kêu gọi đóng góp ảnh cũ, tư liệu, lời kể cho 'Album ký ức Phú Nhai' hướng tới 500 năm Tin Mừng (2033) — manh mối cho lượt khảo cứu sau | — |
| S13 | Nhà thờ Phú Nhai – Tiểu Vương cung Thánh đường lớn nhất Đông Nam Á - iVIVU.com | [liên kết](https://www.ivivu.com/blog/2023/01/nha-tho-phu-nhai-tieu-vuong-cung-thanh-duong-lon-nhat-dong-nam-a/) | C | 2026-09-24 | Ví dụ cách nói 'lớn nhất Đông Nam Á' trên trang du lịch (chỉ thấy tiêu đề và đoạn trích tìm kiếm; trang trả 403 khi đọc) | — |
| S14 | Chiêm ngưỡng vẻ lộng lẫy của Tiểu Vương cung Thánh đường Phú Nhai - Công dân & Khuyến học | [liên kết](https://congdankhuyenhoc.vn/chiem-nguong-ve-long-lay-cua-tieu-vuong-cung-thanh-duong-phu-nhai-179221212174029264.htm) | C | 2026-09-24 | Báo mạng nhắc lại cách nói 'lớn nhất Đông Nam Á' và các số liệu kích thước (chỉ thấy qua kết quả tìm kiếm, chưa đọc toàn văn) | — |
| S15 | Nét độc đáo Nhà thờ Phú Nhai - Tiểu Vương cung Thánh đường lớn nhất Đông Nam Á - vntravel.org.vn | [liên kết](https://vntravel.org.vn/net-doc-dao-nha-tho-phu-nhai-tieu-vuong-cung-thanh-duong-lon-nhat-dong-nam-a-a2713.html) | C | 2026-09-24 | Kết quả tìm kiếm ghi 'Tiểu Vương cung đầu tiên ở miền Bắc' và 'một trong 4 Tiểu Vương cung tại Việt Nam' (chỉ thấy qua đoạn trích tìm kiếm, chưa đọc toàn văn) | — |
| S16 | Vương Cung Thánh Đường Phú Nhai - kênh YouTube của giáo xứ | [liên kết](https://www.youtube.com/channel/UCxyt-KyOg_Q9lmArPCOwxIA) | D | 2026-09-24 | Kênh video của giáo xứ — manh mối để nghe lời kể, chưa xem | — |


Đưa vào trường `sources` của dữ liệu: [S1], [S2], [S4], [S5] (4 nguồn).

Cấp nguồn:

- **A** — nguồn gốc (văn khố, kỷ yếu, bia ký)
- **B** — thứ cấp đáng tin (trang giáo phận, báo có toà soạn, sách có NXB)
- **C** — tư liệu mở (blog hành hương, trang du lịch, báo mạng tổng hợp, diễn đàn) — trích dẫn được, phải gắn nhãn
- **D** — manh mối thô (mạng xã hội, video, bình luận, lời kể chép lại) — chỉ để lần ra nguồn khác

## 4. Hình ảnh

Đề xuất 3 ảnh: 1 ảnh chính, 2 ảnh phụ.

### File:Vương cung thánh đường Phú Nhai.JPG — Ảnh chính (→ `realImage`)

| Mục | Nội dung |
|---|---|
| Trang mô tả file gốc | [https://commons.wikimedia.org/wiki/File:V%C6%B0%C6%A1ng_cung_th%C3%A1nh_%C4%91%C6%B0%E1%BB%9Dng_Ph%C3%BA_Nhai.JPG](https://commons.wikimedia.org/wiki/File:V%C6%B0%C6%A1ng_cung_th%C3%A1nh_%C4%91%C6%B0%E1%BB%9Dng_Ph%C3%BA_Nhai.JPG) |
| Tác giả | Hoangvantoanajc |
| Giấy phép (nếu biết, không bắt buộc) | CC BY-SA 3.0 |
| Năm chụp | 2011 |
| Nội dung ảnh | Toàn cảnh chính diện mặt tiền Gothic với hai tháp chuông; bên trái là lăng hài cốt tử đạo, bên phải là đài Thánh Đa Minh; lối đi thẳng vào cửa chính |
| `realImageCaption` đề xuất | Mặt tiền Vương cung Thánh đường Phú Nhai, bên trái lăng tử đạo, bên phải đài Thánh Đa Minh (Ảnh: Hoangvantoanajc, 2011 — Nguồn: Wikimedia Commons, CC BY-SA 3.0) |
| Cam kết | Ảnh chụp thực địa, không do AI tạo sinh |


### File:Nội thất vương cung thánh đường Phú Nhai.JPG — Ảnh phụ (→ `galleryImages[]`)

| Mục | Nội dung |
|---|---|
| Trang mô tả file gốc | [https://commons.wikimedia.org/wiki/File:N%E1%BB%99i_th%E1%BA%A5t_v%C6%B0%C6%A1ng_cung_th%C3%A1nh_%C4%91%C6%B0%E1%BB%9Dng_Ph%C3%BA_Nhai.JPG](https://commons.wikimedia.org/wiki/File:N%E1%BB%99i_th%E1%BA%A5t_v%C6%B0%C6%A1ng_cung_th%C3%A1nh_%C4%91%C6%B0%E1%BB%9Dng_Ph%C3%BA_Nhai.JPG) |
| Tác giả | Hoangvantoanajc |
| Giấy phép (nếu biết, không bắt buộc) | CC BY-SA 3.0 |
| Năm chụp | 2011 |
| Nội dung ảnh | Lòng nhà thờ nhìn về cung thánh: vòm sườn nhọn sơn vàng, hàng cột trắng, bàn thờ và bệ tượng |
| `galleryImages[].caption` đề xuất | Nội thất Vương cung Thánh đường Phú Nhai nhìn về cung thánh (Ảnh: Hoangvantoanajc, 2011 — Nguồn: Wikimedia Commons, CC BY-SA 3.0) |
| Cam kết | Ảnh chụp thực địa, không do AI tạo sinh |


### File:Lăng hài cốt tử đạo Phú Nhai.JPG — Ảnh phụ (→ `galleryImages[]`)

| Mục | Nội dung |
|---|---|
| Trang mô tả file gốc | [https://commons.wikimedia.org/wiki/File:L%C4%83ng_h%C3%A0i_c%E1%BB%91t_t%E1%BB%AD_%C4%91%E1%BA%A1o_Ph%C3%BA_Nhai.JPG](https://commons.wikimedia.org/wiki/File:L%C4%83ng_h%C3%A0i_c%E1%BB%91t_t%E1%BB%AD_%C4%91%E1%BA%A1o_Ph%C3%BA_Nhai.JPG) |
| Tác giả | Hoangvantoanajc |
| Giấy phép (nếu biết, không bắt buộc) | CC BY-SA 3.0 |
| Năm chụp | 2011 |
| Nội dung ảnh | Lăng đá nhiều tầng có thánh giá trên đỉnh, bảng đồng ghi 'Lăng các anh hùng tử đạo' |
| `galleryImages[].caption` đề xuất | Lăng lưu giữ hài cốt các vị tử đạo quê Phú Nhai trước thánh đường (Ảnh: Hoangvantoanajc, 2011 — Nguồn: Wikimedia Commons, CC BY-SA 3.0) |
| Cam kết | Ảnh chụp thực địa, không do AI tạo sinh |



### Kho ảnh ứng viên

Ảnh nhặt được trong lúc đọc tư liệu, chưa qua lọc. Gom rộng trước, lọc sau — mục này để người kiểm chứng và lượt khảo cứu sau không phải đi tìm lại từ đầu.

| Trang chứa ảnh | Ảnh chụp gì | Trạng thái | Lý do chọn / loại |
|---|---|---|---|
| [Wikimedia Commons (Hoangvantoanajc)](https://commons.wikimedia.org/wiki/File:V%C6%B0%C6%A1ng_cung_th%C3%A1nh_%C4%91%C6%B0%E1%BB%9Dng_Ph%C3%BA_Nhai.JPG) | Chính diện mặt tiền, 2288x1520, EXIF SONY DSC, 5/4/2011 | đã chọn | Ảnh gốc chưa chỉnh phối cảnh, thấy đủ hai tháp, lăng tử đạo và đài Thánh Đa Minh — đúng chủ thể; đã tải về anh/phunhai-mat-tien.jpg. Chọn làm ảnh chính. |
| [Wikimedia Commons (Hoangvantoanajc)](https://commons.wikimedia.org/wiki/File:N%E1%BB%99i_th%E1%BA%A5t_v%C6%B0%C6%A1ng_cung_th%C3%A1nh_%C4%91%C6%B0%E1%BB%9Dng_Ph%C3%BA_Nhai.JPG) | Nội thất nhìn về cung thánh, 5/4/2011 | đã chọn | Đúng chủ thể, ảnh máy ảnh thật; tải về anh/phunhai-3-noi-that.jpg. Ảnh phụ. |
| [Wikimedia Commons (Hoangvantoanajc)](https://commons.wikimedia.org/wiki/File:L%C4%83ng_h%C3%A0i_c%E1%BB%91t_t%E1%BB%AD_%C4%91%E1%BA%A1o_Ph%C3%BA_Nhai.JPG) | Lăng hài cốt tử đạo, bảng đọc được 'Lăng các anh hùng tử đạo' | đã chọn | Minh hoạ trực tiếp phần tử đạo; tải về anh/phunhai-2-lang-tu-dao.jpg. Ảnh phụ. |
| [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Immaculate_Conception_church,_Nhai_Ph%C3%BA.jpg) | Bản mặt tiền đã được người dùng khác chỉnh phối cảnh (perspective shift) từ ảnh gốc của Hoangvantoanajc, CC BY-SA 4.0 | đang cân nhắc | Chỉnh hình học thủ công, không phải AI; nhưng trùng nội dung với ảnh chính nên để dự phòng |
| [Wikimedia Commons (vi:User:HikariTenshi)](https://commons.wikimedia.org/wiki/File:Nh%C3%A0_th%E1%BB%9D_V%C6%B0%C6%A1ng_cung_th%C3%A1nh_%C4%91%C6%B0%E1%BB%9Dng_Ph%C3%BA_Nhai.JPG) | Ảnh dọc mặt tiền, 12/7/2010, ảnh hộp thông tin của Wikipedia tiếng Việt | đang cân nhắc | Đúng chủ thể, CC BY-SA 3.0; chưa tải về, dự phòng |
| [Wikimedia Commons (Hoangvantoanajc)](https://commons.wikimedia.org/wiki/File:M%E1%BA%B7t_b%C3%AAn_V%C6%B0%C6%A1ng_cung_th%C3%A1nh_%C4%91%C6%B0%E1%BB%9Dng_Ph%C3%BA_Nhai.JPG) | Mặt bên nhà thờ, 5/4/2011 | đang cân nhắc | Đúng chủ thể; dự phòng cho ảnh phụ |
| [Wikimedia Commons (Hoangvantoanajc)](https://commons.wikimedia.org/wiki/File:C%E1%BB%ADa_ch%C3%ADnh_V%C6%B0%C6%A1ng_cung_th%C3%A1nh_%C4%91%C6%B0%E1%BB%9Dng_Ph%C3%BA_Nhai.JPG) | Cửa chính, 5/4/2011 | đang cân nhắc | Đúng chủ thể; dự phòng |
| [Wikimedia Commons (Hoangvantoanajc)](https://commons.wikimedia.org/wiki/File:Cung_th%C3%A1nh.JPG) | Cung thánh / bàn thờ chính, 5/4/2011 | đang cân nhắc | Đúng chủ thể; dự phòng |
| [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:%C4%90%C3%A0i_gi%E1%BA%A3ng_%E1%BB%9F_nh%C3%A0_th%E1%BB%9D_Ph%C3%BA_Nhai.JPG) | Toà giảng trong nhà thờ Phú Nhai | đang cân nhắc | Chi tiết nội thất; chưa xem metadata |
| [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Basilica_of_Phu_Nhai-interior) | Thể loại con ảnh nội thất | đang cân nhắc | Chưa duyệt hết (API bị giới hạn tần suất lúc khảo cứu) |
| [VOV5](https://vovworld.vn/vi-VN/viet-nam-dat-nuoc-con-nguoi/nha-tho-phu-nhai-mot-trong-4-tieu-vuong-cung-thanh-duong-o-viet-nam-817620.vov) | Bài báo có ảnh minh hoạ nhà thờ | đang cân nhắc | Chưa xem chi tiết ảnh; Commons đã đủ |
| [Trang Vương Cung Thánh Đường Phú Nhai](https://phunhai.com/phu-nhai-dong-chay-ky-uc-va-duc-tin/) | Giáo xứ đang gom ảnh cũ các thời kỳ cho 'Album ký ức Phú Nhai' | đang cân nhắc | Tiềm năng có ảnh nhà thờ 1923 hoặc trước 1929 — chưa công bố; theo dõi |


## 5. Chuyện kể & giai thoại

Phần này là tư liệu truyền tụng, **không phải sự thật lịch sử đã kiểm chứng**. Nội dung được chọn sẽ viết vào `oralTradition` kèm nhãn "tương truyền" / "theo lời kể", không bao giờ đưa vào `historicalFact`.

| Chuyện kể | Độ xác thực | Lưu hành ở đâu | Nguồn |
|---|---|---|---|
| Lời khấn năm 1858 và đền thánh tạ ơn | có nguồn A/B đối chiếu phần nền | Trang giáo phận Bùi Chu, Huynh đoàn Đa Minh, lưu truyền trong giáo phận | [S2] [S7] |
| Thủy Nhai Hạ thôn — gốc tích làng Phú Nhai | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | Lời các cụ và gia phả, được trang giáo phận chép lại trong bài về giáo xứ Thủy Nhai láng giềng | [S8] |
| Cuộc xổ số toàn quốc năm 1930 | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | Wikipedia tiếng Việt, câu không có chú thích | [S1] |
| 'Lớn nhất Đông Dương' rồi 'lớn nhất Đông Nam Á' | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | Trang giáo phận, báo mạng, rất nhiều trang du lịch | [S2] [S13] [S14] |


### Lời khấn năm 1858 và đền thánh tạ ơn

> Giữa lúc bách hại dưới triều Tự Đức, năm 1858 Đức cha Valentinô Berrio-Ochoa Vinh và cha chính Emmanuel Riaño Hòa dâng giáo phận Bùi Chu cho Đức Mẹ Vô Nhiễm, hứa rằng nếu giáo phận được bình an sẽ nhận Mẹ làm bổn mạng và xây một đền thờ nguy nga. Các bài viết của giáo phận chép rằng 'lời khấn hứa đã được Đức Mẹ nhận lời': Đức cha Vinh tử đạo năm 1861, cha Hòa sau làm giám mục, dựng nhà thờ Phú Nhai năm 1866 và 1881 — đền thánh hôm nay được coi là lời tạ ơn ấy.

**Mô-típ:** Lời khấn được nhận lời — đền thờ tạ ơn · **Độ xác thực:** có nguồn A/B đối chiếu phần nền · **Lưu hành:** Trang giáo phận Bùi Chu, Huynh đoàn Đa Minh, lưu truyền trong giáo phận · **Nguồn:** [S2] [S7]

_Ghi chú:_ Phần nền (lời khấn, các mốc xây dựng) có nguồn B — đã vào historicalFact. Phần 'Đức Mẹ nhận lời' là niềm tin, viết vào oralTradition như niềm tin.

### Thủy Nhai Hạ thôn — gốc tích làng Phú Nhai

> Theo lời các cụ kể lại, khoảng thế kỷ XIII có mấy ông tên Tổng, Huyện, Điện, Bành từ miền Tam Đảo (Vĩnh Phúc) về khai khẩn vùng bãi ven sông, lập làng Thủy Nhai. Theo gia phả, đến khoảng thế kỷ XV dòng họ Đinh từ Thủy Nhai dời xuống phía nam, đặt tên Thủy Nhai Hạ thôn — tức xứ Phú Nhai ngày nay.

**Mô-típ:** Tên gọi dân gian / người khai khẩn lập làng · **Độ xác thực:** chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng · **Lưu hành:** Lời các cụ và gia phả, được trang giáo phận chép lại trong bài về giáo xứ Thủy Nhai láng giềng · **Nguồn:** [S8]

_Ghi chú:_ Nguồn là trang giáo phận nhưng chính nó nói là 'nghe các cụ kể lại' — vẫn là truyền tụng. Nguồn nói về Thủy Nhai, chỉ nhắc Phú Nhai ở phần gia phả.

### Cuộc xổ số toàn quốc năm 1930

> Sau khi bão năm 1929 quật đổ đền thánh, năm 1930 bề trên giáo phận đã mở một cuộc xổ số trên toàn quốc để lấy kinh phí xây lại.

**Mô-típ:** Người cung tiến / cách gây quỹ dựng đền · **Độ xác thực:** chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng · **Lưu hành:** Wikipedia tiếng Việt, câu không có chú thích · **Nguồn:** [S1]

_Ghi chú:_ Chi tiết lạ, đáng tra thêm trên báo Công giáo 1930 (Nam Kỳ Địa Phận, Trung Hòa Nhật Báo) — xem leads.

### 'Lớn nhất Đông Dương' rồi 'lớn nhất Đông Nam Á'

> Trang giáo phận tả đền thánh 1933 là 'lớn lao và đồ sộ nhất Đông Dương'. Ngày nay báo mạng và trang du lịch chép chuyền nhau rằng Phú Nhai là 'Tiểu Vương cung Thánh đường lớn nhất Đông Nam Á'.

**Mô-típ:** Niềm tự hào địa phương về kích thước công trình · **Độ xác thực:** chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng · **Lưu hành:** Trang giáo phận, báo mạng, rất nhiều trang du lịch · **Nguồn:** [S2] [S13] [S14]

_Ghi chú:_ Không nguồn nào kèm số liệu so sánh với các nhà thờ khác. Không đưa vào historicalFact — bản cũ có câu này trong historicalFact, đã bỏ.

## 6. Mâu thuẫn nguồn & điểm chưa chắc chắn

| Vấn đề | Nguồn nói A | Nguồn nói B | Xử lý đề xuất |
|---|---|---|---|
| Năm khánh thành ngôi thánh đường Gothic thứ ba | 8/12/1923, sau 6 năm xây dựng [S2] | Xây 1916, khánh thành 1922 [S1] | Theo trang giáo phận (S2) vì ghi ngày cụ thể; S4, S5 ghi 1916-1922 có thể chép từ Wikipedia. Người kiểm chứng quyết. |
| Ngày trận bão năm 1929 | 30/9/1929 (bão Ất Tỵ theo S7) [S2] | 24/6/1929 [S1] | historicalFact chỉ ghi 'năm 1929', không ghi ngày. Có thể một bên dùng âm lịch — chưa kiểm được. (Lưu ý: năm 1929 là Kỷ Tỵ, không phải Ất Tỵ, nên chi tiết 'Ất Tỵ' ở S7 đáng ngờ.) |
| Ngày xức dầu cung hiến 1933 | 7/12/1933 [S2] | 8/12/1933 (lễ Vô Nhiễm) [S1] | Ghi 7/12/1933 theo S2, S4 và hộp thông tin của chính S1; lễ kỷ niệm cung hiến hằng năm 7/12 (S5, S6) cũng khớp. |
| Chiều rộng thánh đường | 27m [S2] | 30m (S5) / 35m (S6) [S5] | Ghi 27m theo S2, S1, S3. |
| Số hài cốt trong lăng tử đạo | 83 người tử đạo [S1] | 87 tôi tớ Chúa quê Phú Nhai [S7] | Không ghi con số vào record; để unknowns. |
| Trọng lượng chuông | 2.000 / 1.200 / 600 / 100 kg [S1] | Mỗi quả hai tấn (S10); '3 và 1 tấn, 6 và 1 tạ' (S7) [S10] | Ghi theo S1 kèm chữ 'Wikipedia tiếng Việt ghi'; S5 xác nhận có quả 2 tấn. |
| Ngày phong Tiểu Vương cung Thánh đường | 12/8/2008 (công bố 8/12/2008) [S2] | 14/01/2008 (bản ghi hiện tại trên ducme.vn, không có nguồn) [S1] | Sửa thành 12/8/2008 theo S2, S3, S6. Vế b không có nguồn — S1 chỉ ghi 'năm 2008', đặt vào đây để lược đồ có mã nguồn. |
| Toạ độ | 20.3000, 106.3632 (OSM) ≈ 20.299946, 106.362811 (Wikipedia vi) [S9] | 20.3077, 106.3298 (Wikipedia en); bản ghi hiện tại 20.3275, 106.3317 [S10] | Dùng 20.3000, 106.3632 — hai nguồn độc lập khớp nhau dưới 50m, OSM có thẻ basilica=minor trên đúng toà nhà. |
| Năm kỷ niệm 150 năm dâng giáo phận | 150 năm (1858-2008) — khớp lời khấn 1858 [S7] | '150 năm (1848-2008)' [S2] | Coi '1848' ở S2 là lỗi đánh máy; chính S2 ghi lời khấn năm 1858. |


**Manh mối chưa lần hết — để lượt khảo cứu sau nối tiếp:**

- Một kết quả tìm kiếm tóm tắt trang phunhai.com có câu 'năm 1866, sau một dấu lạ — tuyết rơi ở Phú Nhai — thánh đường được xây'; một đoạn trích khác ghi 'giáo dân xin Đức Mẹ tỏ dấu lạ để xây đền thánh lớn, bỗng dấu lạ xuất hiện ở làng Phú Nhai' — ở: Đoạn trích máy tìm kiếm của https://phunhai.com/ và một trang chưa xác định; khi mở phunhai.com không thấy đoạn này (Nếu tìm được văn bản gốc thì đây là chuyện kể ly kỳ nhất của linh địa — cần đọc tận mắt trước khi ghi vào folklore)
- Sách 'Lịch sử Đảng bộ và nhân dân xã Xuân Phương 1903-2005' — nguồn Wikipedia dẫn cho giai đoạn 1949-1953 — ở: Chú thích trong S1 (Cần bản gốc để xác minh mốc chiếm đóng và rút quân)
- Chương trình 'Phú Nhai – Dòng chảy ký ức và đức tin' của giáo xứ đang gom ảnh cũ, thư từ, lời kể — ở: https://phunhai.com/phu-nhai-dong-chay-ky-uc-va-duc-tin/ · email phunhai.media@gmail.com (Có thể có ảnh nhà thờ 1923 trước bão và lời kể các cụ — liên hệ sau)
- Danh tính 'cha chính Y' (người thiết kế nhà thờ 1923) và linh mục Morênô (Wikipedia nhắc cùng GM Munagôri khởi công 1916) — ở: S1, S2 (Tên đầy đủ (tiếng Tây Ban Nha) của cha Y giúp tra tư liệu Dòng Đa Minh)
- Kênh YouTube giáo xứ [S16] và review Google Maps — ở: https://www.youtube.com/channel/UCxyt-KyOg_Q9lmArPCOwxIA (Nơi hay có lời kể của người trong xứ — chưa xem)
- Báo Công giáo năm 1929-1930 (Nam Kỳ Địa Phận, Trung Hòa Nhật Báo) để xác minh ngày bão và cuộc xổ số — thử thư viện số Gallica/BnF và thư viện Dòng Đa Minh

**Chưa tìm được nguồn, đã cố ý để ngoài đề xuất:**

- Tên đầy đủ của 'cha chính Y' và người thiết kế ngôi đền thánh tái thiết 1929-1933
- Nguồn cho độ cao '10m' trong trường elevation — giữ nguyên bản cũ nhưng không kiểm được
- Số hài cốt chính xác trong lăng tử đạo (83 hay 87)
- Ngày chính xác của trận bão 1929
- Nguồn gốc câu chuyện 'dấu lạ / tuyết rơi' năm 1866
- Phú Nhai có thật là Tiểu Vương cung đầu tiên ở miền Bắc, và tổng số Tiểu Vương cung ở Việt Nam tính đến 2026

## 7. Tự đánh giá

| Trục | Đánh giá |
|---|---|
| Độ tin cậy tổng thể | trung bình |
| Rủi ro lớn nhất | Nhiều nguồn chép chuyền nhau (hddmvn chép gpbuichu; trang xã, VOV5 có thể chép Wikipedia) nên số nguồn độc lập ít hơn vẻ ngoài. Giai đoạn chiếm đóng 1949-1953 chỉ dựa Wikipedia (dẫn sách lịch sử Đảng bộ xã) — đã viết trung tính, nhưng người kiểm chứng cân nhắc có giữ trong historicalFact không. Câu 'Tiểu Vương cung đầu tiên ở miền Bắc' trong significance chỉ dựa nguồn C chưa đọc toàn văn. Các trang du lịch không mở được nên phần chuyện kể còn mỏng. Về cảnh báo tự kiểm: (1) 'lat chỉ có 1 chữ số thập phân' là do 20.3000 được JSON viết gọn thành 20.3 — giá trị thật đo được là 20.30002 (OSM) / 20.299946 (Wikipedia), đã đủ độ chính xác 4 chữ số; (2) trường elevation chưa có claims vì không tìm được nguồn nào cho con số 10m — đã ghi ở unknowns. |
| Đề nghị người kiểm chứng soi kỹ | Mốc 1923 so với 1922; ngày phong 12/8/2008; toạ độ mới (lệch ~4km so với bản cũ); đoạn 1949-1953; vế 'đầu tiên ở miền Bắc' |
| Tổng văn xuôi sau đề xuất | 758 từ |


## 8. Bản ghi dữ liệu đề xuất

```json
{
  "id": "phunhai",
  "name": "Vương Cung Thánh Đường Phú Nhai",
  "title": "Vương Cung Thánh Đường Đức Mẹ Vô Nhiễm Nguyên Tội Phú Nhai",
  "year": 1866,
  "lat": 20.3,
  "lng": 106.3632,
  "elevation": "10m",
  "location": "Làng Phú Nhai, xã Xuân Hưng, tỉnh Ninh Bình (trước 2025: xã Xuân Phương, huyện Xuân Trường, tỉnh Nam Định)",
  "region": "Đồng bằng sông Hồng",
  "diocese": "Giáo phận Bùi Chu",
  "diemStatue5": false,
  "constellationRole": {
    "v1": null,
    "v2": null,
    "v3": null,
    "v4": {
      "star": "Vương cung Thánh đường Bắc Bộ",
      "role": "Đỉnh cao Gothic Á Đông",
      "code": "NAT-17"
    }
  },
  "historicalFact": "Năm 1858, giữa thời cấm đạo, Giám mục Valentinô Berrio-Ochoa Vinh và cha chính Emmanuel Riaño Hòa dâng Giáo phận Bùi Chu cho Đức Maria Vô Nhiễm Nguyên Tội, khấn hứa nếu giáo phận được bình an sẽ nhận Người làm bổn mạng và xây một thánh đường xứng đáng dâng kính Người. Năm 1866, sau khi triều Tự Đức chấm dứt lệnh cấm đạo, cha Hòa dựng tại Phú Nhai ngôi nhà thờ đầu tiên bằng gỗ, lợp bổi. Năm 1881, khi đã làm giám mục, ngài khởi công ngôi thánh đường thứ hai kiểu Á Đông, chín gian, cột lim, có hai tháp chuông. Ngôi thánh đường Gothic thứ ba do cha chính Y thiết kế, khánh thành ngày 8/12/1923 với chiều dài 88m và hai tháp cao 30m, nhưng bị trận bão năm 1929 quật đổ cùng 48 nhà thờ khác trong giáo phận. Công cuộc tái thiết hoàn tất năm 1933; ngày 7/12/1933, Giám mục Pedro Muñagorri Trung xức dầu thánh hiến đền thánh dâng kính Đức Mẹ Vô Nhiễm Nguyên Tội. Từ tháng 11/1949 đến tháng 6/1953, quân viễn chinh Pháp chiếm đóng khu nhà thờ làm đồn bốt. Công trình được đại trùng tu từ 17/3/2003 đến 26/9/2004. Ngày 12/8/2008, nhân kỷ niệm 150 năm dâng giáo phận cho Đức Mẹ, Tòa Thánh ban tước hiệu Tiểu Vương cung Thánh đường; sắc lệnh được Giám mục Giuse Hoàng Văn Tiệm công bố ngày 8/12/2008.",
  "oralTradition": "Người Công giáo Bùi Chu vẫn truyền nhau về lời khấn năm 1858 như một lời hứa đã được Đức Mẹ nhận lời: giữa lúc bách hại ác liệt nhất, Đức cha Vinh và cha chính Hòa hứa rằng nếu giáo phận được bình an sẽ nhận Mẹ làm bổn mạng và dựng một đền thờ nguy nga; các bài viết của giáo phận chép lại rằng “lời khấn hứa đã được Đức Mẹ nhận lời”, và ngôi đền thánh hôm nay được người trong xứ coi là lời tạ ơn ấy. Theo lời các cụ trong vùng kể lại, khoảng thế kỷ XIII có mấy ông tên Tổng, Huyện, Điện, Bành từ miền Tam Đảo về khai khẩn bãi ven sông, lập nên làng Thủy Nhai; đến khoảng thế kỷ XV, theo gia phả, dòng họ Đinh từ Thủy Nhai dời xuống phía nam lập Thủy Nhai Hạ thôn — tức xứ Phú Nhai ngày nay. Một số bài viết chép lại rằng để có tiền dựng lại thánh đường sau trận bão 1929, năm 1930 giáo phận đã mở một cuộc xổ số trên toàn quốc. Còn niềm tự hào lưu truyền lâu nhất có lẽ là lời khen rằng đền thánh 1933 “lớn lao và đồ sộ nhất Đông Dương” — ngày nay báo chí, trang du lịch quen gọi là “Tiểu Vương cung Thánh đường lớn nhất Đông Nam Á”; đó là cách nói lưu hành rộng, chưa có số liệu so sánh đi kèm.",
  "architect": "Thánh đường theo phong cách Gothic kiểu Pháp, dài 80m, rộng 27m, mái cao 30m, hai tháp chuông mặt tiền cao 44m, diện tích sàn khoảng 2.160m². Trong tháp có bốn quả chuông đúc tại Pháp; Wikipedia tiếng Việt ghi trọng lượng 2.000kg, 1.200kg, 600kg và 100kg, quả lớn nhất chỉ đánh vào dịp đại lễ. Giữa khung Gothic là nhiều chi tiết Á Đông: chữ Hán trang trí quanh các ô kính, búp sen trên mái vòm. Trước mặt tiền, bên phải là đài Thánh Đa Minh cao 17m (riêng phần tượng 2,3m), bên trái là lăng hài cốt các vị tử đạo quê Phú Nhai cao 15m; quanh nhà thờ có phù điêu 14 chặng Đàng Thánh Giá. Ngôi thánh đường Gothic trước đó (1923) do cha chính Y thiết kế và chỉ huy xây dựng; người thiết kế ngôi đền thánh tái thiết năm 1933 thì chưa nguồn nào nêu tên.",
  "significance": "Đền thánh Phú Nhai là công trình hiện thực hóa lời khấn năm 1858 của Giáo phận Bùi Chu với Đức Mẹ Vô Nhiễm Nguyên Tội, bổn mạng giáo phận, và là Tiểu Vương cung Thánh đường đầu tiên ở miền Bắc. Giáo xứ Phú Nhai là quê hương của sáu trong 117 Thánh Tử đạo Việt Nam: bốn linh mục Dòng Đa Minh Vinhsơn Phạm Hiếu Liêm, Tôma Đinh Viết Dụ, Vinhsơn Đỗ Yến, Đaminh Đinh Đức Mậu và hai giáo dân Đaminh Đinh Đạt, Giuse Trần Văn Tuấn. Hằng năm, lễ kỷ niệm cung hiến (7/12) và lễ Đức Mẹ Vô Nhiễm Nguyên Tội (8/12) là dịp hành hương lớn của giáo phận.",
  "realImage": null,
  "realImageCaption": null,
  "galleryImages": [],
  "sources": [
    {
      "title": "Vương cung thánh đường Phú Nhai - Wikipedia tiếng Việt",
      "url": "https://vi.wikipedia.org/wiki/Vương_cung_thánh_đường_Phú_Nhai",
      "tier": "B"
    },
    {
      "title": "Giới thiệu Giáo phận Bùi Chu - Trang tin Giáo phận Bùi Chu",
      "url": "https://gpbuichu.org/index.php/giao-phan/Gioi-thieu-Giao-phan.html",
      "tier": "B"
    },
    {
      "title": "Lịch sử hình thành và phát triển của Nhà thờ Phú Nhai - Cổng thông tin xã Xuân Hưng, Ninh Bình",
      "url": "https://xuanhung.ninhbinh.gov.vn/2025/08/05/lich-su-hinh-thanh-va-phat-trien-cua-nha-tho-phu-nhai/",
      "tier": "B"
    },
    {
      "title": "Nhà thờ Phú Nhai, một trong 4 Tiểu Vương cung Thánh đường ở Việt Nam - VOV5",
      "url": "https://vovworld.vn/vi-VN/viet-nam-dat-nuoc-con-nguoi/nha-tho-phu-nhai-mot-trong-4-tieu-vuong-cung-thanh-duong-o-viet-nam-817620.vov",
      "tier": "B"
    }
  ]
}
```

### Kết quả tự kiểm

```text
$ node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/phunhai/khao-cuu.json --allow-existing-id
KIEM TRA: phunhai (docs/khao-cuu/phunhai/khao-cuu.json)

CANH BAO (1) — khong chan, nhung nen xu ly:
  ! [phunhai] lat chi co 1 chu so thap phan — do chinh xac qua tho cho mot linh dai

=> DAT toan bo rang buoc bat buoc. Sau khi chen vao src/data/statues.js, chay "npm test" de xac nhan lai.
```

---

_Báo cáo sinh tự động từ hồ sơ JSON bằng `format-report.mjs`. Sửa nội dung thì sửa file JSON rồi chạy lại lệnh, đừng sửa trực tiếp vào file markdown._
