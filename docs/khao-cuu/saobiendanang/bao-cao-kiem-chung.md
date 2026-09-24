# Báo cáo kiểm chứng: Đức Mẹ Sao Biển (Đà Nẵng)

## Kết luận

> **ÁP DỤNG CÓ ĐIỀU KIỆN** — 34/40
>
> Hồ sơ vững: mọi luận điểm cốt lõi (1960 lập tu viện, 1974 dựng tượng, 2008 bệ và mái kính, 2014 tượng Chúa Giêsu, tranh chấp đất, vụ phá hoại 26/12/2024) đều được mở nguồn và đối chiếu nguyên văn; toạ độ mới nằm trong khuôn viên theo OpenStreetMap; cả 4 ảnh là ảnh thật, đúng linh địa. Đoạn tranh chấp đất và vụ phá hoại đúng chính sách của chủ dự án (quy về nguồn ngay trong câu, không nêu tên cá nhân, có câu từ chối trách nhiệm). Duyệt kèm 5 điều kiện: bỏ chữ “Chính danh” trong nhãn chòm sao (vi phạm chính sách 3 về tính chính thức), chuyển câu rước thứ Bảy đầu tháng (chỉ có nguồn cấp C) sang significance, sửa hai chỗ câu chữ lệch nguồn [S3], và hạ cấp nguồn [S3] xuống C.

- **Hồ sơ khảo cứu đã kiểm**: `docs/khao-cuu/saobiendanang/khao-cuu.json`
- **Người kiểm chứng**: marian-audit — phiên Claude Code (kiểm chứng độc lập, lượt 2)
- **Ngày kiểm**: 2026-09-24
- **Cho phép triển khai**: có — `marian-publish` được chạy tiếp
- **Hồ sơ gốc**: `docs/khao-cuu/saobiendanang/kiem-chung.json` (schema `ducme.kiem-chung/v1`)

### Điều kiện bắt buộc trước khi triển khai

`marian-publish` làm đúng danh sách này, không thêm không bớt.

