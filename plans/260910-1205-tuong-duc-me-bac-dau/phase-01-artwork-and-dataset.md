---
phase: 1
title: "Artwork & Bộ Dữ Liệu Lịch Sử"
status: completed
priority: P1
dependencies: []
---

# Phase 01: Artwork & Bộ Dữ Liệu Lịch Sử

## Overview
Sử dụng `generate_image` tạo các tác phẩm tranh nghệ thuật biểu tượng (Đức Mẹ Sao Biển, Đại hội 1959, La Vang, Núi rừng Tây Nguyên) và xây dựng bộ dữ liệu đầy đủ, chính xác về tọa độ, lịch sử, bối cảnh thời TT Ngô Đình Diệm và các cấu hình chòm sao Bắc Đẩu.

## Requirements
- Tạo 2-3 tác phẩm nghệ thuật chất lượng cao (artwork) bằng AI làm ảnh nền, avatar, và minh họa lịch sử.
- Xây dựng dataset JavaScript chi tiết (`data/statues.js`) với hơn 18 tượng đài và 4 phiên bản nối sao:
  + V1: 7 tượng Bắc Đẩu kinh điển (La Vang, Trà Kiệu, Phượng Hoàng, Giang Sơn, Trinh Phong, Thác Mơ, Tà Pao)
  + V2: 7 tượng biến thể hiện đại (thay Phượng Hoàng bằng Măng Đen)
  + V3: 5 tượng Phủ Tổng ủy Dinh điền thời TT Ngô Đình Diệm 1959 (Ngũ giác đài)
  + V4: Toàn bộ các Trung tâm Thánh Mẫu Việt Nam từ Bắc chí Nam

## Related Code Files
- Create: `assets/images/*`
- Create: `src/data/statues.js`

## Success Criteria
- [ ] Ảnh artwork được tạo thành công và lưu vào thư mục assets
- [ ] Dữ liệu 18+ tượng có đủ tọa độ WGS84 chính xác, năm, tước hiệu, sự tích, hình ảnh
