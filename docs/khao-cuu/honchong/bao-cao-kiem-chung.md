# Báo cáo kiểm chứng: Đức Mẹ Hòn Chông (Kiên Giang)

## Kết luận

> **ÁP DỤNG CÓ ĐIỀU KIỆN** — 35/40
>
> Vòng 2: cả 5 điều kiện văn bản của vòng 1 đã được áp dụng đúng nguyên văn, lịch sử khớp từng câu với lược sử giáo xứ (S2) và được hồ sơ MEP của IRFA xác nhận độc lập phần gốc 3.000 giáo dân Phú Quốc – Đất Hứa – Hòn Chông. Ảnh chính mới (tượng Đức Mẹ, 800x600) trùng từng byte với ảnh trên trang nguồn S4, là ảnh chụp thật, đúng tượng Hòn Chông, và đạt ngưỡng 800px theo quyết định tạm thời của chủ dự án; ba ảnh phụ Flickr cũng trùng từng byte với bản gốc. Chỉ còn hai chỗ câu chữ nhỏ phải sửa: chú thích ảnh chính khẳng định ngày chụp và nguồn ảnh chắc hơn mức trang nguồn cho phép, và tên trang 'Kỷ yếu Mẹ La Vang' không đúng tên thật của melavang.info.

- **Hồ sơ khảo cứu đã kiểm**: `docs/khao-cuu/honchong/khao-cuu.json`
- **Người kiểm chứng**: Claude Opus 5.5 (phiên kiểm chứng độc lập vòng 2, 2026-09-24, marian-audit)
- **Ngày kiểm**: 2026-09-24
- **Cho phép triển khai**: có — `marian-publish` được chạy tiếp
- **Hồ sơ gốc**: `docs/khao-cuu/honchong/kiem-chung.json` (schema `ducme.kiem-chung/v1`)

### Điều kiện bắt buộc trước khi triển khai

`marian-publish` làm đúng danh sách này, không thêm không bớt.

1. realImageCaption: không dùng giá trị đề xuất trong hồ sơ khảo cứu; thay bằng đúng chuỗi sau: 'Tượng Đức Mẹ Nữ Vương Hòa Bình Hòn Chông và đoàn linh mục đồng tế, Giáo xứ Hòn Chông, Giáo phận Long Xuyên; ảnh đi kèm bài tin về thánh lễ hành hương ngày 01/01/2012 (Nguồn: trang Mẹ La Vang, melavang.info/hanh-huong-duc-me-hon-chong, bài ghi nguồn gplongxuyen.net; không rõ tác giả)'. Lý do: trang S4 không ghi ngày chụp hay nguồn riêng của ảnh, và tên trang là 'Mẹ La Vang', không phải 'Kỷ yếu Mẹ La Vang'.
2. architect: thay cụm '(theo ảnh đại lễ 01/01/2012 trên Kỷ yếu Mẹ La Vang)' bằng '(theo ảnh đi kèm bài tin đại lễ 01/01/2012 trên trang Mẹ La Vang, melavang.info)'. Phần còn lại của architect giữ nguyên văn như hồ sơ khảo cứu.
3. realImage: chép docs/khao-cuu/honchong/anh/honchong-ungvien-dai-me-2012-800px.jpg thành assets/real_photos/honchong.jpg (ảnh 800x600, dùng theo ngoại lệ 800px tạm thời của chủ dự án, chỉ cho honchong).
4. galleryImages: dùng đúng 3 phần tử và đúng thứ tự, đúng caption như giá trị đề xuất trong hồ sơ khảo cứu: honchong-2.jpg chép từ honchong-thap-chuong-2015.jpg; honchong-3.jpg chép từ honchong-phe-tich-toan-canh-2010.jpg; honchong-4.jpg chép từ honchong-phe-tich-tu-thap-chuong-2010.jpg.
5. Các trường title, year, lat, lng, elevation, location, historicalFact, oralTradition, significance, sources dùng đúng giá trị trong hồ sơ khảo cứu; không đổi id, name, region, diocese, diemStatue5, constellationRole. Không đưa S19 hay ý 'Đức Mẹ che chở người đi biển' vào bất kỳ trường nào.

## 1. Chấm điểm

