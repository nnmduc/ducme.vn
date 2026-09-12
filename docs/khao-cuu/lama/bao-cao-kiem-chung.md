# Báo cáo kiểm chứng: Đức Mẹ La Mã Bến Tre

## Kết luận

> **ÁP DỤNG CÓ ĐIỀU KIỆN** — 38/40
>
> Hồ sơ khảo cứu rất vững: 5 nguồn cấp B đều mở được và tự tay đối chiếu khớp gần như toàn bộ luận điểm (kích thước nhà thờ, đất mua của bà Tăng Thị Tư, giai đoạn 1977-1989, chuyện ông Khá, ý nghĩa tên gọi La Mã); toạ độ mới được một công cụ độc lập (Photon/Komoot reverse-geocode) xác nhận trỏ thẳng vào nhà thờ trong khi toạ độ cũ trỏ vào một trường tiểu học ở thị trấn Giồng Trôm cách đó ~6-7km; 5 ảnh đề xuất đều là ảnh thật, đúng chủ thể, không dấu hiệu AI. Duyệt toàn bộ với 2 điều kiện nhỏ: bỏ một câu suy luận không có nguồn trong significance ('lớn nhất vùng châu thổ sông Cửu Long'), và đổi định dạng 1 ảnh .webp sang .jpg/.png cho đúng quy ước dự án.

- **Hồ sơ khảo cứu đã kiểm**: `docs/khao-cuu/lama/khao-cuu.json`
- **Người kiểm chứng**: Claude Sonnet 5 (phiên kiểm chứng 2026-09-12, session_012ojF6TVR5zZGBTEi3NjCHZ)
- **Ngày kiểm**: 2026-09-12
- **Cho phép triển khai**: có — `marian-publish` được chạy tiếp
- **Hồ sơ gốc**: `docs/khao-cuu/lama/kiem-chung.json` (schema `ducme.kiem-chung/v1`)

### Điều kiện bắt buộc trước khi triển khai

`marian-publish` làm đúng danh sách này, không thêm không bớt.

1. Bỏ vế 'đồng thời là trung tâm hành hương lớn nhất vùng châu thổ sông Cửu Long dưới tước hiệu Đức Mẹ Hằng Cứu Giúp' trong trường significance trước khi đăng — không nguồn nào trong 5 nguồn được dẫn (S1-S5) xác nhận xếp hạng này; chỉ giữ lại phần có nguồn (thứ ba toàn quốc, một trong ba trung tâm hành hương của Giáo phận Vĩnh Long).
2. Chuyển đổi file lama-thap-chuong.webp sang định dạng .jpg hoặc .png trước khi lưu vào src/assets/real_photos, giữ nguyên caption và vai trò ảnh phụ (galleryImages) đã đề xuất trong hồ sơ khảo cứu.

## 1. Chấm điểm

