# Báo cáo khảo cứu: Đức Mẹ Hòn Chông (Kiên Giang)

- **Mã linh địa**: `honchong`
- **Loại**: bổ sung tư liệu cho linh địa đã có
- **Người khảo cứu**: Claude Opus 5.5 (phiên khảo cứu 2026-09-24, marian-research)
- **Ngày hoàn thành**: 2026-09-24
- **Phạm vi**: Bản cập nhật: ưu tiên tìm ảnh thực địa đạt chuẩn (≥1000px, trang nguồn kiểm được) cho khuôn viên Tượng Đài Đức Mẹ Nữ Vương Hòa Bình Hòn Chông; đọc lại nguyên văn lược sử giáo xứ để đối chiếu từng câu của bản ghi hiện có; cập nhật địa giới hành chính sau 01/7/2025; ghi nhận hiện trạng nhà thờ đá đã xây lại; tách các ý không nguồn của bản cũ. Vòng bổ sung 2026-09-24 sau kiểm chứng vòng 1: áp dụng các điều kiện câu chữ và quyết định ảnh mới của người dùng (nới ngưỡng 800px tạm thời, ưu tiên ảnh tượng có nguồn đầy đủ).
- **Hồ sơ gốc**: `docs/khao-cuu/honchong/khao-cuu.json` (schema `ducme.khao-cuu/v1`)

## 1. Hiện trạng trước khảo cứu

| Mục | Hiện trạng |
|---|---|
| Ảnh thực địa | chưa có |
| Nguồn trực tiếp | 4 |
| Nguồn tìm kiếm | 0 |
| Tổng văn xuôi | 784 từ |
| Còn thiếu | ảnh thực địa |


## 2. Đề xuất theo từng trường dữ liệu

| Trường | Thao tác | Nguồn |
|---|---|---|
| `title` | sửa | [S2] [S4] |
| `year` | giữ nguyên | [S2] |
| `lat` | giữ nguyên | [S5] |
| `lng` | giữ nguyên | [S5] |
| `elevation` | sửa | [S20] |
| `location` | sửa | [S10] [S5] [S11] |
| `historicalFact` | sửa | [S2] [S12] [S9] [S6] [S8] [S4] [S3] [S1] [S7] [S10] |
| `oralTradition` | sửa | [S18] [S12] [S13] [S15] [S16] [S2] |
| `architect` | sửa | [S4] [S1] [S7] [S2] [S15] [S16] [S17] |
| `significance` | sửa | [S4] [S3] [S2] |
| `realImage` | thêm mới | [S4] [S1] [S7] |
| `realImageCaption` | thêm mới | [S4] |
| `galleryImages` | thêm mới | [S14] [S15] [S16] |
| `sources` | sửa | [S1] [S2] [S3] [S4] [S7] [S10] |


### `title` — sửa

> Tượng Đài Đức Mẹ Nữ Vương Hòa Bình - Giáo xứ Hòn Chông

_Ghi chú:_ Bản cũ "Linh Đài Đức Mẹ Hòn Chông - Đền Thánh Nữ Vương Hòa Bình": chưa nguồn nào gọi nơi này là "Đền Thánh". Nguồn gọi là "Tượng Đài Đức Mẹ Nữ Vương Hoà Bình" / "Đài Đức Mẹ" (S2), "tượng đài Đức Maria" (S3).

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Tên "Tượng Đài Đức Mẹ Nữ Vương Hoà Bình" và "Đài Đức Mẹ Nữ Vương Hoà Bình" | [S2] | cao |
| Tước hiệu Nữ Vương Hòa Bình, bổn mạng giáo xứ ngày 01/01 | [S2] [S4] | cao |


### `year` — giữ nguyên

_Ghi chú:_ 1959 là năm đặt tượng đài; giáo xứ có từ 1931 nhưng linh địa Đức Mẹ khởi lập 1959.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Tượng Đài Đức Mẹ Nữ Vương Hoà Bình được đặt ngày 08/12/1959 | [S2] | cao |


### `lat` — giữ nguyên

_Ghi chú:_ Toạ độ là điểm OSM của nhà thờ; tượng nằm trong cùng khuôn viên (ước chừng dưới 100m). Chưa có nguồn thứ hai độc lập với OSM (Nominatim cùng dữ liệu).

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Vĩ độ 10.1582 (node OSM 10.1582055) | [S5] | trung bình |


### `lng` — giữ nguyên

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Kinh độ 104.6113 (node OSM 104.6112725) | [S5] | trung bình |


### `elevation` — sửa

> Khoảng 10m (chân núi, sát biển Hà Tiên – Kiên Lương)

_Ghi chú:_ Bản cũ "10m" không có nguồn; SRTM 30m cho 11 m.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Độ cao mô hình SRTM tại toạ độ là 11 m | [S20] | trung bình |


### `location` — sửa

> Ấp Hòn Chông, xã Kiên Lương, tỉnh An Giang (trước 01/7/2025: xã Bình An, huyện Kiên Lương, tỉnh Kiên Giang), ven Đường tỉnh 971, vùng biển Hà Tiên – Kiên Lương

_Ghi chú:_ Cập nhật theo sắp xếp hành chính 01/7/2025 (Kiên Giang nhập vào An Giang; xã Bình An nhập vào xã Kiên Lương). Tên hiển thị "Đức Mẹ Hòn Chông (Kiên Giang)" giữ nguyên để khỏi đổi đường dẫn — người duyệt có thể cân nhắc đổi "(An Giang)".

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Xã Kiên Lương (An Giang) lập từ thị trấn Kiên Lương, xã Bình An, xã Bình Trị; có ấp Hòn Chông | [S10] | cao |
| Nhà thờ nằm trên Đường tỉnh 971, Hòn Chông, xã Kiên Lương | [S5] [S11] | cao |


### `historicalFact` — sửa

> Theo lược sử giáo xứ do linh mục chánh sở Vinhsơn Nguyễn Minh Chu biên soạn (đăng trên trang Giáo phận Long Xuyên), cộng đoàn Công giáo Hòn Chông khởi đầu từ năm 1931 với linh mục Jean-Marie Merdrignac thuộc Hội Thừa sai Paris (MEP), cha sở họ đạo Đất Hứa. Lược sử dẫn một tài liệu của Hội Thừa sai cho biết năm 1931 có khoảng 3.000 giáo dân nghèo gốc Nam Định, Ninh Bình, Thái Bình vốn làm phu đồn điền cao su và tiêu ở Phú Quốc bị bỏ rơi sau cuộc khủng hoảng kinh tế 1929; cha Merdrignac đưa họ về lập họ đạo Đất Hứa, rồi năm 1932 đến vùng Hòn Chông, Rẫy Mới, Rạch Đùng, tiếp nhận đất của một đồn điền tiêu do chủ người Pháp phá sản để lại. Nhà thờ đá Hòn Chông khởi công năm 1936, khánh thành năm 1940 và trở thành trung tâm sinh hoạt Công giáo của cả vùng Hà Tiên. Từ năm 1946 đến 1953, linh mục Phêrô Võ Thành Trinh, vừa thụ phong tại Cần Thơ, coi sóc vùng truyền giáo này. Trong thời linh mục Augustinô Phan Xuân Trọng làm chánh xứ (1958–1962), ngày 08/12/1959 diễn ra biến cố đặt Tượng Đài Đức Mẹ Nữ Vương Hòa Bình; lược sử ghi biến cố có sự hiện diện của Đức Cha Phaolô Nguyễn Văn Bình, khi ấy là Giám mục Đại diện Tông tòa Cần Thơ, và "ông Ngô". Giáo phận Long Xuyên được thành lập ngày 24/11/1960. Khoảng năm 1964–1965, chiến sự trong vùng trở nên ác liệt, linh mục Antôn Lương Công Đại rút về coi họ đạo Kiên Lương, giáo dân tản cư ra các hải đảo và nhà thờ Hòn Chông bị bỏ hoang; sau năm 1975, dấu tích còn lại là ngôi nhà thờ đá đổ nát và đài Đức Mẹ đứng giữa lùm cây hoang vắng. Đầu năm 1991, linh mục Võ Thành Trinh trở lại Hòn Chông và đề nghị phục hồi họ đạo. Ngày 19/04/1991, UBND tỉnh Kiên Giang ký quyết định số 29/TB-UB chấp thuận phục hồi Giáo xứ Hòn Chông; ngày 25/10/1991, Ban Tôn giáo tỉnh chấp thuận để linh mục Vinhsơn Nguyễn Minh Chu phụ trách; ngày 01/12/1991, giáo dân các xứ Hà Tiên, Kiên Lương, Hòa Giang, Đất Hứa, Rạch Đùng cùng giáo dân Hòn Chông phát quang khu nhà thờ và Đài Đức Mẹ. Ngày 31/08/1993, họ đạo nhận chuyển nhượng lại khu đất vườn 4.150 m² có Đài Đức Mẹ. Giáo xứ lần lượt mở một điểm trường (1997), xe đưa đón học sinh (1998) và trường mầm non (2002) do các nữ tu Tu hội Nữ Tử Bác Ái Vinh Sơn phụ trách; các nữ tu có mặt tại giáo xứ từ tháng 10/2002. Ngày 01/01/2012, văn thư thành lập Giáo hạt Hà Tiên được công bố ngay trong cuộc hành hương tại Hòn Chông. Ngày 01/01/2013, trong cuộc hành hương có trên 5.000 người tham dự, Đức Giám mục làm phép diện tích và viên đá đầu tiên xây dựng lại nhà thờ. Hằng năm vào ngày 01/01, lễ Đức Maria Mẹ Thiên Chúa – Nữ Vương Hòa Bình, bổn mạng của Giáo phận Long Xuyên và của giáo xứ, giáo phận tổ chức thánh lễ hành hương tại nhà thờ Hòn Chông; các năm 2025 và 2026 do Đức Giám mục giáo phận chủ sự. Từ 01/7/2025, khu vực Hòn Chông thuộc xã Kiên Lương, tỉnh An Giang.

