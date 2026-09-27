# Báo cáo khảo cứu: Đức Mẹ Trinh Phong

- **Mã linh địa**: `trinhphong`
- **Loại**: bổ sung tư liệu cho linh địa đã có
- **Người khảo cứu**: marian-research (phiên tự động, lượt 2 sau quyết định của người dùng)
- **Ngày hoàn thành**: 2026-09-27
- **Phạm vi**: Cập nhật bản ghi đã có: thay 2 link tìm kiếm Google bằng nguồn trực tiếp (bài tường thuật 2007 của cha quản xứ Sông Pha trên VietCatholic, lược sử giáo xứ Sông Pha của GP Nha Trang), viết lại historicalFact/architect/oralTradition/significance theo đúng nguồn, đối chiếu chiều cao tượng, toạ độ, địa danh hành chính sau sáp nhập 2025, gom ảnh ứng viên. Theo quyết định của người dùng, một bài đăng lại năm 2014 (và mọi bản sao của nó) đã bị loại hẳn khỏi hồ sơ, không dùng bất kỳ chi tiết nào lấy riêng từ bài đó.
- **Hồ sơ gốc**: `docs/khao-cuu/trinhphong/khao-cuu.json` (schema `ducme.khao-cuu/v1`)

## 1. Hiện trạng trước khảo cứu

| Mục | Hiện trạng |
|---|---|
| Ảnh thực địa | chưa có |
| Nguồn trực tiếp | 1 |
| Nguồn tìm kiếm | 2 |
| Tổng văn xuôi | 166 từ |
| Còn thiếu | ảnh thực địa; nguồn trực tiếp thứ hai; nội dung mỏng (166/300 từ) |


## 2. Đề xuất theo từng trường dữ liệu

| Trường | Thao tác | Nguồn |
|---|---|---|
| `title` | sửa | [S1] [S2] |
| `year` | giữ nguyên | [S1] [S17] [S4] |
| `lat` | giữ nguyên | [S2] [S8] [S9] [S15] |
| `lng` | giữ nguyên | [S2] [S8] |
| `elevation` | sửa | [S9] [S15] |
| `location` | sửa | [S1] [S3] |
| `historicalFact` | sửa | [S1] [S4] [S17] [S2] [S3] |
| `architect` | sửa | [S1] [S7] [S5] |
| `oralTradition` | sửa | [S2] [S1] [S4] [S12] [S13] [S14] [S6] |
| `significance` | sửa | [S17] [S4] [S6] [S2] [S1] |
| `constellationRole` | giữ nguyên | [S17] [S1] [S4] |
| `sources` | sửa | [S2] [S3] |


### `title` — sửa

> Tượng đài Đức Mẹ Trinh Phong (Đèo Ngoạn Mục)

_Ghi chú:_ Tên cũ 'Linh Đài Eo Gió Đèo Ngoạn Mục' không thấy nguồn nào dùng. Nguồn trực tiếp [S2] và Wikipedia [S1] đều gọi là 'tượng đài Đức Mẹ Trinh Phong'.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Tên gọi 'Tượng đài Đức Mẹ Trinh Phong' được dùng trong bài tường thuật năm 2007 của cha quản xứ Sông Pha và trong Wikipedia tiếng Việt | [S1] [S2] | cao |


### `year` — giữ nguyên

_Ghi chú:_ Giữ 1961 (năm khánh thành 8/12/1961 theo báo Thẳng Tiến 1961 qua [S1]). [S2] ghi 'xây dựng vào khoảng năm 1960' — xem conflicts[].

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Lễ khánh thành tượng Đức Mẹ Vô Nhiễm Nguyên Tội diễn ra ngày 8/12/1961 | [S1] | trung bình |
| Năm tượng đài được xây trong các năm 1959, 1960 và 1961 | [S17] [S4] | trung bình |


### `lat` — giữ nguyên

_Ghi chú:_ CHƯA ĐỐI CHIẾU ĐƯỢC. Không tìm được toạ độ đo tại bệ tượng (Wikimapia 6510388 chặn truy cập tự động; OpenStreetMap không có điểm tượng). Giữ 11.8322 tạm thời, độ tin cậy thấp. Toạ độ này nằm gần như đúng trên đường ranh giới tỉnh trong OSM, cách giao điểm Eo Gió trên QL27 (11.8346, 108.6450 — tính từ giao cắt QL27 với ranh giới tỉnh trong OSM) khoảng 2,1 km về phía tây-tây nam, trong khi [S2] tả tượng ở cuối con đường nhỏ 'rẽ về hướng đông chừng 3 km' từ Eo Gió. Xem conflicts[].

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Tượng cách giao điểm Eo Gió (đỉnh đèo, ranh giới hai tỉnh) chừng 3 km đường bộ theo một con đường nhỏ rẽ về hướng đông, hướng tầm nhìn về thung lũng Sông Pha | [S2] | trung bình |
| Giao điểm Eo Gió (QL27 cắt ranh giới tỉnh) nằm quanh 11.8346, 108.6450; đỉnh đèo Ngoạn Mục ghi 11.834–11.837, 108.645 | [S8] [S9] [S15] | cao |
| Toạ độ bản ghi hiện có 11.8322 chưa được nguồn nào xác nhận là vị trí bệ tượng | [S8] | thấp |


### `lng` — giữ nguyên

_Ghi chú:_ Như lat: giữ 108.6258 tạm thời, độ tin cậy thấp, chờ đo lại trên ảnh vệ tinh/Google Maps hoặc Wikimapia bằng tay.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Tượng cách Eo Gió chừng 3 km về hướng đông theo đường nhỏ | [S2] | trung bình |
| Kinh độ bản ghi 108.6258 nằm phía tây giao điểm Eo Gió (108.6450), mâu thuẫn hướng mô tả của [S2] | [S8] | thấp |


### `elevation` — sửa

> Chưa rõ độ cao bệ tượng; đỉnh đèo Ngoạn Mục (Eo Gió) cao khoảng 980m

_Ghi chú:_ Bản ghi cũ gán 980m cho chính tượng. 980m là độ cao đỉnh đèo; tượng nằm cách đỉnh đèo khoảng 3 km nên độ cao có thể khác.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Đỉnh đèo Ngoạn Mục cao khoảng 980m | [S9] [S15] | cao |


### `location` — sửa

> Gần Eo Gió, đỉnh đèo Ngoạn Mục (QL27), xã Lâm Sơn, tỉnh Khánh Hòa (trước năm 2025: xã Lâm Sơn, huyện Ninh Sơn, tỉnh Ninh Thuận), giáp tỉnh Lâm Đồng

_Ghi chú:_ Cập nhật theo địa danh sau sáp nhập 2025 như Wikipedia [S1] đang ghi; giữ tên cũ trong ngoặc vì toàn bộ tư liệu lịch sử dùng tên Ninh Thuận.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Vị trí tượng hiện nay ở xã Lâm Sơn, tỉnh Khánh Hòa; Eo Gió là ranh giới Khánh Hòa – Lâm Đồng | [S1] | cao |
| Sông Pha thuộc xã Lâm Sơn, huyện Ninh Sơn, tỉnh Ninh Thuận (địa danh trước sáp nhập), giáp huyện Đơn Dương (Lâm Đồng) qua đèo Ngoạn Mục | [S3] | cao |


### `historicalFact` — sửa

