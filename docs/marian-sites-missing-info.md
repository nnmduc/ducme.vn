# Danh Sách Linh Địa Còn Thiếu Tư Liệu

Danh sách này liệt kê cụ thể, theo từng linh địa, những gì còn thiếu trong `src/data/statues.js`:
ảnh thực địa, nguồn tham khảo, và nội dung văn xuôi. Mục tiêu là để người đóng góp biết ngay cần làm
gì cho linh địa nào, thay vì phải tự dò trong mã nguồn.

Xem thêm bối cảnh tổng quát tại `project-overview-pdr.md` mục 3 (Hạn Chế Đã Biết: Dung Lượng Nội
Dung) và quy chuẩn đóng góp tại [`CONTRIBUTING.md`](../CONTRIBUTING.md) mục 3.

## Cách tính

- **Số từ**: tổng số từ (tách theo khoảng trắng) của 4 trường tạo nên văn xuôi hiển thị trên trang —
  `historicalFact`, `architect`, `oralTradition`, `significance` — đúng như `src/pages/linh-dai/[id].astro`
  render. Số liệu dưới đây đo trực tiếp từ dữ liệu hiện tại nên có thể lệch nhẹ so với con số đã ghi
  trong `project-overview-pdr.md` (đo ở thời điểm khác); coi cả hai là ước lượng tương đối, không phải
  số tuyệt đối.
- **Ảnh**: `realImage` khác `null` trong `src/data/statues.js`.
- **Nguồn "gián tiếp"**: URL dạng `google.com/search?q=...` — hợp lệ theo quy chuẩn (mục 3.2
  CONTRIBUTING.md) nhưng chỉ là kết quả tìm kiếm, không phải một bài viết/trang cụ thể. Nên thay bằng
  liên kết trực tiếp khi tìm được nguồn thật.

## 1. Chưa có ảnh thực địa (9/18 linh địa)

Ưu tiên cao nhất theo `CONTRIBUTING.md` mục 2.A. Cần ảnh chụp thật (chính diện tượng + toàn cảnh linh
đài), giấy phép CC-BY-SA/CC-BY/Public Domain hoặc do người chụp tự nguyện phát hành.

| id | Tên linh địa | Giáo phận | Ghi chú thực địa |
|---|---|---|---|
| `honchong` | Đức Mẹ Hòn Chông (Kiên Giang) | GP Long Xuyên | Thắng cảnh du lịch, khả năng có ảnh du khách chụp |
| `nuicom` | Đức Mẹ Núi Cơm (Hà Tĩnh) | GP Hà Tĩnh | |
| `phunhai` | Vương Cung Thánh Đường Phú Nhai | GP Bùi Chu | Công trình nổi tiếng, nhiều khả năng đã có ảnh trên Wikimedia Commons — ưu tiên kiểm tra trước khi đi khảo sát thực địa |
| `binhtrieu` | Đức Mẹ Fatima Bình Triệu | TGP Sài Gòn | Ở đô thị, dễ tiếp cận để chụp ảnh |
| `lama` | Đức Mẹ La Mã Bến Tre | GP Vĩnh Long | |
| `saobiendanang` | Đức Mẹ Sao Biển (Đà Nẵng) | GP Đà Nẵng | Bãi biển Mỹ Khê, dễ tiếp cận |
| `trinhphong` | Đức Mẹ Trinh Phong | GP Nha Trang | Đèo Ngoạn Mục, đã có hành hương trở lại từ 2007 |
| `phuonghoang` | Đức Mẹ Phượng Hoàng | GP Kon Tum | Vị trí hẻo lánh trên núi biên giới — khó khảo sát nhất trong danh sách |
| `nuicui` | Đức Mẹ Núi Cúi | GP Xuân Lộc | Tượng cao nhất Việt Nam (khánh thành 2020), gần chắc chắn đã có ảnh chất lượng cao công khai — ưu tiên tìm trước khi đi chụp |

## 2. Nguồn tham khảo yếu — chỉ có link tìm kiếm Google, chưa có bài viết trực tiếp

Đạt tối thiểu 2 nguồn theo quy định, nhưng **toàn bộ** nguồn đều là link tìm kiếm thay vì bài viết cụ
thể. Cần thay bằng nguồn trực tiếp (trang giáo phận, báo, kỷ yếu, Wikipedia...).

