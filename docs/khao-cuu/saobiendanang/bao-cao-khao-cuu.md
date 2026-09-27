# Báo cáo khảo cứu: Đức Mẹ Sao Biển (Đà Nẵng)

- **Mã linh địa**: `saobiendanang`
- **Loại**: bổ sung tư liệu cho linh địa đã có
- **Người khảo cứu**: marian-research — phiên Claude Code (lượt 2, sau khi chủ dự án quyết 3 điểm chặn nhạy cảm)
- **Ngày hoàn thành**: 2026-09-24
- **Phạm vi**: Khảo cứu lại từ đầu: sửa các lỗi trong bản ghi hiện có (dòng tu, mô tả tượng, năm, địa chỉ, toạ độ, nguồn Wikipedia không liên quan), thay link tìm kiếm Google bằng bài viết trực tiếp, bổ sung văn xuôi lên trên 300 từ, gom chuyện kể và ảnh thực địa. Tranh chấp đất đai và vụ phá hoại tượng 26/12/2024 được nhắc theo quyết định của chủ dự án: quy về nguồn, không nêu tên cá nhân, kèm câu từ chối trách nhiệm. Không dùng danh xưng “Đền Thánh” / “trung tâm hành hương được công nhận”.
- **Hồ sơ gốc**: `docs/khao-cuu/saobiendanang/khao-cuu.json` (schema `ducme.khao-cuu/v1`)

## 1. Hiện trạng trước khảo cứu

| Mục | Hiện trạng |
|---|---|
| Ảnh thực địa | chưa có |
| Nguồn trực tiếp | 1 |
| Nguồn tìm kiếm | 1 |
| Tổng văn xuôi | 140 từ |
| Còn thiếu | ảnh thực địa; nguồn trực tiếp thứ hai; nội dung mỏng (140/300 từ) |


## 2. Đề xuất theo từng trường dữ liệu

| Trường | Thao tác | Nguồn |
|---|---|---|
| `title` | sửa | [S1] [S2] [S3] |
| `year` | sửa | [S1] |
| `lat` | sửa | [S12] [S8] [S2] |
| `lng` | sửa | [S12] [S8] [S2] |
| `location` | sửa | [S8] [S12] [S13] [S1] [S2] |
| `elevation` | sửa | [S1] [S2] [S3] |
| `historicalFact` | sửa | [S1] [S3] [S6] [S7] [S2] [S5] [S8] [S11] |
| `architect` | sửa | [S1] [S2] [S3] [S4] [S11] [S8] [S5] |
| `oralTradition` | sửa | [S1] [S2] [S3] [S4] [S5] [S11] [S6] [S7] |
| `significance` | sửa | [S2] [S4] [S9] [S1] [S3] |
| `sources` | sửa | [S1] [S2] [S3] [S4] [S5] [S8] [S11] |
| `constellationRole` | giữ nguyên | [S1] |
| `diocese` | giữ nguyên | [S1] [S5] |
| `realImage` | giữ nguyên | [S8] [S3] [S4] |


### `title` — sửa

> Tượng Đức Mẹ Sao Biển (Stella Maris) – bãi biển Mỹ Khê, Đà Nẵng

_Ghi chú:_ Bỏ danh xưng “Đền Thánh” trong tiêu đề cũ theo quyết định của chủ dự án: không có văn bản nào của Giáo phận Đà Nẵng xác nhận danh xưng đền thánh; bài viết năm 2007 [S3] còn ghi “giáo quyền chưa nói gì về Đức Mẹ Sao Biển”. Các trang cấp C [S5][S8][S11] có gọi là “Đền Đức Mẹ Sao Biển” / “TTHH” nhưng đó là cách gọi thông dụng, không phải văn bản.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Tên gọi Đức Mẹ Sao Biển / Stella Maris dùng cho pho tượng và khu công viên bên bãi Mỹ Khê | [S1] [S2] [S3] | cao |
| Năm 2007 giáo quyền chưa có ý kiến chính thức về nơi này | [S3] | trung bình |


### `year` — sửa

```json
1974
```

_Ghi chú:_ Bản ghi cũ ghi 1960 — đó là năm các nữ tu Dòng Thánh Phaolô Thành Chartres khai hoang và lập tu viện [S1], không phải năm dựng tượng. Mốc 1974 chỉ có một nguồn cấp B [S1] (lời một nữ tu thuật lại). Xem conflicts[].

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Các nữ tu dựng tượng Đức Mẹ năm 1974 (“the Marian statue they built in 1974”) | [S1] | trung bình |
| Năm 1960 các nữ tu Dòng Thánh Phaolô Thành Chartres khai hoang vùng ven biển và dựng tu viện | [S1] | cao |


### `lat` — sửa

```json
16.0479
```

_Ghi chú:_ Toạ độ cũ 16.0538, 108.2465 nằm cách khoảng 650 m về phía bắc, ngoài khuôn viên. Giá trị mới là tâm vùng OpenStreetMap way 363224651 “Nhà thờ Đức Mẹ Sao Biển” (khung 16.0470–16.0486 / 108.2473–108.2492), khớp với địa chỉ góc Võ Nguyên Giáp – Phan Tứ [S8]. Độ tin cậy: tương đối (tâm khuôn viên, chưa phải điểm bệ tượng đo tại chỗ). Theo [S1] tượng Đức Mẹ ở phía nam khuôn viên; OSM có nút “memorial” ở 16.0476, 108.2489 có thể là bệ tượng nhưng không được gắn tên.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Khuôn viên nằm quanh 16.0479, 108.2483 theo dữ liệu OpenStreetMap | [S12] | trung bình |
| Địa chỉ ngã ba Võ Nguyên Giáp – Phan Tứ, cạnh tu viện Dòng Thánh Phaolô | [S8] [S2] | trung bình |


### `lng` — sửa

```json
108.2483
```

_Ghi chú:_ Xem ghi chú ở lat.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Khuôn viên nằm quanh 16.0479, 108.2483 theo dữ liệu OpenStreetMap | [S12] | trung bình |
| Địa chỉ ngã ba Võ Nguyên Giáp – Phan Tứ, sát bãi biển Mỹ Khê | [S8] [S2] | trung bình |


### `location` — sửa

> Góc đường Võ Nguyên Giáp – Phan Tứ, cạnh tu viện Dòng Thánh Phaolô Thành Chartres, bãi biển Mỹ Khê, phường Ngũ Hành Sơn, TP. Đà Nẵng (trước 01/7/2025 thuộc quận Ngũ Hành Sơn)

_Ghi chú:_ Bản ghi cũ ghi “phường Phước Mỹ, quận Sơn Trà” — sai: OSM đặt khuôn viên trong phường Ngũ Hành Sơn. [S8] còn ghi “P. Bắc Mỹ An” nhưng phường này đã chia thành Mỹ An và Khuê Mỹ từ 02/3/2005; từ 01/7/2025 Mỹ An, Khuê Mỹ, Hòa Hải, Hòa Quý nhập thành phường Ngũ Hành Sơn [S13].

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Địa chỉ ngã ba Võ Nguyên Giáp – Phan Tứ | [S8] | trung bình |
| Khuôn viên thuộc phường Ngũ Hành Sơn (TP. Đà Nẵng) theo địa giới hiện hành | [S12] [S13] | trung bình |
| Nằm cạnh tu viện Dòng Thánh Phaolô Thành Chartres | [S1] [S2] | cao |


### `elevation` — sửa

> Xấp xỉ mực nước biển (sát bãi biển Mỹ Khê; chưa có số đo)

_Ghi chú:_ Con số “8m” trong bản ghi cũ không có nguồn. Không tìm được số đo, nên chỉ ghi mô tả.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Tượng nằm sát bãi biển Mỹ Khê, bên đường ven biển Võ Nguyên Giáp | [S1] [S2] [S3] | cao |


### `historicalFact` — sửa

> Theo Global Sisters Report (Joachim Pham, 15/06/2015), năm 1960 các nữ tu Dòng Thánh Phaolô Thành Chartres khai hoang vùng ven biển Mỹ Khê, dựng tu viện, trồng cây, chăn nuôi và làm nước mắm tại đây; tượng Đức Mẹ do các nữ tu dựng năm 1974. Bài viết đăng trên Radio Veritas Asia năm 2007 cho biết trước kia tượng đứng nép trong góc tường tu viện các nữ tu hưu dưỡng; khi nhà nước làm đường ven biển, bức tường bao không còn nên tượng đứng lộ thiên dưới một mái tôn dựng trên bốn cột sắt. Đầu tháng 10/2006, bão Xangsane đổ bộ Đà Nẵng. Cũng theo Global Sisters Report, khu công viên quanh tượng được đặt tên Sao Biển và có thêm tượng Thánh Giuse; năm 2008 các nữ tu xây bệ mới và mái kính kiên cố che tượng; tháng 6/2014 có thêm tượng Chúa Giêsu bằng đá bên cạnh một cây thánh giá gỗ cao khoảng 8 m. Nguồn này ghi các nữ tu cùng Giám mục Giáo phận Đà Nẵng chủ sự giờ cầu nguyện hằng tháng trước tượng; một số trang hành hương mô tả thêm rằng vào sáng thứ Bảy đầu tháng, sau Thánh lễ tại nguyện đường cộng đoàn Dòng Phaolô, Đức Giám mục cùng các nữ tu và giáo dân rước ra viếng tượng.
> 
> Global Sisters Report (2015) còn thuật lại lời một nữ tu trong cộng đoàn rằng sau năm 1975 khoảng 5.000 m² đất của nhà dòng bị thu hồi, năm 2005 thêm khoảng 5.000 m² được lấy để làm đường và công viên ven biển mà không bồi thường, việc yêu cầu dời tượng kéo dài đến năm 2006, và năm 2012 các nữ tu phản đối việc một cán bộ địa phương định mở nhà hàng trong công viên. ducme.vn chỉ thuật lại theo nguồn đã dẫn, không xác minh độc lập và không đưa ra nhận định về tranh chấp này.
> 
> Theo trang tin CGvST (02/01/2025), tối 26/12/2024 tượng bị phá hoại, phần đầu và tay trái của tượng Chúa Hài Đồng bị đập vỡ. ducme.vn chỉ thuật lại theo nguồn đã dẫn, không xác minh độc lập và không đưa ra nhận định về vụ việc.
> 
> Về tính chính thức: bài viết năm 2007 ghi “hiện nay giáo quyền chưa nói gì về Đức Mẹ Sao Biển”; hồ sơ khảo cứu của ducme.vn chưa tìm thấy văn bản nào của Giáo phận Đà Nẵng xác nhận danh xưng đền thánh hay trung tâm hành hương cho nơi này.

