# Kịch bản demo 6 phút và luyện Live Modification

## Demo 6 phút

### 0:00–0:45 — SV3 mở đầu

- Mở link deploy.
- Nói tên FixFlow, vấn đề, 4 role.
- Mở nhanh `docs/screen-inventory.md`.

### 0:45–2:15 — SV1

- Vào Ticket Create.
- Chọn thiết bị để phòng tự điền.
- Bỏ trống form để chứng minh validation.
- Nhập đúng và tạo ticket.
- Vào My Tickets.
- Tìm kiếm + lọc trạng thái + chứng minh Empty State.

### 2:15–3:45 — SV2

- Mở Work Queue, lọc ticket.
- Mở Repair Detail.
- Chạy AI Checklist: Input → Loading → Output → Explain → Accept/Edit → Save.
- Thử input ngắn để chứng minh AI Failure.

### 3:45–5:00 — SV3

- Mở Dispatch Board, thấy ticket vừa tạo.
- Gán kỹ thuật viên hoặc cập nhật trạng thái.
- Mở SLA Monitor.
- Mở Failure Insights và trình diễn AI-3.
- F5 để chứng minh LocalStorage.

### 5:00–6:00 — Cả nhóm

- DevTools 320px hoặc 375px.
- DevTools 768px.
- Zoom 200%.
- Bấm Tab chứng minh focus.
- Bật Error State.

## Luyện Live Modification

Mỗi người luyện tối thiểu 3 đề, không dùng AI để viết hộ trong lúc bảo vệ.

### SV1 — Requester

- Thêm nút Reset Filters cho My Tickets.
- Thêm đếm ký tự cho mô tả lỗi.
- Thêm xác nhận trước khi hủy ticket.
- Thêm lọc theo mức độ ưu tiên.

### SV2 — Technician

- Thêm sắp xếp ticket theo SLA.
- Thêm trạng thái Empty kèm nút khôi phục dữ liệu mẫu.
- Thêm Loading 800ms khi mở Work Queue.
- Thêm checkbox chọn nhiều checklist.

### SV3 — Manager/Admin

- Thêm cột/tính năng lưu trữ thiết bị.
- Thêm KPI Summary tính từ mảng dữ liệu.
- Thêm nút Export CSV.
- Thêm bộ lọc “Chỉ hiển thị ticket đã ghim”.

## Khi được giao đề bất ngờ

1. Đọc yêu cầu và nói lại bằng lời của mình.
2. Mở đúng HTML/JS/CSS liên quan.
3. Sửa ít nhất nhưng đúng chỗ.
4. Chạy thử thành công và trường hợp lỗi.
5. Gõ `git diff`.
6. Giải thích dòng vừa sửa.
