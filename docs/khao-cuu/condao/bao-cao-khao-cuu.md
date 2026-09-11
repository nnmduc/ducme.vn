# Báo cáo khảo cứu: Đức Mẹ Côn Đảo

- **Mã linh địa**: `condao`
- **Loại**: linh địa mới
- **Người khảo cứu**: Claude Code (phien lam viec 2026-09-11)
- **Ngày hoàn thành**: 2026-09-11
- **Phạm vi**: Khảo cứu từ đầu cho linh địa mới 'Hang Đức Mẹ Côn Đảo': lịch sử họ đạo Côn Sơn, mô tả hang, vị trí/tọa độ ước lượng, giáo phận quản lý, 3 nguồn trực tiếp cấp B thay vì link tìm kiếm; chưa tìm được ảnh thực địa hợp lệ và chưa xác định được năm khởi lập chính xác (có mâu thuẫn nguồn nghiêm trọng).
- **Hồ sơ gốc**: `docs/khao-cuu/condao/khao-cuu.json` (schema `ducme.khao-cuu/v1`)

## 1. Hiện trạng trước khảo cứu

Chưa có bản ghi trong `src/data/statues.js`. Đây là linh địa mới.

## 2. Đề xuất theo từng trường dữ liệu

| Trường | Thao tác | Nguồn |
|---|---|---|
| `name` | thêm mới | — |
| `title` | thêm mới | — |
| `year` | thêm mới | [S1] [S4] |
| `lat` | thêm mới | [S2] [S3] [S4] |
| `lng` | thêm mới | [S2] |
| `elevation` | thêm mới | — |
| `location` | thêm mới | — |
| `region` | thêm mới | — |
| `diocese` | thêm mới | [S1] |
| `historicalFact` | thêm mới | [S1] |
| `oralTradition` | thêm mới | [S4] [S5] [S7] |
| `architect` | thêm mới | [S2] [S3] [S5] |
| `significance` | thêm mới | [S1] [S2] [S3] |
| `realImage` | thêm mới | — |
| `realImageCaption` | thêm mới | — |
| `sources` | thêm mới | [S1] [S2] [S3] |


### `name` — thêm mới

> Đức Mẹ Côn Đảo

_Ghi chú:_ Đặt theo quy ước 'Đức Mẹ <địa danh>' đang dùng cho các linh địa khác trong file (honchong, baidau...).

### `title` — thêm mới

> Hang Đức Mẹ - Vườn Quốc gia Côn Đảo

### `year` — thêm mới

```json
1930
```

_Ghi chú:_ MỨC TIN CẬY THẤP — xem conflicts. Đây chỉ là ước lượng trung điểm từ mốc 'gần 80 năm lịch sử' (nguồn cấp B, không rõ năm đăng bài) để có một con số hợp lệ cho schema; nhiều nguồn cấp C khác lại nói 'thế kỷ XIX'. Đề nghị marian-audit coi đây là placeholder cần xác minh thêm, không phải số liệu chốt.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Theo TGP Sài Gòn, hang đá Đức Mẹ trên núi tại Côn Đảo có 'gần 80 năm lịch sử' tính đến thời điểm đăng bài; chưa xác định được năm đăng nên chỉ ước lượng khoảng thập niên 1930 | [S1] | thấp |
| Nhiều bài viết du lịch (nguồn cấp C, khả năng sao chép dây chuyền từ một bản gốc không rõ) mô tả hang được thực dân Pháp lập ra và đặt tượng vào 'thế kỷ XIX' — mâu thuẫn với mốc trên | [S4] | thấp |


### `lat` — thêm mới

```json
8.684
```

