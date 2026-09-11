# Báo cáo kiểm chứng: Đức Mẹ Côn Đảo

## Kết luận

> **TRẢ LẠI KHẢO CỨU** — 24/35
>
> Ho so dat ve mat ky thuat (validate-record.mjs sach, phan dinh su that/truyen tung ro, giong van trung lap) nhung ba tru cot du lieu cot loi deu chua du vung: (1) diocese 'Tong Giao phan Sai Gon' bi doi chieu doc lap (giaophanbaria.org, Wikipedia Giao phan Ba Ria) cho thay nhieu kha nang SAI — tu 2005 Con Dao thuoc dia gioi Giao phan Ba Ria; (2) year (1930) chi la diem giua uoc luong giua ba moc lech nhau toi hon 100 nam ('the ky XIX', 'hon 2 the ky', 'gan 80 nam'); (3) toa do (8.684, 106.595) la suy luan tu mo ta tuyen duong, khong co diem doi chieu doc lap nao. Ca 7 nguon cung khong mo truc tiep duoc trong phien kiem chung nay (PROXY_CHAN qua ca curl lan WebFetch) nen chi xac nhan duoc gian tiep qua tim kiem doc lap, khong phai doc nguyen van.

- **Hồ sơ khảo cứu đã kiểm**: `docs/khao-cuu/condao/khao-cuu.json`
- **Người kiểm chứng**: Claude Code (phien kiem chung 2026-09-11)
- **Ngày kiểm**: 2026-09-11
- **Cho phép triển khai**: **không** — dừng tại đây
- **Hồ sơ gốc**: `docs/khao-cuu/condao/kiem-chung.json` (schema `ducme.kiem-chung/v1`)

## 1. Chấm điểm

| Trục | Điểm | Bằng chứng |
|---|---|---|
| Chất lượng nguồn | 3/5 | 3 nguon cap B hop le trong record (tgpsaigon.net, condaopark.com.vn, vnexpress.net) khong phai link tim kiem, nhung KHONG nguon nao trong 7 nguon mo duoc truc tiep trong phien nay (PROXY_CHAN ca qua curl UA trinh duyet lan WebFetch) — chi xac nhan gian tiep qua WebSearch, va it nhat 1 suy luan tu S1 (dia phan) bi doi chieu doc lap chi ra kha nang sai |
| Truy vết luận điểm | 2/5 | Moi khang dinh deu gan ma nguon cu the (dat ve cau truc), nhung khong khang dinh nao duoc doc nguyen van de xac nhan — ca nguoi khao cuu lan nguoi kiem chung deu bi chan mang o ca 3 nguon B chinh. Rieng khang dinh ve diocese, khi doi chieu doc lap (khong dung lai tim kiem cua nguoi khao cuu), cho ket qua mau thuan ro |
| Độ chính xác dữ liệu | 1/5 | diocese nhieu kha nang sai (xem crossChecks); year chi la uoc luong giua 3 moc lech nhau hon 100 nam, khong moc nao co nguon cap A/B chot duoc; toa do khong co bat ky diem doi chieu doc lap nao (khong anh EXIF, khong GPX, khong POI ban do) nen khong the xac nhan nam trong pham vi 500m nhu tieu chi B.4 yeu cau |
| Hình ảnh | 3/5 | Khong de xuat anh — chap nhan duoc theo quy chuan du an. Da tim hop ly qua Wikimedia Commons nhung khong ra ket qua xac thuc, ghi ro trong imageSearchNote |
| Phân định sự thật / truyền tụng | 5/5 | historicalFact chi giu lai cac khang dinh co nguon cap B, cac chi tiet chua kiem chung duoc (Phap dat tuong the ky XIX, ngu dan cau nguyen, bia da, 'hon 2 the ky') deu dat dung trong oralTradition kem cau 'chua duoc nguon cap A/B xac nhan'; khong co cau nao khang dinh sieu nhien nhu su that lich su |
| Giọng văn & trung lập | 5/5 | Van phong trung lap, mo ta bien co 1975 (trung dung nha tho lam rap chieu bong/toa an) mot cach khach quan, khong ca ngoi cung khong len an che do nao |
| Tính kỹ thuật | 5/5 | validate-record.mjs: DAT toan bo, 0 loi 0 canh bao. format-report.mjs --check: hop le, chi 7 canh bao nhe cho cac truong khong bat buoc claims (name, title, elevation, location, region, realImage, realImageCaption) — da giai trinh day du trong ho so |