1. Trong constellationRole.v4 của bản ghi saobiendanang, đổi star từ “Chính danh Stella Maris Miền Trung” thành “Stella Maris Miền Trung”; giữ nguyên role “Bảo hộ Duyên hải”, code “NAT-14”, v1/v2/v3 = null; không sửa CONSTELLATION_VERSIONS.
2. Trong historicalFact, xoá đoạn “; một số trang hành hương mô tả thêm rằng vào sáng thứ Bảy đầu tháng, sau Thánh lễ tại nguyện đường cộng đoàn Dòng Phaolô, Đức Giám mục cùng các nữ tu và giáo dân rước ra viếng tượng” sao cho câu kết thúc bằng “...chủ sự giờ cầu nguyện hằng tháng trước tượng.”; rồi thêm vào cuối significance đúng câu: “Một số trang hành hương mô tả thêm rằng vào sáng thứ Bảy đầu tháng, sau Thánh lễ tại nguyện đường cộng đoàn Dòng Phaolô, Đức Giám mục cùng các nữ tu và giáo dân rước ra viếng tượng.”
3. Trong architect, sửa “Theo bài viết năm 2007, khi ấy tượng đặt trên kệ đá sơ sài dưới một mái tôn dựng trên bốn cột sắt, sát rừng phi lao ven biển.” thành “Theo bài viết năm 2007, khi ấy tượng đặt trên bệ đá dưới một mái tôn tuềnh toàng dựng trên bốn cột sắt, sát rừng phi lao ven biển.” theo nguyên văn [S3].
4. Trong oralTradition, sửa “và kể về một thanh niên sáng mưa nào cũng mang hoa đến, chỉ nói mình đã được ơn và xin giữ ơn ấy trong lòng.” thành “và kể về một thanh niên mang hoa đến trong một buổi sáng mưa, chỉ nói mình đã được ơn, xin giữ ơn ấy trong lòng và từ đó ngày nào cũng đến tạ ơn.” theo nguyên văn [S3].
5. Trong sources của bản ghi, đổi tier của mục “Viếng thăm và tạ ơn Đức Mẹ Sao Biển, Đà Nẵng — Minh Nguyên, Radio Veritas Asia (01/05/2007)” (https://vntaiwan.catholic.org.tw/07news/7news275.htm) từ “B” thành “C”; các mục nguồn khác giữ nguyên như record đề xuất.
6. Dùng duc-me-sao-bien-da-nang-b1.jpg (bản tải về: docs/khao-cuu/saobiendanang/anh/tcg2023-b1.jpg) làm realImage với đúng caption đề xuất trong images[]; dùng mesaobien3.jpg (anh/veritas2007-3.jpg), mesaobien2.jpg (anh/veritas2007-2.jpg), sb5_n.jpg (anh/ymag2021-sb5.jpg) làm galleryImages theo thứ tự này, đúng caption đề xuất. Không cần bổ sung giấy phép.
7. Giữ nguyên hai đoạn tranh chấp đất đai và vụ phá hoại 26/12/2024 trong historicalFact đúng như record đề xuất, kể cả hai câu “ducme.vn chỉ thuật lại theo nguồn đã dẫn, không xác minh độc lập và không đưa ra nhận định...”; không thêm tên người, không chuyển thành khẳng định trơn. Không đưa chuyện “Điều kỳ diệu” khiến thành phố đổi ý định dùng khu đất lên website dưới bất kỳ trường nào.

## 1. Chấm điểm

| Trục | Điểm | Bằng chứng |
|---|---|---|
| Chất lượng nguồn | 4/5 | 16/16 nguồn còn sống (check-sources + mở tay). Hai nguồn cấp B thật sự độc lập: phóng sự Global Sisters Report 2015 [S1] và báo Công giáo và Dân tộc 2022 [S2] (mục Bạn đọc). [S3] là ký sự cá nhân của Minh Nguyên chỉ “Prepared for Internet by Radio Veritas Asia” — nên xếp C. Không có nguồn cấp A (giáo phận/nhà dòng). |
| Truy vết luận điểm | 4/5 | Đã đọc toàn văn S1, S3, S4, S5, S6, S7, S8, S9, S10, S11, S13, S14, S15, S16 và trích đoạn S2 (WebFetch). Gần như mọi câu trong historicalFact/architect/significance/oralTradition khớp nguyên văn. Hai chỗ lệch nhẹ với [S3]: “thanh niên sáng mưa nào cũng mang hoa đến” (nguồn: một sáng mưa, và từ đó ngày nào cũng đến) và “theo bài viết năm 2007 ... kệ đá sơ sài” (nguồn 2007 ghi “bệ đá”, “kệ đá sơ sài” là chữ của dongten.net/CGvST). |
| Độ chính xác dữ liệu | 4/5 | Toạ độ 16.0479, 108.2483 tự tra lại qua Nominatim lookup và API OSM way 363224651 (tâm 16.04795, 108.24826, khung 16.0470–16.0486 / 108.2473–108.2492): nằm trong khuôn viên, cách bệ tượng dưới 100 m; đường Phan Tứ (OSM way 118666341) kết thúc sát góc đông nam khuôn viên, khớp địa chỉ ngã ba Võ Nguyên Giáp – Phan Tứ. Toạ độ cũ 16.0538 lệch ~650 m về phía bắc — sửa là đúng. Phường Ngũ Hành Sơn khớp S13. Năm 1974 chỉ có một nguồn (lời nữ tu qua S1); không nguồn độc lập nào ghi năm dựng tượng nhưng cũng không nguồn nào mâu thuẫn (mốc 2006 ở S5/S10/vietnamcatholictours là năm tượng ra ngoài / thành điểm hành hương). |
| Hình ảnh | 5/5 | 4 ảnh (1 chính, 3 phụ) — tải lại từ trang gốc, SHA-1 trùng khớp bản trong docs/khao-cuu/saobiendanang/anh/; EXIF máy thật (iPhone 11 Pro Max; Canon PowerShot S3 IS 28/04/2007); check-image không thấy dấu hiệu AI; xem trực tiếp: chữ tiếng Việt trên bảng đá/bảng tạ ơn đọc được, kiến trúc nhất quán, đúng cùng một pho tượng áo xanh đội triều thiên bồng Chúa dưới vọng đình mái kính. Watermark trên ảnh chính không phải lý do loại. |
| Phân định sự thật / truyền tụng | 4/5 | historicalFact và oralTradition tách bạch; mọi ý truyền tụng mở đầu bằng nhãn (“Người địa phương kể rằng”, “Theo lời kể chép trong bài viết năm 2007”, “Một nữ tu được dẫn lời rằng”, “đó là niềm tin của người kể”). Chuyện “tượng không hề hấn gì sau bão” nằm đúng ở oralTradition, historicalFact chỉ giữ phần nền (bão Xangsane 10/2006). Trừ điểm: câu rước thứ Bảy đầu tháng chỉ dựa cấp C [S5][S8] nhưng đặt trong historicalFact. |
| Giọng văn & trung lập | 4/5 | Trung lập, kính trọng; đoạn tranh chấp đất và vụ phá hoại quy về nguồn ngay đầu câu, không nêu tên cá nhân, có câu từ chối trách nhiệm, không lời bình. Tiêu đề đã bỏ “Đền Thánh”. Trừ điểm: nhãn chòm sao giữ nguyên “Chính danh Stella Maris Miền Trung” — chữ “Chính danh” gợi ý đã được công nhận chính thức, trái chính sách 3. |
| Tính kỹ thuật | 4/5 | validate-record.mjs --allow-existing-id: “DAT toan bo rang buoc bat buoc”. format-report --check: hợp lệ, 2 cảnh báo (claim rước thứ Bảy và claim vụ phá hoại chỉ có nguồn C) đã được giải trình trong selfAssessment; cảnh báo thứ nhất được xử lý bằng điều kiện 2, cảnh báo thứ hai được chấp nhận theo chính sách 2 của chủ dự án. check-sources: 16/16 OK. |
| Sức hấp dẫn & chiều sâu tư liệu | 5/5 | Quét rộng (GSR, Veritas 2007, CGvDT, Ymagazine, dongten, melavang ×2, chuathuongxot, tuongconggiaophanthien, zoomtravel, CGvST, Commons, OSM); 7 chuyện kể có chi tiết sống (bà “trồi lên từ biển”, hàng rào cành thông treo bảng tạ ơn, chàng thanh niên, lời chứng khỏi bệnh); 10 ảnh ứng viên ở 9 trang; 6 manh mối cụ thể cho lượt sau. Văn xuôi vượt xa mức 140 từ của bản ghi cũ. |


**Tổng: 34/40.**

## 2. Kiểm nguồn dẫn

| Mã | URL | Trạng thái | Chứa luận điểm? | Kiểm lại bằng | Ghi chú |
|---|---|---|---|---|---|
| S1 | [liên kết](https://www.globalsistersreport.org/ministry/nuns-struggle-protect-seaside-religious-site-pilgrims-26751) | còn sống | có | — | Đọc toàn văn (curl). Có nguyên văn: “In 1960, St. Paul de Chartres sisters reclaimed the seaside area, built the convent, planted fruit trees... produced fish sauce”; “the Marian statue they built in 1974”; 5.000 m² sau 1975 và thêm 5.000 m² năm 2005 “without paying any compensation”; áp lực dời tượng “until 2006”; “named the park Sao Bien”; “In 2008 the nuns built a pedestal... and a firm glass roof”; bishop “lead monthly prayers”; restaurant 2012; “26-foot-high wooden cross”; tượng Chúa Giêsu bằng đá tháng 6/2014; “10 to 30 groups”; lời chứng ung thư gan 2011; “one-acre public park”; người ngoài Công giáo đặt hoa, hương, bảng tạ ơn. Mọi luận điểm gán cho S1 đều có. Bài nêu tên nữ tu và hai giáo dân — hồ sơ đã bỏ tên, đúng chính sách. |
| S2 | [liên kết](https://www.cgvdt.vn/ban-doc/uc-me-sao-bien-a-nang-khoang-lang-binh-yen_a14401) | còn sống | có | WebFetch | check-sources báo OK; đọc nội dung bằng WebFetch. Có: “tọa lạc đường bờ biển Võ Nguyên Giáp, tượng Ðức Mẹ bồng Chúa Giêsu... khoảng 3000m2”, “thuộc khuôn viên của dòng Thánh Phaolô thành Chartres”, “Ðầu tháng 10 năm 2006... bão Xangsane”, “từ khoảng 18g đến 22g... các nhóm sinh viên đến đây đọc kinh”, Nhà Hành hương của nữ tu; tác giả Peter Đức Pháp – Trường Giang, 23/03/2022. Bài thuộc mục Bạn đọc của báo — giữ cấp B nhưng lưu ý. |
| S3 | [liên kết](https://vntaiwan.catholic.org.tw/07news/7news275.htm) | còn sống | có | — | Đọc toàn văn (curl, UTF-8). Có nguyên văn: “một mái tôn với 4 cây sắt tuềnh toàng che mưa nắng cho tượng Ðức Mẹ”; “Trước đây Mẹ đứng nép trong góc tường tu viện các Soeur hưu dưỡng của Dòng Thánh Phaolô... Mẹ đứng lộ thiên”; “bà đó trồi lên từ biển”; hàng rào cành thông treo bảng tạ ơn; chàng thanh niên; lời nữ tu “đầu hơi cúi xuống”; “Hiện nay giáo quyền chưa nói gì về Ðức Mẹ Sao Biển”; 3 ảnh mesaobien1–3. Hai chỗ lệch nhỏ: nguồn ghi “bệ đá” (không phải “kệ đá sơ sài”) và thanh niên đến trong “một” sáng mưa rồi “mỗi ngày” đến tạ ơn — xem điều kiện 3, 4. Là ký sự cá nhân (“Prepared for Internet by Radio Veritas Asia”), nên hạ xuống cấp C — điều kiện 5. |
| S4 | [liên kết](https://ymagazine.net/vn/bai-viet/duc-me-sao-bien-da-nang) | còn sống | có | — | Lần đầu curl trả 508 (quá tải tạm thời), lần hai 200. Có: “tượng Đức Mẹ Sao Biển mặc áo choàng xanh, tay đang ẵm lấy Chúa Giêsu”, “Nhiều người đến đây kể lại rằng, năm 2006... mái tôn che tượng Mẹ Sao Biển vẫn không hề hấn gì”, “từ khoảng 7 đến 10 giờ tối”, “9 nhóm Sinh viên Công Giáo”, “Nguồn ảnh: Nguyễn Khảm”, ngày “May 06, 2021”, ảnh sb5_n.jpg và sb4_o.jpg. |
| S5 | [liên kết](https://melavang.info/den-duc-me-sao-bien-da-nang/) | còn sống | có | — | Có: “Từ năm 2006, giáo phận Đà Nẵng có thêm một địa điểm hành hương”; “Vào mỗi sáng thứ bảy đầu tháng, Đức Giám Mục Giáo phận sau Thánh lễ tại nguyện đường Cộng đoàn Dòng Phaolo... làm thành đoàn rước ra viếng Mẹ Sao Biển”; “chính quyền thành phố Đà Nẵng đã thay đổi ý định ban đầu... khu đất vàng gần 5.000m2”. Cấp C, trang dịch vụ, không tác giả/ngày. |
| S6 | [liên kết](https://melavang.info/duc-me-sao-bien-2/) | còn sống | có | — | Chép lại gần nguyên văn S3 (góc tường tu viện, “giáo quyền chưa nói gì”, “đầu hơi cúi xuống”). Chỉ đối chiếu, không vào record — đúng. |
| S7 | [liên kết](https://chuathuongxot.org/DucMe/DucMeSaoBien.htm) | còn sống | có | — | Chép lại S3 (Xangsane, “giáo quyền chưa nói gì”, lời nữ tu). Chỉ đối chiếu. |
| S8 | [liên kết](https://www.tuongconggiaophanthien.com/tin-tuc/duc-me-sao-bien-dia-diem-hanh-huong-cong-giao-tai-da-nang-n125.html) | còn sống | có | — | WebFetch chỉ thấy màn chờ chống bot; curl với User-Agent trình duyệt đọc được toàn văn. Có: “ngã ba đường Võ Nguyên Giáp - Phan Tứ, P.Bắc Mỹ An, Q.Ngũ Hành Sơn”, “không có cổng rào nên mọi người có thể ghé viếng bất cứ giờ nào”, đoạn rước sáng thứ bảy đầu tháng (cùng câu với S5), ngày 29/05/2023, bộ ảnh duc-me-sao-bien-da-nang-1…5, b1…b5, c1, c2. Trang của cơ sở bán tượng đá. |
| S9 | [liên kết](https://dongten.net/duc-me-sao-bien/) | còn sống | có | — | Có: “nằm trên khu vực lãnh thổ trải dài của quý Soeurs Dòng thánh Phaolô”, “bức tượng... được đặt trên kệ đá sơ sài... vẫn nguyên vẹn, thậm chí là những miếng tôn che tạm cũng không hề hấn gì”. Không vào record. |
| S10 | [liên kết](https://zoomtravel.vn/duc-me-sao-bien.html) | còn sống | có | — | Có “Vào năm 2006, Tượng Đức Mẹ đứng nép trong góc tường...” và “cách trung tâm thành phố Đà nẵng khoảng chừng 25km” (hiển nhiên sai). Chỉ dùng ghi mâu thuẫn — đúng. |
| S11 | [liên kết](https://cgvst.com/ke-xau-pha-hoai-tuong-duc-me-sao-bien-tai-da-nang/) | còn sống | có | — | Có nguyên văn: “phá hoại vào tối thứ năm, ngày 26/12/2024”, “Phần đầu và tay trái của tượng Chúa Hài Đồng bị đập vỡ”, ngày đăng 02/01/2025. Không nêu tên người phá hoại. Trang dùng chữ “Đền Đức Mẹ Sao Biển” / “TTHH” — hồ sơ không chép lại, đúng chính sách 3. |
| S12 | [liên kết](https://www.openstreetmap.org/way/363224651) | còn sống | có | — | Tự tra lại qua Nominatim lookup và API /api/0.6/way/363224651/full.json: tâm 16.0479488, 108.2482627, khung đúng như hồ sơ ghi, tên “Nhà thờ Đức Mẹ Sao Biển”, phường Ngũ Hành Sơn. Nominatim hiện gán tên đường “Ngô Thì Sĩ” thay vì Phan Tứ cho địa chỉ của way — không ảnh hưởng toạ độ. |
| S13 | [liên kết](https://vi.wikipedia.org/wiki/Ng%C5%A9_H%C3%A0nh_S%C6%A1n_(ph%C6%B0%E1%BB%9Dng)) | còn sống | có | — | Có: Nghị quyết 1659/NQ-UBTVQH15 ngày 16/6/2025 nhập Mỹ An, Khuê Mỹ, Hòa Hải, Hòa Quý; “Ngày 2 tháng 3 năm 2005, chia phường Bắc Mỹ An thành phường Mỹ An và phường Khuê Mỹ”. |
| S14 | [liên kết](https://commons.wikimedia.org/wiki/File:Duc-me-sao-bien.jpg) | còn sống | có | — | Mô tả “ảnh sưu tầm”, Baojcn01, 18/07/2025, CC BY-SA 4.0, không ghi địa điểm. Loại khỏi đề xuất ảnh là hợp lý (không chứng minh được đúng linh địa). |
| S15 | [liên kết](https://phailamgi.com/threads/ke-xau-pha-hoai-tuong-duc-me-sao-bien-tai-da-nang.3386/) | còn sống | có | — | Hồ sơ ghi “chưa mở”; kiểm chứng đã mở: luồng diễn đàn ngày 27/12/2024, cùng nội dung với S11 (26/12/2024, đầu và tay trái tượng Chúa Hài Đồng). Cấp D, không vào record. |
| S16 | [liên kết](https://vi.wikipedia.org/wiki/%C4%90%E1%BB%A9c_M%E1%BA%B9_Sao_Bi%E1%BB%83n) | còn sống | có | — | Xác nhận: bài về tước hiệu Stella Maris nói chung, không nhắc Đà Nẵng/Mỹ Khê. Gỡ khỏi record là đúng. |


### Đối chiếu luận điểm

| Luận điểm | Nguồn | Kết luận | Ghi chú |
|---|---|---|---|
| Năm 1960 các nữ tu Dòng Thánh Phaolô Thành Chartres khai hoang vùng ven biển Mỹ Khê, dựng tu viện, trồng cây, chăn nuôi, làm nước mắm | [S1] | Đạt | Đúng nguyên văn S1. |
| Tượng Đức Mẹ do các nữ tu dựng năm 1974 (trường year = 1974) | [S1] | Đạt | Nguyên văn “the Marian statue they built in 1974”. Một nguồn, đã quy về GSR trong câu. Không nguồn độc lập nào mâu thuẫn; S3 (2007) xác nhận tượng có từ trước bão. |
| Trước kia tượng nép trong góc tường tu viện nữ tu hưu dưỡng; khi nhà nước làm đường, tường bao không còn, tượng lộ thiên dưới mái tôn bốn cột sắt | [S3] [S6] [S7] | Đạt | Đúng S3; S1 xác nhận độc lập đường ven biển 2005 và mái tôn các nữ tu dựng. |
| Đầu tháng 10/2006 bão Xangsane đổ bộ Đà Nẵng | [S1] [S2] [S3] | Đạt | Kiểm chéo: Wikipedia “Typhoon Xangsane (2006)” — đổ bộ gần Đà Nẵng ngày 01/10/2006. |
| Công viên đặt tên Sao Biển, có tượng Thánh Giuse; 2008 xây bệ và mái kính; 06/2014 tượng Chúa Giêsu bằng đá; thánh giá gỗ khoảng 8 m | [S1] | Đạt | Đúng S1; 26 feet ≈ 7,9 m nên “khoảng 8 m” chấp nhận được. |
| Các nữ tu cùng Giám mục Giáo phận Đà Nẵng chủ sự giờ cầu nguyện hằng tháng trước tượng | [S1] | Đạt | “They and the bishop of Da Nang diocese lead monthly prayers in front of the statue.” |
| Sáng thứ Bảy đầu tháng, sau Thánh lễ tại nguyện đường Dòng Phaolô, Đức Giám mục cùng nữ tu và giáo dân rước ra viếng tượng | [S5] [S8] | Sửa câu chữ | Hai trang cấp C chép cùng một đoạn, không ngày viết. Câu đã quy về nguồn nhưng không thuộc historicalFact: chuyển nguyên câu sang cuối significance (điều kiện 2). |
| Tranh chấp đất đai theo lời một nữ tu qua GSR: 5.000 m² sau 1975, thêm 5.000 m² năm 2005 không bồi thường, áp lực dời tượng đến 2006, phản đối dự định mở nhà hàng năm 2012 — kèm câu từ chối trách nhiệm | [S1] | Đạt | Khớp nguyên văn S1 từng chi tiết. Đúng chính sách 1: quy về GSR ngay đầu câu, không nêu tên nữ tu hay cán bộ, có câu “ducme.vn chỉ thuật lại theo nguồn đã dẫn, không xác minh độc lập và không đưa ra nhận định về tranh chấp này”. Không thêm chi tiết nặng hơn nguồn (chi tiết “reallocated to local officials” đã được lược). |
| Tối 26/12/2024 tượng bị phá hoại, phần đầu và tay trái tượng Chúa Hài Đồng bị đập vỡ — kèm câu từ chối trách nhiệm | [S11] | Đạt | Khớp nguyên văn S11; kiểm chéo độc lập với S15 (diễn đàn, 27/12/2024) và kết quả tìm kiếm (nhóm Facebook, YouTube) cùng ngày, cùng chi tiết. Đúng chính sách 2: quy về CGvST trong câu, không nêu tên, có câu từ chối trách nhiệm. Chỉ có nguồn C nhưng giữ trong historicalFact theo quyết định của chủ dự án. |
| Năm 2007: “hiện nay giáo quyền chưa nói gì về Đức Mẹ Sao Biển”; chưa thấy văn bản nào của Giáo phận xác nhận danh xưng đền thánh/trung tâm hành hương | [S3] [S6] [S7] | Đạt | Đúng nguyên văn S3. Câu chỉ nói sự vắng mặt của văn bản, không gợi ý đã được công nhận — phù hợp chính sách 3. |
| Đức Mẹ đứng bồng Chúa Hài Đồng, áo choàng xanh, đội triều thiên, dưới vọng đình mái kính trên các cột tròn | [S1] [S2] [S3] [S4] [S8] | Đạt | Văn bản S1/S2/S4 xác nhận bồng Chúa, áo xanh; triều thiên, cột tròn, bảng đá kinh nguyện thấy rõ trên ảnh S8 (b1) và S4 (sb5_n). Bản ghi cũ “đôi tay dang rộng” sai — sửa là đúng. |
| Theo bài viết năm 2007, khi ấy tượng đặt trên kệ đá sơ sài dưới mái tôn bốn cột sắt | [S3] | Sửa câu chữ | S3 ghi “bệ đá” và “mái tôn với 4 cây sắt tuềnh toàng”; “kệ đá sơ sài” là chữ của S9/S11. Sửa câu chữ cho khớp nguồn được dẫn (điều kiện 3). |
| Diện tích: một mẫu Anh [S1] / khoảng 3.000 m² [S2] / gần 5.000 m² [S5][S8] | [S1] [S2] [S5] [S8] | Đạt | Ba con số đều có trong nguồn tương ứng; nêu cả ba kèm nguồn là cách xử lý đúng. |
| Buổi tối khoảng 18–22 giờ nhiều gia đình, nhóm sinh viên Công giáo đến cầu nguyện, dâng hoa; người ngoài Công giáo cũng đến; nhà dòng đón 10–30 đoàn/tháng | [S1] [S2] [S3] [S4] | Đạt | S2 “18g đến 22g”, S4 “7 đến 10 giờ tối”, S1 “10 to 30 groups”, S1/S3 người ngoài Công giáo. |
| Địa chỉ ngã ba Võ Nguyên Giáp – Phan Tứ, phường Ngũ Hành Sơn; toạ độ 16.0479, 108.2483 | [S8] [S12] [S13] | Đạt | Tự tra OSM: toạ độ nằm trong khuôn viên; đường Phan Tứ chạm góc đông nam khuôn viên. |
| oralTradition: “kể về một thanh niên sáng mưa nào cũng mang hoa đến” | [S3] | Sửa câu chữ | S3 kể một buổi sáng mưa anh mang hai giỏ hoa đến, và “bây giờ mỗi ngày anh đều đến đây tạ ơn Mẹ” — không phải “sáng mưa nào cũng”. Sửa câu chữ (điều kiện 4). |
| Nhãn chòm sao constellationRole.v4.star = “Chính danh Stella Maris Miền Trung” (giữ nguyên) | [S1] | Sửa câu chữ | Không nguồn nào chống lưng cho chữ “Chính danh” (danh xưng chính thức/được công nhận); S3 còn ghi giáo quyền chưa nói gì. Vi phạm chính sách 3. Bỏ hai chữ “Chính danh”, giữ phần còn lại (điều kiện 1). Không đụng CONSTELLATION_VERSIONS. |


### Kiểm chuyện kể & giai thoại

Chuyện kể không bị chấm theo chuẩn sự thật lịch sử. Chỉ kiểm ba điều: có nguồn đọc lại được không, có bị nguồn nào bác bỏ không, và có được gắn nhãn truyền tụng không.

| Chuyện kể | Độ xác thực | Có gắn nhãn truyền tụng | Kết luận | Ghi chú |
|---|---|---|---|---|
| Tượng và “căn lều” mái tôn đứng vững qua bão Xangsane 2006 | có nguồn A/B đối chiếu phần nền | có | DUYỆT | Nguồn đọc lại được (S1, S3, S4, S9, S11); phần nền (bão 10/2006) đối chiếu được. Trong oralTradition mở đầu bằng “Người địa phương kể rằng”. |
| Bà “trồi lên từ biển” | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | có | DUYỆT | Có nguyên văn trong S3. Mở đầu bằng “Theo lời kể chép trong bài viết năm 2007”. Viết tôn trọng tín ngưỡng dân gian. |
| Hàng rào cành thông treo bảng tạ ơn | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | có | DUYỆT | Có trong S3, kèm ảnh mesaobien2. oralTradition dùng “Cũng bài viết ấy kể rằng” và không dùng chữ “chuồng bò” — đúng. |
| Chàng thanh niên đến tạ ơn mỗi ngày | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | có | DUYỆT | Có trong S3, có nhãn. Câu chữ trong oralTradition lệch nguồn (“sáng mưa nào cũng”) — sửa theo điều kiện 4. Bản story trong hồ sơ ghi “đầu tháng 5/2007” trong khi EXIF ảnh là 28/04/2007 và bài đề 01/05/2007 — không đưa chi tiết ngày này lên trang. |
| Đức Mẹ cúi đầu “như muốn hỏi các con cần gì” | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | có | DUYỆT | Nguyên văn S3, chép lại ở S6, S7. Mở đầu “Một nữ tu được dẫn lời rằng”, không nêu tên. |
| Lời chứng khỏi bệnh và lời nguyện đạp xe mỗi ngày | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | có | DUYỆT | Nguyên văn S1. oralTradition chỉ dùng phần lời chứng ung thư gan, không nêu tên, kèm “đó là niềm tin của người kể, không phải điều ducme.vn xác nhận”. Không thêm tên hai người được nêu trong S1. |
| “Điều kỳ diệu” khiến thành phố đổi ý định dùng khu đất | chưa kiểm chứng — đăng được, phải gắn nhãn truyền tụng | **chưa** | LOẠI | Không có trong oralTradition đề xuất, không có bản viết kèm nhãn và câu từ chối trách nhiệm; nội dung đụng tranh chấp đất và khác hẳn lời kể của S1 (đất bị lấy không bồi thường). Giữ trong hồ sơ khảo cứu, không đưa lên website ở lượt này. |


### Kiểm chéo độc lập

Nguồn do người kiểm chứng tự tìm, không lấy từ báo cáo khảo cứu.

| Nguồn | URL | Xác nhận / bác bỏ điều gì |
|---|---|---|
| OpenStreetMap API /api/0.6/way/363224651/full.json + Nominatim lookup/search/reverse (tự tra) | [liên kết](https://nominatim.openstreetmap.org/lookup?osm_ids=W363224651&format=json) | Tâm 16.0479488, 108.2482627, phường Ngũ Hành Sơn; tìm kiếm “Đức Mẹ Sao Biển Đà Nẵng” trả về đúng way này. Reverse tại 16.0476, 108.2489 ra “Đường Phan Tứ” (way 118666341) — xác nhận vị trí ngã ba Võ Nguyên Giáp – Phan Tứ. Toạ độ đề xuất nằm trong khuôn viên, lệch bệ tượng dưới 100 m. |
| Our Lady of Sao Bien — Vietnam Catholic Tours | [liên kết](https://vietnamcatholictours.vn/destination/our-lady-of-sao-bien/) | Xác nhận tên gọi, thuộc Giáo phận Đà Nẵng (“pilgrimage site of Da Nang diocese”), địa chỉ đường Võ Nguyên Giáp, Bắc Mỹ An, Ngũ Hành Sơn, và chuyện bão Xangsane 10/2006. Không ghi năm dựng tượng. Trang gọi là “Shrine” — cách gọi thông dụng, không phải văn bản công nhận. |
| Our Lady Star of the Sea – Da Nang — Hoi An Day Trip | [liên kết](https://hoiandaytrip.com/our-lady-star-of-the-sea-da-nang/) | Xác nhận vị trí “Sao Bien Park... Vo Nguyen Giap Street, My An ward, Ngu Hanh Son district”, trước tu viện Saint Paul, bão Xangsane đầu tháng 10/2006. Không nói về công nhận chính thức, không ghi năm dựng tượng. |
| Typhoon Xangsane (2006) — Wikipedia tiếng Anh | [liên kết](https://en.wikipedia.org/wiki/Typhoon_Xangsane_(2006)) | Bão đổ bộ gần Đà Nẵng ngay sau 00:00 UTC ngày 01/10/2006 — khớp “đầu tháng 10/2006”. |
| Kẻ xấu phá hoại tượng Đức Mẹ Sao Biển tại Đà Nẵng — diễn đàn Phải Làm Gì (hồ sơ chưa mở, kiểm chứng tự mở) | [liên kết](https://phailamgi.com/threads/ke-xau-pha-hoai-tuong-duc-me-sao-bien-tai-da-nang.3386/) | Đăng 27/12/2024, cùng ngày 26/12/2024 và cùng chi tiết đầu và tay trái tượng Chúa Hài Đồng — xác nhận độc lập (cấp D) nội dung S11. Tìm kiếm web còn cho thấy một bài nhóm Facebook và một video YouTube cùng sự việc. |


## 3. Kiểm hình ảnh

| File | Nguồn công khai xác minh | Giấy phép (nếu biết) | Đúng linh địa | Dấu hiệu AI | Kết luận |
|---|---|---|---|---|---|
| duc-me-sao-bien-da-nang-b1.jpg | có | — | có | không thấy | DUYỆT |
| mesaobien3.jpg | có | — | có | không thấy | DUYỆT |
| mesaobien2.jpg | có | — | có | không thấy | DUYỆT |
| sb5_n.jpg | có | — | có | không thấy | DUYỆT |


## 4. Kiểm kỹ thuật & ảnh hưởng hệ thống

| Mục | Ảnh hưởng |
|---|---|
| Số lượng linh địa | không đổi (cập nhật bản ghi saobiendanang đã có) |
| CONSTELLATION_VERSIONS | không đổi; saobiendanang vẫn là node V4 (NAT-14). Chỉ đổi nhãn star trong constellationRole.v4 của bản ghi |
| Nguồn trong record | 2 → 7 (bỏ Wikipedia tước hiệu chung và link tìm kiếm Google; thêm S1, S2, S3, S4, S5, S8, S11) |
| Ảnh thực địa | Lần đầu có realImage (1) và galleryImages (3) cho bản ghi này |
| Trường diocese, region, diemStatue5, name | không đổi (diocese giunguyen, đã kiểm chéo đúng Giáo phận Đà Nẵng) |
| Tài liệu phải cập nhật | docs/marian-sites-missing-info.md (mục saobiendanang ở dòng 30, 42, 53) |


```text
$ node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/saobiendanang/khao-cuu.json --allow-existing-id
KIEM TRA: saobiendanang (docs/khao-cuu/saobiendanang/khao-cuu.json) => DAT toan bo rang buoc bat buoc.
```

## 5. Vấn đề phát hiện

| Mức | Vấn đề | Vị trí | Đề nghị xử lý |
|---|---|---|---|
| Nặng | Nhãn chòm sao “Chính danh Stella Maris Miền Trung” gợi ý danh xưng chính thức/được công nhận, trái chính sách 3; hồ sơ khảo cứu thấy nhưng để giunguyen | record.constellationRole.v4.star | Đổi thành “Stella Maris Miền Trung” (điều kiện 1). role “Bảo hộ Duyên hải” và code “NAT-14” giữ nguyên. |
| Nặng | Câu rước sáng thứ Bảy đầu tháng chỉ có nguồn cấp C (S5, S8 chép cùng một đoạn, không ngày viết) nhưng đặt trong historicalFact | historicalFact, câu cuối đoạn 1 | Chuyển nguyên câu sang cuối significance (điều kiện 2). |
| Nhẹ | architect gán chữ “kệ đá sơ sài” cho bài năm 2007, trong khi bài ghi “bệ đá” và “mái tôn... tuềnh toàng” | architect, câu 2 | Điều kiện 3. |
| Nhẹ | oralTradition viết “một thanh niên sáng mưa nào cũng mang hoa đến” — S3 chỉ kể một buổi sáng mưa và việc anh đến tạ ơn mỗi ngày | oralTradition, câu 3 | Điều kiện 4. |
| Nhẹ | S3 là ký sự cá nhân (“Prepared for Internet by Radio Veritas Asia”), xếp cấp B là rộng tay | record.sources — mục vntaiwan.catholic.org.tw | Hạ tier xuống “C” (điều kiện 5). |
| Nhẹ | Tên file trong images[] (duc-me-sao-bien-da-nang-b1.jpg, mesaobien3.jpg, mesaobien2.jpg, sb5_n.jpg) khác tên bản tải về trong docs/khao-cuu/saobiendanang/anh/ (tcg2023-b1.jpg, veritas2007-3.jpg, veritas2007-2.jpg, ymag2021-sb5.jpg) | images[] ↔ docs/khao-cuu/saobiendanang/anh/ | Không phải lỗi nội dung: kiểm chứng đã xác nhận SHA-1 trùng từng cặp. Bước triển khai lấy file theo cặp này. |
| Nhẹ | Mô tả phiên bản V4 trong CONSTELLATION_VERSIONS gọi chung các điểm là “Đại Trung tâm Thánh Mẫu”, có nhắc Sao Biển (Đà Nẵng) — có thể bị hiểu là công nhận chính thức | src/data/statues.js — CONSTELLATION_VERSIONS.v4.tagline/description | Ngoài phạm vi hồ sơ này (approved.constellation = false). Ghi lại để chủ dự án xem xét trong một thay đổi riêng; bước triển khai KHÔNG sửa. |
| Nhẹ | Năm dựng tượng 1974 chỉ có một nguồn (lời một nữ tu qua GSR); chưa có nguồn cấp A | year | Chấp nhận được vì câu trong historicalFact quy về GSR; manh mối trang Tỉnh Dòng Thánh Phaolô / giaophandanang.org để lượt sau bổ sung. Không chặn. |


## 6. Phần đã duyệt

Đây là phạm vi chính xác `marian-publish` được phép đưa lên website.

- [x] `title`
- [x] `year`
- [x] `lat`
- [x] `lng`
- [x] `location`
- [x] `elevation`
- [x] `historicalFact`
- [x] `architect`
- [x] `oralTradition`
- [x] `significance`
- [x] `sources`
- [x] `constellationRole`
- [ ] `diocese`
- [x] `realImage`
- [x] Nguồn đưa vào dữ liệu: [S1], [S2], [S3], [S4], [S5], [S8], [S11]
- [x] Ảnh: duc-me-sao-bien-da-nang-b1.jpg, mesaobien3.jpg, mesaobien2.jpg, sb5_n.jpg
- [x] Chuyện kể được phép viết vào `oralTradition`: Tượng và “căn lều” mái tôn đứng vững qua bão Xangsane 2006; Bà “trồi lên từ biển”; Hàng rào cành thông treo bảng tạ ơn; Chàng thanh niên đến tạ ơn mỗi ngày; Đức Mẹ cúi đầu “như muốn hỏi các con cần gì”; Lời chứng khỏi bệnh và lời nguyện đạp xe mỗi ngày
- [ ] Thay đổi chòm sao (`CONSTELLATION_VERSIONS`)

---

_Báo cáo sinh tự động từ hồ sơ JSON bằng `format-audit.mjs`. Sửa nội dung thì sửa file JSON rồi chạy lại lệnh, đừng sửa trực tiếp vào file markdown._