> Tượng đài Đức Mẹ Trinh Phong là một trong năm tượng đài Đức Mẹ mà Tổng thống Việt Nam Cộng hòa Ngô Đình Diệm chỉ đạo xây dựng ở miền Nam: nhân dịp Đại hội Thánh Mẫu mừng 100 năm Đức Mẹ hiện ra tại Lộ Đức, ông chỉ thị cho Phủ Tổng ủy Dinh điền dựng năm tượng đài trong các năm 1959, 1960 và 1961 tại Giang Sơn, Thác Mơ, Phượng Hoàng, Trinh Phong và Tà Pao. Lễ khánh thành tượng Đức Mẹ Vô Nhiễm Nguyên Tội diễn ra ngày 8/12/1961, có Linh mục Bề trên địa phận Nha Trang, Trung tá Tỉnh trưởng Ninh Thuận và hơn 3.000 giáo dân địa phương tham dự; nhân dịp này một thánh lễ được cử hành tại kỳ đài dựng trên đồi để cầu nguyện cho quốc thái dân an (theo báo Thẳng Tiến số Giáng Sinh 1961, được Wikipedia tiếng Việt dẫn lại). Tượng nằm cách giao điểm Eo Gió, đỉnh đèo Ngoạn Mục trên quốc lộ 27, chừng 3 km theo một con đường nhỏ, hướng tầm nhìn về thung lũng Sông Pha, và thuộc quyền quản nhiệm của cha sở giáo xứ Sông Pha. Sau năm 1975, tượng đài trở nên hoang vắng; thỉnh thoảng các linh mục quản xứ Sông Pha, các giáo xứ lân cận hoặc giáo dân có nương rẫy gần đó lặng lẽ đến kính viếng. Sáng Chúa Nhật II Phục Sinh, ngày 15/4/2007, Linh mục quản xứ Sông Pha Anrê Lê Văn Hải cùng khoảng 500 giáo dân và cả những người không Công giáo ở các vùng Sông Pha, Lạc Lâm, Lạc Viên, Lạc Nghiệp, Kađô đã dâng thánh lễ đầu tiên dưới chân tượng sau 31 năm. Hiện nay tượng đài là một địa điểm hành hương của người Công giáo.

_Ghi chú:_ Bỏ cụm 'theo lệnh Tổng thống' — [S1] viết 'chỉ đạo xây dựng', [S17] và [S4] viết 'chỉ thị cho Phủ Tổng ủy Dinh điền'. Bỏ 'tượng xi măng trắng 3m' (không nguồn, mâu thuẫn '6 thước' của [S1]) và các câu văn tả cảnh 'gió hú ngút ngàn' không có nguồn. Không dùng bất kỳ chi tiết nào từ bài 2014 đã bị loại.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Là một trong 5 tượng đài Đức Mẹ mà Tổng thống VNCH Ngô Đình Diệm chỉ đạo xây dựng ở miền Nam | [S1] [S4] | cao |
| Nhân dịp Đại hội Thánh Mẫu (100 năm Lộ Đức), TT Diệm chỉ thị cho Phủ Tổng ủy Dinh điền xây 5 tượng đài trong các năm 1959, 1960, 1961 gồm Giang Sơn, Thác Mơ, Phượng Hoàng, Trinh Phong, Tà Pao | [S17] [S4] | trung bình |
| Khánh thành ngày 8/12/1961, có LM Bề trên địa phận Nha Trang, Trung tá Tỉnh trưởng Ninh Thuận và hơn 3.000 giáo dân; thánh lễ tại kỳ đài trên đồi cầu cho quốc thái dân an | [S1] | trung bình |
| Tượng cách Eo Gió chừng 3 km theo đường nhỏ, hướng về thung lũng Sông Pha, thuộc quyền quản nhiệm của cha sở Sông Pha | [S2] [S1] | cao |
| Sau 1975 tượng đài hoang vắng, chỉ thỉnh thoảng có linh mục hoặc giáo dân lặng lẽ đến viếng | [S2] [S1] | cao |
| Ngày 15/4/2007 (Chúa Nhật II Phục Sinh), LM Anrê Lê Văn Hải cùng khoảng 500 giáo dân và lương dân các vùng lân cận dâng thánh lễ đầu tiên sau 31 năm | [S2] [S1] | cao |
| LM Anrê Lê Văn Hải quản xứ Sông Pha từ 20/02/2002 đến 03/2014 — khớp với mốc 2007 | [S3] | cao |
| Hiện nay là một địa điểm hành hương của người Công giáo | [S1] | trung bình |


### `architect` — sửa

> Theo báo Thẳng Tiến (1961) được Wikipedia tiếng Việt dẫn lại, tượng Đức Mẹ Vô Nhiễm Nguyên Tội tại đây cao 6 thước. Ảnh chụp đang lưu hành trên mạng (đăng lại trên Wikimedia Commons năm 2025) cho thấy hiện trạng: tượng đứng chắp tay, áo choàng xanh phủ đầu, áo dài trắng, tràng hạt vắt trên cánh tay, đặt trên một bệ cao ốp kín những bảng đá tạ ơn khắc chữ như 'Tạ ơn Mẹ Trinh Phong', xung quanh là rừng thông. Chưa tìm được tư liệu về người thiết kế, người tạc tượng, vật liệu gốc hay niên đại các đợt tu bổ; một trang tư liệu Công giáo chỉ ghi chung rằng tượng đã được trùng tu sau khi xuống cấp theo thời gian.

_Ghi chú:_ Bỏ 'quy chuẩn tượng 3m thời TT Diệm' và 'bệ đá hoa cương' — không nguồn. 'Thước' trong nguồn 1961 để nguyên, không tự quy đổi. Phần mô tả hiện trạng dựa trên ảnh [S7] (cùng ảnh xuất hiện ở [S5] từ 2024); chưa xác định được tượng trong ảnh có phải pho tượng gốc 1961 hay tượng thay thế.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Tượng Đức Mẹ cao 6 thước | [S1] | trung bình |
| Hiện trạng: tượng sơn màu (áo choàng xanh, áo trắng), bệ ốp bảng tạ ơn ghi 'Tạ ơn Mẹ Trinh Phong', giữa rừng thông | [S7] [S5] | trung bình |
| Tượng đã được trùng tu sau khi xuống cấp bởi thời gian (không ghi năm) | [S5] | thấp |


### `oralTradition` — sửa

> Người Công giáo quanh Sông Pha vẫn gắn tên Mẹ Trinh Phong với ngọn gió Eo Gió. Khép lại bài tường thuật thánh lễ năm 2007, chính cha quản xứ Sông Pha viết mấy câu thơ dâng Mẹ: 'Eo Gió có Mẹ Trinh Phong, / Đèo cao gió lộng đứng trông con mình' — hình ảnh người Mẹ đứng giữa đèo cao lộng gió, trông về đoàn con dưới thung lũng. Dù vậy, chưa tìm được tư liệu nào giải thích chính thức vì sao tượng mang tên 'Trinh Phong'; cách hiểu 'Trinh' là đồng trinh, 'Phong' là gió chỉ là cách đọc theo mặt chữ đang lưu hành. Theo lời kể lưu truyền trong giới hành hương, suốt hơn ba mươi năm vắng bóng thánh lễ, tượng Mẹ vẫn đứng lặng giữa rừng thông, chỉ vài người có nương rẫy gần đó hay các cha xứ lân cận thầm lặng tìm vào viếng; đến nay nhiều video hành hương vẫn giới thiệu nơi này như pho tượng Mẹ ẩn mình giữa rừng trên đỉnh đèo. Một số bài viết trên diễn đàn Công giáo còn kể rằng năm tượng đài dựng những năm 1959–1961, cùng với La Vang và Trà Kiệu, hợp thành một 'Chòm Sao Bắc Đẩu' trên bản đồ miền Nam, như những vì sao dẫn đường cho người tín hữu — một cách hình dung mang tính biểu tượng mà chưa thấy tư liệu gốc nào ghi là chủ ý khi xây dựng.

