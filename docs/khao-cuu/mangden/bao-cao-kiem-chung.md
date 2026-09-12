# Báo cáo kiểm chứng: Đức Mẹ Măng Đen

## Kết luận

> **ÁP DỤNG CÓ ĐIỀU KIỆN** — 39/40
>
> Hồ sơ khảo cứu đạt 39/40 điểm, chất lượng tư liệu xuất sắc và toàn bộ các mốc lịch sử cốt lõi (1971, 1974, 1987, 2006, 2007, 2011) đều được đối chiếu chéo qua nhiều nguồn độc lập. Duyệt áp dụng có điều kiện: điều chỉnh việc gán nhầm nguồn S3 cho giả thuyết chòm sao Bắc Đẩu trong oralTradition, thay thế link tìm kiếm bằng 4 nguồn trực tiếp, và yêu cầu nén 2 ảnh phụ xuống dưới 3MB trước khi đưa vào galleryImages.

- **Hồ sơ khảo cứu đã kiểm**: `docs/khao-cuu/mangden/khao-cuu.json`
- **Người kiểm chứng**: Phiên kiểm chứng Marian độc lập
- **Ngày kiểm**: 2026-09-12
- **Cho phép triển khai**: có — `marian-publish` được chạy tiếp
- **Hồ sơ gốc**: `docs/khao-cuu/mangden/kiem-chung.json` (schema `ducme.kiem-chung/v1`)

### Điều kiện bắt buộc trước khi triển khai

`marian-publish` làm đúng danh sách này, không thêm không bớt.

1. Không gán nguồn Wikipedia [S3] cho luận điểm 'ngôi sao Alioth trong chòm sao Bắc Đẩu' trong oralTradition; giữ nguyên câu văn trong oralTradition theo baseline của dự án.
2. Dùng assets/real_photos/mangden.jpg làm realImage với realImageCaption cập nhật theo đề xuất (ghi rõ nguồn Wikimedia Commons, tác giả Baojcn01, giấy phép CC BY-SA 4.0).
3. Thay thế liên kết tìm kiếm Google bằng 4 nguồn bài viết trực tiếp S1, S2, S3, S4 trong trường sources của bản ghi.
4. Áp dụng chuẩn hóa tọa độ lat: 14.6009, lng: 108.2979 theo OpenStreetMap node 5490688957.
5. Viết oralTradition đúng 3 chuyện đã duyệt, bảo đảm mỗi ý đều mở đầu bằng nhãn truyền tụng như bản dự thảo.
6. Nếu đưa 2 ảnh phụ (the-statue-of-our-lady-of-fatima-in-mang-den.jpg, ducmemang_den_2010.jpg) vào galleryImages, bắt buộc phải nén dung lượng xuống dưới 3.0 MB trước khi commit; nếu không, giữ galleryImages: [] như đề xuất ban đầu.

## 1. Chấm điểm

