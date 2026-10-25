# FixFlow - Kế hoạch làm bài và quay video

Tài liệu này giải thích cụ thể nhóm 3 sinh viên phải làm gì. “Đơn giản” ở đây nghĩa là dùng HTML, Bootstrap, CSS và JavaScript thuần; không cắt bỏ nghiệp vụ bắt buộc.

## 1. Cách chạy dự án

1. Mở thư mục repo bằng VS Code.
2. Cài extension Live Server nếu máy đã có Internet.
3. Chuột phải `index.html` ở thư mục gốc → Open with Live Server.
4. Bấm **Bắt đầu sử dụng** rồi chọn **Đăng nhập**.
5. Bấm Đăng nhập giả lập để vào `pages/dashboard.html`.
6. Test lần lượt theo luồng:
   - Người yêu cầu tạo ticket.
   - Ticket xuất hiện trong My Tickets.
   - Mở chi tiết ticket.
   - Kỹ thuật viên mở Work Queue và Repair Detail.
   - Quản lý mở Dispatch Board và SLA Monitor.
   - Quản trị mở Asset Management.

Không mở bằng cách double-click nếu trình duyệt chặn file; Live Server giúp đường dẫn hoạt động ổn định hơn.

## 2. Phân công đúng 3 sinh viên

### SV1 — Người yêu cầu + giao diện dùng chung

**Ba màn hình phải giải thích sâu trong video:**

1. `pages/requester-ticket-create.html`
   - Chọn thiết bị theo tên/mã.
   - Phòng tự điền theo thiết bị.
   - Mô tả lỗi, mức độ, ảnh.
   - Validation khi bỏ trống.
   - AI Classifier: đang xử lý → kết quả → chấp nhận/bỏ qua.
   - Tạo ticket và lưu vào LocalStorage.
2. `pages/requester-my-tickets.html`
   - Danh sách ticket.
   - Tìm kiếm.
   - Lọc theo trạng thái.
   - Bấm mã ticket để mở chi tiết.
3. `pages/requester-ticket-detail.html`
   - Đọc dữ liệu ticket theo mã trên URL.
   - Timeline trạng thái.
   - Gửi phản hồi.
   - Hủy ticket/đánh giá là phần cần hoàn thiện tiếp.

**File chính:** `js/app.js`, `css/style.css`, ba file requester ở trên, `login.html`, `register.html`, `forgot-password.html`, `profile.html`, `notifications.html`.

**Trách nhiệm chéo:** design system, màu sắc, khả năng sử dụng trên mobile.

### SV2 — Kỹ thuật viên + JavaScript dữ liệu

**Ba màn hình phải giải thích sâu trong video:**

1. `pages/technician-work-queue.html`
   - Hàng đợi ticket.
   - Tìm kiếm/lọc.
   - Ưu tiên ticket sắp/quá SLA.
   - Nút nhận việc cần hoàn thiện để đổi trạng thái.
2. `pages/technician-repair-detail.html`
   - Cập nhật trạng thái.
   - Checklist sửa chữa.
   - Vật tư, ghi chú, ảnh bằng chứng.
   - Repair Checklist AI: loading → checklist → chấp nhận/sửa.
3. `pages/technician-repair-history.html`
   - Tìm lịch sử sửa chữa.
   - Lọc theo thiết bị/nguyên nhân.
   - Xem trạng thái hoàn tất.

**File chính:** ba file technician, `js/app.js`, `assets/data` nếu nhóm tách JSON.

**Trách nhiệm chéo:** sự kiện JavaScript, LocalStorage, dữ liệu giả lập, trạng thái loading/empty/error.

### SV3 — Quản lý + quản trị + tích hợp

**Ba màn hình phải giải thích sâu trong video:**

1. `pages/manager-dispatch-board.html`
   - Danh sách ticket chưa gán.
   - Chọn kỹ thuật viên.
   - Gán việc.
   - Cập nhật trạng thái.
2. `pages/manager-sla-monitor.html`
   - KPI SLA.
   - Trong hạn/cảnh báo/quá hạn.
   - Lọc và mở ticket cần xử lý.
3. `pages/admin-asset-management.html`
   - Thêm thiết bị.
   - Sửa thiết bị.
   - Lưu trữ thiết bị.
   - Tìm kiếm và lọc.

**File chính:** manager, admin, `index.html`, `css/style.css`.

**Trách nhiệm chéo:** điều hướng, tích hợp cuối, kiểm thử toàn bộ, README, GitHub và release.

