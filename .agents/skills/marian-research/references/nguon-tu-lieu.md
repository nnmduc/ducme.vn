<!-- SINH TU DONG tu .claude/skills — dung sua tay file nay, sua ban goc roi chay: npm run sync:agents -->

# Thứ bậc nguồn & cách tìm tư liệu

Nguyên tắc chung của dự án: **gom rộng, gắn nhãn kỹ, lọc sau**. Nguồn yếu không bị vứt — nó được xếp
xuống đúng ngăn và dùng cho đúng việc. ducme.vn là dự án phi lợi nhuận phục vụ khảo cứu và học tập,
nên tiêu chuẩn ở đây là **truy được về đâu**, không phải **có đóng dấu hay chưa**.

## 1. Bốn cấp nguồn

| Cấp | Là gì | Dùng cho `historicalFact`? | Dùng cho `oralTradition` / `folklore`? | Vào trường `sources` của dữ liệu? |
|---|---|---|---|---|
| **A** | Văn khố, kỷ yếu, thư chung, bia ký, bản vẽ gốc | Có | Có | Có |
| **B** | Trang giáo phận, báo có toà soạn, sách có NXB, Wikipedia | Có | Có | Có |
| **C** | Blog hành hương, trang du lịch, diễn đàn, báo mạng tổng hợp | **Không** (chỉ làm nguồn phụ bên cạnh A/B) | Có | **Có** |
| **D** | Facebook, YouTube, TikTok, bình luận, lời kể chép lại | Không | Có | Không |

**Cấp A — nguồn gốc**

- Kỷ yếu Đại hội Thánh Mẫu Toàn quốc 1959 và các kỷ yếu giáo phận.
- Văn khố giáo phận, thư chung, thông báo chính thức của Toà Giám mục.
- Tài liệu kiến trúc gốc (bản vẽ, hồ sơ công trình, tư liệu về KTS Ngô Viết Thụ).
- Bia đá, bảng ghi công tại chính linh đài (kèm ảnh chụp bảng làm bằng chứng).

**Cấp B — thứ cấp đáng tin**

- Trang chính thức của giáo phận sở tại và `hdgmvietnam.com`.
- Báo chí Công giáo có ban biên tập, báo tỉnh, báo chính thống có bài viết cụ thể.
- Wikipedia tiếng Việt — dùng được, và quan trọng hơn: **phần chú thích bên dưới nó là một mỏ nguồn**.
- Sách khảo cứu lịch sử Công giáo Việt Nam có nhà xuất bản.

**Cấp C — tư liệu mở, trích dẫn được**

Blog hành hương, trang du lịch, diễn đàn, báo mạng tổng hợp, trang tin giáo xứ nhỏ không có ban
biên tập. Đây là thay đổi quan trọng so với quy ước cũ: **cấp C được trích dẫn và được đưa vào
trường `sources` của dữ liệu**, miễn là trang còn mở được.

Điều kiện khi dùng cấp C:

- Không chống lưng một mình cho một khẳng định trong `historicalFact`. Muốn viết vào `historicalFact`
  thì phải có thêm nguồn A hoặc B; nếu không có, chuyển ý đó xuống `oralTradition` kèm nhãn.
- Nên có ít nhất một nguồn A/B trong số nguồn đưa vào dữ liệu. Toàn cấp C thì hồ sơ vẫn hợp lệ, chỉ
  bị cảnh báo nhắc tìm thêm.

**Cấp D — manh mối thô**

Facebook, nhóm cộng đồng, YouTube, TikTok, bình luận, lời kể chép lại. Không đưa thẳng vào trường
`sources` của website vì không giữ được trang gốc ổn định. Nhưng **vẫn ghi vào `sources[]` của hồ sơ
khảo cứu** với `tier: "D"`, `inRecord: false` — vì đây thường là nơi duy nhất còn giữ được các chuyện
kể và ảnh cũ. Gặp tư liệu quý ở cấp D thì việc cần làm là lần ra bản ổn định hơn (thường là Wikimedia
Commons, trang giáo phận, hoặc bản lưu `web.archive.org`), chứ không phải bỏ qua.

## 2. Trang giáo phận theo vùng

Dữ liệu hiện có trải trên các giáo phận: Huế, Đà Nẵng, Kon Tum, Nha Trang, Ban Mê Thuột, Phan Thiết,
Xuân Lộc, Sài Gòn, Bà Rịa, Vĩnh Long, Long Xuyên, Bùi Chu, Hà Tĩnh.

