# Phiếu thi công: Đức Mẹ Măng Đen

> **ÁP DỤNG CÓ ĐIỀU KIỆN** — 39/40
>
> Được phép triển khai theo đúng phạm vi dưới đây.

- **Mã linh địa**: `mangden`
- **Hồ sơ khảo cứu**: `docs/khao-cuu/mangden/khao-cuu.json`
- **Hồ sơ kiểm chứng**: `docs/khao-cuu/mangden/kiem-chung.json`
- **Nhánh đề nghị**: `data/bo-sung-tu-lieu-mangden`

## Điều kiện bắt buộc

Làm đúng từng mục, không thêm không bớt. Tick khi đã thực hiện.

- [ ] Không gán nguồn Wikipedia [S3] cho luận điểm 'ngôi sao Alioth trong chòm sao Bắc Đẩu' trong oralTradition; giữ nguyên câu văn trong oralTradition theo baseline của dự án.
- [ ] Dùng assets/real_photos/mangden.jpg làm realImage với realImageCaption cập nhật theo đề xuất (ghi rõ nguồn Wikimedia Commons, tác giả Baojcn01, giấy phép CC BY-SA 4.0).
- [ ] Thay thế liên kết tìm kiếm Google bằng 4 nguồn bài viết trực tiếp S1, S2, S3, S4 trong trường sources của bản ghi.
- [ ] Áp dụng chuẩn hóa tọa độ lat: 14.6009, lng: 108.2979 theo OpenStreetMap node 5490688957.
- [ ] Viết oralTradition đúng 3 chuyện đã duyệt, bảo đảm mỗi ý đều mở đầu bằng nhãn truyền tụng như bản dự thảo.
- [ ] Nếu đưa 2 ảnh phụ (the-statue-of-our-lady-of-fatima-in-mang-den.jpg, ducmemang_den_2010.jpg) vào galleryImages, bắt buộc phải nén dung lượng xuống dưới 3.0 MB trước khi commit; nếu không, giữ galleryImages: [] như đề xuất ban đầu.

## 1. Trường được phép sửa

| Trường | Thao tác | Ghi chú |
|---|---|---|
| `historicalFact` | sửa | Bổ sung nguồn gốc lịch sử 1971 do LM Tôma Lê Thành Ánh tặng, LM Giuse Nguyễn Minh Kông đưa lên tiền đồn bằng trực thăng, ĐGM Phaolô Seitz Kim dâng lễ đầu tiên; biến cố chiến sự 1974; giai đoạn 1983-1987 phát hiện và đắp đầu xi măng; các mốc 2006 tái phát hiện, 2007 đại hội hành hương và 2011 Sứ thần Tòa Thánh thăm viếng. |
| `architect` | sửa | Mô tả chất liệu bê tông cốt thép, kích thước, đặc điểm bệ đá cuội tự nhiên, gương mặt phụ nữ Tây Nguyên và hiện trạng đôi tay cụt kèm thông điệp tạ ơn. |
| `oralTradition` | sửa | Tổng hợp các chuyện kể dân gian lưu hành: giấc mộng bay lơ lửng của ông Bá, chuyện xe ủi đất chết máy nắn đường QL24, biểu tượng Mẹ đồng cảm người tàn tật và vai trò ngôi sao Alioth. |
| `significance` | sửa | Khắc họa ý nghĩa Đức Mẹ Sầu Bi, điểm tựa đức tin của đồng bào thiểu số và biểu tượng đồng cảm với người tật nguyền, bất hạnh. |
| `lat` | sửa | Chuẩn hóa vĩ độ từ 14.6 thành 14.6009 (4 chữ số thập phân) theo OpenStreetMap node 5490688957 và ảnh vệ tinh tại bệ tượng. |
| `lng` | sửa | Chuẩn hóa kinh độ từ 108.2936 thành 108.2979 (4 chữ số thập phân) theo OpenStreetMap node 5490688957 và ảnh vệ tinh tại bệ tượng. |
| `realImageCaption` | sửa | Bổ sung tác giả Baojcn01 và giấy phép CC BY-SA 4.0 cho ảnh chính đang có trong repo. |
| `sources` | sửa | Thay thế liên kết tìm kiếm Google bằng 4 nguồn bài viết trực tiếp (3 nguồn cấp B, 1 nguồn cấp C). |


