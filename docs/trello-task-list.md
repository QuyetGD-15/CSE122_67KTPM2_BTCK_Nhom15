# Trello Task List - BTL-15 FixFlow

## Cấu hình bảng cần dùng

Barem yêu cầu nên có 5 danh sách:

```text
TỒN ĐỌNG
CẦN LÀM
ĐANG LÀM
CHỜ DUYỆT
ĐÃ XONG
```

Nếu bảng hiện tại mới có `Cần làm`, `Đang làm`, `Đã xong`, hãy tạo thêm:

- `TỒN ĐỌNG`: việc chưa rõ hoặc bị chặn.
- `CHỜ DUYỆT`: đã code xong nhưng chờ thành viên khác review/PR.

Không đưa thẻ sang `ĐÃ XONG` nếu chưa có đủ checklist và link minh chứng.

## Quy tắc chung cho mọi thẻ

Mỗi thẻ phải có:

- Mã task.
- Người phụ trách.
- Role.
- Màn hình/file.
- Branch.
- Hạn hoàn thành.
- Checklist.
- Link PR/commit.
- Link OBS sau khi quay.
- Ghi chú lỗi hoặc vấn đề còn lại.

Tên branch dùng:

```text
feature/sv1-requester
feature/sv2-technician
feature/sv3-manager-admin
```

---

# PHẦN A - Khởi tạo và thiết kế chung

## TASK-01 - Chốt phân tích sản phẩm và User Flow

**Người phụ trách:** SV3  
**Reviewer:** SV1 + SV2  
**Role:** Tất cả  
**File/tài liệu:** `docs/project-proposal.md`  
**Branch:** `feature/sv3-manager-admin`  
**Ưu tiên:** Cao  
**Phụ thuộc:** Không

**Mô tả:** Hoàn thiện ngữ cảnh, vấn đề, mục tiêu, role, user goal, user task, entity và luồng end-to-end.

**Checklist:**

- [ ] Viết rõ P1, P2, P3, P4.
- [ ] Viết mục tiêu O1–O7.
- [ ] Mô tả 4 role.
- [ ] Vẽ luồng Requester → Technician → Manager/Admin.
- [ ] Ghi rõ dữ liệu truyền giữa các role.
- [ ] Dán link Figma/Canva thật.
- [ ] Dán link GitHub thật.
- [ ] Dán link Trello thật.

**Hoàn thành khi:** Hai thành viên còn lại đọc và xác nhận luồng không thiếu bước.

**Minh chứng:** Link tài liệu + commit + ảnh/Link Figma.

---

## TASK-02 - Hoàn thiện Figma/Canva và Design System

**Người phụ trách:** SV1  
**Reviewer:** SV3  
**Role:** Tất cả  
**File/tài liệu:** `design/`, Figma/Canva  
**Branch:** `feature/sv1-requester`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-01

**Mô tả:** Tạo thiết kế trước khi code chính thức.

**Checklist:**

- [ ] Sitemap.
- [ ] User Flow.
- [ ] Desktop mockup.
- [ ] Mobile mockup 375px.
- [ ] Màu chủ đạo, font, spacing.
- [ ] Button: primary, secondary, danger, disabled.
- [ ] Badge trạng thái.
- [ ] Form.
- [ ] Table/card.
- [ ] Loading state.
- [ ] Empty state.
- [ ] Error state.
- [ ] AI result và AI failure state.
- [ ] Quyền xem Figma/Canva là Anyone with link can view.

**Hoàn thành khi:** Có link mở được ở cửa sổ ẩn danh.

**Minh chứng:** Link Figma/Canva + ảnh mockup + commit.

---

## TASK-03 - Chuẩn hóa layout và điều hướng dùng chung

**Người phụ trách:** SV3  
**Reviewer:** SV1  
**Role:** Tất cả  
**File:** `index.html`, `pages/dashboard.html`, `css/style.css`, `css/responsive.css`  
**Branch:** `feature/sv3-manager-admin`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-02