| Trục | Điểm | Bằng chứng |
|---|---|---|
| Chất lượng nguồn | 4/5 | Tự mở lại 20/20 nguồn. Các nguồn cấp B còn mở và đúng nội dung: trang Giáo phận Long Xuyên (S1, S7), melavang.info (S3, S4), Wikipedia (S6, S8, S9, S10), OSM (S5), Báo An Giang (S11, lần sau mới vào được). Không có nguồn cấp A trong hồ sơ. S2 vẫn là bản chép lại trên trang cá nhân violet.vn (đăng 15:12 20/08/2013, ghi 'Nguồn: Trang Web Giáo Phận Long Xuyên', ký 'LM Chánh Sở Nguyễn Minh Chu'). |
| Truy vết luận điểm | 4/5 | Đối chiếu lại toàn bộ historicalFact với nguyên văn S2: mọi mốc đều khớp, gồm 3 chỗ đã sửa theo vòng 1 ('ký quyết định số 29/TB – UB'; 'trường Mầm non (2002)' tách khỏi mốc 'có mặt từ tháng 10/2002'; 'Đại diện Tông tòa Địa phận Cần Thơ' theo S6). oralTradition không còn câu nào dựa vào S19. Trừ 1 điểm vì chú thích ảnh chính khẳng định ảnh chụp 'trong thánh lễ 01/01/2012' và nguồn ảnh là gplongxuyen.net, trong khi S4 chỉ cho thấy đây là ảnh đại diện của bài tin 2012 và dòng '(Nguồn: gplongxuyen.net)' đặt dưới phần chữ. |
| Độ chính xác dữ liệu | 4/5 | Giáo phận xác nhận bởi S8 (có 'Trung tâm hành hương Đức Mẹ Hòn Chông', 'Họ đạo Hòn Chông - Xã Kiên Lương'), S1, S7, S11. Địa giới 2025 khớp S10 (ấp Hòn Chông thuộc xã Kiên Lương, NQ 1654/NQ-UBTVQH15). Toạ độ OSM 10.1582055/104.6112725: tự ghép ảnh vệ tinh Esri z18 quanh điểm, điểm rơi đúng một công trình lớn mái đỏ lùi sâu khỏi ĐT971, sát chân đồi rừng, khớp mô tả nhà thờ 'chân núi' và banner S7. ArcGIS chỉ trả điểm trọng tâm làng (10.16667/104.61667). Năm 1959 và ngày 08/12/1959 vẫn chỉ có S2 ghi; tìm độc lập không ra nguồn thứ hai (không đổi so với bản ghi hiện có). |
| Hình ảnh | 4/5 | 4/4 ảnh trùng từng byte với file do trang nguồn phục vụ (melavang leducme3resizean4.jpg; Flickr _k/_b). check-image --min-width=800: không lỗi chặn, không dấu hiệu AI. Ảnh chính là ảnh chụp thật pho tượng, có vòng cung chữ 'Nữ Vương ban sự bình an cầu cho chúng con' và bậc cấp đỏ giống banner giáo phận 2025–2026, nên đúng linh địa. Có cả ảnh phụ. Trừ 1 điểm vì ảnh chính chỉ 800px (được chấp nhận nhờ ngoại lệ tạm thời của người dùng) và chú thích ảnh chính phải sửa câu chữ. |
| Phân định sự thật / truyền tụng | 5/5 | historicalFact chỉ gồm điều S2 và các bài tin ghi, giữ nguyên chữ 'ông Ngô'. oralTradition mở đầu bằng 'Theo những lời kể lưu truyền', từng ý đều nêu người kể: du khách 2004 (S18), 'một số bài báo mạng' (S12, S13), người đi đường gọi 'nhà thờ đổ'; có đối chiếu với lược sử. Chuyện S19 đã rút khỏi mọi trường. |
| Giọng văn & trung lập | 5/5 | Trung lập, kính trọng. Chuyện Khmer Đỏ viết trung tính, không thêm số liệu ngoài nguồn. Không chép đoạn tụng ca 'linh mục yêu nước' của S2. Phần 1959 chỉ mô tả sự kiện, không bình luận chế độ. |
| Tính kỹ thuật | 5/5 | validate-record.mjs --allow-existing-id: 'DAT toan bo rang buoc bat buoc', không cảnh báo. format-report --check hợp lệ. id, name, region, diocese, constellationRole (v4 NAT-15) không đổi. |
| Sức hấp dẫn & chiều sâu tư liệu | 4/5 | Quét rộng (Flickr, trang giáo phận, melavang, báo mạng, YouTube, Facebook, Commons, archive). Có 3 chuyện kể dùng được, kho ảnh ứng viên, chuỗi lịch sử phu đồn điền → bỏ hoang → phục hồi, và lần đầu có ảnh tượng. Chưa có lời kể trực tiếp của người địa phương. |


**Tổng: 35/40.**

## 2. Kiểm nguồn dẫn

