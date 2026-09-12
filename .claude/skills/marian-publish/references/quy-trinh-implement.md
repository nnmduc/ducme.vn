# Chi tiết triển khai vào mã nguồn

## 1. Bản đồ file phải chạm

| File | Khi nào sửa |
|---|---|
| `src/data/statues.js` | Mọi thay đổi dữ liệu linh địa. Nguồn sự thật duy nhất |
| `src/assets/real_photos/<id>.jpg` | Khi audit duyệt ảnh chính |
| `src/assets/real_photos/<id>-2.jpg`, `<id>-3.jpg`, ... | Khi audit duyệt thêm ảnh phụ (`galleryImages`) |
| `docs/khao-cuu/<id>/*` | Luôn commit kèm cả hai hồ sơ JSON và báo cáo sinh ra từ chúng |
| `docs/marian-sites-missing-info.md` | Khi linh địa vừa được bổ sung ảnh/nguồn/nội dung |
| `README.md`, `docs/*.md`, `.github/pull_request_template.md` | Khi tổng số assertion của `npm test` đổi |

**Không cần sửa**: trang chi tiết, trang chủ, sitemap, JSON-LD, bản đồ — tất cả sinh động từ dữ liệu.

## 1b. Phiếu thi công là phạm vi công việc

`read-handoff.mjs` đã gộp `khao-cuu.json` + `kiem-chung.json` thành danh sách chính xác những trường,
nguồn và ảnh được duyệt. Khi sửa `src/data/statues.js`, đối chiếu từng mục với phiếu:

- Trường không có trong mục "Trường được phép sửa" → không đụng tới, kể cả khi khảo cứu có đề xuất.
- Nguồn không có trong mục "Nguồn đưa vào dữ liệu" → không thêm vào `sources`.
- Mục "KHÔNG được đưa lên" là danh sách đã bị audit loại — đừng đưa lại vào vì thấy hợp lý.

## 2. Quy ước định dạng của `src/data/statues.js`

File là module JS chứa một mảng JSON viết tay. Bám đúng phong cách đang có:

- Thụt lề 2 dấu cách cho thân bản ghi; khoá bọc trong ngoặc kép.
- **Khối `sources` thụt lề sâu hơn phần còn lại** (6 và 10 dấu cách) — đây là phong cách sẵn có của
  file, giữ nguyên thay vì "sửa cho đều".
- Giữ nguyên thứ tự trường như các bản ghi hiện có: `id`, `name`, `title`, `year`, `lat`, `lng`,
  `elevation`, `location`, `region`, `diocese`, `diemStatue5`, `constellationRole`, `historicalFact`,
  `oralTradition`, `architect`, `significance`, `realImage`, `realImageCaption`, `galleryImages`,
  `sources`.
- Không chạy formatter lên cả file. Diff phải nhỏ và đọc được.

Chèn bản ghi mới ở đâu: mảng hiện xếp đại thể theo mạch niên đại/vùng miền. Chèn vào vị trí hợp mạch
nhất; thứ tự hiển thị trên web do `getOrderedStatues()` trong `src/lib/statues.js` quyết định (vùng
miền rồi tới năm), nên vị trí trong file không ảnh hưởng giao diện — chỉ ảnh hưởng tính dễ đọc.

## 3. Đường dẫn ảnh

```
anh chinh:
  file thật:  src/assets/real_photos/<id>.jpg
  trong data: "realImage": "assets/real_photos/<id>.jpg"

anh phu (galleryImages, 0..nhieu):
  file thật:  src/assets/real_photos/<id>-2.jpg, <id>-3.jpg, ...
  trong data: "galleryImages": [{ "image": "assets/real_photos/<id>-2.jpg", "caption": "..." }, ...]
```

Đường dẫn tính từ `src/`, không có dấu `/` đầu. `src/lib/photos.js` chỉ so khớp theo **tên file**, nên
tên file phải đúng và duy nhất — kể cả với các số thứ tự `-2`, `-3` của ảnh phụ. Ảnh bắt buộc nằm
trong `src/assets/` để đường ống `astro:assets` nén và sinh AVIF/WebP — để trong `public/` thì ảnh bị
chép nguyên trạng, không tối ưu.