**Tổng: 24/35.**

## 2. Kiểm nguồn dẫn

| Mã | URL | Trạng thái | Chứa luận điểm? | Kiểm lại bằng | Ghi chú |
|---|---|---|---|---|---|
| S1 | [liên kết](https://tgpsaigon.net/bai-viet/con-dao-co-mot-ho-dao-dang-hoi-sinh-39252) | proxy chặn | có | WebFetch (that bai, EGRESS_BLOCKED giong het curl) + WebSearch doc lap voi cau hoi khac nguoi khao cuu | Khong mo truc tiep duoc. WebSearch doc lap (nhieu cau hoi khac voi nguoi khao cuu) cho ra noi dung nhat quan ve: hoat dong tu ~1920, mat nha tho sau 1975, 33 nam khong linh muc, ~200 giao dan, va cum tu 'gan 80 nam lich su' cua hang da — CHAP NHAN containsClaim=true cho cac khang dinh nay. RIENG khang dinh ve diocese ('thuoc Tong Giao phan Sai Gon') la suy luan cua nguoi khao cuu tu viec trang dang bai, KHONG phai trich nguyen van tu S1 — xem claimCheck rieng va crossChecks, day la diem yeu nhat |
| S2 | [liên kết](https://condaopark.com.vn/vn/dich-vu/14/trung-tam-vuon-hang-duc-me-ong-dung.html) | proxy chặn | có | WebFetch (that bai, EGRESS_BLOCKED) + WebSearch doc lap | Khong mo truc tiep duoc. WebSearch doc lap xac nhan gian tiep: day la trang chinh thuc cua co quan quan ly Vuon Quoc gia Con Dao, co tour 'Trung tam Vuon - hang Duc Me - Ong Dung', khop voi mo ta khoang cach/tuyen duong trong record |
| S3 | [liên kết](https://vnexpress.net/hang-duc-me-trong-rung-ram-con-dao-4414424.html) | proxy chặn | có | WebFetch (that bai, EGRESS_BLOCKED) + WebSearch doc lap | Khong mo truc tiep duoc. WebSearch doc lap (khac cau hoi nguoi khao cuu) van cho ra cung noi dung ve bia da ta on song ngu Viet-Phap va vai tro du lich sinh thai — nhat quan qua nhieu lan tim doc lap |
| S4 | [liên kết](https://luhanhvietnam.com.vn/du-lich/ghe-tham-hang-duc-me-con-dao.html) | proxy chặn | có | WebSearch doc lap | Nguon cap C, khong dua vao record — chi dung lam manh moi cho oralTradition, da ghi dung nhu vay |
| S5 | [liên kết](https://pulobear.vn/doi-net-bi-an-ve-hang-duc-me-maria-mother-marias-cave-o-con-dao/) | proxy chặn | có | WebSearch doc lap | Nguon cap C, khong dua vao record — chi dung lam manh moi cho oralTradition |
| S6 | [liên kết](https://en.wikipedia.org/wiki/C%C3%B4n_S%C6%A1n_Island) | proxy chặn | có | WebSearch doc lap | WebSearch xac nhan toa do infobox 8.6931N 106.6094E cho dao Con Son — dung lam diem neo tham chieu, khong mo ta truc tiep ve hang nen khong dua vao record |
| S7 | [liên kết](https://anchoivungtau.vn/hang-duc-me-dia-diem-tam-linh-an-minh-suot-hon-2-the-ky-tai-vuon-quoc-gia-con-dao/) | proxy chặn | có | WebSearch doc lap | Nguon cap C, chi dung de ghi nhan mau thuan 'hon 2 the ky' trong conflicts, khong dua vao record |


7 nguồn bị chính sách egress của phiên làm việc chặn, không phải nguồn chết. Các nguồn này đã được kiểm lại bằng công cụ ghi ở cột "Kiểm lại bằng".

### Đối chiếu luận điểm

| Luận điểm | Nguồn | Kết luận | Ghi chú |
|---|---|---|---|
| Tu khoang nam 1920, hoi dao Con Son duoc thanh lap | [S1] | Đạt | Khong doc duoc nguyen van S1 nhung nhieu lan tim kiem doc lap (cau hoi khac cua nguoi kiem chung) deu cho ra cung moc ~1920 mot cach nhat quan — chap nhan tam, khuyen nghi doc lai nguyen van khi co mang |
| Nha tho bi dung lam rap chieu bong/toa an sau 1975, chuong bi thao do | [S1] | Đạt | Nhat quan qua nhieu lan tim kiem doc lap, ke ca mot bai viet khac (daoconggiao.org, khong nam trong sources cua ho so) mo ta cung su kien |
| Tu 1976, khoang 33 nam khong linh muc thuong tru, khong Thanh le cong khai | [S1] | Đạt | Nhat quan qua nhieu lan tim kiem doc lap |
| Hien nay khoang 200 giao dan, muon nha tu gia sinh hoat ton giao | [S1] | Đạt | Nhat quan qua nhieu lan tim kiem doc lap |
| Hoi dao Con Son - Con Dao thuoc Tong Giao phan Sai Gon - TP.HCM (suy tu viec tgpsaigon.net dang bai) | [S1] | Sửa câu chữ | DOI CHIEU DOC LAP CHO KET QUA MAU THUAN: Giao phan Ba Ria duoc tach tu Giao phan Xuan Loc nam 2005 va 'nam gon trong tinh Ba Ria - Vung Tau' (bao gom huyen/dac khu Con Dao) theo giaophanbaria.org va Wikipedia tieng Viet — nghia la tu 2005 den nay, ve nguyen tac dia gioi, ho dao Con Son nhieu kha nang thuoc Giao phan Ba Ria chu khong phai Tong Giao phan Sai Gon. Viec tgpsaigon.net dang bai co the chi phan anh giai doan lich su truoc 2005, hoac don thuan la mot bai viet truyen giao khong theo dung ranh gioi giao phan hien hanh. CAN SUA lai truoc khi xuat ban, kem nguon moi |
| Hang da Duc Me tren nui co 'gan 80 nam lich su' tinh den thoi diem dang bai (S1) | [S1] | Đạt | Khong xac dinh duoc ngay dang bai chinh xac nen khong the tinh ra nam cu the — giu nguyen cach dan 'gan 80 nam' (khong quy thanh mot nam co dinh nhu record.year dang lam) la cach lam dung, nhung ban than record.year=1930 van chi la mot phep quy doi tam, chua co nguon xac nhan truc tiep con so nay |
| Hang duoc Phap dat tuong the ky XIX / mot so bai noi 'hon 2 the ky' | [S4] [S7] | Đạt | Dat dung vi trong oralTradition (khong lan sang historicalFact), co neu ro day la loi ke pho bien tu nguon cap C chua kiem chung va co mau thuan voi S1 — dung cach xu ly |
| Toa do (8.684, 106.595) uoc luong tu mo ta tuyen duong 3km + di bo 400-500m | [S2] [S3] [S4] | Sửa câu chữ | Day la suy luan hinh hoc cua nguoi khao cuu, khong phai toa do doc duoc tu bat ky nguon nao. Khong tim duoc nguon doc lap nao (anh EXIF, GPX, POI ban do) de doi chieu — CAN tim them nguon dinh vi truoc khi dua toa do nay len site, theo dung tieu chi chan B.4 |


### Kiểm chéo độc lập

Nguồn do người kiểm chứng tự tìm, không lấy từ báo cáo khảo cứu.

| Nguồn | URL | Xác nhận / bác bỏ điều gì |
|---|---|---|
| Giáo phận Bà Rịa - trang chính thức (giaophanbaria.org) | [liên kết](https://www.giaophanbaria.org/) | Xac nhan Giao phan Ba Ria duoc tach tu Giao phan Xuan Loc ngay 22/11/2005, va giao phan nay 'nam gon trong tinh Ba Ria - Vung Tau' — ve nguyen tac dia gioi dan su, huyen/dac khu Con Dao (thuoc tinh Ba Ria - Vung Tau cu) se nam trong pham vi Giao phan Ba Ria tu 2005, MAU THUAN voi de xuat 'Tong Giao phan Sai Gon' trong khao-cuu.json |
| Giáo phận Bà Rịa – Wikipedia tiếng Việt | [liên kết](https://vi.wikipedia.org/wiki/Gi%C3%A1o_ph%E1%BA%ADn_B%C3%A0_R%E1%BB%8Ba) | Cung xac nhan nam thanh lap 2005, tach tu Xuan Loc, thuoc Giao tinh Sai Gon (giao tinh la cap tren giao phan, khac voi 'Tong Giao phan Sai Gon' la mot giao phan rieng trong cung giao tinh — khong nen nham lan hai khai niem nay, day co the la nguyen nhan gay ra suy luan sai cua nguoi khao cuu) |
| Cha Anphongsô Phạm Gia Thụy C.Ss.R. đã được Chúa gọi về - Tỉnh Dòng Chúa Cứu Thế Việt Nam | [liên kết](https://dcctvn.org/cha-anphongso-pham-gia-thuy-c-ss-r-da-duoc-chua-goi-ve/) | Nguon doc lap, khong nam trong khao-cuu.json, xac nhan dung ten la 'Anphongso (Alphonso) Pham Gia Thuy, C.Ss.R.', lam chanh xu kiem tuyen uy trai giam Con Dao giai doan 1971-1976, qua doi 09/11/2024 tho 90 tuoi. Giai quyet duoc nghi van ten trong unknowns[] cua ho so khao cuu ('Alphonsus Pham Gia Thuy' vs 'Ngo Gia Thuy') — ten dung la Anphongso Pham Gia Thuy. Chua anh huong toi record hien tai vi ten nay khong nam trong historicalFact, nhung nen dung cho lan khao cuu tiep theo |
| Kiem tra trung lap id trong src/data/statues.js | [liên kết](n/a - kiem bang site-gaps.mjs va grep truc tiep) | Xac nhan lai: khong co id nao lien quan Con Dao trong 18 ban ghi hien co — khong trung lap (tieu chi chan B.8 khong vi pham) |


## 3. Kiểm hình ảnh

Không có ảnh để kiểm — giữ `realImage: null`.

## 4. Kiểm kỹ thuật & ảnh hưởng hệ thống

| Mục | Ảnh hưởng |
|---|---|
| Số lượng linh địa | không đổi — chưa đưa vào src/data/statues.js lần này (TRẢ LẠI KHẢO CỨU) |
| CONSTELLATION_VERSIONS | không đổi |
| Số assertion npm test | không đổi (không có gì được duyệt để chèn vào statues.js) |
| Tài liệu phải cập nhật | docs/khao-cuu/condao/khao-cuu.json cần một lượt sửa cho diocese/year/lat/lng trước khi audit lại |


```text
$ node .claude/skills/marian-publish/scripts/validate-record.mjs docs/khao-cuu/condao/khao-cuu.json
KIEM TRA: condao (docs/khao-cuu/condao/khao-cuu.json)

=> DAT toan bo rang buoc bat buoc. Sau khi chen vao src/data/statues.js, chay "npm test" de xac nhan lai.

(Luu y: dat rang buoc ky thuat KHONG dong nghia voi noi dung dung — xem issues[] muc 'chan' o tren.)
```

## 5. Vấn đề phát hiện

| Mức | Vấn đề | Vị trí | Đề nghị xử lý |
|---|---|---|---|
| CHẶN | record.diocese de xuat 'Tong Giao phan Sai Gon - TP.HCM' nhung day la suy luan (tu viec tgpsaigon.net dang bai), khong phai trich dan truc tiep; doi chieu doc lap voi giaophanbaria.org va Wikipedia cho thay tu 2005 dia gioi Giao phan Ba Ria bao trum toan tinh Ba Ria - Vung Tau (gom ca Con Dao) — nhieu kha nang diocese dung phai la 'Giao phan Ba Ria' | record.diocese; fields[7] (diocese) | Tim nguon truc tiep xac nhan ho dao/giao xu Con Son - Con Dao co ten trong danh sach giao xu/giao hat cua Giao phan Ba Ria (vi du trang giaophanbaria.org muc Cac Giao Hat, hoac nien giam giao phan), sau do sua diocese thanh 'Giao phan Ba Ria' kem nguon moi truoc khi trinh kiem chung lai |
| CHẶN | record.year (1930) chi la diem giua uoc luong cho cum tu mo ho 'gan 80 nam' (khong ro ngay dang bai S1), trong khi cac nguon khac (cap C) noi 'the ky XIX' va 'hon 2 the ky' — bien do sai lech giua cac nguon len toi hon 100 nam, chua co nguon cap A/B nao chot duoc mot moc cu the | record.year; fields[2] (year) | Tim ngay dang chinh xac cua bai S1 (vi du qua Wayback Machine luu tru trang) de tinh lai 'gan 80 nam' chinh xac hon; hoac lien he truc tiep ho dao Con Son / Giao phan Ba Ria de xin moc nam chinh thuc truoc khi dua year len site |
| CHẶN | Toa do (8.684, 106.595) la suy luan hinh hoc tu mo ta tuyen duong, khong doi chieu duoc voi bat ky nguon dinh vi cu the nao (anh EXIF, GPX, diem POI ban do) — khong co 'vi tri doi chieu duoc' nhu tieu chi chan B.4 yeu cau, nen khong the xac nhan sai so trong pham vi 500m; hang nam sau trong rung nen rui ro lech xa la co that | record.lat, record.lng; fields[3], fields[4] | Tim anh co gan GPS (EXIF) chup tai hang, ban do/GPX tuyen trekking chinh thuc cua Vuon Quoc gia Con Dao, hoac diem POI tren OpenStreetMap/Wikimapia ghi ro 'Hang Duc Me' de co toa do doc lap — tuong tu cach da lam thanh cong cho fatimavinhlong (dung EXIF anh Wikimedia Commons) |
| Nặng | Ca 3 nguon cap B trong record (S1, S2, S3) deu khong mo duoc truc tiep trong phien kiem chung nay (PROXY_CHAN qua ca curl UA trinh duyet lan WebFetch) — khac voi audit fatimavinhlong truoc do da mo duoc S1 bang curl UA trinh duyet. Toan bo noi dung chi xac nhan gian tiep qua WebSearch doc lap, chua doc duoc nguyen van | sourceChecks S1, S2, S3 | Chay lai kiem chung trong moi truong co WebFetch/curl hoat dong binh thuong voi cac host nay truoc khi cho phep AP_DUNG; neu van bi chan, thu curl voi User-Agent trinh duyet nhu da thanh cong voi giaophanvinhlong.net |
| Nhẹ | Ten linh muc coi soc 1971-1975/1976 ma ho so khao cuu de trong unknowns ('Alphonsus Pham Gia Thuy' vs 'Ngo Gia Thuy') nay da giai quyet duoc qua cao pho chinh thuc tren dcctvn.org: ten dung la 'Anphongso (Alphonso) Pham Gia Thuy, C.Ss.R.', phuc vu 1971-1976 | unknowns[] | Khong bat buoc sua ngay vi ten nay chua duoc dua vao historicalFact cua ban ghi hien tai; bo sung nguon dcctvn.org nay cho lan khao cuu tiep theo neu muon neu ten linh muc |


## 6. Phần đã duyệt

Đây là phạm vi chính xác `marian-publish` được phép đưa lên website.

- [ ] `name`
- [ ] `title`
- [ ] `year`
- [ ] `lat`
- [ ] `lng`
- [ ] `elevation`
- [ ] `location`
- [ ] `region`
- [ ] `diocese`
- [ ] `historicalFact`
- [ ] `oralTradition`
- [ ] `architect`
- [ ] `significance`
- [ ] `realImage`
- [ ] `realImageCaption`
- [ ] `sources`
- [ ] Nguồn đưa vào dữ liệu: chưa duyệt nguồn nào
- [ ] Ảnh: **không duyệt ảnh nào**
- [ ] Thay đổi chòm sao (`CONSTELLATION_VERSIONS`)

---

_Báo cáo sinh tự động từ hồ sơ JSON bằng `format-audit.mjs`. Sửa nội dung thì sửa file JSON rồi chạy lại lệnh, đừng sửa trực tiếp vào file markdown._