### `historicalFact`

> Tượng được tạc theo hình mẫu Đức Mẹ Fatima bằng bê tông cốt thép, do Linh mục Tôma Lê Thành Ánh trao tặng. Vào giữa năm 1971, Linh mục Giuse Nguyễn Minh Kông đã vận chuyển tượng bằng trực thăng lên tiền đồn Măng Đen và an vị trên trụ đài đơn sơ. Sau lễ Giáng sinh năm 1971, Đức Giám mục Giáo phận Kon Tum Phaolô Seitz Kim đã đến cử hành thánh lễ đầu tiên tại linh đài. Năm 1974, chiến sự ác liệt khiến tiền đồn Măng Đen bị triệt hạ hoàn toàn, bức tượng bị hư hại và chìm sâu giữa rừng rậm hoang vu. Đến cuối năm 1987, sau khi phần đầu và hai bàn tay bị gãy mất, tượng được một người thợ đá địa phương dùng xi măng đắp lại phần đầu mang đường nét phụ nữ bản địa Tây Nguyên; hai bàn tay mới đắp tiếp tục rơi xuống và tượng giữ nguyên hình dáng cụt tay. Ngày 28 tháng 12 năm 2006, sau khi giáo dân phát hiện và trình báo, phái đoàn Tòa Giám mục Kon Tum do Đức Giám mục Micae Hoàng Đức Oanh dẫn đầu đã lên kính viếng và tìm được một phần đốt ngón tay trỏ của pho tượng. Ngày 9 tháng 12 năm 2007, Đức Giám mục Hoàng Đức Oanh cùng các linh mục, tu sĩ và hơn 2.000 tín hữu đã dâng thánh lễ trọng thể, chính thức ấn định ngày 9 tháng 12 hàng năm là Ngày Hành hương Đức Mẹ Măng Đen. Ngày 10 tháng 9 năm 2011, Tổng Giám mục Leopoldo Girelli, Đại diện Tòa Thánh không thường trú tại Việt Nam, đã đến viếng và chủ sự thánh lễ kính Đức Mẹ. Cuối năm 2011, chính quyền tỉnh Kon Tum chính thức chấp thuận sinh hoạt tôn giáo tại đây, và Tòa Giám mục Kon Tum quyết định thiết lập Giáo xứ Kon Xơm Luh phụ trách quản lý linh địa.

### `architect`

> Tượng Đức Mẹ Măng Đen được đúc bằng bê tông cốt thép, cao khoảng 1 mét, đặt trên bệ trụ xi măng kiên cố ốp các khối đá cuội tự nhiên giữa triền đồi thông cao nguyên Kon Plông ở độ cao 1.200m. Thân tượng giữ cấu trúc trang phục áo choàng và dáng dấp nguyên bản của Đức Mẹ Fatima. Phần đầu tượng sau lần phục chế năm 1987 mang diện mạo rất đặc thù: gương mặt đượm vẻ trầm mặc, đôn hậu, phảng phất nét mặt của phụ nữ dân tộc bản địa Tây Nguyên. Hai cánh tay tượng bị gãy cụt quá phần cổ tay, để lộ dấu vết xi măng cốt thép mộc mạc. Xung quanh bệ tượng và khuôn viên linh đài có nhiều lối đi bậc đá, hàng cây xanh cùng hàng trăm phiến đá hoa cương nhỏ khắc lời tạ ơn của khách hành hương, phía trước nổi bật tấm biển mang dòng chữ: Các con là tay của Mẹ.

### `oralTradition`

