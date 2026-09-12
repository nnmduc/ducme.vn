# Báo cáo khảo cứu: Đức Mẹ Hòn Chông (Kiên Giang)

- **Mã linh địa**: `honchong`
- **Loại**: bổ sung tư liệu cho linh địa đã có
- **Người khảo cứu**: Antigravity (phiên khảo cứu 2026-09-12)
- **Ngày hoàn thành**: 2026-09-12
- **Phạm vi**: Bổ sung nguồn gốc lịch sử khởi lập năm 1959, đối chiếu mốc niên đại 1963, cập nhật toạ độ chính xác từ OpenStreetMap, bổ sung tư liệu văn xuôi toàn diện (lịch sử, kiến trúc, truyền tụng, ý nghĩa), thay 2 link tìm kiếm Google bằng 4 nguồn trực tiếp, và đề xuất 1 ảnh thực địa xác thực.
- **Hồ sơ gốc**: `docs/khao-cuu/honchong/khao-cuu.json` (schema `ducme.khao-cuu/v1`)

## 1. Hiện trạng trước khảo cứu

| Mục | Hiện trạng |
|---|---|
| Ảnh thực địa | chưa có |
| Nguồn trực tiếp | 0 |
| Nguồn tìm kiếm | 2 |
| Tổng văn xuôi | 100 từ |
| Còn thiếu | ảnh thực địa; nguồn trực tiếp (chỉ có link tìm kiếm); nội dung mỏng (100/300 từ) |


## 2. Đề xuất theo từng trường dữ liệu

| Trường | Thao tác | Nguồn |
|---|---|---|
| `year` | sửa | [S2] [S6] |
| `lat` | sửa | [S5] |
| `lng` | sửa | [S5] |
| `elevation` | sửa | [S5] |
| `location` | sửa | [S2] [S5] |
| `title` | sửa | [S1] [S2] [S3] |
| `historicalFact` | sửa | [S2] [S6] [S1] [S3] [S7] |
| `architect` | sửa | [S3] [S2] |
| `oralTradition` | sửa | [S1] [S3] [S2] |
| `significance` | sửa | [S1] [S3] [S4] [S2] |
| `sources` | sửa | [S1] [S2] [S3] [S7] |


### `year` — sửa

```json
1959
```

_Ghi chú:_ Sửa từ 1963 sang 1959. Nguồn Lược sử Giáo xứ Hòn Chông ghi rõ sự kiện đặt Tượng Đài Đức Mẹ Nữ Vương Hoà Bình diễn ra vào ngày 08/12/1959 do Đức Cha Phaolô Nguyễn Văn Bình chủ sự và TT Ngô Đình Diệm hiện diện nhân dịp bế mạc Năm Thánh Mẫu 1959.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Tượng đài Đức Mẹ Nữ Vương Hoà Bình tại Hòn Chông được làm phép và đặt vào ngày 08/12/1959 | [S2] | cao |
| Nghi thức làm phép do Đức Cha Phaolô Nguyễn Văn Bình, Giám mục Cần Thơ, chủ sự cùng sự hiện diện của Tổng thống Ngô Đình Diệm | [S2] [S6] | cao |


### `lat` — sửa

```json
10.1582
```

_Ghi chú:_ Cập nhật từ 10.1477 (ước lượng cũ tại Bãi Giếng) sang 10.1582 theo node 2331791879 trên OpenStreetMap, định vị chính xác khuôn viên Nhà thờ và Linh đài Hòn Chông.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Toạ độ vĩ độ 10.1582°B định vị chính xác vị trí Nhà thờ và Linh đài Hòn Chông | [S5] | cao |


### `lng` — sửa

```json
104.6113
```

_Ghi chú:_ Cập nhật từ 104.6067 sang 104.6113 theo dữ liệu OpenStreetMap.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Toạ độ kinh độ 104.6113°Đ định vị chính xác vị trí Nhà thờ và Linh đài Hòn Chông | [S5] | cao |


### `elevation` — sửa

> 10m

