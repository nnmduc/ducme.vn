---
name: marian-pipeline
description: Chạy trọn quy trình nội dung của ducme.vn bằng một lệnh duy nhất — khảo cứu, kiểm chứng rồi triển khai — mỗi bước giao cho một subagent riêng với ngữ cảnh độc lập, tự rẽ nhánh theo kết luận kiểm chứng (duyệt thì triển khai, trả lại thì khảo cứu bổ sung rồi kiểm chứng lại, từ chối thì dừng), và ghi nhật ký chi tiết từng bước. Use when the user wants the whole research → audit → publish pipeline run end to end automatically for a Marian shrine, without stopping for approval between stages. Dùng khi người dùng nói "chạy trọn quy trình", "tự động khảo cứu rồi kiểm chứng rồi đăng", "làm hết một mạch linh địa X", "chạy pipeline", "tự động hoàn toàn".
---

# Điều phối quy trình nội dung tự động

Một lệnh, ba giai đoạn, không cần người can thiệp ở giữa:

```
khảo cứu ──> kiểm chứng ──> triển khai
   │              │              │
subagent      subagent       subagent      <- ba ngữ cảnh tách rời, không thấy nhau
   └──────── bổ sung ◄────┘ (khi TRẢ LẠI KHẢO CỨU)
```

Skill này **không làm nội dung**. Nó chỉ làm ba việc: gọi đúng subagent cho từng bước, đọc hồ sơ bàn
giao để quyết định bước kế tiếp, và ghi nhật ký. Mọi phán đoán về tư liệu, nguồn, ảnh, chuyện kể đều
nằm trong ba skill chuyên môn — đừng lấn sân, đừng "sửa giúp" hồ sơ của chúng.

## Vì sao phải tách ngữ cảnh

Người viết báo cáo không được tự duyệt báo cáo của mình. Nếu một agent vừa khảo cứu vừa kiểm chứng
trong cùng ngữ cảnh, nó sẽ đọc lại chính lập luận của nó và gật đầu — audit thành nghi thức rỗng.

Vì thế: **mỗi bước là một subagent mới, spawn qua tool `Agent`, không phải `fork`.** Không truyền lịch
sử hội thoại. Subagent chỉ nhận đúng: mã linh địa, đường dẫn hồ sơ, việc phải làm, tiêu chí xong việc.
Cầu nối duy nhất giữa các bước là **file JSON trên đĩa**.

Chạy **tuần tự, mỗi lúc một subagent**. Không spawn song song: bước sau cần đầu ra của bước trước.

## Lệnh

```
/marian-pipeline <tên hoặc mã linh địa> [--no-pr] [--max-rounds N] [--max-fixes N]
```

- Không nêu linh địa: chạy `site-gaps.mjs`, chọn linh địa ưu tiên cao nhất, **nói rõ đã chọn cái nào
  rồi chạy tiếp** — không hỏi lại.
- `--no-pr`: dừng ở commit trên nhánh, không tạo Pull Request.
- `--max-rounds N` (mặc định 2): số vòng khảo cứu **nội dung** tối đa trong một lượt chạy.
- `--max-fixes N` (mặc định 2): số lần sửa **lược đồ** tối đa. Đếm riêng, vì một lỗi cấu trúc JSON
  không được ăn mất một vòng khảo cứu nội dung — nhưng vẫn phải có trần để hồ sơ hỏng không làm vòng
  lặp chạy mãi.

## Vòng lặp điều phối

Lặp đúng bốn động tác này cho tới khi `next` trả về `ketthuc`:

```bash
# 0. mot lan duy nhat khi bat dau
node .claude/skills/marian-research/scripts/site-gaps.mjs --id <id>   # xac dinh id, moi hay da co
node .claude/skills/marian-pipeline/scripts/run-state.mjs init <id> [--no-pr] [--max-rounds N] [--max-fixes N]

# 1. hoi buoc ke tiep (doc trang thai that tren dia, khong doc nhat ky)
node .claude/skills/marian-pipeline/scripts/run-state.mjs next <id> --json

# 2. neu ket qua co "preAction": "archive-audit" thi chay truoc khi spawn
node .claude/skills/marian-pipeline/scripts/run-state.mjs archive-audit <id>

# 3. spawn dung mot subagent cho buoc do (mau prompt: references/mau-prompt-subagent.md)

# 4. ghi nhan ket qua roi quay lai buoc 1
node .claude/skills/marian-pipeline/scripts/run-state.mjs record <id> --step <khaocuu|kiemchung|trienkhai> --result <xong|loi> --note "mot dong tom tat"
```