> Tương truyền vào năm 1987, sau khi tình cờ thấy tượng giữa rừng, một người đàn ông địa phương tên Bá khi đi học xa ở Quy Nhơn đã hai lần nằm mơ thấy phần đầu và hai bàn tay tượng bay lơ lửng bên sườn đồi; khi ông trở về kiểm tra thấy tượng mất đầu và tay, một người thợ trong mỏ đá đã dùng xi măng đắp lại nhưng đôi tay mới đều tự rơi xuống chân đài. Người dân trong vùng còn truyền tai nhau chuyện thi công mở đường Quốc lộ 24 qua đèo Măng Đen: chiếc máy ủi đất khi tiến gần đến vị trí bức tượng bỗng nhiên chết máy kỳ lạ, thợ cơ khí kiểm tra máy móc không phát hiện hư hại, đến khi tài xế nhận ra bức tượng phía trước và chủ động nắn đường uốn cong tránh sang một bên thì xe mới nổ máy hoạt động bình thường. Giáo dân và khách hành hương tin rằng Mẹ muốn giữ nguyên hình tượng cụt tay như một dấu chỉ huyền nhiệm để đồng cảm với những mảnh đời khuyết tật, bệnh tật và nghèo khổ. Trong phiên bản dân gian hiện đại của chòm sao Bắc Đẩu, vì Đức Mẹ Phượng Hoàng bị thất lạc sau chiến tranh, người hành hương đã lấy Đức Mẹ Măng Đen làm ngôi sao Alioth nối nhịp cán gáo Tây Nguyên kỳ vĩ.

### `significance`

> Trung tâm Hành hương Đức Mẹ Măng Đen (Đức Mẹ Sầu Bi) là điểm tựa tâm linh và biểu tượng của lòng từ bi vô biên giữa núi rừng Tây Nguyên. Pho tượng Mẹ Cụt Tay mang sức hút đặc biệt đối với đồng bào các sắc tộc thiểu số (Ba Na, Xơ Đăng, Gia Rai) cũng như khách hành hương khắp mọi miền, là nơi những người mang thương tật, bệnh nhân phong cùi và những số phận nghèo khổ tìm thấy sự đồng cảm và an ủi đức tin. Linh đài đồng thời là điểm giao thoa văn hóa, sinh hoạt tôn giáo gắn liền với tuyến hành hương đại ngàn Kon Tum.

### `lat`

```json
14.6009
```

### `lng`

```json
108.2979
```

### `realImageCaption`

> Ảnh chụp thực tế tượng Đức Mẹ Măng Đen giữa đại ngàn Kon Tum (Nguồn: Wikimedia Commons, tác giả Baojcn01, giấy phép CC BY-SA 4.0)

### `sources`

```json
[
  {
    "title": "Giới thiệu về Đức Mẹ Măng Đen - Với Quyền Năng Của Hai Bàn Tay Cụt",
    "url": "https://giaophankontum.com/gioi-thieu-ve-duc-me-mang-den",
    "tier": "B"
  },
  {
    "title": "Tượng Đức Mẹ Fatima tại Măng Đen - Báo Công giáo và Dân tộc",
    "url": "https://cgvdt.vn/cong-giao-viet-nam/tuong-duc-me-fatima-tai-mang-den_a4918",
    "tier": "B"
  },
  {
    "title": "Tượng Đức Mẹ Măng Đen - Wikipedia tiếng Việt",
    "url": "https://vi.wikipedia.org/wiki/Đức_Mẹ_Măng_Đen",
    "tier": "B"
  },
  {
    "title": "Lịch sử Đức Mẹ Măng Đen và những Phép Lạ nơi Mẹ - DucMeMangDen.net",
    "url": "https://ducmemangden.net/lich-su-duc-me-mang-den",
    "tier": "C"
  }
]
```

## 3. Nguồn đưa vào dữ liệu

Chép cả `tier` vào từng phần tử `sources` của bản ghi — trang chi tiết dùng nó để hiện nhãn cấp nguồn.

