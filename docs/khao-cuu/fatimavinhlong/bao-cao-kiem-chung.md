# Báo cáo kiểm chứng: Đức Mẹ Fatima Vĩnh Long

## Kết luận

> **ÁP DỤNG** — 34/35
>
> 7 nguon deu song va doc truc tiep duoc (ke ca S1 sau khi thu lai bang curl UA trinh duyet, khong con 403). Moi khang dinh chinh trong historicalFact/architect/oralTradition/location deu truy duoc nguyen van trong nguon, co doi chieu cheo doc lap (melavang.info, tim kiem rieng). Anh de xuat la anh that: EXIF iPhone SE 12/05/2019, GPS trung khop toa do de xuat, giay phep CC BY-SA 4.0 ro tac gia, khong co dau hieu AI (ky thuat + quan sat truc tiep). Mau thuan ten giam muc (Anton vs Phero) duoc giai quyet dung, co can cu doc lap.

- **Hồ sơ khảo cứu đã kiểm**: `docs/khao-cuu/fatimavinhlong/khao-cuu.json`
- **Người kiểm chứng**: Claude Code (phien kiem chung 2026-09-11)
- **Ngày kiểm**: 2026-09-11
- **Cho phép triển khai**: có — `marian-publish` được chạy tiếp
- **Hồ sơ gốc**: `docs/khao-cuu/fatimavinhlong/kiem-chung.json` (schema `ducme.kiem-chung/v1`)

## 1. Chấm điểm

| Trục | Điểm | Bằng chứng |
|---|---|---|
| Chất lượng nguồn | 5/5 | S1 la trang giao phan chinh thuc (mo truc tiep duoc bang curl UA trinh duyet, 200), S2/S3 la 2 trang tin Cong giao doc lap, S5 la bai kien truc chuyen de, S6 Wikipedia, S7 Wikimedia Commons; cong them 1 nguon doc lap tu tim (melavang.info) khong nam trong bao cao goc |
| Truy vết luận điểm | 5/5 | Da mo va doi chieu nguyen van tung khang dinh trong ca 7 nguon (WebFetch + curl truc tiep cho S1); khong co cau nao troi noi khong gan nguon |
| Độ chính xác dữ liệu | 4/5 | Dia danh xa Tan Ngai khop 4 nguon doc lap; toa do lay tu EXIF anh S7 (10.26368,105.93600) khop de xuat (10.2637,105.936) va nam trong lanh tho VN, nhung chi co 1 nguon GPS (anh), chua co ban do doc lap thu hai de doi chieu — tru 1 diem, khong cham tieu chi chan |
| Hình ảnh | 5/5 | Tai anh goc ve kiem tra: EXIF that (Apple iPhone SE, 12/05/2019 18:38, GPS gan trong file), check-image.mjs khong bao hieu AI, quan sat truc tiep dung tuong Duc Me Fatima duoi khung chu M + hoa xep chu MARIA — dung linh dia dang xet, giay phep CC BY-SA 4.0 ghi ro tren trang File: con song |
| Phân định sự thật / truyền tụng | 5/5 | Cay me/song Tien-Hau dat dung trong oralTradition (dan 'Tuong truyen'), khong lan sang historicalFact; su kien Fatima hien ra chi dung nhu moc thoi gian ky niem, khong khang dinh la su that lich su da kiem chung |
| Giọng văn & trung lập | 5/5 | Van phong trung lap, mo ta khong tan duong; khong dung noi dung nhay cam chinh tri |
| Tính kỹ thuật | 5/5 | validate-record.mjs: DAT toan bo rang buoc bat buoc; format-report.mjs chi co 1 canh bao nhe (oralTradition thieu claims) — chap nhan duoc vi truong nay khong bat buoc dan nguon theo luoc do |


**Tổng: 34/35.**

## 2. Kiểm nguồn dẫn

