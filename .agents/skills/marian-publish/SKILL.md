---
name: marian-publish
description: Triển khai kết quả khảo cứu đã được kiểm chứng vào website ducme.vn — sửa src/data/statues.js, thêm ảnh thực địa, cập nhật tài liệu, chạy npm test và npm run build, commit rồi tạo Pull Request. Use when applying an approved research/audit result to the site, adding or updating a Marian shrine record, adding a verified field photo, or opening the PR that ships that content. Dùng khi người dùng nói "triển khai lên website", "áp dụng báo cáo", "thêm linh địa vào dữ liệu", "tạo PR nội dung mới".
---

# Triển khai nội dung lên website

Giai đoạn 3 trong quy trình ba bước: **khảo cứu → kiểm chứng → triển khai**.

Vai trò ở đây là **thi công đúng bản vẽ đã duyệt**. Không thêm nội dung ngoài báo cáo, không "tiện tay
sửa cho hay hơn", không tự quyết những gì audit chưa duyệt.

## Bước 0 — Phiếu thi công (bắt buộc, làm trước mọi thứ)

```bash
node .agents/skills/marian-publish/scripts/read-handoff.mjs <id> --html
```

Lệnh đọc `docs/khao-cuu/<id>/khao-cuu.json` + `kiem-chung.json`, kiểm cả hai đúng lược đồ, đối chiếu
chéo, rồi sinh **phiếu thi công**: đúng những trường được duyệt, nguồn được duyệt, ảnh được duyệt,
điều kiện bắt buộc, và danh sách những gì **không** được đưa lên.

Mã thoát của lệnh là cổng chặn:

| Kết quả | Nghĩa là |
|---|---|
| Thoát 0 | Được phép triển khai, theo đúng phạm vi trong phiếu |
| Thoát 1 — thiếu hồ sơ | Chưa có khảo cứu hoặc chưa có kiểm chứng → **dừng**, báo người dùng |
| Thoát 1 — hồ sơ sai lược đồ | Trả lại cho skill tương ứng sửa → **dừng** |
| Thoát 1 — kết luận TRẢ LẠI / TỪ CHỐI | **Dừng**, báo người dùng |

Không tự khảo cứu bù, không tự audit rồi tự duyệt chính mình. Ngoại lệ duy nhất là người dùng nói rõ
họ chấp nhận bỏ qua quy trình — khi đó nói rõ rủi ro trong một câu rồi làm theo yêu cầu của họ.

Thêm `--json` nếu cần phiếu thi công dạng dữ liệu; `--html` ghi kèm bản HTML đọc được cho người review.

Từ đây trở đi, **phiếu thi công là phạm vi công việc**. Trường không có trong phiếu thì không đụng tới.

## Quy trình

### Bước 1 — Nhánh làm việc

Theo `CONTRIBUTING.md` mục 6: `data/<mo-ta>` cho thay đổi dữ liệu linh địa, `docs/<mo-ta>` cho tài liệu.

```bash
git checkout -b data/bo-sung-tu-lieu-<id>
```

Nếu phiên làm việc đã được chỉ định một nhánh riêng (ví dụ nhánh `agy/...` hoặc `claude/...`), dùng đúng nhánh đó
thay vì tạo nhánh mới.

### Bước 2 — Sửa `src/data/statues.js`

Đây là nguồn sự thật duy nhất của toàn trang. Đọc `references/quy-trinh-implement.md` trước khi sửa —
trong đó có quy ước định dạng của file (khối `sources` thụt lề khác phần còn lại), vị trí chèn bản ghi
mới, và danh sách trường bắt buộc.

Quy tắc khi sửa:

- Bám đúng định dạng đang có của file. Không chạy formatter toàn file, không đổi thứ tự trường.
- Với bản ghi mới: chèn giữ đúng mạch vùng miền/niên đại của file hiện tại.
- Với bản cập nhật: chỉ chạm những trường mà báo cáo nêu. Đừng viết lại câu văn đang đúng.
- `realImage: null` nếu audit không duyệt ảnh. Đây là giá trị hợp lệ, không phải chỗ trống cần lấp.
- Không đụng `CONSTELLATION_VERSIONS` trừ khi báo cáo kiểm chứng duyệt rõ ràng. V1/V2 bị test chốt
  cứng ở đúng 7 node và `pointerStars` phải là `tapao` + `thacmo`.

### Bước 3 — Ảnh (nếu audit duyệt ảnh)

Phiếu thi công tách rõ **4a. Ảnh chính** và **4b. Ảnh phụ** — thi công đúng từng mục, không gộp chung.

