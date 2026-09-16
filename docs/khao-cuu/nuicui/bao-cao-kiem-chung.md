# Báo cáo kiểm chứng: Đức Mẹ Núi Cúi

## Kết luận

> **ÁP DỤNG CÓ ĐIỀU KIỆN** — 35/40
>
> Phần văn bản, toạ độ, độ cao, năm khởi lập và cả 4 ảnh Wikimedia Commons đều đối chiếu độc lập khớp (OpenStreetMap + EXIF ảnh xác nhận toạ độ/độ cao mới, nhiều nguồn B-tier xác nhận mốc 13/3/2014) nên duyệt gần như nguyên trạng — NHƯNG phát hiện 2 khẳng định không được nguồn đã dẫn chứa thực: (1) 'xứ Russeykeo (Campuchia)... vì lý do địa chính trị' — Russeykeo thực ra là một giáo xứ tại Suối Cát, huyện Xuân Lộc, Đồng Nai (Việt Nam), và lý do thật theo đúng nguồn [S12] là đất nằm trong vành đai quốc phòng, không phải Campuchia hay 'địa chính trị'; (2) 'PGS.TS Nguyễn Văn Hiệp' đồng thiết kế — không nguồn nào trong hồ sơ (kể cả nguồn dẫn) thực sự xác nhận tên này. Cả hai đều sửa được bằng một câu, không ảnh hưởng phần còn lại của hồ sơ.

- **Hồ sơ khảo cứu đã kiểm**: `docs/khao-cuu/nuicui/khao-cuu.json`
- **Người kiểm chứng**: Claude (phiên kiểm chứng độc lập ducme.vn, yêu cầu của Duc Nguyen)
- **Ngày kiểm**: 2026-09-16
- **Cho phép triển khai**: có — `marian-publish` được chạy tiếp
- **Hồ sơ gốc**: `docs/khao-cuu/nuicui/kiem-chung.json` (schema `ducme.kiem-chung/v1`)

### Điều kiện bắt buộc trước khi triển khai

`marian-publish` làm đúng danh sách này, không thêm không bớt.

1. Trong historicalFact, sửa 'kế hoạch ban đầu đặt tại xứ Russeykeo (Campuchia) không thực hiện được vì lý do địa chính trị' thành 'kế hoạch ban đầu đặt tại xứ Russeykeo (giáo xứ ở Suối Cát, huyện Xuân Lộc, Đồng Nai) không thực hiện được vì đất nằm trong vành đai quốc phòng' — đúng theo nguyên văn nguồn [S12]
2. Trong architect, bỏ cụm 'phối hợp cùng PGS.TS Nguyễn Văn Hiệp thực hiện thiết kế quần thể' — chỉ giữ 'Kiến trúc sư Ngô Viết Nam Sơn (con trai kiến trúc sư Ngô Viết Thụ, người thiết kế Dinh Độc Lập) thực hiện thiết kế quần thể', vì không nguồn nào trong hồ sơ xác nhận được tên 'Nguyễn Văn Hiệp'
3. Dùng đúng 4 ảnh File:Đức Mẹ Núi Cúi.jpg / .../_2.jpg / _3.jpg / _4.jpg làm realImage + galleryImages theo đúng caption đề xuất trong hồ sơ khảo cứu — không cần bổ sung giấy phép, CC BY-SA 4.0 đã có sẵn và đủ
4. Viết oralTradition đúng 3 chuyện kể đã duyệt (ý nghĩa tên gọi, tượng phỏng theo mẫu Mekong, chứng từ ơn lành hiện đại), mỗi ý giữ nguyên nhãn truyền tụng đã có; KHÔNG đưa giai thoại 'bà Hạnh 1790' lên website dưới bất kỳ trường nào
5. Các trường year (2014), lat (11.0855), lng (107.1548), elevation ('176m...') áp dụng nguyên trạng như hồ sơ khảo cứu đề xuất — đã đối chiếu độc lập đạt

## 1. Chấm điểm

