<!-- SINH TU DONG tu .claude/skills — dung sua tay file nay, sua ban goc roi chay: npm run sync:agents -->

# Cách điền Pull Request

PR bám theo `.github/pull_request_template.md`. Giữ nguyên các tiêu đề mục của mẫu, điền nội dung thật.

## Tiêu đề PR

Theo Conventional Commits, tiếng Việt không dấu:

```
data(nuicui): bo sung tu lieu lich su, kien truc va 3 nguon truc tiep
data(honchong): them anh thuc dia va thay nguon tim kiem bang bai viet
feat(data): them linh dia Duc Me <ten> vao bo du lieu
```

## Thân PR

```markdown
## Mô tả thay đổi (Summary)

Triển khai kết quả khảo cứu linh địa **<tên>** (`<id>`) sau khi kiểm chứng độc lập.

- Hồ sơ khảo cứu: `docs/khao-cuu/<id>/khao-cuu.json` ([báo cáo](../docs/khao-cuu/<id>/bao-cao-khao-cuu.md))
- Hồ sơ kiểm chứng: `docs/khao-cuu/<id>/kiem-chung.json` ([báo cáo](../docs/khao-cuu/<id>/bao-cao-kiem-chung.md)) — kết luận **<ÁP DỤNG / ÁP DỤNG CÓ ĐIỀU KIỆN>** (nn/40)

Thay đổi cụ thể:

- `historicalFact`: nn → nn từ, bổ sung <nội dung>, nguồn [S1][S2]
- `architect`: bổ sung <nội dung>, nguồn [S3]
- `sources`: thay 2 link tìm kiếm bằng 2 bài viết trực tiếp
- Ảnh chính: <thêm `src/assets/real_photos/<id>.jpg`, nguồn ..., tác giả ... (giấy phép nếu biết)> HOẶC <giữ `realImage: null` theo điều kiện của báo cáo kiểm chứng>
- Ảnh phụ (`galleryImages`): <thêm `src/assets/real_photos/<id>-2.jpg`, ... — n ảnh, nguồn> HOẶC <giữ `galleryImages: []`>
- Cập nhật `docs/marian-sites-missing-info.md` và số lượng bài kiểm thử (353 → nnn)

Điều kiện do báo cáo kiểm chứng đặt ra và cách đã thực hiện:

| Điều kiện | Đã làm |
|---|---|
| Bỏ câu "..." vì nguồn [S3] không chứa | Đã bỏ |
| Giữ `realImage: null` | Đã giữ |

## Loại thay đổi (Type of Change)

- [x] `data`: Thêm mới, cập nhật hoặc hiệu đính dữ liệu linh đài / tư liệu lịch sử

## Các Issue liên quan (Related Issues)

Closes #nn   <!-- bỏ mục này nếu không có issue -->

## Danh sách kiểm tra (Checklist)

<!-- Chỉ tick ô đã thật sự làm. -->

- [x] Mã nguồn tuân thủ Quy chuẩn viết mã
- [x] Dữ liệu tuân thủ quy chuẩn trích dẫn: tối thiểu 2 nguồn kiểm chứng, không dùng ảnh AI
- [x] `npm test` — nnn/nnn PASS
- [x] `npm run build` thành công
- [x] Trang nội dung vẫn 0-byte JS
- [x] Đã kiểm hiển thị responsive

## Ảnh chụp màn hình / Minh chứng

<!-- Ảnh trang /linh-dai/<id>/ trước và sau, nếu có thay đổi hiển thị -->
```

## Nguyên tắc

- Người review cần đọc PR mà hiểu được **nội dung nào lấy từ đâu**. Luôn dẫn hai báo cáo.
- Không tick ô checklist chưa làm. Chưa chạy `npm run build` thì để trống và nói rõ.
- Nếu PR không đụng `src/**`, CI sẽ không chạy job test — nói rõ trong PR là đã chạy tại máy.
- Không tự merge. Không tự approve.
