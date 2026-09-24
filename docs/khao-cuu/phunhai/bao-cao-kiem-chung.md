# Báo cáo kiểm chứng: Vương Cung Thánh Đường Phú Nhai

## Kết luận

> **ÁP DỤNG CÓ ĐIỀU KIỆN** — 33/40
>
> Hồ sơ đạt về cấu trúc, toạ độ mới đã đối chiếu độc lập (lệch 5m so với tâm toà nhà trên OSM; toạ độ cũ thực ra trỏ vào nhà thờ Lục Thủy), ba ảnh Commons là ảnh máy Sony năm 2011, đúng chủ thể, không dấu hiệu AI. Không duyệt nguyên trạng vì hai lỗi truy vết: vế 'Tiểu Vương cung Thánh đường đầu tiên ở miền Bắc' trong significance chỉ dẫn S15 mà S15 mở ra không có câu đó (tiêu chí chặn B2), và câu 'quật đổ cùng 48 nhà thờ khác' đọc sai nguồn S2 ('đổ 48 nhà thờ, trong đó có đền thánh Phú Nhai'). Sửa đúng hai chỗ này thì triển khai được.

- **Hồ sơ khảo cứu đã kiểm**: `docs/khao-cuu/phunhai/khao-cuu.json`
- **Người kiểm chứng**: Claude (phiên marian-audit độc lập, 2026-09-24)
- **Ngày kiểm**: 2026-09-24
- **Cho phép triển khai**: có — `marian-publish` được chạy tiếp
- **Hồ sơ gốc**: `docs/khao-cuu/phunhai/kiem-chung.json` (schema `ducme.kiem-chung/v1`)

### Điều kiện bắt buộc trước khi triển khai

`marian-publish` làm đúng danh sách này, không thêm không bớt.

1. Trong historicalFact, thay nguyên cụm 'nhưng bị trận bão năm 1929 quật đổ cùng 48 nhà thờ khác trong giáo phận.' bằng 'nhưng bị trận bão năm 1929 quật đổ; trận bão ấy làm đổ 48 nhà thờ trong giáo phận, trong đó có đền thánh Phú Nhai.' (theo nguyên văn S2). Phần còn lại của historicalFact giữ đúng giá trị đề xuất trong khao-cuu.json.
2. Trong significance, thay nguyên cụm 'Đức Mẹ Vô Nhiễm Nguyên Tội, bổn mạng giáo phận, và là Tiểu Vương cung Thánh đường đầu tiên ở miền Bắc.' bằng 'Đức Mẹ Vô Nhiễm Nguyên Tội, bổn mạng giáo phận.' Phần còn lại của significance giữ đúng giá trị đề xuất.
3. Các trường architect, oralTradition, title, location, lat (20.3), lng (106.3632), sources dùng đúng giá trị đề xuất trong khao-cuu.json, không sửa thêm.
4. Trường sources của dữ liệu gồm đúng bốn nguồn S1, S2, S4, S5 như giá trị đề xuất; không đưa S13, S14, S15, S16 vào.
5. Dùng File:Vương cung thánh đường Phú Nhai.JPG (bản tải sẵn docs/khao-cuu/phunhai/anh/phunhai-mat-tien.jpg) làm realImage, realImageCaption đúng caption đề xuất trong images[0].
6. Dùng File:Nội thất vương cung thánh đường Phú Nhai.JPG (anh/phunhai-3-noi-that.jpg) và File:Lăng hài cốt tử đạo Phú Nhai.JPG (anh/phunhai-2-lang-tu-dao.jpg) làm galleryImages, đúng caption đề xuất trong images[1] và images[2].
7. Không sửa year, elevation, region, diocese, diemStatue5, constellationRole và CONSTELLATION_VERSIONS.

## 1. Chấm điểm