| Trục | Điểm | Bằng chứng |
|---|---|---|
| Chất lượng nguồn | 5/5 | Tự mở và xác nhận nội dung của 11 nguồn dùng trong record (S1 giaophanxuanloc.net, S2 hdgmvietnam.com, S3 wikipedia, S5 thanhnien.vn, S6 znews.vn, S7 vinhcuu.vn, S8 mia.vn, S11+S12 cgvdt.vn hai bài khác nhau, S14 giaophanphucuong.org, S16 buicongthuan.com) — tất cả còn sống và đúng chủ thể; nhiều nguồn cấp B độc lập (giáo phận, HĐGM, báo chí) đồng thuận trên cùng mốc thời gian. Cộng 4 ảnh cấp A (Wikimedia Commons, có EXIF). |
| Truy vết luận điểm | 3/5 | Phần lớn khẳng định (mốc 13/3/2014, 18/9/2015, 15/8/2018, kích thước tượng 33/17/50m, mở cửa 2/2/2022, ba tước hiệu, sức chứa 100.000, Girelli 'linh địa hiếm có', Đường Thánh Giá 365 bậc/14 chặng) đều truy đúng nguyên văn khi tự mở nguồn. NHƯNG phát hiện 2 khẳng định không được nguồn gán chứa: 'Russeykeo (Campuchia)/lý do địa chính trị' (S12 khi mở trực tiếp chỉ nói đất ở chân núi Chứa Chan, Xuân Lộc, vướng 'vành đai quốc phòng' — không hề nhắc Campuchia hay địa chính trị) và 'PGS.TS Nguyễn Văn Hiệp' (S12 mở trực tiếp không có tên này; S13 chết, và ngay cả ghi chú 'supports' của chính hồ sơ cho S13 cũng không nhắc tên này). Đây là lỗi nặng nhất theo tiêu chí B2 — đã liệt vào conditions. |
| Độ chính xác dữ liệu | 4/5 | Đối chiếu độc lập (không dùng lại kết quả của người khảo cứu): toạ độ OpenStreetMap POI 'Đức Mẹ Núi Cúi' = 11.0858772, 107.1544266 và 11.0860001, 107.1542579 — khớp đề xuất (11.0855, 107.1548) trong vòng ~50-70m, và trung bình EXIF của chính 4 ảnh (~11.0854, 107.1547) cũng khớp; toạ độ cũ (11.0428, 107.1511) lệch ~4,8km — sai. Độ cao: EXIF GPS altitude của 4 ảnh (173/178/181/168m, trung bình ~175m) khớp sát 176m [S11], không tìm được nguồn nào cho 120m cũ. Năm 2014 khớp đúng định nghĩa trường 'year' trong lược đồ dữ liệu ('năm khởi lập linh địa', xem references/luoc-do-du-lieu.md) — nhiều nguồn (kể cả một nguồn không do người khảo cứu tìm) đồng thuận mốc 13/3/2014. Trừ điểm vì lỗi định vị địa lý 'Russeykeo ở Campuchia' — sai vị trí thực (Việt Nam, không phải Campuchia). |
| Hình ảnh | 5/5 | Mở filePage cả 4 ảnh trên Wikimedia Commons: cùng tác giả Theodor/Theodorlee, CC BY-SA 4.0, chụp 24/1/2024, đúng chủ thể (tượng Đức Mẹ Núi Cúi), có EXIF đầy đủ (độ phân giải 6936×9248, exposure, ISO, focal length, GPS lat/lng/altitude) — toạ độ EXIF khớp vị trí thực tế (đối chiếu OSM). Không dấu hiệu AI (không C2PA, không watermark công cụ tạo sinh, metadata máy ảnh nhất quán, không có gì méo/nhoè bất thường). check-image.mjs không chạy được vì môi trường không tải được file gốc qua curl (Wikimedia trả lỗi/giới hạn tần suất) — bù bằng cách đọc trực tiếp toàn bộ metadata trên trang filePage qua WebFetch, đạt tương đương mục tiêu của script. |
| Phân định sự thật / truyền tụng | 5/5 | historicalFact chỉ chứa sự kiện có nguồn; oralTradition có nhãn 'theo lời giải thích được phổ biến', 'lưu truyền', 'chưa qua xác minh của giáo quyền'; 3/4 chuyện kể đủ điều kiện lên oralTradition có nhãn, chuyện 'bà Hạnh 1790' bị nhận diện đúng là dabacbo và giữ ngoài website. Chứng từ ơn lành hiện đại đúng đắn không đưa vào historicalFact dù có tên cụ thể trong nguồn. |
| Giọng văn & trung lập | 4/5 | Trung lập, kính trọng, không tuyên truyền chính trị. Trừ điểm vì cụm 'lý do địa chính trị' là suy đoán không có nguồn được viết như thể là sự kiện — đúng dạng lỗi cần tránh với nội dung nhạy cảm của dự án (mô tả sự kiện, không suy diễn). |
| Tính kỹ thuật | 4/5 | validate-record.mjs: 4 lỗi chặn còn lại đều chỉ là ảnh chưa tải về src/assets/real_photos/ — đúng phạm vi marian-research (không được tải ảnh), sẽ hết khi marian-publish tải ảnh đúng tên file đã duyệt. Không còn lỗi chặn nào khác. 3 cảnh báo (claims chỉ dựa nguồn cấp C/D) đã tự giải trình hợp lý trong hồ sơ. |
| Sức hấp dẫn & chiều sâu tư liệu | 5/5 | Tư liệu rất dày: lịch sử đầy đủ 2013–2022, kiến trúc chi tiết, 4 chuyện kể có nguồn đọc lại được, kho imageCandidates cho vòng sau, 7 lead cụ thể (hồi ký 'Đường đến Núi Cúi', playlist YouTube, Facebook chính thức, trang chủ menu 'LỊCH SỬ HÌNH THÀNH'...), conflicts/unknowns trình bày minh bạch thay vì giấu đi. |