_Ghi chú:_ MỨC TIN CẬY THẤP — toạ độ ước lượng, CHƯA đối chiếu với ảnh vệ tinh hay GPS thực địa. Suy ra từ mô tả tuyến đường (cách trung tâm thị trấn ~3km qua đường Võ Thị Sáu - Huỳnh Thúc Kháng đến khu quản lý Vườn quốc gia, sau đó đi bộ đường mòn đá ~400-500m) và vị trí chung của Vườn Quốc gia Côn Đảo. Cần marian-audit hoặc thực địa xác nhận lại bằng bản đồ/GPS trước khi công bố.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Hang nằm trong khu rừng nguyên sinh của Vườn Quốc gia Côn Đảo, cách trung tâm thị trấn khoảng 3km theo đường Võ Thị Sáu - Huỳnh Thúc Kháng, sau đó đi bộ đường mòn đá khoảng 400-500m | [S2] [S3] [S4] | trung bình |
| Toạ độ cụ thể là ước lượng dựa trên mô tả tuyến đường ở trên, chưa đối chiếu được với bản đồ định vị hang hay ảnh vệ tinh — độ tin cậy thấp | [S2] | thấp |


### `lng` — thêm mới

```json
106.595
```

_Ghi chú:_ Xem ghi chú ở trường lat — cùng cơ sở ước lượng, cùng mức tin cậy thấp.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Vị trí nằm trong khu vực phía tây Vườn Quốc gia Côn Đảo, giữa trung tâm thị trấn và vịnh Ông Đụng | [S2] | thấp |


### `elevation` — thêm mới

> Trên núi (chưa xác định độ cao chính xác)

_Ghi chú:_ Nguồn S1 mô tả hang nằm 'trên núi khá cao' nhưng không cho số liệu mét cụ thể; không tìm được nguồn nào đo đạc độ cao.

### `location` — thêm mới

> Khu vực rừng nguyên sinh Vườn Quốc gia Côn Đảo (tuyến Sở Rẫy - Ông Đụng), Đặc khu Côn Đảo, Thành phố Hồ Chí Minh (trước 01/07/2025: huyện Côn Đảo, tỉnh Bà Rịa - Vũng Tàu)

_Ghi chú:_ Dùng tên hành chính hiện hành sau đợt sáp nhập 01/07/2025 (Côn Đảo trở thành đặc khu trực thuộc TP.HCM), có ghi chú tên cũ vì phần lớn tư liệu tham khảo còn dùng tên tỉnh Bà Rịa - Vũng Tàu.

### `region` — thêm mới

> Đông Nam Bộ

_Ghi chú:_ Giữ theo cách phân vùng địa lý hiện có trong dữ liệu cho khu vực Bà Rịa - Vũng Tàu cũ (cùng nhóm với baidau, ducbasaigon), không đổi theo ranh giới hành chính mới vì REGION_ORDER của dự án chỉ có 6 vùng cố định.

### `diocese` — thêm mới

> Tổng Giáo phận Sài Gòn - TP.HCM

_Ghi chú:_ Dù Côn Đảo nằm trong địa giới dân sự của Bà Rịa - Vũng Tàu (cũ), cộng đoàn Công giáo tại đây (họ đạo Côn Sơn) được chính cổng thông tin chính thức của Tổng Giáo phận Sài Gòn (tgpsaigon.net) đăng bài và theo dõi mục vụ — dấu hiệu cho thấy thuộc Tổng Giáo phận Sài Gòn chứ không phải Giáo phận Bà Rịa. Chưa đối chiếu được với niên giám/danh bạ chính thức của Tổng Giáo phận nên để confidence trung bình.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Họ đạo Côn Sơn - Côn Đảo được Tổng Giáo phận Sài Gòn (qua tgpsaigon.net) đăng bài theo dõi, không phải Giáo phận Bà Rịa | [S1] | trung bình |


### `historicalFact` — thêm mới