| Trục | Điểm | Bằng chứng |
|---|---|---|
| Chất lượng nguồn | 4/5 | Bốn nguồn đưa vào dữ liệu (S1 Wikipedia vi, S2 trang giáo phận Bùi Chu, S4 cổng thông tin xã Xuân Hưng, S5 VOV5) đều mở được và đúng chủ đề; ngoài ra S3 (HĐGM), S6 (TTXVN) cấp B cũng mở được. Trừ 1 điểm vì nhiều nguồn chép chuyền nhau (S7 chép S2; S5, S6, trang du lịch chép Wikipedia) và không có nguồn cấp A. |
| Truy vết luận điểm | 3/5 | Phần lớn luận điểm tìm thấy trong nguồn được gán. Nhưng: (1) 'đầu tiên ở miền Bắc' gán cho S15, S15 không có câu này; (2) 'cùng 48 nhà thờ khác' lệch nguyên văn S2/S7; (3) S14 được mô tả là nhắc 'lớn nhất Đông Nam Á' nhưng thực chứa 'lớn nhất Đông Dương', còn S13 (403) không đọc được; (4) chi tiết 'chín gian, cột lim' năm 1881 chỉ có ở S1, không có ở S2, S4 dù cả ba được gán. |
| Độ chính xác dữ liệu | 4/5 | Toạ độ 20.3000, 106.3632 cách tâm way OSM 1177046930 (tự tính từ 4 nút: 20.30000, 106.36324) 5m, cách toạ độ Wikipedia vi 41m; reverse geocode trả đúng 'Vương cung thánh đường Đức Mẹ Vô nhiễm Nguyên tội, Xã Xuân Hưng, Tỉnh Ninh Bình'. Toạ độ cũ 20.3275, 106.3317 reverse geocode ra 'Nhà thờ Giáo xứ Lục Thuỷ' — sửa là đúng. Toạ độ Wikipedia en / Wikidata (20.3077, 106.3298) rơi vào đường Trung Linh, xã Xuân Trường, cách 3,6km — đúng là sai. Địa chỉ hành chính mới khớp S4 và OSM. Ngày 12/8/2008 khớp S2, S3, S4, S6. Trừ 1 điểm vì lỗi '48 nhà thờ khác' và elevation 10m vẫn không có nguồn. |
| Hình ảnh | 5/5 | Ba ảnh (1 chính, 2 phụ) có trang File: trên Commons còn sống, tải lên 2/1/2013 bởi Hoangvantoanajc ('Own work', CC BY-SA 3.0), EXIF Sony SLT-A33 ngày 5/4/2011; bản 1280×850 trong anh/ còn giữ chuỗi SONY trong metadata, không có C2PA/JUMBF. Nhìn tận mắt: mặt tiền hai tháp, lăng đá bên trái, tượng Thánh Đa Minh bên phải — khớp mô tả S1, S5; bảng đồng 'Lăng các anh hùng tử đạo' đọc được rõ; nội thất vòm sườn vàng, cột trắng nhất quán. Không dấu hiệu AI. |
| Phân định sự thật / truyền tụng | 4/5 | Ranh giới rõ: cụm 'lớn nhất Đông Nam Á' đã được rút khỏi historicalFact; xổ số 1930 (chỉ Wikipedia, không chú thích) được đặt đúng ở oralTradition; 'Đức Mẹ nhận lời' viết như niềm tin. Bốn ý trong oralTradition đều có nhãn ('vẫn truyền nhau', 'Theo lời các cụ trong vùng kể lại', 'Một số bài viết chép lại rằng', 'lưu truyền'). Trừ 1 điểm vì 'đầu tiên ở miền Bắc' — một khẳng định không có nguồn — lọt vào significance như sự thật. |
| Giọng văn & trung lập | 5/5 | Trung lập, kính trọng. Đoạn chiếm đóng 1949–1953 viết ngắn, mô tả sự kiện ('chiếm đóng khu nhà thờ làm đồn bốt'), bỏ các chi tiết mang tính quy kết trong S1 ('tề ngụy', 'tra tấn cán bộ du kích'). Niềm tin mô tả như niềm tin. |
| Tính kỹ thuật | 4/5 | validate-record.mjs --allow-existing-id: ĐẠT, 1 cảnh báo 'lat chỉ có 1 chữ số thập phân' — đã giải trình (20.3000 bị JSON rút gọn thành 20.3; giá trị đo được 20.30000, sai khác 5m). format-report --check: hợp lệ, 1 cảnh báo elevation chưa có claims (đã ghi ở unknowns). check-sources: 15/16 OK, S13 (iVIVU) 403 Cloudflare — không nằm trong trường sources của dữ liệu. |
| Sức hấp dẫn & chiều sâu tư liệu | 4/5 | Văn xuôi tăng từ ~120 lên trên 300 từ, có bốn chuyện kể có nguồn đọc lại được (lời khấn 1858, gốc tích Thủy Nhai Hạ thôn, xổ số 1930, 'lớn nhất Đông Dương'), 12 ảnh ứng viên, 6 manh mối cụ thể (dấu lạ tuyết rơi 1866, sách lịch sử xã, album ký ức giáo xứ, kênh YouTube). Chưa đọc được trang du lịch và video nên phần chuyện kể dân gian thật sự còn mỏng. |


**Tổng: 33/40.**

## 2. Kiểm nguồn dẫn