Cách tìm trang chính thức: `"giáo phận <tên>" trang chính thức` hoặc `site:hdgmvietnam.com "<tên giáo
phận>"`. Tên miền giáo phận hay đổi; kiểm tra trang còn hoạt động trước khi dẫn. Trang chết thì thử
`web.archive.org` trước khi kết luận không có.

## 3. Mẫu truy vấn

Tìm bằng nhiều biến thể — tư liệu tiếng Việt viết không nhất quán, và mỗi biến thể mở ra một lớp
kết quả khác.

### 3a. Lịch sử, kiến trúc, hành chính

```
"Đức Mẹ <tên>" lịch sử xây dựng
"Duc Me <ten khong dau>" linh dai
"linh đài Đức Mẹ <tên>" khánh thành năm
"trung tâm hành hương <tên>" giáo phận
"đền thánh Đức Mẹ <tên>" làm phép tượng
site:hdgmvietnam.com "<tên>"
site:<tên miền giáo phận> "<tên>"
"<tên>" "Đại hội Thánh Mẫu" 1959
"<tên>" kỷ yếu giáo phận
"<tên>" tọa độ OR "vị trí" OR "địa chỉ"
"<tên>" trùng tu OR tôn tạo OR "xây lại"
"<tên>" "cha sở" OR "linh mục quản nhiệm"
"<tên tỉnh cũ>" "<tên>"          # tên hành chính trước sáp nhập
"<tên tiếng Pháp nếu có>" Notre-Dame Vietnam
```

### 3b. Chuyện kể, giai thoại, phần "ly kỳ"

Đây là lớp truy vấn hay bị bỏ sót nhất, và cũng là lớp cho ra nội dung người đọc thích nhất. Chi tiết
ở [`tim-chuyen-ke.md`](tim-chuyen-ke.md).

```
"<tên>" sự tích OR truyền thuyết OR "tương truyền"
"<tên>" ơn lạ OR "phép lạ" OR linh thiêng
"<tên>" "chuyện kể" OR "người dân kể" OR "các cụ kể"
"<tên>" "tượng trôi" OR "tượng dạt" OR "vớt được tượng"
"<tên>" bão OR lụt OR chiến tranh "vẫn còn nguyên"
"<tên>" "xin ơn" OR "tạ ơn" OR "khấn"
"<tên>" tên gọi dân gian OR "vì sao gọi là"
"<tên>" hành hương "kinh nghiệm" OR "review"
```

### 3c. Nguồn cũ, nguồn đã chết

```
site:web.archive.org "<tên>"
"<tên>" site:books.google.com
"<tên>" filetype:pdf
"<tên>" 19xx báo OR tạp chí        # thử từng thập niên
"<tên>" "ảnh xưa" OR "hình cũ" OR "trước 1975"
```

Trang đã gỡ: dán URL vào `https://web.archive.org/web/*/‹url›`. Bản lưu archive là một `filePage`
hợp lệ và ổn định — dùng thoải mái.

## 4. Với ảnh — gom rộng trước, lọc sau

Quy chuẩn ảnh của dự án gói gọn trong ba điều: **nguồn công khai còn mở được · giữ nguyên URL gốc ·
caption ghi rõ nguồn**. Không đòi hỏi giấy phép Creative Commons cụ thể, không đòi tên tác giả cá
nhân, không đòi dấu xác nhận của giáo phận.

Hai thứ duy nhất khiến một ảnh bị bỏ hẳn: **nghi do AI tạo sinh**, hoặc **không đúng linh địa đang xét**.

Cách làm: trong lúc đọc tư liệu, thấy bài nào có ảnh thì ném ngay vào `imageCandidates[]` với
`pageUrl` + một dòng `note`. Đừng dừng lại cân nhắc từng ảnh — cân nhắc là việc của vòng lọc sau.

**1. Wikimedia Commons** — tiện nhất vì có sẵn giấy phép và tên tác giả.

```
site:commons.wikimedia.org "<tên>"
commons.wikimedia.org Category "<tên tiếng Anh nếu có>"
```

Mở đúng trang `File:...`. Một Category nhiều khi có sẵn cả chục ảnh cùng linh địa — vét hết cho
`galleryImages`.

**2. Trang tin giáo phận / giáo xứ / dòng tu** — mỏ ảnh sự kiện lớn nhất.