**Mô tả:** Tạo khung giao diện thống nhất cho toàn bộ sản phẩm.

**Checklist:**

- [ ] Header.
- [ ] Sidebar desktop.
- [ ] Navigation mobile.
- [ ] Breadcrumb hoặc đường dẫn trang.
- [ ] Role switcher hoặc menu chuyển role.
- [ ] Logo FixFlow.
- [ ] Design token trong `:root`.
- [ ] Focus-visible.
- [ ] Responsive 320/375/768/1280px.
- [ ] Link không trỏ sai `index.html`.

**Hoàn thành khi:** Mở các role khác nhau không phải gõ URL thủ công.

**Minh chứng:** PR + ảnh desktop/mobile + video dashboard.

---

## TASK-04 - Chuẩn hóa dữ liệu và kiến trúc JavaScript

**Người phụ trách:** SV2  
**Reviewer:** SV1 + SV3  
**Role:** Tất cả  
**File:** `assets/data/*.json`, `js/api.js`, `js/main.js`, `js/modules/`  
**Branch:** `feature/sv2-technician`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-01

**Mô tả:** Tách dữ liệu và các hàm dùng chung để dễ giải thích khi vấn đáp.

**Checklist:**

- [ ] `tickets.json` có 15–25 ticket thực tế.
- [ ] `assets.json` có 15–25 thiết bị thực tế.
- [ ] Có `users.json`.
- [ ] Có `categories.json`.
- [ ] Có `api.js` đọc JSON/localStorage.
- [ ] Có `try/catch`.
- [ ] Có kiểm tra `response.ok`.
- [ ] Có hàm loading/empty/error.
- [ ] Không dùng dữ liệu `test 1`, `abc`, `Lorem ipsum`.

**Hoàn thành khi:** Có thể giải thích dữ liệu đi từ file JSON/localStorage đến giao diện.

**Minh chứng:** PR + ảnh dữ liệu + video giải thích `api.js`.

---

# PHẦN B - SV1: Người yêu cầu

## TASK-05 - Hoàn thiện màn hình tạo ticket

**Người phụ trách:** SV1  
**Reviewer:** SV2  
**Role:** Người yêu cầu  
**File:** `pages/requester-ticket-create.html`, `js/modules/requester.js`  
**Branch:** `feature/sv1-requester`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-02, TASK-04

**Checklist:**

- [ ] Chọn thiết bị theo tên/mã.
- [ ] Tự điền phòng/vị trí.
- [ ] Cho phép sửa vị trí khi thiết bị di chuyển.
- [ ] Nhập mô tả lỗi.
- [ ] Chọn mức độ.
- [ ] Upload/preview ảnh hoặc trạng thái đính kèm.
- [ ] Validation tất cả trường bắt buộc.
- [ ] Đếm ký tự mô tả.
- [ ] Nút submit disabled khi đang xử lý.
- [ ] Lưu ticket vào localStorage.
- [ ] Hiện mã ticket sau khi tạo.
- [ ] Có success state.
- [ ] Có error state.
- [ ] Mobile không tràn form.

**Hoàn thành khi:** Tạo ticket xong, F5 vẫn còn dữ liệu và My Tickets nhìn thấy ticket.

**Minh chứng:** Commit, PR, video `SV1-06-requester-ticket-create.mp4`.

---

## TASK-06 - Hoàn thiện AI Ticket Classifier

**Người phụ trách:** SV1  
**Reviewer:** SV2  
**Role:** Người yêu cầu  
**File:** `pages/requester-ticket-create.html`, `js/app.js`  
**Branch:** `feature/sv1-requester`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-05

**Checklist:**

- [ ] Input là thiết bị + mô tả lỗi.
- [ ] Có trạng thái Processing/Loading.
- [ ] Có kết quả nhóm kỹ thuật.
- [ ] Có độ tin cậy.
- [ ] Có 3 yếu tố giải thích.
- [ ] Có Chấp nhận.
- [ ] Có Chỉnh sửa.
- [ ] Có Từ chối.
- [ ] Có Tạo lại.
- [ ] Kết quả được lưu vào ticket.
- [ ] Mô tả dưới 10 ký tự hiển thị Failure/Uncertainty.
- [ ] Có prompt chip gợi ý câu mô tả.