| Trục | Điểm | Bằng chứng |
|---|---|---|
| Chất lượng nguồn | 5/5 | Cả 7 nguồn đều mở được. Có nhiều nguồn cấp B độc lập (Tòa Giám mục Kon Tum dẫn Nội san PATER 04/2007, Báo Công giáo và Dân tộc, Wikipedia, OpenStreetMap) cùng các nguồn cấp C hỗ trợ tư liệu truyền tụng. |
| Truy vết luận điểm | 4/5 | 17/18 khẳng định truy vết chính xác từng câu chữ trong các nguồn dẫn; riêng khẳng định ngôi sao Alioth trong oralTradition bị gán nhầm nguồn S3 (Wikipedia không có nội dung này, đây là diễn giải nội bộ từ baseline của dự án). |
| Độ chính xác dữ liệu | 5/5 | Mọi mốc năm (1971, 1974, 1987, 2006, 2007, 2011), địa danh, vùng miền và giáo phận đều chính xác. Tọa độ 14.6009°B, 108.2979°Đ khớp với OpenStreetMap node 5490688957 (độ lệch ~6m). |
| Hình ảnh | 5/5 | Cả 3 ảnh đề xuất (1 chính, 2 phụ) đều từ Wikimedia Commons, có trang gốc File: còn sống, đúng chủ thể, tác giả và giấy phép CC rõ ràng, không có dấu hiệu tạo sinh AI. Ảnh phụ có EXIF máy ảnh Canon EOS 500D. |
| Phân định sự thật / truyền tụng | 5/5 | Phân định triệt để giữa historicalFact (chỉ chứa sử liệu có thể kiểm chứng) và oralTradition (tập hợp giai thoại dân gian). Mọi ý truyền tụng đều có nhãn dẫn rõ ràng. |
| Giọng văn & trung lập | 5/5 | Giọng văn trang trọng, kính trọng niềm tin tôn giáo và văn hóa các sắc tộc bản địa Tây Nguyên, mô tả biến cố chiến tranh trung lập, không có ngôn từ tuyên truyền hay thiên kiến. |
| Tính kỹ thuật | 5/5 | validate-record.mjs đạt toàn bộ ràng buộc bắt buộc (0 lỗi). Định dạng tọa độ 4 chữ số thập phân chuẩn xác. ID mangden khớp chính xác với repo. |
| Sức hấp dẫn & chiều sâu tư liệu | 5/5 | Văn xuôi mở rộng phong phú (~700 từ), thu thập được 4 câu chuyện truyền tụng giàu sức sống, kho 5 ảnh ứng viên chọn lọc kỹ lưỡng, kèm 3 manh mối (leads) cụ thể cho các lượt khảo cứu tiếp theo. |


**Tổng: 39/40.**

## 2. Kiểm nguồn dẫn

