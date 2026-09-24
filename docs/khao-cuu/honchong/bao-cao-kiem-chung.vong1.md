# Báo cáo kiểm chứng: Đức Mẹ Hòn Chông (Kiên Giang)

## Kết luận

> **ÁP DỤNG CÓ ĐIỀU KIỆN** — 32/40
>
> Phần lịch sử bám sát nguyên văn lược sử giáo xứ (S2) và các bài hành hương (S3, S4, S1, S7); ba ảnh Flickr trùng khớp từng byte với trang gốc, chụp năm 2010 và 2015, đúng khuôn viên linh địa, nên được duyệt. Phải bỏ chuyện kể 'Đức Mẹ Hòn Chông cứu ngư dân Phú Quốc': nguồn duy nhất là tựa một video YouTube có ảnh thu nhỏ mang dấu hiệu rõ của ảnh do AI tạo, và nguồn này không cho thấy có một truyền tụng thật trong cộng đồng như oralTradition viết. Ngoài ra phải sửa ba chỗ câu chữ trong historicalFact và một chi tiết chưa kiểm được trong chú thích ảnh.

- **Hồ sơ khảo cứu đã kiểm**: `docs/khao-cuu/honchong/khao-cuu.json`
- **Người kiểm chứng**: Claude Opus 5.5 (phiên kiểm chứng độc lập 2026-09-24, marian-audit)
- **Ngày kiểm**: 2026-09-24
- **Cho phép triển khai**: có — `marian-publish` được chạy tiếp
- **Hồ sơ gốc**: `docs/khao-cuu/honchong/kiem-chung.json` (schema `ducme.kiem-chung/v1`)

### Điều kiện bắt buộc trước khi triển khai

`marian-publish` làm đúng danh sách này, không thêm không bớt.

1. historicalFact: thay cụm 'UBND tỉnh Kiên Giang ra thông báo số 29/TB-UB chấp thuận phục hồi Giáo xứ Hòn Chông' bằng 'UBND tỉnh Kiên Giang ký quyết định số 29/TB-UB chấp thuận phục hồi Giáo xứ Hòn Chông' (nguyên văn S2: 'ký quyết định số 29/TB – UB').
2. historicalFact: thay cụm 'và trường mầm non do Tu hội Nữ Tử Bác Ái Vinh Sơn phụ trách từ tháng 10/2002.' bằng 'và trường mầm non (2002) do các nữ tu Tu hội Nữ Tử Bác Ái Vinh Sơn phụ trách; các nữ tu có mặt tại giáo xứ từ tháng 10/2002.' (theo S2).
3. historicalFact: thay cụm 'khi ấy là Giám mục Cần Thơ' bằng 'khi ấy là Giám mục Đại diện Tông tòa Cần Thơ' (theo S6).
4. oralTradition: xoá nguyên câu đầu, từ 'Tương truyền trong giới hành hương, Đức Mẹ Hòn Chông là Đấng che chở người đi biển vùng vịnh Thái Lan:' đến hết '...người kể và chi tiết câu chuyện chưa được đối chiếu.'; rồi thay câu 'Về số phận ngôi nhà thờ đá, lời kể không thống nhất.' bằng 'Theo những lời kể lưu truyền, số phận ngôi nhà thờ đá không được thuật lại thống nhất.' Phần còn lại của oralTradition giữ nguyên văn như hồ sơ khảo cứu.
5. Không đưa chuyện 'Đức Mẹ Hòn Chông cứu ngư dân Phú Quốc', video S19 hay ý 'Đức Mẹ che chở người đi biển' vào bất kỳ trường nào của bản ghi.
6. realImage: chép docs/khao-cuu/honchong/anh/honchong-thap-chuong-2015.jpg thành assets/real_photos/honchong.jpg; realImageCaption dùng đúng giá trị đề xuất trong hồ sơ khảo cứu.
7. galleryImages: galleryImages[0] = assets/real_photos/honchong-2.jpg (chép từ honchong-phe-tich-toan-canh-2010.jpg) với caption 'Phế tích nhà thờ đá Hòn Chông và tháp chuông năm 2010 (Nguồn: Flickr, nguyenhuulongtri – NHLT.Ftb, chụp 21/08/2010; bảo lưu mọi quyền)', tức là bỏ cụm ', phía xa là đài Đức Mẹ Nữ Vương Hòa Bình'; galleryImages[1] = assets/real_photos/honchong-3.jpg (chép từ honchong-phe-tich-tu-thap-chuong-2010.jpg) với caption đúng như đề xuất.
8. Các trường title, year, lat, lng, elevation, location, architect, significance, sources dùng đúng giá trị trong hồ sơ khảo cứu; không đổi name, region, diocese, diemStatue5, constellationRole.

## 1. Chấm điểm

