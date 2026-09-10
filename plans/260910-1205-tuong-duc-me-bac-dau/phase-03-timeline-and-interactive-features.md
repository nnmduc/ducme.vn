---
phase: 3
title: "Dòng Thời Gian (Timeline) & Danh Sách"
status: completed
priority: P1
dependencies: [2]
---

# Phase 03: Dòng Thời Gian (Timeline) & Danh Sách

## Overview
Xây dựng thanh trượt Timeline tương tác cho phép xem sự xuất hiện của các tượng đài theo năm thành lập (1798–2026), nút tự động chạy (Play/Pause), chế độ xem danh sách (Grid/List View) và Modal chi tiết khảo cứu lịch sử vs truyền thuyết.

## Requirements
- Floating Timeline Player:
  + Slider từ năm 1798 đến 2026
  + Nút Play/Pause tự động tăng năm, nút tua mốc sự kiện chính (1798, 1885, 1959, 1963, 1971, 2020)
  + Các marker tự động hiện/ẩn hoặc đổi độ mờ theo mốc năm đang chọn
- Dual View (Bản đồ / Danh sách):
  + Chế độ Danh sách thẻ bài có công cụ tìm kiếm, lọc theo Vùng miền, lọc theo thời kỳ VNCH 1959
- Modal chi tiết (Deep Reading Modal):
  + Thông tin hành chính, tọa độ vệ tinh GPS
  + Tư liệu lịch sử xác thực, ai tạc tượng, KTS nào quy hoạch, bối cảnh Dinh điền 1959
  + Khảo cứu giả thuyết Bắc Đẩu & ý nghĩa biểu tượng Sao Biển (Stella Maris)
  + Hình ảnh & artwork minh họa sắc nét

## Related Code Files
- Create: `src/js/timeline.js`
- Create: `src/js/list-view.js`
- Create: `src/js/modal.js`

## Success Criteria
- [ ] Timeline trượt mượt mà, Play/Pause hoạt động chính xác
- [ ] Danh sách lọc nhanh không độ trễ, click thẻ bài tự động mở modal và highlight trên bản đồ
- [ ] Modal hiển thị đầy đủ, trang nhã, hỗ trợ phím Esc để đóng
