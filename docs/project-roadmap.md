# Lộ Trình Phát Triển Dự Án (Project Roadmap)

## Giai Đoạn 1: Cốt Lõi & Kiến Trúc Tĩnh SSG (v1.0 - Đã Hoàn Thành)
- [x] Khảo cứu lịch sử thời Đệ nhất Cộng hòa 1959–1961, KTS Ngô Viết Thụ, LM Antôn Nguyễn Văn Kiệm và thợ điêu khắc Hải Phát Diệm.
- [x] Chuyển đổi toàn diện sang Astro SSG: 22 trang tĩnh, 0-byte JavaScript cho các trang tư liệu, thân thiện với công cụ tìm kiếm.
- [x] Cam kết tư liệu thực địa: 100% ảnh chụp thực tế có bản quyền tự do / CC-BY-SA, loại bỏ hoàn toàn ảnh AI.
- [x] Xây dựng bộ dữ liệu Single Source of Truth cho 18 linh đài và 4 phiên bản chòm sao Bắc Đẩu (`src/data/statues.js`).
- [x] Bản đồ đêm sao tương tác Leaflet với đường nối chòm sao Bắc Đẩu và tia chỉ hướng Sao Bắc Cực (Polaris).
- [x] Thanh trượt timeline 1798–2026 với chế độ Play/Pause tự động.
- [x] Bộ lọc danh mục đa tiêu chí và định hướng địa danh chủ quyền biển đảo (Hoàng Sa, Trường Sa).

## Giai Đoạn 2: Đóng Góp Cộng Đồng & Serverless Backend (v1.1 - Đã Hoàn Thành)
- [x] Trang Liên hệ & Đóng góp tư liệu (`/lien-he/`): Tiếp nhận ý kiến đính chính, tư liệu xưa và ảnh thực địa.
- [x] Hạ tầng Serverless Edge: Cloudflare Worker API tiếp nhận submissions với kiểm soát giới hạn kích thước và CORS whitelist.
- [x] Lưu trữ dữ liệu quan hệ: Cloudflare D1 (SQLite serverless) lưu trữ biên nhận và thông tin người đóng góp.
- [x] Lưu trữ tệp tin an toàn: Cloudflare R2 lưu trữ tệp đính kèm với cơ chế ký số token HMAC SHA-256 có thời hạn (14 ngày).
- [x] Bảo vệ chống bot: Tích hợp Cloudflare Turnstile không xâm lấn.
- [x] Thông báo quản trị: Gửi email tự động qua Cloudflare Email Routing.
- [x] Bộ 425 bài kiểm thử tự động đảm bảo tính toàn vẹn dữ liệu và cấu hình hệ thống.

## Giai Đoạn 3: Nâng Cấp Nội Dung & Trải Nghiệm Mở Rộng (v1.2 - Kế Tiếp)
- [ ] Bổ sung dung lượng văn xuôi lịch sử (khảo cứu sâu để nâng số từ trung vị từ 162 từ lên >300 từ cho 18 trang linh địa).
- [ ] Chức năng dẫn đường hành hương (Pilgrim Route Planner): Tính toán cung đường ô tô/xe máy nối liền 7 tượng Bắc Đẩu hoặc 5 tượng thời Đệ nhất Cộng hòa.
- [ ] Xuất file GPX/KML cho các thiết bị GPS cầm tay khi đi hành hương và thực địa.
- [ ] Hỗ trợ đa ngôn ngữ (Tiếng Anh, Tiếng Pháp, Tiếng Latinh) cho khách hành hương và nhà nghiên cứu quốc tế.
- [ ] Tích hợp chế độ xem 3D địa hình (Terrain 3D View) nhằm trực quan hóa độ cao các đỉnh núi thiêng (Tà Pao, Bà Rá, Giang Sơn).