> Từ khoảng năm 1920, cộng đồng Công giáo trên quần đảo Côn Sơn (nay là Côn Đảo) được tổ chức thành họ đạo Côn Sơn, hiện thuộc Tổng Giáo phận Sài Gòn - TP.HCM. Nhà thờ họ đạo hoạt động đến năm 1975; sau đó bị trưng dụng làm rạp chiếu bóng và trụ sở tòa án, chuông nhà thờ bị tháo dỡ. Từ năm 1976, đảo không có linh mục thường trú và không có Thánh lễ công khai trong khoảng 33 năm; giáo dân giữ đạo âm thầm qua kinh nguyện riêng. Đời sống đạo dần được khôi phục trong những năm sau đó; hiện cộng đồng Công giáo tại Côn Đảo có khoảng 200 giáo dân và vẫn phải mượn nhà tư gia làm nơi sinh hoạt tôn giáo vì nhà thờ cũ chưa được hoàn trả.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Từ khoảng năm 1920, quần đảo Côn Sơn có họ đạo Côn Sơn, nay thuộc Tổng Giáo phận Sài Gòn - TP.HCM | [S1] | trung bình |
| Nhà thờ họ đạo hoạt động đến 1975, sau đó bị dùng làm rạp chiếu bóng và trụ sở tòa án, chuông bị tháo dỡ | [S1] | trung bình |
| Từ 1976, khoảng 33 năm đảo không có linh mục thường trú và không có Thánh lễ công khai | [S1] | trung bình |
| Hiện nay cộng đồng Công giáo tại Côn Đảo có khoảng 200 giáo dân, phải mượn nhà tư gia làm nơi sinh hoạt tôn giáo | [S1] | trung bình |


### `oralTradition` — thêm mới

> Theo lời kể phổ biến trên nhiều trang du lịch (chưa được nguồn cấp A/B xác nhận độc lập), hang được thực dân Pháp phát hiện và đặt tượng Đức Mẹ để cầu nguyện trong thời gian chiếm đóng Côn Đảo vào thế kỷ XIX; đây cũng từng là nơi ngư dân Công giáo trên đảo ghé cầu nguyện trước mỗi chuyến ra khơi. Một biển đá khắc chữ Pháp "Grotte de N.D.L." (được hiểu là Grotte de Notre-Dame de Lourdes - Hang Đức Mẹ Lộ Đức), cùng bia đá tạ ơn song ngữ Việt - Pháp đã mờ nét theo thời gian, được nhiều bài viết mô tả là vẫn còn trong khu vực hang. Mốc "thế kỷ XIX" này lệch khá xa so với thông tin từ Tổng Giáo phận Sài Gòn cho rằng hang đá có "gần 80 năm lịch sử" tính đến thời điểm đăng bài; một số bài viết khác thậm chí còn nói hang đã tồn tại "hơn 2 thế kỷ" — ba con số chênh nhau rất nhiều, chưa rõ số liệu nào đáng tin hơn.

_Ghi chú:_ Toàn bộ đoạn này dựa trên nguồn cấp C (trang du lịch) trừ mốc 'gần 80 năm' dẫn lại từ S1 để đối chiếu; không đưa các chi tiết chưa kiểm chứng này vào historicalFact.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Lời kể phổ biến: Pháp đặt tượng Đức Mẹ trong hang để cầu nguyện, thế kỷ XIX; ngư dân Công giáo cầu nguyện trước khi ra khơi | [S4] | thấp |
| Biển đá 'Grotte de N.D.L.' và bia đá tạ ơn song ngữ Việt - Pháp đã mờ | [S5] | thấp |
| Một số bài viết mô tả hang đã tồn tại 'hơn 2 thế kỷ' | [S7] | thấp |


### `architect` — thêm mới