| Trục | Điểm | Bằng chứng |
|---|---|---|
| Chất lượng nguồn | 5/5 | 5 nguồn cấp B độc lập (2 trang giáo phận Vĩnh Long, Wikipedia có chú thích, TGP Sài Gòn, Ủy ban Đoàn kết Công giáo VN) — tất cả tự mở được và đọc trực tiếp (S1, S2 qua curl+UA; S3 qua raw wikitext; S4, S5 qua WebFetch). Tìm thêm ≥6 nguồn độc lập khác qua WebSearch (mia.vn, mytour.vn, banthochuabeconi.com, phieuluu5chau.com, vanhoatinnguong.vn, nhathoconggiaovietnam.com) đều nhắc lại đúng các mốc chính. |
| Truy vết luận điểm | 4/5 | Tự đối chiếu ~15 luận điểm cụ thể (kích thước 35x16x19m, mua đất bà Tăng Thị Tư, 1977-1989 trưng dụng, 50->500 giáo dân, chuyện ông Khá, ý nghĩa tên 'La Mã', dòng chữ trên cổng đền) — khớp gần như nguyên văn nguồn được gán. Trừ điểm vì: (1) câu 'trung tâm hành hương lớn nhất vùng châu thổ sông Cửu Long' trong significance không truy được về bất kỳ nguồn nào trong 5 nguồn cấp B (đã tìm cả 3 nguồn còn lại và WebSearch riêng, không thấy); (2) năm 1951 (year) đúng là có trong S1/S3/S5 nhưng bản thân S1 và S3 còn một đoạn tường thuật chi tiết khác đặt mốc 'tuyên bố chọn La Mã làm trung tâm hành hương' vào 20/10/1952 — một nhắc nhở cần nguồn cấp A để giải quyết dứt điểm, không phải lỗi nghiêm trọng vì 1951 vẫn được 3 nguồn độc lập khẳng định rõ. |
| Độ chính xác dữ liệu | 5/5 | Toạ độ: dùng Photon (Komoot) — công cụ geocode độc lập khác OSM Nominatim — reverse-geocode toạ độ mới (10.0994,106.4772) ra thẳng 'Nhà thờ đức mẹ la mã'; toạ độ cũ (10.1583,106.4958) reverse-geocode ra 'Trường Tiểu học Thị trấn Giồng Trôm' — xác nhận rõ ràng toạ độ cũ chỉ là điểm gần trung tâm huyện, không phải vị trí thực. Đã kiểm thêm qua OSM API trực tiếp: 2 node độc lập (2 người dùng khác nhau, tạo 2017, chưa từng sửa) cách nhau ~150m, đúng dưới ngưỡng 500m. Tên gọi mới khớp đúng chữ trên cổng đền nhìn thấy trong ảnh xudua-1.jpg ('ĐỀN ĐỨC MẸ HẰNG CỨU GIÚP LA MÃ'). |
| Hình ảnh | 5/5 | Tải và xem trực tiếp 4/5 ảnh (3 ảnh dulichbui.vn + 1 ảnh xuduabentre.com): đều là ảnh thật, đúng kiến trúc nhà thờ La Mã (tháp vuông, mái ngói đỏ hình chóp, cổng vòm), không dấu hiệu AI qua check-image.mjs. Ảnh Commons (linh ảnh) không tải được byte gốc do Wikimedia tự giới hạn tần suất trong phiên này (429, xác nhận không phải do proxy), nhưng đã lấy đầy đủ metadata qua Commons API (extmetadata, EXIF gốc 2010/Photoshop 7.0, không dấu hiệu AI) và xác nhận chính ảnh này đang được dùng làm ảnh khung thông tin trên bài Wikipedia tiếng Việt cùng chủ đề. |
| Phân định sự thật / truyền tụng | 5/5 | historicalFact dùng đúng lối viết dè dặt cho sự kiện 'lộ hình' ('giáo dân địa phương tường thuật rằng...', 'được tin là'); oralTradition/folklore đều mở đầu bằng nhãn truyền tụng ('Tương truyền', 'kể rằng', 'theo lời kể') và đúng nội dung so với nguồn cấp C/D được gán. |
| Giọng văn & trung lập | 5/5 | Trung lập, kính trọng; nhắc Giám mục Ngô Đình Thục thuần tuý ở vai trò mục vụ, không lồng bình luận chính trị thời Đệ nhất Cộng hoà. |
| Tính kỹ thuật | 4/5 | validate-record.mjs: DAT toan bo rang buoc bat buoc. check-sources.mjs: 19/19 nguồn mở được. Trừ 1 điểm vì ảnh 'lama-thap-chuong.webp' dùng đuôi .webp không thuộc danh sách .jpg/.jpeg/.png mà check-image.mjs và quy ước src/assets/real_photos yêu cầu — cần chuyển đổi định dạng trước khi publish. |
| Sức hấp dẫn & chiều sâu tư liệu | 5/5 | Mở rộng từ 124 lên ~780 từ, 3 chuyện kể có chi tiết sống động và nguồn đọc lại được, 8 ảnh ứng viên (chọn 5), danh sách lead rõ ràng cho lượt sau (cuốn sách nhỏ có imprimatur, PDF radioltxc.org, 2 trang Facebook, video YouTube). |


**Tổng: 38/40.**

## 2. Kiểm nguồn dẫn

