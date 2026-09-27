# Báo cáo kiểm chứng: Đức Mẹ Trinh Phong

## Kết luận

> **ÁP DỤNG CÓ ĐIỀU KIỆN** — 33/40
>
> Phần văn bản mới truy được gần như toàn bộ về các nguồn B đã mở lại (Wikipedia dẫn báo Thẳng Tiến 1961, bài tường thuật 2007 của cha quản xứ trên VietCatholic, lược sử giáo xứ của GP Nha Trang), một nguồn độc lập của GP Ban Mê Thuột xác nhận tên, năm 1961, vị trí Eo Gió và giáo phận Nha Trang; ảnh Commons là ảnh thật, đúng linh địa nên được duyệt. Duyệt có điều kiện vì oralTradition còn một câu mở đầu chưa gắn nhãn và một vế dẫn video không chứa luận điểm, significance có một chữ 'từ đó' suy diễn. Toạ độ bản ghi (không đổi trong lượt này) chưa đối chiếu được và nhiều khả năng lệch khỏi vị trí thật hơn 500m, cần một lượt khảo cứu riêng.

- **Hồ sơ khảo cứu đã kiểm**: `docs/khao-cuu/trinhphong/khao-cuu.json`
- **Người kiểm chứng**: marian-audit (phiên tự động, kiểm chứng độc lập lượt 2)
- **Ngày kiểm**: 2026-09-27
- **Cho phép triển khai**: có — `marian-publish` được chạy tiếp
- **Hồ sơ gốc**: `docs/khao-cuu/trinhphong/kiem-chung.json` (schema `ducme.kiem-chung/v1`)

### Điều kiện bắt buộc trước khi triển khai

`marian-publish` làm đúng danh sách này, không thêm không bớt.

1. Trong oralTradition, thay nguyên câu 'Người Công giáo quanh Sông Pha vẫn gắn tên Mẹ Trinh Phong với ngọn gió Eo Gió.' bằng câu 'Theo cách hiểu lưu truyền trong giới hành hương, tên Mẹ Trinh Phong gắn với ngọn gió Eo Gió.'
2. Trong oralTradition, xoá vế '; đến nay nhiều video hành hương vẫn giới thiệu nơi này như pho tượng Mẹ ẩn mình giữa rừng trên đỉnh đèo' để câu kết thúc ở '...hay các cha xứ lân cận thầm lặng tìm vào viếng.'; phần còn lại của oralTradition giữ nguyên văn đề xuất
3. Trong significance, thay cụm 'từ đó tượng đài trở thành một điểm hành hương' bằng 'hiện nay tượng đài là một điểm hành hương'; phần còn lại giữ nguyên văn đề xuất
4. Dùng File:DucMetrinhphong.jpg làm realImage (bản tải về docs/khao-cuu/trinhphong/anh/commons-DucMetrinhphong.jpg) với realImageCaption đúng nguyên văn caption trong images[0] của hồ sơ khảo cứu; galleryImages giữ []
5. Không sửa lat, lng, year, constellationRole, diemStatue5 và CONSTELLATION_VERSIONS — giữ nguyên giá trị hiện có trong src/data/statues.js

## 1. Chấm điểm

