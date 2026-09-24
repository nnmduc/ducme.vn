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

## 1. Chưa có ảnh thực địa (3/17 linh địa)

Ưu tiên cao nhất theo `CONTRIBUTING.md` mục 2.A. Cần ảnh chụp thật (chính diện tượng + toàn cảnh linh
đài), giấy phép CC-BY-SA/CC-BY/Public Domain hoặc do người chụp tự nguyện phát hành.

| id | Tên linh địa | Giáo phận | Ghi chú thực địa |
|---|---|---|---|
| `saobiendanang` | Đức Mẹ Sao Biển (Đà Nẵng) | GP Đà Nẵng | Bãi biển Mỹ Khê, dễ tiếp cận |
| `trinhphong` | Đức Mẹ Trinh Phong | GP Nha Trang | Đèo Ngoạn Mục, đã có hành hương trở lại từ 2007 |
| `phuonghoang` | Đức Mẹ Phượng Hoàng | GP Kon Tum | Vị trí hẻo lánh trên núi biên giới — khó khảo sát nhất trong danh sách |

## 2. Nguồn tham khảo yếu — chỉ có link tìm kiếm Google, chưa có bài viết trực tiếp

Đạt tối thiểu 2 nguồn theo quy định, nhưng **toàn bộ** nguồn đều là link tìm kiếm thay vì bài viết cụ
thể. Cần thay bằng nguồn trực tiếp (trang giáo phận, báo, kỷ yếu, Wikipedia...).

Hiện không có linh địa nào thuộc diện này (0/2 nguồn trực tiếp).

Các linh địa sau chỉ có **một** nguồn trực tiếp, nguồn còn lại là link tìm kiếm — nên bổ sung thêm ít
nhất một nguồn trực tiếp nữa: `saobiendanang`, `trakieu`, `trinhphong`, `giangson`,
`ducbasaigon`, `phuonghoang`, `tapao`.

## 3. Nội dung mỏng nhất (dưới 150 từ) — cần khảo cứu bổ sung trước

Theo thứ tự tăng dần, ưu tiên bổ sung `historicalFact`, `architect`, `significance` như khuyến nghị
trong `project-overview-pdr.md` mục 3.

| Thứ tự | id | Tên linh địa | Số từ ước tính |
|---|---|---|---|
| 1 | `baidau` | Đức Mẹ Bãi Dâu | 105 |
| 2 | `saobiendanang` | Đức Mẹ Sao Biển (Đà Nẵng) | 140 |
| 3 | `trakieu` | Đức Mẹ Trà Kiệu | 143 |

Các linh địa còn lại (166–206 từ): `trinhphong`, `giangson`, `ducbasaigon`, `phuonghoang`, `thacmo`,
`lavang`, `tapao` — vẫn dưới mốc cạnh tranh ~300 từ nhưng độ ưu tiên thấp hơn.

## 4. Ưu tiên tổng hợp — thiếu cả ảnh, nguồn và nội dung

Các linh địa dưới đây thiếu đồng thời cả ba mặt (ảnh, nguồn trực tiếp, nội dung), nên là mục tiêu đóng
góp có tác động cao nhất:

1. **`saobiendanang`** — Đức Mẹ Sao Biển: không ảnh, 1 nguồn trực tiếp, 140 từ.

## 5. Đã tương đối đầy đủ (không cần ưu tiên)

Có ảnh thực địa và ≥2 nguồn, kể cả khi vẫn còn mỏng: `lavang`, `mangden`, `giangson`, `thacmo`,
`tapao`, `ducbasaigon`, `fatimavinhlong`, `binhtrieu`, `lama`, `nuicui`, `phunhai` (ảnh chính + 2 ảnh phụ Wikimedia Commons, 4 nguồn trực tiếp, khoảng 750 từ), `honchong` (ảnh chính chụp tượng năm 2012 + 3 ảnh phụ Flickr, 6 nguồn trực tiếp có cấp nguồn, khoảng 1.280 từ; ảnh chính chỉ 800x600, dùng theo ngoại lệ 800px tạm thời của chủ dự án — nên thay bằng ảnh tượng ≥1000px khi tìm được). Vẫn hoan nghênh bổ sung nếu có tư liệu mới, nhưng không phải
việc cấp thiết.

---

*Danh sách này là ảnh chụp tại một thời điểm của `src/data/statues.js`. Khi đóng góp xong cho một
linh địa, hãy cập nhật lại bảng tương ứng trong file này ở cùng Pull Request.*