**Hoàn thành khi:** AI không chỉ hiển thị chữ mà kết quả ảnh hưởng đến ticket.

**Minh chứng:** Video AI trong `SV1-06-requester-ticket-create.mp4`.

---

## TASK-07 - Hoàn thiện danh sách My Tickets

**Người phụ trách:** SV1  
**Reviewer:** SV3  
**Role:** Người yêu cầu  
**File:** `pages/requester-my-tickets.html`, `js/app.js`  
**Branch:** `feature/sv1-requester`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-05

**Checklist:**

- [ ] Hiện ticket từ localStorage.
- [ ] Tìm kiếm theo mã/tên thiết bị/mô tả.
- [ ] Lọc theo trạng thái.
- [ ] Lọc theo mức độ.
- [ ] Lọc theo khoảng SLA hoặc nhóm thiết bị.
- [ ] Sort mới nhất/cũ nhất.
- [ ] Hiện bộ đếm X/Y.
- [ ] Nút Reset Filters.
- [ ] Empty state khi không có kết quả.
- [ ] Nút CTA tạo ticket mới.
- [ ] Loading state.
- [ ] Error state.
- [ ] Lưu filter sau F5.

**Hoàn thành khi:** Search + ít nhất 2 filter + sort chạy cùng nhau.

**Minh chứng:** Video `SV1-07-requester-my-tickets.mp4`.

---

## TASK-08 - Hoàn thiện Ticket Detail và vòng đời requester

**Người phụ trách:** SV1  
**Reviewer:** SV2  
**Role:** Người yêu cầu  
**File:** `pages/requester-ticket-detail.html`, `js/modules/requester.js`  
**Branch:** `feature/sv1-requester`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-05

**Checklist:**

- [ ] Đọc mã ticket từ URL.
- [ ] Hiện thiết bị/phòng/mô tả/trạng thái.
- [ ] Hiện timeline activity.
- [ ] Gửi phản hồi.
- [ ] Hủy ticket nếu chưa nhận.
- [ ] Bắt nhập lý do hủy.
- [ ] Xác nhận trước khi hủy.
- [ ] Đánh giá sau khi hoàn tất.
- [ ] Cập nhật localStorage.
- [ ] Có trạng thái pending/assigned/repairing/completed/cancelled.

**Hoàn thành khi:** Thay đổi trên detail được phản ánh ở My Tickets sau F5.

**Minh chứng:** Video `SV1-08-requester-ticket-detail.mp4`.

---

## TASK-09 - Hoàn thiện trang dùng chung và A11y

**Người phụ trách:** SV1  
**Reviewer:** SV3  
**Role:** Dùng chung  
**File:** `pages/login.html`, `register.html`, `forgot-password.html`, `profile.html`, `notifications.html`  
**Branch:** `feature/sv1-requester`  
**Ưu tiên:** Trung bình  
**Phụ thuộc:** TASK-03

**Checklist:**

- [ ] Login validation.
- [ ] Register validation.
- [ ] Forgot password success/error.
- [ ] Profile update.
- [ ] Notifications empty/unread/read.
- [ ] Mọi input có label.
- [ ] Tab navigation được.
- [ ] Focus-visible rõ.
- [ ] Mobile ổn.

---

# PHẦN C - SV2: Kỹ thuật viên

## TASK-10 - Hoàn thiện Work Queue

**Người phụ trách:** SV2  
**Reviewer:** SV1  
**Role:** Kỹ thuật viên  
**File:** `pages/technician-work-queue.html`, `js/modules/technician.js`  
**Branch:** `feature/sv2-technician`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-04, TASK-05

**Checklist:**