`next` đọc `khao-cuu.json` và `kiem-chung.json` **trên đĩa** rồi mới quyết định, nên lượt chạy đứt
giữa chừng vẫn tiếp tục đúng chỗ: chạy lại lệnh là nó đi tiếp, không làm lại từ đầu.

`next` **chỉ đọc, không đổi trạng thái** — gọi lại bao nhiêu lần cũng ra một kết quả và không để lại
dòng thừa nào trong nhật ký. Chỉ `record` và `finish` mới ghi một quyết định vào nhật ký rẽ nhánh, và
chỉ ghi những quyết định **đã thực sự được thi hành**.

### Bảng quyết định

Đây là toàn bộ logic rẽ nhánh — script đã cài sẵn, phần này để đọc hiểu, không phải để tự suy diễn:

| Trạng thái đọc được trên đĩa | Bước kế tiếp | Chế độ |
|---|---|---|
| Chưa có `khao-cuu.json` | khảo cứu | `moi` |
| `khao-cuu.json` sai lược đồ | khảo cứu | `sualuocdo` |
| Sai lược đồ mà hết lượt sửa | kết thúc `dungkythuat` | — |
| Có khảo cứu hợp lệ, chưa có `kiem-chung.json` | kiểm chứng | `moi` |
| `kiem-chung.json` sai lược đồ / không khớp khảo cứu | kiểm chứng | `sualuocdo` |
| Sai lược đồ mà hết lượt sửa | kết thúc `dungkythuat` | — |
| Kết luận **ÁP DỤNG** | triển khai | — |
| Kết luận **ÁP DỤNG CÓ ĐIỀU KIỆN** | triển khai, kèm `conditions[]` | — |
| Kết luận **TRẢ LẠI KHẢO CỨU**, còn vòng | lưu trữ hồ sơ kiểm chứng → khảo cứu | `bosung` |
| Kết luận **TRẢ LẠI KHẢO CỨU**, hết vòng | kết thúc `hetvong` | — |
| Kết luận **TỪ CHỐI** | kết thúc `tuchoi` | — |
| Đã triển khai xong | kết thúc `hoanthanh` | — |

Ba điều quan trọng trong bảng này:

- **TỪ CHỐI không bao giờ được triển khai**, và không được "khảo cứu lại cho đỡ phí". Từ chối nghĩa là
  sai về bản chất, làm lại cũng thế.
- **Hết vòng thì dừng, không hạ chuẩn.** Không bao giờ triển khai một hồ sơ chưa được duyệt chỉ vì đã
  chạy hết số vòng cho phép.
- **`sualuocdo` đếm riêng với `bosung`.** Sửa cấu trúc JSON cho đúng lược đồ là lỗi kỹ thuật, không
  phải một vòng khảo cứu nội dung — `record` tự phân biệt hai loại dựa trên chế độ mà `next` đã chọn,
  không cần khai báo thêm.

### Vì sao phải `archive-audit` trước khi khảo cứu lại

`kiem-chung.json` cũ vẫn nằm trên đĩa với kết luận cũ. Không dọn đi thì `next` đọc nhầm kết luận cũ,
và lệnh kiểm chứng vòng sau sẽ báo lỗi đối chiếu chéo trông như lỗi của skill. `archive-audit` đổi tên
hồ sơ cũ thành `kiem-chung.vong<N>.json` — giữ lại làm bằng chứng, nhưng không còn là hồ sơ hiện hành.

## Spawn subagent

Dùng tool `Agent`, `subagent_type: "general-purpose"`, **một subagent mỗi lần**, chờ xong rồi mới tính
tiếp. Prompt lấy nguyên khung trong `references/mau-prompt-subagent.md` — khung đó đã gồm đủ: việc phải
làm, file được đọc, file được sửa, tiêu chí xong việc, ràng buộc, và thông tin môi trường.

Câu đầu của mọi prompt luôn là:

```
Đọc .claude/skills/marian-<bước>/SKILL.md và làm đúng theo đó.
```

Nói thẳng tên file thay vì trông chờ subagent tự gọi `Skill` — như thế prompt chạy được ở cả runtime
khác đang đọc bản sao của bộ skill này.

Bắt subagent kết thúc bằng khối trạng thái:

```
Status: DONE | DONE_WITH_CONCERNS | BLOCKED | NEEDS_CONTEXT
Summary: một hai câu
Concerns/Blockers: nếu có
```