> Hang Đức Mẹ là một hang đá tự nhiên nằm trong rừng nguyên sinh của Vườn Quốc gia Côn Đảo, không phải công trình xây mới; lối vào hang cách khu vực quản lý của vườn quốc gia khoảng 400-500m theo đường mòn đá. Theo mô tả trên các bài viết trên (chưa kiểm chứng độc lập bằng nguồn cấp A), bên trong hang có một bàn thờ nhỏ đặt tượng Đức Mẹ và tượng Chúa Giêsu chịu nạn. Chưa tìm được nguồn nào ghi rõ chất liệu, kích thước tượng, năm tạc tượng hay tên người đặt tượng ban đầu.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Hang đá tự nhiên trong rừng nguyên sinh Vườn Quốc gia Côn Đảo, không phải công trình xây mới, cách khu quản lý khoảng 400-500m đường mòn đá | [S2] [S3] | trung bình |
| Bên trong hang có bàn thờ nhỏ với tượng Đức Mẹ và tượng Chúa Giêsu chịu nạn | [S5] | thấp |


### `significance` — thêm mới

> Đây là một trong số ít di tích tôn giáo còn lại phản ánh giai đoạn lịch sử Công giáo tại Côn Đảo, một hòn đảo được biết đến nhiều hơn qua hệ thống nhà tù thời Pháp thuộc và Việt Nam Cộng hòa. Với vị trí nằm trong Vườn Quốc gia Côn Đảo, hang vừa mang giá trị tâm linh cho cộng đồng Công giáo địa phương (hiện khoảng 200 giáo dân), vừa là một điểm dừng trong các tuyến trekking rừng nguyên sinh mà vườn quốc gia khai thác cho du lịch sinh thái.

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Một trong số ít di tích tôn giáo còn lại phản ánh lịch sử Công giáo tại Côn Đảo, nơi chủ yếu được biết đến qua hệ thống nhà tù | [S1] | trung bình |
| Hang là một điểm dừng trong tuyến trekking rừng nguyên sinh do Vườn Quốc gia Côn Đảo khai thác du lịch sinh thái | [S2] [S3] | cao |


### `realImage` — thêm mới

_Ghi chú:_ Chưa tìm được ảnh thực địa hợp lệ (có giấy phép mở, chắc chắn không phải AI). Xem imageSearchNote.

### `realImageCaption` — thêm mới

### `sources` — thêm mới

```json
[
  {
    "title": "Côn Đảo có một Họ Đạo đang hồi sinh - TGP Sài Gòn",
    "url": "https://tgpsaigon.net/bai-viet/con-dao-co-mot-ho-dao-dang-hoi-sinh-39252"
  },
  {
    "title": "Trung tâm Vườn - hang Đức Mẹ - Ông Đụng - Vườn Quốc gia Côn Đảo",
    "url": "https://condaopark.com.vn/vn/dich-vu/14/trung-tam-vuon-hang-duc-me-ong-dung.html"
  },
  {
    "title": "Hang Đức Mẹ trong rừng rậm Côn Đảo - VnExpress",
    "url": "https://vnexpress.net/hang-duc-me-trong-rung-ram-con-dao-4414424.html"
  }
]
```

_Ghi chú:_ 3 nguồn trực tiếp cấp B (không phải link tìm kiếm Google).

| Khẳng định | Nguồn | Tin cậy |
|---|---|---|
| Đã tìm và chọn 3 nguồn trực tiếp cấp B (TGP Sài Gòn, cổng thông tin Vườn quốc gia Côn Đảo, VnExpress) thay vì dùng link tìm kiếm | [S1] [S2] [S3] | cao |


## 3. Danh mục nguồn