- [ ] Hiện ticket mới tạo từ requester.
- [ ] Lọc theo mức độ.
- [ ] Lọc theo SLA.
- [ ] Lọc theo khu vực.
- [ ] Search.
- [ ] Sort SLA cao nhất.
- [ ] Nút nhận việc.
- [ ] Xác nhận trước khi nhận.
- [ ] Cập nhật assignee.
- [ ] Đổi status sang Đã nhận.
- [ ] Empty/loading/error.
- [ ] Mobile.

**Hoàn thành khi:** Ticket từ SV1 tạo được xuất hiện và nhận việc được.

**Minh chứng:** Video `SV2-01-technician-work-queue.mp4`.

---

## TASK-11 - Hoàn thiện Repair Detail

**Người phụ trách:** SV2  
**Reviewer:** SV1  
**Role:** Kỹ thuật viên  
**File:** `pages/technician-repair-detail.html`, `js/modules/technician.js`  
**Branch:** `feature/sv2-technician`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-10

**Checklist:**

- [ ] Đọc ticket theo URL.
- [ ] Đổi trạng thái.
- [ ] Checklist có checkbox.
- [ ] Thêm checklist.
- [ ] Sửa/xóa checklist.
- [ ] Ghi nguyên nhân.
- [ ] Ghi vật tư.
- [ ] Ghi chú kỹ thuật.
- [ ] Đính kèm ảnh.
- [ ] Lưu vào localStorage.
- [ ] Cập nhật activity timeline.
- [ ] Success/error.

**Hoàn thành khi:** Manager và requester thấy trạng thái mới sau khi kỹ thuật viên lưu.

**Minh chứng:** Video `SV2-02-technician-repair-detail.mp4`.

---

## TASK-12 - Hoàn thiện AI Repair Checklist

**Người phụ trách:** SV2  
**Reviewer:** SV3  
**Role:** Kỹ thuật viên  
**File:** `pages/technician-repair-detail.html`, `js/modules/technician.js`  
**Branch:** `feature/sv2-technician`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-11

**Checklist:**

- [ ] Input loại lỗi/thiết bị.
- [ ] Loading 800ms.
- [ ] Kết quả checklist.
- [ ] Độ tin cậy.
- [ ] Lý do đề xuất.
- [ ] Chỉnh sửa checklist trước khi áp dụng.
- [ ] Chấp nhận.
- [ ] Từ chối.
- [ ] Tạo lại.
- [ ] Lưu vào repair detail.
- [ ] Failure khi thiếu dữ liệu.

---

## TASK-13 - Hoàn thiện Repair History

**Người phụ trách:** SV2  
**Reviewer:** SV1  
**Role:** Kỹ thuật viên  
**File:** `pages/technician-repair-history.html`  
**Branch:** `feature/sv2-technician`  
**Ưu tiên:** Trung bình  
**Phụ thuộc:** TASK-11

**Checklist:**

- [ ] Hiện lịch sử thật từ localStorage.
- [ ] Search.
- [ ] Lọc thiết bị.
- [ ] Lọc nguyên nhân.
- [ ] Sort ngày mới/cũ.
- [ ] Empty state.
- [ ] Export CSV/JSON.
- [ ] Archive lịch sử nếu cần.

---

# PHẦN D - SV3: Quản lý và Admin

## TASK-14 - Hoàn thiện Dispatch Board

**Người phụ trách:** SV3  
**Reviewer:** SV2  
**Role:** Quản lý bảo trì  
**File:** `pages/manager-dispatch-board.html`, `js/modules/manager.js`  
**Branch:** `feature/sv3-manager-admin`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-10

**Checklist:**

- [ ] Hiện ticket chưa gán.
- [ ] Hiện ticket đã gán.
- [ ] Chọn kỹ thuật viên.
- [ ] Gán ticket.
- [ ] Cập nhật assignment.
- [ ] Lọc theo khu vực/kỹ năng/SLA.
- [ ] Bulk action bằng checkbox.
- [ ] Xác nhận trước khi gán nhiều.
- [ ] Cập nhật localStorage.
- [ ] Technician thấy assignment mới.
- [ ] Empty/loading/error.

