# Lược đồ bản ghi linh địa

Một bản ghi trong `src/data/statues.js`. Các ràng buộc dưới đây được `tests/test_data_and_integrity.js`
kiểm tự động; vi phạm là CI đỏ.

| Trường | Kiểu | Ràng buộc | Ghi chú khảo cứu |
|---|---|---|---|
| `id` | string | `^[a-z0-9]+$`, duy nhất | Không dấu, không gạch nối. Ví dụ `lavang`, `nuicui` |
| `name` | string | không rỗng | Tên gọi phổ thông: "Đức Mẹ ..." |
| `title` | string | không rỗng | Tên đầy đủ/danh hiệu chính thức |
| `year` | number | 1700–2026 | **Năm khởi lập linh địa**, không phải năm khánh thành công trình hiện tại |
| `lat` | number | 8.5–23.5 | Toạ độ chính linh đài, 4 chữ số thập phân |
| `lng` | number | 102.0–110.0 | như trên |
| `elevation` | string | — | Ví dụ `"780m (Đỉnh núi Phượng Hoàng)"` |
| `location` | string | — | Địa chỉ hành chính hiện hành, chi tiết tới xã/huyện/tỉnh |
| `region` | string | phải khớp `REGION_ORDER` | Đúng một trong 6 vùng, xem `src/config/site.js` |
| `diocese` | string | — | "Giáo phận ..." hoặc "Tổng Giáo phận ..." |
| `diemStatue5` | boolean | chỉ `true` với 5 id đã chốt | `phuonghoang`, `giangson`, `trinhphong`, `thacmo`, `tapao`. Đặt `true` cho id khác sẽ làm vỡ test |
| `constellationRole` | object | đủ 4 khoá `v1`–`v4` | Mỗi khoá là `null` hoặc `{star, role, code}` |
| `historicalFact` | string | — | **Chỉ sự kiện có nguồn kiểm chứng.** Không "tương truyền", không "có lẽ" |
| `oralTradition` | string | — | Truyền tụng dân gian, giai thoại, ý nghĩa biểu tượng |
| `architect` | string | — | Kiến trúc, vật liệu, kích thước, người tạc/thiết kế |
| `significance` | string | — | Giá trị tâm linh, văn hoá, vai trò với cộng đồng |
| `realImage` | string \| null | file phải tồn tại trong `src/` | `"assets/real_photos/<id>.jpg"` hoặc `null` |
| `realImageCaption` | string | bắt buộc khi có ảnh | Ghi rõ nội dung ảnh + nguồn + giấy phép |
| `sources` | array | ≥ 2 phần tử | Mỗi phần tử `{title, url}` |
| `sources[].title` | string | dài hơn 5 ký tự | Mô tả được nguồn, không chỉ ghi "Wikipedia" |
| `sources[].url` | string | `https://`, không phải root domain trần | Trỏ thẳng bài viết |

## Sáu vùng miền (khớp tuyệt đối)

```
Đồng bằng sông Hồng
Bắc Trung Bộ
Duyên hải Nam Trung Bộ
Tây Nguyên
Đông Nam Bộ
Đồng bằng sông Cửu Long
```

## Bốn phiên bản chòm sao

| Phiên bản | Nội dung | Ràng buộc |
|---|---|---|
| `v1` | 7 tượng Bắc Đẩu kinh điển 1959–1961 | test chốt **đúng 7 node**, `pointerStars` = `tapao` + `thacmo` |
| `v2` | Biến thể hiện đại, thay Phượng Hoàng bằng Măng Đen | test chốt **đúng 7 node** |
| `v3` | Bộ 5 tượng thời Đệ nhất Cộng hòa | — |
| `v4` | Tuyến Thánh Mẫu toàn quốc | — |

Một linh địa mới **mặc định không tham gia chòm sao nào** (`v1`–`v4` đều `null`) trừ khi có lập luận
lịch sử riêng. Muốn đưa vào `v4` thì phải sửa cả `CONSTELLATION_VERSIONS.v4.nodes` và `segments` — chỉ
làm khi báo cáo kiểm chứng duyệt rõ ràng.

## Mẫu bản ghi đề xuất (khoá `record` trong `khao-cuu.json`)

```json
{
  "id": "vidu",
  "name": "Đức Mẹ Ví Dụ",
  "title": "Trung Tâm Hành Hương Đức Mẹ Ví Dụ",
  "year": 1960,
  "lat": 10.1234,
  "lng": 106.5678,
  "elevation": "120m (Đồi ...)",
  "location": "Xã ..., huyện ..., tỉnh ...",
  "region": "Đông Nam Bộ",
  "diocese": "Giáo phận ...",
  "diemStatue5": false,
  "constellationRole": { "v1": null, "v2": null, "v3": null, "v4": null },
  "historicalFact": "...",
  "oralTradition": "...",
  "architect": "...",
  "significance": "...",
  "realImage": null,
  "realImageCaption": null,
  "sources": [
    { "title": "...", "url": "https://..." },
    { "title": "...", "url": "https://..." }
  ]
}
```
