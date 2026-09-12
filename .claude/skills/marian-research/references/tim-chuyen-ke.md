# Săn chuyện kể, giai thoại, sự tích

Phần tư liệu mà người đọc tìm đến nhiều nhất thường không phải niên đại khánh thành, mà là **chuyện**:
vì sao pho tượng ở đây, chuyện gì đã xảy ra, người địa phương gọi nơi này là gì và tại sao. Đây cũng
là phần dễ mất nhất — nó không nằm trong kỷ yếu, nó nằm trong lời kể.

Mục tiêu của bước này: thu cho hết những gì đang lưu hành, xếp vào `folklore[]`, gắn nhãn đúng độ xác
thực, rồi viết thành `oralTradition` hấp dẫn mà vẫn trung thực.

## 1. Lằn ranh duy nhất

Chuyện kể **không bao giờ** vào `historicalFact`. Đổi lại, một khi đã ở đúng ngăn `oralTradition` và
mở đầu bằng nhãn truyền tụng, nó gần như không còn rào cản nào nữa: không cần nguồn chính thống,
không cần giáo quyền xác nhận, không cần chứng minh là có thật.

Nhãn hợp lệ, dùng ngay đầu câu hoặc đầu ý:

> Tương truyền… · Theo lời kể của… · Người địa phương kể rằng… · Dân trong vùng vẫn truyền nhau… ·
> Một số bài viết chép lại rằng… · Có giai thoại cho rằng…

Không hợp lệ vì nghe như đã kiểm chứng: "Sự thật là…", "Lịch sử ghi nhận…", "Đã được chứng minh…",
hoặc kể trơn không nhãn.

**Lưu ý riêng về sự kiện hiện ra.** Bản thân việc hiện ra luôn thuộc `oralTradition`, kể cả khi giáo
quyền công nhận. Việc *giáo quyền công nhận* mới là sự kiện lịch sử và thuộc `historicalFact`.

## 2. Tìm ở đâu

Xếp theo mức độ cho ra chuyện hay, cao xuống thấp:

1. **Bình luận và review.** Google Maps review tại chính điểm, bình luận dưới video YouTube, dưới bài
   blog. Đây là nơi người địa phương kể chuyện thoải mái nhất.
2. **Video hành hương.** Phần lời dẫn và phỏng vấn ông từ giữ đền, cha sở, người bán hàng trước cổng.
   Ghi rõ phút nào trong video vào `leads[]` để người sau kiểm lại được.
3. **Blog hành hương cá nhân.** Người đi về viết lại, thường chép luôn chuyện nghe được tại chỗ.
4. **Trang du lịch.** Hay kể giai thoại bằng giọng khẳng định — lấy nội dung, bỏ giọng.
5. **Nhóm Facebook địa phương**, nhất là nhóm kiểu "ký ức <địa phương> xưa".
6. **Bài báo dịp lễ.** Báo tỉnh viết nhân đại hội hành hương hay chen một đoạn "tương truyền rằng".
7. **Trang giáo phận.** Ít khi kể giai thoại, nhưng khi có thì đó là bản đáng tin nhất để đối chiếu.

Bộ truy vấn ở `nguon-tu-lieu.md` mục 3b. Thêm vài hướng hay quên:

```
"<tên>" + tên quả đồi / hòn đá / con suối tại chỗ
"<tên>" "ngày xưa" OR "hồi đó" OR "trước giải phóng"
"<tên xã>" "<tên huyện>" chuyện lạ OR "kỳ bí"
tên linh địa bằng cách gọi dân gian (thường khác tên chính thức)
```

## 3. Mô-típ hay gặp — biết trước để nhận ra nhanh

Ghi `motif` cho mỗi chuyện. Nhận ra mô-típ giúp hai việc: tìm nhanh hơn (biết còn thiếu chuyện gì để
hỏi), và đánh giá đúng hơn (mô-típ càng phổ biến thì khả năng là khuôn kể chung càng cao, không nhất
thiết là sự kiện riêng của nơi này).