_Ghi chú:_ Thay câu cũ về 'ngôi sao Phecda' và giải nghĩa 'Mẹ đứng giữa phong ba bão táp' — cả hai không có nguồn bên ngoài (Phecda là cách sắp xếp riêng của ducme.vn, đã có ở constellationRole). Mỗi ý giữ nhãn truyền tụng riêng.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Bài thơ 'Eo Gió có Mẹ Trinh Phong, Đèo cao gió lộng đứng trông con mình' của LM Anrê Lê Văn Hải trong bài tường thuật 2007 | [S2] | cao |
| Không nguồn nào tìm được giải thích nghĩa tên 'Trinh Phong' | [S1] [S2] [S4] | trung bình |
| Video hành hương giới thiệu tượng 'nằm ẩn giữa rừng' | [S12] [S13] [S14] | thấp |
| Chuyện năm tượng đài cùng La Vang, Trà Kiệu hợp thành 'Chòm Sao Bắc Đẩu' | [S6] | trung bình |


### `significance` — sửa

> Là một trong năm tượng đài Đức Mẹ dựng dưới thời Đệ nhất Cộng hòa trong dịp mừng kính Đức Mẹ những năm 1959–1961, Đức Mẹ Trinh Phong là một dấu mốc đức tin trên cung đèo nối đồng bằng Phan Rang với cao nguyên Lâm Viên. Thánh lễ ngày 15/4/2007 đánh dấu việc cộng đoàn giáo xứ Sông Pha trở lại kính viếng công khai sau 31 năm, có cả người không Công giáo trong vùng cùng tham dự; từ đó tượng đài trở thành một điểm hành hương, gắn với đời sống đức tin của giáo xứ Sông Pha dưới chân đèo.

_Ghi chú:_ Bỏ câu cũ 'nơi người lữ hành dừng chân cầu xin bình an trước khi vượt đèo' — không nguồn, và dễ lẫn với Đức Mẹ Suối Phong Ba (tượng khác, ven suối gần chân đèo, được giới thiệu như trạm dừng chân của lữ khách [S10]). Tượng Trinh Phong nằm cách QL27 khoảng 3 km đường nhỏ [S2].

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Năm tượng đài được xây nhân dịp Đại hội Thánh Mẫu / kỷ niệm 100 năm Đức Mẹ hiện ra tại Lộ Đức, trong các năm 1959–1961 | [S17] [S4] [S6] | trung bình |
| Thánh lễ 2007 có cả lương dân các vùng lân cận tham dự | [S2] | cao |
| Hiện là địa điểm hành hương của người Công giáo | [S1] | trung bình |


### `constellationRole` — giữ nguyên

_Ghi chú:_ Giữ nguyên cả v1–v4 (diemStatue5 = true là một trong 5 id đã chốt). Không đổi vì test chốt số node.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Trinh Phong là một trong 5 tượng đài 1959–1961 (cơ sở cho v3) | [S17] [S1] [S4] | cao |


### `sources` — sửa

```json
[
  {
    "title": "Đức Mẹ Trinh Phong – Wikipedia tiếng Việt",
    "url": "https://vi.wikipedia.org/wiki/%C4%90%E1%BB%A9c_M%E1%BA%B9_Trinh_Phong",
    "tier": "B"
  },
  {
    "title": "Tượng đài Đức Mẹ Trinh Phong có Thánh lễ đầu tiên sau 31 năm – LM Lê Văn Hải, VietCatholic (16/4/2007)",
    "url": "https://www.vietcatholic.net/News/Html/43090.htm",
    "tier": "B"
  },
  {
    "title": "Lược sử Giáo xứ Sông Pha – Giáo phận Nha Trang",
    "url": "https://giaophannhatrang.org/vi/lich-su-giao-xu/lich-su-giao-xu/luoc-su-giao-xu-song-pha-50.html",
    "tier": "B"
  },
  {
    "title": "Những địa điểm hành hương kính Đức Mẹ tại Việt Nam – Đinh Văn Tiến Hùng (Vietnamese Missionaries in Asia)",
    "url": "https://vntaiwan.catholic.org.tw/maria/hanhhuong.htm",
    "tier": "C"
  }
]
```

_Ghi chú:_ Thay 2 link tìm kiếm Google (site:giaophannhatrang.org, site:cgvdt.vn) bằng bài viết trực tiếp. Dùng host vietcatholic.net vì vietcatholic.org lỗi chứng chỉ TLS; cùng bài số 43090.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Hai nguồn trực tiếp mới thay cho link tìm kiếm: bài tường thuật 2007 của cha quản xứ và lược sử giáo xứ trên trang GP Nha Trang | [S2] [S3] | cao |


## 3. Danh mục nguồn