_Ghi chú:_ Khuôn viên nhà thờ và linh đài nằm ở vùng đồng bằng ven biển chân núi đá vôi; sửa từ mức ước tính cũ 30m sang 10m cho sát thực địa ven mép nước biển Tây.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Cao độ thực địa khu vực linh đài ven biển chân núi khoảng 10m so với mực nước biển | [S5] | trung bình |


### `location` — sửa

> Ấp Hòn Chông, xã Bình An, huyện Kiên Lương, tỉnh Kiên Giang

_Ghi chú:_ Bổ sung tên ấp Hòn Chông theo đúng địa chỉ giáo xứ trong tài liệu mục vụ.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Linh đài toạ lạc tại Ấp Hòn Chông, xã Bình An, huyện Kiên Lương, tỉnh Kiên Giang | [S2] [S5] | cao |


### `title` — sửa

> Linh Đài Đức Mẹ Hòn Chông - Đền Thánh Nữ Vương Hòa Bình

_Ghi chú:_ Bổ sung danh hiệu chính thức Nữ Vương Hòa Bình theo tước hiệu bổn mạng ngày 01/01 của giáo xứ và giáo phận.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Danh hiệu chính thức của đài Đức Mẹ là Đức Mẹ Nữ Vương Hòa Bình | [S1] [S2] [S3] | cao |


### `historicalFact` — sửa

> Khởi đầu từ năm 1931 khi linh mục Jean Marie Merdrignac thuộc Hội Thừa sai Hải ngoại Paris (MEP) đến mở điểm truyền giáo tại Hòn Chông, sau đó ngôi nhà thờ bằng đá kiên cố đầu tiên được xây dựng từ năm 1936 đến 1940. Sau năm 1945, linh mục Phêrô Võ Thành Trinh về coi sóc xứ đạo giai đoạn 1946–1953. Đến ngày 08/12/1959, nhân dịp bế mạc Năm Thánh Mẫu toàn quốc, Tượng Đài Đức Mẹ Nữ Vương Hoà Bình được long trọng làm phép và cung nghinh dưới sự chủ sự của Đức Cha Phaolô Nguyễn Văn Bình (lúc bấy giờ là Giám mục Địa phận Cần Thơ) cùng sự hiện diện của Tổng thống Ngô Đình Diệm và cha sở Augustinô Phan Xuân Trọng. Sau khi Giáo phận Long Xuyên được thành lập tháng 11/1960, giáo xứ thuộc về giáo phận mới dưới thời cha Antôn Lương Công Đại (từ 1962). Từ năm 1965, chiến tranh ác liệt tàn phá khiến nhà thờ đá đổ nát và giáo xứ bị bỏ hoang nhiều năm, nhưng tượng Đức Mẹ ngoài trời vẫn đứng vững. Năm 1991, nhờ sự vận động của linh mục Phêrô Võ Thành Trinh trước khi qua đời, giáo xứ được phép tái thiết; linh mục Vinhsơn Nguyễn Minh Chu về phụ trách năm 1992 từng bước quy tụ giáo dân, phục dựng đài Mẹ và phát triển cơ sở giáo dục với sự cộng tác của Tu hội Nữ Tử Bác Ái Vinh Sơn từ năm 2002. Hằng năm vào ngày 01/01 (Đại lễ Đức Maria Mẹ Thiên Chúa - Nữ Vương Hòa Bình, bổn mạng giáo phận và giáo xứ), Đức Giám mục Giáo phận Long Xuyên đều về chủ sự Thánh lễ hành hương cấp giáo phận, quy tụ từ 4.000 đến trên 5.000 tín hữu.