**Tổng: 35/40.**

## 2. Kiểm nguồn dẫn

| Mã | URL | Trạng thái | Chứa luận điểm? | Kiểm lại bằng | Ghi chú |
|---|---|---|---|---|---|
| S1 | [liên kết](https://giaophanxuanloc.net/chi-tiet/tthh-duc-me-nui-cui) | còn sống | có | — | Tự mở lại bằng WebFetch: xác nhận nguyên văn ba tước hiệu, sức chứa 'trên 100.000 người', mục đích đền tạ tội phá thai/chiến tranh. |
| S2 | [liên kết](https://hdgmvietnam.com/chi-tiet/thanh-le-xay-dung-trung-tam-duc-me-nui-cui-34127) | còn sống | có | — | Xác nhận khởi công 15/8/2018, Đức cha Giuse Đinh Đức Đạo chủ trì, ~17.000 người dự. |
| S3 | [liên kết](https://vi.wikipedia.org/wiki/Trung_tâm_hành_hương_Đức_Mẹ_Núi_Cúi) | còn sống | có | — | Xác nhận kích thước 33m+17m=50m, lễ đặt viên đá 2015. Không nhắc 'Núi Cát Minh' — nhưng chi tiết đó chỉ dùng cho oralTradition nên không sao. |
| S4 | [liên kết](https://namthientravel.com.vn/su-tich-duc-me-nui-cui/) | còn sống | có | — | Cấp C, dùng cho oralTradition — đúng phạm vi. |
| S5 | [liên kết](https://thanhnien.vn/trung-tam-hanh-huong-duc-me-nui-cui-don-hang-ngan-luot-khach-moi-ngay-dip-tet-1851426967.htm) | còn sống | có | — | Xác nhận mở cửa mùng 2 Tết Nhâm Dần (2/2), kích thước 33m/17m/50m. |
| S6 | [liên kết](https://znews.vn/tuong-duc-me-maria-cao-nhat-viet-nam-tren-dinh-nui-cui-dong-nai-post1290989.html) | còn sống | có | — | check-sources.mjs báo cờ 'không thấy từ khoá' do đối sánh cụm chữ tự động — tự mở lại bằng WebFetch xác nhận đúng nội dung: 33m, công nghệ CNC+GRC, đăng 20/1/2022. Cờ tự động là dương tính giả. |
| S7 | [liên kết](https://vinhcuu.vn/du-an/du-an-tuong-duc-me-nui-cui-cao-nhat-viet-nam/) | còn sống | có | — | Xác nhận khởi công 10/2020, hoàn thành 12/2021, Công ty Vĩnh Cửu thi công. Trang tự ghi tượng 'cao 34m' (lệch 1m so với 33m ở các nguồn khác) — số 33m có nhiều nguồn B đồng thuận hơn nên giữ 33m, không phải lỗi chặn. |
| S8 | [liên kết](https://mia.vn/cam-nang-du-lich/hanh-huong-duc-me-nui-cui-16038) | còn sống | có | — | Xác nhận 11/2013 công bố ý tưởng, 13/3/2014 UBND cấp phép 13,5ha, kích thước đế ba tầng. |
| S11 | [liên kết](https://www.cgvdt.vn/cong-giao-viet-nam/nui-cui-da-co-tuong-duc-me_a1978) | còn sống | có | — | Xác nhận lễ làm phép tượng 30/9/2015, mẫu tượng phỏng theo tượng vớt từ sông Mekong ở Arey Khsath (Campuchia — LƯU Ý: đây là vị trí của TƯỢNG MẪU, khác 'xứ Russeykeo' ở S12), núi cao 176m, khởi công đất 18/9/2015. |
| S12 | [liên kết](https://cgvdt.vn/cong-trinh-trung-tam-uc-me-nui-cui_a14547) | còn sống | **KHÔNG** | — | Mở trực tiếp: xác nhận đúng phần lớn trình tự lịch sử (Russeykeo thất bại vì 'đất vành đai quốc phòng' ở chân núi Chứa Chan — KHÔNG nhắc Campuchia hay 'lý do địa chính trị'; kiến trúc sư Ngô Viết Nam Sơn — KHÔNG nhắc 'Nguyễn Văn Hiệp'; lễ đặt viên đá 18/9/2015 với 50.000 giáo dân/500 linh mục/30 giám mục/Hồng y Nguyễn Văn Nhơn, hồi ký 'Đường đến Núi Cúi'). containsClaim=false vì 2 chi tiết cụ thể (Campuchia+địa chính trị; Nguyễn Văn Hiệp) được gán cho nguồn này KHÔNG có trong nguồn — xem claimChecks và conditions. |
| S13 | [liên kết](https://chuathuongxot.org/DucMe/DucMeNuiCuiA.htm) | CHẾT | **KHÔNG** | — | curl báo lỗi SSL (chứng chỉ không khớp tên miền); thử lại qua web.archive.org bị chặn công cụ (không fetch được archive.org từ phiên này), thử API rate-limit. Không do proxy chặn theo host — có dấu hiệu domain thật sự có vấn đề SSL. Không dùng làm căn cứ cho bất kỳ khẳng định nào (đã inRecord:false sẵn); riêng việc dùng S13 làm đồng-nguồn cho tên 'Nguyễn Văn Hiệp' không thể xác minh vì nguồn chết. |
| S14 | [liên kết](https://giaophanphucuong.org/bai-viet/tan-man---do-day/nui-cui-ve-giua-thien-nhien) | còn sống | có | — | Xác nhận nguyên văn: 'Ngài chọn Núi Cúi... gọi tên ngọn núi này là núi Cát Minh' và mốc 11/2013. |
| S15 | [liên kết](https://hddmvn.net/len-nui-cui/) | còn sống | có | — | Cấp C, dùng cho oralTradition — đúng phạm vi. |
| S16 | [liên kết](https://buicongthuan.com/hanh-huong-duc-me-nui-cui-bui-cong-thuan/) | còn sống | có | — | Xác nhận Đền Thánh 5.000 chỗ/12 nhà nguyện nhỏ, Đường Thánh Giá 365 bậc/14 chặng, câu nói Girelli 'linh địa hiếm có' — khớp nguyên văn. Ghi chú: nguồn này THỰC RA có nêu tên cụ thể 3 trường hợp ơn lành (Rosa Vũ Hoàng Khánh Vy, Maria Nguyễn Thị Thanh Tĩnh, Têrêxa Calcutta Nguyễn Thị Thanh Huyền) — hồ sơ khảo cứu ghi nhầm là 'không có tên tuổi cụ thể'; không đổi kết luận (vẫn đúng là chưa được giáo quyền xác minh) nhưng đáng sửa ghi chú ở lượt sau. |
| S17 | [liên kết](https://commons.wikimedia.org/wiki/File:Đức_Mẹ_Núi_Cúi.jpg) | còn sống | có | — | Mở filePage: tác giả Theodor, CC BY-SA 4.0, chụp 24/1/2024, EXIF lat 11°05'02.78"N lng 107°09'19.34"E alt 173m, đúng chủ thể. |
| S18 | [liên kết](https://commons.wikimedia.org/wiki/File:Đức_Mẹ_Núi_Cúi_2.jpg) | còn sống | có | — | Mở filePage: cùng tác giả/giấy phép/ngày, EXIF lat 11°05'08.52"N lng 107°09'15.4"E alt 178m, đúng chủ thể. |
| S19 | [liên kết](https://commons.wikimedia.org/wiki/File:Đức_Mẹ_Núi_Cúi_3.jpg) | còn sống | có | — | Mở filePage: cùng tác giả/giấy phép/ngày, EXIF lat 11°05'09.63"N lng 107°09'16.26"E alt 181m, đúng chủ thể. |
| S20 | [liên kết](https://commons.wikimedia.org/wiki/File:Đức_Mẹ_Núi_Cúi_4.jpg) | còn sống | có | — | Mở filePage: cùng tác giả/giấy phép, chụp 24/1/2024 07:46, EXIF lat 11°05'08.77"N lng 107°09'16.27"E alt 168m, đúng chủ thể. |
| S22 | [liên kết](https://www.facebook.com/trungtamducmenuicui/?locale=vi_VN) | chuyển hướng | **KHÔNG** | — | Chuyển hướng sang trang đăng nhập Facebook — đúng như hồ sơ đã ghi (cấp D, chỉ dùng làm manh mối, không đưa vào sources của dữ liệu). Không ảnh hưởng kết luận. |
| S9 | [liên kết](https://gratia.vn/tuong-duc-me-nui-cui) | còn sống | có | — | Kiểm độc lập: tìm thêm được ít nhất 3 trang khác cũng lưu truyền đúng chi tiết 'bà Hạnh 1790 + Giáo Hoàng Innocenzo XI' (giaoxuhoakhanh.com, banthochuadep.vn, sachconggiao.vn) — xác nhận đây đúng là lỗi chép dây chuyền lan rộng, không phải hiện tượng cá biệt. Đồng ý với đánh giá 'dabacbo' của hồ sơ. |


### Đối chiếu luận điểm

| Luận điểm | Nguồn | Kết luận | Ghi chú |
|---|---|---|---|
| UBND tỉnh Đồng Nai chấp thuận thành lập Trung tâm Hành hương ngày 13/3/2014, cấp 13,5ha (dùng cho trường year) | [S8] [S4] | Đạt | Đối chiếu độc lập (không dùng lại tìm kiếm của người khảo cứu) qua WebSearch: nhiều trang độc lập khác đồng thuận mốc 13/3/2014 (có một biến thể nhỏ 31/3/2014 ở vài trang thứ cấp). Mốc này đúng với định nghĩa trường 'year' trong lược đồ dữ liệu ('năm khởi lập linh địa') — hợp lý hơn hẳn năm 2020 cũ. |
| Toạ độ 11.0855°N, 107.1548°E | [S17] [S18] [S19] | Đạt | Đối chiếu độc lập qua OpenStreetMap (POI 'Đức Mẹ Núi Cúi': 11.0858772/107.1544266 và 11.0860001/107.1542579) — khớp trong phạm vi ~70m, thoả tiêu chí lệch ≤500m. Không còn là 'độ tin cậy thấp' như hồ sơ tự đánh giá — có nguồn thứ ba độc lập xác nhận. |
| Độ cao Núi Cúi 176m | [S11] | Đạt | Đối chiếu bằng EXIF GPS altitude của chính 4 ảnh Wikimedia (173/178/181/168m, trung bình ~175m) — khớp sát 176m. Không tìm được nguồn độc lập nào cho 120m cũ. |
| Kế hoạch ban đầu đặt tại xứ Russeykeo (Campuchia) không thực hiện được vì lý do địa chính trị | [S12] | Sửa câu chữ | SAI vị trí. Mở trực tiếp S12: '20 mẫu đất ở chân núi Chứa Chan đã được giáo phận chuẩn bị... nhưng vì lý do nằm ở đất vành đai quốc phòng nên không thể xây dựng' — đây là đất ở Xuân Lộc, Đồng Nai (VIỆT NAM), không phải Campuchia. Xứ Russeykeo là giáo xứ tại Suối Cát, huyện Xuân Lộc, Đồng Nai, do giáo dân từ giáo xứ cùng tên ở Phnom Penh hồi hương lập năm 1970 (tên gọi mượn từ nơi gốc, không phải địa danh ở Campuchia). Lý do thật là đất nằm trong vành đai quốc phòng (hạn chế xây dựng), không phải 'lý do địa chính trị' mơ hồ. Sửa lại theo đúng nguồn — xem conditions. |
| Kiến trúc sư Ngô Viết Nam Sơn phối hợp cùng PGS.TS Nguyễn Văn Hiệp thiết kế | [S12] [S13] | Sửa câu chữ | Phần 'Ngô Viết Nam Sơn' đạt (S12 xác nhận trực tiếp, độc lập xác nhận thêm ông là con trai KTS Ngô Viết Thụ). Phần 'Nguyễn Văn Hiệp' KHÔNG đạt: S12 mở trực tiếp không hề nhắc tên này; S13 chết không kiểm được, và bản thân ghi chú 'supports' của hồ sơ khảo cứu cho S13 cũng không liệt tên này (chỉ ghi 'xác nhận thêm tên Ngô Viết Nam Sơn; trivia tượng cao thứ 4 thế giới'). Tìm kiếm độc lập cũng không ra kết quả. Bỏ tên 'Nguyễn Văn Hiệp' khỏi trường architect — xem conditions. |
| Lễ kính chính ngày 8/12 (lễ Đức Mẹ Vô Nhiễm Nguyên Tội) | [S24] | Sửa câu chữ | S24 (đã tự mở) KHÔNG xác nhận nội dung này — chỉ nói về một thánh lễ hành hương đầu tháng 4. Tuy nhiên nội dung của khẳng định vẫn ĐÚNG: tìm độc lập ra bài 'Mừng Kính Trọng thể Lễ Đức Maria Vô Nhiễm Nguyên Tội - Bổn Mạng TTHH Đức Mẹ Núi Cúi' trên chính giaophanxuanloc.net xác nhận 8/12 là lễ Bổn Mạng. Giữ nguyên câu trong significance nhưng khuyến nghị đổi nguồn trích dẫn nội bộ từ S24 sang bài về Bổn Mạng ở lượt khảo cứu sau (không ảnh hưởng approved.sources vì S24 vốn đã inRecord:false). |
| Ba tước hiệu (Vô Nhiễm Nguyên Tội, Nữ Vương Các Thánh Tử Đạo VN, Mẹ Lòng Thương Xót) và mục đích đền tạ phá thai/chiến tranh | [S1] | Đạt | Khớp nguyên văn khi tự mở S1. |
| Kích thước tượng 33m + đế 17m = 50m | [S8] [S5] [S6] | Đạt | Khớp cả 3 nguồn đã tự mở, cộng Wikipedia (S3) cũng xác nhận cùng số liệu. |
| Girelli gọi đây là 'linh địa hiếm có' | [S16] | Đạt | Khớp nguyên văn S16; tìm độc lập còn ra chi tiết ngày viếng thăm cụ thể (19/5/2015) và nguyên văn đầy đủ hơn ('Có núi Tabo, có hồ Galilê...'). |


### Kiểm chuyện kể & giai thoại

Chuyện kể không bị chấm theo chuẩn sự thật lịch sử. Chỉ kiểm ba điều: có nguồn đọc lại được không, có bị nguồn nào bác bỏ không, và có được gắn nhãn truyền tụng không.

| Chuyện kể | Độ xác thực | Có gắn nhãn truyền tụng | Kết luận | Ghi chú |
|---|---|---|---|---|
| Ý nghĩa tên gọi 'Núi Cúi' — Mẹ cúi xuống nhìn đoàn con | có nguồn A/B đối chiếu phần nền | có | DUYỆT | S14 (tự mở) xác nhận nguyên văn tên gọi 'Núi Cát Minh' do Đức cha đặt và mốc 11/2013 — phần nền đối chiếu được, phần diễn giải ý nghĩa hai chiều giữ đúng ở oralTradition có nhãn. |
| Tượng phỏng theo mẫu Đức Mẹ vớt lên từ sông Mekong | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | có | DUYỆT | Phần 'Núi Cúi phỏng theo mẫu đó' đã vào historicalFact (S11 xác nhận trực tiếp, đúng). Phần gốc tích 'tượng mẫu được vớt từ sông' là truyền tụng về MỘT PHO TƯỢNG KHÁC ở Campuchia — giữ đúng ở oralTradition/folklore, có nhãn, không bị nguồn A/B nào bác bỏ. |
| Chứng từ ơn lành thời hiện đại | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | có | DUYỆT | S16 (tự mở) xác nhận đúng 3 trường hợp — có nhãn 'chưa qua xác minh của giáo quyền', không đưa vào historicalFact. Không nguồn A/B nào bác bỏ. |
| Giai thoại 'bà Hạnh phát hiện hộp gỗ năm 1790' | đã bị bác bỏ — không đưa lên website | có | LOẠI | Mâu thuẫn toàn diện với chuỗi sự kiện đã xác nhận bởi nhiều nguồn cấp B (giáo phận, HĐGM, báo Công giáo và Dân tộc). Tìm độc lập còn phát hiện thêm nhiều trang khác lặp lại chi tiết y hệt — càng củng cố đây là lỗi chép dây chuyền. Đúng như hồ sơ đề xuất: không đưa lên website. |


### Kiểm chéo độc lập

Nguồn do người kiểm chứng tự tìm, không lấy từ báo cáo khảo cứu.

| Nguồn | URL | Xác nhận / bác bỏ điều gì |
|---|---|---|
| OpenStreetMap Nominatim — POI 'Đức Mẹ Núi Cúi' | [liên kết](https://nominatim.openstreetmap.org/search?q=%C4%90%E1%BB%A9c+M%E1%BA%B9+N%C3%BAi+C%C3%BAi&format=json) | Hai điểm POI: 11.0858772/107.1544266 (place_of_worship) và 11.0860001/107.1542579 (artwork) — khớp đề xuất 11.0855/107.1548 trong phạm vi ~70m, độc lập với ảnh Wikimedia. |
| Tìm độc lập vị trí xứ Russeykeo | [liên kết](https://groups.google.com/g/AlphonseFamily/c/kJtPNUyGfvg) | Xứ Russeykeo là một giáo xứ tại Suối Cát, huyện Xuân Lộc, Đồng Nai — lập năm 1970 bởi giáo dân hồi hương từ giáo xứ cùng tên ở Phnom Penh (1863). Đất định xây trung tâm hành hương ('chân núi Chứa Chan') là đất Việt Nam, không phải Campuchia — xác nhận claimChecks. |
| Tìm độc lập ngày lễ Bổn Mạng TTHH Đức Mẹ Núi Cúi | [liên kết](https://giaophanxuanloc.net/chi-tiet/mung-kinh-trong-the-le-duc-maria-vo-nhiem-nguyen-toi--bon-mang-tthh-duc-me-nui-cui) | Xác nhận 8/12 (Lễ Đức Maria Vô Nhiễm Nguyên Tội) là lễ Bổn Mạng chính thức của trung tâm — nguồn tốt hơn S24 vốn không chứa nội dung này. |
| Xác nhận độc lập giai thoại 'bà Hạnh 1790' bị chép lan rộng | [liên kết](https://giaoxuhoakhanh.com/tieu-su-duc-me-nui-cui/) | Ít nhất thêm 3 trang khác (giaoxuhoakhanh.com, banthochuadep.vn, sachconggiao.vn) lặp lại đúng chi tiết 'bia đá + Giáo Hoàng Innocenzo XI' — củng cố đánh giá 'dabacbo' của hồ sơ, đây là lỗi chép dây chuyền lan rộng chứ không phải hiện tượng cá biệt. |
| Xác nhận độc lập Ngô Viết Nam Sơn là con trai KTS Ngô Viết Thụ | [liên kết](https://dantri.com.vn/doi-song/cuoc-tro-chuyen-dip-dac-biet-voi-con-trai-nguoi-thiet-ke-dinh-doc-lap-20250429151633841.htm) | Xác nhận đúng — không liên quan gì đến 'Nguyễn Văn Hiệp'. |


## 3. Kiểm hình ảnh

| File | Nguồn công khai xác minh | Giấy phép (nếu biết) | Đúng linh địa | Dấu hiệu AI | Kết luận |
|---|---|---|---|---|---|
| File:Đức Mẹ Núi Cúi.jpg | có | CC BY-SA 4.0 | có | không thấy | DUYỆT |
| File:Đức Mẹ Núi Cúi 2.jpg | có | CC BY-SA 4.0 | có | không thấy | DUYỆT |
| File:Đức Mẹ Núi Cúi 3.jpg | có | CC BY-SA 4.0 | có | không thấy | DUYỆT |
| File:Đức Mẹ Núi Cúi 4.jpg | có | CC BY-SA 4.0 | có | không thấy | DUYỆT |


## 4. Kiểm kỹ thuật & ảnh hưởng hệ thống

| Mục | Ảnh hưởng |
|---|---|
| Số lượng linh địa | không đổi |
| CONSTELLATION_VERSIONS | không đổi — chỉ v4 (đã có từ trước), v1/v2/v3 giữ null như cũ |
| Số assertion npm test | không đổi số lượng bản ghi; nguồn từ 3 (link tìm kiếm) lên 11 (bài viết trực tiếp) cho riêng bản ghi nuicui |
| Ảnh thực địa | Lần đầu có realImage hợp lệ cho nuicui (hiện đang null), cùng 3 ảnh phụ đầu tiên trong galleryImages — cần marian-publish tải 4 file về src/assets/real_photos/nuicui.jpg, nuicui-2.jpg, nuicui-3.jpg, nuicui-4.jpg |
| Tài liệu phải cập nhật |  |


```text
$ node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/nuicui/khao-cuu.json --allow-existing-id
LOI CHAN (4) — toan bo la anh chua tai ve src/assets/real_photos/ (dung pham vi marian-research). Khong con loi chan nao khac. 3 canh bao ve claims chi dua nguon cap C/D da tu giai trinh trong claims[].
```

## 5. Vấn đề phát hiện

| Mức | Vấn đề | Vị trí | Đề nghị xử lý |
|---|---|---|---|
| Nặng | 'Xứ Russeykeo (Campuchia)... vì lý do địa chính trị' không khớp nội dung nguồn [S12] — Russeykeo thực ra ở Đồng Nai (Việt Nam), lý do thật là đất vành đai quốc phòng | historicalFact, câu 1 | Sửa thành: kế hoạch ban đầu đặt tại xứ Russeykeo (giáo xứ ở Suối Cát, huyện Xuân Lộc, Đồng Nai) không thực hiện được vì đất nằm trong vành đai quốc phòng |
| Nặng | 'PGS.TS Nguyễn Văn Hiệp' đồng thiết kế không được nguồn nào (S12 mở trực tiếp, S13 chết) xác nhận | architect, câu 1 | Bỏ cụm 'phối hợp cùng PGS.TS Nguyễn Văn Hiệp', chỉ giữ kiến trúc sư Ngô Viết Nam Sơn |
| Nhẹ | Khẳng định 'lễ kính chính 8/12' dẫn nguồn S24 nhưng S24 không chứa nội dung này (nội dung vẫn đúng, có nguồn khác xác nhận độc lập) | fields[].significance, claims[1] trong khao-cuu.json | Không cần sửa website (S24 vốn không vào sources của dữ liệu); ghi nhận cho lượt khảo cứu sau đổi trích dẫn nội bộ sang bài về Bổn Mạng trên giaophanxuanloc.net |
| Nhẹ | Ghi chú của hồ sơ nói chứng từ ơn lành 'không có tên tuổi cụ thể' nhưng nguồn S16 thực ra có nêu tên — không đổi kết luận (vẫn là oralTradition chưa xác minh), chỉ là ghi chú không chính xác | fields[].oralTradition, note | Không cần sửa website; ghi nhận cho lượt khảo cứu sau |
| Nhẹ | Câu 'Nhà Nguyện Thánh Thể hoàn thành ngay sau đó bằng kinh phí đóng góp của các linh mục' không có claim/nguồn riêng trong claims[]; tìm thấy một sự kiện 'Thánh Lễ Làm Phép Nhà Nguyện Thánh Thể và Thánh hiến Bàn thờ' năm 2023 chưa rõ có mâu thuẫn hay là một nghi thức thánh hiến bổ sung | historicalFact, câu 2 | Không chặn triển khai (S11 đã xác nhận có 'làm phép nhà nguyện Thánh Thể' ngày 30/9/2015); khuyến nghị lượt sau xác minh thêm mốc 2023 trước khi viết chắc chắn hơn |
| Nhẹ | S6 (znews.vn) bị check-sources.mjs báo cờ 'không thấy từ khoá' do đối sánh cụm chữ tự động không khớp tiêu đề thực | sourceChecks | Đã tự mở lại bằng WebFetch và xác nhận đúng nội dung — không chặn, chỉ là dương tính giả của script tự động |


## 6. Phần đã duyệt

Đây là phạm vi chính xác `marian-publish` được phép đưa lên website.

- [x] `historicalFact`
- [x] `oralTradition`
- [x] `architect`
- [x] `significance`
- [x] `year`
- [x] `lat`
- [x] `lng`
- [x] `elevation`
- [x] `sources`
- [x] Nguồn đưa vào dữ liệu: [S1], [S2], [S3], [S5], [S6], [S7], [S8], [S11], [S12], [S14], [S16]
- [x] Ảnh: File:Đức Mẹ Núi Cúi.jpg, File:Đức Mẹ Núi Cúi 2.jpg, File:Đức Mẹ Núi Cúi 3.jpg, File:Đức Mẹ Núi Cúi 4.jpg
- [x] Chuyện kể được phép viết vào `oralTradition`: Ý nghĩa tên gọi 'Núi Cúi' — Mẹ cúi xuống nhìn đoàn con; Tượng phỏng theo mẫu Đức Mẹ vớt lên từ sông Mekong; Chứng từ ơn lành thời hiện đại
- [ ] Thay đổi chòm sao (`CONSTELLATION_VERSIONS`)

---

_Báo cáo sinh tự động từ hồ sơ JSON bằng `format-audit.mjs`. Sửa nội dung thì sửa file JSON rồi chạy lại lệnh, đừng sửa trực tiếp vào file markdown._
