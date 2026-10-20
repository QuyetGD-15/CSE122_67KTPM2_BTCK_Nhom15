# FixFlow - Hướng dẫn chạy MVP

## Công nghệ
- HTML semantic
- Bootstrap 5 qua CDN
- CSS thuần tại `css/style.css`
- JavaScript thuần tại `js/app.js`
- Mock data và LocalStorage
- Không dùng framework/build tool phức tạp

## Chạy thử
Mở thư mục repo bằng VS Code, dùng Live Server nếu có, sau đó mở `pages/login.html` và bấm Đăng nhập.

## Phân công màn hình cốt lõi
- SV1: `requester-ticket-create.html`, `requester-my-tickets.html`, `requester-ticket-detail.html`
- SV2: `technician-work-queue.html`, `technician-repair-detail.html`, `technician-repair-history.html`
- SV3: `manager-dispatch-board.html`, `manager-sla-monitor.html`, `admin-asset-management.html`

## Tính năng đã có
- Bootstrap layout responsive và navigation dùng chung.
- Mock ticket/asset data.
- Tìm kiếm và lọc ticket.
- Form validation tạo ticket.
- Chọn thiết bị trước, tự điền phòng/vị trí.
- Ticket mới lưu bằng LocalStorage và xuất hiện trong danh sách.
- Ticket detail đọc dữ liệu theo mã `?id=TK-...`.
- AI Classifier và Repair Checklist mô phỏng.
- Status badge, SLA progress, timeline.
- Breakpoint mobile cho header, form và bảng.

## Tình trạng cần hoàn thiện trước khi quay video chức năng
- Các nút CRUD manager/admin hiện còn mock UI; SV3 nối LocalStorage.
- Nút nhận việc và cập nhật Repair Detail cần nối LocalStorage; SV2 phụ trách.
- Hủy ticket, phản hồi và đánh giá sau hoàn tất cần hoàn thiện; SV1 phụ trách.
- Sau khi hoàn thiện phải test desktop/mobile, trạng thái rỗng/lỗi/loading và review chéo.

Xem hướng dẫn chi tiết tại `docs/team-work-and-obs.md` và bảng kiểm kê tại `docs/screen-list.md`.