| Mã | URL | Trạng thái | Chứa luận điểm? | Kiểm lại bằng | Ghi chú |
|---|---|---|---|---|---|
| S1 | [liên kết](https://giaophanvinhlong.net/trung-tam-hanh-huong-duc-me-fatima-vinh-long/) | còn sống | có | — | WebFetch tool bao 403 (chan theo user-agent), nhung curl voi User-Agent trinh duyet tra ve 200 va noi dung chua day du: xac nhan nguyen van '17/02/1965', '13/05/1965', 'Antôn Nguyễn Văn Thiện', menu dieu huong liet ke dung 3 trung tam 'Trung tâm La Mã / Trung tâm Fatima / Trung tâm Đình Khao', va cau 'hai ngày hành hương cấp Giáo phận 12-13/5 và 12-13/10' |
| S2 | [liên kết](https://vntaiwan.catholic.org.tw/17news/17news0740.htm) | còn sống | có | — | Xac nhan nguyen van sang kien cua Duc Cha Anton Nguyen Van Thien, ngay khoi cong/khanh thanh, vi tri xa Tan Ngai, va Duc Ong Barnabe Nguyen Van Phuong chu su le 100 nam |
| S3 | [liên kết](https://www.vietcatholic.net/News/Html/222536.htm) | còn sống | có | — | Noi dung gan nhu trung voi S2 (cung mot ban tin duoc dang lai 2 noi), xac nhan lai cac chi tiet giong S2 |
| S4 | [liên kết](https://gpbanmethuot.com/Tin-tuc/gioi-thieu-tthh-duc-me-fatima-vinh-long-19890.html) | còn sống | có | — | Xac nhan cay me hon 200 tuoi va tuong dau tien dat duoi goc cay, xac nhan tuong xay tu dong gop linh muc; NHUNG ghi sai ten giam muc thanh 'Phero Nguyen Van Thien' va sai vai tro 'giam muc tien khoi' (giam muc tien khoi thuc te la Phero Ngo Dinh Thuc) — dung ket luan cua bao cao la khong dung ten nay |
| S5 | [liên kết](https://www.tanmankientruc.org/kien-truc/modernist-series/trung-tam-fatima-vinh-long) | còn sống | có | — | Xac nhan nguyen van mo ta kien truc hien dai, tam chia be tong dan cai, cot manh, hanh lang rong, va cau 'chua co thong tin ve kien truc su' |
| S6 | [liên kết](https://vi.wikipedia.org/wiki/Ant%C3%B4n_Nguy%E1%BB%85n_V%C4%83n_Thi%E1%BB%87n) | còn sống | có | — | Xac nhan Anton Nguyen Van Thien la Giam muc chinh toa GP Vinh Long, bo nhiem 24/11/1960, tu nhiem 1968 — dung de giai quyet mau thuan ten voi S4 |
| S7 | [liên kết](https://commons.wikimedia.org/wiki/File:DucMeFatimaVinhLong.jpg) | còn sống | có | — | Trang File: con song, ghi ro tac gia Philiplam990, giay phep CC BY-SA 4.0, ngay chup 12/05/2019 18:38; da tai anh goc ve doc EXIF bang lenh file: xac nhan Apple iPhone SE, GPS gan kem, khop hoan toan voi thong tin script check-image.mjs |


### Đối chiếu luận điểm

| Luận điểm | Nguồn | Kết luận | Ghi chú |
|---|---|---|---|
| Đức Cha Antôn Nguyễn Văn Thiện khởi xướng xây dựng trung tâm | [S1] [S2] [S3] [S6] | Đạt | Dung nguyen van ca 4 nguon, ke ca S1 sau khi mo lai bang curl |
| Khởi công 17/02/1965, khánh thành tượng đài và trung tâm 13/05/1965 | [S1] [S2] [S3] | Đạt | Dung nguyen van, con duoc melavang.info (nguon tu tim) xac nhan lan 3 |
| Một trong ba trung tâm hành hương chính thức của GP Vĩnh Long (Fatima, Đình Khao, La Mã Bến Tre) | [S1] | Đạt | Menu dieu huong S1 liet ke dung 3 trung tam nay; xac nhan cheo qua tim kiem doc lap va melavang.info |
| Tổ chức hai kỳ hành hương cấp giáo phận hằng năm vào 12–13/5 và 12–13/10 | [S1] [S2] [S3] | Đạt | Dung nguyen van trong S1: 'hai ngày hành hương cấp Giáo phận 12-13/5 và 12-13/10' |
| Năm 2017 tổ chức đại lễ kỷ niệm 100 năm, do Đức Ông Barnabê Nguyễn Văn Phương chủ sự | [S2] [S3] | Đạt | Dung nguyen van ca 2 nguon |
| Kiến trúc hiện đại, mặt tiền tấm chìa bê tông đan cài, hệ cột thép mảnh, hành lang rộng | [S5] | Đạt | Dung nguyen van, chi dien dat lai cho gon |
| Tên kiến trúc sư thiết kế chưa xác định được | [S5] | Đạt | Nguon tu nhan 'chưa có thông tin về kiến trúc sư' |
| Tượng đá trắng xây dựng từ đóng góp của các linh mục trong giáo phận | [S4] | Đạt | Dung nguyen van 'không nhận từ bất kỳ ân nhân nào riêng'; giu confidence thap trong bao cao la hop ly vi S4 co loi khac (ten giam muc) |
| Tượng đặt dưới gốc cây me cổ thụ hơn 200 năm tuổi | [S4] | Đạt | Dung nguyen van; dat dung trong oralTradition, khong lan sang historicalFact |
| Trung tâm toạ lạc tại xã Tân Ngãi, TP. Vĩnh Long | [S1] [S2] [S3] [S4] | Đạt | Khop ca 4 nguon, dung sua tu 'Phường 3' (ban ghi cu, khong khop nguon nao) |
| Toạ độ GPS 10°15'49.26"N 105°56'9.62"E ghi trong EXIF ảnh S7 | [S7] | Đạt | Tu tai anh goc va doc EXIF bang lenh 'file': xac nhan dung gia tri, quy doi ra 10.26368/105.93600, khop so lam tron 10.2637/105.936 trong ban ghi |


### Kiểm chéo độc lập

Nguồn do người kiểm chứng tự tìm, không lấy từ báo cáo khảo cứu.

| Nguồn | URL | Xác nhận / bác bỏ điều gì |
|---|---|---|
| Trung tâm hành hương Mẹ Fatima Vĩnh Long - melavang.info | [liên kết](https://melavang.info/trung-tam-hanh-huong-me-fatima-vinh-long/) | Xac nhan doc lap: vi tri xa Tan Ngai, nguoi khoi xuong va moc thoi gian giong het S1/S2/S3, liet ke dung 3 trung tam hanh huong cua giao phan; cung cap them chi tiet moi (khong co trong bao cao goc): khu dat 11.500m2, nha tho 50x25m, tuong cao 5m tren be 8m, san chua 4000 nguoi, so luong hanh huong ~12.000 va ~18.000 nguoi — co the bo sung sau, khong bat buoc cho lan nay |
| Tim kiem doc lap ve 3 trung tam hanh huong GP Vinh Long | [liên kết](web-search: "Fatima Vĩnh Long" "Đình Khao" "La Mã Bến Tre") | Xac nhan dung 3 trung tam: Fatima (xa Tan Ngai), Dinh Khao (Long Ho), La Ma Ben Tre (do Duc Cha Phero Ngo Dinh Thuc lap 1951) — khop voi khang dinh trong historicalFact/significance |
| Doc truc tiep anh goc File:DucMeFatimaVinhLong.jpg | [liên kết](https://commons.wikimedia.org/wiki/Special:FilePath/DucMeFatimaVinhLong.jpg) | Tai ve va xem truc tiep: dung tuong Duc Me Fatima trang duoi khung mai chu 'M', hoa xep chu MARIA truoc be — khop mo ta trong images[]; EXIF doc bang lenh 'file' xac nhan Apple iPhone SE, chup 2019:05:12 18:38:29, co GPS-Data — khong co dau hieu chinh sua/AI |


## 3. Kiểm hình ảnh

| File | Giấy phép xác minh | Giấy phép | Đúng linh địa | Dấu hiệu AI | Kết luận |
|---|---|---|---|---|---|
| File:DucMeFatimaVinhLong.jpg | có | CC BY-SA 4.0 | có | không thấy | DUYỆT |


## 4. Kiểm kỹ thuật & ảnh hưởng hệ thống

| Mục | Ảnh hưởng |
|---|---|
| Số lượng linh địa | không đổi (cập nhật bản ghi đã có, id fatimavinhlong) |
| CONSTELLATION_VERSIONS | không đổi — chỉ đụng v4 (đã có sẵn, không nằm trong phạm vi duyệt lần này) |
| Số nguồn trong record | 2 link tìm kiếm Google → 4 bài viết trực tiếp (S1,S2,S3,S5); chạy lại npm test sau khi ghi vào src/data/statues.js |
| Ảnh thực địa | Lần đầu có ảnh thực địa hợp lệ cho bản ghi này (trước đó hasPhoto: false) |
| Tài liệu phải cập nhật | docs/marian-sites-missing-info.md — bỏ fatimavinhlong khỏi danh sách thiếu ảnh/thiếu nguồn nếu đang có mặt |


```text
$ node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/fatimavinhlong/khao-cuu.json --allow-existing-id
=> DAT toan bo rang buoc bat buoc.
```

## 5. Vấn đề phát hiện

| Mức | Vấn đề | Vị trí | Đề nghị xử lý |
|---|---|---|---|
| Nhẹ | Toa do moi chi dua tren 1 nguon GPS (EXIF anh S7), chua co ban do/GPS doc lap thu hai de doi chieu | record.lat, record.lng | Khong bat buoc sua truoc khi trien khai (da nam trong lanh tho VN, khop voi anh dung linh dia); ghi nhan la huong cai thien cho lan cap nhat sau |
| Nhẹ | Truong oralTradition khong co claims[] dan nguon (canh bao tu format-report.mjs) | fields[2] (oralTradition) | Chap nhan duoc — truong truyen tung khong bat buoc dan nguon theo luoc do; cau cay me da doi chieu duoc voi S4 trong claimChecks o day |
| Nhẹ | images[] de xuat anh nhung record.realImage van null — chua duoc ap dung vao ban ghi | khao-cuu.json record.realImage / record.realImageCaption | marian-publish thuc hien theo approved.images ben duoi khi trien khai, dien realImage/realImageCaption tu caption da co san trong images[] |


## 6. Phần đã duyệt

Đây là phạm vi chính xác `marian-publish` được phép đưa lên website.

- [x] `historicalFact`
- [x] `architect`
- [x] `oralTradition`
- [x] `significance`
- [x] `location`
- [x] `lat`
- [x] `lng`
- [x] `sources`
- [x] Nguồn đưa vào dữ liệu: [S1], [S2], [S3], [S4], [S5], [S6], [S7]
- [x] Ảnh: File:DucMeFatimaVinhLong.jpg
- [ ] Thay đổi chòm sao (`CONSTELLATION_VERSIONS`)

---

_Báo cáo sinh tự động từ hồ sơ JSON bằng `format-audit.mjs`. Sửa nội dung thì sửa file JSON rồi chạy lại lệnh, đừng sửa trực tiếp vào file markdown._
