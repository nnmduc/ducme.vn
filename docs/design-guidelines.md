# Hướng Dẫn Thiết Kế

Cập nhật 2026-09-11. Các giá trị dưới đây khớp với `src/styles/tokens.css`. Khi hai bên lệch nhau,
**file token là nguồn đúng**.

## 1. Triết Lý: "Stella Maris, Ánh Sao Dẫn Lối"

- **Tôn nghiêm và thanh tao.** Chủ đề là nơi thờ tự, biến cố bách hại và ký ức cộng đoàn. Hiệu ứng
  hào nhoáng không phù hợp.
- **Bầu trời đêm và ánh sao.** Nền lam thẳm, điểm nhấn vàng ánh sao, xanh thiên thanh cho dữ liệu
  thiên văn.
- **Nội dung là chính.** Chữ đứng trước hiệu ứng. Trang chi tiết là trang để đọc, không phải để ngắm.

Ba mức điều chỉnh của bản thiết kế: độ lệch bố cục 6/10, độ chuyển động **3/10**, độ dày đặc 4/10.
Chuyển động thấp là có chủ đích: đây là tư liệu về lòng đạo và mất mát, không phải trang giới thiệu
sản phẩm.

## 2. Token Màu

Hai lớp. **Component chỉ được dùng lớp ngữ nghĩa.** Không viết mã màu trong component.

### Nguyên thủy

| Token | Giá trị |
|---|---|
| `--navy-950` | `#060b19` |
| `--navy-900` | `#0c1427` |
| `--navy-850` | `#121c34` |
| `--gold-500` | `#f59e0b` |
| `--gold-300` | `#fcd34d` |
| `--gold-ink` | `#1a1200` |
| `--sky-400` | `#38bdf8` |
| `--emerald-500` | `#10b981` |
| `--rose-500` | `#f43f5e` |
| `--slate-100` | `#f1f5f9` |
| `--slate-400` | `#94a3b8` |
| `--slate-450` | `#8494a8` |

### Ngữ nghĩa

`--bg-page`, `--bg-surface`, `--bg-raised`, `--text-strong`, `--text-primary`,
`--text-secondary`, `--text-tertiary`, `--accent`, `--accent-hover`, `--accent-ink`,
`--astro`, `--border-subtle`, `--border-strong`, `--nav-bg`, `--focus-ring`,
`--status-success`, `--status-error`.

### Độ tương phản đã đo

| Cặp màu | Tỷ lệ | Kết luận |
|---|---|---|
| `#f59e0b` trên `#060b19` | 9.14:1 | Đạt AAA |
| `#38bdf8` trên `#060b19` | 9.17:1 | Đạt AAA |
| `#10b981` trên `#060b19` | 7.42:1 | Đạt AAA |
| `#f43f5e` trên `#060b19` | 4.54:1 | Đạt AA |
| `#94a3b8` trên `#060b19` | 7.66:1 | Đạt AAA |
| `#8494a8` trên `#060b19` | 6.34:1 | Đạt AA |
| ~~`#64748b`~~ trên `#060b19` | **4.13:1** | **Trượt AA, đã loại bỏ** |

`#64748b` từng là `--text-faint` của bản cũ. **Không dùng lại.**

### Quy tắc màu nhấn & Trạng thái

- Chỉ **một** màu nhấn cho toàn trang: vàng (`--gold-500`).
- Xanh `--astro` (`--sky-400`) dành riêng cho dữ liệu thiên văn (tên sao, mã Bayer, đường chỉ Polaris).
- `--status-success` (`--emerald-500`) và `--status-error` (`--rose-500`) chỉ sử dụng cho phản hồi trạng thái biểu mẫu (như tại `/lien-he/`) hoặc thông báo hệ thống.

## 3. Kiểu Chữ

| Vai trò | Font | Token |
|---|---|---|
| Tiêu đề | Playfair Display Variable | `--font-display` |
| Văn xuôi | Lora Variable | `--font-prose` |
| Giao diện, nhãn, số | Be Vietnam Pro | `--font-ui` |

Cả ba đều đã kiểm chứng có bộ ký tự `vietnamese` và được tự lưu trữ qua `@fontsource`.

> Bản trước đề xuất `Cinzel` và `JetBrains Mono`. **Không dùng nữa.** Số liệu và tọa độ dùng
> `--font-ui` kèm `font-variant-numeric: tabular-nums`.

**Bẫy cần biết.** Chữ nghiêng Playfair có right side bearing âm: từ nghiêng sẽ dính vào từ kế tiếp
(`bản đồ` dính `Việt Nam`). Mọi đoạn nghiêng trong font hiển thị phải có `padding-right: 0.14em`.
Cụm từ nghiêng nhiều chữ cũng cần `white-space: nowrap` để không bị tách dòng giữa cụm.

## 4. Hình Khối

Bán kính góc **duy nhất một giá trị**: `--radius: 4px`. Không dùng dạng viên thuốc, không trộn nhiều
thang bán kính.

## 5. Nguyên Tắc Về Ảnh

- **Không dùng ảnh do máy tạo sinh.** Tuyệt đối. Với tư liệu về công trình thật ở địa điểm thật, ảnh
  dựng bằng máy phá hỏng đúng thứ bộ tư liệu tồn tại để bảo vệ.
- **Không dùng ảnh mẫu thay thế.** Linh địa chưa có ảnh xác thực thì để trống (`realImage: null`). Số lượng linh địa đã có ảnh tính động từ `src/data/statues.js`.
- **Không cắt xén chủ thể.** Ảnh hiện nguyên khung, đặt giữa một nền phẳng, giới hạn chiều cao, giữ
  nguyên tỷ lệ gốc. Khung 16:9 cắt mất đầu pho tượng ở các ảnh dọc, nên đã bị loại bỏ.
- Chú thích ảnh luôn ghi nguồn.

## 6. Bố Cục

- Trang nội dung là tài liệu cuộn dọc, không phải khung ứng dụng cố định. Chỉ `/ban-do/` giữ kiểu
  khung ứng dụng.
- Độ dài dòng văn xuôi: 65 tới 68 ký tự.
- Thanh điều hướng: một dòng ở **mọi** bề ngang, cao tối đa 68px. Dùng nhãn rút gọn dưới 640px, bỏ
  mục phụ dưới 400px.
- Không trang nào được cuộn ngang. Đã kiểm ở 320, 360, 390, 430px.
- Mỗi phân khu dùng một họ bố cục khác nhau. Không lặp lại họ bố cục hai lần trên cùng một trang.
- Không dùng nhãn chữ hoa nhỏ phía trên mỗi tiêu đề phân khu.

## 7. Theme Sáng

Chưa bật. Cấu trúc token đã sẵn sàng. Muốn thêm thì điền đủ 16 biến ngữ nghĩa trong khối
`[data-theme="light"]` rồi đo lại toàn bộ cặp tương phản. Lưu ý `--gold-500` đạt 9.1:1 trên nền tối
nhưng chỉ khoảng 2.1:1 trên nền trắng, nên theme sáng **phải** dùng sắc vàng đậm hơn cho chữ và viền.