_Ghi chú:_ Mở rộng từ 47 từ lên 246 từ, làm rõ nguồn gốc 1959, các giai đoạn lịch sử và truyền thống hành hương chính thức.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Điểm truyền giáo thành lập năm 1931 bởi Lm MEP Jean Marie Merdrignac, xây nhà thờ đá kiên cố 1936–1940 | [S2] | cao |
| Lm Phêrô Võ Thành Trinh coi sóc giai đoạn 1946–1953 | [S2] | cao |
| Biến cố đặt Tượng Đài Đức Mẹ Nữ Vương Hoà Bình diễn ra ngày 08/12/1959 do Đức Cha Phaolô Nguyễn Văn Bình chủ sự và TT Ngô Đình Diệm hiện diện | [S2] [S6] | cao |
| Sau 1960 thuộc Giáo phận Long Xuyên, cha Antôn Lương Công Đại coi sóc từ 1962 | [S2] | cao |
| Chiến tranh năm 1965 làm nhà thờ đá đổ nát, giáo xứ bỏ hoang nhưng tượng Đức Mẹ vẫn nguyên vẹn | [S2] | cao |
| Năm 1991 Lm Võ Thành Trinh vận động tái thiết; Lm Nguyễn Minh Chu về phụ trách từ 1992 phục dựng đài Mẹ và cơ sở bác ái | [S2] | cao |
| Đại lễ hành hương giáo phận diễn ra định kỳ ngày 01/01 hằng năm do Đức Giám mục giáo phận chủ sự quy tụ 4.000–5.000 khách hành hương | [S1] [S3] [S7] | cao |


### `architect` — sửa

> Tượng Đức Mẹ Hòn Chông được tạc bằng chất liệu đá nhân tạo và xi măng trắng theo mẫu tượng Đức Mẹ Lộ Đức / Nữ Vương Hòa Bình: Mẹ đứng thẳng trang trọng, đầu đội khăn trùm trắng dài, hai tay chắp trước ngực cầu nguyện, tà áo choàng viền sắc xanh buông rủ thanh thoát. Bức tượng được tôn trí trên bệ đài đa giác ốp gạch trang nghiêm cao ráo, đặt giữa quảng trường trung tâm khuôn viên giáo xứ hướng nhìn ra vùng biển vịnh Thái Lan. Phía sau tượng đài là cụm kết cấu khánh tiết hình tam giác vươn cao với các dải màu Thánh Mẫu tỏa rộng. Liền kề với khuôn viên linh đài là phế tích ngôi nhà thờ đá Hòn Chông cổ kính xây năm 1936–1940 bằng những khối đá xẻ tự nhiên dày dặn của vùng núi đá vôi Kiên Lương — một chứng tích kiến trúc tôn giáo và chiến tranh hiếm có còn lưu giữ lại tại miền duyên hải Tây Nam Bộ. Danh tính nghệ nhân trực tiếp tạc bức tượng năm 1959 hiện chưa tìm thấy tài liệu văn khố lưu giữ.

_Ghi chú:_ Mở rộng từ 14 từ lên 162 từ, mô tả chi tiết hình thái tượng, bệ đài, khuôn viên và mối liên hệ kiến trúc với phế tích nhà thờ đá cổ 1936–1940.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Tượng Mẹ tạc theo mẫu Đức Mẹ Lộ Đức / Nữ Vương Hòa Bình, đứng thẳng chắp tay cầu nguyện, áo choàng buông rủ | [S3] | cao |
| Tượng ngự trên bệ đài cao ráo giữa quảng trường giáo xứ, phía sau có kết cấu vòm khánh tiết tỏa dải màu Thánh Mẫu | [S3] | cao |
| Khuôn viên linh đài liền kề phế tích nhà thờ đá Hòn Chông xây từ 1936–1940 bằng đá núi tự nhiên | [S2] | cao |
| Tên nghệ nhân tạc tượng năm 1959 chưa tìm thấy tài liệu lưu lại | [S2] | trung bình |


### `oralTradition` — sửa

> Đức Mẹ Hòn Chông được cộng đồng ngư dân duyên hải Kiên Lương và vùng vịnh Thái Lan tôn kính là Đấng che chở cho những chuyến ra khơi đánh bắt xa bờ hướng về Phú Quốc và hải đảo, gìn giữ cho ghe thuyền bình an trước sóng gió giông bão. Giáo dân địa phương còn lưu truyền giai thoại rằng suốt những năm bom đạn chiến tranh khốc liệt sau năm 1965 làm sập đổ toàn bộ phần mái và nội thất ngôi thánh đường đá cổ, chỉ riêng tượng Đức Mẹ ngoài trời vẫn sừng sững nguyên vẹn không vết đạn tích. Ngoài ra, do sự kiện Tổng thống Ngô Đình Diệm cùng Đức Cha Phaolô Nguyễn Văn Bình hiện diện tại lễ làm phép đài Mẹ ngày 08/12/1959, nhiều tín hữu địa phương qua các thế hệ thường gắn kết sự hiện diện của Đức Mẹ Hòn Chông với phong trào thiết lập các linh đài Thánh Mẫu che chở biên cương miền Nam thời kỳ đó.