| Mã | URL | Trạng thái | Chứa luận điểm? | Kiểm lại bằng | Ghi chú |
|---|---|---|---|---|---|
| S1 | [liên kết](https://vi.wikipedia.org/wiki/Vương_cung_thánh_đường_Phú_Nhai) | còn sống | có | — | Đã đọc toàn văn. Có: 1866 gỗ lợp bổi; 1881 chín gian cột lim hai tháp; 1916 khởi công, khánh thành 1922, bão 24/6/1929; xổ số 1930 (không chú thích); cung hiến 8/12/1933 ở thân bài nhưng hộp thông tin ghi 7/12/1933; 11/1949 chiếm đóng, 24/06/1953 rút khỏi bốt (dẫn sách Lịch sử Đảng bộ xã Xuân Phương); trùng tu 17/3/2003–26/9/2004; 80×27×30m, tháp 44m, 2160m², chuông 2000/1200/600/100kg; đài Thánh Đa Minh 17m (tượng 2,3m); lăng 83 vị tử đạo 15m; toạ độ 20.299946, 106.362811; xã Xuân Hưng, Ninh Bình. |
| S2 | [liên kết](https://gpbuichu.org/index.php/giao-phan/Gioi-thieu-Giao-phan.html) | còn sống | có | — | Script báo không thấy chuỗi đầy đủ 'Vương Cung Thánh Đường Phú Nhai' vì trang dùng 'Đền thánh Phú Nhai' — mở tay thấy mục riêng. Có nguyên văn lời khấn 1858; 1868 cha Hoà làm giám mục; 1881 khởi công (không nói chín gian / cột lim); '8/12/1923, sau 6 năm xây dựng... dài 88 m, 2 tháp cao 30 m... do cha chính Y thiết kế'; '30/9/1929, một trận bão lớn đã làm đổ 48 nhà thờ, trong đó có đền thánh Phú Nhai'; 1933 80×27×30m tháp 44m 'lớn lao và đồ sộ nhất Đông Dương'; xức dầu 7/12/1933 bởi Đức cha Pedro Muñagorri Trung; 6 thánh tử đạo (có tên); 12/8/2008 phong và 8/12/2008 công bố; lỗi đánh máy '150 năm (1848-2008)'. |
| S3 | [liên kết](https://hdgmvietnam.com/chi-tiet/gp-bui-chu-31467) | còn sống | có | — | Có: xây từ 1881, bão 1929, hoàn thành 1933, 80×27×30m tháp 44m, 12/8/2008 phong Tiểu Vương cung. Không có lời khấn 1858 chi tiết như claim gán (chỉ nêu Đức Mẹ Vô Nhiễm là quan thầy giáo phận) — không ảnh hưởng vì S2 đã chứa. |
| S4 | [liên kết](https://xuanhung.ninhbinh.gov.vn/2025/08/05/lich-su-hinh-thanh-va-phat-trien-cua-nha-tho-phu-nhai/) | còn sống | có | — | Script không thấy chuỗi đầy đủ vì trang dùng 'Nhà thờ Phú Nhai' — mở tay đúng bài. Có: xã Xuân Hưng, tỉnh Ninh Bình; 1866 nhà thờ gỗ; 1881 kiểu Á Đông hai tháp (không nói chín gian/cột lim); 1916–1922; bão 24/6/1929; làm phép 7/12/1933 (không nêu tên giám mục); 2160m², 80×27×30m tháp 44m; trùng tu 2003–2004; 12/8/2008. |
| S5 | [liên kết](https://vovworld.vn/vi-VN/viet-nam-dat-nuoc-con-nguoi/nha-tho-phu-nhai-mot-trong-4-tieu-vuong-cung-thanh-duong-o-viet-nam-817620.vov) | chuyển hướng | có | — | Chuyển hướng 1 lần sang ...-1733427.vov5, cùng bài. Có: xã Xuân Phương, huyện Xuân Trường, Nam Định; 1866/1881/1916–1922/1929/1933; trùng tu 3/2003–9/2004; 2008; đài Thánh Đa Minh 17m; lăng 83 người tử đạo 15m; 14 chặng Đàng Thánh Giá; lời giáo dân ghi rộng 30m; 4 chuông từ Pháp, quả 2 tấn chỉ dùng dịp đại lễ; lễ 7/12, 8/12, 24/12. |
| S6 | [liên kết](https://vietnam.vnanet.vn/vietnamese/tin-tuc/tieu-vuong-cung-thanh-duong-phu-nhai-85371.html) | còn sống | có | — | Có: trùng tu 17/3/2003 – 26/9/2004 (ghi do GM Đaminh Nguyễn Chu Trinh); 80×35×30m tháp 44m; 4 chuông đúc tại Pháp, quả 2 tấn chỉ dùng dịp đại lễ; tượng Thánh Đa Minh 17m; 12/8/2008; lễ 7/12 và 8/12; chú thích ảnh 'Được cho là nhà thờ lớn nhất Đông Nam Á'. |
| S7 | [liên kết](https://hddmvn.net/vuong-cung-thanh-duong-phu-nhai/) | còn sống | có | — | Chép gần nguyên văn S2 (không độc lập). Có tên và năm sinh-tử 6 thánh; 'Lời khấn hứa đã được Đức Mẹ nhận lời'; 8.12.1923 dài 88m do cha chính Y thiết kế; '30.9.1929, cơn bão Ất Tỵ đã làm đổ 48 nhà thờ, trong đó có đền thánh Phú Nhai'; lăng 87 tôi tớ Chúa; chuông '3 và 1 tấn, 6 và 1 tạ'. |
| S8 | [liên kết](https://gpbuichu.org/news/TIN-GIAO-PHAN-75/thuy-nhai-mo-nam-thanh-dip-nha-tho-100-nam-5263.html) | chuyển hướng | có | — | Chuyển hướng sang /index.php/news/..., cùng bài về giáo xứ Thủy Nhai. Có nguyên văn 'Theo truyền ngôn... nghe các cụ kể lại là mấy ông đó có tên là: Ông Tổng, Ông Huyện, Ông Điện, Ông Bành' và 'Theo gia phả Phú Nhai của linh mục Đinh Xuân Bách... dòng họ Đinh... đặt tên là Thủy Nhai Hạ thôn (xứ Phú Nhai ngày nay)'. |
| S9 | [liên kết](https://www.openstreetmap.org/way/1177046930) | còn sống | có | — | Tự gọi API /api/0.6/way/1177046930/full: thẻ basilica=minor, building=church, name 'Vương cung thánh đường Đức Mẹ Vô nhiễm Nguyên tội'; 4 nút góc cho tâm ≈ 20.30000, 106.36324 — khớp số hồ sơ ghi. |
| S10 | [liên kết](https://en.wikipedia.org/wiki/Basilica_of_Immaculate_Conception,_Phu_Nhai) | còn sống | có | — | Có toạ độ 20.3077, 106.3298 và câu 'each of which weighs two tons' — đúng như hồ sơ dùng để ghi mâu thuẫn. Cũng ghi 'completed in 1923' cho ngôi thứ hai theo cách đếm của nó (ủng hộ mốc 1923). |
| S11 | [liên kết](https://commons.wikimedia.org/wiki/Category:Basilica_of_Phu_Nhai) | còn sống | có | — | Thể loại tồn tại, chứa các ảnh đề xuất. |
| S12 | [liên kết](https://phunhai.com/phu-nhai-dong-chay-ky-uc-va-duc-tin/) | còn sống | có | — | Đúng là lời kêu gọi góp tư liệu, hồi ký cho 'Album Ký Ức Phú Nhai – Dòng chảy Đức Tin' hướng tới 500 năm Tin Mừng (1533–2033). Chỉ là manh mối, không dùng cho luận điểm nào. |
| S13 | [liên kết](https://www.ivivu.com/blog/2023/01/nha-tho-phu-nhai-tieu-vuong-cung-thanh-duong-lon-nhat-dong-nam-a/) | CHẾT | **KHÔNG** | WebFetch | curl trả 403 trang Cloudflare 'Just a moment...'; WebFetch cũng 403. Không đọc được — chỉ còn tiêu đề URL. Không nằm trong trường sources của dữ liệu; luận điểm 'lớn nhất Đông Nam Á' đã có S6 (TTXVN) và S15 chống lưng nên không mất gì. |
| S14 | [liên kết](https://congdankhuyenhoc.vn/chiem-nguong-ve-long-lay-cua-tieu-vuong-cung-thanh-duong-phu-nhai-179221212174029264.htm) | còn sống | **KHÔNG** | — | Hồ sơ nói S14 'nhắc lại cách nói lớn nhất Đông Nam Á' — mở toàn văn không có cụm này. S14 chỉ ghi 'khánh thành vào năm 1923 và 1933... cơ sở Công giáo lớn nhất Đông Dương thời bấy giờ'. Vế 'Đông Dương' đúng, vế 'Đông Nam Á' sai nguồn. Ghi chú thêm: S14 là nguồn độc lập ủng hộ mốc 1923. |
| S15 | [liên kết](https://vntravel.org.vn/net-doc-dao-nha-tho-phu-nhai-tieu-vuong-cung-thanh-duong-lon-nhat-dong-nam-a-a2713.html) | còn sống | **KHÔNG** | — | Đây là nguồn duy nhất được gán cho 'Tiểu Vương cung Thánh đường đầu tiên ở miền Bắc' trong significance. Mở toàn văn: có 'một trong 4 Tiểu Vương cung Thánh đường tại Việt Nam' và 'lớn nhất Đông Nam Á', KHÔNG có 'đầu tiên' hay 'miền Bắc'. Luận điểm không có trong nguồn — tiêu chí chặn B2. |
| S16 | [liên kết](https://www.youtube.com/channel/UCxyt-KyOg_Q9lmArPCOwxIA) | còn sống | có | — | Tiêu đề kênh thật là 'Vương Cung Thánh Đường Phú Nhai' (đọc từ metadata trang). Cấp D, manh mối, không dùng cho luận điểm nào. |


### Đối chiếu luận điểm

| Luận điểm | Nguồn | Kết luận | Ghi chú |
|---|---|---|---|
| Năm 1858 GM Valentinô Berrio-Ochoa Vinh và cha chính Emmanuel Riaño Hòa dâng giáo phận Bùi Chu cho Đức Mẹ Vô Nhiễm, khấn hứa nhận Người làm bổn mạng và xây thánh đường | [S2] [S7] | Đạt | S2 có nguyên văn lời khấn ở hai chỗ; S7 chép lại. S3 chỉ nêu Đức Mẹ Vô Nhiễm là quan thầy, không có lời khấn. |
| Năm 1866 cha Hòa dựng nhà thờ đầu tiên bằng gỗ, lợp bổi, sau khi triều Tự Đức chấm dứt cấm đạo | [S1] [S4] [S5] | Đạt | Cả ba đều có; VietnamNet EN và vietnamcatholictours (tự tìm) cũng ghi 1866. |
| Năm 1881, khi đã làm giám mục, ngài khởi công ngôi thánh đường thứ hai kiểu Á Đông, chín gian, cột lim, có hai tháp chuông | [S1] [S2] [S4] | Đạt | S1 chứa đủ (9 gian, cột xà gỗ lim, hai tháp). S2 chỉ có '1881 khởi công' và '1868 làm giám mục'; S4 chỉ có 'Á Đông, hai tháp chuông'. Đủ chống lưng nhưng gán nguồn rộng hơn thực tế. |
| Ngôi thánh đường Gothic thứ ba do cha chính Y thiết kế, khánh thành 8/12/1923, dài 88m, hai tháp cao 30m | [S2] [S7] | Đạt | S2 nguyên văn. Mâu thuẫn 1922 (S1, S4, S5, vietnamcatholictours) với 1923 (S2, S7, S14, Wikipedia en) — chấp nhận 1923 theo trang giáo phận vì có ngày cụ thể và có hai nguồn không chép S2 (S14, Wikipedia en) cùng ghi 1923. |
| Trận bão năm 1929 quật đổ đền thánh 'cùng 48 nhà thờ khác trong giáo phận' | [S2] [S1] | Sửa câu chữ | S2: 'một trận bão lớn đã làm đổ 48 nhà thờ, trong đó có đền thánh Phú Nhai' (S7 y hệt). 48 là tổng số, đã gồm Phú Nhai — viết 'cùng 48 nhà thờ khác' thành 49. S1 không nhắc con số 48. Sửa câu chữ theo conditions[0]. |
| Tái thiết hoàn tất 1933; ngày 7/12/1933 GM Pedro Muñagorri Trung xức dầu thánh hiến | [S2] [S4] | Đạt | S2 có ngày và tên giám mục; S4 có ngày 7/12/1933 nhưng không nêu tên. Hộp thông tin S1 cũng ghi 7/12/1933 (thân bài S1 và Wikipedia en ghi 8/12). |
| Từ 11/1949 đến 6/1953 quân viễn chinh Pháp chiếm đóng khu nhà thờ làm đồn bốt | [S1] | Đạt | S1 có '11/1949... lấy nhà thờ có ngọn tháp cao làm điểm uy hiếp' và '24/06/1953... rút khỏi bốt Phú Nhai', dẫn sách Lịch sử Đảng bộ xã Xuân Phương. Wikipedia en (S10) và thecatholictravelguide (tự tìm) cũng ghi 'the French took over the church'. Câu trong hồ sơ trung tính, giữ. |
| Đại trùng tu từ 17/3/2003 đến 26/9/2004 | [S1] [S6] | Đạt | Cả hai ghi đúng ngày. Hồ sơ khôn ngoan không nêu tên giám mục chủ trì vì S1 (GM Hoàng Văn Tiệm) và S5/S6 (GM Nguyễn Chu Trinh) khác nhau. |
| Ngày 12/8/2008 Tòa Thánh ban tước hiệu Tiểu Vương cung Thánh đường; GM Giuse Hoàng Văn Tiệm công bố ngày 8/12/2008 | [S2] [S3] [S6] | Đạt | 12/8/2008 có ở S2, S3, S4, S6; ngày công bố 8/12/2008 chỉ có ở S2. Bản cũ ghi 14/01/2008 là sai. |
| Kích thước 80m × 27m × 30m, tháp 44m, diện tích sàn khoảng 2.160m² | [S1] [S2] [S3] | Đạt | 80×27 = 2.160 nên con số diện tích nhất quán. S5 (lời giáo dân) ghi rộng 30m, S6 ghi 35m — chọn 27m theo ba nguồn là hợp lý. |
| Bốn quả chuông đúc tại Pháp, 'Wikipedia tiếng Việt ghi' 2.000/1.200/600/100kg, quả lớn nhất chỉ đánh dịp đại lễ | [S1] [S5] [S6] | Đạt | Trọng lượng có nhãn nguồn rõ ràng. S5, S6 xác nhận 'quả nặng 2 tấn chỉ sử dụng trong các dịp đại lễ'. |
| Chữ Hán quanh ô kính, búp sen trên mái vòm | [S1] | Đạt | S1 nguyên văn; S5 cũng nhắc 'các hàng chữ nho trang trí'. |
| Đài Thánh Đa Minh 17m (tượng 2,3m) bên phải, lăng hài cốt tử đạo 15m bên trái, 14 chặng Đàng Thánh Giá | [S1] [S6] [S11] | Đạt | S1, S5 có đủ; ảnh mặt tiền Commons xác nhận vị trí trái/phải. |
| Phú Nhai là quê của 6 trong 117 Thánh Tử đạo Việt Nam (liệt kê tên) | [S2] [S7] | Đạt | S2 có đủ 6 tên; S7 thêm phân biệt linh mục / giáo dân khớp cách viết trong significance. |
| Lễ 7/12 (cung hiến) và 8/12 (Vô Nhiễm) là các lễ lớn | [S5] [S6] | Đạt | — |
| Phú Nhai là Tiểu Vương cung Thánh đường đầu tiên ở miền Bắc | [S15] | Bỏ | S15 không chứa câu này. Tự tìm: Sở Kiện được phong 24/6/2010 (Wikipedia vi Sở Kiện), La Vang và Đức Bà Sài Gòn không ở miền Bắc — suy luận theo niên đại thì có thể đúng, nhưng không nguồn nào đã mở nói ra điều đó, và người kiểm chứng không tự viết luận điểm mới. Bỏ vế này khỏi significance theo conditions[1]; khảo cứu có thể bổ sung lại khi có nguồn nêu thẳng. |
| Lời các cụ kể về khai khẩn Thủy Nhai và gia phả họ Đinh lập Thủy Nhai Hạ thôn (Phú Nhai) | [S8] | Chuyển sang truyền tụng | S8 tự ghi 'Theo truyền ngôn', 'nghe các cụ kể lại' — đúng ngăn oralTradition, đã có nhãn. |
| Cuộc xổ số toàn quốc năm 1930 để lấy kinh phí tái thiết | [S1] | Chuyển sang truyền tụng | S1 ghi nhưng không chú thích; Wikipedia en và vietnamcatholictours lặp lại (có thể chép Wikipedia). Đặt ở oralTradition với 'Một số bài viết chép lại rằng' là đúng ngăn. |
| Cách nói 'đồ sộ nhất Đông Dương' / 'lớn nhất Đông Nam Á' | [S2] [S13] [S14] | Chuyển sang truyền tụng | 'Đông Dương' có ở S2, S4, S5, S14. 'Đông Nam Á' KHÔNG có ở S14, S13 không đọc được — nhưng có ở S6 (TTXVN, chú thích ảnh) và S15. Nội dung oralTradition đúng, chỉ gán nguồn sai trong hồ sơ; không ảnh hưởng dữ liệu vì S13, S14 không vào trường sources. |
| Toạ độ 20.3000, 106.3632; địa chỉ làng Phú Nhai, xã Xuân Hưng, tỉnh Ninh Bình (trước 2025: xã Xuân Phương, huyện Xuân Trường, Nam Định) | [S9] [S1] [S4] [S5] | Đạt | Xem crossChecks: OSM tự tính lại lệch 5m, Nominatim node 'nhà thờ Phú Nhai' lệch ~70m, reverse geocode ra đúng toà nhà tại Xã Xuân Hưng, Tỉnh Ninh Bình. |


3 luận điểm không kiểm chứng được như sự thật lịch sử nhưng **không bị bỏ**: chuyển sang `oralTradition` / `folklore` kèm nhãn "tương truyền", đúng nguyên tắc giữ lại tư liệu truyền tụng thay vì xoá trắng.

### Kiểm chuyện kể & giai thoại

Chuyện kể không bị chấm theo chuẩn sự thật lịch sử. Chỉ kiểm ba điều: có nguồn đọc lại được không, có bị nguồn nào bác bỏ không, và có được gắn nhãn truyền tụng không.

| Chuyện kể | Độ xác thực | Có gắn nhãn truyền tụng | Kết luận | Ghi chú |
|---|---|---|---|---|
| Lời khấn năm 1858 và đền thánh tạ ơn | có nguồn A/B đối chiếu phần nền | có | DUYỆT | Nguồn S2, S7 đọc lại được. Phần sự kiện (lời khấn) đã ở historicalFact; phần 'Đức Mẹ nhận lời' ở oralTradition mở bằng 'Người Công giáo Bùi Chu vẫn truyền nhau' — đúng cách mô tả niềm tin. |
| Thủy Nhai Hạ thôn — gốc tích làng Phú Nhai | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | có | DUYỆT | S8 còn sống, nguyên văn 'Theo truyền ngôn... nghe các cụ kể lại'. oralTradition mở bằng 'Theo lời các cụ trong vùng kể lại'. |
| Cuộc xổ số toàn quốc năm 1930 | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | có | DUYỆT | S1 còn sống, có câu này (không chú thích). Không nguồn A/B nào bác bỏ. Nhãn 'Một số bài viết chép lại rằng' là nhãn thuật lại, chấp nhận được. |
| 'Lớn nhất Đông Dương' rồi 'lớn nhất Đông Nam Á' | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | có | DUYỆT | 'Đông Dương' có ở S2; 'Đông Nam Á' có ở S6 và S15 (không phải S13/S14 như hồ sơ ghi). oralTradition ghi rõ 'đó là cách nói lưu hành rộng, chưa có số liệu so sánh đi kèm' — đúng ngăn. |


### Kiểm chéo độc lập

Nguồn do người kiểm chứng tự tìm, không lấy từ báo cáo khảo cứu.

| Nguồn | URL | Xác nhận / bác bỏ điều gì |
|---|---|---|
| OpenStreetMap API — way 1177046930/full (tự gọi, tự tính tâm) | [liên kết](https://www.openstreetmap.org/api/0.6/way/1177046930/full) | Bốn nút góc 20.29980/106.36289, 20.29997/106.36366, 20.30024/106.36359, 20.30006/106.36282 → tâm ≈ 20.30002, 106.36324; cách toạ độ đề xuất 5m. Thẻ basilica=minor. |
| Nominatim — tìm 'Phú Nhai' và reverse geocode ba toạ độ | [liên kết](https://nominatim.openstreetmap.org/reverse?lat=20.3000&lon=106.3632&format=json&zoom=18) | Toạ độ đề xuất → 'Vương cung thánh đường Đức Mẹ Vô nhiễm Nguyên tội, Cầu Mã 2, Xã Xuân Hưng, Tỉnh Ninh Bình'. Node 10712565105 'nhà thờ Phú Nhai' ở 20.29945, 106.36370 (~70m). Toạ độ cũ 20.3275, 106.3317 → 'Nhà thờ Giáo xứ Lục Thuỷ, Xã Xuân Hồng' (bản ghi hiện tại đang chỉ vào một nhà thờ khác, cách 4,5km). Toạ độ Wikipedia en 20.3077, 106.3298 → 'Đường Trung Linh, Xã Xuân Trường' (3,6km). |
| Wikidata Q10834009 | [liên kết](https://www.wikidata.org/wiki/Q10834009) | P625 = 20.307651, 106.329848 (trùng toạ độ sai của Wikipedia en — không dùng); P571 = 1933. Xác nhận toạ độ Wikipedia en/Wikidata là nguồn sai chứ không phải OSM. |
| Vương cung thánh đường Sở Kiện — Wikipedia tiếng Việt | [liên kết](https://vi.wikipedia.org/wiki/Vương_cung_thánh_đường_Sở_Kiện) | Sở Kiện được Bộ Phụng Tự nâng lên tiểu vương cung thánh đường ngày 24/6/2010, công bố 8/12/2011; trang liệt kê 'Vương cung thánh đường Phú Nhai (2008)'. Phú Nhai phong trước Sở Kiện — nhưng không nguồn nào nói thẳng 'đầu tiên ở miền Bắc'. |
| Phu Nhai church, one of four minor basilicas in Vietnam — VietnamNet (EN) | [liên kết](https://vietnamnet.vn/en/phu-nhai-church-one-of-four-minor-basilicas-in-vietnam-606514.html) | Xác nhận 1866 (cha Emmanuel Riano Hoa), bão 1929, xây lại 1933 'biggest church in Indochina at that time', 2008 minor basilica, Giáo phận Bùi Chu, 2.160m², tượng Thánh Đa Minh 17m, lăng 83 vị tử đạo 15m. Bài bản tiếng Anh của VOV nên không hoàn toàn độc lập với S5. |
| Phu Nhai Basilica — Vietnam Catholic Tours | [liên kết](https://vietnamcatholictours.vn/destination/phu-nhai-basilica/) | Giáo phận Bùi Chu; 1866; 1916 khởi công, 'consecrated in 1922', bão 24/6/1929; xổ số 1930; 8/12/1933; 2008 Benedict XVI phong minor basilica. Chép Wikipedia vi — ghi nhận phe '1922'. |
| Phu Nhai, Vietnam: Basilica of Immaculate Conception — The Catholic Travel Guide | [liên kết](https://thecatholictravelguide.com/destinations/vietnam-socialist-republic-of-vietnam-cong-hoa-xa-hoi-chu-nghia-viet-nam/phu-nhai-vietnam-basilica-of-immaculate-conception/) | Chép Wikipedia en: 1866, 1916–1923, bão 24/6/1929, xổ số, 8/12/1933, quân Pháp chiếm nhà thờ thời chiến tranh Đông Dương, trùng tu 2003–26/9/2004, 2008 Benedict XVI. |
| WebSearch 'gcatholic Phu Nhai minor basilica 2008 Bui Chu' | [liên kết](https://en.wikipedia.org/wiki/Basilica_of_Immaculate_Conception,_Phu_Nhai) | Kết quả tìm kiếm nêu 'Pope Benedict XVI raised the shrine to the status of Minor Basilica via his decree on 12 August 2008' — khớp 12/8/2008 của S2, S3, S4, S6. |


## 3. Kiểm hình ảnh

| File | Nguồn công khai xác minh | Giấy phép (nếu biết) | Đúng linh địa | Dấu hiệu AI | Kết luận |
|---|---|---|---|---|---|
| File:Vương cung thánh đường Phú Nhai.JPG | có | CC BY-SA 3.0 | có | không thấy | DUYỆT |
| File:Nội thất vương cung thánh đường Phú Nhai.JPG | có | CC BY-SA 3.0 | có | không thấy | DUYỆT |
| File:Lăng hài cốt tử đạo Phú Nhai.JPG | có | CC BY-SA 3.0 | có | không thấy | DUYỆT |


## 4. Kiểm kỹ thuật & ảnh hưởng hệ thống

| Mục | Ảnh hưởng |
|---|---|
| Số lượng linh địa | không đổi (cập nhật bản ghi phunhai đã có) |
| CONSTELLATION_VERSIONS | không đổi — phunhai vẫn là node đầu của V4, không thuộc V1/V2 |
| Toạ độ | dịch khoảng 4,5km về đúng toà nhà thờ (toạ độ cũ trỏ vào nhà thờ Lục Thủy); đoạn V4 phunhai → lavang dài thay đổi không đáng kể |
| Nguồn trong dữ liệu | 2 → 4 (bỏ link tìm kiếm Google, thêm trang giáo phận, trang xã, VOV5) |
| Ảnh thực địa | lần đầu có realImage và 2 ảnh galleryImages cho bản ghi này (chép từ docs/khao-cuu/phunhai/anh/ sang src/assets/real_photos/) |
| Tài liệu phải cập nhật | docs/marian-sites-missing-info.md |


```text
$ node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/phunhai/khao-cuu.json --allow-existing-id
KIEM TRA: phunhai (docs/khao-cuu/phunhai/khao-cuu.json)

CANH BAO (1) — khong chan, nhung nen xu ly:
  ! [phunhai] lat chi co 1 chu so thap phan — do chinh xac qua tho cho mot linh dai

=> DAT toan bo rang buoc bat buoc.
```

## 5. Vấn đề phát hiện

| Mức | Vấn đề | Vị trí | Đề nghị xử lý |
|---|---|---|---|
| CHẶN | Vế 'và là Tiểu Vương cung Thánh đường đầu tiên ở miền Bắc' chỉ dẫn S15, S15 mở ra không có câu này (tiêu chí B2) | significance, câu 1 | Bỏ vế này (conditions[1]). Khảo cứu có thể bổ sung lại ở lượt sau nếu tìm được nguồn nêu thẳng. |
| Nặng | 'quật đổ cùng 48 nhà thờ khác' lệch nguyên văn S2 ('làm đổ 48 nhà thờ, trong đó có đền thánh Phú Nhai') — thành 49 nhà thờ | historicalFact, câu 4 | Sửa câu chữ theo conditions[0] |
| Nhẹ | Bảng sources[] của hồ sơ gán sai nội dung cho S14 (không có 'Đông Nam Á') và S13 không đọc được (403) | khao-cuu.json sources S13, S14; claims của oralTradition | Không ảnh hưởng dữ liệu vì S13, S14 không vào trường sources. Ghi nhận cho lượt khảo cứu sau: nguồn đúng của 'lớn nhất Đông Nam Á' là S6, S15. |
| Nhẹ | Claim năm 1881 gán S2, S4 cho chi tiết 'chín gian, cột lim' mà hai nguồn này không có | historicalFact claims[2] | S1 đã chứa đủ nên không phải sửa văn bản. Ghi nhận. |
| Nhẹ | Mốc khánh thành ngôi thứ ba 1922 (S1, S4, S5) hay 8/12/1923 (S2, S7, S14, Wikipedia en) chưa thống nhất | historicalFact, câu 4 | Chấp nhận 8/12/1923 theo trang giáo phận. Không chặn. |
| Nhẹ | elevation '10m' không có nguồn | record.elevation (giunguyen) | Không nằm trong approved.fields nên giữ nguyên bản cũ; ghi nhận ở unknowns. |
| Nhẹ | check-sources thoát mã 1 vì S13 chết (403 Cloudflare) | S13 | S13 không vào dữ liệu; đã kiểm lại bằng WebFetch, vẫn 403. Không chặn. |


## 6. Phần đã duyệt

Đây là phạm vi chính xác `marian-publish` được phép đưa lên website.

- [x] `historicalFact`
- [x] `architect`
- [x] `significance`
- [x] `oralTradition`
- [x] `lat`
- [x] `lng`
- [ ] `year`
- [x] `location`
- [x] `title`
- [ ] `elevation`
- [x] `sources`
- [x] `realImage`
- [x] `galleryImages`
- [x] Nguồn đưa vào dữ liệu: [S1], [S2], [S4], [S5]
- [x] Ảnh: File:Vương cung thánh đường Phú Nhai.JPG, File:Nội thất vương cung thánh đường Phú Nhai.JPG, File:Lăng hài cốt tử đạo Phú Nhai.JPG
- [x] Chuyện kể được phép viết vào `oralTradition`: Lời khấn năm 1858 và đền thánh tạ ơn; Thủy Nhai Hạ thôn — gốc tích làng Phú Nhai; Cuộc xổ số toàn quốc năm 1930; 'Lớn nhất Đông Dương' rồi 'lớn nhất Đông Nam Á'
- [ ] Thay đổi chòm sao (`CONSTELLATION_VERSIONS`)

---

_Báo cáo sinh tự động từ hồ sơ JSON bằng `format-audit.mjs`. Sửa nội dung thì sửa file JSON rồi chạy lại lệnh, đừng sửa trực tiếp vào file markdown._