```
site:<tên miền giáo phận> "<tên linh địa>" hình ảnh
"giáo xứ <tên>" hình ảnh khánh thành
"trung tâm hành hương <tên>" thư viện ảnh
"<tên>" "chùm ảnh" OR "phóng sự ảnh" OR "album"
```

Lễ khánh thành, đại hội, hành hương — mỗi bài thường 10–30 ảnh. Đa số không ghi nhãn giấy phép: **không
sao cả**. Ghi `filePage` là URL bài viết, `author` là tên trang/ban truyền thông, caption ghi
"Nguồn: <tên trang>, đăng <năm>".

**3. Báo chí, trang du lịch, blog hành hương** — dùng được như nguồn ảnh, không chỉ làm manh mối.

```
"<tên>" ảnh OR hình site:<báo tỉnh>
"<tên>" review OR "kinh nghiệm đi" ảnh
```

Cùng một quy chuẩn: URL bài viết làm `filePage`, caption ghi rõ nguồn.

**4. Google Images & tìm ảnh ngược** — công cụ dò, không phải nguồn trích dẫn.

Tìm xuôi bằng từ khoá để biết ảnh nào đang lưu hành; tìm ngược (tải ảnh lên) để lần ra trang gốc, để
phát hiện ảnh bị gán nhầm sang linh địa khác trùng tên, và để kiểm tra nghi vấn ảnh AI. Luôn bấm vào
trang gốc và ghi `filePage` là URL trang đó, không phải URL kết quả tìm kiếm.

**5. Google Maps / bản đồ** — nguồn hay bị bỏ quên.

Ảnh do khách hành hương đăng tại chính điểm đó, kèm ngày chụp. Hữu ích để đối chiếu hiện trạng và
xác nhận đúng chủ thể. Ghi `pageUrl` là URL địa điểm trên Maps; xếp cấp D và ưu tiên lần ra bản gốc
ổn định hơn trước khi đề xuất chính thức.

**6. Mạng xã hội, video** — cấp D, nhưng đừng bỏ.

Nhóm "ký ức <địa phương> xưa" trên Facebook là nơi hay xuất hiện ảnh đen trắng thập niên 1960–1970
không tìm được ở đâu khác. Cách xử lý: ghi vào `imageCandidates[]` và `leads[]`, rồi cố lần ra bản ổn
định (hỏi người đăng, tìm lại trên Commons, hoặc lưu bản `web.archive.org`). Nếu thật sự không có
bản nào khác, vẫn đề xuất được — kèm ghi chú rằng nguồn có thể biến mất.

## 5. Bẫy thường gặp

- **Trùng tên.** Rất nhiều nơi cùng tên "Đức Mẹ Fatima", "Đức Mẹ Lộ Đức", "Núi Cúi". Luôn kiểm tỉnh +
  giáo phận trước khi tin một nguồn nói về đúng linh địa đang xét. Đây cũng là lỗi ảnh phổ biến nhất.
- **Địa danh hành chính đã đổi.** Nhiều bài cũ ghi tên tỉnh/huyện trước sáp nhập. Ghi địa chỉ theo tên
  hiện hành, nêu tên cũ trong ngoặc nếu tư liệu lịch sử dùng tên đó.
- **Niên đại lệch.** Năm đúc tượng, năm đặt tượng, năm khánh thành, năm nâng lên trung tâm hành hương
  là bốn mốc khác nhau. `year` là **năm khởi lập linh địa**; các mốc còn lại viết trong `historicalFact`.
- **Nội dung sao chép dây chuyền.** Mười trang cùng một đoạn văn không phải mười nguồn — trong hồ sơ
  ghi thành một nguồn và nêu rõ các trang khác chỉ chép lại. Truy về bản gốc; nếu bản gốc là một blog
  không nguồn thì đó là cấp C, dùng cho `oralTradition` được, cho `historicalFact` thì không.
- **Con số được làm tròn dần.** "Tượng cao 3m" thành "gần 4m" rồi "khoảng 5m" qua các lần chép lại.
  Ưu tiên con số ở nguồn sớm nhất tìm được, và viết "khoảng" nếu nguồn viết "khoảng".
- **Chuyện kể bị viết như sử.** Rất nhiều trang du lịch kể giai thoại bằng giọng khẳng định. Đọc
  được thì cứ lấy nội dung, nhưng xếp vào `folklore[]` chứ đừng theo giọng của họ.
