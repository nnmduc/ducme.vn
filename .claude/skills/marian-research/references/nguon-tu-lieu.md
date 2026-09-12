# Thứ bậc nguồn & cách tìm tư liệu

## 1. Thứ bậc nguồn

**Cấp A — nguồn gốc, ưu tiên cao nhất**

- Kỷ yếu Đại hội Thánh Mẫu Toàn quốc 1959 và các kỷ yếu giáo phận.
- Văn khố giáo phận, thư chung, thông báo chính thức của Toà Giám mục.
- Tài liệu kiến trúc gốc (bản vẽ, hồ sơ công trình, tư liệu về KTS Ngô Viết Thụ).
- Bia đá, bảng ghi công tại chính linh đài (có ảnh chụp bảng làm bằng chứng).

**Cấp B — nguồn thứ cấp đáng tin, dùng làm nguồn chính được**

- Trang chính thức của giáo phận sở tại và của Hội đồng Giám mục Việt Nam (`hdgmvietnam.com`).
- Báo chí Công giáo có ban biên tập, báo chí chính thống có bài viết cụ thể về linh địa.
- Wikipedia tiếng Việt — dùng được, nhưng nên lần theo phần chú thích để lấy nguồn gốc bên dưới.
- Sách khảo cứu lịch sử Công giáo Việt Nam có nhà xuất bản.

**Cấp C — chỉ là manh mối, KHÔNG trích dẫn làm nguồn**

- Blog hành hương cá nhân, diễn đàn, nhóm Facebook, video YouTube.
- Bài viết tổng hợp trên trang du lịch, nội dung sao chép lại không ghi nguồn.
- Nội dung do AI sinh ra trên các trang tổng hợp tự động.

Cấp C dùng để biết **nên tìm ở đâu**, sau đó phải tìm cho ra nguồn cấp A hoặc B để dẫn.

## 2. Trang giáo phận theo vùng

Dữ liệu hiện có trải trên các giáo phận: Huế, Đà Nẵng, Kon Tum, Nha Trang, Ban Mê Thuột, Phan Thiết,
Xuân Lộc, Sài Gòn, Bà Rịa, Vĩnh Long, Long Xuyên, Bùi Chu, Hà Tĩnh.

Cách tìm trang chính thức: tìm `"giáo phận <tên>" trang chính thức` hoặc `site:hdgmvietnam.com "<tên
giáo phận>"`. Tên miền giáo phận hay đổi; kiểm tra trang còn hoạt động trước khi dẫn.

## 3. Mẫu truy vấn tìm kiếm

Tìm bằng nhiều biến thể, vì tư liệu tiếng Việt viết không nhất quán:

```
"Đức Mẹ <tên>" lịch sử xây dựng
"Duc Me <ten khong dau>" linh dai
"linh đài Đức Mẹ <tên>" khánh thành năm
"trung tâm hành hương <tên>" giáo phận
site:hdgmvietnam.com "<tên>"
site:<tên miền giáo phận> "<tên>"
"<tên>" "Đại hội Thánh Mẫu" 1959
"<tên>" kỷ yếu giáo phận
"<tên>" tọa độ OR "vị trí" OR "địa chỉ"
```

### Với ảnh — tìm cả ảnh chính lẫn ảnh phụ (`galleryImages`)

Đừng dừng ở nguồn duy nhất. Tìm lần lượt qua các nhóm nguồn dưới đây — mỗi nhóm có mức tin cậy giấy
phép khác nhau, nhưng **quy tắc "giấy phép phải công khai kiểm tra lại được" luôn áp dụng như nhau**
cho ảnh chính lẫn ảnh phụ, bất kể tìm ở nguồn nào.

**1. Wikimedia Commons — giấy phép rõ ràng nhất, ưu tiên thử trước**

```
site:commons.wikimedia.org "<tên>"
"<tên>" Wikimedia Commons
commons.wikimedia.org Category "<tên tiếng Anh nếu có>"
```

Mở đúng trang `File:...`, đọc mục giấy phép (CC BY-SA, CC BY, Public Domain). Dùng được ngay, kể cả
cho `galleryImages` — một Category trên Commons nhiều khi có sẵn nhiều ảnh cùng linh địa.