_Ghi chú:_ Sửa 4 chỗ của bản cũ: (1) "Đức Cha Bình chủ sự cùng sự hiện diện của Tổng thống Ngô Đình Diệm" -> nguồn chỉ ghi "do Đức Cha Phaolô Bình và ông Ngô hiện diện", nên giữ nguyên chữ "ông Ngô" trong ngoặc kép; (2) bỏ "nhân dịp bế mạc Năm Thánh Mẫu toàn quốc" và "cung nghinh" vì S2 không nói; (3) bỏ "tượng Đức Mẹ ngoài trời vẫn đứng vững" (không nguồn), thay bằng mô tả hiện trạng sau 1975 của S2; (4) 1965 -> "khoảng 1964–1965" vì S2 ghi cả hai. Bổ sung: gốc giáo dân phu đồn điền, các quyết định phục hồi 1991, chuộc đất có Đài Đức Mẹ 1993, Giáo hạt Hà Tiên 2012, đặt viên đá xây lại nhà thờ 2013, địa giới mới 2025. Vòng bổ sung sau kiểm chứng vòng 1: áp dụng đúng 3 điều kiện câu chữ ("ký quyết định" số 29/TB-UB theo nguyên văn S2; tách mốc trường mầm non 2002 với mốc các nữ tu có mặt từ 10/2002; "Giám mục Đại diện Tông tòa Cần Thơ" theo S6).

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Lm MEP Jean-Marie Merdrignac, cha sở Đất Hứa, khởi đầu giáo điểm từ 1931 | [S2] | cao |
| Gốc giáo dân: khoảng 3.000 phu đồn điền Phú Quốc gốc Nam Định, Ninh Bình, Thái Bình sau khủng hoảng 1929 (theo tài liệu MEP được S2 dẫn); đất đồn điền tiêu ở Hòn Chông năm 1932 | [S2] | trung bình |
| Nhà thờ đá khởi công 1936, khánh thành 1940 | [S2] [S12] | cao |
| Lm Võ Thành Trinh coi sóc 1946–1953, thụ phong tại Cần Thơ 1946 | [S2] [S9] | cao |
| Biến cố đặt Tượng Đài Đức Mẹ Nữ Vương Hoà Bình ngày 08/12/1959 thời Lm Phan Xuân Trọng (1958–1962), "do Đức Cha Phaolô Bình và ông Ngô hiện diện" | [S2] | cao |
| Đức Cha Phaolô Nguyễn Văn Bình là Giám mục Đại diện Tông tòa Cần Thơ vào năm 1959 | [S6] | cao |
| Giáo phận Long Xuyên thành lập 24/11/1960 | [S8] | cao |
| Khoảng 1964–1965 giáo xứ bị bỏ hoang, Lm Lương Công Đại rút về Kiên Lương; sau 1975 còn nhà thờ đổ nát và đài Đức Mẹ giữa lùm cây | [S2] | cao |
| 19/04/1991 UBND tỉnh Kiên Giang ký quyết định số 29/TB-UB; 25/10/1991 Ban Tôn giáo tỉnh chấp thuận Lm Nguyễn Minh Chu; 01/12/1991 phát quang khu nhà thờ và Đài Đức Mẹ; 31/08/1993 chuộc lại 4.150 m² đất có Đài Đức Mẹ | [S2] | cao |
| Điểm trường 1997, xe đưa đón 1998, trường mầm non 2002 do các nữ tu Nữ Tử Bác Ái Vinh Sơn phụ trách; các nữ tu có mặt tại giáo xứ từ 10/2002 | [S2] | cao |
| 01/01/2012 công bố văn thư thành lập Giáo hạt Hà Tiên tại cuộc hành hương Hòn Chông | [S4] | cao |
| 01/01/2013 trên 5.000 người hành hương; Đức Giám mục làm phép viên đá đầu tiên xây dựng nhà thờ | [S3] | cao |
| Thánh lễ hành hương 01/01/2025 và 01/01/2026 do Đức Giám mục giáo phận chủ sự tại nhà thờ Hòn Chông | [S1] [S7] | cao |
| Từ 01/7/2025 Hòn Chông thuộc xã Kiên Lương, tỉnh An Giang | [S10] | cao |


### `oralTradition` — sửa

> Theo những lời kể lưu truyền, số phận ngôi nhà thờ đá không được thuật lại thống nhất. Một du khách chụp phế tích năm 2004 ghi lại điều nghe được tại chỗ: nhà thờ đã bị bom đạn chiến tranh phá hủy và được giữ nguyên hiện trạng. Một số bài báo mạng (Kiến Thức 2019 và 2023, được nhiều trang chép lại) thì viết rằng nhà thờ bị quân Khmer Đỏ phá hủy năm 1978 khi tràn qua biên giới, khiến hàng chục giáo dân thiệt mạng. Lược sử của chính giáo xứ không nhắc chi tiết này, chỉ ghi giáo xứ bị bỏ hoang từ khoảng 1964–1965 và sau năm 1975 chỉ còn nhà thờ đổ nát cùng đài Đức Mẹ giữa lùm cây. Trong nhiều năm, người đi đường và khách chụp ảnh quen gọi nơi này là "nhà thờ đá Hòn Chông" hay "nhà thờ đổ": những bức tường đá không mái, tháp chuông vuông còn đứng và pho tượng Đức Mẹ trắng phía sau trở thành một điểm dừng chân trên cung đường Hà Tiên – Chùa Hang – Hòn Phụ Tử.

_Ghi chú:_ Bỏ 3 ý của bản cũ không tìm được nguồn nào: "tượng sừng sững nguyên vẹn không vết đạn tích", "gắn với phong trào lập linh đài Thánh Mẫu che chở biên cương", và các chi tiết "hướng về Phú Quốc và hải đảo" dạng khẳng định. Vòng bổ sung sau kiểm chứng vòng 1: xoá câu mở đầu về "Đức Mẹ che chở người đi biển" / chuyện cứu ngư dân Phú Quốc (nguồn duy nhất là tựa video YouTube S19, thumbnail nghi AI, không xem được nội dung) và đổi câu kế tiếp thành câu mở đầu bằng nhãn truyền tụng, đúng điều kiện 4–5 của kiểm chứng.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Chú thích ảnh 2004: nhà thờ bị bom đạn chiến tranh, giữ nguyên hiện trạng | [S18] | trung bình |
| Báo mạng viết nhà thờ bị Khmer Đỏ phá năm 1978 | [S12] [S13] | trung bình |
| Cách gọi "nhà thờ đổ", cảnh tường đá, tháp chuông và đài Đức Mẹ | [S15] [S16] [S2] | trung bình |


### `architect` — sửa

> Tượng Đức Mẹ Nữ Vương Hòa Bình Hòn Chông là tượng đứng ngoài trời theo dáng Đức Mẹ Lộ Đức: áo trắng, áo choàng xanh nhạt, hai tay chắp trước ngực, trên đầu có vầng hào quang (theo ảnh đại lễ 01/01/2012 trên Kỷ yếu Mẹ La Vang). Trong ảnh năm 2012, tượng đặt trên một trụ bệ vuông ốp đá có ô trang trí hình thoi, phía sau là một khối tường cao hình tam giác, phía trước là vòng cung mang hàng chữ "Nữ Vương ban sự bình an cầu cho chúng con". Các ảnh giới thiệu trên trang Giáo phận Long Xuyên năm 2025–2026 cho thấy vòng cung chữ này vẫn còn, sơn hai màu xanh – đỏ, với bậc cấp sơn đỏ dẫn lên bệ tượng. Chất liệu, chiều cao tượng và người tạc chưa tìm thấy trong tư liệu. Ngôi nhà thờ đá cũ (1936–1940) được xây bằng đá địa phương, kết bằng vôi, cát và mủ cây ô dước; xi măng và sắt thép vì hiếm nên chỉ dùng cho ô vòm, sàn hát, cầu thang và trét mạch chống thấm (theo lược sử giáo xứ). Ảnh chụp năm 2010 cho thấy thân nhà thờ chỉ còn những bức tường đá không mái với các ô cửa vòm, trong khi tháp chuông vuông vẫn đứng, có thánh giá trên đỉnh. Ảnh năm 2020 và ảnh giới thiệu của giáo phận năm 2025 cho thấy nhà thờ đá đã được xây dựng lại, với mặt tiền tháp chuông, bậc cấp đá và tảng đá khắc tên "Giáo xứ Hòn Chông"; năm hoàn thành ngôi nhà thờ mới và việc tháp chuông cũ có được giữ lại hay không chưa có nguồn xác nhận.

_Ghi chú:_ Bỏ các chi tiết không nguồn của bản cũ: "đá nhân tạo và xi măng trắng", "bệ đa giác ốp gạch", "hướng nhìn ra vịnh Thái Lan", "khối đá xẻ tự nhiên dày dặn của núi đá vôi". Mô tả tượng dựa trên ảnh của S4 (2012) và ảnh giới thiệu S1/S7; mô tả nhà thờ dựa trên S2 và ảnh Flickr S15, S17.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Dáng tượng, bệ vuông, khối tường tam giác, vòng cung chữ (ảnh 01/01/2012) | [S4] | trung bình |
| Vòng cung chữ xanh – đỏ và bậc cấp đỏ còn thấy trong ảnh 2025–2026 | [S1] [S7] | trung bình |
| Vật liệu xây nhà thờ đá 1936–1940 | [S2] | cao |
| Phế tích không mái và tháp chuông còn đứng năm 2010 | [S15] [S16] | cao |
| Nhà thờ đá đã được xây lại (ảnh 2020 và ảnh giới thiệu 2025) | [S17] [S7] | trung bình |


### `significance` — sửa

> Hòn Chông là nơi Giáo phận Long Xuyên mừng lễ bổn mạng giáo phận – lễ Đức Mẹ Nữ Vương Hòa Bình ngày đầu năm dương lịch – bằng một cuộc hành hương chung: hàng nghìn tín hữu (hơn 4.000 người năm 2012, trên 5.000 người năm 2013) từ khắp giáo phận về giáo xứ nhỏ ở cực tây nam này. Trong thư gửi đoàn hành hương năm 2012, Đức Giám mục xác định lễ Đức Mẹ Nữ Vương Hòa Bình đầu năm là lễ bổn mạng giáo phận và dâng cộng đoàn cho Đức Mẹ. Cuộc hành hương còn gắn với các mốc tổ chức của vùng Hà Tiên: công bố thành lập Giáo hạt Hà Tiên (2012) và giáo họ Sơn Hải – Hòn Heo (2013). Với lịch sử gần một thế kỷ – lập họ đạo cho những người phu đồn điền thất nghiệp, bị bỏ hoang hơn hai thập niên, rồi được phục hồi từ năm 1991 – Hòn Chông là chứng tích về sự bền bỉ của một cộng đoàn nhỏ. Lược sử giáo xứ nhấn mạnh công cuộc tái thiết gắn với giáo dục và quan hệ với cư dân ba sắc tộc Việt, Khmer, Hoa trong vùng, qua điểm trường, xe đưa đón học sinh và trường mầm non không phân biệt dân tộc hay tôn giáo.

