# Screen Inventory - Bảng truy vết 12 cột

Quy ước: mỗi dòng tương ứng một màn hình độc lập và phải có Task, Branch, PR, OBS trước khi đánh dấu DONE.

| Role | User Goal | User Task | Screen | File | CRUD | States | AI | Assignee | Task ID | Branch | OBS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Public | Biết sản phẩm | Xem giới thiệu, vào đăng nhập | Landing | `/index.html` | R | normal | Không | SV3 | TASK-01 | feature/sv3-manager-admin | SV3-00 |
| Shared | Vào hệ thống | Nhập email/mật khẩu | Login | `pages/login.html` | R | normal, error, loading | Không | SV1 | TASK-02 | feature/sv1-requester | SV1-00 |
| Shared | Tạo tài khoản | Nhập thông tin | Register | `pages/register.html` | C | normal, validation, success, error | Không | SV1 | TASK-03 | feature/sv1-requester | SV1-01 |
| Shared | Lấy lại mật khẩu | Gửi email | Forgot password | `pages/forgot-password.html` | C | normal, validation, success, error | Không | SV1 | TASK-04 | feature/sv1-requester | SV1-02 |
| Shared | Xem tổng quan | Xem KPI và ticket mới | Dashboard | `pages/dashboard.html` | R | normal, loading, error | Không | SV3 | TASK-05 | feature/sv3-manager-admin | SV3-01 |
| Shared | Đọc cập nhật | Mở/đánh dấu thông báo | Notifications | `pages/notifications.html` | R/U | normal, empty, loading | Không | SV1 | TASK-06 | feature/sv1-requester | SV1-03 |
| Shared | Sửa thông tin | Cập nhật hồ sơ | Profile | `pages/profile.html` | R/U | normal, validation, success, error | Không | SV1 | TASK-07 | feature/sv1-requester | SV1-04 |
| Shared | Xử lý lỗi quyền | Quay lại dashboard | 403 | `pages/403.html` | R | error | Không | SV3 | TASK-08 | feature/sv3-manager-admin | SV3-02 |
| Shared | Xử lý đường dẫn sai | Quay lại dashboard | 404 | `pages/404.html` | R | error | Không | SV3 | TASK-09 | feature/sv3-manager-admin | SV3-03 |
| Requester | Gửi yêu cầu | Chọn thiết bị, phòng, mô tả, mức độ, gửi | Ticket Create | `pages/requester-ticket-create.html` | C | normal, validation, loading, success, error | AI-1 Classifier | SV1 | TASK-10 | feature/sv1-requester | SV1-05 |
| Requester | Theo dõi yêu cầu | Tìm kiếm, lọc, mở ticket | My Tickets | `pages/requester-my-tickets.html` | R/U/CANCEL | normal, empty, loading, error | Không | SV1 | TASK-11 | feature/sv1-requester | SV1-06 |
| Requester | Theo dõi một yêu cầu | Xem timeline, phản hồi, hủy, đánh giá | Ticket Detail | `pages/requester-ticket-detail.html` | R/U/CANCEL | pending, assigned, repairing, completed, cancelled, error | Không | SV1 | TASK-12 | feature/sv1-requester | SV1-07 |
| Technician | Nhận việc | Tìm kiếm, lọc, nhận ticket | Work Queue | `pages/technician-work-queue.html` | R/U | normal, empty, loading, error | AI-1 hỗ trợ nhóm | SV2 | TASK-13 | feature/sv2-technician | SV2-01 |
| Technician | Xử lý ticket | Checklist, trạng thái, vật tư, ghi chú | Repair Detail | `pages/technician-repair-detail.html` | R/U | normal, loading, success, error | AI-2 Checklist | SV2 | TASK-14 | feature/sv2-technician | SV2-02 |
| Technician | Tra cứu lịch sử | Tìm kiếm, lọc, xuất | Repair History | `pages/technician-repair-history.html` | R/U/ARCHIVE | normal, empty, loading, error | Không | SV2 | TASK-15 | feature/sv2-technician | SV2-03 |
| Manager | Điều phối | Gán kỹ thuật viên, cập nhật assignment | Dispatch Board | `pages/manager-dispatch-board.html` | R/U | unassigned, assigned, loading, error | AI-1 Matching | SV3 | TASK-16 | feature/sv3-manager-admin | SV3-04 |
| Manager | Kiểm soát SLA | Lọc cảnh báo, mở drill-down | SLA Monitor | `pages/manager-sla-monitor.html` | R/U | normal, warning, overdue, empty, error | AI-2 Risk | SV3 | TASK-17 | feature/sv3-manager-admin | SV3-05 |
| Manager | Phát hiện lỗi lặp | Xem insight, chấp nhận/sửa/từ chối | Failure Insights | `pages/manager-failure-insights.html` | R/U | processing, result, uncertain, error | AI-3 Summary | SV3 | TASK-18 | feature/sv3-manager-admin | SV3-06 |
| Admin | Quản lý thiết bị | Thêm, sửa, lưu trữ, tìm kiếm | Asset Management | `pages/admin-asset-management.html` | C/R/U/ARCHIVE | normal, empty, loading, error, success | Không | SV3 | TASK-19 | feature/sv3-manager-admin | SV3-07 |
| Admin | Chuẩn hóa lỗi | Thêm/sửa/ẩn nhóm lỗi | Issue Category | `pages/admin-issue-category-management.html` | C/R/U/D | normal, empty, validation, error | Không | SV3 | TASK-20 | feature/sv3-manager-admin | SV3-08 |
| Admin | Quản lý tài khoản | Thêm/sửa/vô hiệu hóa user | User Management | `pages/admin-user-management.html` | C/R/U/DISABLE | normal, empty, validation, error | Không | SV3 | TASK-21 | feature/sv3-manager-admin | SV3-09 |

## Trạng thái mã hóa

- `normal`: có dữ liệu bình thường.
- `loading`: đang tải/xử lý.
- `empty`: không có dữ liệu hoặc lọc không ra kết quả.
- `error`: lỗi dữ liệu/mạng, có nút Thử lại.
- `success`: thao tác thành công, có toast/banner.
- `pending`: đang chờ xử lý.
- `cancelled`: đã hủy.
- `archive`: lưu trữ thay vì xóa cứng khi phù hợp.