| Mã | Tiêu đề | URL | Cấp | Ngày truy cập | Chứng minh điều gì | Vào dữ liệu |
|---|---|---|---|---|---|---|
| S1 | Côn Đảo có một Họ Đạo đang hồi sinh - TGP Sài Gòn | [liên kết](https://tgpsaigon.net/bai-viet/con-dao-co-mot-ho-dao-dang-hoi-sinh-39252) | B | 2026-09-11 | Lịch sử họ đạo Côn Sơn (~1920), việc mất nhà thờ sau 1975, giai đoạn 33 năm không linh mục, số giáo dân hiện tại (~200), mốc 'gần 80 năm lịch sử' của hang đá Đức Mẹ, thuộc Tổng Giáo phận Sài Gòn | có |
| S2 | Trung tâm Vườn - hang Đức Mẹ - Ông Đụng - Vườn Quốc gia Côn Đảo | [liên kết](https://condaopark.com.vn/vn/dich-vu/14/trung-tam-vuon-hang-duc-me-ong-dung.html) | B | 2026-09-11 | Trang chính thức của cơ quan quản lý Vườn Quốc gia Côn Đảo mô tả tuyến tham quan hang Đức Mẹ - Ông Đụng, vị trí chung, khoảng cách đường mòn | có |
| S3 | Hang Đức Mẹ trong rừng rậm Côn Đảo - VnExpress | [liên kết](https://vnexpress.net/hang-duc-me-trong-rung-ram-con-dao-4414424.html) | B | 2026-09-11 | Mô tả hang, khoảng cách từ trung tâm thị trấn, bia đá tạ ơn song ngữ Việt - Pháp, vai trò trong du lịch sinh thái của vườn quốc gia | có |
| S4 | Ghé thăm Hang Đức Mẹ Côn Đảo linh thiêng để tham quan, chiêm bái - Lữ Hành Việt Nam | [liên kết](https://luhanhvietnam.com.vn/du-lich/ghe-tham-hang-duc-me-con-dao.html) | C | 2026-09-11 | Chỉ dùng làm manh mối: lời kể phổ biến về nguồn gốc Pháp thuộc thế kỷ XIX, giá vé, khoảng cách đường đi — không đưa vào historicalFact | — |
| S5 | Đôi nét "bí ẩn" về Hang Đức Mẹ Maria (Mother Maria's Cave) ở Côn Đảo - Pulo Bear | [liên kết](https://pulobear.vn/doi-net-bi-an-ve-hang-duc-me-maria-mother-marias-cave-o-con-dao/) | C | 2026-09-11 | Chỉ dùng làm manh mối: mô tả biển đá 'Grotte de N.D.L.', bàn thờ với tượng Đức Mẹ và tượng Chúa Giêsu chịu nạn bên trong hang | — |
| S6 | Côn Sơn Island - Wikipedia (bản tiếng Anh) | [liên kết](https://en.wikipedia.org/wiki/C%C3%B4n_S%C6%A1n_Island) | B | 2026-09-11 | Chỉ dùng làm điểm neo tham chiếu địa lý (toạ độ đảo Côn Sơn 8.6931°N 106.6094°E) để ước lượng toạ độ hang, không mô tả trực tiếp về hang | — |
| S7 | HANG ĐỨC MẸ - ĐỊA ĐIỂM TÂM LINH ẨN MÌNH SUỐT HƠN 2 THẾ KỶ TẠI VƯỜN QUỐC GIA CÔN ĐẢO - Ăn Chơi Vũng Tàu | [liên kết](https://anchoivungtau.vn/hang-duc-me-dia-diem-tam-linh-an-minh-suot-hon-2-the-ky-tai-vuon-quoc-gia-con-dao/) | C | 2026-09-11 | Chỉ dùng để ghi nhận mâu thuẫn niên đại ('hơn 2 thế kỷ') trong conflicts — không dùng làm căn cứ cho record.year | — |


Đưa vào trường `sources` của dữ liệu: [S1], [S2], [S3] (3 nguồn).

## 4. Hình ảnh

**Không đề xuất ảnh** — giữ `realImage: null`. Đây là trạng thái hợp lệ theo quy chuẩn dự án.

_Đã tìm qua:_ Đã tìm site:commons.wikimedia.org với các biến thể 'Hang Đức Mẹ' + 'Con Dao', 'Con Son', 'grotto Mary', và duyệt Category liên quan đến hang đá Đức Mẹ/Notre Dame trên Wikimedia Commons — không tìm thấy ảnh nào xác nhận chắc chắn là chụp đúng địa điểm này. Có một file tên chung chung 'File:Grotto of the Virgin Mary.jpg' trên Commons nhưng không có cơ sở xác nhận đây là hang tại Côn Đảo (tên file quá chung, không có mô tả địa danh cụ thể) nên không đề xuất. realImage giữ null theo đúng quy chuẩn của dự án.

## 5. Mâu thuẫn nguồn & điểm chưa chắc chắn

| Vấn đề | Nguồn nói A | Nguồn nói B | Xử lý đề xuất |
|---|---|---|---|
| Năm khởi lập / tuổi của hang Đức Mẹ | 'Gần 80 năm lịch sử' tính đến thời điểm đăng bài (chưa rõ năm đăng bài, ước lượng khoảng thập niên 1930) [S1] | Được thực dân Pháp lập ra và đặt tượng vào 'thế kỷ XIX' — chi tiết lặp lại giống nhau ở rất nhiều trang du lịch, khả năng cao là nội dung sao chép dây chuyền từ một nguồn gốc không rõ [S4] | Tạm dùng năm ước lượng theo nguồn cấp B (S1) cho record.year nhưng đánh dấu confidence thấp trong claims và ghi rõ trong oralTradition. Đề nghị marian-audit hoặc người khảo cứu tiếp theo liên hệ trực tiếp họ đạo Côn Sơn / Vườn Quốc gia Côn Đảo, hoặc tìm kỷ yếu/văn khố Tổng Giáo phận Sài Gòn, để xác định năm chính xác trước khi công bố chính thức. |
| Một số bài viết còn nói hang tồn tại 'hơn 2 thế kỷ' (tức trước năm 1826) | 'Hơn 2 thế kỷ' — nếu đúng nghĩa đen sẽ đẩy mốc thời gian về trước cả giai đoạn thực dân Pháp đặt chân đến Côn Đảo [S7] | 'Gần 80 năm lịch sử' [S1] | Chênh lệch quá lớn và không khớp với bối cảnh lịch sử (Pháp chỉ thiết lập sự hiện diện lâu dài tại Côn Đảo từ 1862); nhiều khả năng 'hơn 2 thế kỷ' chỉ là cách giật tít phóng đại của bài viết du lịch. Không dùng để tính record.year, chỉ ghi nhận trong oralTradition và unknowns. |


**Chưa tìm được nguồn, đã cố ý để ngoài đề xuất:**

- Năm chính xác đặt tượng/lập hang: hai nhóm nguồn lệch nhau hàng chục năm (thậm chí có nguồn nói hơn 2 thế kỷ), chưa có tài liệu giáo phận hoặc văn khố xác nhận
- Toạ độ chính xác của hang: chỉ ước lượng dựa trên mô tả tuyến đường (cách trung tâm ~3km + đi bộ ~400-500m), chưa đối chiếu được với bản đồ/ảnh vệ tinh hoặc GPS thực địa
- Chất liệu, kích thước tượng Đức Mẹ và tượng Chúa Giêsu trong hang; tên người đặt tượng ban đầu hoặc người khắc/trùng tu bia đá tạ ơn
- Nội dung chính xác của bia đá tạ ơn song ngữ Việt - Pháp và biển đá 'Grotte de N.D.L.' — chỉ có mô tả gián tiếp qua bài viết, chưa có ảnh chụp cận cảnh để đọc lại
- Tên vị linh mục coi sóc họ đạo Côn Sơn giai đoạn 1971-1975: các bản tóm tắt tìm kiếm cho ra hai tên hơi khác nhau ('Alphonsus Phạm Gia Thuỵ' và 'Ngô Gia Thụy') — nhiều khả năng cùng một người bị chép sai tên ở đâu đó, cần đọc trực tiếp bài viết gốc để xác minh, nên không đưa tên vào historicalFact
- Ảnh thực địa hợp lệ (không AI, có giấy phép rõ ràng) cho hang — chưa tìm thấy trên Wikimedia Commons hay nguồn có giấy phép mở nào khác
- Độ cao cụ thể của hang so với mực nước biển hoặc so với chân núi

## 6. Tự đánh giá

| Trục | Đánh giá |
|---|---|
| Độ tin cậy tổng thể | thấp |
| Rủi ro lớn nhất | Trong phiên khảo cứu này, công cụ WebFetch bị chặn hoàn toàn bởi chính sách mạng của môi trường làm việc (kể cả với google.com và en.wikipedia.org — đã thử và bị EGRESS_BLOCKED), nên toàn bộ nội dung nguồn chỉ được đọc gián tiếp qua bản tóm tắt của WebSearch, không phải đọc trực tiếp từng trang. Có rủi ro thực tế là bản tóm tắt diễn giải sai lệch hoặc bỏ sót chi tiết so với nguyên văn, đặc biệt là ở 3 nguồn cấp B (S1, S2, S3) dùng làm căn cứ chính. Ngoài ra mốc năm khởi lập và toạ độ đều chỉ là ước lượng, chưa có xác nhận độc lập. |
| Đề nghị người kiểm chứng soi kỹ | marian-audit BẮT BUỘC phải tự mở lại nguyên văn cả 3 nguồn S1, S2, S3 bằng WebFetch hoặc trình duyệt (môi trường kiểm chứng có thể không bị chặn mạng như phiên này) để đối chiếu từng câu trong historicalFact/architect/significance với bản gốc, đặc biệt là mốc '~1920', '33 năm không linh mục', '~200 giáo dân', và mốc 'gần 80 năm lịch sử' của hang. Cũng cần kiểm tra lại toạ độ ước lượng (8.684, 106.595) bằng bản đồ/ảnh vệ tinh trước khi cho phép công bố. |
| Tổng văn xuôi sau đề xuất | 520 từ |


## 7. Bản ghi dữ liệu đề xuất

```json
{
  "id": "condao",
  "name": "Đức Mẹ Côn Đảo",
  "title": "Hang Đức Mẹ - Vườn Quốc gia Côn Đảo",
  "year": 1930,
  "lat": 8.684,
  "lng": 106.595,
  "elevation": "Trên núi (chưa xác định độ cao chính xác)",
  "location": "Khu vực rừng nguyên sinh Vườn Quốc gia Côn Đảo (tuyến Sở Rẫy - Ông Đụng), Đặc khu Côn Đảo, Thành phố Hồ Chí Minh (trước 01/07/2025: huyện Côn Đảo, tỉnh Bà Rịa - Vũng Tàu)",
  "region": "Đông Nam Bộ",
  "diocese": "Tổng Giáo phận Sài Gòn - TP.HCM",
  "diemStatue5": false,
  "constellationRole": {
    "v1": null,
    "v2": null,
    "v3": null,
    "v4": null
  },
  "historicalFact": "Từ khoảng năm 1920, cộng đồng Công giáo trên quần đảo Côn Sơn (nay là Côn Đảo) được tổ chức thành họ đạo Côn Sơn, hiện thuộc Tổng Giáo phận Sài Gòn - TP.HCM. Nhà thờ họ đạo hoạt động đến năm 1975; sau đó bị trưng dụng làm rạp chiếu bóng và trụ sở tòa án, chuông nhà thờ bị tháo dỡ. Từ năm 1976, đảo không có linh mục thường trú và không có Thánh lễ công khai trong khoảng 33 năm; giáo dân giữ đạo âm thầm qua kinh nguyện riêng. Đời sống đạo dần được khôi phục trong những năm sau đó; hiện cộng đồng Công giáo tại Côn Đảo có khoảng 200 giáo dân và vẫn phải mượn nhà tư gia làm nơi sinh hoạt tôn giáo vì nhà thờ cũ chưa được hoàn trả.",
  "oralTradition": "Theo lời kể phổ biến trên nhiều trang du lịch (chưa được nguồn cấp A/B xác nhận độc lập), hang được thực dân Pháp phát hiện và đặt tượng Đức Mẹ để cầu nguyện trong thời gian chiếm đóng Côn Đảo vào thế kỷ XIX; đây cũng từng là nơi ngư dân Công giáo trên đảo ghé cầu nguyện trước mỗi chuyến ra khơi. Một biển đá khắc chữ Pháp \"Grotte de N.D.L.\" (được hiểu là Grotte de Notre-Dame de Lourdes - Hang Đức Mẹ Lộ Đức), cùng bia đá tạ ơn song ngữ Việt - Pháp đã mờ nét theo thời gian, được nhiều bài viết mô tả là vẫn còn trong khu vực hang. Mốc \"thế kỷ XIX\" này lệch khá xa so với thông tin từ Tổng Giáo phận Sài Gòn cho rằng hang đá có \"gần 80 năm lịch sử\" tính đến thời điểm đăng bài; một số bài viết khác thậm chí còn nói hang đã tồn tại \"hơn 2 thế kỷ\" — ba con số chênh nhau rất nhiều, chưa rõ số liệu nào đáng tin hơn.",
  "architect": "Hang Đức Mẹ là một hang đá tự nhiên nằm trong rừng nguyên sinh của Vườn Quốc gia Côn Đảo, không phải công trình xây mới; lối vào hang cách khu vực quản lý của vườn quốc gia khoảng 400-500m theo đường mòn đá. Theo mô tả trên các bài viết trên (chưa kiểm chứng độc lập bằng nguồn cấp A), bên trong hang có một bàn thờ nhỏ đặt tượng Đức Mẹ và tượng Chúa Giêsu chịu nạn. Chưa tìm được nguồn nào ghi rõ chất liệu, kích thước tượng, năm tạc tượng hay tên người đặt tượng ban đầu.",
  "significance": "Đây là một trong số ít di tích tôn giáo còn lại phản ánh giai đoạn lịch sử Công giáo tại Côn Đảo, một hòn đảo được biết đến nhiều hơn qua hệ thống nhà tù thời Pháp thuộc và Việt Nam Cộng hòa. Với vị trí nằm trong Vườn Quốc gia Côn Đảo, hang vừa mang giá trị tâm linh cho cộng đồng Công giáo địa phương (hiện khoảng 200 giáo dân), vừa là một điểm dừng trong các tuyến trekking rừng nguyên sinh mà vườn quốc gia khai thác cho du lịch sinh thái.",
  "realImage": null,
  "realImageCaption": null,
  "sources": [
    {
      "title": "Côn Đảo có một Họ Đạo đang hồi sinh - TGP Sài Gòn",
      "url": "https://tgpsaigon.net/bai-viet/con-dao-co-mot-ho-dao-dang-hoi-sinh-39252"
    },
    {
      "title": "Trung tâm Vườn - hang Đức Mẹ - Ông Đụng - Vườn Quốc gia Côn Đảo",
      "url": "https://condaopark.com.vn/vn/dich-vu/14/trung-tam-vuon-hang-duc-me-ong-dung.html"
    },
    {
      "title": "Hang Đức Mẹ trong rừng rậm Côn Đảo - VnExpress",
      "url": "https://vnexpress.net/hang-duc-me-trong-rung-ram-con-dao-4414424.html"
    }
  ]
}
```

### Kết quả tự kiểm

```text
$ node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/condao/khao-cuu.json
KIEM TRA: condao (docs/khao-cuu/condao/khao-cuu.json)

=> DAT toan bo rang buoc bat buoc. Sau khi chen vao src/data/statues.js, chay "npm test" de xac nhan lai.

(Kiem tra rieng luoc do ho so bang 'format-report.mjs --check': hop le, chi co 7 canh bao khong chan cho cac truong khong bat buoc claims: name, title, elevation, location, region, realImage, realImageCaption.)
```

---

_Báo cáo sinh tự động từ hồ sơ JSON bằng `format-report.mjs`. Sửa nội dung thì sửa file JSON rồi chạy lại lệnh, đừng sửa trực tiếp vào file markdown._