| Mã | URL | Trạng thái | Chứa luận điểm? | Kiểm lại bằng | Ghi chú |
|---|---|---|---|---|---|
| S1 | [liên kết](https://giaophanvinhlong.net/Trung-Tam-Hanh-Huong-Duc-Me-La-Ma-Ben-Tre.html) | còn sống | có | — | Tải full text (curl + User-Agent trình duyệt, vì WebFetch bị 403). Xác nhận nguyên văn: 'thành lập năm 1951', kích thước nhà thờ '35m, rộng 16m, tháp cao 19m', 'trung tâm hành hương thứ ba của Việt Nam', 'một trong ba trung tâm hành hương của Giáo phận Vĩnh Long'. CŨNG chứa đoạn tường thuật chi tiết đặt mốc tuyên bố chính thức vào 20-10-1952 (uỷ ban cứu xét kết luận, giáo quyền 'mặc nhiên nhìn nhận') — xem ghi chú ở claimChecks/issues về năm 1951 vs 1952. |
| S2 | [liên kết](https://giaophanvinhlong.net/Ho-Dao-La-Ma.html) | còn sống | có | — | Tải full text (curl + UA). Xác nhận nguyên văn: 'Cha Phêrô Trần Hữu Dư mua của Bà Tăng Thị Tư (điền chủ) 3,5 mẫu đất ruộng để xây dựng Nhà Thờ La Mã. Nhà Thờ được Khánh thành năm 1957'; giai đoạn '1977-1989: Toàn bộ khu vực Nhà Thờ phải giao cho Trường Bổ túc Công Nông (con Liệt sĩ) quản lý'. Lưu ý: nguồn ghi cụ thể là 'Bổ túc Công Nông', không phải 'bổ túc văn hoá' như trong field-note nội bộ của khảo cứu — không ảnh hưởng historicalFact publish vì văn bản đó chỉ viết chung chung 'cơ sở giáo dục'. Trường 'Năm thành lập' trong bảng lý lịch giáo xứ để trống. |
| S3 | [liên kết](https://vi.wikipedia.org/wiki/%C4%90%E1%BB%A9c_M%E1%BA%B9_La_M%C3%A3_B%E1%BA%BFn_Tre) | còn sống | có | — | Tải wikitext gốc qua action=raw (đáng tin hơn qua WebFetch tóm tắt). Câu mở đầu ghi 'được Giám mục Phêrô Ngô Đình Thục thiết lập năm 1951' (dẫn nguồn TTHHLM = S1); phần thân bài lại thuật chi tiết ngày 20/10/1952 Giám mục 'tuyên bố chọn La Mã là trung tâm hành hương' — cùng độ lệch nội tại như S1. Xác nhận đầy đủ chuỗi mốc 1930/1947/1949/1950/1951/1952/1957, kích thước nhà thờ, 2 ngày đại lễ. |
| S4 | [liên kết](https://tgpsaigon.net/bai-viet/75-nam-duc-me-la-ma-ben-tre-lo-hinh-va-bai-hoc-duc-tin-cho-nguoi-tin-huu-82423) | còn sống | có | — | Qua WebFetch: xác nhận nguyên văn ngày 7/10/1950 'phép lạ Đức Mẹ Lộ Hình', và giải thích ý nghĩa tên 'La Mã': 'muốn nói rằng họ đạo trung kiên giữ đức tin giữa những khói lửa chiến tranh' — khớp đúng claim gán cho S4 trong oralTradition. |
| S5 | [liên kết](https://ubdkcgvn.org.vn/vi/van-hoa-nghe-thuat/nha-tho-la-ma-ben-tre-o81E018D4.html) | còn sống | có | — | Qua WebFetch: xác nhận 'được Đức Giám mục Phêrô Ngô Đình Thục thành lập năm 1951'. Chỉ xác nhận 'một trong ba trung tâm hành hương của Việt Nam' — KHÔNG ghi rõ 'thứ ba' như mô tả 'supports' trong sources[] của hồ sơ khảo cứu; đây là điểm mô tả hơi quá tay trong tài liệu nội bộ (không phải trong record công bố), không cần sửa vì record.sources chỉ lưu title/url/tier, không lưu câu 'supports'. |
| S6 | [liên kết](https://xitothanhgia.wordpress.com/suu-tam/lich-su-buc-anh-duc-me-hang-cuu-giup-la-ma-ben-tre/) | còn sống | có | — | Cấp C, dùng cho folklore. Qua WebFetch: xác nhận nguyên văn chuyện ông Khá ('người lái đò bị hư mắt... được chữa lành... trở lại đạo... tiếp tục là người lái đò của Đức Mẹ') và số liệu '50 giáo dân... vượt quá 500 người' — đúng như hồ sơ khảo cứu trích. |
| S7 | [liên kết](https://yeuthuongphucvu.com/2020/06/28/vai-net-lich-su-buc-linh-anh-duc-me-hang-cuu-giup-la-ma-ben-tre/) | còn sống | có | — | Cấp C, mở được (check-sources.mjs xác nhận sống). Không tự tay đọc toàn văn (nguồn phụ, chỉ dùng đối chiếu chéo folklore, không phải cấp bắt buộc kiểm kỹ theo tiêu chí). |
| S8 | [liên kết](https://gxdaminh.net/2010/10/16/duc-me-la-ma-ben-tre/) | còn sống | có | — | Cấp C, không dùng làm nguồn chính thức (inRecord: false). Không hand-verify — không ảnh hưởng approved.sources. |
| S9 | [liên kết](https://melavang.info/duc-me-hien-hinh-tai-ho-la-ma-ben-tre-viet-nam/) | còn sống | có | — | Cấp C, không dùng làm nguồn chính thức, chỉ backup cho folklore veracity 'codoichieu'. check-sources.mjs xác nhận sống. |
| S10 | [liên kết](https://xuduabentre.com/duc-me-la-ma-ben-tre-o-dau/) | còn sống | có | — | Tải ảnh trực tiếp từ trang này (xudua-1.jpg): xác nhận đúng dòng chữ cổng 'ĐỀN ĐỨC MẸ HẰNG CỨU GIÚP LA MÃ' và đúng chủ thể kiến trúc khớp các ảnh khác. Cũng xem ảnh xudua-3.jpg (có banner Tết 2021 chèn lên — đúng như ghi chú 'không chọn' trong imageCandidates). |
| S11 | [liên kết](https://www.dulichbui.vn/e/nha-tho-la-ma-ben-tre/) | còn sống | có | — | Tải cả 4 ảnh của trang này (nha-tho-la-ma.jpg/-1/-2/-3.webp) và xem trực tiếp: đúng là 4 góc chụp nhà thờ La Mã (mặt tiền, mặt tiền góc khác, nội thất, cận cảnh tháp chuông có linh mục). Không dấu hiệu AI qua check-image.mjs. |
| S12 | [liên kết](https://taxibentre71.com/nha-tho-la-ma-ben-tre/) | còn sống | có | — | Cấp C, chỉ dùng đối chiếu địa chỉ/lịch lễ, không phải nguồn chính hay ảnh — check-sources.mjs xác nhận sống, không hand-verify sâu. |
| S13 | [liên kết](https://mia.vn/cam-nang-du-lich/nha-tho-la-ma-ben-tre-trung-tam-hanh-huong-noi-tieng-11146) | còn sống | có | — | Xuất hiện lại trong kết quả WebSearch độc lập của chính kiểm chứng viên khi tìm xác nhận năm 1951 — cùng nội dung, không mâu thuẫn. |
| S14 | [liên kết](https://commons.wikimedia.org/wiki/File:Ducme_lama.jpg) | còn sống | có | — | Kiểm qua Commons API (action=query, prop=imageinfo\|extmetadata) thành công: Credit='Own work', ImageDescription='ảnh sưu tầm' — xác nhận đúng mâu thuẫn hồ sơ đã nêu. License CC BY-SA 4.0, kích thước 280x350 (45KB), EXIF gốc 2010 qua Adobe Photoshop 7.0. KHÔNG tải được byte ảnh gốc để tự quét AI-marker bằng check-image.mjs — upload.wikimedia.org trả 429 (rate-limit của chính Wikimedia, xác nhận qua agentproxy status không phải lỗi proxy) sau nhiều request khác trong phiên. Bù lại bằng: (a) toàn bộ extmetadata không có dấu hiệu công cụ AI; (b) chính ảnh này đang được Wikipedia tiếng Việt dùng làm ảnh khung thông tin của đúng bài viết về linh địa này — một hình thức xác nhận chủ thể độc lập. |
| S15 | [liên kết](https://www.openstreetmap.org/node/5152922021) | còn sống | có | — | Xác nhận qua api.openstreetmap.org/api/0.6/node/5152922021.json: lat=10.0994296, lon=106.4771878, tag amenity=place_of_worship, name='Nhà thờ đức mẹ la mã', tạo bởi user 'Trọng Nguyễn' năm 2017, version 1 (chưa từng sửa). Đối chiếu thêm bằng Photon (Komoot) reverse-geocode: điểm này là kết quả gần nhất khi geocode ngược đúng toạ độ đề xuất. |
| S16 | [liên kết](https://www.openstreetmap.org/node/5027534021) | còn sống | có | — | Xác nhận qua OSM API: lat=10.0987573, lon=106.4776227, tourism=viewpoint, name='Nhà Thờ La Mã', tạo bởi user 'HuynhQuoc' năm 2017 (khác S15), version 1. Cách S15 ~150m — hai người dùng độc lập, cùng khoảng thời gian, cùng kết luận vị trí — củng cố độ tin cậy dù cả hai đều chưa đối chiếu vệ tinh. |
| S17 | [liên kết](https://www.facebook.com/ducmelamabentre/) | còn sống | **KHÔNG** | — | Chuyển hướng ra trang đăng nhập Facebook — đúng như hồ sơ khảo cứu đã tự nhận (chưa xem được đầy đủ). Không dùng làm nguồn, chỉ là lead. |
| S18 | [liên kết](https://www.youtube.com/watch?v=Kicr9vL-yWA) | còn sống | **KHÔNG** | — | Link sống nhưng không phải nguồn, chỉ là lead cho lượt khảo cứu sau — đúng như hồ sơ tự ghi chưa xem nội dung. |
| S19 | [liên kết](https://tracuusapnhap.com/ben-tre/xa-hung-nhuong-huyen-giong-trom/) | còn sống | có | — | Trang nhẹ (bot-check) nhưng không dùng để sửa trường nào trong record — chỉ ghi bối cảnh sáp nhập hành chính 1/7/2025, đúng như hồ sơ tự nhận. |


### Đối chiếu luận điểm

| Luận điểm | Nguồn | Kết luận | Ghi chú |
|---|---|---|---|
| Giám mục Ngô Đình Thục thiết lập La Mã làm trung tâm hành hương năm 1951 | [S1] [S3] [S5] | Đạt | Đúng nguyên văn ở cả 3 nguồn, và được ≥6 nguồn độc lập khác (tìm qua WebSearch riêng) nhắc lại thống nhất. Lưu ý: S1 và S3 (thân bài) cũng mô tả một tiến trình điều tra kết thúc bằng tuyên bố 'chọn La Mã là trung tâm hành hương' vào 20/10/1952 — không đủ căn cứ để kết luận 1951 sai (3 nguồn độc lập đều ghi rõ 1951, có thể là mốc quyết định hành chính riêng không thuật chi tiết), nhưng ghi nhận đây là điểm cần nguồn cấp A (văn bản gốc huấn lệnh) để dứt điểm — xem issues[]. |
| Toạ độ Nhà thờ La Mã ở 10.0994°B, 106.4772°Đ | [S15] [S16] | Đạt | Xác nhận bằng công cụ độc lập thứ ba (Photon/Komoot reverse-geocode, không phải Nominatim mà 2 nguồn kia dùng): geocode ngược toạ độ mới ra thẳng 'Nhà thờ đức mẹ la mã'; geocode ngược toạ độ CŨ (10.1583, 106.4958) ra 'Trường Tiểu học Thị trấn Giồng Trôm' — xác nhận toạ độ cũ chỉ là xấp xỉ trung tâm huyện, sai vị trí thực. |
| Cổng vào khuôn viên ghi 'ĐỀN ĐỨC MẸ HẰNG CỨU GIÚP LA MÃ' | [S10] | Đạt | Xem trực tiếp ảnh cổng đền (xudua-1.jpg) — đúng nguyên văn dòng chữ. |
| Thánh đường dài 35m, rộng 16m, tháp chuông cao 19m, hoàn thành đầu 1957 | [S1] [S2] [S3] | Đạt | Khớp nguyên văn cả 3 nguồn. |
| Cha Phêrô Trần Hữu Dư mua 3,5 mẫu đất của bà Tăng Thị Tư để xây thánh đường | [S2] | Đạt | Khớp nguyên văn. |
| Giai đoạn 1977-1989 khuôn viên bị trưng dụng làm cơ sở giáo dục | [S2] | Đạt | Nguồn ghi cụ thể là 'Trường Bổ túc Công Nông (con Liệt sĩ)'; văn bản historicalFact viết khái quát hơn 'cơ sở giáo dục' — vẫn chính xác, không cần sửa. |
| Ông Khá, người lái đò bị hư mắt, được chữa lành rồi theo đạo | [S1] [S6] | Đạt | Khớp nguyên văn S6. Số liệu '50 giáo dân -> hơn 500' cũng khớp nguyên văn S6 (không tự xác nhận được trong S1, nhưng có trong S6 nên claim vẫn đạt). |
| Ý nghĩa tên gọi 'La Mã' — ví lòng trung kiên giữ đạo với tín hữu Rôma sơ khai | [S4] | Đạt | Khớp nguyên văn S4: 'muốn nói rằng họ đạo trung kiên giữ đức tin giữa những khói lửa chiến tranh'. |
| La Mã Bến Tre là trung tâm hành hương thứ ba của Giáo hội Việt Nam, sau La Vang và Trà Kiệu | [S1] [S3] | Đạt | Khớp nguyên văn S1 ('La Mã trở thành trung tâm hành hương thứ ba của Việt Nam') và xác nhận qua WebSearch độc lập. |
| Là một trong ba trung tâm hành hương của Giáo phận Vĩnh Long, cùng Fatima Vĩnh Long và Đình Khao | [S1] | Đạt | Khớp cả nội dung bài lẫn menu điều hướng của chính trang giaophanvinhlong.net ('Trung tâm La Mã / Trung tâm Fatima / Trung tâm Đình Khao'). |
| La Mã Bến Tre là trung tâm hành hương lớn nhất vùng châu thổ sông Cửu Long | [S1] [S2] [S3] [S4] [S5] | Bỏ | Đã đọc cả 5 nguồn cấp B (trực tiếp hoặc qua WebFetch) và tìm thêm qua WebSearch riêng — không nguồn nào xác nhận xếp hạng 'lớn nhất vùng châu thổ Cửu Long' này. Đây là suy luận/embellishment của người khảo cứu, không có nguồn — phải bỏ khỏi significance trước khi đăng. |


### Kiểm chuyện kể & giai thoại

Chuyện kể không bị chấm theo chuẩn sự thật lịch sử. Chỉ kiểm ba điều: có nguồn đọc lại được không, có bị nguồn nào bác bỏ không, và có được gắn nhãn truyền tụng không.

| Chuyện kể | Độ xác thực | Có gắn nhãn truyền tụng | Kết luận | Ghi chú |
|---|---|---|---|---|
| Sự tích Đức Mẹ lộ hình giữa trận bắn phá 7/10/1950 | có nguồn A/B đối chiếu phần nền | có | DUYỆT | Phần nền (bức ảnh thật từng mất/tìm lại, trận bắn phá 7/10/1950 có thật) được nhiều nguồn cấp B xác nhận; phần 'ảnh tự hiện hình' là niềm tin, giữ đúng nhãn truyền tụng trong oralTradition. Không nguồn A/B nào bác bỏ. |
| Mũ triều thiên lộ rõ ngày lễ Đức Mẹ Mông Triệu 15/8/1951 | có nguồn A/B đối chiếu phần nền | có | DUYỆT | Sự kiện cung nghinh ảnh 15/8/1951 có thật (S1, S2 xác nhận nguyên văn); chi tiết 'mũ triều thiên tự lộ rõ' giữ mức truyền tụng, có nhãn. Không nguồn A/B nào bác bỏ. |
| Ông Khá, người lái đò được Đức Mẹ chữa lành đôi mắt | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | có | DUYỆT | Xác nhận nguyên văn trong S6 (blog cấp C, đọc lại được), không có hồ sơ y khoa nào xác nhận việc chữa lành — đúng mức 'chưa kiểm chứng', có nhãn 'theo lời kể', không nguồn A/B nào bác bỏ. |


### Kiểm chéo độc lập

Nguồn do người kiểm chứng tự tìm, không lấy từ báo cáo khảo cứu.

| Nguồn | URL | Xác nhận / bác bỏ điều gì |
|---|---|---|
| WebSearch độc lập xác nhận năm 1951 qua nhiều nguồn khác ngoài hồ sơ | [liên kết](https://mytour.vn/vi/blog/bai-viet/nha-tho-la-ma-o-ben-tre-diem-hanh-huong-noi-tieng.html) | Cùng với mia.vn, banthochuabeconi.com, phieuluu5chau.com, vanhoatinnguong.vn, nhathoconggiaovietnam.com — tất cả đều lặp lại 'thành lập năm 1951 bởi Giám mục Ngô Đình Thục', không nguồn nào nêu năm khác. Không tìm thấy nguồn nào xác nhận 'lớn nhất vùng châu thổ Cửu Long'. |
| Photon (Komoot) — reverse-geocode toạ độ cũ và mới | [liên kết](https://photon.komoot.io/reverse?lat=10.0994&lon=106.4772) | Toạ độ mới trả về thẳng 'Nhà thờ đức mẹ la mã'. Cùng công cụ, toạ độ cũ (10.1583,106.4958) trả về 'Trường Tiểu học Thị trấn Giồng Trôm' — cách xa vị trí nhà thờ thật, xác nhận toạ độ cũ sai. |
| OpenStreetMap API — xác minh 2 node độc lập không qua trang web node | [liên kết](https://api.openstreetmap.org/api/0.6/node/5152922021.json) | 2 node do 2 user khác nhau tạo năm 2017, chưa từng chỉnh sửa, cách nhau ~150m — không có way/building nào bao quanh trong bán kính 500m (khu vực nông thôn thưa dữ liệu OSM), phù hợp với đặc điểm vùng Hưng Nhượng. |
| buulong.com.vn — hai bài bị hồ sơ loại, tự kiểm lại bằng WebFetch | [liên kết](https://buulong.com.vn/duc-me-la-ma-ben-tre.html) | Bài 1 ghi địa chỉ sai hẳn huyện (Châu Thành thay vì Giồng Trôm), mô tả kiến trúc không khớp thực tế ('nhà thờ chính toà', 'quảng trường hành hương rộng lớn'). Bài 2 (nha-tho-la-ma-ben-tre.html) lại ghi đúng huyện Giồng Trôm nhưng bịa năm 'mở rộng 1965' và 'công nhận 1952' theo cách không khớp bất kỳ nguồn nào khác — hai bài của cùng một trang mâu thuẫn nhau về địa chỉ. Xác nhận quyết định loại bỏ 2 nguồn này của người khảo cứu là đúng, không ảnh hưởng đến 5 nguồn còn lại. |


## 3. Kiểm hình ảnh

| File | Nguồn công khai xác minh | Giấy phép (nếu biết) | Đúng linh địa | Dấu hiệu AI | Kết luận |
|---|---|---|---|---|---|
| lama-mat-tien-nha-tho.jpg | có | — | có | không thấy | DUYỆT |
| lama-cong-den-hcg.jpg | có | — | có | không thấy | DUYỆT |
| lama-noi-that-thanh-duong.jpg | có | — | có | không thấy | DUYỆT |
| lama-thap-chuong.webp | có | — | có | không thấy | DUYỆT |
| lama-linh-anh-hcg.jpg | có | CC BY-SA 4.0 (theo khai báo người tải lên) | có | không thấy | DUYỆT |


## 4. Kiểm kỹ thuật & ảnh hưởng hệ thống

| Mục | Ảnh hưởng |
|---|---|
| Số lượng linh địa | không đổi (cập nhật bản ghi 'lama' đã có) |
| CONSTELLATION_VERSIONS | không đổi — constellationRole.v1/v2/v3 vẫn null như bản cũ, không đề xuất sửa |
| Số assertion npm test | không đổi số lượng test; record vẫn thoả sources.length>=2 (tăng từ 2 lên 5) và lat/lng trong lãnh thổ VN |
| Ảnh thực địa | Lần đầu có realImage hợp lệ cho bản ghi 'lama' (hiện là null), cùng tối đa 3 ảnh phụ trong galleryImages (chọn trong 4 ảnh phu đã duyệt, tối đa 1 ảnh chinh) |
| Toạ độ | Sửa lệch ~6-7km — xác nhận độc lập bằng Photon reverse-geocode: toạ độ cũ trỏ vào một trường tiểu học ở thị trấn Giồng Trôm, không phải nhà thờ |
| Tài liệu phải cập nhật | docs/marian-sites-missing-info.md (nếu bản ghi 'lama' có trong danh sách thiếu ảnh/nguồn) |


```text
$ node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/lama/khao-cuu.json --allow-existing-id
=> DAT toan bo rang buoc bat buoc. Sau khi chen vao src/data/statues.js, chay "npm test" de xac nhan lai.
```

## 5. Vấn đề phát hiện

| Mức | Vấn đề | Vị trí | Đề nghị xử lý |
|---|---|---|---|
| Nặng | Câu 'trung tâm hành hương lớn nhất vùng châu thổ sông Cửu Long' trong significance không truy được về bất kỳ nguồn nào trong 5 nguồn cấp B được dẫn, cũng không thấy ở các nguồn độc lập khác đã tìm thêm | record.significance, câu 1 | Bỏ vế này, chỉ giữ phần có nguồn: thứ ba toàn quốc (sau La Vang, Trà Kiệu) và một trong ba trung tâm hành hương của Giáo phận Vĩnh Long. |
| Nhẹ | Ảnh lama-thap-chuong.webp dùng định dạng .webp, không thuộc .jpg/.jpeg/.png theo quy ước src/assets/real_photos | images[] (role: phu) | Chuyển đổi sang .jpg hoặc .png trước khi lưu file, giữ nguyên caption và vai trò gallery đã đề xuất. |
| Nhẹ | Năm 1951 (year) được 3 nguồn cấp B khẳng định trực tiếp, nhưng chính 2 trong 3 nguồn đó (S1, S3) còn một đoạn tường thuật chi tiết khác đặt mốc 'giáo quyền chính thức chọn La Mã làm trung tâm hành hương' vào 20/10/1952 (sau khi uỷ ban điều tra 'Sự lạ La Mã' kết luận) — một độ lệch nội tại trong chính nguồn, không phải do người khảo cứu suy diễn | record.year; record.historicalFact | Không đủ căn cứ để đổi năm (1951 vẫn là con số được công bố rộng rãi và nhất quán ở mọi nguồn thứ cấp tìm thêm được) — ghi nhận, không chặn triển khai. Đưa vào leads cho lượt khảo cứu sau: tìm văn bản gốc huấn lệnh/quyết định của Giám mục Ngô Đình Thục (đã có trong leads[] của hồ sơ khảo cứu) để xác định vì sao có 2 mốc 1951/1952. |
| Nhẹ | Không tự tải được byte gốc ảnh lama-linh-anh-hcg.jpg (Wikimedia Commons) để quét AI-marker bằng check-image.mjs do upload.wikimedia.org tự giới hạn tần suất (429) trong phiên này | imageChecks — lama-linh-anh-hcg.jpg | Đã bù bằng Commons API (extmetadata đầy đủ) và đối chiếu công dụng trên Wikipedia — đủ căn cứ để duyệt. Lượt sau có thể tải lại trực tiếp nếu cần chắc chắn hơn. |


## 6. Phần đã duyệt

Đây là phạm vi chính xác `marian-publish` được phép đưa lên website.

- [x] `year`
- [x] `lat`
- [x] `lng`
- [x] `title`
- [x] `historicalFact`
- [x] `architect`
- [x] `oralTradition`
- [x] `significance`
- [x] `sources`
- [x] Nguồn đưa vào dữ liệu: [S1], [S2], [S3], [S4], [S5]
- [x] Ảnh: lama-mat-tien-nha-tho.jpg, lama-cong-den-hcg.jpg, lama-noi-that-thanh-duong.jpg, lama-thap-chuong.webp, lama-linh-anh-hcg.jpg
- [x] Chuyện kể được phép viết vào `oralTradition`: Sự tích Đức Mẹ lộ hình giữa trận bắn phá 7/10/1950; Mũ triều thiên lộ rõ ngày lễ Đức Mẹ Mông Triệu 15/8/1951; Ông Khá, người lái đò được Đức Mẹ chữa lành đôi mắt
- [ ] Thay đổi chòm sao (`CONSTELLATION_VERSIONS`)

---

_Báo cáo sinh tự động từ hồ sơ JSON bằng `format-audit.mjs`. Sửa nội dung thì sửa file JSON rồi chạy lại lệnh, đừng sửa trực tiếp vào file markdown._