_Ghi chú:_ Đoạn 2 và 3 là nội dung nhạy cảm đã được chủ dự án cho phép nhắc với điều kiện: quy về nguồn ngay trong câu, không nêu tên cá nhân (đã bỏ tên nữ tu và tên cán bộ), kèm câu từ chối trách nhiệm. Khi triển khai KHÔNG được bỏ câu từ chối trách nhiệm hay chuyển các ý này thành khẳng định trơn. Câu “rước thứ Bảy đầu tháng” chỉ có nguồn cấp C [S5][S8]; phần nền “giờ cầu nguyện hằng tháng có Giám mục” có nguồn B [S1]. Vụ phá hoại chỉ có một nguồn cấp C [S11].

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Năm 1960 các nữ tu Dòng Thánh Phaolô Thành Chartres khai hoang vùng ven biển, dựng tu viện, trồng cây, chăn nuôi, làm nước mắm | [S1] | cao |
| Tượng Đức Mẹ do các nữ tu dựng năm 1974 | [S1] | trung bình |
| Trước kia tượng đứng nép trong góc tường tu viện nữ tu hưu dưỡng; khi làm đường, tường bao không còn, tượng đứng lộ thiên dưới mái tôn trên bốn cột sắt | [S3] [S6] [S7] | cao |
| Bão Xangsane đổ bộ Đà Nẵng đầu tháng 10/2006 | [S1] [S2] [S3] | cao |
| Công viên được đặt tên Sao Biển, có thêm tượng Thánh Giuse; năm 2008 xây bệ và mái kính; tháng 6/2014 dựng tượng Chúa Giêsu bằng đá; thánh giá gỗ cao 26 feet (~8 m) | [S1] | trung bình |
| Các nữ tu cùng Giám mục Giáo phận Đà Nẵng chủ sự giờ cầu nguyện hằng tháng trước tượng | [S1] | trung bình |
| Sáng thứ Bảy đầu tháng, sau Thánh lễ tại nguyện đường Dòng Phaolô, Đức Giám mục cùng nữ tu và giáo dân rước ra viếng tượng | [S5] [S8] | thấp |
| Theo lời một nữ tu được GSR phỏng vấn: thu hồi 5.000 m² sau 1975, thêm 5.000 m² năm 2005 không bồi thường, áp lực dời tượng đến 2006, phản đối dự định mở nhà hàng năm 2012 (thuật lại, kèm từ chối trách nhiệm) | [S1] | trung bình |
| Tối 26/12/2024 tượng bị phá hoại, đầu và tay trái tượng Chúa Hài Đồng bị đập vỡ (thuật lại, kèm từ chối trách nhiệm) | [S11] | trung bình |
| Năm 2007: “Hiện nay giáo quyền chưa nói gì về Ðức Mẹ Sao Biển” | [S3] [S6] [S7] | cao |


### `architect` — sửa

> Tượng Đức Mẹ đứng, bồng Chúa Hài Đồng trên tay, khoác áo choàng xanh, đầu đội triều thiên, dáng hơi nghiêng về phía trước. Theo bài viết năm 2007, khi ấy tượng đặt trên kệ đá sơ sài dưới một mái tôn dựng trên bốn cột sắt, sát rừng phi lao ven biển. Theo Global Sisters Report, năm 2008 các nữ tu xây bệ mới và mái kính kiên cố; ảnh chụp những năm gần đây cho thấy một vọng đình mái kính khung sắt đặt trên các cột tròn, quanh bệ có các bảng đá ghi kinh nguyện. Khuôn viên là một công viên ven biển với hàng phi lao, cây cảnh cắt tỉa, thảm cỏ và lối đi bê tông, có thêm tượng Thánh Giuse, tượng Chúa Giêsu bằng đá (2014) và cây thánh giá gỗ cao khoảng 8 m. Diện tích được các nguồn ghi khác nhau: khoảng một mẫu Anh theo Global Sisters Report, khoảng 3.000 m² theo báo Công giáo và Dân tộc (2022), gần 5.000 m² theo một số trang hành hương. Chưa tìm thấy thông tin về chất liệu, chiều cao tượng hay người tạc.

_Ghi chú:_ Bản ghi cũ mô tả “đôi tay dang rộng hướng về đại dương” — sai: mọi nguồn và ảnh đều cho thấy Đức Mẹ bồng Chúa Hài Đồng. Chi tiết triều thiên và vọng đình mái kính đọc từ ảnh công khai [S3][S8] và [S1].

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Đức Mẹ bồng Chúa Giêsu Hài Đồng, áo choàng xanh | [S1] [S2] [S3] [S4] [S11] | cao |
| Tượng đội triều thiên, đặt dưới vọng đình mái kính trên các cột tròn (đọc từ ảnh) | [S8] [S1] [S3] | trung bình |
| Năm 2007 tượng đặt trên kệ đá dưới mái tôn bốn cột sắt | [S3] | cao |
| Năm 2008 xây bệ và mái kính; tượng Thánh Giuse, tượng Chúa Giêsu bằng đá (2014), thánh giá gỗ 26 feet | [S1] | trung bình |
| Diện tích: một mẫu Anh [S1] / khoảng 3.000 m² [S2] / gần 5.000 m² [S5][S8] | [S1] [S2] [S5] [S8] | thấp |


### `oralTradition` — sửa

> Người địa phương kể rằng trong cơn bão Xangsane đầu tháng 10/2006, khi hàng phi lao quanh đó bị bật gốc, gãy ngọn, thì “căn lều” mái tôn che tượng vẫn đứng yên, pho tượng trên kệ đá sơ sài không hề hấn gì; từ đó người Công giáo lẫn người ngoài Công giáo kéo đến cầu nguyện mỗi ngày một đông. Theo lời kể chép trong bài viết năm 2007 của Radio Veritas Asia, trước cơn bão một số người dân quanh vùng chưa biết tượng là ai; vì tin rằng người chết trôi trên biển linh thiêng, họ nghĩ đây là một bà “trồi lên từ biển”, mang hương hoa đến khấn và tin rằng mình được nhận lời, về sau mới được giải thích đó là Đức Maria của đạo Công giáo. Cũng bài viết ấy kể rằng bảng tạ ơn nhiều đến mức dưới chân tượng hết chỗ, người ta phải cột thêm cành thông quanh “căn lều” để treo, và kể về một thanh niên sáng mưa nào cũng mang hoa đến, chỉ nói mình đã được ơn và xin giữ ơn ấy trong lòng. Một nữ tu được dẫn lời rằng nhìn Mẹ “ẵm Giêsu trên tay, đầu hơi cúi xuống như muốn hỏi các con cần gì” thì thấy Mẹ thật gần gũi. Global Sisters Report (2015) ghi lời một phụ nữ kể bà đến tạ ơn mỗi năm hai lần vì tin Mẹ đã giúp con trai bà khỏi bệnh ung thư gan năm 2011 — đó là niềm tin của người kể, không phải điều ducme.vn xác nhận.

_Ghi chú:_ Mọi ý đều mở đầu bằng nhãn truyền tụng/quy về nguồn. Không nêu tên người kể (các nhân vật trong [S1] là người thường còn sống). Chuyện “phép lạ khiến thành phố đổi ý định dùng khu đất” [S5][S8] cố ý KHÔNG đưa vào đây vì đụng tới tranh chấp đất — chỉ giữ trong folklore[].

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Chuyện tượng và mái tôn còn nguyên sau bão Xangsane trong khi cây quanh đó đổ | [S1] [S2] [S3] [S4] [S5] [S11] | trung bình |
| Người lương tưởng tượng là người chết trôi “trồi lên từ biển”, khấn và tin được nhận lời | [S3] | thấp |
| Bảng tạ ơn treo trên cành thông quanh “căn lều”; thanh niên ngày nào cũng đến tạ ơn | [S3] | trung bình |
| Lời một nữ tu: Mẹ “đầu hơi cúi xuống như muốn hỏi các con cần gì” | [S3] [S6] [S7] | cao |
| Lời chứng khỏi bệnh ung thư gan năm 2011 do GSR ghi lại | [S1] | trung bình |


### `significance` — sửa