| Trục | Điểm | Bằng chứng |
|---|---|---|
| Chất lượng nguồn | 4/5 | Tự mở lại 20/20 nguồn. Các nguồn cấp B còn mở được gồm trang Giáo phận Long Xuyên (S1, S7), melavang.info (S3, S4), Wikipedia (S6, S8, S9, S10), OSM (S5) và Báo An Giang (S11, đọc lại được bằng curl sau lần đầu bị proxy chặn). Không có nguồn cấp A. S2 là bản chép lại trên trang cá nhân violet.vn (có ghi 'Nguồn: Trang Web Giáo Phận Long Xuyên', ký 'LM Chánh Sở Nguyễn Minh Chu'), chưa có bản gốc. |
| Truy vết luận điểm | 3/5 | Đối chiếu từng câu của historicalFact với nguyên văn S2: gần như mọi mốc đều khớp (1931 Merdrignac, 3.000 phu đồn điền, 1932, 1936–1940, vôi + cát + mủ ô dước, 1946–1953, 08/12/1959 'Đức Cha Phaolô Bình và ông Ngô hiện diện', 1962–1964/65, sau 1975, 19/04/1991, 25/10/1991, 01/12/1991, 31/08/1993 4.150 m², 1997, 1998). Có ba chỗ lệch nhỏ: nguồn ghi 'ký quyết định số 29/TB–UB' chứ không phải 'thông báo'; nữ tu có mặt từ 10/2002, còn trường mầm non xây năm 2002 và nhà trẻ hoạt động từ 01/12/2003; năm 1959 Đức Cha Bình là Giám mục Đại diện Tông tòa Cần Thơ (S6). Lỗi nặng hơn: câu mở đầu oralTradition 'Tương truyền trong giới hành hương, Đức Mẹ Hòn Chông là Đấng che chở người đi biển' không có nguồn nào chứa. S19 chỉ là tựa một video. |
| Độ chính xác dữ liệu | 3/5 | Giáo phận, vùng miền và địa giới 2025 khớp (S8, S10, S11, Nominatim). Toạ độ giữ nguyên bản cũ (OSM node 2331791879, 10.1582055/104.6112725). Nguồn đối chiếu thứ hai là ArcGIS World Geocoder, cho kết quả 10.148606/104.611938, lệch khoảng 1,07 km. Tuy vậy ảnh vệ tinh Esri tại điểm ArcGIS chỉ thấy rừng và đường, không có công trình nào, còn điểm OSM nằm trong khu dân cư ven ĐT971. Vì vậy điểm ArcGIS bị loại, giữ OSM, nhưng toạ độ vẫn chưa có nguồn độc lập thứ hai đạt độ chính xác 500m. Năm 1959 và tên tượng chỉ có S2 ghi nguyên văn; không tìm được nguồn độc lập thứ hai cho ngày 08/12/1959. |
| Hình ảnh | 4/5 | Cả ba ảnh trùng từng byte với bản do Flickr phục vụ (_k.jpg và _b.jpg). Trang gốc còn sống, EXIF ghi ngày chụp 21/08/2010 và 06/06/2015, tức là trước thời ảnh tạo sinh. check-image.mjs không thấy dấu hiệu AI. Ảnh đúng nhà thờ, tháp chuông và phế tích Hòn Chông, khớp với banner giáo phận 2025. Trừ 1 điểm vì không có ảnh chụp rõ pho tượng, và vì chú thích ảnh toàn cảnh 2010 ghi 'phía xa là đài Đức Mẹ' mà chưa kiểm được trên ảnh. |
| Phân định sự thật / truyền tụng | 4/5 | historicalFact chỉ gồm những điều S2 và các bài tin ghi lại; 'ông Ngô' được giữ đúng nguyên văn; thuyết Khmer Đỏ 1978 và lời kể 'bị bom' được đặt trong oralTradition, có ghi rõ người kể, và có đối chiếu với lược sử. Trừ 1 điểm vì chuyện 'cứu ngư dân' dựa trên một video mang dấu hiệu AI mà vẫn được gọi là 'tương truyền trong giới hành hương'. |
| Giọng văn & trung lập | 5/5 | Giọng trung lập, kính trọng. Chuyện Khmer Đỏ viết trung tính, không thêm số liệu. Không chép những câu mang tính tụng ca chính trị có trong S2 (ví dụ đoạn ca ngợi 'linh mục yêu nước'). Phần năm 1959 chỉ mô tả sự kiện, không bình luận về Đệ nhất Cộng hòa. |
| Tính kỹ thuật | 5/5 | validate-record.mjs --allow-existing-id: 'DAT toan bo rang buoc bat buoc', không có cảnh báo. format-report --check hợp lệ. constellationRole giữ nguyên v4 NAT-15, id và name không đổi. |
| Sức hấp dẫn & chiều sâu tư liệu | 4/5 | Quét rộng: Flickr (12 ảnh đúng địa điểm), trang giáo phận, melavang, báo mạng, YouTube, Facebook, Commons. Có 4 chuyện kể, 17 ảnh ứng viên, 7 manh mối cho lượt sau, và chuỗi lịch sử phu đồn điền → bỏ hoang → phục hồi có chiều sâu. Chưa có lời kể trực tiếp của người địa phương. |


**Tổng: 32/40.**

## 2. Kiểm nguồn dẫn