| Tiêu đề | URL | Cấp |
|---|---|---|
| Giới thiệu về Đức Mẹ Măng Đen - Với Quyền Năng Của Hai Bàn Tay Cụt | [liên kết](https://giaophankontum.com/gioi-thieu-ve-duc-me-mang-den) | B |
| Tượng Đức Mẹ Fatima tại Măng Đen - Báo Công giáo và Dân tộc | [liên kết](https://cgvdt.vn/cong-giao-viet-nam/tuong-duc-me-fatima-tai-mang-den_a4918) | B |
| Tượng Đức Mẹ Măng Đen - Wikipedia tiếng Việt | [liên kết](https://vi.wikipedia.org/wiki/Đức_Mẹ_Măng_Đen) | B |
| Lịch sử Đức Mẹ Măng Đen và những Phép Lạ nơi Mẹ - DucMeMangDen.net | [liên kết](https://ducmemangden.net/lich-su-duc-me-mang-den) | C |


## 4. Hình ảnh

### 4a. Ảnh chính (`realImage`)

| File | Giấy phép (nếu biết) | Tác giả | `realImageCaption` |
|---|---|---|---|
| `src/assets/real_photos/mangden.jpg` | CC BY-SA 4.0 | Baojcn01 | Ảnh chụp thực tế tượng Đức Mẹ Măng Đen giữa đại ngàn Kon Tum (Nguồn: Wikimedia Commons, tác giả Baojcn01, giấy phép CC BY-SA 4.0) |


### 4b. Ảnh phụ (`galleryImages`)

| File | Giấy phép (nếu biết) | Tác giả | `galleryImages[].caption` |
|---|---|---|---|
| `src/assets/real_photos/mangden-2.jpg` | CC BY-SA 4.0 | Liverpoolmylove | Linh đài Đức Mẹ Măng Đen với bệ đá cuội tự nhiên và các bia tạ ơn (Nguồn: Wikimedia Commons, tác giả Liverpoolmylove, giấy phép CC BY-SA 4.0) |
| `src/assets/real_photos/mangden-3.jpg` | CC BY-SA 3.0 | Weendang | Cận cảnh pho tượng Đức Mẹ Măng Đen năm 2010 (Nguồn: Wikimedia Commons, tác giả Weendang, giấy phép CC BY-SA 3.0) |


## 5. Chuyện kể được duyệt cho `oralTradition`

Được phép viết các chuyện dưới đây vào `oralTradition`, **bắt buộc kèm nhãn** "tương truyền" / "theo lời kể" / "người địa phương kể rằng". Không chuyển bất kỳ ý nào sang `historicalFact`.

| Chuyện kể | Độ xác thực | Nội dung |
|---|---|---|
| Giấc chiêm bao và người thợ đắp lại đầu tượng | có nguồn A/B đối chiếu phần nền | Tương truyền vào năm 1987, sau khi phát hiện pho tượng giữa rừng sâu, người chồng (ông Bá) đi học tại Quy Nhơn đã hai lần nằm mơ thấy phần đầu và hai bàn tay tượng bay lơ lửng bên tượng đài. Khi về kiểm tra, ông thấy tượng quả nhiên bị mất đầu và hai bàn tay. Bối rối, ông kể lại cho nhóm thợ làm đá. Một người thợ Công giáo vì thương tâm và lòng kính mến đã dùng xi măng đắp lại đầu tượng với khuôn mặt mang dáng dấp phụ nữ Tây Nguyên bản địa, đồng thời gắn hai bàn tay mới, nhưng hai bàn tay sau đó đã rơi xuống đất vùi dưới chân đài. |
| Sự tích máy ủi tắt máy và con đường tránh tượng | có nguồn A/B đối chiếu phần nền | Người địa phương truyền tụng rằng khi thi công tuyến đường vòng đai mở rộng Quốc lộ 24 qua thị trấn Măng Đen, một người lái xe ủi đất bên lương khi ủi theo cọc mốc thiết kế đến gần khu vực tượng đài (cách trung tâm thị trấn khoảng 1 km) thì xe bỗng dưng tắt máy hoặc máy vẫn nổ mà không thể tiến lên. Sau khi gọi thợ sửa máy đến kiểm tra thấy máy móc vẫn bình thường, người ta mới phát hiện phía trước là pho tượng Đức Mẹ đang đứng khuất giữa lùm cây. Anh tài xế khởi động lại máy, chủ động ủi đường vòng tránh sang một bên, làm tuyến đường uốn cong nhẹ so với bản đồ quy hoạch ban đầu, và từ đó xe vận hành suôn sẻ. |
| Bàn tay vô hình của Mẹ và thông điệp 'Các con là tay của Mẹ' | có nguồn A/B đối chiếu phần nền | Dân gian và khách hành hương truyền tụng rằng dù nhiều lần có người muốn tạc gắn lại đôi bàn tay lành lặn cho Mẹ, nhưng các bàn tay mới ghép đều tự rơi rụng xuống đất. Người hành hương tin rằng Mẹ muốn giữ nguyên hình tượng cụt hai bàn tay để đồng cảm với những mảnh đời bất hạnh, tật nguyền, những bệnh nhân phong cùi và người nghèo khổ nơi núi rừng Tây Nguyên. Tấm biển đá dưới chân tượng ghi khắc lời nhắn nhủ: 'Các con là tay của Mẹ' — mời gọi mỗi người khi đến chiêm ngắm hãy trở thành cánh tay nối dài của lòng thương xót. |


Chuyện kể **không** được duyệt: "Điềm lạ khi chụp ảnh bên tượng đài năm 2006". Không đưa lên website.

## 6. Chòm sao

`CONSTELLATION_VERSIONS` **không được** sửa. Giữ nguyên `constellationRole` như bản ghi hiện có.

## 7. Việc bắt buộc sau khi sửa dữ liệu

- [ ] `node .agents/skills/marian-publish/scripts/validate-record.mjs <file record> --allow-existing-id` — hết lỗi chặn
- [ ] `npm test` — toàn bộ PASS, 0 FAIL
- [ ] `npm run build` — dựng thành công
- [ ] Cập nhật `docs/marian-sites-missing-info.md`
- [ ] Cập nhật số assertion `npm test` ở README và tài liệu nếu con số thay đổi
- [ ] Commit kèm cả `docs/khao-cuu/mangden/`

### Ảnh hưởng hệ thống theo báo cáo kiểm chứng

| Mục | Ảnh hưởng |
|---|---|
| Số lượng linh địa | không đổi (cập nhật bản ghi mangden) |
| CONSTELLATION_VERSIONS | không đổi (giữ nguyên vai trò Alioth trong v2 và v4) |
| Số assertion npm test | không đổi (353 assertions tiếp tục pass, 100% tests pass) |
| Ảnh thực địa | Giữ nguyên realImage hiện tại, cập nhật realImageCaption đầy đủ bản quyền tác giả Baojcn01 (CC BY-SA 4.0); bổ sung 2 ảnh phụ chất lượng cao vào kho tư liệu |
| Tài liệu phải cập nhật | docs/marian-sites-missing-info.md |


## 8. Bản ghi đầy đủ sau khi áp dụng

Chỉ dùng các trường đã duyệt ở mục 1. Bản ghi dưới đây là bản đề xuất nguyên vẹn của khảo cứu — đối chiếu, đừng chép nguyên khối.

```json
{
  "id": "mangden",
  "name": "Đức Mẹ Măng Đen",
  "title": "Trung Tâm Hành Hương Đức Mẹ Măng Đen - Đức Mẹ Sầu Bi",
  "year": 1971,
  "lat": 14.6009,
  "lng": 108.2979,
  "elevation": "1.200m (Cao nguyên Kon Plông)",
  "location": "Thị trấn Măng Đen, huyện Kon Plông, tỉnh Kon Tum",
  "region": "Tây Nguyên",
  "diocese": "Giáo phận Kon Tum",
  "diemStatue5": false,
  "constellationRole": {
    "v1": null,
    "v2": {
      "star": "Alioth (Ngọc Hành)",
      "role": "Thay thế Phượng Hoàng làm khớp nối cán gáo",
      "code": "ε UMa"
    },
    "v3": null,
    "v4": {
      "star": "Linh địa Tây Nguyên Đại Ngàn",
      "role": "Điểm tựa người nghèo & bệnh nhân",
      "code": "NAT-04"
    }
  },
  "historicalFact": "Tượng được tạc theo hình mẫu Đức Mẹ Fatima bằng bê tông cốt thép, do Linh mục Tôma Lê Thành Ánh trao tặng. Vào giữa năm 1971, Linh mục Giuse Nguyễn Minh Kông đã vận chuyển tượng bằng trực thăng lên tiền đồn Măng Đen và an vị trên trụ đài đơn sơ. Sau lễ Giáng sinh năm 1971, Đức Giám mục Giáo phận Kon Tum Phaolô Seitz Kim đã đến cử hành thánh lễ đầu tiên tại linh đài. Năm 1974, chiến sự ác liệt khiến tiền đồn Măng Đen bị triệt hạ hoàn toàn, bức tượng bị hư hại và chìm sâu giữa rừng rậm hoang vu. Đến cuối năm 1987, sau khi phần đầu và hai bàn tay bị gãy mất, tượng được một người thợ đá địa phương dùng xi măng đắp lại phần đầu mang đường nét phụ nữ bản địa Tây Nguyên; hai bàn tay mới đắp tiếp tục rơi xuống và tượng giữ nguyên hình dáng cụt tay. Ngày 28 tháng 12 năm 2006, sau khi giáo dân phát hiện và trình báo, phái đoàn Tòa Giám mục Kon Tum do Đức Giám mục Micae Hoàng Đức Oanh dẫn đầu đã lên kính viếng và tìm được một phần đốt ngón tay trỏ của pho tượng. Ngày 9 tháng 12 năm 2007, Đức Giám mục Hoàng Đức Oanh cùng các linh mục, tu sĩ và hơn 2.000 tín hữu đã dâng thánh lễ trọng thể, chính thức ấn định ngày 9 tháng 12 hàng năm là Ngày Hành hương Đức Mẹ Măng Đen. Ngày 10 tháng 9 năm 2011, Tổng Giám mục Leopoldo Girelli, Đại diện Tòa Thánh không thường trú tại Việt Nam, đã đến viếng và chủ sự thánh lễ kính Đức Mẹ. Cuối năm 2011, chính quyền tỉnh Kon Tum chính thức chấp thuận sinh hoạt tôn giáo tại đây, và Tòa Giám mục Kon Tum quyết định thiết lập Giáo xứ Kon Xơm Luh phụ trách quản lý linh địa.",
  "oralTradition": "Tương truyền vào năm 1987, sau khi tình cờ thấy tượng giữa rừng, một người đàn ông địa phương tên Bá khi đi học xa ở Quy Nhơn đã hai lần nằm mơ thấy phần đầu và hai bàn tay tượng bay lơ lửng bên sườn đồi; khi ông trở về kiểm tra thấy tượng mất đầu và tay, một người thợ trong mỏ đá đã dùng xi măng đắp lại nhưng đôi tay mới đều tự rơi xuống chân đài. Người dân trong vùng còn truyền tai nhau chuyện thi công mở đường Quốc lộ 24 qua đèo Măng Đen: chiếc máy ủi đất khi tiến gần đến vị trí bức tượng bỗng nhiên chết máy kỳ lạ, thợ cơ khí kiểm tra máy móc không phát hiện hư hại, đến khi tài xế nhận ra bức tượng phía trước và chủ động nắn đường uốn cong tránh sang một bên thì xe mới nổ máy hoạt động bình thường. Giáo dân và khách hành hương tin rằng Mẹ muốn giữ nguyên hình tượng cụt tay như một dấu chỉ huyền nhiệm để đồng cảm với những mảnh đời khuyết tật, bệnh tật và nghèo khổ. Trong phiên bản dân gian hiện đại của chòm sao Bắc Đẩu, vì Đức Mẹ Phượng Hoàng bị thất lạc sau chiến tranh, người hành hương đã lấy Đức Mẹ Măng Đen làm ngôi sao Alioth nối nhịp cán gáo Tây Nguyên kỳ vĩ.",
  "architect": "Tượng Đức Mẹ Măng Đen được đúc bằng bê tông cốt thép, cao khoảng 1 mét, đặt trên bệ trụ xi măng kiên cố ốp các khối đá cuội tự nhiên giữa triền đồi thông cao nguyên Kon Plông ở độ cao 1.200m. Thân tượng giữ cấu trúc trang phục áo choàng và dáng dấp nguyên bản của Đức Mẹ Fatima. Phần đầu tượng sau lần phục chế năm 1987 mang diện mạo rất đặc thù: gương mặt đượm vẻ trầm mặc, đôn hậu, phảng phất nét mặt của phụ nữ dân tộc bản địa Tây Nguyên. Hai cánh tay tượng bị gãy cụt quá phần cổ tay, để lộ dấu vết xi măng cốt thép mộc mạc. Xung quanh bệ tượng và khuôn viên linh đài có nhiều lối đi bậc đá, hàng cây xanh cùng hàng trăm phiến đá hoa cương nhỏ khắc lời tạ ơn của khách hành hương, phía trước nổi bật tấm biển mang dòng chữ: Các con là tay của Mẹ.",
  "significance": "Trung tâm Hành hương Đức Mẹ Măng Đen (Đức Mẹ Sầu Bi) là điểm tựa tâm linh và biểu tượng của lòng từ bi vô biên giữa núi rừng Tây Nguyên. Pho tượng Mẹ Cụt Tay mang sức hút đặc biệt đối với đồng bào các sắc tộc thiểu số (Ba Na, Xơ Đăng, Gia Rai) cũng như khách hành hương khắp mọi miền, là nơi những người mang thương tật, bệnh nhân phong cùi và những số phận nghèo khổ tìm thấy sự đồng cảm và an ủi đức tin. Linh đài đồng thời là điểm giao thoa văn hóa, sinh hoạt tôn giáo gắn liền với tuyến hành hương đại ngàn Kon Tum.",
  "realImage": "assets/real_photos/mangden.jpg",
  "realImageCaption": "Ảnh chụp thực tế tượng Đức Mẹ Măng Đen giữa đại ngàn Kon Tum (Nguồn: Wikimedia Commons, tác giả Baojcn01, giấy phép CC BY-SA 4.0)",
  "galleryImages": [],
  "sources": [
    {
      "title": "Giới thiệu về Đức Mẹ Măng Đen - Với Quyền Năng Của Hai Bàn Tay Cụt",
      "url": "https://giaophankontum.com/gioi-thieu-ve-duc-me-mang-den",
      "tier": "B"
    },
    {
      "title": "Tượng Đức Mẹ Fatima tại Măng Đen - Báo Công giáo và Dân tộc",
      "url": "https://cgvdt.vn/cong-giao-viet-nam/tuong-duc-me-fatima-tai-mang-den_a4918",
      "tier": "B"
    },
    {
      "title": "Tượng Đức Mẹ Măng Đen - Wikipedia tiếng Việt",
      "url": "https://vi.wikipedia.org/wiki/Đức_Mẹ_Măng_Đen",
      "tier": "B"
    },
    {
      "title": "Lịch sử Đức Mẹ Măng Đen và những Phép Lạ nơi Mẹ - DucMeMangDen.net",
      "url": "https://ducmemangden.net/lich-su-duc-me-mang-den",
      "tier": "C"
    }
  ]
}
```

---

_Phiếu sinh tự động từ `khao-cuu.json` + `kiem-chung.json` bằng `read-handoff.mjs`._