| Mã | URL | Trạng thái | Chứa luận điểm? | Kiểm lại bằng | Ghi chú |
|---|---|---|---|---|---|
| S1 | [liên kết](https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-2026.html) | còn sống | có | — | meta description: 'Thánh lễ được Đức Giám mục cử hành lúc 8g30 ngày 01/01/2026 tại nhà thờ giáo xứ Hòn Chông, Kiên Lương'. og:image trùng từng byte với anh/honchong-ungvien-banner-giaophan-2026.jpg; banner ghi 'Do Đức Cha Giuse Trần Văn Toản Giám mục Giáo phận (chủ sự)', có vòng cung chữ xanh – đỏ và bậc cấp đỏ. |
| S2 | [liên kết](https://trancaolan76.violet.vn/entry/nha-tho-giao-xu-hon-chong-9524201.html) | còn sống | có | curl (lần đầu bị ngắt kết nối, lần sau vào được) | Đọc toàn văn. Nguyên văn: 'Từ năm 1931 do Lm MEP Jean Marie Merdrignac, Cha Sở Xứ Đất Hứa'; 'biến cố đặt Tượng Đài Đức Mẹ Nữ Vương Hoà Bình do Đức Cha Phaolô Bình và ông Ngô hiện diện ngày 08/12/1959'; 'ký quyết định số 29/TB – UB'; '4.150 m2 đất vườn trên đó có Đài Đức Mẹ'; 'trường Mầm non (2002)'; 'có mặt từ tháng 10/2002'; 'ngôi nhà thờ đá đổ nát và đài Đức Mẹ lạnh lẽo đứng giữa lùm cây'. Bản chép lại 20/08/2013, ghi nguồn trang web Giáo phận Long Xuyên. |
| S3 | [liên kết](https://melavang.info/hanh-huong-kinh-duc-me-tai-hon-chong/) | còn sống | có | — | 'Ngày 01.01.2013 ... có trên 5.000 người ... bổn mạng Giáo Phận và bổn mạng giáo xứ Hòn Chông'; 'Đức Cha làm phép diện tích và viên đá đầu tiên để xây dựng nhà thờ'; 'công bố sắc lệnh thành lập giáo họ Sơn Hải (Hòn Heo)'. |
| S4 | [liên kết](https://melavang.info/hanh-huong-duc-me-hon-chong/) | còn sống | có | — | 'hơn 4.000 người ... tước hiệu Nữ Vương Hòa Bình'; 'công bố văn thư Thành lập Giáo Hạt Hà Tiên'; 'Ngày lễ Đức Mẹ Nữ Vương Hòa Bình đầu năm là Lễ Bổn Mạng của Giáo phận Long Xuyên'; cuối bài '(Nguồn: gplongxuyen.net)'; article:published_time 2013-11-11. Ảnh duy nhất là ảnh đại diện (td-post-featured-image) leducme3resizean4.jpg, title 'Đức Mẹ Hòn Chông', 800w là bản lớn nhất trong srcset, không có chú thích ngày chụp hay tác giả. og:site_name là 'Mẹ La Vang', trang chủ có title 'Đức Mẹ La Vang'; không thấy chữ 'Kỷ yếu' ở đâu. |
| S5 | [liên kết](https://www.openstreetmap.org/node/2331791879) | còn sống | có | — | Photon (dữ liệu OSM) trả node 2331791879 'Nhà thờ Hòn Chông', Đường tỉnh 971, Xã Kiên Lương, An Giang, 104.6112725/10.1582055. |
| S6 | [liên kết](https://vi.wikipedia.org/wiki/Phaol%C3%B4_Nguy%E1%BB%85n_V%C4%83n_B%C3%ACnh) | còn sống | có | — | Hộp thông tin: chức vụ 2 'Đại diện Tông tòa Địa phận Cần Thơ', bổ nhiệm 20/9/1955, hết nhiệm 24/11/1960. Khớp cụm 'Giám mục Đại diện Tông tòa Cần Thơ' đã sửa. Bài còn nhắc Giám mục Bình dự định xây nhà nghỉ linh mục ở Hòn Chông. |
| S7 | [liên kết](https://giaophanlongxuyen.org/tin-tuc/thanh-le-hanh-huong-duc-me-hon-chong-nam-2025.html) | còn sống | có | — | 'Thánh lễ được Đức Giám mục giáo phận cử hành lúc 9g00 ngày 01/01/2025 tại nhà thờ giáo xứ Hòn Chông, giáo hạt Hà Tiên'. og:image trùng từng byte với honchong-ungvien-banner-giaophan-2025.jpg (nhà thờ đá xây lại, tảng đá 'Giáo xứ Hòn Chông', ảnh nhỏ đài Đức Mẹ). |
| S8 | [liên kết](https://vi.wikipedia.org/wiki/Gi%C3%A1o_ph%E1%BA%ADn_Long_Xuy%C3%AAn) | còn sống | có | — | 'Thành lập 24 tháng 11 năm 1960'; 'Trung tâm hành hương Đức Mẹ Hòn Chông'; 'Họ đạo Hòn Chông - Xã Kiên Lương, tỉnh An Giang'. Ghi chú supports đã được đính chính theo vòng 1. |
| S9 | [liên kết](https://vi.wikipedia.org/wiki/Ph%C3%AAr%C3%B4_V%C3%B5_Th%C3%A0nh_Trinh) | còn sống | có | — | 'Tháng 09 năm 1946, ông được phong linh mục tại Cần Thơ'; 'Tháng 10 năm 1946, ông làm Phó xứ ở các họ đạo Hòn Chông, Rẫy Mới, Rạch Đông'. |
| S10 | [liên kết](https://vi.wikipedia.org/wiki/Ki%C3%AAn_L%C6%B0%C6%A1ng_(x%C3%A3)) | còn sống | có | — | Nghị quyết 1654/NQ-UBTVQH15; 18 ấp, có ấp Hòn Chông; trước đó xã Bình An có ấp Hòn Chông. |
| S11 | [liên kết](https://baoangiang.com.vn/tham-tang-qua-chuc-sac-tieu-bieu-tai-hai-xa-hon-dat-va-kien-luong-dip-le-phuc-sinh-2026-a481107.html) | proxy chặn | có | curl (lần thứ hai; lần đầu check-sources nhận trang 'Cloud WAF' 403, curl lần đầu bị proxy trả 502) | Lần gọi lại vào được (175 KB): 'Linh mục Nguyễn Công Chính, Chánh xứ Giáo xứ Hòn Chông (xã Kiên Lương)'. Không nằm trong record. |
| S12 | [liên kết](https://kienthuc.net.vn/loat-nha-tho-co-tro-thanh-chung-tich-chien-tranh-o-viet-nam-post958314.html) | còn sống | có | — | Quốc Lê, 21/12/2023: 'Năm 1978, nhà thờ đã bị quân Pol Pot phá hủy sau khi tràn qua biên giới Việt Nam. Hàng chục giáo dân đã thiệt mạng trong biến cố này.'; 'tòa tháp chuông còn tương đối nguyên vẹn'. |
| S13 | [liên kết](https://redsvn.net/chum-anh-nha-tho-da-hon-chong-mot-chung-tich-ve-toi-ac-khmer-do/) | còn sống | có | — | Đăng 10/01/2019, cuối bài 'Theo KIẾN THỨC': 'Năm 1978, nhà thờ đã bị quân Khmer Đỏ phá hủy ... Hàng chục giáo dân đã thiệt mạng'. Cùng chuỗi với S12. |
| S14 | [liên kết](https://www.flickr.com/photos/131585815@N04/18694918341/) | còn sống | có | — | dateTaken 2015-06-06 12:25:37, ownerNsid 131585815@N04, license 0 (All rights reserved). |
| S15 | [liên kết](https://www.flickr.com/photos/84012769@N00/4972512149/) | còn sống | có | — | 'Nhà thờ Hòn Chông', dateTaken 2010-08-21 15:47:51, license 0. |
| S16 | [liên kết](https://www.flickr.com/photos/84012769@N00/5003352243/) | còn sống | có | — | 'Nhà thờ Hòn Chông - góc chụp từ tháp chuông', dateTaken 2010-08-21 15:38:58, license 0. |
| S17 | [liên kết](https://www.flickr.com/photos/hieunghiafoto/50631507547/) | còn sống | có | — | 'Church Hon Chong - VietNam', dateTaken 2020-11-05 15:59:05. Việc nhà thờ đã xây lại được banner S7 xác nhận độc lập. |
| S18 | [liên kết](https://www.flickr.com/photos/caoanhhoa/2502578440/) | còn sống | có | — | Tiêu đề trang: 'Ruins of Hon Chong church \| The church has been bombed durin…', khớp chú thích được trích. |
| S19 | [liên kết](https://www.youtube.com/watch?v=E4YPowcAbTA) | chuyển hướng | **KHÔNG** | check-sources (chuyển sang google.com/sorry, 429) | Vẫn bị Google chặn bot. Hồ sơ đã rút S19 khỏi mọi trường đề xuất, chỉ còn ghi chú 'BỊ LOẠI' trong sources[] nội bộ và leads[]. Không nằm trong record, không được dùng. |
| S20 | [liên kết](https://api.opentopodata.org/v1/srtm30m?locations=10.1582,104.6113) | còn sống | có | — | JSON srtm30m, elevation 11 m. |


1 nguồn bị chính sách egress của phiên làm việc chặn, không phải nguồn chết. Các nguồn này đã được kiểm lại bằng công cụ ghi ở cột "Kiểm lại bằng".

### Đối chiếu luận điểm

| Luận điểm | Nguồn | Kết luận | Ghi chú |
|---|---|---|---|
| Tên 'Tượng Đài Đức Mẹ Nữ Vương Hòa Bình - Giáo xứ Hòn Chông', bỏ chữ 'Đền Thánh' | [S2] [S4] | Đạt | S2: 'Tượng Đài Đức Mẹ Nữ Vương Hoà Bình', 'Bổn mạng Nhà thờ: Đức Mẹ Nữ Vương Hoà Bình 01/01'. Không nguồn nào gọi là 'Đền Thánh'. |
| Lm MEP Jean-Marie Merdrignac, cha sở Đất Hứa, từ 1931; khoảng 3.000 giáo dân phu đồn điền Phú Quốc gốc Nam Định, Ninh Bình, Thái Bình sau khủng hoảng 1929; năm 1932 nhận đất đồn điền tiêu ở Hòn Chông | [S2] | Đạt | Khớp nguyên văn S2. Tự tìm được xác nhận độc lập từ hồ sơ MEP của IRFA (xem crossChecks): 'installer environ trois mille chrétiens' ở Phu-Quoc, công ty phá sản, giáo dân tái định cư thành 'Dat-Hua (la terre promise) et Hon-Chong'. |
| Nhà thờ đá khởi công 1936, khánh thành 1940, vật liệu đá, vôi, cát, mủ ô dước | [S2] [S12] | Đạt | — |
| Lm Võ Thành Trinh coi sóc 1946–1953, vừa thụ phong tại Cần Thơ | [S2] [S9] | Đạt | — |
| 08/12/1959 đặt Tượng Đài Đức Mẹ Nữ Vương Hòa Bình thời Lm Phan Xuân Trọng (1958–1962), có Đức Cha Phaolô Nguyễn Văn Bình, khi ấy là Giám mục Đại diện Tông tòa Cần Thơ, và 'ông Ngô' hiện diện | [S2] [S6] | Đạt | Khớp nguyên văn S2; danh xưng khớp S6 (đã sửa theo vòng 1). Ngày 08/12/1959 chỉ có S2. |
| Giáo phận Long Xuyên thành lập 24/11/1960 | [S8] | Đạt | — |
| Khoảng 1964–1965 bỏ hoang, Lm Lương Công Đại rút về Kiên Lương, giáo dân ra hải đảo; sau 1975 còn nhà thờ đổ nát và đài Đức Mẹ giữa lùm cây | [S2] | Đạt | — |
| 19/04/1991 UBND tỉnh Kiên Giang ký quyết định số 29/TB-UB; 25/10/1991 Ban Tôn giáo chấp thuận Lm Nguyễn Minh Chu; 01/12/1991 phát quang; 31/08/1993 nhận chuyển nhượng 4.150 m² có Đài Đức Mẹ | [S2] | Đạt | Điều kiện 1 vòng 1 đã áp dụng đúng. |
| Điểm trường 1997, xe đưa đón 1998, trường mầm non (2002) do các nữ tu Nữ Tử Bác Ái Vinh Sơn phụ trách; các nữ tu có mặt từ 10/2002 | [S2] | Đạt | Điều kiện 2 vòng 1 đã áp dụng đúng. |
| 01/01/2012 công bố thành lập Giáo hạt Hà Tiên; hơn 4.000 người; lễ bổn mạng giáo phận | [S4] | Đạt | — |
| 01/01/2013 trên 5.000 người; làm phép viên đá đầu tiên xây lại nhà thờ; giáo họ Sơn Hải – Hòn Heo | [S3] | Đạt | — |
| Thánh lễ hành hương 01/01/2025 và 01/01/2026 do Đức Giám mục giáo phận chủ sự | [S1] [S7] | Đạt | — |
| Từ 01/7/2025 Hòn Chông thuộc xã Kiên Lương, tỉnh An Giang; nhà thờ ven ĐT971 | [S10] [S5] [S11] | Đạt | — |
| Toạ độ 10.1582, 104.6113 (giữ nguyên) | [S5] | Đạt | Ảnh vệ tinh Esri z18 (tự ghép) cho thấy điểm nằm trên một công trình lớn mái đỏ lùi khỏi đường, sát chân đồi, phù hợp khuôn viên nhà thờ; tượng cùng khuôn viên. |
| Độ cao khoảng 10m (SRTM 11 m) | [S20] | Đạt | — |
| architect: mô tả tượng 'theo ảnh đại lễ 01/01/2012 trên Kỷ yếu Mẹ La Vang' | [S4] | Sửa câu chữ | Mô tả tượng khớp ảnh (tự xem). Nhưng trang tên là 'Mẹ La Vang' (og:site_name) / 'Đức Mẹ La Vang' (trang chủ), không có chữ 'Kỷ yếu'; và ảnh là ảnh đại diện của bài tin 2012, trang không ghi ngày chụp. Sửa câu chữ (xem conditions). |
| Vòng cung chữ xanh – đỏ, bậc cấp đỏ trong ảnh 2025–2026; phế tích 2010; nhà thờ xây lại 2020, 2025 | [S1] [S7] [S15] [S16] [S17] | Đạt | Tự xem hai banner và các ảnh Flickr: khớp. |
| realImageCaption: ảnh chụp 'trong thánh lễ hành hương ngày 01/01/2012', 'Nguồn: Giáo phận Long Xuyên – gplongxuyen.net, đăng lại trên Kỷ yếu Mẹ La Vang' | [S4] | Sửa câu chữ | S4 chỉ cho thấy ảnh là ảnh đại diện của bài tin về cuộc hành hương 01/01/2012 (đăng lại 11/11/2013), dòng '(Nguồn: gplongxuyen.net)' đứng dưới phần chữ, không gắn riêng cho ảnh; trang không ghi ngày chụp. Chi tiết nhỏ: bài nói 'số các linh mục hiện diện rất giới hạn' vì trùng Chúa nhật, ảnh có khoảng 15 linh mục, không mâu thuẫn rõ nhưng cũng không xác nhận. Viết lại chú thích cho đúng mức bằng chứng (xem conditions). |
| oralTradition: báo mạng viết nhà thờ bị Khmer Đỏ / Pol Pot phá năm 1978 | [S12] [S13] | Chuyển sang truyền tụng | Đọc nguyên văn cả hai. Cụm 'được nhiều trang chép lại' hơi rộng (chỉ thấy Redsvn) nhưng nằm trong oralTradition, không chặn. |
| oralTradition: du khách 2004 ghi nhà thờ bị bom đạn, giữ nguyên hiện trạng | [S18] | Chuyển sang truyền tụng | — |
| oralTradition: tên gọi 'nhà thờ đổ' | [S15] [S16] [S2] | Chuyển sang truyền tụng | — |
| Không còn ý 'Đức Mẹ che chở người đi biển' / chuyện cứu ngư dân Phú Quốc (S19) trong bất kỳ trường nào | [S19] | Bỏ | Đã kiểm record: không còn. Giữ nguyên kết luận bỏ của vòng 1. |


3 luận điểm không kiểm chứng được như sự thật lịch sử nhưng **không bị bỏ**: chuyển sang `oralTradition` / `folklore` kèm nhãn "tương truyền", đúng nguyên tắc giữ lại tư liệu truyền tụng thay vì xoá trắng.

### Kiểm chuyện kể & giai thoại

Chuyện kể không bị chấm theo chuẩn sự thật lịch sử. Chỉ kiểm ba điều: có nguồn đọc lại được không, có bị nguồn nào bác bỏ không, và có được gắn nhãn truyền tụng không.

| Chuyện kể | Độ xác thực | Có gắn nhãn truyền tụng | Kết luận | Ghi chú |
|---|---|---|---|---|
| Nhà thờ đá bị Khmer Đỏ phá năm 1978 | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | có | DUYỆT | S12, S13 mở được, đọc nguyên văn. S2 không nhắc, không bác bỏ; không nguồn A/B nào bác bỏ. oralTradition viết 'Một số bài báo mạng ... thì viết rằng', có đối chiếu với lược sử, trung tính. |
| Nhà thờ bị bom đạn chiến tranh phá, giữ nguyên hiện trạng | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | có | DUYỆT | S18 mở được, khớp. Ghi rõ là điều du khách 2004 ghi lại. |
| Cái tên dân gian "nhà thờ đổ" | có nguồn A/B đối chiếu phần nền | có | DUYỆT | Phần nền có trong S2; tên gọi từ tựa ảnh Flickr; viết 'người đi đường và khách chụp ảnh quen gọi'. |


### Kiểm chéo độc lập

Nguồn do người kiểm chứng tự tìm, không lấy từ báo cáo khảo cứu.

| Nguồn | URL | Xác nhận / bác bỏ điều gì |
|---|---|---|
| IRFA (Archives des Missions Étrangères de Paris) – 2546 MERDRIGNAC Jean-Marie | [liên kết](https://irfa.paris/en/missionnaire/2546-merdrignac-jean-marie/) | Nguồn cấp A độc lập với S2: 'il partit à Phu-Quoc pour y installer environ trois mille chrétiens ... La société fit faillite et les chrétiens furent réinstallés dans la province de Hatien ... formant deux chrétientés : Dat-Hua (la terre promise) et Hon-Chong'; 'Un site enchanteur, au bord de la mer, Honchong ... il ne tarda pas à y fonder trois autres chrétientés'. Xác nhận gốc cộng đoàn. Khác biệt nhỏ: IRFA ghi năm 1945 cha bị Việt Minh bắt, S2 ghi bị Nhật bắt; chi tiết này không có trong historicalFact. |
| Esri World Imagery z18, ghép 3x3 ô quanh điểm OSM | [liên kết](https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/18/123635/207247) | Điểm 10.1582055/104.6112725 nằm trên một công trình lớn mái đỏ lùi khỏi ĐT971, sát rìa đồi rừng phía nam, giữa khu dân cư ven đường. Khớp banner S7 và lược sử ('chân núi'). Chấp nhận toạ độ. |
| ArcGIS World Geocoder – 'Nhà thờ đá Hòn Chông', 'Giáo xứ Hòn Chông' | [liên kết](https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?SingleLine=Gi%C3%A1o%20x%E1%BB%A9%20H%C3%B2n%20Ch%C3%B4ng&f=json) | Chỉ trả điểm trọng tâm làng Hòn Chông (10.16667, 104.61667, loại City), cách điểm OSM khoảng 1 km; không có POI nhà thờ. Không dùng để bác toạ độ. |
| melavang.info – trang chủ và bài S3 (kiểm tên trang và ảnh khác) | [liên kết](https://melavang.info/) | Trang chủ có title 'Đức Mẹ La Vang', og:site_name 'Mẹ La Vang'; không có chữ 'Kỷ yếu'. Bài S3 có ảnh đại diện Honchong_03.jpg chỉ 300x225, không dùng được. |
| kpe.parish.chuathuongxot.org – 'Đức Mẹ Hòn Chông' | [liên kết](https://kpe.parish.chuathuongxot.org/DucMe/DucMeHonChong.htm) | Trang giáo xứ hải ngoại chép lại nguyên bài S3 (01/01/2013), tiêu đề ảnh 'Tượng đài Đức Mẹ Hòn Chông'. Không độc lập với S3, không có mốc 1959. |
| WebSearch '"Hòn Chông" "1959" Đức Mẹ giáo xứ' và 'Đức Mẹ Hòn Chông 1959 tượng đài Nữ Vương Hòa Bình' | [liên kết](https://www.google.com/search?q=%22H%C3%B2n+Ch%C3%B4ng%22+%221959%22+%C4%90%E1%BB%A9c+M%E1%BA%B9) | Không ra nguồn thứ hai cho ngày 08/12/1959; kết quả chủ yếu nói tượng Đức Bà Hòa Bình Sài Gòn (02/1959) và Tà Pao. Mốc 1959 hợp bối cảnh 100 năm Lộ Đức nhưng vẫn chỉ S2 ghi; year giữ nguyên như bản ghi đang có. |


## 3. Kiểm hình ảnh

| File | Nguồn công khai xác minh | Giấy phép (nếu biết) | Đúng linh địa | Dấu hiệu AI | Kết luận |
|---|---|---|---|---|---|
| honchong-ungvien-dai-me-2012-800px.jpg | có | Không ghi giấy phép (ảnh đại diện bài tin trên melavang.info) | có | không thấy | DUYỆT |
| honchong-thap-chuong-2015.jpg | có | All rights reserved (Flickr, license 0) | có | không thấy | DUYỆT |
| honchong-phe-tich-toan-canh-2010.jpg | có | All rights reserved (Flickr, license 0) | có | không thấy | DUYỆT |
| honchong-phe-tich-tu-thap-chuong-2010.jpg | có | All rights reserved (Flickr, license 0) | có | không thấy | DUYỆT |


## 4. Kiểm kỹ thuật & ảnh hưởng hệ thống

| Mục | Ảnh hưởng |
|---|---|
| Quyết định của người dùng (chủ dự án) áp dụng cho vòng này | Nguyên văn: "Vì linh đài này đang thiếu ảnh, tạm thời giảm yêu cầu về chất lượng ảnh, ưu tiên có ảnh chụp với nguồn đầy đủ là được." Áp dụng: RIÊNG honchong, ngưỡng chiều rộng ảnh tối thiểu là 800px thay cho 1000px; check-image chạy với --min-width=800. Đây là ngoại lệ tạm thời, không phải chuẩn mới của dự án. Hai lằn ranh không đổi: loại ảnh nghi AI, loại ảnh sai linh địa. Ảnh chính được duyệt ở vòng này (800x600) dựa trên ngoại lệ này. |
| Số lượng linh địa | không đổi (cập nhật bản ghi honchong đã có) |
| CONSTELLATION_VERSIONS | không đổi (honchong vẫn là node V4 NAT-15, constellationRole giữ nguyên) |
| Nguồn trong bản ghi | 4 → 6 (thêm S4 melavang 2012 và S10 Wikipedia xã Kiên Lương; có tier) |
| Ảnh thực địa | Lần đầu có realImage là ảnh chụp pho tượng (800x600, 2012) và 3 ảnh phụ (tháp chuông 2015, phế tích 2010 x2) |
| Số assertion npm test | có thể tăng theo số nguồn và ảnh; chạy lại npm test để xác nhận |
| Tài liệu phải cập nhật | docs/marian-sites-missing-info.md (honchong đã có ảnh tượng, nhưng dưới 1000px theo ngoại lệ tạm thời), docs/project-overview-pdr.md (Hòn Chông không còn 'chỉ có đúng hai nguồn', nếu còn dòng đó) |


```text
$ node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/honchong/khao-cuu.json --allow-existing-id
KIEM TRA: honchong (docs/khao-cuu/honchong/khao-cuu.json)

=> DAT toan bo rang buoc bat buoc. Sau khi chen vao src/data/statues.js, chay "npm test" de xac nhan lai.
```

## 5. Vấn đề phát hiện

| Mức | Vấn đề | Vị trí | Đề nghị xử lý |
|---|---|---|---|
| Nhẹ | Chú thích ảnh chính khẳng định ảnh chụp 'trong thánh lễ hành hương ngày 01/01/2012' và nguồn ảnh là 'Giáo phận Long Xuyên – gplongxuyen.net', trong khi trang nguồn chỉ cho thấy đây là ảnh đại diện của bài tin 2012 và dòng nguồn gplongxuyen.net gắn với phần chữ; gọi melavang.info là 'Kỷ yếu Mẹ La Vang' không đúng tên trang. | realImageCaption | Thay bằng chú thích ở conditions[0]. |
| Nhẹ | architect gọi melavang.info là 'Kỷ yếu Mẹ La Vang' và gọi ảnh là 'ảnh đại lễ 01/01/2012'. | architect, câu 1 | Thay cụm như conditions[1]. |
| Nhẹ | Ảnh chính chỉ 800x600, dưới chuẩn 1000px của dự án; được chấp nhận nhờ quyết định tạm thời của chủ dự án cho riêng honchong. | realImage | Không chặn. Khi tìm được ảnh tượng ≥1000px có nguồn rõ (bài gốc gplongxuyen.net qua web.archive.org, Facebook giáo xứ) thì thay ảnh chính và bỏ ngoại lệ. |
| Nhẹ | Toạ độ và ngày 08/12/1959 mỗi thứ chỉ có một nguồn dữ liệu (OSM; S2). Toạ độ được ảnh vệ tinh hỗ trợ; 1959 không tìm được nguồn thứ hai. Cả hai giữ nguyên như bản ghi đang có. | lat, lng, year | Không chặn. Lượt sau tìm bản gốc lược sử trên trang giáo phận cũ. |
| Nhẹ | oralTradition viết bài Kiến Thức 'được nhiều trang chép lại', mới thấy một trang (Redsvn). | oralTradition, câu 3 | Không bắt buộc sửa; nằm trong phần truyền tụng có nhãn. |


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
- [x] Ảnh: honchong-ungvien-dai-me-2012-800px.jpg, honchong-thap-chuong-2015.jpg, honchong-phe-tich-toan-canh-2010.jpg, honchong-phe-tich-tu-thap-chuong-2010.jpg
- [x] Chuyện kể được phép viết vào `oralTradition`: Nhà thờ đá bị Khmer Đỏ phá năm 1978; Nhà thờ bị bom đạn chiến tranh phá, giữ nguyên hiện trạng; Cái tên dân gian "nhà thờ đổ"
- [ ] Thay đổi chòm sao (`CONSTELLATION_VERSIONS`)

---

_Báo cáo sinh tự động từ hồ sơ JSON bằng `format-audit.mjs`. Sửa nội dung thì sửa file JSON rồi chạy lại lệnh, đừng sửa trực tiếp vào file markdown._