**Hoàn thành khi:** Gán từ manager làm thay đổi Work Queue của technician.

**Minh chứng:** Video `SV3-02-manager-dispatch-board.mp4`.

---

## TASK-15 - Hoàn thiện SLA Monitor

**Người phụ trách:** SV3  
**Reviewer:** SV1  
**Role:** Quản lý bảo trì  
**File:** `pages/manager-sla-monitor.html`  
**Branch:** `feature/sv3-manager-admin`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-14

**Checklist:**

- [ ] KPI tổng ticket.
- [ ] KPI trong hạn.
- [ ] KPI cảnh báo.
- [ ] KPI quá hạn.
- [ ] Tính từ dữ liệu thật.
- [ ] Lọc theo trạng thái SLA.
- [ ] Sort % SLA.
- [ ] Drill-down đến ticket detail.
- [ ] Error/empty/loading.
- [ ] Mobile/tablet.

**Minh chứng:** Video `SV3-03-manager-sla-monitor.mp4`.

---

## TASK-16 - Hoàn thiện Failure Insights AI

**Người phụ trách:** SV3  
**Reviewer:** SV2  
**Role:** Quản lý bảo trì  
**File:** `pages/manager-failure-insights.html`, `js/modules/manager.js`  
**Branch:** `feature/sv3-manager-admin`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-13

**Checklist:**

- [ ] Chọn thiết bị hoặc khoảng thời gian.
- [ ] Loading.
- [ ] Tóm tắt lỗi lặp.
- [ ] Độ tin cậy.
- [ ] 3 yếu tố giải thích.
- [ ] Chấp nhận đề xuất.
- [ ] Sửa nội dung.
- [ ] Từ chối.
- [ ] Tạo lại.
- [ ] Lưu insight vào dữ liệu.
- [ ] Failure/uncertainty.

**Minh chứng:** Video `SV3-04-manager-failure-insights.mp4`.

---

## TASK-17 - Hoàn thiện Asset CRUD

**Người phụ trách:** SV3  
**Reviewer:** SV1  
**Role:** Quản trị viên  
**File:** `pages/admin-asset-management.html`, `assets/data/assets.json`, `js/modules/manager.js`  
**Branch:** `feature/sv3-manager-admin`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-04

**Checklist:**

- [ ] Danh sách 15–25 thiết bị.
- [ ] Thêm thiết bị.
- [ ] Validation mã không trùng.
- [ ] Sửa thiết bị.
- [ ] Lưu trữ thiết bị.
- [ ] Bắt nhập lý do archive.
- [ ] Xác nhận trước archive.
- [ ] Tìm kiếm.
- [ ] Lọc nhóm/trạng thái/phòng.
- [ ] Sort tên/ngày.
- [ ] Giữ dữ liệu sau F5.
- [ ] Empty/loading/error.

**Hoàn thành khi:** CRUD không còn là nút `alert()` giả.

**Minh chứng:** Video `SV3-05-admin-asset-management.mp4`.

---

## TASK-18 - Hoàn thiện Category và User Management

**Người phụ trách:** SV3  
**Reviewer:** SV2  
**Role:** Quản trị viên  
**File:** `pages/admin-issue-category-management.html`, `pages/admin-user-management.html`  
**Branch:** `feature/sv3-manager-admin`  
**Ưu tiên:** Trung bình  
**Phụ thuộc:** TASK-17

**Checklist:**

- [ ] Thêm/sửa/ẩn nhóm lỗi.
- [ ] Không cho nhóm lỗi trùng tên.
- [ ] Thêm/sửa user.
- [ ] Đổi role.
- [ ] Vô hiệu hóa user.
- [ ] Xác nhận thao tác.
- [ ] Search/filter.
- [ ] Empty/error.

---

# PHẦN E - Tích hợp, kiểm thử và minh chứng

## TASK-19 - Tích hợp workflow đa role