_Ghi chú:_ Bỏ cụm "hạt nhân và quan trọng nhất của Giáo hạt Hà Tiên" (so sánh không nguồn).

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Lễ Đức Mẹ Nữ Vương Hòa Bình đầu năm là lễ bổn mạng GP Long Xuyên; hơn 4.000 người năm 2012 | [S4] | cao |
| Trên 5.000 người năm 2013; lập giáo họ Sơn Hải – Hòn Heo | [S3] | cao |
| Tái thiết gắn với giáo dục, ba sắc tộc Việt – Khmer – Hoa | [S2] | cao |


### `realImage` — thêm mới

> assets/real_photos/honchong.jpg

_Ghi chú:_ Đề xuất từ images[0] (honchong-ungvien-dai-me-2012-800px.jpg) — ảnh chụp thật pho tượng Đức Mẹ, 800x600. Dùng ngưỡng 800px theo quyết định của người dùng (ngoại lệ tạm thời chỉ cho honchong, xem imageSearchNote). Ảnh tháp chuông 2015 (ảnh chính cũ) chuyển xuống galleryImages. Trong record vẫn để null vì file chưa có trong src/ — marian-publish sẽ chép khi được duyệt.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Ảnh đài Đức Mẹ Hòn Chông với đoàn đồng tế ngày 01/01/2012; khớp mô tả vòng cung chữ "Nữ Vương ban sự bình an cầu cho chúng con" và bậc cấp đỏ trong ảnh giới thiệu của giáo phận 2025–2026; bài ghi nguồn gplongxuyen.net | [S4] [S1] [S7] | cao |


### `realImageCaption` — thêm mới

> Tượng Đức Mẹ Nữ Vương Hòa Bình Hòn Chông trong thánh lễ hành hương ngày 01/01/2012, Giáo xứ Hòn Chông, Giáo phận Long Xuyên (Nguồn: Giáo phận Long Xuyên – gplongxuyen.net, đăng lại trên Kỷ yếu Mẹ La Vang, melavang.info/hanh-huong-duc-me-hon-chong; không rõ tác giả)

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Ngày chụp (thánh lễ 01/01/2012), nguồn gplongxuyen.net và trang đăng lại lấy từ bài S4; tác giả không được ghi | [S4] | cao |


### `galleryImages` — thêm mới

```json
[
  {
    "image": "assets/real_photos/honchong-2.jpg",
    "caption": "Tháp chuông nhà thờ đá Hòn Chông, khuôn viên Tượng Đài Đức Mẹ Nữ Vương Hòa Bình, xã Kiên Lương, An Giang, chụp 06/06/2015 (Nguồn: Flickr, phong boca – phongtruongan, flickr.com/photos/131585815@N04/18694918341; bảo lưu mọi quyền)"
  },
  {
    "image": "assets/real_photos/honchong-3.jpg",
    "caption": "Phế tích nhà thờ đá Hòn Chông và tháp chuông năm 2010 (Nguồn: Flickr, nguyenhuulongtri – NHLT.Ftb, chụp 21/08/2010; bảo lưu mọi quyền)"
  },
  {
    "image": "assets/real_photos/honchong-4.jpg",
    "caption": "Lòng phế tích nhà thờ đá Hòn Chông nhìn từ tháp chuông, năm 2010 (Nguồn: Flickr, nguyenhuulongtri – NHLT.Ftb, chụp 21/08/2010; bảo lưu mọi quyền)"
  }
]
```

_Ghi chú:_ Record vẫn để [] vì file chưa có trong src/. Thứ tự mới sau vòng bổ sung: honchong-2 = tháp chuông 2015 (honchong-thap-chuong-2015.jpg, trước là ảnh chính), honchong-3 = toàn cảnh phế tích 2010 (honchong-phe-tich-toan-canh-2010.jpg, đã bỏ cụm ", phía xa là đài Đức Mẹ Nữ Vương Hòa Bình" theo điều kiện kiểm chứng), honchong-4 = lòng phế tích nhìn từ tháp chuông 2010 (honchong-phe-tich-tu-thap-chuong-2010.jpg). Lưu ý: điều kiện 6–7 của kiểm chứng vòng 1 (tháp chuông làm realImage, phế tích là honchong-2/-3) được thay bằng bố trí này theo quyết định ảnh mới của người dùng.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Ảnh tháp chuông nhà thờ đá Hòn Chông trên Flickr, 06/06/2015 | [S14] | cao |
| Hai ảnh phế tích nhà thờ năm 2010 trên Flickr | [S15] [S16] | cao |


### `sources` — sửa

```json
[
  {
    "title": "Thánh lễ Hành hương Đức Mẹ Hòn Chông 2026 - Giáo phận Long Xuyên",
    "url": "https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-2026.html",
    "tier": "B"
  },
  {
    "title": "Lược sử Giáo xứ Hòn Chông (Lm Chánh sở Vinhsơn Nguyễn Minh Chu, nguồn: trang web Giáo phận Long Xuyên; bản chép lại trên violet.vn)",
    "url": "https://trancaolan76.violet.vn/entry/nha-tho-giao-xu-hon-chong-9524201.html",
    "tier": "B"
  },
  {
    "title": "Hành hương kính Đức Mẹ tại Hòn Chông (01/01/2013) - Mẹ La Vang (melavang.info)",
    "url": "https://melavang.info/hanh-huong-kinh-duc-me-tai-hon-chong/",
    "tier": "B"
  },
  {
    "title": "Hành hương Đức Mẹ Hòn Chông (01/01/2012) - Mẹ La Vang, dẫn nguồn gplongxuyen.net",
    "url": "https://melavang.info/hanh-huong-duc-me-hon-chong/",
    "tier": "B"
  },
  {
    "title": "Thánh Lễ hành hương Đức Mẹ Hòn Chông năm 2025 - Giáo phận Long Xuyên",
    "url": "https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-nam-2025.html",
    "tier": "B"
  },
  {
    "title": "Kiên Lương (xã) – Wikipedia tiếng Việt (đơn vị hành chính sau 01/7/2025)",
    "url": "https://vi.wikipedia.org/wiki/Ki%C3%AAn_L%C6%B0%C6%A1ng_(x%C3%A3)",
    "tier": "B"
  }
]
```

_Ghi chú:_ Giữ 4 nguồn cũ (S1, S2, S3, S7), thêm S4 (đã mở lại, có nội dung trực tiếp) và S10 (địa giới hành chính mới). Kèm tier.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Tất cả 6 nguồn đều mở được ngày 2026-09-24 | [S1] [S2] [S3] [S4] [S7] [S10] | cao |


## 3. Danh mục nguồn