| Trục | Điểm | Bằng chứng |
|---|---|---|
| Chất lượng nguồn | 4/5 | 4 nguồn đưa vào dữ liệu đều mở được và đúng nội dung: S1 Wikipedia (B, dẫn Thẳng Tiến 1961), S2 VietCatholic 2007 do chính cha quản xứ Sông Pha viết (B, lời chứng trực tiếp), S3 lược sử giáo xứ trên trang GP Nha Trang (B), S4 Đinh Văn Tiến Hùng (C). Chưa có nguồn cấp A (báo 1961, kỷ yếu giáo phận chỉ biết qua chú thích). |
| Truy vết luận điểm | 4/5 | Mở lại từng nguồn: mọi câu của historicalFact và title/location/elevation/architect có trong nguồn được gán. Trôi nổi: câu mở đầu oralTradition 'Người Công giáo quanh Sông Pha vẫn gắn tên...' không nguồn nào nói; vế 'nhiều video hành hương vẫn giới thiệu... ẩn mình giữa rừng' gán cho S12/S13/S14 nhưng tiêu đề S12, S13 (đã đọc qua oEmbed) không có ý đó và S14 không đọc lại được; 'từ đó' trong significance là suy diễn nhân quả. |
| Độ chính xác dữ liệu | 3/5 | Năm 1961, tên, giáo phận Nha Trang, xã Lâm Sơn tỉnh Khánh Hòa, đỉnh đèo 980m đều khớp nguồn và nguồn kiểm chéo. Toạ độ bản ghi 11.8322, 108.6258 cách toạ độ đèo trên Wikipedia (11.8340/11.8373, 108.6450/108.6456) khoảng 2,1 km về phía tây, trong khi S2 tả tượng ở cuối đường nhỏ rẽ về hướng đông chừng 3 km từ Eo Gió — mâu thuẫn hướng; không tìm được nguồn toạ độ độc lập (Wikimapia chặn tự động, Overpass đứt kết nối, API Wikimedia giới hạn). Hồ sơ khảo cứu tự nêu rủi ro này và không đề xuất sửa toạ độ. |
| Hình ảnh | 4/5 | Ảnh chính File:DucMetrinhphong.jpg: trang Commons còn sống, kích thước 669×1103 / 215 KB khớp bản tải về; bảng tạ ơn trên bệ đọc được 'TẠ ƠN MẸ TRINH PHONG', 'TẠ ƠN MẸ MARIA' — đúng linh địa; chữ mạch lạc, nếp áo, tràng hạt, lá thông tự nhiên, không dấu hiệu AI; cùng ảnh đã lưu hành trên chuathuongxot.org từ 08/2024. Trừ 1 điểm: chỉ có một ảnh, không có ảnh phụ, tác giả gốc không rõ. |
| Phân định sự thật / truyền tụng | 4/5 | historicalFact chỉ chứa sự kiện có nguồn (khánh thành 1961, hoang vắng sau 1975, thánh lễ 2007); nghĩa tên 'Trinh Phong' và giả thuyết 'Chòm Sao Bắc Đẩu' nằm trong oralTradition, có nhãn và ghi rõ chưa có tư liệu gốc. Còn một câu mở đầu oralTradition viết như sự thật mà không có nhãn (sửa bằng điều kiện 1). |
| Giọng văn & trung lập | 5/5 | Trung lập: mô tả vai trò TT Ngô Đình Diệm bằng đúng chữ của nguồn ('chỉ đạo xây dựng', 'chỉ thị cho Phủ Tổng ủy Dinh điền'), bỏ cụm 'theo lệnh' và các câu văn tả cảnh không nguồn; không ca ngợi hay lên án chế độ; bài 2014 bị người dùng loại không được dùng ở bất kỳ trường nào. |
| Tính kỹ thuật | 5/5 | validate-record.mjs --allow-existing-id: 'DAT toan bo rang buoc bat buoc', không cảnh báo; format-report --check hợp lệ; không đụng CONSTELLATION_VERSIONS, diemStatue5 và constellationRole giữ nguyên. |
| Sức hấp dẫn & chiều sâu tư liệu | 4/5 | Quét nhiều nhóm nguồn (Wikipedia vi/en, GP Nha Trang, VietCatholic, Commons, chuathuongxot, diễn đàn, YouTube, Facebook, Wikimapia, OSM), nhận diện 2 bẫy trùng tên (Đức Mẹ Suối Phong Ba, tượng tu viện Ngôi Lời Sông Pha), 3 chuyện kể có nguồn, 8 manh mối (Thẳng Tiến 1961, ĐMHCG 1962, kỷ yếu GP Nha Trang, bản lưu 2007...). Nội dung tăng rõ so với bản ghi cũ 166 từ. Chưa có sự tích/ơn lạ riêng nào đọc được. |


**Tổng: 33/40.**

## 2. Kiểm nguồn dẫn