| Mã | Tiêu đề | URL | Cấp | Ngày truy cập | Chứng minh điều gì | Vào dữ liệu |
|---|---|---|---|---|---|---|
| S1 | Đức Mẹ Trinh Phong – Wikipedia tiếng Việt (chú thích dẫn báo Thẳng Tiến, số Giáng Sinh 1961, số kép 123-124, tr. 31) | [liên kết](https://vi.wikipedia.org/wiki/%C4%90%E1%BB%A9c_M%E1%BA%B9_Trinh_Phong) | B | 2026-09-27 | Khánh thành 8/12/1961, danh hiệu Vô Nhiễm Nguyên Tội, cao 6 thước, thành phần dự lễ (LM Bề trên địa phận Nha Trang, Trung tá Tỉnh trưởng Ninh Thuận, >3.000 giáo dân), 'chỉ đạo xây dựng', thánh lễ 15/4/2007, địa danh mới xã Lâm Sơn tỉnh Khánh Hòa. Phần 'Xem thêm' nêu báo Đức Mẹ Hằng Cứu Giúp số 152 (1/1962) và Kỷ yếu GP Nha Trang 1957-2007 tr. 312-313 (chưa tiếp cận). | có |
| S2 | Tượng đài Đức Mẹ Trinh Phong có Thánh lễ đầu tiên sau 31 năm – LM Anrê Lê Văn Hải, quản xứ Sông Pha, VietCatholic News 16/4/2007 | [liên kết](https://www.vietcatholic.net/News/Html/43090.htm) | B | 2026-09-27 | Lời tường thuật trực tiếp của người chủ sự: vị trí (từ Eo Gió rẽ đường nhỏ về hướng đông chừng 3 km, nhìn về thung lũng Sông Pha), 'xây dựng vào khoảng năm 1960', thuộc quyền quản nhiệm cha sở Sông Pha, hoang vắng sau 1975, thánh lễ 15/4/2007 với khoảng 500 giáo dân và lương dân các vùng Sông Pha, Lạc Lâm, Lạc Viên, Lạc Nghiệp, Kađô; bài thơ 'Eo Gió có Mẹ Trinh Phong'. Bản vietcatholic.org lỗi chứng chỉ; bản vietcatholic.net mở được. Bài có số điện thoại/email cá nhân của tác giả — không chép vào hồ sơ. | có |
| S3 | Lược sử Giáo xứ Sông Pha – Ban Truyền thông Giáo phận Nha Trang (đăng 28/08/2021) | [liên kết](https://giaophannhatrang.org/vi/lich-su-giao-xu/lich-su-giao-xu/luoc-su-giao-xu-song-pha-50.html) | B | 2026-09-27 | Giáo xứ Sông Pha ở xã Lâm Sơn, huyện Ninh Sơn, Ninh Thuận, giáp Đơn Dương qua đèo Ngoạn Mục; manh nha từ dinh điền Tín Mục 1957; thành lập 1963; danh sách cha xứ (LM Anrê Lê Văn Hải 2002–2014). Trang KHÔNG nhắc tới tượng Trinh Phong. | có |
| S4 | Những địa điểm hành hương kính Đức Mẹ tại Việt Nam – Đinh Văn Tiến Hùng, trang Vietnamese Missionaries in Asia | [liên kết](https://vntaiwan.catholic.org.tw/maria/hanhhuong.htm) | C | 2026-09-27 | Nhân dịp Đại hội Thánh Mẫu/100 năm Lộ Đức, TT Ngô Đình Diệm 'chỉ thị cho Phủ Tổng Ủy Dinh Điền xây 5 tượng đài kính Đức Mẹ vào những năm 1959, 1960 và 1961' tại Giang Sơn, Thác Mơ, Phượng Hoàng, Trinh Phong (Ninh Thuận), Tà Pao. Không có chi tiết riêng về Trinh Phong. | có |
| S5 | Đức Mẹ Trinh Phong – trang tư liệu chuathuongxot.org (tạo 17/08/2024) | [liên kết](https://chuathuongxot.org/DucMe/DucMeTrinhPhongA.htm) | C | 2026-09-27 | Chép lại gần nguyên văn bài Wikipedia [S1] (không phải nguồn độc lập); thêm chú thích ảnh 'Tượng Đức Mẹ Trinh Phong đã được trùng tu sau khi bị xuống cấp bởi thời gian'. Ảnh đi kèm trùng với ảnh Commons [S7] — bằng chứng ảnh đã lưu hành từ 2024. Bản song song: DucMeTrinhPhong.htm. | — |
| S6 | 10 trung tâm hành hương Đức Mẹ tại Việt Nam – diễn đàn Phải Làm Gì (mục Đức Mẹ Giang Sơn) | [liên kết](https://phailamgi.com/threads/10-trung-tam-hanh-huong-duc-me-tai-viet-nam-nguoi-cong-giao-nen-den-it-nhat-mot-lan-trong-doi.2581/) | C | 2026-09-27 | Chuyện năm tượng đài 1959–1961 (có Trinh Phong 'Ninh Thuận và Lâm Đồng') cùng La Vang và Trà Kiệu tạo thành 'Chòm Sao Bắc Đẩu'. Lưu ý: biệt danh 'Đức Mẹ cụt tay' trên cùng trang là của Măng Đen, KHÔNG phải Trinh Phong. | — |
| S7 | File:DucMetrinhphong.jpg – Wikimedia Commons (tải lên 18/07/2025 bởi Baojcn01, mô tả 'ảnh sưu tầm') | [liên kết](https://commons.wikimedia.org/wiki/File:DucMetrinhphong.jpg) | C | 2026-09-27 | Ảnh hiện trạng tượng và bệ ốp bảng tạ ơn 'Tạ ơn Mẹ Trinh Phong'. Trang khai 'Own work' + CC BY-SA 4.0 nhưng mô tả lại ghi 'ảnh sưu tầm', và cùng ảnh đã có trên [S5] từ 08/2024 — nguồn gốc đáng ngờ. 669×1103 px, EXIF chỉ còn orientation. | — |
| S8 | OpenStreetMap – QL27 'Đèo Ngoạn Mục' (way 774895340) và ranh giới tỉnh (way 1145016675), truy vấn Overpass | [liên kết](https://www.openstreetmap.org/way/774895340) | C | 2026-09-27 | Tính được giao điểm QL27 với ranh giới tỉnh (Eo Gió) ≈ 11.8346, 108.6450; toạ độ bản ghi 11.8322, 108.6258 nằm sát đường ranh giới, cách Eo Gió ~2,1 km về phía tây-tây nam. OSM không có điểm nào cho tượng Trinh Phong. | — |
| S9 | Ngoạn Mục Pass – Wikipedia tiếng Anh (dẫn Lonely Planet Vietnam 2007: độ cao 980m) | [liên kết](https://en.wikipedia.org/wiki/Ngo%E1%BA%A1n_M%E1%BB%A5c_Pass) | B | 2026-09-27 | Toạ độ đèo 11.8340, 108.6450 (toạ độ đèo, không phải toạ độ tượng); độ cao 980m. | — |
| S10 | Khám phá Đức Mẹ Phong Ba và ông chú 'gác đền' tại Đà Lạt – CGvST (11/02/2026) | [liên kết](https://cgvst.com/ong-chu-trong-coi-tuong-dai-duc-me/) | C | 2026-09-27 | BẪY TRÙNG TÊN: Đức Mẹ (Suối) Phong Ba là tượng KHÁC, bên dòng suối cách chân đèo Sông Pha chừng 3 km, được giới thiệu như trạm dừng chân của lữ khách. Ghi lại để không gán ảnh/chuyện kể của nó cho Trinh Phong. | — |
| S11 | Trang Facebook 'Tượng Đài Đức Mẹ Trinh Phong' (Song Pha) | [liên kết](https://www.facebook.com/p/T%C6%B0%E1%BB%A3ng-%C4%90%C3%A0i-%C4%90%E1%BB%A9c-M%E1%BA%B9-Trinh-Phong-100064601746043/) | D | 2026-09-27 | Trang cộng đồng về tượng; có bài 'Xin thông báo tới mọi người muốn đi vào thăm viếng tượng Đức Mẹ...' (thông báo về đường vào). Không đọc được nội dung vì Facebook đòi đăng nhập. | — |
| S12 | Video YouTube 'Sông Pha. Giáo xứ có Đài Đức Mẹ Trinh Phong ở đỉnh núi Eo Gió trên đèo Ngoạn Mục giáp với Lâm Đồng' – kênh Vanquang Nguyen | [liên kết](https://www.youtube.com/watch?v=kI_mP_kiGS8) | D | 2026-09-27 | Video hành hương (chỉ đọc được tiêu đề qua oEmbed; mô tả và bình luận không truy cập được). | — |
| S13 | Video YouTube 'Tượng đài Đức Mẹ Trinh Phong tại Eo Gió, trên đỉnh đèo Ngoạn Mục' – kênh Thu Hường 79 | [liên kết](https://www.youtube.com/watch?v=9bdZjEfAuF8) | D | 2026-09-27 | Video hành hương (chỉ đọc được tiêu đề qua oEmbed). | — |
| S14 | Video 'Ngỡ ngàng tượng Đức Mẹ Trinh Phong nằm ẩn giữa rừng...' – Thôn Quê Sài Gòn TV (Facebook; bản YouTube E7pTmxci7Ls đã không còn) | [liên kết](https://www.facebook.com/thonquesaigontv/videos/2610825109168391/) | D | 2026-09-27 | Tiêu đề cho thấy cách giới thiệu 'tượng Mẹ ẩn giữa rừng' đang lưu hành. Chỉ thấy tiêu đề qua kết quả tìm kiếm. | — |
| S15 | Đèo Ngoạn Mục – Wikipedia tiếng Việt | [liên kết](https://vi.wikipedia.org/wiki/%C4%90%C3%A8o_Ngo%E1%BA%A1n_M%E1%BB%A5c) | B | 2026-09-27 | Đỉnh đèo 980m, toạ độ đèo 11.837294, 108.645625; Eo Gió là khúc cua khuỷu tay nơi khí hậu chuyển từ nắng Ninh Sơn sang gió cao nguyên. | — |
| S16 | Video YouTube 'ĐỨC MẸ TRINH PHONG ĐÈO NGOẠN MỤC – NINH THUẬN' – kênh Hải Âu Family | [liên kết](https://www.youtube.com/watch?v=Q2OC2WMUvo8) | D | 2026-09-27 | Video hành hương (chỉ đọc được tiêu đề qua oEmbed). Ứng viên ảnh/khung hình để lần ra người quay. | — |
| S17 | Đức Mẹ Tà Pao – Wikipedia tiếng Việt (chú thích dẫn tập san Việt Tiến, số kép 34-35, tháng 01-02/1960, tr. 16) | [liên kết](https://vi.wikipedia.org/wiki/%C4%90%E1%BB%A9c_M%E1%BA%B9_T%C3%A0_Pao) | B | 2026-09-27 | Bối cảnh chung của 5 tượng đài: Đại hội Thánh Mẫu 1959 mừng 100 năm Lộ Đức; TT Ngô Đình Diệm 'chỉ thị cho Phủ Tổng uy dinh điền' xây 5 tượng đài trong các năm 1959, 1960, 1961, có Đức Mẹ Trinh Phong (Ninh Thuận cũ). Không có chi tiết riêng về Trinh Phong. | — |


Đưa vào trường `sources` của dữ liệu: [S1], [S2], [S3], [S4] (4 nguồn).

Cấp nguồn:

- **A** — nguồn gốc (văn khố, kỷ yếu, bia ký)
- **B** — thứ cấp đáng tin (trang giáo phận, báo có toà soạn, sách có NXB)
- **C** — tư liệu mở (blog hành hương, trang du lịch, báo mạng tổng hợp, diễn đàn) — trích dẫn được, phải gắn nhãn
- **D** — manh mối thô (mạng xã hội, video, bình luận, lời kể chép lại) — chỉ để lần ra nguồn khác

## 4. Hình ảnh

Đề xuất 1 ảnh: 1 ảnh chính, 0 ảnh phụ.

### File:DucMetrinhphong.jpg — Ảnh chính (→ `realImage`)

| Mục | Nội dung |
|---|---|
| Trang mô tả file gốc | [https://commons.wikimedia.org/wiki/File:DucMetrinhphong.jpg](https://commons.wikimedia.org/wiki/File:DucMetrinhphong.jpg) |
| Tác giả | Không rõ tác giả (người tải lên Commons: Baojcn01, tự ghi 'ảnh sưu tầm') |
| Giấy phép (nếu biết, không bắt buộc) | Trang Commons khai CC BY-SA 4.0 'Own work' — nguồn gốc đáng ngờ, xem ghi chú |
| Năm chụp | 2025 |
| Nội dung ảnh | Tượng Đức Mẹ đứng chắp tay, áo choàng xanh, áo trắng, tràng hạt, trên bệ ốp nhiều bảng đá tạ ơn (đọc được 'Tạ ơn Mẹ Trinh Phong'), nền rừng thông, hoa dâng dưới chân. Bản tải về để kiểm: docs/khao-cuu/trinhphong/anh/commons-DucMetrinhphong.jpg |
| `realImageCaption` đề xuất | Tượng Đức Mẹ Trinh Phong trên đèo Ngoạn Mục, bệ tượng ốp các bảng tạ ơn (Nguồn: Wikimedia Commons, File:DucMetrinhphong.jpg, người tải lên Baojcn01 ghi 'ảnh sưu tầm', không rõ tác giả gốc) |
| Cam kết | Ảnh chụp thực địa, không do AI tạo sinh |



### Kho ảnh ứng viên

Ảnh nhặt được trong lúc đọc tư liệu, chưa qua lọc. Gom rộng trước, lọc sau — mục này để người kiểm chứng và lượt khảo cứu sau không phải đi tìm lại từ đầu.

| Trang chứa ảnh | Ảnh chụp gì | Trạng thái | Lý do chọn / loại |
|---|---|---|---|
| [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:DucMetrinhphong.jpg) | Ảnh duy nhất trên Commons; đúng chủ thể (bảng tạ ơn ghi 'Tạ ơn Mẹ Trinh Phong'); không có dấu hiệu AI (chữ trên bảng đá mạch lạc, chi tiết tự nhiên). | đã chọn | Đạt quy chuẩn dự án (trang công khai, giữ URL gốc, caption ghi nguồn). RỦI RO: mô tả 'ảnh sưu tầm' trái với khai 'Own work'; cùng ảnh đã có trên chuathuongxot.org từ 08/2024, trước ngày tải lên Commons 07/2025; EXIF bị xoá, kích thước nhỏ 669×1103 — nhiều khả năng ảnh lấy lại từ mạng xã hội. Người kiểm chứng quyết có dùng hay không. |
| [chuathuongxot.org](https://chuathuongxot.org/DucMe/DucMeTrinhPhongA.htm) | Cùng ảnh với Commons, bản thu nhỏ 193×278, chú thích 'đã được trùng tu sau khi bị xuống cấp bởi thời gian'. Bản tải về: docs/khao-cuu/trinhphong/anh/chuathuongxot-image002.jpg | đã loại | Trùng ảnh với ứng viên đã chọn, độ phân giải quá thấp; giữ làm bằng chứng niên đại lưu hành của ảnh. |
| [Facebook – Tượng Đài Đức Mẹ Trinh Phong](https://www.facebook.com/p/T%C6%B0%E1%BB%A3ng-%C4%90%C3%A0i-%C4%90%E1%BB%A9c-M%E1%BA%B9-Trinh-Phong-100064601746043/) | Trang cộng đồng, có album ảnh (fbid 2170866643135811, album a.2170866659802476). Có thể là nơi ảnh Commons xuất phát. | đang cân nhắc | Không mở được (đòi đăng nhập). Cần người mở bằng tay, lần ảnh gốc và người chụp. |
| [YouTube – Vanquang Nguyen](https://www.youtube.com/watch?v=kI_mP_kiGS8) | Video giáo xứ Sông Pha và đài Đức Mẹ Trinh Phong; khung hình có thể cho thấy đường vào và toàn cảnh. | đang cân nhắc | Cấp D; chỉ dùng để đối chiếu hiện trạng/lần người quay. |
| [YouTube – Thu Hường 79](https://www.youtube.com/watch?v=9bdZjEfAuF8) | Video tượng đài tại Eo Gió. | đang cân nhắc | Cấp D; chưa xem được nội dung. |
| [YouTube – Hải Âu Family](https://www.youtube.com/watch?v=Q2OC2WMUvo8) | Video 'Đức Mẹ Trinh Phong đèo Ngoạn Mục – Ninh Thuận'. | đang cân nhắc | Cấp D; chưa xem được nội dung. |
| [Wikimapia](http://wikimapia.org/6510388/vi/%C4%90%E1%BB%A9c-M%E1%BA%B9-Trinh-Phong) | Điểm 'Đức Mẹ Trinh Phong' trên Wikimapia — có thể có ảnh người dùng và toạ độ. | đang cân nhắc | Trang chặn truy cập tự động (trang kiểm tra cookie). Cần mở bằng tay; hữu ích cho cả toạ độ. |
| [Facebook – vlog cá nhân](https://www.facebook.com/NguyenVanHung1995Vlogs/posts/1389135439444205/) | Ảnh 'Đức Mẹ Phong Ba (Đèo Ngoạn Mục) đứng hiên ngang giữa dòng nước lớn'. | đã loại | KHÔNG đúng linh địa: đây là Đức Mẹ Suối Phong Ba (bẫy trùng tên), không phải Trinh Phong. |
| [YouTube – DUCCA COLORFUL](https://www.youtube.com/watch?v=XxOqA5HvS9Y) | Video 'Sự tích Đức Mẹ Phong Ba – Đèo Ngoạn Mục'. | đã loại | KHÔNG đúng linh địa (Phong Ba). |
| [Tỉnh Dòng Ngôi Lời Việt Nam](https://ngoiloivn.net/pin_post/khanh-thanh-tuong-dai-duc-me-tu-vien-ngoi-loi-song-pha/) | Ảnh khánh thành tượng đài Đức Mẹ tại tu viện Ngôi Lời Sông Pha. | đã loại | KHÔNG đúng linh địa: tượng của tu viện Ngôi Lời ở Sông Pha, khác tượng Trinh Phong. Ghi lại vì dễ nhầm do cùng địa danh Sông Pha. |


## 5. Chuyện kể & giai thoại

Phần này là tư liệu truyền tụng, **không phải sự thật lịch sử đã kiểm chứng**. Nội dung được chọn sẽ viết vào `oralTradition` kèm nhãn "tương truyền" / "theo lời kể", không bao giờ đưa vào `historicalFact`.

| Chuyện kể | Độ xác thực | Lưu hành ở đâu | Nguồn |
|---|---|---|---|
| 'Eo Gió có Mẹ Trinh Phong' — tên Mẹ gắn với ngọn gió đỉnh đèo | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | Bài thơ in trong bài VietCatholic 2007; cách giải nghĩa theo mặt chữ lưu hành rời rạc, không nguồn nào nói rõ | [S2] |
| Tượng Mẹ lặng lẽ giữa rừng thông suốt 31 năm | có nguồn A/B đối chiếu phần nền | Bài tường thuật của cha xứ (B), Wikipedia chép lại; tiêu đề video YouTube/Facebook | [S2] [S1] [S14] |
| Năm tượng đài hợp thành 'Chòm Sao Bắc Đẩu' | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | Diễn đàn phailamgi.com, chép chuyền trên các trang hành hương | [S6] |


### 'Eo Gió có Mẹ Trinh Phong' — tên Mẹ gắn với ngọn gió đỉnh đèo

> Khép lại bài tường thuật thánh lễ 15/4/2007, cha quản xứ Sông Pha viết mấy câu thơ: 'Eo Gió có Mẹ Trinh Phong, / Đèo cao gió lộng đứng trông con mình, / Tinh Tuyền, Vô Nhiễm, Uy Linh, / Rộng tay nâng đỡ, giàu tình mẫu thân'. Từ đó, cách hiểu phổ biến đọc tên 'Trinh Phong' theo mặt chữ: 'Trinh' là đồng trinh, 'Phong' là gió — người Mẹ đồng trinh đứng giữa đèo gió.

**Mô-típ:** Tên gọi dân gian / giải nghĩa tên theo mặt chữ · **Độ xác thực:** chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng · **Lưu hành:** Bài thơ in trong bài VietCatholic 2007; cách giải nghĩa theo mặt chữ lưu hành rời rạc, không nguồn nào nói rõ · **Nguồn:** [S2]

_Ghi chú:_ Bài thơ có thật trong [S2]; nhưng không nguồn nào nói đây là lý do đặt tên. Không viết giải nghĩa tên như sự thật. Giải nghĩa cũ trong bản ghi ('Mẹ đứng giữa phong ba bão táp') không tìm được nguồn — đã bỏ.

### Tượng Mẹ lặng lẽ giữa rừng thông suốt 31 năm

> Sau năm 1975, tượng đài trở nên hoang vắng; chỉ thỉnh thoảng các cha quản xứ Sông Pha, các giáo xứ lân cận, hay một đôi giáo dân có nương rẫy gần đó thầm lặng tìm vào viếng Mẹ. Mãi đến Chúa Nhật II Phục Sinh 2007, cộng đoàn mới trở lại dâng thánh lễ. Các video hành hương gần đây giới thiệu nơi này như pho tượng Mẹ 'nằm ẩn giữa rừng' trên đỉnh đèo.

**Mô-típ:** Mốc thời chiến – gìn giữ tượng; tượng ẩn giữa rừng được tìm lại · **Độ xác thực:** có nguồn A/B đối chiếu phần nền · **Lưu hành:** Bài tường thuật của cha xứ (B), Wikipedia chép lại; tiêu đề video YouTube/Facebook · **Nguồn:** [S2] [S1] [S14]

_Ghi chú:_ Phần nền (hoang vắng sau 1975, thánh lễ 2007) có nguồn B [S2] và đã viết vào historicalFact. Phần 'ẩn giữa rừng' là cách kể của video, giữ ở oralTradition.

### Năm tượng đài hợp thành 'Chòm Sao Bắc Đẩu'

> Một bài viết trên diễn đàn Công giáo kể rằng năm tượng đài Đức Mẹ dựng những năm 1959–1961 — Phượng Hoàng, Trinh Phong, Tà Pao, Thác Mơ, Giang Sơn — cùng với Đức Mẹ La Vang và Đức Mẹ Trà Kiệu tạo thành 'Chòm Sao Bắc Đẩu', với ngôi sao sáng nhất là La Vang; như chòm Bắc Đẩu dẫn đường cho tàu trên biển, các tượng đài này là dấu chỉ soi đường cho người tín hữu, mỗi tượng đặt ở một điểm cao chiến lược: đồi, đèo.

**Mô-típ:** Biểu tượng thiên văn / bố cục linh địa theo chòm sao · **Độ xác thực:** chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng · **Lưu hành:** Diễn đàn phailamgi.com, chép chuyền trên các trang hành hương · **Nguồn:** [S6]

_Ghi chú:_ Chưa thấy nguồn A/B nào nói việc chọn địa điểm là chủ ý theo chòm Bắc Đẩu. Ghi rõ là cách hình dung biểu tượng. ducme.vn đã dùng ý tưởng này ở constellationRole — cẩn thận đừng biến nó thành sự thật lịch sử.

## 6. Mâu thuẫn nguồn & điểm chưa chắc chắn

| Vấn đề | Nguồn nói A | Nguồn nói B | Xử lý đề xuất |
|---|---|---|---|
| Chiều cao tượng | Tượng cao 6 thước (theo báo Thẳng Tiến 1961) [S1] | Tượng xi măng trắng 3m (bản ghi hiện tại trên ducme.vn, không ghi nguồn) [src/data/statues.js (bản ghi hiện tại, không có nguồn)] | Bản ghi cũ không có nguồn cho 3m; đề xuất ghi '6 thước' theo nguồn sớm nhất tìm được, giữ nguyên chữ 'thước', không tự quy đổi. Ảnh hiện trạng [S7] không đủ để ước lượng chiều cao; tượng hiện nay có thể không phải tượng gốc. |
| Năm xây dựng | Khánh thành 8/12/1961 [S1] | Được xây dựng vào khoảng năm 1960 [S2] | Không mâu thuẫn cốt lõi: [S2] viết 'khoảng', [S1] dẫn báo 1961 cụ thể. Giữ year = 1961 (năm khánh thành); có thể thêm 'khởi công khoảng 1960' nếu kỷ yếu giáo phận xác nhận. |
| Toạ độ bệ tượng | Tượng cách Eo Gió chừng 3 km theo đường nhỏ rẽ về hướng đông [S2] | Toạ độ bản ghi 11.8322, 108.6258 nằm cách Eo Gió (11.8346, 108.6450) ~2,1 km về phía tây-tây nam, sát ranh giới tỉnh [S8] | Chưa phân xử được. Giữ toạ độ cũ tạm thời với độ tin cậy thấp và đánh dấu cần đo lại trên ảnh vệ tinh/Wikimapia. Lưu ý 'hướng đông' trong [S2] có thể là cách nói tương đối. |
| Giáo xứ Sông Pha quản nhiệm tượng năm 1961 | Tượng (khánh thành 1961) thuộc quyền quản nhiệm của cha sở giáo xứ Sông Pha [S1] | Giáo xứ Sông Pha thành lập năm 1963; nhà thờ Sông Pha xây năm 1973 [S3] | Có thể câu 'thuộc quyền quản nhiệm' mô tả tình trạng về sau (như cách [S2] năm 2007 viết), không phải năm 1961. Đề xuất historicalFact chỉ ghi 'thuộc quyền quản nhiệm của cha sở giáo xứ Sông Pha' không gắn năm. |
| Cách diễn đạt vai trò của TT Ngô Đình Diệm | 'chỉ đạo xây dựng' [S1] | 'chỉ thị cho Phủ Tổng Ủy Dinh Điền xây 5 tượng đài' [S17, S4] | Hai cách nói tương thích. Bỏ cụm 'theo lệnh Tổng thống' của bản ghi cũ; dùng 'chỉ đạo xây dựng' như [S1], nêu Phủ Tổng ủy Dinh điền dưới dạng 'một số tài liệu ghi'. |


**Manh mối chưa lần hết — để lượt khảo cứu sau nối tiếp:**

- Báo Thẳng Tiến, số đặc biệt Giáng Sinh 1961 (số kép 123-124), tr. 31 — ở: Chú thích của Wikipedia [S1] (Nguồn cấp A cho ngày khánh thành, chiều cao '6 thước', thành phần dự lễ. Chưa tìm được bản số hoá.)
- Báo Đức Mẹ Hằng Cứu Giúp, số 152, tháng Giêng 1962, tr. 30 — ở: Mục 'Xem thêm' của [S1] (Có thể có tường thuật/ảnh lễ khánh thành 1961.)
- Kỷ yếu Giáo phận Nha Trang 1957–2007, NXB Tôn Giáo, Hà Nội 2007, tr. 312-313 — ở: Mục 'Xem thêm' của [S1] (Nguồn A của giáo phận; có thể giải quyết mâu thuẫn năm 1960/1961 và việc quản nhiệm trước khi giáo xứ Sông Pha thành lập (1963).)
- Bản lưu web.archive.org 10/10/2007 của bài VietCatholic 43090 — ở: http://web.archive.org/web/20071010081408/http://www.vietcatholic.net:80/News/Html/43090.htm (Bản 2007 có thể còn ảnh thánh lễ 2007 mà bản hiện hành đã mất. Proxy đứt kết nối tới web.archive.org nên chưa mở được.)
- Toạ độ Wikimapia điểm 6510388 và ảnh vệ tinh — ở: http://wikimapia.org/6510388/ (Đối chiếu toạ độ bệ tượng — hiện chỉ có mô tả 'từ Eo Gió rẽ đường nhỏ về hướng đông chừng 3 km'.)
- Bài 'Xin thông báo tới mọi người muốn đi vào thăm viếng tượng Đức Mẹ...' trên trang Facebook Tượng Đài Đức Mẹ Trinh Phong — ở: https://www.facebook.com/photo.php?fbid=2170866643135811&id=1725851550970658&set=a.2170866659802476 (Có thể nói về đường vào/quy định thăm viếng hiện nay; album có thể chứa ảnh gốc của file Commons.)
- Bài 'Có thể bạn chưa biết: TƯỢNG ĐỨC MẸ TRINH PHONG' của trang Thánh Đường Việt Nam — ở: https://www.facebook.com/thanhduongvietnam/photos/a.1481999192025235/3897151700509960/ (Bài giới thiệu có ảnh; chưa đọc được (Facebook đòi đăng nhập).)
- Liên hệ giáo xứ Sông Pha (GP Nha Trang, giáo hạt Ninh Sơn) qua kênh chính thức của giáo phận — ở: Trang lược sử [S3] (Hỏi chiều cao thực tế, niên đại tu bổ, tượng hiện nay có phải tượng gốc 1961, toạ độ, ngày hành hương hằng năm.)

**Chưa tìm được nguồn, đã cố ý để ngoài đề xuất:**

- Toạ độ chính xác của bệ tượng — không nguồn mở được nào ghi; toạ độ bản ghi hiện có chưa được xác nhận
- Độ cao của bệ tượng (980m là độ cao đỉnh đèo, không phải của tượng)
- Người thiết kế, người tạc, vật liệu gốc của tượng
- Tượng hiện nay (sơn màu xanh–trắng trong ảnh) có phải pho tượng gốc 1961 hay tượng thay thế; niên đại các đợt trùng tu
- Ý nghĩa và người đặt tên 'Trinh Phong'
- Có ngày hành hương hằng năm hay không (lễ quan thầy 8/12 theo infobox Wikipedia, nhưng chưa thấy tường thuật hành hương năm nào sau 2007)
- Tác giả gốc của ảnh duy nhất trên Commons
- Nội dung bài báo Thẳng Tiến 1961, Đức Mẹ Hằng Cứu Giúp 1962 và Kỷ yếu GP Nha Trang 2007 — chưa tiếp cận, chỉ biết qua chú thích Wikipedia
- Bản lưu web.archive.org của bài VietCatholic 2007 (proxy đứt kết nối tới web.archive.org)
- Nội dung trang Facebook cộng đồng và mô tả/bình luận các video YouTube (bị chặn đăng nhập/giới hạn truy cập)

## 7. Tự đánh giá

| Trục | Đánh giá |
|---|---|
| Độ tin cậy tổng thể | trung bình |
| Rủi ro lớn nhất | Toạ độ bản ghi chưa được xác nhận và có dấu hiệu lệch khỏi vị trí tả trong nguồn trực tiếp. Phần lớn mốc 1961 chỉ đến qua Wikipedia (dẫn báo Thẳng Tiến) — chưa tiếp cận được nguồn A. Ảnh chính đề xuất có nguồn gốc đáng ngờ (Commons khai 'Own work' nhưng tự ghi 'ảnh sưu tầm', ảnh đã lưu hành trước đó). Nguồn đưa vào dữ liệu gồm 3 nguồn B và 1 nguồn C; validate-record và format-report --check đều sạch, không cảnh báo. |
| Đề nghị người kiểm chứng soi kỹ | (1) Mở S2 đối chiếu mô tả vị trí và các chi tiết thánh lễ 2007; (2) quyết toạ độ; (3) quyết có dùng ảnh Commons không; (4) kiểm con số '6 thước' so với 3m cũ; (5) kiểm oralTradition giữ đủ nhãn truyền tụng. |
| Tổng văn xuôi sau đề xuất | 780 từ |


## 8. Bản ghi dữ liệu đề xuất

```json
{
  "id": "trinhphong",
  "name": "Đức Mẹ Trinh Phong",
  "title": "Tượng đài Đức Mẹ Trinh Phong (Đèo Ngoạn Mục)",
  "year": 1961,
  "lat": 11.8322,
  "lng": 108.6258,
  "elevation": "Chưa rõ độ cao bệ tượng; đỉnh đèo Ngoạn Mục (Eo Gió) cao khoảng 980m",
  "location": "Gần Eo Gió, đỉnh đèo Ngoạn Mục (QL27), xã Lâm Sơn, tỉnh Khánh Hòa (trước năm 2025: xã Lâm Sơn, huyện Ninh Sơn, tỉnh Ninh Thuận), giáp tỉnh Lâm Đồng",
  "region": "Duyên hải Nam Trung Bộ",
  "diocese": "Giáo phận Nha Trang",
  "diemStatue5": true,
  "constellationRole": {
    "v1": {
      "star": "Phecda (Thiên Cơ)",
      "role": "Góc đông nam của đáy bầu gáo",
      "code": "γ UMa"
    },
    "v2": {
      "star": "Phecda (Thiên Cơ)",
      "role": "Góc đông nam của đáy bầu gáo",
      "code": "γ UMa"
    },
    "v3": {
      "star": "Cửa ngõ Đèo Cao Biển Sông",
      "role": "Ngũ Giác Đài 1959 - Điểm 3",
      "code": "VNCH-03"
    },
    "v4": {
      "star": "Linh đài Gió Ngàn Cổ Đèo",
      "role": "Chốt hiểm giao thương Núi Biển",
      "code": "NAT-06"
    }
  },
  "historicalFact": "Tượng đài Đức Mẹ Trinh Phong là một trong năm tượng đài Đức Mẹ mà Tổng thống Việt Nam Cộng hòa Ngô Đình Diệm chỉ đạo xây dựng ở miền Nam: nhân dịp Đại hội Thánh Mẫu mừng 100 năm Đức Mẹ hiện ra tại Lộ Đức, ông chỉ thị cho Phủ Tổng ủy Dinh điền dựng năm tượng đài trong các năm 1959, 1960 và 1961 tại Giang Sơn, Thác Mơ, Phượng Hoàng, Trinh Phong và Tà Pao. Lễ khánh thành tượng Đức Mẹ Vô Nhiễm Nguyên Tội diễn ra ngày 8/12/1961, có Linh mục Bề trên địa phận Nha Trang, Trung tá Tỉnh trưởng Ninh Thuận và hơn 3.000 giáo dân địa phương tham dự; nhân dịp này một thánh lễ được cử hành tại kỳ đài dựng trên đồi để cầu nguyện cho quốc thái dân an (theo báo Thẳng Tiến số Giáng Sinh 1961, được Wikipedia tiếng Việt dẫn lại). Tượng nằm cách giao điểm Eo Gió, đỉnh đèo Ngoạn Mục trên quốc lộ 27, chừng 3 km theo một con đường nhỏ, hướng tầm nhìn về thung lũng Sông Pha, và thuộc quyền quản nhiệm của cha sở giáo xứ Sông Pha. Sau năm 1975, tượng đài trở nên hoang vắng; thỉnh thoảng các linh mục quản xứ Sông Pha, các giáo xứ lân cận hoặc giáo dân có nương rẫy gần đó lặng lẽ đến kính viếng. Sáng Chúa Nhật II Phục Sinh, ngày 15/4/2007, Linh mục quản xứ Sông Pha Anrê Lê Văn Hải cùng khoảng 500 giáo dân và cả những người không Công giáo ở các vùng Sông Pha, Lạc Lâm, Lạc Viên, Lạc Nghiệp, Kađô đã dâng thánh lễ đầu tiên dưới chân tượng sau 31 năm. Hiện nay tượng đài là một địa điểm hành hương của người Công giáo.",
  "oralTradition": "Người Công giáo quanh Sông Pha vẫn gắn tên Mẹ Trinh Phong với ngọn gió Eo Gió. Khép lại bài tường thuật thánh lễ năm 2007, chính cha quản xứ Sông Pha viết mấy câu thơ dâng Mẹ: 'Eo Gió có Mẹ Trinh Phong, / Đèo cao gió lộng đứng trông con mình' — hình ảnh người Mẹ đứng giữa đèo cao lộng gió, trông về đoàn con dưới thung lũng. Dù vậy, chưa tìm được tư liệu nào giải thích chính thức vì sao tượng mang tên 'Trinh Phong'; cách hiểu 'Trinh' là đồng trinh, 'Phong' là gió chỉ là cách đọc theo mặt chữ đang lưu hành. Theo lời kể lưu truyền trong giới hành hương, suốt hơn ba mươi năm vắng bóng thánh lễ, tượng Mẹ vẫn đứng lặng giữa rừng thông, chỉ vài người có nương rẫy gần đó hay các cha xứ lân cận thầm lặng tìm vào viếng; đến nay nhiều video hành hương vẫn giới thiệu nơi này như pho tượng Mẹ ẩn mình giữa rừng trên đỉnh đèo. Một số bài viết trên diễn đàn Công giáo còn kể rằng năm tượng đài dựng những năm 1959–1961, cùng với La Vang và Trà Kiệu, hợp thành một 'Chòm Sao Bắc Đẩu' trên bản đồ miền Nam, như những vì sao dẫn đường cho người tín hữu — một cách hình dung mang tính biểu tượng mà chưa thấy tư liệu gốc nào ghi là chủ ý khi xây dựng.",
  "architect": "Theo báo Thẳng Tiến (1961) được Wikipedia tiếng Việt dẫn lại, tượng Đức Mẹ Vô Nhiễm Nguyên Tội tại đây cao 6 thước. Ảnh chụp đang lưu hành trên mạng (đăng lại trên Wikimedia Commons năm 2025) cho thấy hiện trạng: tượng đứng chắp tay, áo choàng xanh phủ đầu, áo dài trắng, tràng hạt vắt trên cánh tay, đặt trên một bệ cao ốp kín những bảng đá tạ ơn khắc chữ như 'Tạ ơn Mẹ Trinh Phong', xung quanh là rừng thông. Chưa tìm được tư liệu về người thiết kế, người tạc tượng, vật liệu gốc hay niên đại các đợt tu bổ; một trang tư liệu Công giáo chỉ ghi chung rằng tượng đã được trùng tu sau khi xuống cấp theo thời gian.",
  "significance": "Là một trong năm tượng đài Đức Mẹ dựng dưới thời Đệ nhất Cộng hòa trong dịp mừng kính Đức Mẹ những năm 1959–1961, Đức Mẹ Trinh Phong là một dấu mốc đức tin trên cung đèo nối đồng bằng Phan Rang với cao nguyên Lâm Viên. Thánh lễ ngày 15/4/2007 đánh dấu việc cộng đoàn giáo xứ Sông Pha trở lại kính viếng công khai sau 31 năm, có cả người không Công giáo trong vùng cùng tham dự; từ đó tượng đài trở thành một điểm hành hương, gắn với đời sống đức tin của giáo xứ Sông Pha dưới chân đèo.",
  "realImage": null,
  "realImageCaption": null,
  "galleryImages": [],
  "sources": [
    {
      "title": "Đức Mẹ Trinh Phong – Wikipedia tiếng Việt",
      "url": "https://vi.wikipedia.org/wiki/%C4%90%E1%BB%A9c_M%E1%BA%B9_Trinh_Phong",
      "tier": "B"
    },
    {
      "title": "Tượng đài Đức Mẹ Trinh Phong có Thánh lễ đầu tiên sau 31 năm – LM Lê Văn Hải, VietCatholic (16/4/2007)",
      "url": "https://www.vietcatholic.net/News/Html/43090.htm",
      "tier": "B"
    },
    {
      "title": "Lược sử Giáo xứ Sông Pha – Giáo phận Nha Trang",
      "url": "https://giaophannhatrang.org/vi/lich-su-giao-xu/lich-su-giao-xu/luoc-su-giao-xu-song-pha-50.html",
      "tier": "B"
    },
    {
      "title": "Những địa điểm hành hương kính Đức Mẹ tại Việt Nam – Đinh Văn Tiến Hùng (Vietnamese Missionaries in Asia)",
      "url": "https://vntaiwan.catholic.org.tw/maria/hanhhuong.htm",
      "tier": "C"
    }
  ]
}
```

### Kết quả tự kiểm

```text
$ node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/trinhphong/khao-cuu.json --allow-existing-id
KIEM TRA: trinhphong (docs/khao-cuu/trinhphong/khao-cuu.json)

=> DAT toan bo rang buoc bat buoc. Sau khi chen vao src/data/statues.js, chay "npm test" de xac nhan lai.
```

---

_Báo cáo sinh tự động từ hồ sơ JSON bằng `format-report.mjs`. Sửa nội dung thì sửa file JSON rồi chạy lại lệnh, đừng sửa trực tiếp vào file markdown._