```bash
# anh chinh: dat ten theo id, dua vao src/assets/ de astro:assets toi uu (KHONG de trong public/)
cp <ảnh chính đã duyệt> src/assets/real_photos/<id>.jpg

# anh phu (neu co, danh so tu 2 tro di theo dung thu tu trong phieu thi cong)
cp <ảnh phụ 1 đã duyệt> src/assets/real_photos/<id>-2.jpg
cp <ảnh phụ 2 đã duyệt> src/assets/real_photos/<id>-3.jpg

node .agents/skills/marian-audit/scripts/check-image.mjs src/assets/real_photos/<id>*.jpg
```

Trong dữ liệu:

```json
"realImage": "assets/real_photos/<id>.jpg",
"realImageCaption": "... nơi chụp, nguồn (giấy phép nếu biết) ...",
"galleryImages": [
  { "image": "assets/real_photos/<id>-2.jpg", "caption": "... nơi chụp, nguồn (giấy phép nếu biết) ..." }
]
```

Đường dẫn tương đối tính từ `src/`, không có dấu `/` đầu. Không có ảnh chính thì `realImage: null` +
`realImageCaption: null`. Không có ảnh phụ nào được duyệt thì `galleryImages: []` — mảng này luôn phải
có mặt, không được bỏ trống trường.

### Bước 4 — Cập nhật tài liệu liên quan

Thay đổi dữ liệu thường kéo theo vài chỗ khác trong repo. Bỏ sót là lỗi review hay gặp nhất:

- `docs/marian-sites-missing-info.md` — cập nhật lại đúng bảng của linh địa vừa bổ sung (yêu cầu này
  ghi ngay trong phần cuối của chính file đó).
- **Số lượng bài kiểm thử**: thêm bản ghi hoặc thêm nguồn sẽ làm tổng số assertion tăng. Con số hiện
  tại xuất hiện ở nhiều nơi — chạy `npm test` lấy số mới rồi cập nhật:
  ```bash
  grep -rn "353" README.md docs/*.md .github/pull_request_template.md
  ```
- README/docs nào ghi cứng số lượng linh địa (phần lớn đã tính động từ dữ liệu, nhưng kiểm lại).

### Bước 5 — Kiểm thử

```bash
npm test        # bắt buộc PASS toàn bộ, 0 FAIL
npm run build   # bắt buộc dựng thành công (cần npm install trước nếu chưa có node_modules)
```

`npm test` chạy được mà không cần cài phụ thuộc. `npm run build` thì cần.

Test đỏ thì sửa dữ liệu cho đúng chuẩn — **không bao giờ sửa `tests/test_data_and_integrity.js` để
test xanh**, trừ khi chính báo cáo kiểm chứng yêu cầu đổi ràng buộc và giải thích được lý do.

### Bước 6 — Commit

Conventional Commits, tiếng Việt không dấu, theo `CONTRIBUTING.md` mục 6:

```
data(<id>): bo sung tu lieu lich su va nguon dan truc tiep

Trien khai theo docs/khao-cuu/<id>/bao-cao-khao-cuu.md,
ket luan kiem chung: AP DUNG (docs/khao-cuu/<id>/bao-cao-kiem-chung.md).
```

Commit cả hai hồ sơ JSON và các báo cáo sinh ra từ chúng (`docs/khao-cuu/<id>/`) — hồ sơ nguồn gốc
của thay đổi là một phần giá trị của dự án, không phải file nháp.

### Bước 7 — Push và Pull Request

```bash
git push -u origin <branch>
```

PR dùng `.github/pull_request_template.md`. Xem `references/mau-pull-request.md` để biết cách điền
từng mục và cách dẫn chiếu hai báo cáo. Chỉ tạo PR khi người dùng yêu cầu.

Trong phần checklist của PR, chỉ tick những ô đã thật sự làm. Chưa chạy `npm run build` thì không tick.

### Bước 8 — Theo PR tới khi xanh

Nếu CI đỏ, đọc log, sửa, đẩy lại. Lỗi hay gặp: số lượng assertion trong PR template không khớp, ảnh
chưa commit nhưng dữ liệu đã trỏ tới, URL nguồn là root domain trần.

## Không được làm

- Đưa lên website nội dung không có trong báo cáo đã duyệt.
- Thêm ảnh mà audit chưa duyệt, hoặc ảnh bất kỳ do máy tạo sinh.
- Sửa bộ test để vượt qua ràng buộc dữ liệu.
- Thêm JavaScript phía client vào các trang nội dung (nguyên tắc 0-byte JS).
- Hardcode mã màu thay vì dùng token trong `src/styles/tokens.css`.
- Tự merge PR.