Kèm theo mỗi ảnh một caption ghi rõ chụp gì, ở đâu, nguồn và giấy phép: `realImageCaption` cho ảnh
chính, `galleryImages[].caption` cho từng ảnh phụ. Ví dụ mẫu trong dữ liệu hiện có:
`"Ảnh chụp thực tế linh đài Đức Mẹ La Vang tại Quảng Trị (Nguồn: Wikimedia Commons)"`. `galleryImages`
là trường bắt buộc phải có mặt trong mọi bản ghi (dùng `[]` khi chưa có ảnh phụ nào được duyệt).

## 4. Sửa chòm sao (hiếm, cần audit duyệt rõ)

Đưa một linh địa vào phiên bản chòm sao cần sửa đồng thời:

1. `constellationRole.<v>` trong bản ghi linh địa — từ `null` thành `{star, role, code}`.
2. `CONSTELLATION_VERSIONS.<v>.nodes` — thêm id.
3. `CONSTELLATION_VERSIONS.<v>.segments` — thêm các đoạn nối, mỗi đoạn nối hai id có thật.

Ràng buộc do test chốt cứng:

- `v1.nodes.length === 7` và `v2.nodes.length === 7`. Thêm node vào V1/V2 là **vỡ test** trừ khi bỏ
  bớt node khác — điều này thay đổi luận điểm khảo cứu cốt lõi của dự án, không được làm nếu báo cáo
  kiểm chứng không nói rõ.
- `v1.pointerStars` phải đúng `['tapao', 'thacmo']`.
- Mọi id trong `nodes` và `segments` phải tồn tại trong dữ liệu.

V3 bị test chốt ở đúng 5 tượng thời Đệ nhất Cộng hòa qua cờ `diemStatue5`. V4 là phiên bản mềm nhất,
thêm node vào đây ít rủi ro nhất.

## 5. Số lượng bài kiểm thử

Bộ test sinh assertion theo dữ liệu: thêm một linh địa hoặc thêm một nguồn là tổng số tăng. Con số
hiện tại được ghi cứng ở nhiều nơi trong tài liệu.

```bash
npm test | tail -3                 # lấy con số mới
grep -rn "353" README.md docs/*.md .github/pull_request_template.md   # tìm nơi ghi cứng
```

Cập nhật hết những chỗ đó trong cùng PR. Riêng `.github/pull_request_template.md` hiện ghi một con số
cũ hơn README — sửa luôn cho khớp nếu đang chạm vào file này.

## 6. Kiểm thử và dựng trang

```bash
npm test        # chạy được ngay, không cần node_modules
npm install     # cần trước khi build
npm run build
```

CI (`.github/workflows/deploy.yml`) chạy `npm test` và `npm run build` trên Node 20.x và 22.x cho mọi
PR đụng vào `src/**`, `tests/**`, `public/**`, `astro.config.mjs` hoặc `package*.json`.

Lưu ý: PR chỉ sửa `docs/**` **không** kích hoạt job test — nhưng đó là lý do để cẩn thận hơn, không
phải lý do để bỏ chạy test tại máy.

## 7. Lỗi hay gặp

| Lỗi | Nguyên nhân | Cách sửa |
|---|---|---|
| Test báo file ảnh không tồn tại | dữ liệu trỏ tới ảnh chưa `git add` | thêm file ảnh vào commit |
| Test báo sai định dạng tên file `galleryImages[].image` | thiếu số thứ tự hoặc không khớp `<id>-<số>.jpg` | đặt lại tên đúng `assets/real_photos/<id>-2.jpg`, `-3.jpg`, ... |
| Test báo URL root domain trần | nguồn chỉ có tên miền | thay bằng link bài viết cụ thể |
| Test báo sai số lượng tượng Diệm | đặt `diemStatue5: true` cho id mới | trả về `false` |
| Test báo node chòm sao không khớp | sửa `nodes` mà quên `constellationRole` hoặc ngược lại | sửa cả hai nơi |
| Build đỏ nhưng test xanh | ảnh hỏng, sai định dạng, hoặc `sharp` không xử lý được | kiểm lại bằng `check-image.mjs` |
| Số assertion trong PR template sai | quên cập nhật sau khi thêm dữ liệu | chạy `npm test`, cập nhật tài liệu |