**2. Trang tin chính thức giáo phận / giáo xứ — nguồn ảnh sự kiện phong phú nhất, nhưng cẩn thận giấy phép**

```
site:<tên miền giáo phận> "<tên linh địa>" hình ảnh
"giáo xứ <tên>" hình ảnh khánh thành
"trung tâm hành hương <tên>" thư viện ảnh
```

Các trang tin giáo phận/giáo xứ thường đăng nhiều ảnh (lễ khánh thành, đại hội, sinh hoạt hành hương) —
đây là nơi dễ tìm được ảnh phụ nhất. Nhưng **phần lớn các trang này không ghi giấy phép mở** (không
phải CC-BY-SA/CC-BY/Public Domain) — chỉ vì trang đăng công khai không có nghĩa là được phép dùng lại.
Chỉ đề xuất ảnh từ nguồn này khi:

- Trang có ghi rõ điều khoản cho phép dùng lại (ví dụ "được phép sử dụng lại, xin ghi nguồn"), hoặc
- Đã liên hệ trực tiếp xin phép và có xác nhận — nhưng ghi rõ đây là xác nhận riêng, không phải giấy
  phép công khai, để `marian-audit` biết mà cân nhắc (nguồn dạng này thường không qua được tiêu chí
  "nguồn phải truy cập được, kiểm tra lại được" và dễ bị loại ở bước kiểm chứng).

Không tìm được điều khoản rõ ràng thì vẫn ghi nhận trang này trong `imageSearchNote` làm manh mối, chứ
không đưa vào `images[]` như một đề xuất chính thức.

**3. Google Images / tìm ảnh ngược — công cụ dò tìm, không phải nguồn trích dẫn**

```
images.google.com — tìm bằng từ khoá "<tên>" hoặc tải ảnh nghi vấn lên tìm ngược (reverse image search)
```

Google Images không tự nó là nguồn: nó chỉ giúp tìm ra trang gốc đăng ảnh. Luôn bấm vào đúng trang gốc
và ghi `filePage` là URL trang đó (không phải URL kết quả tìm kiếm của Google) rồi áp dụng đúng quy tắc
giấy phép ở nhóm 1 hoặc 2 phía trên. Cũng dùng công cụ này để tìm ảnh ngược khi nghi ngờ một ảnh là do
AI tạo sinh hoặc lấy nhầm từ linh địa khác trùng tên.

**4. Blog hành hương, mạng xã hội — chỉ là manh mối, giống nguyên tắc Cấp C ở mục 1 "Thứ bậc nguồn" phía trên**

Dùng để biết ảnh nào đang lưu hành, ai có thể là tác giả gốc, chụp năm nào — rồi lần theo để tìm bản
gốc có giấy phép (thường quay lại Wikimedia Commons hoặc trang giáo phận). Không trích dẫn thẳng ảnh
tải về từ Facebook, nhóm mạng xã hội, hay ảnh cắt từ video YouTube.

## 4. Bẫy thường gặp

- **Trùng tên.** Rất nhiều nơi cùng tên "Đức Mẹ Fatima", "Đức Mẹ Lộ Đức", "Núi Cúi"/"Núi Cúi". Luôn
  kiểm tra tỉnh + giáo phận trước khi tin một nguồn nói về đúng linh địa đang xét.
- **Địa danh hành chính đã đổi.** Nhiều bài viết cũ ghi tên tỉnh/huyện trước sáp nhập. Ghi địa chỉ
  theo tên hiện hành, nhưng nêu tên cũ trong ngoặc nếu tư liệu lịch sử dùng tên đó.
- **Niên đại lệch.** Rất hay gặp: năm đúc tượng, năm đặt tượng, năm khánh thành, năm nâng lên trung
  tâm hành hương là bốn mốc khác nhau. Trường `year` là **năm khởi lập linh địa**; các mốc còn lại
  viết trong `historicalFact`.
- **Nội dung sao chép dây chuyền.** Mười trang cùng một đoạn văn không phải mười nguồn. Truy về bản
  gốc; nếu bản gốc là một blog không nguồn, coi như chưa có nguồn.
- **Con số được làm tròn dần.** "Tượng cao 3m" ở nguồn gốc thành "gần 4m" rồi "khoảng 5m" qua các lần
  chép lại. Ưu tiên con số ở nguồn sớm nhất tìm được.