| Mã | URL | Trạng thái | Chứa luận điểm? | Kiểm lại bằng | Ghi chú |
|---|---|---|---|---|---|
| S1 | [liên kết](https://vi.wikipedia.org/wiki/%C4%90%E1%BB%A9c_M%E1%BA%B9_Trinh_Phong) | còn sống | có | — | Mở lại (bản oldid 75083709, sửa 16/5/2026). Có nguyên văn: Eo gió điểm cao nhất đèo Ngoạn Mục, xã Lâm Sơn tỉnh Khánh Hoà, 'một trong 5 tượng đài... Ngô Đình Diệm chỉ đạo xây dựng', khánh thành Vô Nhiễm Nguyên Tội 8/12/1961, 'cao 6 thước', quản nhiệm cha sở Sông Pha, LM Bề trên địa phận Nha Trang, Trung tá tỉnh trưởng Ninh Thuận, 'trên 3000 giáo dân', kỳ đài trên đồi, quốc thái dân an, hoang vắng sau 1975, thánh lễ 15/4/2007 với chừng 500 giáo dân, 'địa điểm hành hương'. Chú thích dẫn Thẳng Tiến số 123-124 tr. 31; Xem thêm ĐMHCG số 152 và Kỷ yếu GP Nha Trang tr. 312-313. Trang không có toạ độ. |
| S2 | [liên kết](https://www.vietcatholic.net/News/Html/43090.htm) | còn sống | có | — | Mở lại. Tác giả LM Lê Văn Hải, 16/Apr/2007. Nguyên văn: giao điểm Eo Gió là đỉnh đèo và ranh giới Ninh Thuận – Lâm Đồng; 'một con đường nhỏ rẻ về hướng đông chừng 3 km đường bộ'; 'hướng tầm nhìn về thung lũng Sông Pha'; 'xây dựng vào khoảng năm 1960'; quản nhiệm cha sở Sông Pha; hoang vắng sau 1975; sáng Chúa Nhật II Phục Sinh 15.04.2007, chừng 500 giáo dân cùng lương dân Sông Pha, Lạc Lâm, Lạc Viên, Lạc Nghiệp, Kađô; bài thơ 'Eo Gió có Mẹ Trinh Phong...'. Bài có số điện thoại/email cá nhân — hồ sơ đúng khi không chép. |
| S3 | [liên kết](https://giaophannhatrang.org/vi/lich-su-giao-xu/lich-su-giao-xu/luoc-su-giao-xu-song-pha-50.html) | còn sống | có | — | Mở lại (đăng 28/08/2021). Có: Lâm Sơn – Ninh Sơn – Ninh Thuận, ranh giới với Đơn Dương (đèo Ngoạn Mục), năm thành lập 1963, dinh điền Tín Mục 1957, nhà thờ 1973, 'Linh Mục Anrê Lê Văn Hải từ 20.02.2002 – 03.2014'. Không nhắc tượng Trinh Phong (hồ sơ đã ghi rõ) — chỉ được gán cho luận điểm về giáo xứ và vị trí, đúng phạm vi. check-sources cảnh báo 'không thấy từ khoá' là dự kiến. |
| S4 | [liên kết](https://vntaiwan.catholic.org.tw/maria/hanhhuong.htm) | còn sống | có | — | Mở lại. Có: 'Tổng Thống Ngô đình Diệm chỉ thị cho Phủ Tổng Ủy Dinh Ðiền xây 5 tượng đài kính Ðức Mẹ vào những năm 1959, 1960 và 1961 tại Giang Sơn... Trinh Phong (Ninh Thuận) và Tà Pao'. Nguồn ghi nhầm '1950' cho Đại hội Thánh Mẫu (lỗi gõ của nguồn, hồ sơ không chép). Cấp C. |
| S5 | [liên kết](https://chuathuongxot.org/DucMe/DucMeTrinhPhongA.htm) | còn sống | có | — | Mở lại. Chép gần nguyên văn Wikipedia (không độc lập với S1); có chú thích ảnh 'đã được trùng tu sau khi bị xuống cấp bởi thời gian'; ảnh image002.jpg trùng ảnh Commons. Metadata trang ghi 2024-08-19 (hồ sơ ghi 17/08/2024 — lệch 2 ngày, không ảnh hưởng). Không vào dữ liệu. |
| S6 | [liên kết](https://phailamgi.com/threads/10-trung-tam-hanh-huong-duc-me-tai-viet-nam-nguoi-cong-giao-nen-den-it-nhat-mot-lan-trong-doi.2581/) | còn sống | có | — | Mở lại, mục Đức Mẹ Giang Sơn: 5 tượng đài 1959–1961 có 'Đức Mẹ Trinh Phong (Ninh Thuận và Lâm Đồng)', cùng La Vang và Trà Kiệu tạo thành 'Chòm Sao Bắc Đẩu', sao sáng nhất La Vang, đặt trên đồi, đèo, điểm cao. Cấp C, chỉ dùng cho oralTradition. |
| S7 | [liên kết](https://commons.wikimedia.org/wiki/File:DucMetrinhphong.jpg) | còn sống | có | — | Mở lại. Mô tả 'Tiếng Việt: ảnh sưu tầm', Date 18 July 2025, Source 'Own work', Author Baojcn01, CC BY-SA 4.0; 669×1103, 215 KB. Hồ sơ mô tả đúng mâu thuẫn 'ảnh sưu tầm' / 'Own work'. |
| S8 | [liên kết](https://www.openstreetmap.org/way/774895340) | còn sống | có | — | Trang way 'Đèo Ngoạn Mục' còn sống. Không chạy lại được Overpass (đứt kết nối qua proxy), nhưng tự tính từ toạ độ đèo của S9/S15: bản ghi 11.8322, 108.6258 cách đèo ~2,0–2,2 km về phía tây — khớp con số ~2,1 km của hồ sơ. |
| S9 | [liên kết](https://en.wikipedia.org/wiki/Ngo%E1%BA%A1n_M%E1%BB%A5c_Pass) | còn sống | có | — | Có toạ độ đèo 11.8340, 108.6450 và trích Lonely Planet 2007 'altitude 980m', '5km east of Dan Nhim Lake'. |
| S10 | [liên kết](https://cgvst.com/ong-chu-trong-coi-tuong-dai-duc-me/) | còn sống | có | — | Có: tượng Đức Mẹ Suối Phong Ba 'bên dòng suối... cách chân đèo Sông Pha chỉ chừng 3km', 'điểm dừng chân... cho lữ khách'. Xác nhận là tượng khác — hồ sơ ghi đúng là bẫy trùng tên. |
| S11 | [liên kết](https://www.facebook.com/p/T%C6%B0%E1%BB%A3ng-%C4%90%C3%A0i-%C4%90%E1%BB%A9c-M%E1%BA%B9-Trinh-Phong-100064601746043/) | chuyển hướng | **KHÔNG** | — | Chuyển hướng sang trang đăng nhập Facebook, không đọc được nội dung. Hồ sơ đã ghi là không đọc được và không gán luận điểm nào vào dữ liệu. Cấp D, chỉ là manh mối. |
| S12 | [liên kết](https://www.youtube.com/watch?v=kI_mP_kiGS8) | proxy chặn | **KHÔNG** | YouTube oEmbed API | check-sources nhận 429 (trang chặn tự động google.com/sorry), không phải video chết. Kiểm lại qua oEmbed: video còn, tiêu đề 'Sông Pha.Giáo xứ có Đài Đức Mẹ Trinh Phong ở đỉnh núi Eo Gió trên đèo Ngoạn Mục giáp với Lâm Đồng.', kênh Vanquang Nguyen. Tiêu đề KHÔNG chứa ý 'ẩn giữa rừng' được gán cho nó trong claim của oralTradition. |
| S13 | [liên kết](https://www.youtube.com/watch?v=9bdZjEfAuF8) | proxy chặn | **KHÔNG** | YouTube oEmbed API | 429 khi mở trực tiếp; oEmbed xác nhận video còn, tiêu đề 'Tượng đài Đức Mẹ Trinh Phong tại Eo Gió, trên đỉnh đèo Ngoạn Mục...', kênh Thu Hường 79. Không chứa ý 'ẩn giữa rừng'. |
| S14 | [liên kết](https://www.facebook.com/thonquesaigontv/videos/2610825109168391/) | còn sống | **KHÔNG** | — | HTTP trả về nhưng chỉ có tiêu đề 'Video', nội dung bị Facebook chặn; bản YouTube E7pTmxci7Ls oEmbed trả 'Not Found'; tự tìm tiêu đề 'Ngỡ ngàng tượng Đức Mẹ Trinh Phong...' bằng WebSearch không ra kết quả. Không đọc lại được luận điểm 'ẩn giữa rừng'. |
| S15 | [liên kết](https://vi.wikipedia.org/wiki/%C4%90%C3%A8o_Ngo%E1%BA%A1n_M%E1%BB%A5c) | còn sống | có | — | Có: độ cao 980 m, toạ độ 11.837294, 108.645625, vị trí 'Xã Lâm Sơn, tỉnh Khánh Hòa – xã D'Ran, tỉnh Lâm Đồng', Eo Gió là khúc cua khuỷu tay nơi khí hậu chuyển từ nắng Ninh Sơn sang gió cao nguyên. |
| S16 | [liên kết](https://www.youtube.com/watch?v=Q2OC2WMUvo8) | proxy chặn | có | YouTube oEmbed API | 429 khi mở trực tiếp; oEmbed xác nhận video còn, tiêu đề 'ĐỨC MẸ TRINH PHONG ĐÈO NGOẠN MỤC- NINH THUẬN', kênh Hải Âu Family. Chỉ là ứng viên ảnh/manh mối, hồ sơ không gán luận điểm nội dung. |
| S17 | [liên kết](https://vi.wikipedia.org/wiki/%C4%90%E1%BB%A9c_M%E1%BA%B9_T%C3%A0_Pao) | còn sống | có | — | Có: Đại hội Thánh Mẫu Toàn quốc, Ngô Đình Diệm 'chỉ thị cho Phủ Tổng uy dinh điền xây dựng năm tượng đài... trong các năm 1959, 1960 và 1961' gồm Giang Sơn, Thác Mơ, Phượng Hoàng, 'Đức Mẹ Trinh Phong (Ninh Thuận cũ)', Tà Pao. |


3 nguồn bị chính sách egress của phiên làm việc chặn, không phải nguồn chết. Các nguồn này đã được kiểm lại bằng công cụ ghi ở cột "Kiểm lại bằng".

### Đối chiếu luận điểm

| Luận điểm | Nguồn | Kết luận | Ghi chú |
|---|---|---|---|
| Tên gọi 'Tượng đài Đức Mẹ Trinh Phong' (title) | [S1] [S2] | Đạt | S2 dùng đúng cụm này trong tiêu đề và thân bài; S1 viết 'tượng đài Đức Mẹ Trinh Phong'. Tên cũ 'Linh Đài Eo Gió' không thấy nguồn nào. |
| Là một trong 5 tượng đài Đức Mẹ mà TT Ngô Đình Diệm chỉ đạo xây dựng; chỉ thị cho Phủ Tổng ủy Dinh điền dựng trong các năm 1959, 1960, 1961 tại Giang Sơn, Thác Mơ, Phượng Hoàng, Trinh Phong, Tà Pao, nhân Đại hội Thánh Mẫu mừng 100 năm Lộ Đức | [S1] [S4] [S17] | Đạt | Ba nguồn đều chứa; kiểm chéo độc lập trên gpbanmethuot.net. |
| Khánh thành tượng Đức Mẹ Vô Nhiễm Nguyên Tội ngày 8/12/1961, có LM Bề trên địa phận Nha Trang, Trung tá Tỉnh trưởng Ninh Thuận, hơn 3.000 giáo dân; thánh lễ tại kỳ đài trên đồi cầu cho quốc thái dân an | [S1] | Đạt | Nguyên văn S1 ('trên 3000' = 'hơn 3.000'). Chỉ đến qua Wikipedia dẫn Thẳng Tiến 1961, hồ sơ đã ghi rõ trong câu. Năm 1961 được gpbanmethuot.net xác nhận độc lập. |
| Tượng cách giao điểm Eo Gió chừng 3 km theo đường nhỏ, hướng về thung lũng Sông Pha, thuộc quyền quản nhiệm cha sở Sông Pha | [S2] [S1] | Đạt | Đúng S2. historicalFact bỏ chữ 'hướng đông' — không sai, chỉ lược. |
| Sau 1975 hoang vắng; thánh lễ đầu tiên sau 31 năm ngày 15/4/2007 (Chúa Nhật II Phục Sinh) do LM Anrê Lê Văn Hải cùng khoảng 500 giáo dân và lương dân các vùng Sông Pha, Lạc Lâm, Lạc Viên, Lạc Nghiệp, Kađô | [S2] [S1] [S3] | Đạt | Nguyên văn S2; S3 xác nhận LM Lê Văn Hải quản xứ 2002–2014. '31 năm' giữ theo nguồn dù 1975→2007 là 32 năm. |
| Hiện nay là một địa điểm hành hương của người Công giáo | [S1] | Đạt | — |
| Vị trí: gần Eo Gió, đỉnh đèo Ngoạn Mục (QL27), xã Lâm Sơn, tỉnh Khánh Hòa (trước 2025: huyện Ninh Sơn, Ninh Thuận), giáp Lâm Đồng | [S1] [S3] [S15] | Đạt | S1 và S15 ghi xã Lâm Sơn tỉnh Khánh Hòa; S3 ghi địa danh cũ. |
| Độ cao: chưa rõ độ cao bệ tượng; đỉnh đèo khoảng 980m | [S9] [S15] | Đạt | Sửa đúng lỗi cũ gán 980m cho tượng. |
| Tượng cao 6 thước (architect) | [S1] | Đạt | Nguyên văn S1; giữ chữ 'thước' không quy đổi là đúng. Con số '3m' cũ không có nguồn nào, đã bỏ. |
| Hiện trạng: tượng chắp tay, áo choàng xanh, áo trắng, tràng hạt, bệ ốp bảng tạ ơn 'Tạ ơn Mẹ Trinh Phong', rừng thông; đã được trùng tu (không rõ năm) | [S7] [S5] | Đạt | Tự xem ảnh: đúng mọi chi tiết; S5 có câu 'đã được trùng tu sau khi bị xuống cấp bởi thời gian'. |
| Bài thơ 'Eo Gió có Mẹ Trinh Phong, / Đèo cao gió lộng đứng trông con mình' của cha quản xứ | [S2] | Đạt | — |
| 'Người Công giáo quanh Sông Pha vẫn gắn tên Mẹ Trinh Phong với ngọn gió Eo Gió' (câu mở đầu oralTradition) | [S2] | Chuyển sang truyền tụng | S2 chỉ có bài thơ của một linh mục, không nói cộng đồng gắn tên như vậy. Không bỏ — viết lại có nhãn truyền tụng (điều kiện 1). |
| 'Nhiều video hành hương vẫn giới thiệu nơi này như pho tượng Mẹ ẩn mình giữa rừng trên đỉnh đèo' | [S12] [S13] [S14] | Bỏ | Tiêu đề S12, S13 đọc qua oEmbed không có ý này; S14 không đọc lại được (Facebook chặn, bản YouTube không còn, tìm tiêu đề không ra). Nguồn được gán không chứa luận điểm → bỏ vế này (điều kiện 2). Phần còn lại của chuyện 31 năm vẫn giữ. |
| Năm tượng đài cùng La Vang, Trà Kiệu hợp thành 'Chòm Sao Bắc Đẩu' (chỉ là cách hình dung, chưa thấy tư liệu gốc ghi là chủ ý) | [S6] | Chuyển sang truyền tụng | S6 chứa đúng; oralTradition đã gắn nhãn 'một số bài viết trên diễn đàn Công giáo còn kể rằng' và nói rõ chưa có tư liệu gốc. Giữ. |
| 'Từ đó tượng đài trở thành một điểm hành hương' (significance) | [S1] | Sửa câu chữ | S1 chỉ nói 'hiện nay... trở thành một địa điểm hành hương', không nói do thánh lễ 2007. Sửa câu chữ (điều kiện 3). |
| Toạ độ bản ghi 11.8322, 108.6258 là vị trí bệ tượng | [S8] [S9] [S15] [S2] | Sửa câu chữ | Hồ sơ không đề xuất đổi (giunguyen) và tự đánh dấu độ tin cậy thấp. Điểm này cách đèo ~2,1 km về phía tây, trái với mô tả 'rẽ về hướng đông chừng 3 km' của S2. Không duyệt lat/lng trong lượt này; cần khảo cứu toạ độ riêng. |


2 luận điểm không kiểm chứng được như sự thật lịch sử nhưng **không bị bỏ**: chuyển sang `oralTradition` / `folklore` kèm nhãn "tương truyền", đúng nguyên tắc giữ lại tư liệu truyền tụng thay vì xoá trắng.

### Kiểm chuyện kể & giai thoại

Chuyện kể không bị chấm theo chuẩn sự thật lịch sử. Chỉ kiểm ba điều: có nguồn đọc lại được không, có bị nguồn nào bác bỏ không, và có được gắn nhãn truyền tụng không.

| Chuyện kể | Độ xác thực | Có gắn nhãn truyền tụng | Kết luận | Ghi chú |
|---|---|---|---|---|
| 'Eo Gió có Mẹ Trinh Phong' — tên Mẹ gắn với ngọn gió đỉnh đèo | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | có | DUYỆT | Bài thơ có thật trong S2 (đã mở lại). Phần giải nghĩa tên được ghi là 'chỉ là cách đọc theo mặt chữ đang lưu hành' và 'chưa tìm được tư liệu nào giải thích chính thức' — có nhãn. Câu mở đầu đoạn phải viết lại có nhãn theo điều kiện 1. |
| Tượng Mẹ lặng lẽ giữa rừng thông suốt 31 năm | có nguồn A/B đối chiếu phần nền | có | DUYỆT | Phần nền có trong S2 và S1; bản oralTradition mở bằng 'Theo lời kể lưu truyền trong giới hành hương'. Bỏ vế 'nhiều video hành hương... ẩn mình giữa rừng' vì nguồn gán không chứa/không đọc lại được (điều kiện 2); phần còn lại duyệt. |
| Năm tượng đài hợp thành 'Chòm Sao Bắc Đẩu' | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | có | DUYỆT | S6 chứa đúng. Có nhãn 'Một số bài viết trên diễn đàn Công giáo còn kể rằng' và câu 'chưa thấy tư liệu gốc nào ghi là chủ ý khi xây dựng' — đúng yêu cầu không trình bày giả thuyết Bắc Đẩu như sự kiện lịch sử. Không nguồn A/B nào bác bỏ. |


### Kiểm chéo độc lập

Nguồn do người kiểm chứng tự tìm, không lấy từ báo cáo khảo cứu.

| Nguồn | URL | Xác nhận / bác bỏ điều gì |
|---|---|---|
| Về Với Mẹ Giang Sơn – trang Giáo phận Ban Mê Thuột | [liên kết](https://gpbanmethuot.net/van-hoc-nghe-thuat/ve-voi-me-giang-son-451.html) | Nguồn giáo phận, không có trong hồ sơ: 'Đức Mẹ Trinh Phong (1961) tại Eo gió, điểm cao nhất của Đèo Ngoạn Mục, ranh giới giữa 2 tỉnh Ninh Thuận và Lâm Đồng, giáo phận Nha Trang', trong nhóm 5 tượng đài nhân 100 năm Lộ Đức. Xác nhận độc lập tên tượng, năm 1961, giáo phận Nha Trang, vị trí Eo Gió. |
| Mẹ Thác Mơ – NVMN 8.12 (lebaotinhbmt.net) | [liên kết](https://lebaotinhbmt.net/quan-van/me-thac-mo-nvmn-8-12-2645.html) | Cùng đoạn văn với trang GP Ban Mê Thuột (có thể cùng tác giả, không tính là độc lập hẳn), thêm câu TT 'chỉ thị cho Phủ Tổng uy dinh điền xây dựng năm tượng đài'. Xác nhận lại 1961, Eo Gió, giáo phận Nha Trang. |
| YouTube oEmbed cho S12, S13, S16 | [liên kết](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=kI_mP_kiGS8&format=json) | Ba video còn tồn tại; tiêu đề gắn tượng với 'Eo Gió', 'đỉnh đèo Ngoạn Mục', giáo xứ Sông Pha — nhất quán với vị trí. Không tiêu đề nào có ý 'ẩn giữa rừng'. |
| Tự tính khoảng cách toạ độ bản ghi – đỉnh đèo (từ toạ độ Wikipedia vi/en) | [liên kết](https://vi.wikipedia.org/wiki/%C4%90%C3%A8o_Ngo%E1%BA%A1n_M%E1%BB%A5c) | 11.8322, 108.6258 so với 11.8373, 108.6456 (vi) và 11.8340, 108.6450 (en): lệch ~0,019° kinh độ ≈ 2,1 km về phía tây (phía Đơn Dương/hồ Đa Nhim), ngược hướng 'rẽ về hướng đông' của S2. Không tìm được toạ độ bệ tượng từ nguồn độc lập nào (Nominatim chỉ ra đường phố 'Trịnh Phong' ở Nha Trang; Wikimapia 6510388 chặn tự động cả curl lẫn WebFetch; Overpass và API Wikimedia bị đứt/giới hạn). |
| Ảnh Commons đối chiếu với chuathuongxot.org | [liên kết](https://chuathuongxot.org/DucMe/DucMeTrinhPhongA.htm) | Trang (metadata 2024-08-19) nhúng DucMeTrinhPhongA_files/image002.jpg — cùng khung hình với ảnh Commons 2025. Ảnh đã lưu hành trước khi lên Commons: bằng chứng ảnh không phải do tạo sinh gần đây, đồng thời xác nhận 'Own work' của người tải lên là đáng ngờ. |


## 3. Kiểm hình ảnh

| File | Nguồn công khai xác minh | Giấy phép (nếu biết) | Đúng linh địa | Dấu hiệu AI | Kết luận |
|---|---|---|---|---|---|
| File:DucMetrinhphong.jpg | có | Trang Commons khai CC BY-SA 4.0, 'Own work' của Baojcn01 nhưng mô tả ghi 'ảnh sưu tầm' — tác giả gốc không rõ | có | không thấy | DUYỆT |


## 4. Kiểm kỹ thuật & ảnh hưởng hệ thống

| Mục | Ảnh hưởng |
|---|---|
| Số lượng linh địa | không đổi (cập nhật bản ghi trinhphong đã có) |
| CONSTELLATION_VERSIONS | không đổi |
| Nguồn trong bản ghi | 3 → 4 (bỏ 2 link tìm kiếm Google, thêm S2, S3, S4); số assertion npm test có thể thay đổi — chạy npm test lấy số mới rồi cập nhật các chỗ ghi số |
| Ảnh thực địa | Lần đầu có realImage cho trinhphong; galleryImages vẫn rỗng |
| Toạ độ | Giữ nguyên, đánh dấu cần khảo cứu lại |
| Tài liệu phải cập nhật | docs/marian-sites-missing-info.md |


```text
$ node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/trinhphong/khao-cuu.json --allow-existing-id
KIEM TRA: trinhphong (docs/khao-cuu/trinhphong/khao-cuu.json)

=> DAT toan bo rang buoc bat buoc. Sau khi chen vao src/data/statues.js, chay "npm test" de xac nhan lai.
```

## 5. Vấn đề phát hiện

| Mức | Vấn đề | Vị trí | Đề nghị xử lý |
|---|---|---|---|
| Nặng | Câu mở đầu oralTradition viết như sự thật mà không có nhãn và không nguồn nào nói cộng đồng gắn tên như vậy | oralTradition, câu 1 | Điều kiện 1 |
| Nặng | Vế 'nhiều video hành hương vẫn giới thiệu... ẩn mình giữa rừng' gán cho S12/S13/S14 nhưng S12, S13 không chứa và S14 không đọc lại được | oralTradition, câu 4 | Điều kiện 2 |
| Nặng | Toạ độ bản ghi (không đổi trong lượt này) chưa đối chiếu được và nhiều khả năng lệch hơn 500m: cách đỉnh đèo ~2,1 km về phía tây trong khi nguồn trực tiếp S2 tả tượng ở ~3 km đường nhỏ về hướng đông | lat, lng (giữ nguyên) | Không duyệt lat/lng; lượt khảo cứu sau cần đo toạ độ bệ tượng (Wikimapia 6510388 mở bằng tay, ảnh vệ tinh, hoặc hỏi giáo xứ Sông Pha) rồi đề xuất sửa riêng |
| Nhẹ | 'từ đó' trong significance là suy diễn nhân quả, S1 chỉ nói 'hiện nay' | significance, câu 2 | Điều kiện 3 |
| Nhẹ | architect dẫn ý 'đã được trùng tu' từ S5 (chuathuongxot.org) nhưng S5 không có trong sources của dữ liệu | architect, câu cuối | Chấp nhận: câu đã ghi rõ 'một trang tư liệu Công giáo chỉ ghi chung'. Không chặn. |
| Nhẹ | Mốc 1961 và chiều cao '6 thước' chỉ đến qua Wikipedia dẫn Thẳng Tiến; chưa tiếp cận nguồn A | historicalFact, architect | Ghi nhận là hạn chế; manh mối đã có trong leads[]. Không chặn. |
| Nhẹ | Ảnh chính: người tải lên Commons khai 'Own work' nhưng tự ghi 'ảnh sưu tầm'; tác giả gốc không rõ | images[0] | Không phải lý do loại theo quy chuẩn; caption đề xuất đã ghi rõ. Lượt sau có thể lần tác giả gốc qua trang Facebook cộng đồng. |


## 6. Phần đã duyệt

Đây là phạm vi chính xác `marian-publish` được phép đưa lên website.

- [x] `title`
- [ ] `year`
- [ ] `lat`
- [ ] `lng`
- [x] `elevation`
- [x] `location`
- [x] `historicalFact`
- [x] `architect`
- [x] `oralTradition`
- [x] `significance`
- [ ] `constellationRole`
- [x] `sources`
- [x] Nguồn đưa vào dữ liệu: [S1], [S2], [S3], [S4]
- [x] Ảnh: File:DucMetrinhphong.jpg
- [x] Chuyện kể được phép viết vào `oralTradition`: 'Eo Gió có Mẹ Trinh Phong' — tên Mẹ gắn với ngọn gió đỉnh đèo; Tượng Mẹ lặng lẽ giữa rừng thông suốt 31 năm; Năm tượng đài hợp thành 'Chòm Sao Bắc Đẩu'
- [ ] Thay đổi chòm sao (`CONSTELLATION_VERSIONS`)

---

_Báo cáo sinh tự động từ hồ sơ JSON bằng `format-audit.mjs`. Sửa nội dung thì sửa file JSON rồi chạy lại lệnh, đừng sửa trực tiếp vào file markdown._