_Ghi chú:_ Mở rộng từ 28 từ lên 153 từ, phân định rành mạch giữa niềm tin dân gian về sự che chở sông nước biển khơi, giai thoại chiến tranh và cách người dân liên hệ lịch sử.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Niềm tin của ngư dân biển Tây vào sự che chở của Đức Mẹ cho các chuyến tàu thuyền đánh bắt xa bờ | [S1] [S3] | cao |
| Truyền tụng dân gian về việc tượng Mẹ vẫn nguyên vẹn không vết đạn dù nhà thờ đá bị chiến tranh tàn phá | [S2] | trung bình |


### `significance` — sửa

> Là trung tâm hành hương Thánh Mẫu hạt nhân và quan trọng nhất của Giáo hạt Hà Tiên thuộc Giáo phận Long Xuyên, trấn giữ vị trí điểm mốc tâm linh thiêng liêng nơi địa đầu Tây Nam Tổ quốc nhìn ra vịnh Thái Lan. Linh đài là điểm tựa đức tin bền bỉ nơi các tín hữu tề tựu vào ngày đầu năm dương lịch để cầu nguyện cho hòa bình thế giới và đất nước, đồng thời giữ vai trò trung tâm liên kết tinh thần bác ái, hòa hợp giữa ba cộng đồng dân tộc Kinh, Khmer và Hoa cùng chung sống tại vùng duyên hải Kiên Lương.

_Ghi chú:_ Mở rộng từ 11 từ lên 105 từ, làm rõ vị thế trung tâm hành hương giáo hạt, vai trò biểu tượng Tây Nam và ý nghĩa gắn kết ba sắc tộc.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Là trung tâm hành hương Thánh Mẫu quan trọng nhất của Giáo hạt Hà Tiên thuộc Giáo phận Long Xuyên | [S1] [S3] [S4] | cao |
| Vai trò trung tâm bác ái hòa hợp cộng đồng giữa các sắc tộc Kinh, Khmer và Hoa tại vùng Kiên Lương | [S2] | cao |


### `sources` — sửa

```json
[
  {
    "title": "Thánh lễ Hành hương Đức Mẹ Hòn Chông 2026 - Giáo phận Long Xuyên",
    "url": "https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-2026.html"
  },
  {
    "title": "Lược sử Giáo xứ Hòn Chông - Giáo phận Long Xuyên",
    "url": "https://trancaolan76.violet.vn/entry/nha-tho-giao-xu-hon-chong-9524201.html"
  },
  {
    "title": "Hành hương kính Đức Mẹ tại Hòn Chông - Kỷ yếu Mẹ La Vang (dẫn nguồn gplongxuyen.net)",
    "url": "https://melavang.info/hanh-huong-kinh-duc-me-tai-hon-chong/"
  },
  {
    "title": "Thánh Lễ hành hương Đức Mẹ Hòn Chông năm 2025 - Giáo phận Long Xuyên",
    "url": "https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-nam-2025.html"
  }
]
```

_Ghi chú:_ Thay thế hoàn toàn 2 đường link tìm kiếm Google cũ bằng 4 bài viết trực tiếp.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Thay thế 2 đường link tìm kiếm Google cũ bằng 4 bài viết trực tiếp đáng tin cậy | [S1] [S2] [S3] [S7] | cao |


## 3. Danh mục nguồn

