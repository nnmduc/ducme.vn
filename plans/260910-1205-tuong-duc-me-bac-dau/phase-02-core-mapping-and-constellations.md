---
phase: 2
title: "Bản Đồ Tương Tác & Lớp Phủ Chòm Sao"
status: completed
priority: P1
dependencies: [1]
---

# Phase 02: Bản Đồ Tương Tác & Lớp Phủ Chòm Sao

## Overview
Xây dựng nền tảng bản đồ tương tác sử dụng Leaflet.js với giao diện đêm sao thanh nhã, hiển thị các marker tượng đài tùy biến phát sáng, và tích hợp lớp phủ SVG Polyline vẽ đường nối chòm sao Bắc Đẩu theo từng phiên bản.

## Requirements
- Tích hợp Leaflet.js với tile CartoDB Dark Matter / Voyager hoặc bản đồ địa hình phù hợp.
- Hệ thống marker tùy biến: huy hiệu thánh mẫu / ngôi sao vàng, có tooltip nổi và click event.
- Bộ chuyển đổi phiên bản (Version 1, 2, 3, 4) và công tắc Bật/Tắt chòm sao Bắc Đẩu.
- Hiệu ứng nét vẽ chòm sao (pulsing golden glow line) kèm đối sánh hình học với chòm Đại Hùng (Ursa Major).

## Related Code Files
- Create: `src/js/map.js`
- Create: `src/js/constellation.js`

## Success Criteria
- [ ] Bản đồ zoom, pan mượt mà, bao quát trọn vẹn lãnh thổ Việt Nam (kể cả Hoàng Sa, Trường Sa)
- [ ] Đường nối chòm sao Bắc Đẩu vẽ chính xác qua các điểm và có hiệu ứng phát sáng
- [ ] Chuyển đổi giữa 4 phiên bản tức thì mà không lag