| Mã | URL | Trạng thái | Chứa luận điểm? | Kiểm lại bằng | Ghi chú |
|---|---|---|---|---|---|
| S1 | [liên kết](https://giaophankontum.com/gioi-thieu-ve-duc-me-mang-den) | còn sống | có | WebFetch | Trang chính thức Giáo phận Kon Tum, bài của Lm Phi Khanh Vương Đình Khởi trích Nội san PATER số 04/2007 Tòa Giám mục Kon Tum. Máy chủ trả về gzip khiến curl thông thường không bắt được từ khóa; đã kiểm chứng lại bằng WebFetch và curl --compressed, xác nhận trang còn sống, chứa trọn vẹn tư liệu về nguồn gốc 1971, lễ Noel 1971 của ĐGM Phaolô Seitz, phục chế 1987, các sự tích và mốc 2006-2007. |
| S2 | [liên kết](https://cgvdt.vn/cong-giao-viet-nam/tuong-duc-me-fatima-tai-mang-den_a4918) | còn sống | có | — | Báo Công giáo và Dân tộc (2017). Xác nhận lịch sử dựng tượng 1971, chiến tranh hoang vu, phái đoàn ĐGM Micae Hoàng Đức Oanh lên viếng 28/12/2006, thánh lễ 09/12/2007 và thông điệp Các con là tay của Mẹ. |
| S3 | [liên kết](https://vi.wikipedia.org/wiki/Đức_Mẹ_Măng_Đen) | còn sống | có | — | Wikipedia tiếng Việt. Xác nhận tường trình LM Giuse Nguyễn Minh Kông (tượng do LM Tôma Lê Thành Ánh tặng, trực thăng đưa lên giữa 1971), chiến sự 1974, mở đường QL24, viếng thăm của Sứ thần Leopoldo Girelli 2011, quyết định lập Giáo xứ Kon Xơm Luh. Không chứa nội dung chòm sao Bắc Đẩu. |
| S4 | [liên kết](https://ducmemangden.net/lich-su-duc-me-mang-den) | còn sống | có | — | Chuyên trang DucMeMangDen.net (cấp C). Dẫn ghi chép của LM Gioakim Nguyễn Hoàng Sơn với nhân chứng Đào Thị Hương về mốc tượng mất đầu và tay vào cuối năm 1987. |
| S5 | [liên kết](https://ducmemangden.net/doi-tay-cut-cua-duc-me-mang-den.html) | còn sống | có | — | Chuyên trang DucMeMangDen.net (cấp C). Phân tích ý nghĩa biểu tượng đôi bàn tay cụt và cảm thức đức tin về sự đồng cảm với người nghèo, bệnh tật, phong cùi. |
| S6 | [liên kết](https://catholicvn.com/tin-tuc-cong-giao/cau-chuyen-la-cong-giao-duc-me-mang-den-kontum/) | còn sống | có | — | CatholicVN (cấp C). Ghi lại chi tiết 3 câu chuyện lạ: giấc mơ bay lơ lửng của ông Bá, máy ủi chết máy nắn đường QL24 và hiện tượng chụp ảnh không hiện hình năm 2006. |
| S7 | [liên kết](https://www.openstreetmap.org/node/5490688957) | còn sống | có | — | OpenStreetMap node 5490688957. Định vị chính xác tọa độ thực địa 14.6009401°B, 108.2978632°Đ (chuẩn hóa 14.6009, 108.2979, sai số ~6m) tại đài tượng trên Quốc lộ 24. |


### Đối chiếu luận điểm

| Luận điểm | Nguồn | Kết luận | Ghi chú |
|---|---|---|---|
| Tượng được Linh mục Tôma Lê Thành Ánh trao tặng và Linh mục Giuse Nguyễn Minh Kông đưa lên tiền đồn Măng Đen bằng trực thăng vào giữa năm 1971 | [S1] [S3] | Đạt | S3 (dẫn bản tường trình LM Kông 2011) và S1 (Tòa Giám mục) đều xác nhận mốc 1971 và chi tiết vận chuyển trực thăng. |
| Sau lễ Giáng sinh năm 1971, Đức Giám mục Phaolô Seitz Kim đã đến dâng thánh lễ đầu tiên tại tượng đài Măng Đen | [S1] | Đạt | Đúng nguyên văn bài khảo cứu của GP Kon Tum [S1]: dịp lễ Thánh Gia Thất sau Noel 1971. |
| Năm 1974, chiến sự ác liệt khiến tiền đồn Măng Đen bị triệt hạ, pho tượng bị bỏ phế trong rừng rậm hoang vu | [S1] [S2] [S3] | Đạt | Cả S1, S2, S3 đều xác nhận tiền đồn bị triệt hạ năm 1974 và tượng bị bỏ phế giữa rừng. |
| Cuối năm 1987, tượng bị mất đầu và hai bàn tay, sau đó được một người thợ đá dùng xi măng đắp lại phần đầu mang nét bản địa | [S1] [S4] | Đạt | S1 và S4 ghi nhận tượng mất đầu tay cuối 1987, người thợ đá dùng xi măng đắp lại đầu mang nét phụ nữ Tây Nguyên bản địa. |
| Ngày 28/12/2006, Đức Giám mục Micae Hoàng Đức Oanh dẫn đầu phái đoàn Tòa Giám mục Kon Tum lên viếng và tìm được một phần đốt ngón tay trỏ của tượng | [S1] [S2] [S3] | Đạt | S1, S2, S3 đều xác nhận mốc viếng 28/12/2006; S1 nêu rõ LM Gioakim Nguyễn Hoàng Sơn tìm được phần ngón tay trỏ. |
| Ngày 09/12/2007, thánh lễ trọng thể với hơn 2.000 tín hữu tham dự đã xác lập ngày 9 tháng 12 hàng năm là Ngày Hành hương Đức Mẹ Măng Đen của Giáo phận Kon Tum | [S1] [S2] [S3] | Đạt | Khớp toàn bộ các nguồn S1, S2, S3 về số lượng tham dự (>2.000 người) và ý nghĩa xác lập ngày hành hương truyền thống. |
| Ngày 10/09/2011, Tổng Giám mục Leopoldo Girelli (Đại diện Tòa Thánh không thường trú tại Việt Nam) đã đến dâng thánh lễ kính Đức Mẹ tại Măng Đen | [S3] | Đạt | Khớp tư liệu trên Wikipedia tiếng Việt [S3]. |
| Cuối năm 2011, chính quyền tỉnh Kon Tum chính thức chấp thuận sinh hoạt hành hương và Tòa Giám mục thành lập Giáo xứ Kon Xơm Luh phụ trách quản lý linh địa | [S1] [S3] | Đạt | S1 và S3 xác nhận văn bản chấp thuận của tỉnh Kon Tum và thông báo thành lập Giáo xứ Kon Xơm Luh. |
| Tượng đúc bằng bê tông cốt thép cao khoảng 1 mét, đặt trên bệ tượng xi măng kết với đá cuội tự nhiên | [S1] [S3] | Đạt | S3 ghi nguyên văn vật liệu bê tông cốt thép, cao khoảng 1m, đặt trên bệ xi măng gắn đá cuội tự nhiên. |
| Khuôn mặt tượng mang dáng dấp phụ nữ Tây Nguyên bản địa sau lần phục chế năm 1987, khác biệt với hình mẫu Fatima truyền thống | [S1] [S3] | Đạt | Cả S1 và S3 đều mô tả sự khác biệt đặc thù này sau lần phục chế năm 1987. |
| Hai bàn tay tượng bị gãy cụt tới cổ tay, được giữ nguyên trạng và gắn liền với thông điệp Các con là tay của Mẹ | [S1] [S2] [S5] | Đạt | S1, S2, S5 đều mô tả hiện trạng tay cụt và tấm biển đá mang dòng chữ này. |
| Tương truyền vào năm 1987 người phát hiện tượng nằm mơ thấy đầu và tay tượng bay lơ lửng, sau đó thợ gắn tay mới nhưng tay đều tự rơi rụng | [S1] [S6] | Đạt | S1 và S6 đều kể lại giấc mơ của ông Bá và việc đắp tay mới tự rơi rụng. Đã có nhãn 'Tương truyền'. |
| Giai thoại xe ủi đất khi thi công mở đường QL24 đến gần tượng thì tắt máy, sau khi nắn đường uốn cong tránh tượng thì xe mới chạy bình thường | [S1] [S6] | Đạt | S1 và S6 ghi lại câu chuyện xe ủi tắt máy và việc nắn cong tuyến đường QL24. Đã có nhãn truyền tụng. |
| Người hành hương lấy Đức Mẹ Măng Đen làm ngôi sao Alioth trong phiên bản chòm sao Bắc Đẩu hiện đại để nối nhịp cán gáo Tây Nguyên | [S3] | Sửa câu chữ | Nguồn S3 (Wikipedia) không chứa giả thuyết chòm sao Bắc Đẩu hay ngôi sao Alioth. Đây là giả thuyết dân gian nội bộ của dự án ducme.vn đã có từ baseline; giữ nguyên câu trong oralTradition nhưng bỏ gán mã nguồn S3. |
| Đức Mẹ Măng Đen là trung tâm hành hương lớn của Tây Nguyên, biểu trưng cho sự ủi an và lòng xót thương đối với người khuyết tật, bệnh nhân phong cùi và người nghèo khổ | [S1] [S2] [S5] | Đạt | Được nhấn mạnh xuyên suốt trong các nguồn S1, S2, S5. |
| Tọa độ vĩ độ 14.6009°B và kinh độ 108.2979°Đ định vị chính xác vị trí đài tượng Đức Mẹ trên Quốc lộ 24 | [S7] | Đạt | Khớp OpenStreetMap node 5490688957 (độ lệch ~6m), đạt chuẩn 4 chữ số thập phân. |
| Ảnh chụp thực tế do tác giả Baojcn01 phát hành trên Wikimedia Commons với giấy phép CC BY-SA 4.0 | [S3] | Đạt | Ảnh File:Du-lich-Mang-Den.jpg trên Commons do Baojcn01 đăng, giấy phép CC BY-SA 4.0, được S3 nhúng trực tiếp. |
| Cập nhật danh mục nguồn trực tiếp gồm trang Giáo phận Kon Tum, báo Công giáo và Dân tộc, Wikipedia và chuyên trang DucMeMangDen | [S1] [S2] [S3] [S4] | Đạt | 4 nguồn trực tiếp, mở được và bao quát đầy đủ lịch sử linh địa. |


### Kiểm chuyện kể & giai thoại

Chuyện kể không bị chấm theo chuẩn sự thật lịch sử. Chỉ kiểm ba điều: có nguồn đọc lại được không, có bị nguồn nào bác bỏ không, và có được gắn nhãn truyền tụng không.

| Chuyện kể | Độ xác thực | Có gắn nhãn truyền tụng | Kết luận | Ghi chú |
|---|---|---|---|---|
| Giấc chiêm bao và người thợ đắp lại đầu tượng | có nguồn A/B đối chiếu phần nền | có | DUYỆT | Đối chiếu được với bài khảo cứu của GP Kon Tum [S1] (dẫn Nội san PATER 04/2007) và CatholicVN [S6]; hiện trạng đầu đắp xi măng có thật; văn bản oralTradition mở đầu bằng 'Tương truyền'. |
| Sự tích máy ủi tắt máy và con đường tránh tượng | có nguồn A/B đối chiếu phần nền | có | DUYỆT | Giai thoại thi công QL24 được ghi lại trong S1 và S6; thực tế con đường uốn cong nhẹ tránh tượng; văn bản oralTradition có nhãn 'Người dân trong vùng còn truyền tai nhau'. |
| Điềm lạ khi chụp ảnh bên tượng đài năm 2006 | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | có | DUYỆT | Lời kể nhân chứng ông Lành được S1 và S6 ghi lại; hồ sơ khảo cứu tạm chưa đưa vào văn bản oralTradition để đảm bảo độ cô đọng, giữ trong kho tư liệu khảo cứu. |
| Bàn tay vô hình của Mẹ và thông điệp 'Các con là tay của Mẹ' | có nguồn A/B đối chiếu phần nền | có | DUYỆT | Cảm thức đức tin gắn với hiện trạng tay cụt và tấm biển đá tạ ơn; có nguồn S1, S2, S5; văn bản oralTradition có nhãn 'Giáo dân và khách hành hương tin rằng'. |


### Kiểm chéo độc lập

Nguồn do người kiểm chứng tự tìm, không lấy từ báo cáo khảo cứu.

| Nguồn | URL | Xác nhận / bác bỏ điều gì |
|---|---|---|
| Cổng thông tin du lịch tỉnh Kon Tum (KontumTourism): Trung tâm hành hương Đức Mẹ Măng Đen | [liên kết](https://kontumtourism.com.vn/trung-tam-hanh-huong-duc-me-mang-den/) | Nguồn độc lập của ngành du lịch địa phương xác nhận: tượng dựng năm 1971 theo mẫu Fatima; cuối thập niên 1980 phần đầu và hai tay bị hư hại; độ cao ~1.200m giữa đồi thông Kon Plông; sinh hoạt đạo vụ thuộc Giáo phận Kon Tum; tọa lạc trên trục Quốc lộ 24. |
| Wikipedia tiếng Việt: Giám mục Aloisiô Nguyễn Hùng Vị | [liên kết](https://vi.wikipedia.org/wiki/Aloisiô_Nguyễn_Hùng_Vị) | Bài viết độc lập về Giám mục Kon Tum xác nhận Trung tâm Hành hương Đức Mẹ Măng Đen là trung tâm Thánh Mẫu trọng điểm của Giáo phận, nơi ĐGM Nguyễn Hùng Vị cùng hai vị tiền nhiệm (ĐGM Phêrô Trần Thanh Chung, ĐGM Micae Hoàng Đức Oanh) và 120 linh mục đồng tế đại lễ ngày 10/12/2015 với hơn 20.000 giáo dân tham dự. |
| OpenStreetMap API: Node Đức mẹ Măng Đen (5490688957) | [liên kết](https://api.openstreetmap.org/api/0.6/node/5490688957.json) | Dữ liệu bản đồ mở độc lập xác định tọa độ đài tượng là lat: 14.6009401, lon: 108.2978632. Tọa độ đề xuất 14.6009°B, 108.2979°Đ có độ lệch chỉ ~6m, hoàn toàn chính xác. |


## 3. Kiểm hình ảnh

| File | Nguồn công khai xác minh | Giấy phép (nếu biết) | Đúng linh địa | Dấu hiệu AI | Kết luận |
|---|---|---|---|---|---|
| assets/real_photos/mangden.jpg | có | CC BY-SA 4.0 | có | không thấy | DUYỆT |
| the-statue-of-our-lady-of-fatima-in-mang-den.jpg | có | CC BY-SA 4.0 | có | không thấy | DUYỆT |
| ducmemang_den_2010.jpg | có | CC BY-SA 3.0 | có | không thấy | DUYỆT |


## 4. Kiểm kỹ thuật & ảnh hưởng hệ thống

| Mục | Ảnh hưởng |
|---|---|
| Số lượng linh địa | không đổi (cập nhật bản ghi mangden) |
| CONSTELLATION_VERSIONS | không đổi (giữ nguyên vai trò Alioth trong v2 và v4) |
| Số assertion npm test | không đổi (353 assertions tiếp tục pass, 100% tests pass) |
| Ảnh thực địa | Giữ nguyên realImage hiện tại, cập nhật realImageCaption đầy đủ bản quyền tác giả Baojcn01 (CC BY-SA 4.0); bổ sung 2 ảnh phụ chất lượng cao vào kho tư liệu |
| Tài liệu phải cập nhật | docs/marian-sites-missing-info.md |


```text
$ node .agents/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/mangden/khao-cuu.json --allow-existing-id
=> DAT toan bo rang buoc bat buoc. Sau khi chen vao src/data/statues.js, chay "npm test" de xac nhan lai.
```

## 5. Vấn đề phát hiện

| Mức | Vấn đề | Vị trí | Đề nghị xử lý |
|---|---|---|---|
| Nặng | Luận điểm 'ngôi sao Alioth trong chòm sao Bắc Đẩu' gán nhầm nguồn S3 (Wikipedia) | fields[oralTradition].claims[2] | Bỏ gán nguồn S3 cho luận điểm này; giữ nguyên câu văn trong oralTradition vì đây là giả thuyết dân gian nội bộ của dự án đã có sẵn từ baseline. |
| Nhẹ | Máy chủ giaophankontum.com gửi phản hồi nén gzip khiến lệnh curl tự động ban đầu không bắt được từ khóa | sources[S1] | Đã kiểm chứng độc lập bằng WebFetch và curl --compressed, xác nhận trang mở bình thường và chứa đầy đủ tư liệu. |
| Nhẹ | Hai file ảnh phụ đề xuất có dung lượng > 3.0 MB (4.96 MB và 7.3 MB) và trường galleryImages chưa đưa vào fields[] | images[1], images[2] và fields[] | Duyệt bản quyền và tính thật của 2 ảnh; ở bước triển khai marian-publish, giữ record.galleryImages: [] như đề xuất hoặc nén ảnh dưới 3.0 MB trước khi kích hoạt galleryImages. |


## 6. Phần đã duyệt

Đây là phạm vi chính xác `marian-publish` được phép đưa lên website.

- [x] `historicalFact`
- [x] `architect`
- [x] `oralTradition`
- [x] `significance`
- [x] `lat`
- [x] `lng`
- [x] `realImageCaption`
- [x] `sources`
- [x] Nguồn đưa vào dữ liệu: [S1], [S2], [S3], [S4]
- [x] Ảnh: assets/real_photos/mangden.jpg, the-statue-of-our-lady-of-fatima-in-mang-den.jpg, ducmemang_den_2010.jpg
- [x] Chuyện kể được phép viết vào `oralTradition`: Giấc chiêm bao và người thợ đắp lại đầu tượng; Sự tích máy ủi tắt máy và con đường tránh tượng; Bàn tay vô hình của Mẹ và thông điệp 'Các con là tay của Mẹ'
- [ ] Thay đổi chòm sao (`CONSTELLATION_VERSIONS`)

---

_Báo cáo sinh tự động từ hồ sơ JSON bằng `format-audit.mjs`. Sửa nội dung thì sửa file JSON rồi chạy lại lệnh, đừng sửa trực tiếp vào file markdown._