**Người phụ trách:** Cả nhóm, điều phối SV3  
**Reviewer:** Cả nhóm  
**Role:** Tất cả  
**File:** `js/app.js`, `js/api.js`, các trang chính  
**Branch:** `dev`  
**Ưu tiên:** Cao nhất  
**Phụ thuộc:** TASK-05, TASK-10, TASK-11, TASK-14, TASK-17

**Checklist:**

- [ ] Requester tạo ticket.
- [ ] Ticket xuất hiện Work Queue.
- [ ] Technician nhận ticket.
- [ ] Manager thấy ticket.
- [ ] Manager gán kỹ thuật viên.
- [ ] Technician cập nhật sửa chữa.
- [ ] Ticket chuyển hoàn tất.
- [ ] Requester thấy hoàn tất.
- [ ] F5 không mất dữ liệu.
- [ ] Không có dữ liệu giả không liên quan.

**Minh chứng:** Video demo liên thông + test report.

---

## TASK-20 - State Coverage và Error Handling

**Người phụ trách:** SV2  
**Reviewer:** SV1 + SV3  
**Role:** Tất cả  
**File:** `js/main.js`, các trang chính  
**Branch:** `feature/sv2-technician`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-19

**Checklist:**

- [ ] Normal state.
- [ ] Loading state.
- [ ] Empty state.
- [ ] Error state.
- [ ] Success state.
- [ ] Pending state.
- [ ] Cancelled state.
- [ ] Completed state.
- [ ] Có nút Retry cho Error.
- [ ] Empty có CTA.
- [ ] Loading khóa nút phù hợp.

---

## TASK-21 - Test Responsive và Accessibility

**Người phụ trách:** SV1  
**Reviewer:** SV2 + SV3  
**Role:** Tất cả  
**File:** `css/style.css`, `css/responsive.css`, toàn bộ HTML  
**Branch:** `feature/sv1-requester`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-19

**Checklist:**

- [ ] Test 320px.
- [ ] Test 375px.
- [ ] Test 768px.
- [ ] Test 1280px.
- [ ] Zoom 200%.
- [ ] Không horizontal scroll ngoài ý muốn.
- [ ] Tab navigation.
- [ ] Focus-visible.
- [ ] Label cho input.
- [ ] Alt cho image.
- [ ] Contrast dễ đọc.
- [ ] Modal/drawer đóng bằng Esc.

**Minh chứng:** Ảnh test + video test mobile.

---

## TASK-22 - Viết README, AI Report và Screen Inventory

**Người phụ trách:** SV3  
**Reviewer:** SV1 + SV2  
**Role:** Tất cả  
**File:** `README.md`, `docs/ai-usage-report.md`, `docs/screen-inventory.md`  
**Branch:** `feature/sv3-manager-admin`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-19

**Checklist:**

- [ ] Hướng dẫn chạy.
- [ ] Link GitHub.
- [ ] Link Deploy.
- [ ] Link Figma.
- [ ] Link Trello.
- [ ] Role và flow.
- [ ] Cấu trúc thư mục.
- [ ] Công nghệ.
- [ ] Mock/API.
- [ ] AI report trung thực.
- [ ] Bảng inventory đủ 12 cột.
- [ ] Link PR.
- [ ] Link OBS.

---

## TASK-23 - Tạo Deploy và kiểm tra link công khai

**Người phụ trách:** SV3  
**Reviewer:** Cả nhóm  
**Role:** Tất cả  
**File:** README và deploy settings  
**Branch:** `dev`/`main`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-19

**Checklist:**

- [ ] Deploy GitHub Pages/Vercel/Netlify.
- [ ] Mở được index.html.
- [ ] Mở được login.
- [ ] Mở được dashboard.
- [ ] Mở được các role.
- [ ] CSS không 404.
- [ ] JS không 404.
- [ ] JSON không 404.
- [ ] Test cửa sổ ẩn danh.
- [ ] Test trên điện thoại.
- [ ] Dán link vào README và project proposal.

---

## TASK-24 - Pull Request, review và merge

**Người phụ trách:** SV3 điều phối, mỗi SV chịu trách nhiệm PR của mình  
**Reviewer:** Một thành viên khác  
**Branch:** Các branch feature → `dev`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-05 đến TASK-23