## 3. AI không được làm qua loa

Có 3 AI feature, nhưng dùng mock JavaScript là đủ:

- AI-1 Ticket Classifier: ở `requester-ticket-create.html`.
- AI-2 Repair Checklist: ở `technician-repair-detail.html`.
- AI-3 Failure Pattern Summary: ở `manager-failure-insights.html`.

Mỗi video AI phải chỉ rõ:

1. Dữ liệu đầu vào.
2. Trạng thái đang xử lý.
3. Kết quả đề xuất.
4. Lý do hoặc độ chắc chắn.
5. Nút chấp nhận/sửa/từ chối/thử lại hoặc dùng thủ công.
6. Trạng thái thất bại: không đủ dữ liệu hoặc AI không chắc chắn.

## 4. Kịch bản quay OBS

Mỗi video nên dài khoảng 3–6 phút cho một màn hình. Không cần quay 20 video riêng ngay từ đầu; nhóm quay theo từng màn hình độc lập khi đã hoàn thành. Mỗi video bắt buộc có mặt sinh viên thực hiện theo đề.

### Mẫu nói trong mỗi video

1. “Em là [SV1/SV2/SV3], phụ trách màn hình [tên].”
2. Hiển thị bản thiết kế/wireframe tương ứng.
3. Mở đúng file HTML.
4. Chỉ vào các khu vực: header, sidebar, nội dung chính, form/bảng, nút hành động.
5. Giải thích file CSS dùng class Bootstrap nào và CSS riêng nào.
6. Mở file JavaScript, chỉ rõ hàm xử lý sự kiện.
7. Chạy thử một luồng thành công.
8. Chạy thử một lỗi: bỏ trống form, tìm không có kết quả, dữ liệu rỗng hoặc AI thất bại.
9. Chỉnh trực tiếp một thay đổi nhỏ, ví dụ đổi màu badge hoặc thêm placeholder.
10. Nói branch, commit và mã công việc.

### Tên video đề xuất

- `SV1-01-requester-ticket-create.mp4`
- `SV1-02-requester-my-tickets.mp4`
- `SV1-03-requester-ticket-detail.mp4`
- `SV2-01-technician-work-queue.mp4`
- `SV2-02-technician-repair-detail.mp4`
- `SV2-03-technician-repair-history.mp4`
- `SV3-01-manager-dispatch-board.mp4`
- `SV3-02-manager-sla-monitor.mp4`
- `SV3-03-admin-asset-management.mp4`

Các trang phụ có thể quay bổ sung sau: dashboard, login, register, profile, notifications, issue categories, user management, failure insights, 403, 404.

## 5. Mỗi màn hình được tính hoàn thành khi

- Có wireframe hoặc Figma/Canva.
- Có file HTML đúng tên.
- Có Bootstrap layout.
- Có CSS responsive.
- Có ít nhất một tương tác JavaScript có ý nghĩa.
- Có dữ liệu mock hoặc LocalStorage.
- Có validation nếu là form.
- Có loading/empty/error phù hợp.
- Có kiểm tra màn hình mobile.
- Có branch và commit rõ tên.
- Có review từ một thành viên khác.
- Có video OBS và cập nhật README.

## 6. Quy trình Git đơn giản

Mỗi thành viên tạo branch:

```text
feature/sv1-requester
feature/sv2-technician
feature/sv3-manager-admin
```

Hướng dẫn Git chi tiết, lệnh tạo branch, push, Pull Request, review và merge nằm trong `docs/git-team-guide.md`.

```text
feat: add requester ticket form
feat: save ticket to local storage
feat: add technician repair checklist
feat: add manager sla monitor
fix: improve mobile ticket layout
docs: add obs recording guide
```

Không dùng commit kiểu `update`, `done`, `final`.

## 7. Thứ tự làm để không bị rối

1. Cả nhóm thống nhất màu, font, sidebar, button, badge.
2. SV1 hoàn thiện luồng tạo ticket → danh sách → chi tiết.
3. SV2 hoàn thiện queue → repair detail → history.
4. SV3 hoàn thiện dispatch → SLA → asset CRUD.
5. Tích hợp LocalStorage và test dữ liệu mới tạo.
6. Test desktop, tablet và mobile.
7. Bổ sung trạng thái empty/loading/error.
8. Review chéo.
9. Quay OBS.
10. Cập nhật `docs/screen-list.md`, README và báo cáo AI.