> Nằm sát bãi biển Mỹ Khê, giữa dãy khách sạn, quán ăn và phố du lịch nhộn nhịp, tượng Đức Mẹ Sao Biển là chỗ dừng chân cầu nguyện quen thuộc của người Công giáo Đà Nẵng và khách hành hương qua thành phố. Các bài viết mô tả cảnh buổi tối, khoảng từ 18 đến 22 giờ, từng gia đình, người đi làm về và nhiều nhóm sinh viên Công giáo xa quê đến lần chuỗi Mân Côi, hát kinh, dâng hoa tươi; người ngoài Công giáo cũng đến thắp hương, đặt hoa và treo bảng tạ ơn. Theo Global Sisters Report, mỗi tháng nhà dòng bên cạnh đón từ 10 đến 30 đoàn hành hương. Tước hiệu Sao Biển (Stella Maris) — ngôi sao dẫn lối người đi biển — gắn nơi này với hình ảnh che chở giữa bão tố của một thành phố biển thường hứng chịu bão.

_Ghi chú:_ Bỏ câu “bảo hộ ngư dân… trước khi giong buồm ra khơi” của bản ghi cũ vì không nguồn nào nói về ngư dân tại chỗ này.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Buổi tối (18–22 giờ hoặc 19–22 giờ) nhiều nhóm, nhất là sinh viên Công giáo, đến cầu nguyện, dâng hoa | [S2] [S4] [S9] | cao |
| Người ngoài Công giáo cũng đến thắp hương, đặt hoa, treo bảng tạ ơn | [S1] [S3] | cao |
| Mỗi tháng nhà dòng đón 10–30 đoàn hành hương | [S1] | trung bình |


### `sources` — sửa

```json
[
  {
    "title": "Nuns struggle to protect seaside religious site for pilgrims — Global Sisters Report (Joachim Pham, 15/06/2015)",
    "url": "https://www.globalsistersreport.org/ministry/nuns-struggle-protect-seaside-religious-site-pilgrims-26751",
    "tier": "B"
  },
  {
    "title": "Đức Mẹ Sao Biển Đà Nẵng khoảng lặng bình yên — Báo Công giáo và Dân tộc (23/03/2022)",
    "url": "https://www.cgvdt.vn/ban-doc/uc-me-sao-bien-a-nang-khoang-lang-binh-yen_a14401",
    "tier": "B"
  },
  {
    "title": "Viếng thăm và tạ ơn Đức Mẹ Sao Biển, Đà Nẵng — Minh Nguyên, Radio Veritas Asia (01/05/2007)",
    "url": "https://vntaiwan.catholic.org.tw/07news/7news275.htm",
    "tier": "B"
  },
  {
    "title": "Đức Mẹ Sao Biển Đà Nẵng — Ymagazine, UB Mục vụ Giới trẻ (Nguyễn Khảm, 06/05/2021)",
    "url": "https://ymagazine.net/vn/bai-viet/duc-me-sao-bien-da-nang",
    "tier": "C"
  },
  {
    "title": "Đền Đức Mẹ Sao Biển – Đà Nẵng — MeLaVang.info",
    "url": "https://melavang.info/den-duc-me-sao-bien-da-nang/",
    "tier": "C"
  },
  {
    "title": "Đức Mẹ Sao Biển – Địa điểm hành hương Công giáo tại Đà Nẵng — Tượng Công Giáo Phan Thiên (29/05/2023)",
    "url": "https://www.tuongconggiaophanthien.com/tin-tuc/duc-me-sao-bien-dia-diem-hanh-huong-cong-giao-tai-da-nang-n125.html",
    "tier": "C"
  },
  {
    "title": "Kẻ xấu phá hoại tượng Đức Mẹ Sao Biển tại Đà Nẵng — CGvST (02/01/2025)",
    "url": "https://cgvst.com/ke-xau-pha-hoai-tuong-duc-me-sao-bien-tai-da-nang/",
    "tier": "C"
  }
]
```

_Ghi chú:_ Bỏ link Wikipedia “Đức Mẹ Sao Biển” (bài về tước hiệu chung, không nhắc Đà Nẵng — đã kiểm [S16]) và link tìm kiếm Google site:giaophandanang.org. Lưu ý: cgvdt.vn đọc được bằng WebFetch (tự nâng lên https) nhưng curl qua proxy bị 403/reset — kiểm chứng nên mở lại bằng trình duyệt.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Thay 1 nguồn không liên quan + 1 link tìm kiếm bằng 7 bài viết trực tiếp (3 cấp B, 4 cấp C) | [S1] [S2] [S3] [S4] [S5] [S8] [S11] | cao |


### `constellationRole` — giữ nguyên

_Ghi chú:_ Giữ nguyên v4 (NAT-14). Lưu ý cho kiểm chứng: nhãn star “Chính danh Stella Maris Miền Trung” có chữ “Chính danh” dễ hiểu thành được công nhận chính thức — nên cân nhắc đổi, nhưng việc này thuộc thiết kế chòm sao, ngoài phạm vi khảo cứu.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Giữ nguyên vai trò v4 hiện có; không có khẳng định lịch sử mới | [S1] | thấp |


### `diocese` — giữ nguyên

_Ghi chú:_ Giáo phận Đà Nẵng — [S1] nhắc Giám mục Giáo phận Đà Nẵng chủ sự cầu nguyện tại đây.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Thuộc Giáo phận Đà Nẵng | [S1] [S5] | cao |


### `realImage` — giữ nguyên

_Ghi chú:_ Giữ null trong record vì ảnh chưa được đặt vào src/assets (việc của marian-publish). Đề xuất ảnh chính và ảnh phụ ở images[]; bản tải về để đối chiếu nằm ở docs/khao-cuu/saobiendanang/anh/.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Có ảnh thực địa công khai đúng linh địa (đề xuất ở images[]) | [S8] [S3] [S4] | cao |


## 3. Danh mục nguồn