| Mã | Tiêu đề | URL | Cấp | Ngày truy cập | Chứng minh điều gì | Vào dữ liệu |
|---|---|---|---|---|---|---|
| S1 | Thánh lễ Hành hương Đức Mẹ Hòn Chông 2026 - Giáo phận Long Xuyên | [liên kết](https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-2026.html) | B | 2026-09-24 | Thánh lễ hành hương do Đức Giám mục cử hành lúc 8g30 ngày 01/01/2026 tại nhà thờ giáo xứ Hòn Chông, Kiên Lương; ảnh giới thiệu (1920x1080) có ảnh tượng Đức Mẹ dưới vòng cung chữ "Nữ Vương ban sự bình an cầu cho chúng con" và mặt tiền nhà thờ đá hiện nay | có |
| S2 | Lược sử Giáo xứ Hòn Chông (Lm Chánh sở Vinhsơn Nguyễn Minh Chu, nguồn: trang web Giáo phận Long Xuyên; bản chép lại trên violet.vn) | [liên kết](https://trancaolan76.violet.vn/entry/nha-tho-giao-xu-hon-chong-9524201.html) | B | 2026-09-24 | Toàn bộ lược sử: Lm MEP Jean-Marie Merdrignac từ 1931, gốc giáo dân phu đồn điền Phú Quốc, đất đồn điền tiêu 1932, nhà thờ đá 1936–1940 và vật liệu xây; Lm Võ Thành Trinh 1946–1953; Lm Phan Xuân Trọng 1958–1962 và biến cố đặt Tượng Đài Đức Mẹ Nữ Vương Hoà Bình ngày 08/12/1959 "do Đức Cha Phaolô Bình và ông Ngô hiện diện"; Lm Lương Công Đại 1962–1964/65, giáo xứ bỏ hoang; hiện trạng sau 1975; các quyết định phục hồi 1991, phát quang khu nhà thờ và Đài Đức Mẹ 01/12/1991, chuộc đất có Đài Đức Mẹ 31/08/1993; trường học, nhà trẻ, Nữ Tử Bác Ái từ 10/2002; ba sắc tộc Việt – Khmer – Hoa. Đây là bản chép lại (ghi "Nguồn: Trang Web Giáo Phận Long Xuyên", đăng 20/08/2013); bản gốc trên trang giáo phận cũ chưa lần ra. | có |
| S3 | Hành hương kính Đức Mẹ tại Hòn Chông (01/01/2013) - Mẹ La Vang (melavang.info) | [liên kết](https://melavang.info/hanh-huong-kinh-duc-me-tai-hon-chong/) | B | 2026-09-24 | Ngày 01/01/2013 có trên 5.000 người hành hương; đoàn rước dừng tại tượng đài Đức Maria; Đức Cha làm phép diện tích và viên đá đầu tiên xây dựng nhà thờ; công bố sắc lệnh thành lập giáo họ Sơn Hải (Hòn Heo); Đức Mẹ là bổn mạng giáo phận và giáo xứ | có |
| S4 | Hành hương Đức Mẹ Hòn Chông (01/01/2012) - Mẹ La Vang, dẫn nguồn gplongxuyen.net | [liên kết](https://melavang.info/hanh-huong-duc-me-hon-chong/) | B | 2026-09-24 | Ngày 01/01/2012 hơn 4.000 người hành hương tôn vinh Đức Mẹ tước hiệu Nữ Vương Hòa Bình; Cha Tổng Đại diện chủ trì thay Đức Giám mục; công bố văn thư thành lập Giáo hạt Hà Tiên; thư Đức Giám mục xác định lễ Đức Mẹ Nữ Vương Hòa Bình đầu năm là lễ bổn mạng Giáo phận Long Xuyên; bài ghi "Nguồn: gplongxuyen.net", người đăng "admin", ngày đăng 11/11/2013 (article:published_time 2013-11-11T04:07:49Z). Ảnh duy nhất trong bài: wp-content/uploads/2013/11/leducme3resizean4.jpg, 800x600, không ghi tác giả — ảnh đài Đức Mẹ với đoàn đồng tế, đề xuất làm ảnh chính | có |
| S5 | OpenStreetMap - node 2331791879 "Nhà thờ Hòn Chông" | [liên kết](https://www.openstreetmap.org/node/2331791879) | B | 2026-09-24 | Toạ độ 10.1582055, 104.6112725 (amenity=place_of_worship, religion=christian, sửa lần cuối 04/01/2025); Nominatim trả địa chỉ "Hòn Chông, Xã Kiên Lương, Tỉnh An Giang" | — |
| S6 | Phaolô Nguyễn Văn Bình – Wikipedia tiếng Việt | [liên kết](https://vi.wikipedia.org/wiki/Phaol%C3%B4_Nguy%E1%BB%85n_V%C4%83n_B%C3%ACnh) | B | 2026-09-12 | Đức Cha Phaolô Nguyễn Văn Bình là Giám mục Cần Thơ 1955–1960 (đối chiếu lượt 2026-09-12, lượt này chưa mở lại) | — |
| S7 | Thánh Lễ hành hương Đức Mẹ Hòn Chông năm 2025 - Giáo phận Long Xuyên | [liên kết](https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-nam-2025.html) | B | 2026-09-24 | Thánh lễ do Đức Giám mục giáo phận cử hành 9g00 ngày 01/01/2025 tại nhà thờ giáo xứ Hòn Chông, giáo hạt Hà Tiên; ảnh giới thiệu (1920x1080) cho thấy nhà thờ đá đã xây dựng lại với tháp chuông, bậc cấp và tảng đá khắc "Giáo xứ Hòn Chông", và ảnh nhỏ đài Đức Mẹ | có |
| S8 | Giáo phận Long Xuyên – Wikipedia tiếng Việt | [liên kết](https://vi.wikipedia.org/wiki/Gi%C3%A1o_ph%E1%BA%ADn_Long_Xuy%C3%AAn) | B | 2026-09-24 | Giáo phận Long Xuyên được thành lập ngày 24/11/1960; Giám mục chính tòa hiện nay Giuse Trần Văn Toản (từ 2019). Bài có liệt kê "Trung tâm hành hương Đức Mẹ Hòn Chông" và "Họ đạo Hòn Chông" (đính chính theo kiểm chứng vòng 1). | — |
| S9 | Phêrô Võ Thành Trinh – Wikipedia tiếng Việt | [liên kết](https://vi.wikipedia.org/wiki/Ph%C3%AAr%C3%B4_V%C3%B5_Th%C3%A0nh_Trinh) | B | 2026-09-24 | Lm Võ Thành Trinh (1916–1991) thụ phong linh mục tháng 9/1946 tại Cần Thơ, mất ngày 21/08/1991 (Wikipedia ghi tại Bệnh viện Chợ Rẫy; S2 ghi Bệnh viện Thống Nhất) | — |
| S10 | Kiên Lương (xã) – Wikipedia tiếng Việt (đơn vị hành chính sau 01/7/2025) | [liên kết](https://vi.wikipedia.org/wiki/Ki%C3%AAn_L%C6%B0%C6%A1ng_(x%C3%A3)) | B | 2026-09-24 | Xã Kiên Lương, tỉnh An Giang thành lập theo Nghị quyết 1654/NQ-UBTVQH15 (2025) từ thị trấn Kiên Lương, xã Bình An, xã Bình Trị; gồm 18 ấp, trong đó có ấp Hòn Chông | có |
| S11 | Thăm, tặng quà chức sắc tiêu biểu tại hai xã Hòn Đất và Kiên Lương dịp Lễ Phục sinh 2026 - Báo An Giang | [liên kết](https://baoangiang.com.vn/tham-tang-qua-chuc-sac-tieu-bieu-tai-hai-xa-hon-dat-va-kien-luong-dip-le-phuc-sinh-2026-a481107.html) | B | 2026-09-24 | Linh mục Nguyễn Công Chính là chánh xứ Giáo xứ Hòn Chông (xã Kiên Lương, An Giang) vào dịp Phục sinh 2026 | — |
| S12 | Loạt nhà thờ cổ trở thành chứng tích chiến tranh ở Việt Nam - Kiến Thức (21/12/2023) | [liên kết](https://kienthuc.net.vn/loat-nha-tho-co-tro-thanh-chung-tich-chien-tranh-o-viet-nam-post958314.html) | C | 2026-09-24 | Nhà thờ giáo xứ Hòn Chông xây 1936–1940 bằng đá nên gọi là nhà thờ đá Hòn Chông; theo kết quả tìm kiếm, bài viết rằng năm 1978 nhà thờ bị Pol Pot phá hủy, hàng chục giáo dân thiệt mạng, còn tháp chuông tương đối nguyên vẹn (kiểm chứng vòng 1 đã đọc được nguyên văn đoạn này) | — |
| S13 | Chùm ảnh: Nhà thờ đá Hòn Chông - một chứng tích về tội ác Khmer Đỏ - Redsvn.net (theo Kiến Thức, 10/01/2019) | [liên kết](https://redsvn.net/chum-anh-nha-tho-da-hon-chong-mot-chung-tich-ve-toi-ac-khmer-do/) | C | 2026-09-24 | Chép lại bài Kiến Thức: nhà thờ xây 1936–1940 theo kiểu Pháp; "Năm 1978, nhà thờ đã bị quân Khmer Đỏ phá hủy sau khi tràn qua biên giới Việt Nam"; 19 ảnh phế tích (không có ảnh tượng Đức Mẹ). Cùng một chuỗi nội dung với S12, không tính là nguồn độc lập. | — |
| S14 | Flickr - "2015 06 11_104 Nhà Thờ Hon Chong. Kiên Giang. VietNam" (phong boca) | [liên kết](https://www.flickr.com/photos/131585815@N04/18694918341/) | C | 2026-09-24 | Ảnh tháp chuông nhà thờ đá Hòn Chông, chụp 06/06/2015, bản gốc 4000x6000; giấy phép: All rights reserved | — |
| S15 | Flickr - "Nhà thờ Hòn Chông" (nguyenhuulongtri, NHLT.Ftb), toàn cảnh phế tích 2010 | [liên kết](https://www.flickr.com/photos/84012769@N00/4972512149/) | C | 2026-09-24 | Ảnh toàn cảnh phế tích nhà thờ đá và tháp chuông, chụp 21/08/2010; phía xa có khối đài Đức Mẹ màu trắng; giấy phép: All rights reserved | — |
| S16 | Flickr - "Nhà thờ Hòn Chông - góc chụp từ tháp chuông" (nguyenhuulongtri, NHLT.Ftb) | [liên kết](https://www.flickr.com/photos/84012769@N00/5003352243/) | C | 2026-09-24 | Ảnh lòng phế tích nhà thờ đá nhìn từ tháp chuông, chụp 21/08/2010; giấy phép: All rights reserved. Cùng người chụp còn các ảnh 5003973386, 5003979870, 5079796413, 5080442820, 4918652967, 4918638243 (album cùng ngày, có tựa "Nhà thờ đổ - Hòn Chông - Hà Tiên") | — |
| S17 | Flickr - "Church Hon Chong - VietNam" (Hieu nghia TRAN) | [liên kết](https://www.flickr.com/photos/hieunghiafoto/50631507547/) | C | 2026-09-24 | Ảnh mặt tiền nhà thờ đá Hòn Chông đã xây lại, chụp 05/11/2020, bản gốc 6250x4088; có trẻ em đứng trên bậc cấp; giấy phép: All rights reserved | — |
| S18 | Flickr - "Ruins of Hon Chong church" (Anh Hoa Cao, 2004) | [liên kết](https://www.flickr.com/photos/caoanhhoa/2502578440/) | D | 2026-09-24 | Chú thích của người chụp: "The church has been bombed during the war and has been kept with as-is status" (ảnh 512x384, chụp 28/03/2004) | — |
| S19 | YouTube - "Đức Mẹ Hòn Chông – Phép Lạ Cứu Ngư Dân Phú Quốc" (kênh TIẾNG GỌI ĐỨC TIN) | [liên kết](https://www.youtube.com/watch?v=E4YPowcAbTA) | D | 2026-09-24 | Chỉ đọc được tựa đề và tên kênh qua oEmbed; YouTube chặn truy cập trang nên chưa xem được mô tả hay nội dung video. BỊ LOẠI sau kiểm chứng vòng 1 (thumbnail nghi AI, không xem được nội dung): không làm nguồn cho bất kỳ trường nào; chỉ còn nhắc trong leads[]. | — |
| S20 | OpenTopoData - SRTM 30m tại 10.1582, 104.6113 | [liên kết](https://api.opentopodata.org/v1/srtm30m?locations=10.1582,104.6113) | C | 2026-09-24 | Độ cao mô hình SRTM 30m tại toạ độ nhà thờ: 11 m | — |


Đưa vào trường `sources` của dữ liệu: [S1], [S2], [S3], [S4], [S7], [S10] (6 nguồn).

Cấp nguồn:

- **A** — nguồn gốc (văn khố, kỷ yếu, bia ký)
- **B** — thứ cấp đáng tin (trang giáo phận, báo có toà soạn, sách có NXB)
- **C** — tư liệu mở (blog hành hương, trang du lịch, báo mạng tổng hợp, diễn đàn) — trích dẫn được, phải gắn nhãn
- **D** — manh mối thô (mạng xã hội, video, bình luận, lời kể chép lại) — chỉ để lần ra nguồn khác

## 4. Hình ảnh

Đề xuất 4 ảnh: 1 ảnh chính, 3 ảnh phụ.

### honchong-ungvien-dai-me-2012-800px.jpg — Ảnh chính (→ `realImage`)

| Mục | Nội dung |
|---|---|
| Trang mô tả file gốc | [https://melavang.info/hanh-huong-duc-me-hon-chong/](https://melavang.info/hanh-huong-duc-me-hon-chong/) |
| Tác giả | Không rõ tác giả (ảnh đi kèm bài tin của trang Giáo phận Long Xuyên cũ gplongxuyen.net; melavang.info đăng lại 11/11/2013, người đăng "admin") |
| Giấy phép (nếu biết, không bắt buộc) | — |
| Năm chụp | 2012 |
| Nội dung ảnh | Tượng Đức Mẹ Nữ Vương Hòa Bình Hòn Chông (áo trắng, choàng xanh nhạt, hào quang trên đầu, tay chắp) đứng trên trụ bệ vuông ốp đá có ô hình thoi, sau lưng là khối tường tam giác, phía trước là vòng cung chữ "Nữ Vương ban sự bình an cầu cho chúng con"; dưới chân là bàn thờ ngoài trời và đoàn linh mục đồng tế mặc lễ phục vàng, thánh lễ hành hương 01/01/2012. 800x600, không EXIF; trùng từng byte với https://melavang.info/wp-content/uploads/2013/11/leducme3resizean4.jpg (bản lớn nhất trên trang; tên tệp có chữ "resize" nên bản gốc có thể lớn hơn nhưng chưa tìm thấy). Ảnh chụp thật, không ghép chữ, không dấu hiệu AI. |
| `realImageCaption` đề xuất | Tượng Đức Mẹ Nữ Vương Hòa Bình Hòn Chông trong thánh lễ hành hương ngày 01/01/2012, Giáo xứ Hòn Chông, Giáo phận Long Xuyên (Nguồn: Giáo phận Long Xuyên – gplongxuyen.net, đăng lại trên Kỷ yếu Mẹ La Vang, melavang.info/hanh-huong-duc-me-hon-chong; không rõ tác giả) |
| Cam kết | Ảnh chụp thực địa, không do AI tạo sinh |


### honchong-thap-chuong-2015.jpg — Ảnh phụ (→ `galleryImages[]`)

| Mục | Nội dung |
|---|---|
| Trang mô tả file gốc | [https://www.flickr.com/photos/131585815@N04/18694918341/](https://www.flickr.com/photos/131585815@N04/18694918341/) |
| Tác giả | phong boca (Flickr: phongtruongan) |
| Giấy phép (nếu biết, không bắt buộc) | All rights reserved (Flickr) |
| Năm chụp | 2015 |
| Nội dung ảnh | Tháp chuông vuông bằng đá của nhà thờ Hòn Chông với đồng hồ và thánh giá trên đỉnh, bậc cấp đá phía trước, cây phượng nở hoa bên trái; bản tải về 1365x2048 (bản gốc trên Flickr 4000x6000) |
| `galleryImages[].caption` đề xuất | Tháp chuông nhà thờ đá Hòn Chông, khuôn viên Tượng Đài Đức Mẹ Nữ Vương Hòa Bình, xã Kiên Lương, An Giang, chụp 06/06/2015 (Nguồn: Flickr, phong boca – phongtruongan, flickr.com/photos/131585815@N04/18694918341; bảo lưu mọi quyền) |
| Cam kết | Ảnh chụp thực địa, không do AI tạo sinh |


### honchong-phe-tich-toan-canh-2010.jpg — Ảnh phụ (→ `galleryImages[]`)

| Mục | Nội dung |
|---|---|
| Trang mô tả file gốc | [https://www.flickr.com/photos/84012769@N00/4972512149/](https://www.flickr.com/photos/84012769@N00/4972512149/) |
| Tác giả | nguyenhuulongtri (NHLT.Ftb, Flickr) |
| Giấy phép (nếu biết, không bắt buộc) | All rights reserved (Flickr) |
| Năm chụp | 2010 |
| Nội dung ảnh | Toàn cảnh phế tích nhà thờ đá Hòn Chông: tường đá không mái bên trái, tháp chuông bên phải; giữa khung hình phía xa có một khối màu trắng (lượt khảo cứu trước cho là đài Đức Mẹ, kiểm chứng vòng 1 chưa xác nhận được nên caption không nhắc); ảnh xử lý HDR của người chụp (không phải AI); 1024x610 |
| `galleryImages[].caption` đề xuất | Phế tích nhà thờ đá Hòn Chông và tháp chuông năm 2010 (Nguồn: Flickr, nguyenhuulongtri – NHLT.Ftb, chụp 21/08/2010; bảo lưu mọi quyền) |
| Cam kết | Ảnh chụp thực địa, không do AI tạo sinh |


### honchong-phe-tich-tu-thap-chuong-2010.jpg — Ảnh phụ (→ `galleryImages[]`)

| Mục | Nội dung |
|---|---|
| Trang mô tả file gốc | [https://www.flickr.com/photos/84012769@N00/5003352243/](https://www.flickr.com/photos/84012769@N00/5003352243/) |
| Tác giả | nguyenhuulongtri (NHLT.Ftb, Flickr) |
| Giấy phép (nếu biết, không bắt buộc) | All rights reserved (Flickr) |
| Năm chụp | 2010 |
| Nội dung ảnh | Lòng phế tích nhà thờ đá nhìn từ tháp chuông: hai dãy tường đá có ô cửa vòm, bồn hoa giữa lối đi, hang đá phủ dây leo ở cuối; ảnh xử lý HDR; 1024x691 |
| `galleryImages[].caption` đề xuất | Lòng phế tích nhà thờ đá Hòn Chông nhìn từ tháp chuông, năm 2010 (Nguồn: Flickr, nguyenhuulongtri – NHLT.Ftb, chụp 21/08/2010; bảo lưu mọi quyền) |
| Cam kết | Ảnh chụp thực địa, không do AI tạo sinh |



### Kho ảnh ứng viên

Ảnh nhặt được trong lúc đọc tư liệu, chưa qua lọc. Gom rộng trước, lọc sau — mục này để người kiểm chứng và lượt khảo cứu sau không phải đi tìm lại từ đầu.

| Trang chứa ảnh | Ảnh chụp gì | Trạng thái | Lý do chọn / loại |
|---|---|---|---|
| [Giáo phận Long Xuyên](https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-2026.html) | Ảnh giới thiệu 1920x1080 (tải về: anh/honchong-ungvien-banner-giaophan-2026.jpg): ảnh tượng Đức Mẹ dưới vòng cung chữ ghép với ảnh nhà thờ và chữ lớn | đã loại | Ảnh ghép đồ hoạ có chữ đè; phần ảnh tượng chỉ khoảng 700px, không đạt 1000px. Giữ làm tư liệu hiện trạng 2026. |
| [Giáo phận Long Xuyên](https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-nam-2025.html) | Ảnh giới thiệu 1920x1080 (tải về: anh/honchong-ungvien-banner-giaophan-2025.jpg): mặt tiền nhà thờ đá xây lại + ảnh nhỏ đài Đức Mẹ | đã loại | Ảnh ghép có chữ và logo đè lên; dùng làm bằng chứng hiện trạng nhà thờ mới, không dùng làm ảnh trang |
| [Mẹ La Vang (dẫn gplongxuyen.net)](https://melavang.info/hanh-huong-duc-me-hon-chong/) | Ảnh đài Đức Mẹ Hòn Chông với đoàn đồng tế ngày 01/01/2012, 800x600 (tải về: anh/honchong-ungvien-dai-me-2012-800px.jpg; trùng từng byte với wp-content/uploads/2013/11/leducme3resizean4.jpg). Các cỡ trên trang: 300x225, 696x522, 768x576, 800x600 — 800x600 là lớn nhất; -scaled và bản không hậu tố khác đều 404. | đã chọn | CHỌN làm ảnh chính (vòng bổ sung 2026-09-24): đúng pho tượng Hòn Chông, ảnh chụp thật, không chữ đè, không dấu hiệu AI; bài ghi "Nguồn: gplongxuyen.net", đăng lại 11/11/2013. Đạt 800px theo ngưỡng nới tạm thời của người dùng cho riêng honchong. Chưa tìm được bản lớn hơn: gplongxuyen.net đã chết, web.archive.org không vào được từ phiên này. |
| [Mẹ La Vang](https://melavang.info/hanh-huong-kinh-duc-me-tai-hon-chong/) | Ảnh honchong_03 (đoàn đồng tế viếng tượng 01/01/2013), 300x225 | đã loại | Đã bị loại ở lượt kiểm chứng 2026-09-12 vì 300x225px |
| [Flickr (phong boca)](https://www.flickr.com/photos/131585815@N04/18694918341/) | Tháp chuông nhà thờ đá 2015, gốc 4000x6000 | đã chọn | Đúng khuôn viên linh địa, độ phân giải cao, không người, không dấu hiệu AI. Vòng bổ sung: chuyển từ ảnh chính xuống ảnh phụ vì đã có ảnh tượng Đức Mẹ (800px) làm ảnh chính theo quyết định của người dùng. |
| [Flickr (nguyenhuulongtri)](https://www.flickr.com/photos/84012769@N00/4972512149/) | Toàn cảnh phế tích + tháp chuông 2010, thấy đài Đức Mẹ ở xa | đã chọn | Ghi lại hiện trạng phế tích trước khi xây lại; đạt 1024px. Caption đã bỏ cụm "phía xa là đài Đức Mẹ" theo kiểm chứng vòng 1. |
| [Flickr (nguyenhuulongtri)](https://www.flickr.com/photos/84012769@N00/5003352243/) | Lòng phế tích nhìn từ tháp chuông 2010 | đã chọn | Rõ cấu trúc phế tích; đạt 1024px |
| [Flickr (nguyenhuulongtri)](https://www.flickr.com/photos/84012769@N00/5003973386/) | Phế tích ban đêm 2010, khối đài Đức Mẹ trắng thấy ở giữa (tải về: anh/honchong-phe-tich-dem-2010.jpg), 1024x691 | đang cân nhắc | Đạt kích thước, đúng chủ thể; để dự phòng vì ảnh đêm xử lý màu mạnh |
| [Flickr (nguyenhuulongtri)](https://www.flickr.com/photos/84012769@N00/5003979870/) | Lối đi giữa phế tích ban đêm hướng về tháp chuông, 1024x691 | đang cân nhắc | — |
| [Flickr (nguyenhuulongtri)](https://www.flickr.com/photos/84012769@N00/5079796413/) | Tháp chuông ban đêm, bên phải thấy vòng cung đài Đức Mẹ mờ, 680x1024 | đang cân nhắc | Chiều rộng 680px — chỉ dùng được nếu nới ngưỡng |
| [Flickr (nguyenhuulongtri)](https://www.flickr.com/photos/84012769@N00/5080442820/) | Tháp chuông ban đêm có trăng, 691x1024 | đang cân nhắc | — |
| [Flickr (nguyenhuulongtri)](https://www.flickr.com/photos/84012769@N00/4918652967/) | "Nhà thờ đổ - Hòn Chông - Hà Tiên", 1024x986: đã xem ở vòng bổ sung — phế tích và tháp chuông ban đêm, cành cây khô phía trên, một tượng đá nhỏ trên bệ ở tiền cảnh; không thấy tượng Đức Mẹ | đang cân nhắc | Đúng địa điểm nhưng không chụp tượng Đức Mẹ; ảnh đêm xử lý màu mạnh. Để dự phòng. |
| [Flickr (Hieu nghia TRAN)](https://www.flickr.com/photos/hieunghiafoto/50631507547/) | Mặt tiền nhà thờ đá đã xây lại, 05/11/2020, gốc 6250x4088 | đang cân nhắc | Ảnh hiện trạng tốt nhất, nhưng có 6 trẻ em nhận diện được mặt đứng tạo dáng — để người duyệt quyết (tôn trọng chủ thể là trẻ vị thành niên) |
| [Flickr (Anh Hoa Cao)](https://www.flickr.com/photos/caoanhhoa/2502578440/) | Phế tích nhà thờ 2004, 512x384, chú thích "bombed during the war" | đã loại | Quá nhỏ; giữ làm nguồn cho folklore |
| [Redsvn.net (theo Kiến Thức)](https://redsvn.net/chum-anh-nha-tho-da-hon-chong-mot-chung-tich-ve-toi-ac-khmer-do/) | 19 ảnh phế tích nhà thờ đá (tháp chuông, chuông rỉ, cửa sổ vòm, dấu thập tự bị đục), không có ảnh tượng Đức Mẹ | đang cân nhắc | Chưa kiểm kích thước và tác giả gốc; nội dung bài lệch với lược sử giáo xứ |
| [Kiến Thức](https://kienthuc.net.vn/loat-nha-tho-co-tro-thanh-chung-tich-chien-tranh-o-viet-nam-post958314.html) | Ảnh minh hoạ nhà thờ đá Hòn Chông (định dạng .avif) | đang cân nhắc | Chưa tải về kiểm |
| [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:H%C3%B2n_Ch%C3%B4ng_(50572156981).jpg) | Ảnh hoàng hôn biển Hòn Chông | đã loại | Không chụp tượng hay nhà thờ — sai chủ thể |
| [Flickr (Nguyen105)](https://www.flickr.com/photos/82493894@N06/13466355394/) | "Hon Chong, Kien Luong" — bờ đá và các hòn đảo | đã loại | Phong cảnh biển, sai chủ thể |
| [Giáo xứ Chúa Thương Xót (trang kpe.parish.chuathuongxot.org, bài "Đức Mẹ Hòn Chông", chép lại tin 01/01/2013)](http://kpe.parish.chuathuongxot.org/DucMe/DucMeHonChong.htm) | 2 ảnh: image001.jpg 300x225 (EXIF Sony DSC-W350, 03/01/2013 — cùng ảnh honchong_03 của melavang) và image002.jpg 372x279 | đã loại | Quá nhỏ (dưới 800px kể cả theo ngưỡng nới); HTTPS của trang lỗi chứng chỉ, chỉ mở được qua HTTP |


## 5. Chuyện kể & giai thoại

Phần này là tư liệu truyền tụng, **không phải sự thật lịch sử đã kiểm chứng**. Nội dung được chọn sẽ viết vào `oralTradition` kèm nhãn "tương truyền" / "theo lời kể", không bao giờ đưa vào `historicalFact`.

| Chuyện kể | Độ xác thực | Lưu hành ở đâu | Nguồn |
|---|---|---|---|
| Nhà thờ đá bị Khmer Đỏ phá năm 1978 | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | Báo mạng và các trang chép lại; lan rộng trong bài du lịch "nhà thờ đá Hòn Chông" | [S12] [S13] |
| Nhà thờ bị bom đạn chiến tranh phá, giữ nguyên hiện trạng | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | Chú thích ảnh Flickr | [S18] |
| Cái tên dân gian "nhà thờ đổ" | có nguồn A/B đối chiếu phần nền | Tựa ảnh Flickr 2010, bài du lịch | [S15] [S16] [S2] |


### Nhà thờ đá bị Khmer Đỏ phá năm 1978

> Bài của báo Kiến Thức (được Redsvn chép lại năm 2019, và nhắc lại trong bài năm 2023) viết rằng năm 1978, nhà thờ đá Hòn Chông bị quân Khmer Đỏ phá hủy sau khi tràn qua biên giới, hàng chục giáo dân thiệt mạng, từ đó nhà thờ chỉ còn phế tích, tháp chuông là phần còn nguyên vẹn nhất.

**Mô-típ:** Mốc thời chiến · **Độ xác thực:** chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng · **Lưu hành:** Báo mạng và các trang chép lại; lan rộng trong bài du lịch "nhà thờ đá Hòn Chông" · **Nguồn:** [S12] [S13]

_Ghi chú:_ Mâu thuẫn một phần với lược sử giáo xứ (S2): lược sử ghi giáo xứ bỏ hoang từ khoảng 1964–1965, giáo dân tản cư ra hải đảo, không nhắc năm 1978. Không nguồn A/B nào xác nhận hay bác bỏ. Chỉ viết vào oralTradition với nhãn "một số bài báo mạng viết rằng". Chủ đề chiến tranh biên giới — viết trung tính, không thêm số liệu.

### Nhà thờ bị bom đạn chiến tranh phá, giữ nguyên hiện trạng

> Người chụp ảnh phế tích năm 2004 (Flickr, Anh Hoa Cao) ghi chú: nhà thờ đã bị bom đạn trong chiến tranh và được giữ nguyên hiện trạng.

**Mô-típ:** Mốc thời chiến · **Độ xác thực:** chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng · **Lưu hành:** Chú thích ảnh Flickr · **Nguồn:** [S18]

_Ghi chú:_ Có thể là lời nghe kể tại chỗ; không rõ cuộc chiến nào. Phù hợp với S2 ở chỗ "chiến sự ác liệt" 1964–1965, nhưng S2 không nói nhà thờ bị bom.

### Cái tên dân gian "nhà thờ đổ"

> Trước khi nhà thờ được xây lại, người chụp ảnh và khách qua đường gọi nơi này là "nhà thờ đổ – Hòn Chông – Hà Tiên" hay "nhà thờ đá Hòn Chông"; tường đá không mái, tháp chuông và đài Đức Mẹ trắng phía sau là cảnh quen thuộc trên đường đi Chùa Hang, Hòn Phụ Tử.

**Mô-típ:** Tên gọi dân gian · **Độ xác thực:** có nguồn A/B đối chiếu phần nền · **Lưu hành:** Tựa ảnh Flickr 2010, bài du lịch · **Nguồn:** [S15] [S16] [S2]

_Ghi chú:_ Phần nền (nhà thờ đổ nát, đài Đức Mẹ còn) có trong S2; cái tên "nhà thờ đổ" chỉ thấy trong tựa ảnh Flickr.

## 6. Mâu thuẫn nguồn & điểm chưa chắc chắn

| Vấn đề | Nguồn nói A | Nguồn nói B | Xử lý đề xuất |
|---|---|---|---|
| Danh tính "ông Ngô" hiện diện lễ đặt tượng 08/12/1959 | Tổng thống Ngô Đình Diệm hiện diện (bản ghi hiện tại trên website) [src/data/statues.js (lượt 2026-09-12, suy từ S2)] | Nguyên văn nguồn: "do Đức Cha Phaolô Bình và ông Ngô hiện diện" — không ghi tên, không ghi chức vụ [S2] | Viết đúng nguyên văn "ông Ngô" trong historicalFact. Việc đồng nhất với TT Ngô Đình Diệm là suy luận hợp lý nhưng chưa có nguồn thứ hai (tìm "Ngô Đình Diệm" "Hòn Chông" 1959 không ra) — ghi vào unknowns. |
| Nguyên nhân và thời điểm nhà thờ đá bị tàn phá | Giáo xứ bỏ hoang từ khoảng 1964–1965 vì chiến sự; sau 1975 nhà thờ đổ nát (không nói ai phá, khi nào) [S2] | Nhà thờ bị quân Khmer Đỏ phá hủy năm 1978, hàng chục giáo dân thiệt mạng [S12, S13 (cùng một chuỗi nội dung báo Kiến Thức)] | Không có nguồn A/B nào nói năm 1978; S2 (cấp B) im lặng chứ không bác bỏ. historicalFact chỉ ghi điều S2 nói; thuyết 1978 và lời kể "bị bom" (S18) đưa vào oralTradition kèm nhãn. Không phải mâu thuẫn giữa hai nguồn A/B nên không dừng lại. |
| Nhiệm kỳ Lm Antôn Lương Công Đại và năm bỏ hoang | 1962–1965; "1965: Giáo xứ bị bỏ hoang từ đây" [S2 (phần niên biểu)] | Lm Lương Công Đại (1962–1964), rồi rút về Kiên Lương [S2 (phần tiểu sử)] | Viết "khoảng 1964–1965". |
| Nhiệm kỳ Lm Nguyễn Văn Tống | 1956 được cử về; 1956–1958 [S2 (niên biểu)] | 1955–1958 [S2 (tiểu sử)] | Không đưa vào historicalFact. |
| Nơi Lm Võ Thành Trinh qua đời (21/08/1991) | Bệnh viện Thống Nhất [S2] | Bệnh viện Chợ Rẫy [S9] | Không cần cho linh địa; không ghi nơi mất. |
| Tên đơn vị hành chính | Xã Bình An, huyện Kiên Lương, tỉnh Kiên Giang [src/data/statues.js, S2] | Xã Kiên Lương, tỉnh An Giang (từ 01/7/2025) [S10, S11, S5] | Ghi tên mới, kèm tên cũ trong ngoặc. |


**Manh mối chưa lần hết — để lượt khảo cứu sau nối tiếp:**

- [BỊ LOẠI khỏi bản ghi sau kiểm chứng vòng 1] Chuyện "Đức Mẹ Hòn Chông cứu ngư dân Phú Quốc" và ý "Đức Mẹ che chở người đi biển": nguồn duy nhất là tựa video YouTube "Đức Mẹ Hòn Chông – Phép Lạ Cứu Ngư Dân Phú Quốc" (kênh TIẾNG GỌI ĐỨC TIN, S19). Chỉ giữ ở đây làm ghi chú, không đưa vào bất kỳ trường nào của bản ghi. — ở: https://www.youtube.com/watch?v=E4YPowcAbTA (Bị loại vì: ảnh thu nhỏ của video mang dấu hiệu AI, không xem được nội dung video (YouTube chặn), không có người kể hay nguồn thứ hai. Chỉ xét lại nếu lượt sau xem được video, xác nhận không dùng hình/giọng AI và tìm được lời kể độc lập (giáo xứ, ngư dân, báo).)
- Video "Xây dựng Đài Đức Mẹ Hòn Chông" (kênh Dung Pham) — có thể cho biết năm làm lại đài Mẹ và khung vòm kính thấy trong ảnh 2026 — ở: https://www.youtube.com/watch?v=vvwp29Favhw (Mốc tu sửa đài Mẹ chưa có nguồn)
- Bản lưu trang giáo xứ Hòn Chông trên giaoxugiaohovietnam.com (có ảnh HonChong-01012009-14.jpg 600x450 và ảnh 458x343) — ở: http://web.archive.org/web/20230927215147/https://giaoxugiaohovietnam.com/LongXuyen/01-Giao-Phan-LongXuyen-HonChong.htm (Có thể có thêm ảnh tượng 2009 và lược sử bản gốc; web.archive.org không vào được từ phiên này)
- Bản gốc lược sử trên trang Giáo phận Long Xuyên cũ (gplongxuyen.net / gplongxuyen.org) — ở: Hai tên miền đều không kết nối được (502) trong phiên này; Wayback availability API không có bản lưu cho gplongxuyen.org (Nâng S2 từ bản chép lại lên bản gốc)
- Trang Facebook "Giáo Xứ Hòn Chông" và bài "Nhà thờ đá Giáo xứ Hòn Chông - Giáo hạt Hà Tiên" của Thánh Đường Việt Nam — ở: https://www.facebook.com/GiaoXuHonChong/ ; https://www.facebook.com/thanhduongvietnam/posts/3620536914838108/ (Có thể có ảnh tượng độ phân giải cao, ngày khánh thành nhà thờ mới; cần xin phép người đăng)
- Liên hệ người chụp Flickr hieunghiafoto (ảnh 2020) hoặc tìm thêm ảnh cùng buổi chụp có đài Đức Mẹ — ở: https://www.flickr.com/photos/hieunghiafoto/ (Bản gốc 6250px, có thể có ảnh tượng không có người)
- Ngày làm phép/khánh thành nhà thờ đá mới (sau 01/01/2013, trước 11/2020) — ở: Tìm tiếp trên hdgmvietnam.com, tgpsaigon.net, vietcatholic theo từ khoá "Hòn Chông" 2016–2020 (Mốc quan trọng cho historicalFact)

**Chưa tìm được nguồn, đã cố ý để ngoài đề xuất:**

- Chưa tìm được ảnh nào chụp rõ pho tượng Đức Mẹ Nữ Vương Hòa Bình Hòn Chông đạt chiều rộng ≥1000px. Ảnh chính đề xuất là ảnh 800x600 năm 2012 (S4), chỉ dùng được nhờ ngoại lệ 800px tạm thời của người dùng. Chưa lần được tác giả ảnh, bài gốc trên gplongxuyen.net và bản ảnh lớn hơn (tên tệp "leducme3resizean4" cho thấy đã bị thu nhỏ) vì trang giáo phận cũ đã chết và web.archive.org không vào được từ phiên này.
- Danh tính "ông Ngô" trong lễ đặt tượng 08/12/1959 (nhiều khả năng là TT Ngô Đình Diệm nhưng chưa có nguồn thứ hai).
- Ai chủ sự nghi thức làm phép tượng năm 1959 — S2 chỉ ghi "hiện diện", không ghi "chủ sự"; cũng không nguồn nào nối biến cố với việc bế mạc Năm Thánh Mẫu.
- Chất liệu, chiều cao, người tạc và nơi đặt làm pho tượng 1959; pho tượng hiện nay có còn là tượng gốc 1959 hay đã thay/tu sửa.
- Thời điểm và nội dung các đợt tu sửa đài Đức Mẹ (khối tường tam giác năm 2012 không còn thấy trong ảnh 2026; ảnh 2026 cho thấy tượng đặt trong một khung vòm).
- Năm hoàn thành và làm phép ngôi nhà thờ đá xây lại (viên đá đầu tiên 01/01/2013; ảnh 11/2020 đã thấy nhà thờ hoàn chỉnh), và tháp chuông cũ có được giữ lại không.
- Nguyên nhân cụ thể khiến nhà thờ đá đổ nát (bom đạn 1964–1975 hay cuộc tấn công 1978) — chưa có nguồn A/B.
- Toạ độ riêng của bệ tượng (hiện dùng điểm OSM của nhà thờ, cùng khuôn viên).
- Chuyện kể của người địa phương/ngư dân về Đức Mẹ Hòn Chông — chưa có lời kể trực tiếp nào; tựa video YouTube S19 đã bị loại sau kiểm chứng vòng 1.

## 7. Tự đánh giá

| Trục | Đánh giá |
|---|---|
| Độ tin cậy tổng thể | trung bình |
| Rủi ro lớn nhất | Ảnh: ảnh chính là ảnh tượng 800x600 (2012) — dưới chuẩn 1000px của dự án, chỉ đạt nhờ quyết định nới ngưỡng xuống 800px của người dùng, là ngoại lệ tạm thời riêng cho honchong; tác giả ảnh không được ghi (chỉ biết nguồn gplongxuyen.net qua bản đăng lại trên melavang.info), chưa tìm được bài gốc hay bản lớn hơn vì web.archive.org không vào được. Ảnh có đoàn linh mục đồng tế đứng trước tượng (nhân vật công khai trong nghi lễ, không phải trẻ em). Ba ảnh phụ là ảnh Flickr "All rights reserved" — hợp quy chuẩn dự án (không đòi CC). Nội dung: đã áp dụng các điều kiện câu chữ của kiểm chứng vòng 1 (historicalFact 3 chỗ, oralTradition bỏ câu S19); chuyện Khmer Đỏ 1978 vẫn chỉ ở oralTradition với nhãn, viết trung tính. S2 là bản chép lại trên trang cá nhân violet.vn của lược sử giáo phận. Điều kiện 6–7 của vòng 1 (tháp chuông làm realImage) đã được thay theo quyết định ảnh mới của người dùng nên người kiểm chứng cần duyệt lại phần ảnh. |
| Đề nghị người kiểm chứng soi kỹ | (1) Kiểm lại ảnh chính mới honchong-ungvien-dai-me-2012-800px.jpg: trang S4 còn sống, ảnh trùng file trên trang, đúng tượng Hòn Chông, không AI; áp ngưỡng 800px theo ngoại lệ tạm thời của người dùng; (2) caption ảnh chính ghi nguồn gplongxuyen.net + melavang.info, không rõ tác giả — đủ chưa; (3) thứ tự galleryImages mới (tháp chuông 2015, toàn cảnh 2010 đã bỏ cụm đài Đức Mẹ, lòng phế tích 2010); (4) xác nhận 3 chỗ sửa historicalFact và 2 chỗ sửa oralTradition khớp nguyên văn điều kiện; (5) S19 đã rút khỏi mọi trường đề xuất (chỉ còn ở leads/sources làm ghi chú bị loại). |
| Tổng văn xuôi sau đề xuất | 1280 từ |


## 8. Bản ghi dữ liệu đề xuất

```json
{
  "id": "honchong",
  "name": "Đức Mẹ Hòn Chông (Kiên Giang)",
  "title": "Tượng Đài Đức Mẹ Nữ Vương Hòa Bình - Giáo xứ Hòn Chông",
  "year": 1959,
  "lat": 10.1582,
  "lng": 104.6113,
  "elevation": "Khoảng 10m (chân núi, sát biển Hà Tiên – Kiên Lương)",
  "location": "Ấp Hòn Chông, xã Kiên Lương, tỉnh An Giang (trước 01/7/2025: xã Bình An, huyện Kiên Lương, tỉnh Kiên Giang), ven Đường tỉnh 971, vùng biển Hà Tiên – Kiên Lương",
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
  "historicalFact": "Theo lược sử giáo xứ do linh mục chánh sở Vinhsơn Nguyễn Minh Chu biên soạn (đăng trên trang Giáo phận Long Xuyên), cộng đoàn Công giáo Hòn Chông khởi đầu từ năm 1931 với linh mục Jean-Marie Merdrignac thuộc Hội Thừa sai Paris (MEP), cha sở họ đạo Đất Hứa. Lược sử dẫn một tài liệu của Hội Thừa sai cho biết năm 1931 có khoảng 3.000 giáo dân nghèo gốc Nam Định, Ninh Bình, Thái Bình vốn làm phu đồn điền cao su và tiêu ở Phú Quốc bị bỏ rơi sau cuộc khủng hoảng kinh tế 1929; cha Merdrignac đưa họ về lập họ đạo Đất Hứa, rồi năm 1932 đến vùng Hòn Chông, Rẫy Mới, Rạch Đùng, tiếp nhận đất của một đồn điền tiêu do chủ người Pháp phá sản để lại. Nhà thờ đá Hòn Chông khởi công năm 1936, khánh thành năm 1940 và trở thành trung tâm sinh hoạt Công giáo của cả vùng Hà Tiên. Từ năm 1946 đến 1953, linh mục Phêrô Võ Thành Trinh, vừa thụ phong tại Cần Thơ, coi sóc vùng truyền giáo này. Trong thời linh mục Augustinô Phan Xuân Trọng làm chánh xứ (1958–1962), ngày 08/12/1959 diễn ra biến cố đặt Tượng Đài Đức Mẹ Nữ Vương Hòa Bình; lược sử ghi biến cố có sự hiện diện của Đức Cha Phaolô Nguyễn Văn Bình, khi ấy là Giám mục Đại diện Tông tòa Cần Thơ, và \"ông Ngô\". Giáo phận Long Xuyên được thành lập ngày 24/11/1960. Khoảng năm 1964–1965, chiến sự trong vùng trở nên ác liệt, linh mục Antôn Lương Công Đại rút về coi họ đạo Kiên Lương, giáo dân tản cư ra các hải đảo và nhà thờ Hòn Chông bị bỏ hoang; sau năm 1975, dấu tích còn lại là ngôi nhà thờ đá đổ nát và đài Đức Mẹ đứng giữa lùm cây hoang vắng. Đầu năm 1991, linh mục Võ Thành Trinh trở lại Hòn Chông và đề nghị phục hồi họ đạo. Ngày 19/04/1991, UBND tỉnh Kiên Giang ký quyết định số 29/TB-UB chấp thuận phục hồi Giáo xứ Hòn Chông; ngày 25/10/1991, Ban Tôn giáo tỉnh chấp thuận để linh mục Vinhsơn Nguyễn Minh Chu phụ trách; ngày 01/12/1991, giáo dân các xứ Hà Tiên, Kiên Lương, Hòa Giang, Đất Hứa, Rạch Đùng cùng giáo dân Hòn Chông phát quang khu nhà thờ và Đài Đức Mẹ. Ngày 31/08/1993, họ đạo nhận chuyển nhượng lại khu đất vườn 4.150 m² có Đài Đức Mẹ. Giáo xứ lần lượt mở một điểm trường (1997), xe đưa đón học sinh (1998) và trường mầm non (2002) do các nữ tu Tu hội Nữ Tử Bác Ái Vinh Sơn phụ trách; các nữ tu có mặt tại giáo xứ từ tháng 10/2002. Ngày 01/01/2012, văn thư thành lập Giáo hạt Hà Tiên được công bố ngay trong cuộc hành hương tại Hòn Chông. Ngày 01/01/2013, trong cuộc hành hương có trên 5.000 người tham dự, Đức Giám mục làm phép diện tích và viên đá đầu tiên xây dựng lại nhà thờ. Hằng năm vào ngày 01/01, lễ Đức Maria Mẹ Thiên Chúa – Nữ Vương Hòa Bình, bổn mạng của Giáo phận Long Xuyên và của giáo xứ, giáo phận tổ chức thánh lễ hành hương tại nhà thờ Hòn Chông; các năm 2025 và 2026 do Đức Giám mục giáo phận chủ sự. Từ 01/7/2025, khu vực Hòn Chông thuộc xã Kiên Lương, tỉnh An Giang.",
  "oralTradition": "Theo những lời kể lưu truyền, số phận ngôi nhà thờ đá không được thuật lại thống nhất. Một du khách chụp phế tích năm 2004 ghi lại điều nghe được tại chỗ: nhà thờ đã bị bom đạn chiến tranh phá hủy và được giữ nguyên hiện trạng. Một số bài báo mạng (Kiến Thức 2019 và 2023, được nhiều trang chép lại) thì viết rằng nhà thờ bị quân Khmer Đỏ phá hủy năm 1978 khi tràn qua biên giới, khiến hàng chục giáo dân thiệt mạng. Lược sử của chính giáo xứ không nhắc chi tiết này, chỉ ghi giáo xứ bị bỏ hoang từ khoảng 1964–1965 và sau năm 1975 chỉ còn nhà thờ đổ nát cùng đài Đức Mẹ giữa lùm cây. Trong nhiều năm, người đi đường và khách chụp ảnh quen gọi nơi này là \"nhà thờ đá Hòn Chông\" hay \"nhà thờ đổ\": những bức tường đá không mái, tháp chuông vuông còn đứng và pho tượng Đức Mẹ trắng phía sau trở thành một điểm dừng chân trên cung đường Hà Tiên – Chùa Hang – Hòn Phụ Tử.",
  "architect": "Tượng Đức Mẹ Nữ Vương Hòa Bình Hòn Chông là tượng đứng ngoài trời theo dáng Đức Mẹ Lộ Đức: áo trắng, áo choàng xanh nhạt, hai tay chắp trước ngực, trên đầu có vầng hào quang (theo ảnh đại lễ 01/01/2012 trên Kỷ yếu Mẹ La Vang). Trong ảnh năm 2012, tượng đặt trên một trụ bệ vuông ốp đá có ô trang trí hình thoi, phía sau là một khối tường cao hình tam giác, phía trước là vòng cung mang hàng chữ \"Nữ Vương ban sự bình an cầu cho chúng con\". Các ảnh giới thiệu trên trang Giáo phận Long Xuyên năm 2025–2026 cho thấy vòng cung chữ này vẫn còn, sơn hai màu xanh – đỏ, với bậc cấp sơn đỏ dẫn lên bệ tượng. Chất liệu, chiều cao tượng và người tạc chưa tìm thấy trong tư liệu. Ngôi nhà thờ đá cũ (1936–1940) được xây bằng đá địa phương, kết bằng vôi, cát và mủ cây ô dước; xi măng và sắt thép vì hiếm nên chỉ dùng cho ô vòm, sàn hát, cầu thang và trét mạch chống thấm (theo lược sử giáo xứ). Ảnh chụp năm 2010 cho thấy thân nhà thờ chỉ còn những bức tường đá không mái với các ô cửa vòm, trong khi tháp chuông vuông vẫn đứng, có thánh giá trên đỉnh. Ảnh năm 2020 và ảnh giới thiệu của giáo phận năm 2025 cho thấy nhà thờ đá đã được xây dựng lại, với mặt tiền tháp chuông, bậc cấp đá và tảng đá khắc tên \"Giáo xứ Hòn Chông\"; năm hoàn thành ngôi nhà thờ mới và việc tháp chuông cũ có được giữ lại hay không chưa có nguồn xác nhận.",
  "significance": "Hòn Chông là nơi Giáo phận Long Xuyên mừng lễ bổn mạng giáo phận – lễ Đức Mẹ Nữ Vương Hòa Bình ngày đầu năm dương lịch – bằng một cuộc hành hương chung: hàng nghìn tín hữu (hơn 4.000 người năm 2012, trên 5.000 người năm 2013) từ khắp giáo phận về giáo xứ nhỏ ở cực tây nam này. Trong thư gửi đoàn hành hương năm 2012, Đức Giám mục xác định lễ Đức Mẹ Nữ Vương Hòa Bình đầu năm là lễ bổn mạng giáo phận và dâng cộng đoàn cho Đức Mẹ. Cuộc hành hương còn gắn với các mốc tổ chức của vùng Hà Tiên: công bố thành lập Giáo hạt Hà Tiên (2012) và giáo họ Sơn Hải – Hòn Heo (2013). Với lịch sử gần một thế kỷ – lập họ đạo cho những người phu đồn điền thất nghiệp, bị bỏ hoang hơn hai thập niên, rồi được phục hồi từ năm 1991 – Hòn Chông là chứng tích về sự bền bỉ của một cộng đoàn nhỏ. Lược sử giáo xứ nhấn mạnh công cuộc tái thiết gắn với giáo dục và quan hệ với cư dân ba sắc tộc Việt, Khmer, Hoa trong vùng, qua điểm trường, xe đưa đón học sinh và trường mầm non không phân biệt dân tộc hay tôn giáo.",
  "realImage": null,
  "realImageCaption": null,
  "galleryImages": [],
  "sources": [
    {
      "title": "Thánh lễ Hành hương Đức Mẹ Hòn Chông 2026 - Giáo phận Long Xuyên",
      "url": "https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-2026.html",
      "tier": "B"
    },
    {
      "title": "Lược sử Giáo xứ Hòn Chông (Lm Chánh sở Vinhsơn Nguyễn Minh Chu, nguồn: trang web Giáo phận Long Xuyên; bản chép lại trên violet.vn)",
      "url": "https://trancaolan76.violet.vn/entry/nha-tho-giao-xu-hon-chong-9524201.html",
      "tier": "B"
    },
    {
      "title": "Hành hương kính Đức Mẹ tại Hòn Chông (01/01/2013) - Mẹ La Vang (melavang.info)",
      "url": "https://melavang.info/hanh-huong-kinh-duc-me-tai-hon-chong/",
      "tier": "B"
    },
    {
      "title": "Hành hương Đức Mẹ Hòn Chông (01/01/2012) - Mẹ La Vang, dẫn nguồn gplongxuyen.net",
      "url": "https://melavang.info/hanh-huong-duc-me-hon-chong/",
      "tier": "B"
    },
    {
      "title": "Thánh Lễ hành hương Đức Mẹ Hòn Chông năm 2025 - Giáo phận Long Xuyên",
      "url": "https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-nam-2025.html",
      "tier": "B"
    },
    {
      "title": "Kiên Lương (xã) – Wikipedia tiếng Việt (đơn vị hành chính sau 01/7/2025)",
      "url": "https://vi.wikipedia.org/wiki/Ki%C3%AAn_L%C6%B0%C6%A1ng_(x%C3%A3)",
      "tier": "B"
    }
  ]
}
```

### Kết quả tự kiểm

```text
$ node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/honchong/khao-cuu.json --allow-existing-id
KIEM TRA: honchong (docs/khao-cuu/honchong/khao-cuu.json)

=> DAT toan bo rang buoc bat buoc. Sau khi chen vao src/data/statues.js, chay "npm test" de xac nhan lai.
```

---

_Báo cáo sinh tự động từ hồ sơ JSON bằng `format-report.mjs`. Sửa nội dung thì sửa file JSON rồi chạy lại lệnh, đừng sửa trực tiếp vào file markdown._