| id | Tên linh địa | Số nguồn (trực tiếp/tìm kiếm) |
|---|---|---|
| `nuicom` | Đức Mẹ Núi Cơm (Hà Tĩnh) | 0/2 |
| `binhtrieu` | Đức Mẹ Fatima Bình Triệu | 0/2 |
| `nuicui` | Đức Mẹ Núi Cúi | 0/3 |

Các linh địa sau chỉ có **một** nguồn trực tiếp, nguồn còn lại là link tìm kiếm — nên bổ sung thêm ít
nhất một nguồn trực tiếp nữa: `phunhai`, `lama`, `saobiendanang`, `trakieu`, `trinhphong`, `giangson`,
`ducbasaigon`, `phuonghoang`, `mangden`, `tapao`.

## 3. Nội dung mỏng nhất (dưới 150 từ) — cần khảo cứu bổ sung trước

Theo thứ tự tăng dần, ưu tiên bổ sung `historicalFact`, `architect`, `significance` như khuyến nghị
trong `project-overview-pdr.md` mục 3.

| Thứ tự | id | Tên linh địa | Số từ ước tính |
|---|---|---|---|
| 1 | `baidau` | Đức Mẹ Bãi Dâu | 105 |
| 2 | `nuicom` | Đức Mẹ Núi Cơm (Hà Tĩnh) | 117 |
| 3 | `phunhai` | Vương Cung Thánh Đường Phú Nhai | 120 |
| 4 | `binhtrieu` | Đức Mẹ Fatima Bình Triệu | 122 |
| 5 | `lama` | Đức Mẹ La Mã Bến Tre | 124 |
| 6 | `nuicui` | Đức Mẹ Núi Cúi | 135 |
| 7 | `saobiendanang` | Đức Mẹ Sao Biển (Đà Nẵng) | 140 |
| 8 | `trakieu` | Đức Mẹ Trà Kiệu | 143 |

Các linh địa còn lại (166–206 từ): `trinhphong`, `giangson`, `ducbasaigon`, `phuonghoang`, `thacmo`,
`lavang`, `mangden`, `tapao` — vẫn dưới mốc cạnh tranh ~300 từ nhưng độ ưu tiên thấp hơn.

## 4. Ưu tiên tổng hợp — thiếu cả ảnh, nguồn và nội dung

Các linh địa dưới đây thiếu đồng thời cả ba mặt (ảnh, nguồn trực tiếp, nội dung), nên là mục tiêu đóng
góp có tác động cao nhất:

1. **`nuicom`** — Đức Mẹ Núi Cơm: không ảnh, 0 nguồn trực tiếp, 117 từ.
2. **`binhtrieu`** — Đức Mẹ Fatima Bình Triệu: không ảnh, 0 nguồn trực tiếp, 122 từ.
3. **`lama`** — Đức Mẹ La Mã Bến Tre: không ảnh, 1 nguồn trực tiếp, 124 từ.
4. **`nuicui`** — Đức Mẹ Núi Cúi: không ảnh, 0 nguồn trực tiếp, 135 từ (tượng đài lớn, nổi tiếng — dễ
   tìm tư liệu bổ sung nhất trong nhóm này).
5. **`saobiendanang`** — Đức Mẹ Sao Biển: không ảnh, 1 nguồn trực tiếp, 140 từ.
6. **`phunhai`** — Vương Cung Thánh Đường Phú Nhai: không ảnh, 1 nguồn trực tiếp, 120 từ.

## 5. Đã tương đối đầy đủ (không cần ưu tiên)

Có ảnh thực địa và ≥2 nguồn, kể cả khi vẫn còn mỏng: `lavang`, `mangden`, `giangson`, `thacmo`,
`tapao`, `ducbasaigon`, `fatimavinhlong`. Vẫn hoan nghênh bổ sung nếu có tư liệu mới, nhưng không phải
việc cấp thiết.

---

*Danh sách này là ảnh chụp tại một thời điểm của `src/data/statues.js`. Khi đóng góp xong cho một
linh địa, hãy cập nhật lại bảng tương ứng trong file này ở cùng Pull Request.*