| Mô-típ | Dạng thường gặp |
|---|---|
| Tượng trôi dạt | Tượng dạt vào bờ sau bão, dân chài vớt lên, dựng nơi tượng dừng lại |
| Tượng chọn chỗ | Xe chở tượng chết máy đúng chỗ đó, khiêng đi không nổi |
| Đứng vững qua tai ương | Bão, lụt, bom đạn phá hết xung quanh, tượng còn nguyên |
| Ơn lạ cá nhân | Khỏi bệnh, thoát nạn, tai qua nạn khỏi sau khi khấn |
| Nguồn nước thiêng | Giếng, suối, mạch nước xuất hiện hoặc không bao giờ cạn |
| Ánh sáng, hương lạ | Người đi đường thấy sáng trên đồi, ngửi thấy hương |
| Cây cối, chim chóc | Cây không ai trồng, đàn chim về đậu đúng ngày lễ |
| Tên gọi dân gian | Vì sao dân gọi nơi này bằng cái tên khác với tên chính thức |
| Người cung tiến | Ai bỏ tiền dựng tượng, và vì lý do gì |
| Mốc thời chiến | Chuyện quanh giai đoạn 1945–1975, di tản, gìn giữ tượng |

Mô-típ trùng với nơi khác **không** phải lý do bỏ chuyện. Cứ ghi, và nêu trong `note` rằng đây là
mô-típ phổ biến.

## 4. Xếp độ xác thực (`veracity`)

| Giá trị | Khi nào dùng | Được đăng? |
|---|---|---|
| `chuakiemchung` | Chuyện đang lưu hành, không nguồn A/B nào xác nhận cũng không bác bỏ | **Có**, kèm nhãn truyền tụng |
| `codoichieu` | Có nguồn A/B xác nhận **phần nền** của chuyện (trận bão đó có thật, người đó có thật) | **Có**, phần nền viết được vào `historicalFact`, phần còn lại giữ nhãn |
| `dabacbo` | Có nguồn A/B mâu thuẫn trực tiếp | **Không**. Giữ trong hồ sơ làm ghi chú |

`chuakiemchung` là kết quả bình thường và phổ biến nhất, không phải thất bại. Đừng cố ép một chuyện
lên `codoichieu` khi nguồn không cho phép, cũng đừng đánh `dabacbo` chỉ vì nghe khó tin — `dabacbo`
đòi hỏi một nguồn cụ thể nói ngược lại, ghi rõ nguồn nào trong `note`.

## 5. Viết `oralTradition`

Chỗ này là nơi hồ sơ biến thành thứ người ta đọc. Vài điều nên làm:

- **Kể, đừng liệt kê.** "Tương truyền sau trận bão năm ấy, dân chài thấy một pho tượng trắng dạt vào
  bãi cát" đọc khác hẳn "Có truyền thuyết về việc tượng trôi dạt".
- **Giữ chi tiết cụ thể.** Tên quả đồi, giờ trong ngày, con số, tên nghề nghiệp người kể. Chi tiết cụ
  thể là thứ làm chuyện sống; bỏ hết chi tiết thì còn lại một cái tóm tắt không ai nhớ.
- **Nhiều chuyện thì nối theo thời gian hoặc theo mạch**, mỗi chuyện giữ nhãn riêng của nó. Đừng gộp
  hai chuyện thành một để cho gọn.
- **Ghi nơi chuyện lưu hành** khi nó làm chuyện thú vị hơn: "lời kể của người trông coi linh đài",
  "các cụ trong xứ vẫn truyền nhau".
- **Độ dài**: thoải mái hơn `historicalFact`. Đây là phần được phép dài và có giọng.

Vài điều không nên:

- Đừng thêm thắt tình tiết cho ly kỳ hơn. Ly kỳ phải đến từ chuyện người ta thật sự kể, không phải từ
  cây bút. Thêm một chi tiết không ai kể là bịa, dù nó hay tới đâu.
- Đừng viết như thể mình tin hay mình không tin. Mô tả niềm tin như niềm tin.
- Đừng dùng chuyện kể để suy ra niên đại rồi mang sang `historicalFact`.

## 6. Ghi vào hồ sơ

```json
{
  "title": "Sự tích pho tượng trôi dạt vào bờ",
  "story": "Tương truyền vào khoảng thập niên 1950, sau một trận bão lớn, dân chài trong vùng thấy một pho tượng trắng dạt vào bãi cát...",
  "motif": "Tượng trôi dạt — mô-típ phổ biến ở các linh địa ven biển",
  "spread": "Truyền miệng tại chỗ, được blog hành hương và một bài báo mạng chép lại",
  "veracity": "chuakiemchung",
  "sources": ["S3", "S4"],
  "note": "Không nguồn cấp A/B nào xác nhận. Viết vào oralTradition kèm 'tương truyền'."
}
```

Không thu được chuyện nào thì `folklore: []` và ghi `folkloreSearchNote` cho biết đã tìm qua những
đâu — để lượt sau khỏi đi lại đúng con đường cũ.