`BLOCKED` hoặc `NEEDS_CONTEXT` thì **đổi ngữ cảnh hoặc phạm vi, không lặp lại y nguyên prompt vừa thất
bại**. Mỗi bước chỉ được thử lại tối đa một lần; vẫn hỏng thì `record --result loi` rồi
`finish --status dungkythuat`.

## Bốn cách dừng

| Trạng thái | Khi nào | Có nội dung lên web không |
|---|---|---|
| `hoanthanh` | Triển khai xong, đã commit / mở PR | Có |
| `tuchoi` | Kiểm chứng kết luận TỪ CHỐI | Không |
| `hetvong` | Khảo cứu lại đủ số vòng mà vẫn chưa được duyệt | Không |
| `cannguoiquyet` | Gặp điểm chỉ con người mới quyết được | Không |
| `dungkythuat` | Subagent lỗi, hồ sơ hỏng, test không qua | Không |

### `cannguoiquyet` — chỗ duy nhất tự động hoá không đi tiếp được

`marian-research` có ba tình huống bắt buộc hỏi người dùng, và **không lệnh nào ghi đè được chúng**:

1. Không tìm được **bất kỳ** nguồn nào mở được cho linh địa (nhiều khả năng sai tên, hoặc nơi này
   không tồn tại như mô tả).
2. Hai nguồn cấp A/B uy tín ngang nhau mâu thuẫn về sự kiện cốt lõi, không có cách phân xử.
3. Linh địa có tranh chấp về tính chính thức, hoặc chuyện kể đụng vấn đề nhạy cảm (chính trị, tranh
   chấp đất đai, cáo buộc cá nhân còn sống).

Gặp một trong ba: subagent báo `BLOCKED`, điều phối chạy `finish --status cannguoiquyet`, sinh nhật ký
rồi dừng. Đây là giới hạn có chủ ý của "tự động tuyệt đối" — đoán bừa ở ba chỗ này là đúng kiểu sai mà
dự án sợ nhất. Nói rõ điều đó khi báo cho người dùng.

## Nhật ký

```bash
node .claude/skills/marian-pipeline/scripts/format-run.mjs <id> --html
```

Sinh `docs/khao-cuu/<id>/nhat-ky-quy-trinh.md` (+ `.html`) từ `quy-trinh.json`: bảng các bước đã chạy,
bảng các điểm rẽ nhánh kèm lý do, danh sách hồ sơ sinh ra, tóm tắt số liệu khảo cứu và kiểm chứng, và
việc còn lại cho người đọc.

Chạy lệnh này **sau mỗi lần `record`** — nhật ký luôn mới kể cả khi lượt chạy bị cắt ngang.

**Không sửa tay `nhat-ky-quy-trinh.md`.** Sửa `quy-trinh.json` rồi chạy lại lệnh.

Trong prompt của bước triển khai, bắt subagent chạy `format-run.mjs` **ngay trước `git add`** — nếu
không, nhật ký đi vào commit sẽ thiếu đúng bước cuối cùng.

## Cổng chặn trước khi triển khai

Điều phối không tự quyết được phép triển khai hay không. Quyền đó thuộc về:

```bash
node .claude/skills/marian-publish/scripts/read-handoff.mjs <id> --html
```

Thoát 0 mới được thi công, và phạm vi công việc đúng bằng phiếu thi công nó sinh ra. Đây là kiểm tra
cuối cùng, chạy bên trong subagent triển khai, không phải trong ngữ cảnh điều phối.

## Giới hạn cứng

- **Không bao giờ tự merge Pull Request.** Mở PR là hết phần của máy.
- **Không hạ chuẩn để chạy cho xong.** Không sửa test cho xanh, không tự duyệt hồ sơ bị trả lại, không
  triển khai khi kết luận là TRẢ LẠI hoặc TỪ CHỐI.
- **Không làm thay subagent.** Điều phối không sửa `khao-cuu.json`, `kiem-chung.json`,
  `src/data/statues.js`, không tự tìm nguồn, không tự chấm điểm.
- **Không chạy song song.** Một subagent tại một thời điểm.

## Báo cáo cuối

Khi dừng (bất kể vì lý do gì), báo cho người dùng đúng năm ý, ngắn gọn:

1. Kết thúc ở trạng thái nào, vì sao.
2. Đã đi qua những bước nào, mấy vòng.
3. Kết luận kiểm chứng và điều kiện kèm theo (nếu có).
4. Nhánh / PR (nếu có).
5. Đường dẫn `docs/khao-cuu/<id>/nhat-ky-quy-trinh.md` để đọc chi tiết.