| Mã | URL | Trạng thái | Chứa luận điểm? | Kiểm lại bằng | Ghi chú |
|---|---|---|---|---|---|
| S1 | [liên kết](https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-2026.html) | còn sống | có | — | meta description: 'Thánh lễ được Đức Giám mục cử hành lúc 8g30 ngày 01/01/2026 tại nhà thờ giáo xứ Hòn Chông, Kiên Lương'. Ảnh giới thiệu 1920x1080 trùng từng byte với anh/honchong-ungvien-banner-giaophan-2026.jpg, có ghi 'Do Đức Cha Giuse Trần Văn Toản Giám mục Giáo phận (chủ sự)', vòng cung chữ xanh – đỏ, bậc cấp đỏ. |
| S2 | [liên kết](https://trancaolan76.violet.vn/entry/nha-tho-giao-xu-hon-chong-9524201.html) | còn sống | có | — | Đọc toàn văn và đối chiếu từng câu. Khớp gần hết; ba chỗ lệch câu chữ ghi trong claimChecks. Bản chép lại đăng 20/08/2013, ghi 'Nguồn: Trang Web Giáo Phận Long Xuyên', ký 'LM Chánh Sở Nguyễn Minh Chu'. Tier B chấp nhận được với điều kiện ghi rõ là bản chép lại, như tiêu đề nguồn đã ghi. |
| S3 | [liên kết](https://melavang.info/hanh-huong-kinh-duc-me-tai-hon-chong/) | còn sống | có | — | Nguyên văn: 'Ngày 01.01.2013 ... có trên 5.000 người ... bổn mạng Giáo Phận và bổn mạng giáo xứ Hòn Chông'; 'Đức Cha làm phép diện tích và viên đá đầu tiên để xây dựng nhà thờ'; 'công bố sắc lệnh thành lập giáo họ Sơn Hải (Hòn Heo)'. |
| S4 | [liên kết](https://melavang.info/hanh-huong-duc-me-hon-chong/) | còn sống | có | — | Nguyên văn: 'hơn 4.000 người ... tước hiệu Nữ Vương Hòa Bình'; 'Cha Tổng Đại diện Phêrô Lê Văn Kim thay mặt Đức Giám Mục'; 'công bố văn thư Thành lập Giáo Hạt Hà Tiên'; 'Ngày lễ Đức Mẹ Nữ Vương Hòa Bình đầu năm là Lễ Bổn Mạng của Giáo phận Long Xuyên'. Trang có ghi dẫn gplongxuyen.net. Ảnh 800x600 cho thấy tượng áo trắng, áo choàng xanh nhạt, hào quang, bệ vuông có ô hình thoi, khối tường tam giác và vòng cung chữ, khớp với mô tả trong architect. |
| S5 | [liên kết](https://www.openstreetmap.org/node/2331791879) | còn sống | có | — | API OSM: node 2331791879 'Nhà thờ Hòn Chông', lat 10.1582055, lon 104.6112725, version 2, sửa lần cuối 2025-01-04. Nominatim trả địa chỉ 'Đường tỉnh 971, Hòn Chông, Xã Kiên Lương, Tỉnh An Giang'. |
| S6 | [liên kết](https://vi.wikipedia.org/wiki/Phaol%C3%B4_Nguy%E1%BB%85n_V%C4%83n_B%C3%ACnh) | còn sống | có | — | Chức vụ trong giai đoạn 20/9/1955 – 24/11/1960 là 'Đại diện Tông tòa Địa phận Cần Thơ'. Hồ sơ viết 'Giám mục Cần Thơ' là chưa chính xác về danh xưng, cần sửa. |
| S7 | [liên kết](https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-nam-2025.html) | còn sống | có | — | meta description: 'Thánh lễ được Đức Giám mục giáo phận cử hành lúc 9g00 ngày 01/01/2025 tại nhà thờ giáo xứ Hòn Chông, giáo hạt Hà Tiên'. Ảnh giới thiệu trùng từng byte với honchong-ungvien-banner-giaophan-2025.jpg: nhà thờ đá có tháp chuông, bậc cấp, tảng đá khắc 'Giáo xứ Hòn Chông', dãy nhà mái đỏ bên cạnh. |
| S8 | [liên kết](https://vi.wikipedia.org/wiki/Gi%C3%A1o_ph%E1%BA%ADn_Long_Xuy%C3%AAn) | còn sống | có | — | Thành lập 24/11/1960. Hồ sơ ghi 'Bài không nhắc Hòn Chông' là sai: bài có liệt kê 'Trung tâm hành hương Đức Mẹ Hòn Chông' và 'Họ đạo Hòn Chông - Xã Kiên Lương, tỉnh An Giang'. Sai theo hướng có lợi, vì bài xác nhận thêm giáo phận. |
| S9 | [liên kết](https://vi.wikipedia.org/wiki/Ph%C3%AAr%C3%B4_V%C3%B5_Th%C3%A0nh_Trinh) | còn sống | có | — | 'Tháng 09 năm 1946, ông được phong linh mục tại Cần Thơ'; 'Tháng 10 năm 1946, ông làm Phó xứ ở các họ đạo Hòn Chông, Rẫy Mới...'; mất 21/8/1991 tại Chợ Rẫy (S2 ghi Thống Nhất). Hồ sơ đã ghi nhận mâu thuẫn này và không đưa nơi mất vào bản ghi. |
| S10 | [liên kết](https://vi.wikipedia.org/wiki/Ki%C3%AAn_L%C6%B0%C6%A1ng_(x%C3%A3)) | còn sống | có | — | Nghị quyết 1654/NQ-UBTVQH15 lập xã Kiên Lương (An Giang) từ thị trấn Kiên Lương, xã Bình An, xã Bình Trị; trong danh sách ấp có Hòn Chông. |
| S11 | [liên kết](https://baoangiang.com.vn/tham-tang-qua-chuc-sac-tieu-bieu-tai-hai-xa-hon-dat-va-kien-luong-dip-le-phuc-sinh-2026-a481107.html) | proxy chặn | có | curl (lần gọi thứ hai, qua proxy của phiên) | check-sources báo 403 'Cloud WAF', log proxy ghi connect_rejected. Gọi lại thì HTTP 200, trang có câu: 'Linh mục Nguyễn Công Chính, Chánh xứ Giáo xứ Hòn Chông (xã Kiên Lương)', cùng Giáo hạt Hà Tiên. Không nằm trong record. |
| S12 | [liên kết](https://kienthuc.net.vn/loat-nha-tho-co-tro-thanh-chung-tich-chien-tranh-o-viet-nam-post958314.html) | còn sống | có | — | Người khảo cứu ghi là chưa đọc được nguyên văn. Tôi đã đọc được (trang nén gzip): 'Năm 1978, nhà thờ đã bị quân Pol Pot phá hủy sau khi tràn qua biên giới Việt Nam. Hàng chục giáo dân đã thiệt mạng trong biến cố này.'; 'nhiều bức tường đổ nát và tòa tháp chuông còn tương đối nguyên vẹn'. |
| S13 | [liên kết](https://redsvn.net/chum-anh-nha-tho-da-hon-chong-mot-chung-tich-ve-toi-ac-khmer-do/) | còn sống | có | — | 'Năm 1978, nhà thờ đã bị quân Khmer Đỏ phá hủy ... Hàng chục giáo dân đã thiệt mạng'. Cùng chuỗi nội dung với S12. |
| S14 | [liên kết](https://www.flickr.com/photos/131585815@N04/18694918341/) | còn sống | có | — | Tiêu đề '2015 06 11_104 Nhà Thờ Hon Chong. Kiên Giang. VietNam', dateTaken 2015-06-06, username phongtruongan, license 0 (All rights reserved). |
| S15 | [liên kết](https://www.flickr.com/photos/84012769@N00/4972512149/) | còn sống | có | — | 'Nhà thờ Hòn Chông', dateTaken 2010-08-21 15:47, nguyenhuulongtri, All rights reserved. |
| S16 | [liên kết](https://www.flickr.com/photos/84012769@N00/5003352243/) | còn sống | có | — | 'Nhà thờ Hòn Chông - góc chụp từ tháp chuông', dateTaken 2010-08-21 15:38, All rights reserved. |
| S17 | [liên kết](https://www.flickr.com/photos/hieunghiafoto/50631507547/) | còn sống | có | — | 'Church Hon Chong - VietNam', mô tả 'Church Hòn Chông - Kiên Lương - Kiên Giang', dateTaken 2020-11-05. Nhà thờ đã xây lại thì được banner S7 (2025) xác nhận độc lập. |
| S18 | [liên kết](https://www.flickr.com/photos/caoanhhoa/2502578440/) | còn sống | có | — | Nguyên văn og:description: 'The church has been bombed during the war and has been kept with as-is status.' dateTaken 2004-03-28. |
| S19 | [liên kết](https://www.youtube.com/watch?v=E4YPowcAbTA) | chuyển hướng | **KHÔNG** | YouTube oEmbed (curl) + tải ảnh thu nhỏ hqdefault.jpg | Trang video chuyển hướng sang google.com/sorry (429, Google chặn bot, không phải video chết). oEmbed xác nhận video có thật, tựa 'Đức Mẹ Hòn Chông – Phép Lạ Cứu Ngư Dân Phú Quốc', kênh 'TIẾNG GỌI ĐỨC TIN'. Ảnh thu nhỏ có dấu hiệu rõ của ảnh minh hoạ tạo sinh: Đức Mẹ phát sáng hiện trên đỉnh đá giữa biển, mấy ngư dân mặt kiểu minh hoạ nhìn lên, ánh sáng và sóng dàn dựng. Nhiều khả năng đây là kênh sản xuất chuyện kể tổng hợp. Nguồn này KHÔNG chứa luận điểm 'tương truyền trong giới hành hương, Đức Mẹ Hòn Chông là Đấng che chở người đi biển'; nó chỉ chứng minh có một video mang tựa đó. |
| S20 | [liên kết](https://api.opentopodata.org/v1/srtm30m?locations=10.1582,104.6113) | còn sống | có | — | JSON: elevation 11.0, dataset srtm30m. |


1 nguồn bị chính sách egress của phiên làm việc chặn, không phải nguồn chết. Các nguồn này đã được kiểm lại bằng công cụ ghi ở cột "Kiểm lại bằng".

### Đối chiếu luận điểm

| Luận điểm | Nguồn | Kết luận | Ghi chú |
|---|---|---|---|
| Tên 'Tượng Đài Đức Mẹ Nữ Vương Hòa Bình' và bỏ chữ 'Đền Thánh' khỏi title | [S2] [S3] [S4] | Đạt | S2: 'Tượng Đài Đức Mẹ Nữ Vương Hoà Bình', 'Một Đài Đức Mẹ Nữ Vương Hoà Bình'. Không nguồn nào gọi là 'Đền Thánh'. Thư mục vụ HĐGM 2011 (crossCheck) xác nhận Nữ Vương Hòa Bình là bổn mạng giáo phận. |
| Đặt Tượng Đài Đức Mẹ Nữ Vương Hòa Bình ngày 08/12/1959, 'do Đức Cha Phaolô Bình và ông Ngô hiện diện', thời Lm Phan Xuân Trọng (1958–1962) | [S2] | Đạt | Khớp nguyên văn. Chỉ một nguồn (bản chép lại); tìm độc lập không ra nguồn thứ hai. year giữ nguyên như bản ghi cũ. |
| Đức Cha Phaolô Nguyễn Văn Bình 'khi ấy là Giám mục Cần Thơ' | [S6] | Sửa câu chữ | Năm 1959 ngài là Giám mục Đại diện Tông tòa Cần Thơ; giáo phận Cần Thơ chỉ được lập khi thiết lập hàng giáo phẩm ngày 24/11/1960. |
| Lm Merdrignac (MEP), cha sở Đất Hứa, từ 1931; 3.000 phu đồn điền Phú Quốc gốc Nam Định, Ninh Bình, Thái Bình sau khủng hoảng 1929; năm 1932 nhận đất đồn điền tiêu ở Hòn Chông | [S2] | Đạt | Khớp nguyên văn, có ghi là dẫn lại tài liệu của Hội Thừa sai. |
| Nhà thờ đá khởi công 1936, khánh thành 1940; vật liệu đá, vôi, cát, mủ ô dước; xi măng chỉ dùng cho ô vòm, sàn hát, cầu thang, trét mạch | [S2] [S12] [S13] | Đạt | — |
| Lm Võ Thành Trinh coi sóc 1946–1953, vừa thụ phong tại Cần Thơ | [S2] [S9] | Đạt | — |
| Khoảng 1964–1965 giáo xứ bỏ hoang, Lm Lương Công Đại rút về Kiên Lương, giáo dân ra hải đảo; sau 1975 còn nhà thờ đổ nát và đài Đức Mẹ giữa lùm cây | [S2] | Đạt | S2 có cả hai mốc 1964 và 1965; viết 'khoảng 1964–1965' là đúng. |
| Ngày 19/04/1991 UBND tỉnh Kiên Giang 'ra thông báo số 29/TB-UB' | [S2] | Sửa câu chữ | Nguyên văn: 'Uỷ ban Nhân dân Tỉnh Kiên Giang ký quyết định số 29/TB – UB'. |
| 25/10/1991 Ban Tôn giáo chấp thuận Lm Nguyễn Minh Chu; 01/12/1991 phát quang khu nhà thờ và Đài Đức Mẹ; 31/08/1993 nhượng lại 4.150 m² đất có Đài Đức Mẹ | [S2] | Đạt | — |
| Điểm trường 1997, xe đưa đón 1998, 'trường mầm non do Tu hội Nữ Tử Bác Ái Vinh Sơn phụ trách từ tháng 10/2002' | [S2] | Sửa câu chữ | S2 ghi: trường Mầm non xây năm 2002; Tu hội Nữ Tử Bác Ái có mặt từ tháng 10/2002; nhà trẻ được phép hoạt động từ 01/12/2003. Câu hiện tại gộp hai mốc làm một. |
| 01/01/2012 công bố thành lập Giáo hạt Hà Tiên tại cuộc hành hương; hơn 4.000 người; lễ Nữ Vương Hòa Bình đầu năm là lễ bổn mạng giáo phận | [S4] | Đạt | — |
| 01/01/2013 trên 5.000 người; làm phép viên đá đầu tiên xây dựng lại nhà thờ; lập giáo họ Sơn Hải – Hòn Heo | [S3] | Đạt | — |
| Thánh lễ hành hương 01/01/2025 và 01/01/2026 do Đức Giám mục giáo phận chủ sự | [S1] [S7] | Đạt | — |
| Từ 01/7/2025 Hòn Chông thuộc xã Kiên Lương, tỉnh An Giang; nhà thờ ven ĐT971 | [S10] [S5] [S11] | Đạt | — |
| Toạ độ 10.1582, 104.6113 (giữ nguyên) | [S5] | Đạt | Điểm OSM nằm trong khu dân cư ven ĐT971 trên ảnh vệ tinh Esri. Điểm do ArcGIS trả về, lệch 1,07 km, rơi vào rừng nên bị loại. Chưa có nguồn thứ hai độc lập để xác nhận ở độ chính xác 500m. |
| Độ cao khoảng 10m (SRTM 11 m) | [S20] | Đạt | — |
| Mô tả tượng (áo trắng, áo choàng xanh nhạt, hào quang, bệ vuông ô hình thoi, tường tam giác, vòng cung chữ) và hiện trạng vòng cung chữ xanh – đỏ, bậc cấp đỏ 2025–2026 | [S4] [S1] [S7] | Đạt | Tự xem ảnh S4 (800x600) và hai banner S1, S7: khớp. |
| Phế tích không mái, tháp chuông còn đứng (2010); nhà thờ đã xây lại (2020, 2025) | [S15] [S16] [S17] [S7] | Đạt | — |
| Tương truyền trong giới hành hương, Đức Mẹ Hòn Chông là Đấng che chở người đi biển; video kể ngư dân Phú Quốc được cứu | [S19] | Bỏ | Không có ai kể chuyện này ngoài tựa một video mà nội dung không xem được, còn ảnh thu nhỏ mang dấu hiệu AI. Không có bằng chứng về truyền tụng trong cộng đồng. Bỏ hẳn cho đến khi có lời kể đọc lại được. |
| Báo mạng viết nhà thờ bị Khmer Đỏ / Pol Pot phá năm 1978, hàng chục giáo dân thiệt mạng | [S12] [S13] | Chuyển sang truyền tụng | Đã đọc được nguyên văn cả hai nguồn. Lược sử giáo xứ S2 không nhắc chuyện này, cũng không bác bỏ. Giữ ở oralTradition và ghi rõ là báo mạng viết. |
| Chú thích ảnh 2004: nhà thờ bị bom đạn chiến tranh, giữ nguyên hiện trạng | [S18] | Chuyển sang truyền tụng | — |
| Tên gọi dân gian 'nhà thờ đổ' | [S15] [S16] [S2] | Chuyển sang truyền tụng | Tên 'Nhà thờ đổ - Hòn Chông - Hà Tiên' là tựa album Flickr theo hồ sơ; phần nền (phế tích, đài Đức Mẹ) có trong S2. |
| Chú thích ảnh toàn cảnh 2010: 'phía xa là đài Đức Mẹ Nữ Vương Hòa Bình' | [S15] | Sửa câu chữ | Trang Flickr không ghi chi tiết này. Trên ảnh 1024x610 chỉ thấy một vệt trắng nhỏ ở xa, không đủ để nhận ra đài Đức Mẹ (đài năm 2012 có khối tường tam giác màu hồng đỏ, rất lớn). Bỏ cụm này khỏi chú thích. |


3 luận điểm không kiểm chứng được như sự thật lịch sử nhưng **không bị bỏ**: chuyển sang `oralTradition` / `folklore` kèm nhãn "tương truyền", đúng nguyên tắc giữ lại tư liệu truyền tụng thay vì xoá trắng.

### Kiểm chuyện kể & giai thoại

Chuyện kể không bị chấm theo chuẩn sự thật lịch sử. Chỉ kiểm ba điều: có nguồn đọc lại được không, có bị nguồn nào bác bỏ không, và có được gắn nhãn truyền tụng không.

| Chuyện kể | Độ xác thực | Có gắn nhãn truyền tụng | Kết luận | Ghi chú |
|---|---|---|---|---|
| Đức Mẹ Hòn Chông cứu ngư dân Phú Quốc | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | có | LOẠI | Không bị nguồn A/B nào bác bỏ, nên không đánh dabacbo. Loại vì nguồn duy nhất (S19) không đọc lại được nội dung, và ảnh thu nhỏ có dấu hiệu rõ của ảnh do AI tạo, điều mà chính người khảo cứu đã dặn phải kiểm ('Nếu video dùng hình/giọng AI thì chỉ giữ nếu có nguồn khác'). Không có nguồn nào khác. Câu 'Tương truyền trong giới hành hương...' gán cho cộng đồng một niềm tin mà không nguồn nào ghi nhận. Lượt sau có thể đưa lại nếu tìm được lời kể thật của ngư dân hoặc giáo dân. |
| Nhà thờ đá bị Khmer Đỏ phá năm 1978 | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | có | DUYỆT | Đã đọc nguyên văn S12 ('quân Pol Pot') và S13 ('quân Khmer Đỏ'). Lược sử S2 không nhắc, cũng không bác bỏ. Bản oralTradition viết 'Một số bài báo mạng ... thì viết rằng' và có đối chiếu với lược sử, viết trung tính. Đạt. |
| Nhà thờ bị bom đạn chiến tranh phá, giữ nguyên hiện trạng | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | có | DUYỆT | Chú thích Flickr S18 khớp nguyên văn. Bản oralTradition ghi rõ đây là điều người chụp ảnh năm 2004 'ghi lại điều nghe được tại chỗ'. |
| Cái tên dân gian "nhà thờ đổ" | có nguồn A/B đối chiếu phần nền | có | DUYỆT | Phần nền có trong S2; tên gọi dựa trên tựa ảnh Flickr, và bản oralTradition viết 'người đi đường và khách chụp ảnh quen gọi'. |


### Kiểm chéo độc lập

Nguồn do người kiểm chứng tự tìm, không lấy từ báo cáo khảo cứu.

| Nguồn | URL | Xác nhận / bác bỏ điều gì |
|---|---|---|
| ArcGIS World Geocoder – 'Nhà Thờ Hòn Chông' | [liên kết](https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?SingleLine=Nh%C3%A0%20th%E1%BB%9D%20H%C3%B2n%20Ch%C3%B4ng&f=json) | Trả 10.148606, 104.611938 (Type Church, 'Đường Tỉnh Lộ 11, Kiên Lương, An Giang'), lệch khoảng 1,07 km về phía nam so với OSM. Ảnh vệ tinh Esri World Imagery z18 tại điểm này chỉ có rừng và đường, không có công trình nào. Kết luận: điểm ArcGIS là POI sai, không dùng để bác toạ độ OSM. |
| Esri World Imagery z18 tại điểm OSM (tile 18/123635/207247 và lân cận) | [liên kết](https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/18/123635/207247) | Điểm OSM rơi vào khu dân cư ven đường lớn, có các mái đỏ và công trình sát chân đồi rừng. Điều này khớp với banner S7 (nhà thờ đá sát đồi, dãy nhà mái đỏ bên cạnh) và với lược sử ghi 'chân núi'. Z19 không có dữ liệu nên không nhận diện được chính xác mái nhà thờ. |
| Photon (komoot) – 'Hòn Chông' | [liên kết](https://photon.komoot.io/api/?q=H%C3%B2n%20Ch%C3%B4ng%20church&limit=3) | Điểm làng Hòn Chông ở 10.1626451, 104.6143368, xã Kiên Lương, An Giang, cách điểm nhà thờ khoảng 580 m. Xác nhận vùng và địa giới 2025; không phải toạ độ riêng của nhà thờ. |
| Thư Mục vụ tháng 1 & 2 năm 2011 của Đức Giám mục giáo phận Long Xuyên – HĐGM Việt Nam | [liên kết](https://hdgmvietnam.com/chi-tiet/thu-muc-vu-thang-1-2-nam-2011-cua-duc-giam-muc-giao-phan-long-xuyen-17757) | Xác nhận độc lập Mẹ Maria Nữ Vương Hòa Bình là bổn mạng Giáo phận Long Xuyên ('phó thác giáo phận cho tình mẫu tử của Mẹ Maria Nữ Vương Hoà Bình'). Thư không nhắc Hòn Chông. |
| Giáo phận Long Xuyên – Wikipedia (mục danh sách trung tâm hành hương và họ đạo) | [liên kết](https://vi.wikipedia.org/wiki/Gi%C3%A1o_ph%E1%BA%ADn_Long_Xuy%C3%AAn) | Có 'Trung tâm hành hương Đức Mẹ Hòn Chông' và 'Họ đạo Hòn Chông - Xã Kiên Lương, tỉnh An Giang'. Xác nhận giáo phận, tên gọi hành hương và địa giới mới. |
| Báo An Giang – thăm chức sắc dịp Phục sinh 2026 | [liên kết](https://baoangiang.com.vn/tham-tang-qua-chuc-sac-tieu-bieu-tai-hai-xa-hon-dat-va-kien-luong-dip-le-phuc-sinh-2026-a481107.html) | Đọc lại được: 'Linh mục Nguyễn Công Chính, Chánh xứ Giáo xứ Hòn Chông (xã Kiên Lương)' và 'Giáo hạt Hà Tiên'. Xác nhận địa giới và giáo hạt. |
| Tìm nguồn thứ hai cho ngày 08/12/1959 (WebSearch '"Hòn Chông" 1959 Đức Mẹ', '"Hòn Chông" "08/12/1959"'; web.archive.org của giaoxugiaohovietnam.com) | [liên kết](https://archive.org/wayback/available?url=giaoxugiaohovietnam.com/LongXuyen/01-Giao-Phan-LongXuyen-HonChong.htm) | Không tìm được nguồn thứ hai; Wayback availability không có bản lưu, WebFetch không vào được web.archive.org. Bối cảnh: ngày 08/12/1959 cũng là ngày dựng tượng Đức Mẹ Tà Pao, trong đợt kỷ niệm 100 năm Lộ Đức, nên mốc này hợp lý nhưng vẫn chỉ có S2 ghi. |
| YouTube oEmbed – video E4YPowcAbTA và ảnh thu nhỏ | [liên kết](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=E4YPowcAbTA&format=json) | Video có thật, kênh 'TIẾNG GỌI ĐỨC TIN'. Ảnh thu nhỏ (i.ytimg.com/vi/E4YPowcAbTA/hqdefault.jpg) mang phong cách minh hoạ tạo sinh: hào quang phát sáng, gương mặt ngư dân kiểu render. HĐGM Việt Nam cũng từng đăng bài về video tạo bằng AI thao túng tín hữu (hdgmvietnam.com). Không dùng được làm nguồn cho truyền tụng. |


## 3. Kiểm hình ảnh

| File | Nguồn công khai xác minh | Giấy phép (nếu biết) | Đúng linh địa | Dấu hiệu AI | Kết luận |
|---|---|---|---|---|---|
| honchong-thap-chuong-2015.jpg | có | All rights reserved (Flickr, license 0) | có | không thấy | DUYỆT |
| honchong-phe-tich-toan-canh-2010.jpg | có | All rights reserved (Flickr, license 0) | có | không thấy | DUYỆT |
| honchong-phe-tich-tu-thap-chuong-2010.jpg | có | All rights reserved (Flickr, license 0) | có | không thấy | DUYỆT |


## 4. Kiểm kỹ thuật & ảnh hưởng hệ thống

| Mục | Ảnh hưởng |
|---|---|
| Số lượng linh địa | không đổi (cập nhật bản ghi honchong đã có) |
| CONSTELLATION_VERSIONS | không đổi (honchong vẫn là node cuối V4, constellationRole giữ nguyên) |
| Nguồn trong bản ghi | 4 → 6 (thêm S4 melavang 2012 và S10 Wikipedia xã Kiên Lương; các nguồn có tier) |
| Số assertion npm test | có thể tăng theo số nguồn và ảnh; chạy lại npm test để xác nhận |
| Ảnh thực địa | Lần đầu có realImage (tháp chuông 2015) và 2 ảnh phụ (phế tích 2010); vẫn chưa có ảnh chụp rõ pho tượng |
| Tài liệu phải cập nhật | docs/marian-sites-missing-info.md (honchong đã có ảnh thực địa; còn thiếu ảnh tượng), docs/project-overview-pdr.md (dòng 67: Hòn Chông không còn 'chỉ có đúng hai nguồn') |


```text
$ node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/honchong/khao-cuu.json --allow-existing-id
KIEM TRA: honchong (docs/khao-cuu/honchong/khao-cuu.json)

=> DAT toan bo rang buoc bat buoc. Sau khi chen vao src/data/statues.js, chay "npm test" de xac nhan lai.
```

## 5. Vấn đề phát hiện

| Mức | Vấn đề | Vị trí | Đề nghị xử lý |
|---|---|---|---|
| Nặng | Câu mở đầu oralTradition khẳng định có truyền tụng 'trong giới hành hương' về Đức Mẹ che chở người đi biển, dựa duy nhất vào tựa một video YouTube có ảnh thu nhỏ mang dấu hiệu AI. Nguồn không chứa luận điểm này. | oralTradition, câu 1; folklore 'Đức Mẹ Hòn Chông cứu ngư dân Phú Quốc'; nguồn S19 | Xoá câu 1, đổi câu 2 để đoạn văn vẫn mở đầu bằng nhãn truyền tụng (xem conditions). |
| Nhẹ | Ba chỗ lệch câu chữ so với nguồn trong historicalFact: 'thông báo' thay cho 'quyết định' số 29/TB-UB; gộp mốc trường mầm non với mốc nữ tu đến (10/2002); 'Giám mục Cần Thơ' thay cho 'Giám mục Đại diện Tông tòa Cần Thơ'. | historicalFact | Thay đúng từng cụm như conditions 1–3. |
| Nhẹ | Chú thích ảnh toàn cảnh 2010 nói 'phía xa là đài Đức Mẹ' nhưng chưa kiểm được trên ảnh hay trên trang gốc. | galleryImages[0].caption | Bỏ cụm này. |
| Nhẹ | Toạ độ và ngày 08/12/1959 mỗi thứ chỉ có một nguồn (OSM; S2). Nguồn đối chiếu toạ độ thứ hai (ArcGIS) lệch 1,07 km nhưng bị ảnh vệ tinh bác. Hai trường này giữ nguyên như bản ghi hiện có, không phải thay đổi mới. | lat, lng, year | Không chặn. Lượt khảo cứu sau nên tìm toạ độ bệ tượng (Google Maps, ảnh có geotag) và bản gốc lược sử. |
| Nhẹ | Hồ sơ ghi S8 'không nhắc Hòn Chông', trong khi bài có liệt kê 'Trung tâm hành hương Đức Mẹ Hòn Chông' và 'Họ đạo Hòn Chông'. Hồ sơ cũng ghi S12 'chưa đọc được nguyên văn', trong khi thực tế đọc được. | sources S8, S12 (supports) | Chỉ là ghi chú nội bộ khảo cứu, không ảnh hưởng dữ liệu lên website. |
| Nhẹ | Không có ảnh nào chụp rõ pho tượng Đức Mẹ đạt 1000px. Ảnh chính là tháp chuông nhà thờ trong khuôn viên. | realImage | Chấp nhận. Lượt sau tìm ảnh tượng (manh mối Facebook giáo xứ, hieunghiafoto). |


## 6. Phần đã duyệt

Đây là phạm vi chính xác `marian-publish` được phép đưa lên website.

- [x] `title`
- [x] `year`
- [x] `lat`
- [x] `lng`
- [x] `elevation`
- [x] `location`
- [x] `historicalFact`
- [x] `oralTradition`
- [x] `architect`
- [x] `significance`
- [x] `realImage`
- [x] `realImageCaption`
- [x] `galleryImages`
- [x] `sources`
- [x] Nguồn đưa vào dữ liệu: [S1], [S2], [S3], [S4], [S7], [S10]
- [x] Ảnh: honchong-thap-chuong-2015.jpg, honchong-phe-tich-toan-canh-2010.jpg, honchong-phe-tich-tu-thap-chuong-2010.jpg
- [x] Chuyện kể được phép viết vào `oralTradition`: Nhà thờ đá bị Khmer Đỏ phá năm 1978; Nhà thờ bị bom đạn chiến tranh phá, giữ nguyên hiện trạng; Cái tên dân gian "nhà thờ đổ"
- [ ] Thay đổi chòm sao (`CONSTELLATION_VERSIONS`)

---

_Báo cáo sinh tự động từ hồ sơ JSON bằng `format-audit.mjs`. Sửa nội dung thì sửa file JSON rồi chạy lại lệnh, đừng sửa trực tiếp vào file markdown._
