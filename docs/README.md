# Tài Liệu Kỹ Thuật & Khảo Cứu — Linh Đài Đức Mẹ Việt Nam

Thư mục này chứa toàn bộ các tài liệu nghiên cứu lịch sử, kiến trúc hệ thống, quy chuẩn thiết kế và hướng dẫn phát triển chuyên sâu của dự án [Linh Đài Đức Mẹ Việt Nam](../README.md).

Trang web chính thức: <https://ducme.vn>

## 1. Nguyên Tắc Nền Tảng

**Một linh địa, một URL.** Toàn bộ nội dung nằm trong HTML trả về từ máy chủ, đọc được cả khi tắt
JavaScript. Đây là điều kiện để tư liệu tìm thấy được, và là lý do trang được làm lại từ ngăn xếp
cũ (một trang tĩnh duy nhất, nội dung chỉ hiện sau khi bấm mở hộp thoại).

**Không dùng ảnh do máy tạo sinh.** Chỉ ảnh chụp thực địa đã xác minh nguồn, phần lớn từ Wikimedia
Commons. Linh địa chưa có ảnh thì để trống. Hiện 8 trong 18 có ảnh.

## 2. Tính Năng

- **22 trang tĩnh**: trang chủ, 18 trang linh địa, khảo cứu Bắc Đẩu, bản đồ, giới thiệu.
- **Bản đồ tương tác** tại `/ban-do/`: Leaflet, lớp phủ chòm sao bật tắt được, dòng thời gian
  1798 tới 2026 có chạy tự động, tìm kiếm và lọc đa tiêu chí, nhãn chủ quyền biển đảo.
- **Bốn phiên bản chòm sao**:
  - V1 kinh điển 1959 tới 1961: La Vang, Trà Kiệu, Phượng Hoàng, Giang Sơn, Trinh Phong, Thác Mơ,
    Tà Pao. Cặp Thác Mơ và Tà Pao kéo dài chỉ về sao Bắc Cực.
  - V2 biến thể hiện đại: thay Phượng Hoàng bằng Măng Đen.
  - V3 bộ 5 tượng thời Đệ nhất Cộng hòa.
  - V4 tuyến Thánh Mẫu toàn quốc.
- **Trang linh địa**: tư liệu lịch sử, quần thể kiến trúc, truyền tụng dân gian, giá trị tâm linh,
  tọa độ GPS, vai trò trong từng phiên bản chòm sao, danh mục nguồn dẫn.
- **SEO**: canonical, sitemap, JSON-LD (`TouristAttraction`, `BreadcrumbList`, `ItemList`), thẻ chia
  sẻ đầy đủ. Trang nội dung nạp **0 byte JavaScript**.

## 3. Chạy Dự Án

Cần Node.js từ 20.11 trở lên.

```bash
npm install
npm run dev       # máy chủ phát triển
npm run build     # dựng trang tĩnh
npm run preview   # xem thử bản đã dựng
npm test          # 347 điều kiện kiểm tính toàn vẹn dữ liệu
```

> Trang **không** mở được bằng cách nhấp đúp một file HTML nữa. Ngăn xếp cũ làm được vậy nhưng phải
> trả giá bằng việc chỉ có một URL, khiến nội dung vô hình với máy tìm kiếm. Xem
> `docs/tech-stack.md` mục 3.

## 4. Cấu Trúc

```
tuong-duc-me/
├── astro.config.mjs
├── netlify.toml              # cau hinh trien khai THAT (khong phai .netlify/)
├── public/                   # favicon, anh chia se mac dinh
├── src/
│   ├── config/site.js        # SITE_URL, thuong hieu, dieu huong
│   ├── data/statues.js       # NGUON DU LIEU DUY NHAT
│   ├── lib/                  # ham dan xuat: statues, photos, seo
│   ├── layouts/              # BaseLayout
│   ├── components/           # SeoHead, SiteHeader, StatueIndex, MarianMap...
│   ├── pages/                # index, linh-dai/[id], ban-do, chom-sao-bac-dau...
│   ├── styles/               # tokens.css (hai lop), global.css
│   └── assets/real_photos/   # 8 anh thuc dia da xac minh
├── docs/
├── plans/
└── tests/test_data_and_integrity.js
```

## 5. Tài Liệu

| File | Nội dung |
|---|---|
| `project-overview-pdr.md` | Mục đích, tiêu chuẩn nghiệm thu, hạn chế đã biết |
| `tech-stack.md` | Ngăn xếp công nghệ và lý do từng lựa chọn |
| `system-architecture.md` | Bản đồ đường dẫn, luồng dữ liệu, ranh giới JavaScript |
| `design-guidelines.md` | Token màu, kiểu chữ, nguyên tắc ảnh, số đo tương phản |
| `codebase-summary.md` | Cây mã nguồn và điều cần biết trước khi sửa |
| `deployment-guide.md` | Lệnh, Netlify, việc cần làm sau khi triển khai |
| `research-report.md` | Khảo cứu lịch sử gốc |

## 6. Hạn Chế Đã Biết

Văn xuôi trên các trang linh địa hiện **mỏng**: trung vị 162 từ, nhiều nhất 225 từ, 13 trong 18 trang
dưới 200 từ. Kiến trúc đã sẵn sàng để xếp hạng, nhưng dung lượng nội dung thì chưa. Đây là việc khảo
cứu bổ sung, không phải việc kỹ thuật. Chi tiết trong `project-overview-pdr.md` mục 3.

## 7. Nguồn Dữ Liệu

- Kỷ yếu Đại hội Thánh Mẫu Toàn quốc lần I, Sài Gòn 1959.
- Văn khố các Tổng Giáo phận Huế, Giáo phận Đà Nẵng, Kon Tum, Ban Mê Thuột, Nha Trang, Phan Thiết.
- Tài liệu Phủ Tổng ủy Dinh điền Việt Nam Cộng hòa, 1959 tới 1961.
- Tư liệu kiến trúc sư Ngô Viết Thụ.
- Báo Công giáo và Dân tộc. Wikipedia tiếng Việt.