| Mã | Tiêu đề | URL | Cấp | Ngày truy cập | Chứng minh điều gì | Vào dữ liệu |
|---|---|---|---|---|---|---|
| S1 | Nuns struggle to protect seaside religious site for pilgrims — Global Sisters Report, Joachim Pham, 15/06/2015 | [liên kết](https://www.globalsistersreport.org/ministry/nuns-struggle-protect-seaside-religious-site-pilgrims-26751) | B | 2026-09-24 | Năm 1960 nữ tu Thánh Phaolô Thành Chartres khai hoang; tượng dựng 1974; bão Xangsane 2006; công viên đặt tên Sao Biển, tượng Thánh Giuse; bệ + mái kính 2008; tượng Chúa Giêsu 06/2014, thánh giá gỗ 26 feet; cầu nguyện hằng tháng với Giám mục; 10–30 đoàn/tháng; tranh chấp đất (lời một nữ tu); lời chứng ơn lạ; 3 ảnh của Peter Nguyen. Đã đọc toàn văn HTML. | có |
| S2 | Đức Mẹ Sao Biển Đà Nẵng khoảng lặng bình yên — Báo Công giáo và Dân tộc, Peter Đức Pháp – Trường Giang, 23/03/2022 | [liên kết](https://www.cgvdt.vn/ban-doc/uc-me-sao-bien-a-nang-khoang-lang-binh-yen_a14401) | B | 2026-09-24 | Vị trí trên đường Võ Nguyên Giáp, khuôn viên ~3.000 m² thuộc Dòng Thánh Phaolô Thành Chartres; Đức Mẹ bồng Chúa; chuyện tượng nguyên vẹn sau bão Xangsane; cảnh cầu nguyện 18–22 giờ của sinh viên; nhà hành hương của nữ tu. Chỉ đọc qua WebFetch (curl bị 403/reset). | có |
| S3 | Viếng thăm và tạ ơn Đức Mẹ Sao Biển, Đà Nẵng — Minh Nguyên, Radio Veritas Asia, 01/05/2007 (đăng lại trên trang Vietnamese Missionaries in Asia) | [liên kết](https://vntaiwan.catholic.org.tw/07news/7news275.htm) | B | 2026-09-24 | Nhân chứng tại chỗ tháng 4–5/2007: mái tôn 4 cột sắt, tượng từng nép góc tường tu viện nữ tu hưu dưỡng; chuyện người lương tưởng “trồi lên từ biển”; bảng tạ ơn treo trên cành thông; thanh niên tạ ơn hằng ngày; câu “giáo quyền chưa nói gì”; 3 ảnh (EXIF Canon PowerShot S3 IS, 28/04/2007). Xếp B vì do Radio Veritas Asia biên soạn; bản thân bài là ký sự cá nhân — kiểm chứng có thể hạ xuống C. | có |
| S4 | Đức Mẹ Sao Biển Đà Nẵng — Ymagazine (Ủy ban Mục vụ Giới trẻ), Nguyễn Khảm, 06/05/2021 | [liên kết](https://ymagazine.net/vn/bai-viet/duc-me-sao-bien-da-nang) | C | 2026-09-24 | Mô tả tượng áo choàng xanh bồng Chúa Giêsu; “nhiều người đến đây kể lại” chuyện bão Xangsane 2006; cảnh cầu nguyện 19–22 giờ, 9 nhóm sinh viên Công giáo; ảnh của Nguyễn Khảm (bản gốc, hddmvn.net chép lại). | có |
| S5 | Đền Đức Mẹ Sao Biển – Đà Nẵng — MeLaVang.info | [liên kết](https://melavang.info/den-duc-me-sao-bien-da-nang/) | C | 2026-09-24 | “Từ năm 2006 giáo phận Đà Nẵng có thêm một địa điểm hành hương”; rước sáng thứ Bảy đầu tháng có Đức Giám mục; chuyện kể “điều kì diệu” khiến thành phố đổi ý định dùng khu đất gần 5.000 m². Trang dịch vụ tour, không ghi tác giả, không ngày. | có |
| S6 | Đức Mẹ Sao Biển (Đà Nẵng, hành hương Mẹ Sao Biển) — MeLaVang.info | [liên kết](https://melavang.info/duc-me-sao-bien-2/) | C | 2026-09-24 | Chép lại gần nguyên văn [S3]: tượng nép góc tường tu viện, câu “giáo quyền chưa nói gì”, lời nữ tu “đầu hơi cúi xuống”. Chỉ để đối chiếu. | — |
| S7 | Đức Mẹ Sao Biển đứng bên cạnh bãi biển Mỹ Khê thuộc giáo phận Đà Nẵng — chuathuongxot.org (bản 2017) | [liên kết](https://chuathuongxot.org/DucMe/DucMeSaoBien.htm) | C | 2026-09-24 | Chép lại nội dung [S3]; có ảnh “Đức Mẹ Sao Biển sau cơn bão Xangsane” (mái tôn giữa hàng phi lao đổ). Chỉ để đối chiếu. | — |
| S8 | Đức Mẹ Sao Biển – Địa điểm hành hương Công giáo tại Đà Nẵng — Tượng Công Giáo Phan Thiên, 29/05/2023 | [liên kết](https://www.tuongconggiaophanthien.com/tin-tuc/duc-me-sao-bien-dia-diem-hanh-huong-cong-giao-tai-da-nang-n125.html) | C | 2026-09-24 | Địa chỉ ngã ba Võ Nguyên Giáp – Phan Tứ; không có cổng rào, viếng bất cứ giờ nào; rước thứ Bảy đầu tháng (chép cùng đoạn với [S5]); bộ ảnh chụp bằng iPhone 11 Pro Max có watermark của trang. Trang của cơ sở bán tượng đá. | có |
| S9 | Đức Mẹ Sao Biển — Dòng Tên Việt Nam (dongten.net), Little Stream, 10/08/2023 | [liên kết](https://dongten.net/duc-me-sao-bien/) | C | 2026-09-24 | Suy tư cá nhân: khuôn viên thuộc đất quý Soeurs Dòng Thánh Phaolô; chuyện tượng trên kệ đá sơ sài còn nguyên sau siêu bão; cảnh cầu nguyện giữa tiếng nhạc hàng quán ven biển. | — |
| S10 | Review chi tiết Đức Mẹ Sao Biển huyền thoại tại Đà Nẵng 2023 — Zoom Travel | [liên kết](https://zoomtravel.vn/duc-me-sao-bien.html) | C | 2026-09-24 | Trang du lịch: ghi “vào năm 2006” tượng được dựng bên ngoài; ghi cách trung tâm 25 km (hiển nhiên sai). Chỉ dùng để ghi mâu thuẫn niên đại. | — |
| S11 | Kẻ xấu phá hoại tượng Đức Mẹ Sao Biển tại Đà Nẵng — CGvST, 02/01/2025 | [liên kết](https://cgvst.com/ke-xau-pha-hoai-tuong-duc-me-sao-bien-tai-da-nang/) | C | 2026-09-24 | Tượng Đức Mẹ bồng Chúa Hài Đồng bị phá hoại tối thứ Năm 26/12/2024, đầu và tay trái tượng Chúa Hài Đồng bị đập vỡ; nhắc lại chuyện bão Xangsane. Trang tin Công giáo tổng hợp; trang còn liên kết tới bài “Đã bắt được kẻ phá hoại…” (chưa đọc, không đưa vào). | có |
| S12 | OpenStreetMap way 363224651 “Nhà thờ Đức Mẹ Sao Biển” (tra qua Nominatim lookup) | [liên kết](https://www.openstreetmap.org/way/363224651) | C | 2026-09-24 | Tâm vùng 16.04795, 108.24826, khung 16.0470–16.0486 / 108.2473–108.2492, địa chỉ “Đường Phan Tứ, Phường Ngũ Hành Sơn, Thành phố Đà Nẵng”. Hai nút historic=memorial không tên ở 16.0484, 108.2487 và 16.0476, 108.2489. | — |
| S13 | Ngũ Hành Sơn (phường) — Wikipedia tiếng Việt | [liên kết](https://vi.wikipedia.org/wiki/Ng%C5%A9_H%C3%A0nh_S%C6%A1n_(ph%C6%B0%E1%BB%9Dng)) | B | 2026-09-24 | Phường Ngũ Hành Sơn lập theo Nghị quyết 1659/NQ-UBTVQH15 (16/6/2025) từ Mỹ An, Khuê Mỹ, Hòa Hải, Hòa Quý; phường Bắc Mỹ An đã chia thành Mỹ An và Khuê Mỹ ngày 02/3/2005. | — |
| S14 | File:Duc-me-sao-bien.jpg — Wikimedia Commons (Baojcn01, 18/07/2025) | [liên kết](https://commons.wikimedia.org/wiki/File:Duc-me-sao-bien.jpg) | C | 2026-09-24 | Ứng viên ảnh duy nhất tìm thấy trên Commons; mô tả chỉ ghi “ảnh sưu tầm”, không nói địa điểm — đã loại (xem imageCandidates). | — |
| S15 | Kẻ xấu phá hoại tượng Đức Mẹ Sao Biển tại Đà Nẵng — diễn đàn Phải Làm Gì (phailamgi.com) | [liên kết](https://phailamgi.com/threads/ke-xau-pha-hoai-tuong-duc-me-sao-bien-tai-da-nang.3386/) | D | 2026-09-24 | Luồng diễn đàn gốc mà ảnh bìa của [S11] mang tên (tệp “phailamgi_…”). Chỉ thấy qua kết quả tìm kiếm, chưa mở. Manh mối. | — |
| S16 | Đức Mẹ Sao Biển — Wikipedia tiếng Việt (bài về tước hiệu) | [liên kết](https://vi.wikipedia.org/wiki/%C4%90%E1%BB%A9c_M%E1%BA%B9_Sao_Bi%E1%BB%83n) | B | 2026-09-24 | Nguồn đang có trong bản ghi cũ. Đã kiểm: bài nói về tước hiệu Stella Maris nói chung (ảnh minh hoạ ở Sliema, Malta), không nhắc Đà Nẵng hay Mỹ Khê — đề xuất gỡ khỏi record. | — |


Đưa vào trường `sources` của dữ liệu: [S1], [S2], [S3], [S4], [S5], [S8], [S11] (7 nguồn).

Cấp nguồn:

- **A** — nguồn gốc (văn khố, kỷ yếu, bia ký)
- **B** — thứ cấp đáng tin (trang giáo phận, báo có toà soạn, sách có NXB)
- **C** — tư liệu mở (blog hành hương, trang du lịch, báo mạng tổng hợp, diễn đàn) — trích dẫn được, phải gắn nhãn
- **D** — manh mối thô (mạng xã hội, video, bình luận, lời kể chép lại) — chỉ để lần ra nguồn khác

## 4. Hình ảnh

Đề xuất 4 ảnh: 1 ảnh chính, 3 ảnh phụ.

### duc-me-sao-bien-da-nang-b1.jpg — Ảnh chính (→ `realImage`)

| Mục | Nội dung |
|---|---|
| Trang mô tả file gốc | [https://www.tuongconggiaophanthien.com/tin-tuc/duc-me-sao-bien-dia-diem-hanh-huong-cong-giao-tai-da-nang-n125.html](https://www.tuongconggiaophanthien.com/tin-tuc/duc-me-sao-bien-dia-diem-hanh-huong-cong-giao-tai-da-nang-n125.html) |
| Tác giả | Không rõ tác giả (ảnh đăng trên Tượng Công Giáo Phan Thiên, có watermark của trang) |
| Giấy phép (nếu biết, không bắt buộc) | — |
| Năm chụp | 2023 |
| Nội dung ảnh | Tượng Đức Mẹ Sao Biển áo choàng xanh, đội triều thiên, bồng Chúa Hài Đồng, đứng trên bệ dưới vọng đình mái kính khung sắt bốn cột tròn; dưới chân chất đầy hoa tươi, hai bên là bảng đá ghi kinh “Năm Sự Thương”, “Sống Gần Mẹ” |
| `realImageCaption` đề xuất | Tượng Đức Mẹ Sao Biển dưới vọng đình mái kính bên bãi biển Mỹ Khê, Đà Nẵng (Nguồn: Tượng Công Giáo Phan Thiên, tuongconggiaophanthien.com, bài đăng 29/05/2023) |
| Cam kết | Ảnh chụp thực địa, không do AI tạo sinh |


### mesaobien3.jpg — Ảnh phụ (→ `galleryImages[]`)

| Mục | Nội dung |
|---|---|
| Trang mô tả file gốc | [https://vntaiwan.catholic.org.tw/07news/7news275.htm](https://vntaiwan.catholic.org.tw/07news/7news275.htm) |
| Tác giả | Không rõ tác giả (ảnh kèm bài của Minh Nguyên, Radio Veritas Asia) |
| Giấy phép (nếu biết, không bắt buộc) | — |
| Năm chụp | 2007 |
| Nội dung ảnh | “Căn lều” mái tôn trên cột sắt che tượng Đức Mẹ bồng Chúa bên đường ven biển, quanh đó là hàng phi lao và luống hoa; ảnh tư liệu trước khi xây bệ và mái kính (EXIF 28/04/2007) |
| `galleryImages[].caption` đề xuất | Mái tôn tạm che tượng Đức Mẹ Sao Biển bên bãi Mỹ Khê tháng 4/2007, vài tháng sau bão Xangsane (Nguồn: bài “Viếng thăm và tạ ơn Đức Mẹ Sao Biển, Đà Nẵng”, Radio Veritas Asia 2007, đăng lại trên vntaiwan.catholic.org.tw) |
| Cam kết | Ảnh chụp thực địa, không do AI tạo sinh |


### mesaobien2.jpg — Ảnh phụ (→ `galleryImages[]`)

| Mục | Nội dung |
|---|---|
| Trang mô tả file gốc | [https://vntaiwan.catholic.org.tw/07news/7news275.htm](https://vntaiwan.catholic.org.tw/07news/7news275.htm) |
| Tác giả | Không rõ tác giả (ảnh kèm bài của Minh Nguyên, Radio Veritas Asia) |
| Giấy phép (nếu biết, không bắt buộc) | — |
| Năm chụp | 2007 |
| Nội dung ảnh | Hàng rào cành thông treo kín bảng tạ ơn “Tạ ơn Đức Mẹ Sao Biển”, “Tạ ơn Đức Bà Maria” quanh chỗ tượng đứng (EXIF 28/04/2007) |
| `galleryImages[].caption` đề xuất | Bảng tạ ơn treo trên hàng rào cành thông quanh tượng Đức Mẹ Sao Biển, Đà Nẵng, năm 2007 (Nguồn: bài “Viếng thăm và tạ ơn Đức Mẹ Sao Biển, Đà Nẵng”, Radio Veritas Asia 2007, đăng lại trên vntaiwan.catholic.org.tw) |
| Cam kết | Ảnh chụp thực địa, không do AI tạo sinh |


### sb5_n.jpg — Ảnh phụ (→ `galleryImages[]`)

| Mục | Nội dung |
|---|---|
| Trang mô tả file gốc | [https://ymagazine.net/vn/bai-viet/duc-me-sao-bien-da-nang](https://ymagazine.net/vn/bai-viet/duc-me-sao-bien-da-nang) |
| Tác giả | Nguyễn Khảm (theo dòng “Nguồn ảnh” cuối bài; ảnh có chữ ký “michael”) |
| Giấy phép (nếu biết, không bắt buộc) | — |
| Năm chụp | 2021 |
| Nội dung ảnh | Buổi tối, nhóm người trẻ đứng quay lưng về phía ống kính cầu nguyện trước tượng Đức Mẹ dưới vọng đình |
| `galleryImages[].caption` đề xuất | Người trẻ cầu nguyện buổi tối trước tượng Đức Mẹ Sao Biển, Đà Nẵng (Nguồn: Ymagazine – Ủy ban Mục vụ Giới trẻ, bài của Nguyễn Khảm, 2021) |
| Cam kết | Ảnh chụp thực địa, không do AI tạo sinh |



### Kho ảnh ứng viên

Ảnh nhặt được trong lúc đọc tư liệu, chưa qua lọc. Gom rộng trước, lọc sau — mục này để người kiểm chứng và lượt khảo cứu sau không phải đi tìm lại từ đầu.

| Trang chứa ảnh | Ảnh chụp gì | Trạng thái | Lý do chọn / loại |
|---|---|---|---|
| [Tượng Công Giáo Phan Thiên](https://www.tuongconggiaophanthien.com/tin-tuc/duc-me-sao-bien-dia-diem-hanh-huong-cong-giao-tai-da-nang-n125.html) | Bộ ~12 ảnh (duc-me-sao-bien-da-nang-1…5, b1…b5, c1, c2): chính diện tượng, cận cảnh, không gian, hướng nhìn ra đường Võ Nguyên Giáp, khu tượng Thánh Giuse. EXIF b1: iPhone 11 Pro Max. | đã chọn | Ảnh rõ nhất về tượng và vọng đình hiện nay, không có người nhận diện được. Chọn b1 làm ảnh chính; nhược điểm: watermark chữ vàng của trang đè lên ảnh, trang thuộc cơ sở bán tượng. b2/b3 (cận cảnh) là phương án thay thế. |
| [Radio Veritas Asia 2007 (bản đăng lại)](https://vntaiwan.catholic.org.tw/07news/7news275.htm) | 3 ảnh 450×338, EXIF Canon PowerShot S3 IS 28/04/2007: (1) thanh niên đứng trước tượng với giỏ hoa, (2) hàng rào bảng tạ ơn, (3) mái tôn che tượng bên đường ven biển | đã chọn | Ảnh tư liệu hiếm về giai đoạn mái tôn sau bão Xangsane; EXIF máy ảnh thật, không dấu hiệu AI. Chọn (2) và (3) làm ảnh phụ; (1) để ứng viên vì có người nhận diện được. Độ phân giải thấp. |
| [Ymagazine (Nguyễn Khảm)](https://ymagazine.net/vn/bai-viet/duc-me-sao-bien-da-nang) | sb5_n.jpg (cầu nguyện buổi tối, người quay lưng), sb4_o.jpg (ảnh tập thể một đoàn hành hương trước vọng đình), 1.png/2.png/3.png (ảnh ghép đồ hoạ của Oteam) | đã chọn | Chọn sb5_n làm ảnh phụ (không lộ mặt). sb4_o không chọn vì là ảnh tập thể nhiều gương mặt người thường; các ảnh .png là thiết kế đồ hoạ, không phải ảnh thực địa thuần. |
| [Global Sisters Report (Peter Nguyen, 2015)](https://www.globalsistersreport.org/ministry/nuns-struggle-protect-seaside-religious-site-pilgrims-26751) | 3 ảnh 1000×750, EXIF Sony DSC-S730 10/06/2015: (1) hai nữ tu bên tượng Chúa Giêsu, (2) tượng Đức Mẹ dưới mái kính với một nữ tu và một khách viếng được nêu tên, (3) nhóm người cầu nguyện (không thấy tượng) | đang cân nhắc | Ảnh (2) rất rõ tượng và mái kính 2008, nhưng có người thường còn sống được nêu tên trong chú thích, gắn với bài về tranh chấp đất — để ứng viên, tránh đưa lên trang. Nếu kiểm chứng thấy ổn thì là ứng viên ảnh chính tốt. |
| [chuathuongxot.org](https://chuathuongxot.org/DucMe/DucMeSaoBien.htm) | image003.jpg 300×225 “Đức Mẹ Sao Biển sau cơn bão Xangsane”: mái tôn giữa hàng phi lao đổ, vài người đứng; image002.jpg 288×216 | đang cân nhắc | Giá trị tư liệu cao (ngay sau bão) nhưng độ phân giải rất thấp và không rõ ai chụp, trang chép lại từ nguồn khác. Giữ làm manh mối để tìm bản gốc. |
| [Báo Công giáo và Dân tộc 2022](https://www.cgvdt.vn/ban-doc/uc-me-sao-bien-a-nang-khoang-lang-binh-yen_a14401) | 2 ảnh không chú thích (Ban doc 2336_Đức Mẹ Sao biển.jpg, -2.jpg) | đang cân nhắc | Không tải được bằng curl (proxy trả 403/reset) nên chưa xem trực tiếp. |
| [MeLaVang.info](https://melavang.info/den-duc-me-sao-bien-da-nang/) | Ảnh đầu bài mang tên tệp kiểu Flickr (4403060991_c0f7f3a518_o), ảnh tượng Thánh Giuse lấy từ thodiadathanh.com, ảnh blogspot DSC00673 | đang cân nhắc | Ảnh chép lại từ nơi khác; tên tệp gợi ý bản gốc trên Flickr (id 4403060991) — nên lần ra trang Flickr gốc để có tác giả và giấy phép. |
| [MeLaVang.info](https://melavang.info/duc-me-sao-bien-2/) | Ảnh Đức-Mẹ-Sao-Biển.jpg, P1010544.jpg, ảnh từ cuucshuehn.net (hành hương 2011) | đang cân nhắc | Chép lại, không rõ tác giả; giữ làm manh mối. |
| [CGvST](https://cgvst.com/ke-xau-pha-hoai-tuong-duc-me-sao-bien-tai-da-nang/) | Ảnh bìa tượng sau khi bị phá hoại (tên tệp phailamgi_…) | đã loại | Ảnh vụ phá hoại — không phù hợp làm ảnh minh hoạ linh địa, và gắn với sự việc nhạy cảm. |
| [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Duc-me-sao-bien.jpg) | 430×640, CC BY-SA 4.0, người tải Baojcn01 (18/07/2025), mô tả “ảnh sưu tầm”, tải lên khi sửa bài vi.wikipedia “Đức Maria Mẹ Sao Biển” | đã loại | Không có gì cho thấy ảnh chụp tại Đà Nẵng (mô tả không ghi địa điểm) và tự nhận là “ảnh sưu tầm” chứ không phải tác phẩm riêng — không chứng minh được đúng linh địa. |


## 5. Chuyện kể & giai thoại

Phần này là tư liệu truyền tụng, **không phải sự thật lịch sử đã kiểm chứng**. Nội dung được chọn sẽ viết vào `oralTradition` kèm nhãn "tương truyền" / "theo lời kể", không bao giờ đưa vào `historicalFact`.

| Chuyện kể | Độ xác thực | Lưu hành ở đâu | Nguồn |
|---|---|---|---|
| Tượng và “căn lều” mái tôn đứng vững qua bão Xangsane 2006 | có nguồn A/B đối chiếu phần nền | Lời kể tại chỗ; được một nữ tu thuật lại với Global Sisters Report, được bài Radio Veritas Asia 2007 ghi lại, rồi chép chuyền qua Ymagazine, CGvDT, melavang, chuathuongxot, tuongconggiaophanthien, zoomtravel, CGvST | [S1] [S2] [S3] [S4] [S5] [S9] [S11] |
| Bà “trồi lên từ biển” | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | Bài Radio Veritas Asia 2007; không thấy nơi khác chép lại | [S3] |
| Hàng rào cành thông treo bảng tạ ơn | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | Bài Radio Veritas Asia 2007, có ảnh chụp hàng rào bảng tạ ơn | [S3] |
| Chàng thanh niên đến tạ ơn mỗi ngày | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | Bài Radio Veritas Asia 2007 | [S3] |
| Đức Mẹ cúi đầu “như muốn hỏi các con cần gì” | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | Bài Radio Veritas Asia 2007, chép lại trên melavang và chuathuongxot | [S3] [S6] [S7] |
| Lời chứng khỏi bệnh và lời nguyện đạp xe mỗi ngày | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | Phóng sự Global Sisters Report 2015 | [S1] |
| “Điều kỳ diệu” khiến thành phố đổi ý định dùng khu đất | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | melavang.info, tuongconggiaophanthien.com (hai trang dùng cùng một đoạn văn) | [S5] [S8] |


### Tượng và “căn lều” mái tôn đứng vững qua bão Xangsane 2006

> Đầu tháng 10/2006 bão Xangsane với sức gió 120–130 km/h đổ bộ Đà Nẵng. Người ta kể rằng hàng phi lao quanh đó bị bật gốc, gãy ngọn, gần hai nghìn căn nhà bị phá, nhưng mái tôn tạm trên bốn cột sắt che tượng Đức Mẹ và pho tượng trên kệ đá sơ sài vẫn không hề hấn gì. Sau bão, người Công giáo lẫn người ngoài Công giáo kéo đến cầu nguyện mỗi ngày một đông.

**Mô-típ:** Đứng vững qua tai ương · **Độ xác thực:** có nguồn A/B đối chiếu phần nền · **Lưu hành:** Lời kể tại chỗ; được một nữ tu thuật lại với Global Sisters Report, được bài Radio Veritas Asia 2007 ghi lại, rồi chép chuyền qua Ymagazine, CGvDT, melavang, chuathuongxot, tuongconggiaophanthien, zoomtravel, CGvST · **Nguồn:** [S1] [S2] [S3] [S4] [S5] [S9] [S11]

_Ghi chú:_ Phần nền (bão Xangsane 10/2006 tàn phá Đà Nẵng; năm 2007 tượng còn đứng dưới mái tôn giữa rừng phi lao cụt ngọn — có ảnh [S3]) đối chiếu được. Phần “không hề hấn gì” là lời kể, giữ nhãn truyền tụng. Mô-típ rất phổ biến ở các linh địa ven biển.

### Bà “trồi lên từ biển”

> Theo bài viết năm 2007, khi tượng mới đứng lộ thiên, một số người dân không Công giáo quanh vùng không biết đó là ai. Vì tin rằng người chết trôi trên biển linh thiêng, họ nghĩ đây cũng là một người chết trôi và bảo nhau rằng “bà đó trồi lên từ biển”, rồi mang hương hoa đến cúng và tin rằng được nhận lời. Về sau họ được giải thích đó là Đức Maria của đạo Công giáo. Những tấm bảng tạ ơn đầu tiên dưới chân bệ đá ghi đơn giản: tạ ơn Đức Mẹ Sao Biển đã nhận lời cầu xin của người con bên lương.

**Mô-típ:** Tên gọi dân gian / gặp gỡ tín ngưỡng dân gian (vong người chết đuối) · **Độ xác thực:** chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng · **Lưu hành:** Bài Radio Veritas Asia 2007; không thấy nơi khác chép lại · **Nguồn:** [S3]

_Ghi chú:_ Chỉ một nguồn. Viết với thái độ tôn trọng tín ngưỡng dân gian, không giễu cợt.

### Hàng rào cành thông treo bảng tạ ơn

> Năm 2007, bảng tạ ơn nhiều đến nỗi dưới chân tượng không còn chỗ để; ai đó đã cột thêm cành thông vào những cây thông mới trồng lại quanh “căn lều” để làm chỗ treo bảng — tác giả bài viết ví vui là cái “chuồng bò” tạ ơn, “độc đáo chưa thấy ở một nơi nào”. Hoa tươi dâng nhiều đến mức chiều thứ Sáu và thứ Bảy phải mang bớt lên nhà thờ giáo xứ gần đó cắm giùm.

**Mô-típ:** Ơn lạ cá nhân (bảng tạ ơn) · **Độ xác thực:** chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng · **Lưu hành:** Bài Radio Veritas Asia 2007, có ảnh chụp hàng rào bảng tạ ơn · **Nguồn:** [S3]

_Ghi chú:_ Chi tiết quan sát của nhân chứng, có ảnh cùng bài. Khi viết lên trang nên bỏ chữ “chuồng bò” để tránh hiểu nhầm là giễu.

### Chàng thanh niên đến tạ ơn mỗi ngày

> Một sáng mưa lạnh đầu tháng 5/2007, một thanh niên đi xe đời mới mang đến hai giỏ hoa cắm công phu, tìm mãi mới có chỗ đặt dưới chân tượng. Khi được hỏi, anh chỉ nói mình đã được ơn, xin giữ ơn đó trong lòng, và từ đó ngày nào cũng đến tạ ơn Mẹ.

**Mô-típ:** Ơn lạ cá nhân · **Độ xác thực:** chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng · **Lưu hành:** Bài Radio Veritas Asia 2007 · **Nguồn:** [S3]

### Đức Mẹ cúi đầu “như muốn hỏi các con cần gì”

> Một nữ tu tâm sự: “Nhìn Mẹ hiền hậu ẵm Giêsu trên tay, đầu hơi cúi xuống như muốn hỏi các con cần gì, tôi cảm thấy Mẹ thật gần gũi.”

**Mô-típ:** Cảm nhận về dáng tượng · **Độ xác thực:** chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng · **Lưu hành:** Bài Radio Veritas Asia 2007, chép lại trên melavang và chuathuongxot · **Nguồn:** [S3] [S6] [S7]

### Lời chứng khỏi bệnh và lời nguyện đạp xe mỗi ngày

> Global Sisters Report (2015) ghi lời một phụ nữ kể con trai bà bị ung thư gan giai đoạn cuối năm 2011, bác sĩ đã từ chối điều trị; bà hứa nếu con khỏi sẽ đến viếng Mẹ hằng năm, và kể rằng con bà đã hồi phục, nên nay mỗi năm bà đến tạ ơn hai lần. Cũng bài ấy kể về một cụ ông bị liệt một phần chân sau cơn đột quỵ năm 2005, được con gái cõng ra công viên cầu nguyện và tập đi, rồi suốt chín năm ngày nào cũng đạp xe đến lần chuỗi và lau chùi tượng.

**Mô-típ:** Ơn lạ cá nhân · **Độ xác thực:** chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng · **Lưu hành:** Phóng sự Global Sisters Report 2015 · **Nguồn:** [S1]

_Ghi chú:_ Nguồn nêu tên hai người thường còn sống — KHÔNG đưa tên lên trang. Ghi như lời chứng/niềm tin của người kể.

### “Điều kỳ diệu” khiến thành phố đổi ý định dùng khu đất

> Một số trang hành hương chép lại rằng sau khi mọi người nhận ra tượng còn nguyên sau bão, chính quyền thành phố đã thay đổi ý định ban đầu về mục đích sử dụng khu đất, bàn bạc với các nữ tu để biến khu đất gần 5.000 m² thành công viên biển, với tượng được xây mới gần địa điểm nguyên thuỷ.

**Mô-típ:** Đứng vững qua tai ương (hệ quả) · **Độ xác thực:** chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng · **Lưu hành:** melavang.info, tuongconggiaophanthien.com (hai trang dùng cùng một đoạn văn) · **Nguồn:** [S5] [S8]

_Ghi chú:_ Đụng tới tranh chấp đất đai. Phần nền (việc dời tượng được đặt ra đến 2006; công viên đặt tên Sao Biển) có ở [S1] nhưng chỉ là lời một bên. KHÔNG đưa vào oralTradition; nếu muốn dùng thì phải quy về nguồn và kèm câu từ chối trách nhiệm như đoạn tranh chấp trong historicalFact.

## 6. Mâu thuẫn nguồn & điểm chưa chắc chắn

| Vấn đề | Nguồn nói A | Nguồn nói B | Xử lý đề xuất |
|---|---|---|---|
| Năm khởi lập (trường year) | 1974 — các nữ tu dựng tượng (năm 1960 là năm khai hoang, lập tu viện) [S1] | 2006 — “vào năm 2006” tượng được dựng đứng bên ngoài; “từ năm 2006” mới thành địa điểm hành hương [S10] | Đề xuất 1974 theo nguồn cấp B có ngày tháng và người kể cụ thể; [S3] (2007) xác nhận tượng đã có từ trước bão (“Mẹ vẫn đứng đó như trước tới giờ”). Mốc 2006 ở [S5][S8] là năm nơi này đông người hành hương, không phải năm dựng tượng; [S10] hiểu lầm. Bản ghi cũ 1960 lẫn năm lập tu viện với năm dựng tượng. |
| Diện tích khuôn viên | Khoảng một mẫu Anh (~4.000 m²) [S1] | Khoảng 3.000 m² (CGvDT) / gần 5.000 m² (melavang, tuongconggiaophanthien) [S2] | Không phân xử được; architect nêu cả ba con số kèm nguồn. Không phải sự kiện cốt lõi. |
| Dòng tu gắn với linh địa | Nữ tu Dòng Thánh Phaolô Thành Chartres [S1] | “các cha dòng Phaolô” (bản ghi cũ trong src/data/statues.js, không nguồn) [bản ghi hiện có trong src/data/statues.js (không nguồn)] | Sửa theo S1, S2, S3: đây là dòng nữ. Mã S16 chỉ để trỏ về nguồn cũ của bản ghi, vốn không nói gì về điểm này. |
| Địa giới hành chính | Phường Phước Mỹ, quận Sơn Trà (bản ghi cũ) [bản ghi hiện có trong src/data/statues.js (không nguồn)] | Ngã ba Võ Nguyên Giáp – Phan Tứ, Bắc Mỹ An, Ngũ Hành Sơn (S8); OSM: phường Ngũ Hành Sơn (S12) [S8] | Ghi phường Ngũ Hành Sơn (từ 01/7/2025) theo S12, S13; tên “Bắc Mỹ An” đã không còn từ 2005. |


**Manh mối chưa lần hết — để lượt khảo cứu sau nối tiếp:**

- Bài vietcatholicnews.org/News/Html/43594.htm (được nhắc ở lượt trước) — ở: Trang trả 503; archive.org/wayback/available không có bản lưu (Có thể là bản tin gốc thời 2006–2007 về tượng sau bão)
- Bài “Đã bắt được kẻ phá hoại tượng Đức Mẹ tại TTHH Đức Mẹ Sao Biển, GP Đà Nẵng” — ở: Liên kết trong trang CGvST [S11] (Diễn biến sau vụ phá hoại (tượng đã được sửa chưa). Chỉ đọc nếu kiểm chứng cần; không nêu tên người liên quan)
- Bản gốc Flickr id 4403060991 (ảnh đầu bài melavang) — ở: https://www.flickr.com/photo.gne?id=4403060991 (Có thể cho tác giả, năm chụp và giấy phép rõ ràng — ứng viên ảnh tốt hơn)
- Trang/Facebook của Tỉnh Dòng Thánh Phaolô Thành Chartres Đà Nẵng và giaophandanang.org — ở: Chưa tìm thấy bài riêng về tượng trên giaophandanang.org qua tìm kiếm (Nguồn cấp A/B cho năm dựng tượng 1974, việc xây mái kính 2008 và lịch rước thứ Bảy đầu tháng)
- Google Maps: “Đức Mẹ Sao Biển”, ngã ba Võ Nguyên Giáp – Phan Tứ — ở: Ảnh và review của khách (Toạ độ chính xác bệ tượng; ảnh thực địa có giấy phép rõ hơn; chuyện kể của người địa phương)
- vietnamcatholictours.vn/destination/our-lady-of-sao-bien/ và hoiandaytrip.com/our-lady-star-of-the-sea-da-nang/ — ở: Kết quả tìm kiếm tiếng Anh, chưa mở (Trang du lịch tiếng Anh; có thể có ảnh/chi tiết khác)

**Chưa tìm được nguồn, đã cố ý để ngoài đề xuất:**

- QUYẾT ĐỊNH CỦA CHỦ DỰ ÁN (ghi để bước kiểm chứng thấy): (1) tranh chấp đất đai sau 1975 và 2005, việc yêu cầu dời tượng đến 2006, việc phản đối dự định mở nhà hàng năm 2012 — được nhắc, nhưng phải quy về nguồn ngay trong câu (Global Sisters Report 2015), không nêu tên cá nhân, kèm câu từ chối trách nhiệm “ducme.vn chỉ thuật lại theo nguồn đã dẫn, không xác minh độc lập và không đưa ra nhận định”; (2) vụ phá hoại 26/12/2024 — cùng quy tắc; (3) tính chính thức — không rõ thì không ghi: không dùng “Đền Thánh” hay “trung tâm hành hương được công nhận”, chỉ mô tả sự kiện có nguồn. Lược đồ không có trường riêng cho cảnh báo/từ chối trách nhiệm nên câu từ chối được đặt ngay trong đoạn văn xuôi historicalFact.
- Không tìm được văn bản nào của Giáo phận Đà Nẵng về tình trạng pháp lý/giáo luật của nơi này (đền thánh, trung tâm hành hương) — chỉ có câu năm 2007 “giáo quyền chưa nói gì”.
- Năm dựng tượng 1974 chỉ có một nguồn (lời một nữ tu qua GSR); chưa có nguồn cấp A.
- Chất liệu, chiều cao, người tạc / nơi đúc tượng — không nguồn nào ghi.
- Tượng hiện nay có phải chính pho tượng năm 1974 hay đã thay khi xây bệ 2008 — ảnh 2007 và ảnh 2015/2023 trông cùng mẫu (áo xanh, triều thiên, bồng Chúa) nhưng chưa có nguồn khẳng định.
- Toạ độ chính xác của bệ tượng Đức Mẹ (hiện chỉ là tâm khuôn viên theo OSM); cao độ chưa có số đo.
- Tình trạng tượng sau vụ phá hoại 26/12/2024 (đã sửa hay thay chưa) — chưa tìm hiểu.
- Lịch rước thứ Bảy đầu tháng chỉ có ở hai trang cấp C chép cùng một đoạn, không ghi ngày viết — không rõ còn duy trì hay không.

## 7. Tự đánh giá

| Trục | Đánh giá |
|---|---|
| Độ tin cậy tổng thể | trung bình |
| Rủi ro lớn nhất | Phần lịch sử dựa chủ yếu vào một phóng sự cấp B (GSR 2015) thuật lại lời một nữ tu — cả năm 1974, mốc 2008, 2014 lẫn các chi tiết tranh chấp đều từ một người kể; chưa có nguồn cấp A hay trang giáo phận. Tranh chấp đất đai và vụ phá hoại là nội dung nhạy cảm, được nhắc theo quyết định của chủ dự án với câu từ chối trách nhiệm đặt ngay trong historicalFact; vụ phá hoại chỉ có nguồn cấp C nên validator có thể cảnh báo. Ảnh chính lấy từ trang của một cơ sở bán tượng, có watermark đè lên ảnh. Hai cảnh báo còn lại của format-report (claim rước thứ Bảy đầu tháng và claim vụ phá hoại) là do chỉ có nguồn cấp C: cả hai đã được viết dạng quy về nguồn (“một số trang hành hương mô tả…”, “Theo trang tin CGvST…”) thay vì khẳng định trơn; nếu kiểm chứng không chấp nhận thì chuyển câu rước sang significance và bỏ/giữ câu phá hoại tuỳ quyết định của chủ dự án. |
| Đề nghị người kiểm chứng soi kỹ | (1) Đối chiếu đoạn tranh chấp và vụ phá hoại trong historicalFact với S1/S11: đúng lời nguồn, không nêu tên người, có câu từ chối trách nhiệm, không có chữ “Đền Thánh”. (2) Mốc 1974 so với bản ghi cũ 1960. (3) Toạ độ mới 16.0479, 108.2483 (tâm khuôn viên OSM) so với toạ độ cũ. (4) Có chấp nhận ảnh chính có watermark hay không; phương án thay là ảnh GSR (2) nếu chấp nhận người được nêu tên trong ảnh. (5) Cấp B của S3 (ký sự cá nhân trên Radio Veritas Asia). |
| Tổng văn xuôi sau đề xuất | 1036 từ |


## 8. Bản ghi dữ liệu đề xuất

```json
{
  "id": "saobiendanang",
  "name": "Đức Mẹ Sao Biển (Đà Nẵng)",
  "title": "Tượng Đức Mẹ Sao Biển (Stella Maris) – bãi biển Mỹ Khê, Đà Nẵng",
  "year": 1974,
  "lat": 16.0479,
  "lng": 108.2483,
  "elevation": "Xấp xỉ mực nước biển (sát bãi biển Mỹ Khê; chưa có số đo)",
  "location": "Góc đường Võ Nguyên Giáp – Phan Tứ, cạnh tu viện Dòng Thánh Phaolô Thành Chartres, bãi biển Mỹ Khê, phường Ngũ Hành Sơn, TP. Đà Nẵng (trước 01/7/2025 thuộc quận Ngũ Hành Sơn)",
  "region": "Duyên hải Nam Trung Bộ",
  "diocese": "Giáo phận Đà Nẵng",
  "diemStatue5": false,
  "constellationRole": {
    "v1": null,
    "v2": null,
    "v3": null,
    "v4": {
      "star": "Chính danh Stella Maris Miền Trung",
      "role": "Bảo hộ Duyên hải",
      "code": "NAT-14"
    }
  },
  "historicalFact": "Theo Global Sisters Report (Joachim Pham, 15/06/2015), năm 1960 các nữ tu Dòng Thánh Phaolô Thành Chartres khai hoang vùng ven biển Mỹ Khê, dựng tu viện, trồng cây, chăn nuôi và làm nước mắm tại đây; tượng Đức Mẹ do các nữ tu dựng năm 1974. Bài viết đăng trên Radio Veritas Asia năm 2007 cho biết trước kia tượng đứng nép trong góc tường tu viện các nữ tu hưu dưỡng; khi nhà nước làm đường ven biển, bức tường bao không còn nên tượng đứng lộ thiên dưới một mái tôn dựng trên bốn cột sắt. Đầu tháng 10/2006, bão Xangsane đổ bộ Đà Nẵng. Cũng theo Global Sisters Report, khu công viên quanh tượng được đặt tên Sao Biển và có thêm tượng Thánh Giuse; năm 2008 các nữ tu xây bệ mới và mái kính kiên cố che tượng; tháng 6/2014 có thêm tượng Chúa Giêsu bằng đá bên cạnh một cây thánh giá gỗ cao khoảng 8 m. Nguồn này ghi các nữ tu cùng Giám mục Giáo phận Đà Nẵng chủ sự giờ cầu nguyện hằng tháng trước tượng; một số trang hành hương mô tả thêm rằng vào sáng thứ Bảy đầu tháng, sau Thánh lễ tại nguyện đường cộng đoàn Dòng Phaolô, Đức Giám mục cùng các nữ tu và giáo dân rước ra viếng tượng.\n\nGlobal Sisters Report (2015) còn thuật lại lời một nữ tu trong cộng đoàn rằng sau năm 1975 khoảng 5.000 m² đất của nhà dòng bị thu hồi, năm 2005 thêm khoảng 5.000 m² được lấy để làm đường và công viên ven biển mà không bồi thường, việc yêu cầu dời tượng kéo dài đến năm 2006, và năm 2012 các nữ tu phản đối việc một cán bộ địa phương định mở nhà hàng trong công viên. ducme.vn chỉ thuật lại theo nguồn đã dẫn, không xác minh độc lập và không đưa ra nhận định về tranh chấp này.\n\nTheo trang tin CGvST (02/01/2025), tối 26/12/2024 tượng bị phá hoại, phần đầu và tay trái của tượng Chúa Hài Đồng bị đập vỡ. ducme.vn chỉ thuật lại theo nguồn đã dẫn, không xác minh độc lập và không đưa ra nhận định về vụ việc.\n\nVề tính chính thức: bài viết năm 2007 ghi “hiện nay giáo quyền chưa nói gì về Đức Mẹ Sao Biển”; hồ sơ khảo cứu của ducme.vn chưa tìm thấy văn bản nào của Giáo phận Đà Nẵng xác nhận danh xưng đền thánh hay trung tâm hành hương cho nơi này.",
  "oralTradition": "Người địa phương kể rằng trong cơn bão Xangsane đầu tháng 10/2006, khi hàng phi lao quanh đó bị bật gốc, gãy ngọn, thì “căn lều” mái tôn che tượng vẫn đứng yên, pho tượng trên kệ đá sơ sài không hề hấn gì; từ đó người Công giáo lẫn người ngoài Công giáo kéo đến cầu nguyện mỗi ngày một đông. Theo lời kể chép trong bài viết năm 2007 của Radio Veritas Asia, trước cơn bão một số người dân quanh vùng chưa biết tượng là ai; vì tin rằng người chết trôi trên biển linh thiêng, họ nghĩ đây là một bà “trồi lên từ biển”, mang hương hoa đến khấn và tin rằng mình được nhận lời, về sau mới được giải thích đó là Đức Maria của đạo Công giáo. Cũng bài viết ấy kể rằng bảng tạ ơn nhiều đến mức dưới chân tượng hết chỗ, người ta phải cột thêm cành thông quanh “căn lều” để treo, và kể về một thanh niên sáng mưa nào cũng mang hoa đến, chỉ nói mình đã được ơn và xin giữ ơn ấy trong lòng. Một nữ tu được dẫn lời rằng nhìn Mẹ “ẵm Giêsu trên tay, đầu hơi cúi xuống như muốn hỏi các con cần gì” thì thấy Mẹ thật gần gũi. Global Sisters Report (2015) ghi lời một phụ nữ kể bà đến tạ ơn mỗi năm hai lần vì tin Mẹ đã giúp con trai bà khỏi bệnh ung thư gan năm 2011 — đó là niềm tin của người kể, không phải điều ducme.vn xác nhận.",
  "architect": "Tượng Đức Mẹ đứng, bồng Chúa Hài Đồng trên tay, khoác áo choàng xanh, đầu đội triều thiên, dáng hơi nghiêng về phía trước. Theo bài viết năm 2007, khi ấy tượng đặt trên kệ đá sơ sài dưới một mái tôn dựng trên bốn cột sắt, sát rừng phi lao ven biển. Theo Global Sisters Report, năm 2008 các nữ tu xây bệ mới và mái kính kiên cố; ảnh chụp những năm gần đây cho thấy một vọng đình mái kính khung sắt đặt trên các cột tròn, quanh bệ có các bảng đá ghi kinh nguyện. Khuôn viên là một công viên ven biển với hàng phi lao, cây cảnh cắt tỉa, thảm cỏ và lối đi bê tông, có thêm tượng Thánh Giuse, tượng Chúa Giêsu bằng đá (2014) và cây thánh giá gỗ cao khoảng 8 m. Diện tích được các nguồn ghi khác nhau: khoảng một mẫu Anh theo Global Sisters Report, khoảng 3.000 m² theo báo Công giáo và Dân tộc (2022), gần 5.000 m² theo một số trang hành hương. Chưa tìm thấy thông tin về chất liệu, chiều cao tượng hay người tạc.",
  "significance": "Nằm sát bãi biển Mỹ Khê, giữa dãy khách sạn, quán ăn và phố du lịch nhộn nhịp, tượng Đức Mẹ Sao Biển là chỗ dừng chân cầu nguyện quen thuộc của người Công giáo Đà Nẵng và khách hành hương qua thành phố. Các bài viết mô tả cảnh buổi tối, khoảng từ 18 đến 22 giờ, từng gia đình, người đi làm về và nhiều nhóm sinh viên Công giáo xa quê đến lần chuỗi Mân Côi, hát kinh, dâng hoa tươi; người ngoài Công giáo cũng đến thắp hương, đặt hoa và treo bảng tạ ơn. Theo Global Sisters Report, mỗi tháng nhà dòng bên cạnh đón từ 10 đến 30 đoàn hành hương. Tước hiệu Sao Biển (Stella Maris) — ngôi sao dẫn lối người đi biển — gắn nơi này với hình ảnh che chở giữa bão tố của một thành phố biển thường hứng chịu bão.",
  "realImage": null,
  "realImageCaption": null,
  "galleryImages": [],
  "sources": [
    {
      "title": "Nuns struggle to protect seaside religious site for pilgrims — Global Sisters Report (Joachim Pham, 15/06/2015)",
      "url": "https://www.globalsistersreport.org/ministry/nuns-struggle-protect-seaside-religious-site-pilgrims-26751",
      "tier": "B"
    },
    {
      "title": "Đức Mẹ Sao Biển Đà Nẵng khoảng lặng bình yên — Báo Công giáo và Dân tộc (23/03/2022)",
      "url": "https://www.cgvdt.vn/ban-doc/uc-me-sao-bien-a-nang-khoang-lang-binh-yen_a14401",
      "tier": "B"
    },
    {
      "title": "Viếng thăm và tạ ơn Đức Mẹ Sao Biển, Đà Nẵng — Minh Nguyên, Radio Veritas Asia (01/05/2007)",
      "url": "https://vntaiwan.catholic.org.tw/07news/7news275.htm",
      "tier": "B"
    },
    {
      "title": "Đức Mẹ Sao Biển Đà Nẵng — Ymagazine, UB Mục vụ Giới trẻ (Nguyễn Khảm, 06/05/2021)",
      "url": "https://ymagazine.net/vn/bai-viet/duc-me-sao-bien-da-nang",
      "tier": "C"
    },
    {
      "title": "Đền Đức Mẹ Sao Biển – Đà Nẵng — MeLaVang.info",
      "url": "https://melavang.info/den-duc-me-sao-bien-da-nang/",
      "tier": "C"
    },
    {
      "title": "Đức Mẹ Sao Biển – Địa điểm hành hương Công giáo tại Đà Nẵng — Tượng Công Giáo Phan Thiên (29/05/2023)",
      "url": "https://www.tuongconggiaophanthien.com/tin-tuc/duc-me-sao-bien-dia-diem-hanh-huong-cong-giao-tai-da-nang-n125.html",
      "tier": "C"
    },
    {
      "title": "Kẻ xấu phá hoại tượng Đức Mẹ Sao Biển tại Đà Nẵng — CGvST (02/01/2025)",
      "url": "https://cgvst.com/ke-xau-pha-hoai-tuong-duc-me-sao-bien-tai-da-nang/",
      "tier": "C"
    }
  ]
}
```

### Kết quả tự kiểm

```text
$ node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/saobiendanang/khao-cuu.json --allow-existing-id
KIEM TRA: saobiendanang (docs/khao-cuu/saobiendanang/khao-cuu.json)

=> DAT toan bo rang buoc bat buoc. Sau khi chen vao src/data/statues.js, chay "npm test" de xac nhan lai.

(format-report --check: 2 canh bao con lai la fields[6].claims[6] — rước thứ Bảy đầu tháng, và fields[6].claims[8] — vụ phá hoại 26/12/2024, chỉ có nguồn cấp C; cả hai đã quy về nguồn trong câu, xem selfAssessment.biggestRisk)
```

---

_Báo cáo sinh tự động từ hồ sơ JSON bằng `format-report.mjs`. Sửa nội dung thì sửa file JSON rồi chạy lại lệnh, đừng sửa trực tiếp vào file markdown._