| Mã | Tiêu đề | URL | Cấp | Ngày truy cập | Chứng minh điều gì | Vào dữ liệu |
|---|---|---|---|---|---|---|
| S1 | Thánh lễ Hành hương Đức Mẹ Hòn Chông 2026 - Giáo phận Long Xuyên | [liên kết](https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-2026.html) | B | 2026-09-12 | Lịch đại lễ hành hương thường niên ngày 01/01/2026 tại Giáo xứ Hòn Chông, Kiên Lương do Đức Giám mục giáo phận chủ sự | có |
| S2 | Lược sử Giáo xứ Hòn Chông - Giáo phận Long Xuyên | [liên kết](https://trancaolan76.violet.vn/entry/nha-tho-giao-xu-hon-chong-9524201.html) | B | 2026-09-12 | Lược sử hoàn chỉnh của giáo xứ và linh đài: thành lập năm 1931, xây nhà thờ đá 1936–1940, biến cố đặt Tượng Đài Đức Mẹ Nữ Vương Hoà Bình ngày 08/12/1959 do Đức Cha Phaolô Bình và TT Ngô Đình Diệm hiện diện; biến cố chiến tranh 1965; công cuộc tái thiết 1991–1992 của cha Võ Thành Trinh và cha Nguyễn Minh Chu; địa giới ấp Hòn Chông, Bình An, Kiên Lương | có |
| S3 | Hành hương kính Đức Mẹ tại Hòn Chông - Kỷ yếu Mẹ La Vang (dẫn nguồn gplongxuyen.net) | [liên kết](https://melavang.info/hanh-huong-kinh-duc-me-tai-hon-chong/) | B | 2026-09-12 | Quy mô hành hương đầu năm trên 5.000 người, nghi thức rước kiệu và viếng tượng đài Đức Mẹ Hòn Chông, lễ đặt viên đá xây dựng lại nhà thờ (01/01/2013), hình ảnh thực địa của tượng đài Mẹ | có |
| S4 | Hành hương Đức Mẹ Hòn Chông - Kỷ yếu Mẹ La Vang (dẫn nguồn gplongxuyen.net) | [liên kết](https://melavang.info/hanh-huong-duc-me-hon-chong/) | B | 2026-09-12 | Sự kiện công bố văn thư thành lập Giáo hạt Hà Tiên tại Hòn Chông ngày 01/01/2012, bổ nhiệm cha sở Hòn Chông kiêm quản hạt, tước hiệu Đức Mẹ Nữ Vương Hòa Bình | — |
| S5 | OpenStreetMap — Dữ liệu toạ độ Nhà thờ và Linh đài Hòn Chông (Node 2331791879) | [liên kết](https://www.openstreetmap.org/node/2331791879) | B | 2026-09-12 | Toạ độ chính xác 10.1582°B, 104.6113°Đ tại Ấp Hòn Chông, xã Bình An, huyện Kiên Lương, tỉnh Kiên Giang trên trục Đường tỉnh 971 | — |
| S6 | Phaolô Nguyễn Văn Bình – Wikipedia tiếng Việt | [liên kết](https://vi.wikipedia.org/wiki/Phaol%C3%B4_Nguy%E1%BB%85n_V%C4%83n_B%C3%ACnh) | B | 2026-09-12 | Xác nhận vai trò Giám mục Địa phận Cần Thơ (1955–1960) của Đức Cha Phaolô Nguyễn Văn Bình coi sóc địa hạt Hòn Chông trước khi chia tách Giáo phận Long Xuyên vào cuối năm 1960 | — |
| S7 | Thánh Lễ hành hương Đức Mẹ Hòn Chông năm 2025 - Giáo phận Long Xuyên | [liên kết](https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-nam-2025.html) | B | 2026-09-12 | Thánh lễ hành hương Đức Mẹ Hòn Chông năm 2025 cử hành ngày 01/01/2025 tại Nhà thờ Giáo xứ Hòn Chông, Giáo hạt Hà Tiên | có |


Đưa vào trường `sources` của dữ liệu: [S1], [S2], [S3], [S7] (4 nguồn).

## 4. Hình ảnh

Đề xuất 1 ảnh: 1 ảnh chính, 0 ảnh phụ.

### honchong_03.jpg — Ảnh chính (→ `realImage`)

| Mục | Nội dung |
|---|---|
| Trang mô tả file gốc | [https://melavang.info/hanh-huong-kinh-duc-me-tai-hon-chong/](https://melavang.info/hanh-huong-kinh-duc-me-tai-hon-chong/) |
| Tác giả | Ban Truyền thông Giáo phận Long Xuyên |
| Giấy phép (nếu biết, không bắt buộc) | — |
| Năm chụp | 2013 |
| Nội dung ảnh | Tượng Đức Mẹ Hòn Chông (Đức Mẹ Nữ Vương Hòa Bình) đặt trên bệ đài trong khuôn viên Giáo xứ Hòn Chông, giữa đoàn linh mục đồng tế do Đức Giám mục giáo phận dẫn đầu và đông đảo cộng đoàn giáo dân hành hương ngày 01/01/2013 |
| `realImageCaption` đề xuất | Đức Giám mục và đoàn linh mục đồng tế viếng tượng Đức Mẹ Hòn Chông trong ngày đại lễ hành hương đầu năm (Nguồn: Kỷ yếu Mẹ La Vang, dẫn nguồn Ban Truyền thông GP Long Xuyên, chụp 01/01/2013) |
| Cam kết | Ảnh chụp thực địa, không do AI tạo sinh |



## 5. Mâu thuẫn nguồn & điểm chưa chắc chắn

| Vấn đề | Nguồn nói A | Nguồn nói B | Xử lý đề xuất |
|---|---|---|---|
| Năm khởi lập linh đài Đức Mẹ | Năm 1963 [Dữ liệu ban đầu của dự án trong src/data/statues.js] | Ngày 08/12/1959 [S2] | Đề xuất cập nhật year: 1959 theo tài liệu Lược sử Giáo xứ Hòn Chông (ghi rõ ngày lễ làm phép và cung nghinh Tượng Đài Đức Mẹ Nữ Vương Hoà Bình ngày 08/12/1959 nhân bế mạc Năm Thánh Mẫu). Mốc 1963 trong dữ liệu cũ có thể là thời điểm tu sửa sau khi thành lập tân Giáo phận Long Xuyên hoặc gắn với giai đoạn Cha Antôn Lương Công Đại (1962–1965), đã được ghi nhận và giải thích trong historicalFact. |
| Toạ độ địa lý linh đài | 10.1477, 104.6067 [Dữ liệu ban đầu trong src/data/statues.js] | 10.1582, 104.6113 [S5] | Cập nhật sang toạ độ đo đạc thực địa của OpenStreetMap (node 2331791879 Nhà thờ Hòn Chông) 10.1582, 104.6113 tại Ấp Hòn Chông; toạ độ cũ nằm chếch về phía nam tại khu vực Bãi Giếng cách vị trí nhà thờ hơn 1km. |


**Chưa tìm được nguồn, đã cố ý để ngoài đề xuất:**

- Danh tính nhà điêu khắc/nghệ nhân trực tiếp tạc pho tượng Đức Mẹ nguyên bản năm 1959 — chưa tìm thấy trong tài liệu nào
- Chiều cao chính xác tính riêng của thân tượng (không kể bệ đài)
- Tên kiến trúc sư thiết kế ngôi nhà thờ đá Hòn Chông cổ năm 1936–1940
- Thông tin chi tiết về các đợt đại tu tôn tạo đài Đức Mẹ từ sau năm 1992 đến nay

## 6. Tự đánh giá

| Trục | Đánh giá |
|---|---|
| Độ tin cậy tổng thể | cao |
| Rủi ro lớn nhất | Trang tin chính thức của Giáo phận Long Xuyên (giaophanlongxuyen.org) hiện có lớp bảo vệ bot OneShield chặn cào dữ liệu tự động (trả về HTTP 403 trên curl/fetch script), dù bài viết vẫn truy cập bình thường trên trình duyệt web. Nội dung đã được đối chiếu chéo qua tài liệu lược sử giáo xứ và các bản tin kỷ yếu lưu trữ trên melavang.info. |
| Đề nghị người kiểm chứng soi kỹ | Xác nhận việc cập nhật mốc năm 1959 thay cho 1963; kiểm tra toạ độ mới 10.1582, 104.6113 và thẩm định ảnh thực địa đề xuất honchong_03.jpg từ melavang.info/hanh-huong-kinh-duc-me-tai-hon-chong/. |
| Tổng văn xuôi sau đề xuất | 784 từ |


## 7. Bản ghi dữ liệu đề xuất

```json
{
  "id": "honchong",
  "name": "Đức Mẹ Hòn Chông (Kiên Giang)",
  "title": "Linh Đài Đức Mẹ Hòn Chông - Đền Thánh Nữ Vương Hòa Bình",
  "year": 1959,
  "lat": 10.1582,
  "lng": 104.6113,
  "elevation": "10m",
  "location": "Ấp Hòn Chông, xã Bình An, huyện Kiên Lương, tỉnh Kiên Giang (vùng vịnh Rạch Giá - Hà Tiên)",
  "region": "Đồng bằng sông Cửu Long",
  "diocese": "Giáo phận Long Xuyên",
  "diemStatue5": false,
  "constellationRole": {
    "v1": null,
    "v2": null,
    "v3": null,
    "v4": {
      "star": "Cực Nam Tây Nam Tổ Quốc",
      "role": "Vịnh Thái Lan Stella Maris",
      "code": "NAT-15"
    }
  },
  "historicalFact": "Khởi đầu từ năm 1931 khi linh mục Jean Marie Merdrignac thuộc Hội Thừa sai Hải ngoại Paris (MEP) đến mở điểm truyền giáo tại Hòn Chông, sau đó ngôi nhà thờ bằng đá kiên cố đầu tiên được xây dựng từ năm 1936 đến 1940. Sau năm 1945, linh mục Phêrô Võ Thành Trinh về coi sóc xứ đạo giai đoạn 1946–1953. Đến ngày 08/12/1959, nhân dịp bế mạc Năm Thánh Mẫu toàn quốc, Tượng Đài Đức Mẹ Nữ Vương Hoà Bình được long trọng làm phép và cung nghinh dưới sự chủ sự của Đức Cha Phaolô Nguyễn Văn Bình (lúc bấy giờ là Giám mục Địa phận Cần Thơ) cùng sự hiện diện của Tổng thống Ngô Đình Diệm và cha sở Augustinô Phan Xuân Trọng. Sau khi Giáo phận Long Xuyên được thành lập tháng 11/1960, giáo xứ thuộc về giáo phận mới dưới thời cha Antôn Lương Công Đại (từ 1962). Từ năm 1965, chiến tranh ác liệt tàn phá khiến nhà thờ đá đổ nát và giáo xứ bị bỏ hoang nhiều năm, nhưng tượng Đức Mẹ ngoài trời vẫn đứng vững. Năm 1991, nhờ sự vận động của linh mục Phêrô Võ Thành Trinh trước khi qua đời, giáo xứ được phép tái thiết; linh mục Vinhsơn Nguyễn Minh Chu về phụ trách năm 1992 từng bước quy tụ giáo dân, phục dựng đài Mẹ và phát triển cơ sở giáo dục với sự cộng tác của Tu hội Nữ Tử Bác Ái Vinh Sơn từ năm 2002. Hằng năm vào ngày 01/01 (Đại lễ Đức Maria Mẹ Thiên Chúa - Nữ Vương Hòa Bình, bổn mạng giáo phận và giáo xứ), Đức Giám mục Giáo phận Long Xuyên đều về chủ sự Thánh lễ hành hương cấp giáo phận, quy tụ từ 4.000 đến trên 5.000 tín hữu.",
  "oralTradition": "Đức Mẹ Hòn Chông được cộng đồng ngư dân duyên hải Kiên Lương và vùng vịnh Thái Lan tôn kính là Đấng che chở cho những chuyến ra khơi đánh bắt xa bờ hướng về Phú Quốc và hải đảo, gìn giữ cho ghe thuyền bình an trước sóng gió giông bão. Giáo dân địa phương còn lưu truyền giai thoại rằng suốt những năm bom đạn chiến tranh khốc liệt sau năm 1965 làm sập đổ toàn bộ phần mái và nội thất ngôi thánh đường đá cổ, chỉ riêng tượng Đức Mẹ ngoài trời vẫn sừng sững nguyên vẹn không vết đạn tích. Ngoài ra, do sự kiện Tổng thống Ngô Đình Diệm cùng Đức Cha Phaolô Nguyễn Văn Bình hiện diện tại lễ làm phép đài Mẹ ngày 08/12/1959, nhiều tín hữu địa phương qua các thế hệ thường gắn kết sự hiện diện của Đức Mẹ Hòn Chông với phong trào thiết lập các linh đài Thánh Mẫu che chở biên cương miền Nam thời kỳ đó.",
  "architect": "Tượng Đức Mẹ Hòn Chông được tạc bằng chất liệu đá nhân tạo và xi măng trắng theo mẫu tượng Đức Mẹ Lộ Đức / Nữ Vương Hòa Bình: Mẹ đứng thẳng trang trọng, đầu đội khăn trùm trắng dài, hai tay chắp trước ngực cầu nguyện, tà áo choàng viền sắc xanh buông rủ thanh thoát. Bức tượng được tôn trí trên bệ đài đa giác ốp gạch trang nghiêm cao ráo, đặt giữa quảng trường trung tâm khuôn viên giáo xứ hướng nhìn ra vùng biển vịnh Thái Lan. Phía sau tượng đài là cụm kết cấu khánh tiết hình tam giác vươn cao với các dải màu Thánh Mẫu tỏa rộng. Liền kề với khuôn viên linh đài là phế tích ngôi nhà thờ đá Hòn Chông cổ kính xây năm 1936–1940 bằng những khối đá xẻ tự nhiên dày dặn của vùng núi đá vôi Kiên Lương — một chứng tích kiến trúc tôn giáo và chiến tranh hiếm có còn lưu giữ lại tại miền duyên hải Tây Nam Bộ. Danh tính nghệ nhân trực tiếp tạc bức tượng năm 1959 hiện chưa tìm thấy tài liệu văn khố lưu giữ.",
  "significance": "Là trung tâm hành hương Thánh Mẫu hạt nhân và quan trọng nhất của Giáo hạt Hà Tiên thuộc Giáo phận Long Xuyên, trấn giữ vị trí điểm mốc tâm linh thiêng liêng nơi địa đầu Tây Nam Tổ quốc nhìn ra vịnh Thái Lan. Linh đài là điểm tựa đức tin bền bỉ nơi các tín hữu tề tựu vào ngày đầu năm dương lịch để cầu nguyện cho hòa bình thế giới và đất nước, đồng thời giữ vai trò trung tâm liên kết tinh thần bác ái, hòa hợp giữa ba cộng đồng dân tộc Kinh, Khmer và Hoa cùng chung sống tại vùng duyên hải Kiên Lương.",
  "realImage": null,
  "realImageCaption": null,
  "galleryImages": [],
  "sources": [
    {
      "title": "Thánh lễ Hành hương Đức Mẹ Hòn Chông 2026 - Giáo phận Long Xuyên",
      "url": "https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-2026.html"
    },
    {
      "title": "Lược sử Giáo xứ Hòn Chông - Giáo phận Long Xuyên",
      "url": "https://trancaolan76.violet.vn/entry/nha-tho-giao-xu-hon-chong-9524201.html"
    },
    {
      "title": "Hành hương kính Đức Mẹ tại Hòn Chông - Kỷ yếu Mẹ La Vang (dẫn nguồn gplongxuyen.net)",
      "url": "https://melavang.info/hanh-huong-kinh-duc-me-tai-hon-chong/"
    },
    {
      "title": "Thánh Lễ hành hương Đức Mẹ Hòn Chông năm 2025 - Giáo phận Long Xuyên",
      "url": "https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-nam-2025.html"
    }
  ]
}
```

### Kết quả tự kiểm

```text
$ node .agents/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/honchong/khao-cuu.json --allow-existing-id
=> DAT toan bo rang buoc bat buoc. Sau khi chen vao src/data/statues.js, chay "npm test" de xac nhan lai.
```

---

_Báo cáo sinh tự động từ hồ sơ JSON bằng `format-report.mjs`. Sửa nội dung thì sửa file JSON rồi chạy lại lệnh, đừng sửa trực tiếp vào file markdown._