**Checklist:**

- [ ] Mỗi SV có branch.
- [ ] Mỗi SV có commit Conventional Commit.
- [ ] Mỗi SV push branch.
- [ ] Mỗi SV tạo PR vào dev.
- [ ] PR có mô tả.
- [ ] PR có ảnh/video test.
- [ ] Có reviewer khác.
- [ ] Reviewer viết nhận xét cụ thể.
- [ ] Sửa feedback.
- [ ] Merge vào dev.
- [ ] Test sau merge.
- [ ] Không merge thẳng main.

---

## TASK-25 - Quay OBS cho từng màn hình

**Người phụ trách:** Mỗi SV quay phần mình  
**Reviewer:** SV3 kiểm tra danh sách link  
**Role:** Tất cả  
**File:** thư mục `evidence/obs/` hoặc link Drive  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-24

**Checklist:**

- [ ] Có webcam/mặt sinh viên.
- [ ] Có giọng giải thích.
- [ ] Mở mockup.
- [ ] Mở đúng HTML.
- [ ] Mở CSS/JS liên quan.
- [ ] Chạy luồng thành công.
- [ ] Chạy lỗi/empty/loading.
- [ ] Sửa trực tiếp một thay đổi nhỏ.
- [ ] Chạy lại.
- [ ] Commit/push.
- [ ] Đọc Task ID.
- [ ] Đọc branch.
- [ ] Đọc commit.
- [ ] Link video mở được.

**Tên video cốt lõi:**

```text
SV1-06-requester-ticket-create.mp4
SV1-07-requester-my-tickets.mp4
SV1-08-requester-ticket-detail.mp4
SV2-01-technician-work-queue.mp4
SV2-02-technician-repair-detail.mp4
SV2-03-technician-repair-history.mp4
SV3-02-manager-dispatch-board.mp4
SV3-03-manager-sla-monitor.mp4
SV3-05-admin-asset-management.mp4
```

---

## TASK-26 - Tập demo 6 phút và vấn đáp

**Người phụ trách:** Cả nhóm  
**Reviewer:** Cả nhóm  
**Role:** Tất cả  
**File:** `docs/demo-and-live-modification.md`  
**Ưu tiên:** Cao  
**Phụ thuộc:** TASK-25

**Checklist:**

- [ ] SV3 mở đầu 45 giây.
- [ ] SV1 demo từ tạo đến danh sách.
- [ ] SV2 demo Work Queue và AI.
- [ ] SV3 demo Dispatch/SLA/Admin.
- [ ] Cả nhóm demo mobile/A11y/Error.
- [ ] Mỗi SV chuẩn bị 4 câu vấn đáp.
- [ ] Mỗi SV luyện 3 đề Live Modification.
- [ ] Chạy `git status`.
- [ ] Chạy `git diff`.
- [ ] Mở sẵn 6 tab bảo vệ.

---

# Thứ tự kéo thẻ trên Trello

## Giai đoạn 1 - CẦN LÀM

```text
TASK-01, TASK-02, TASK-03, TASK-04
```

## Giai đoạn 2 - Sau khi chốt thiết kế

```text
TASK-05, TASK-06, TASK-07, TASK-08, TASK-09
TASK-10, TASK-11, TASK-12, TASK-13
TASK-14, TASK-15, TASK-16, TASK-17, TASK-18
```

## Giai đoạn 3 - Tích hợp

```text
TASK-19, TASK-20, TASK-21, TASK-22
```

## Giai đoạn 4 - Bằng chứng và bảo vệ

```text
TASK-23, TASK-24, TASK-25, TASK-26
```

Thẻ chỉ chuyển từ `ĐANG LÀM` sang `CHỜ DUYỆT` khi code đã push lên branch và đã tạo PR. Chỉ chuyển sang `ĐÃ XONG` khi reviewer đồng ý, PR đã merge và link minh chứng đã được dán vào thẻ.
