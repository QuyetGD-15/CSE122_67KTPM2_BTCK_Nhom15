# BÁO CÁO ĐỒ ÁN

## Học phần: Phát triển ứng dụng Web cơ bản – CSE122

### Đề tài: FIXFLOW – ĐIỀU PHỐI YÊU CẦU BẢO TRÌ THIẾT BỊ

**Giảng viên hướng dẫn:** ThS. Kiều Tuấn Dũng  
**Nhóm sinh viên thực hiện:** Nhóm 15  
1. Phùng Sỹ Quyết – MSV: 2551170938 – Lớp: 67KTPM2  
2. Chu Ngọc Nam – MSV: 2551170924 – Lớp: 67KTPM2  
3. Nguyễn Duy Nghĩa – MSV: 2551170927 – Lớp: 67KTPM2  

**Hà Nội, 2026**

---

# MỤC LỤC

1. Tóm tắt đồ án  
2. Ngữ cảnh, vấn đề và mục tiêu  
3. Phạm vi và đối tượng sử dụng  
4. Vai trò và trách nhiệm  
5. Hành trình người dùng  
6. Kiểm kê màn hình  
7. Kiến trúc và tổ chức mã nguồn  
8. Thiết kế dữ liệu và CRUD  
9. Các trải nghiệm AI mô phỏng  
10. Trạng thái, kiểm tra hợp lệ và khả năng sử dụng  
11. Cài đặt và chạy bản demo  
12. Kiểm thử và minh chứng  
13. Quy trình nhóm và phân công  
14. Đánh giá hiện trạng, hạn chế và hướng phát triển  
15. Kết luận  
Phụ lục A – Cấu trúc thư mục  
Phụ lục B – Danh sách màn hình  
Phụ lục C – Khai báo sử dụng AI  

---

# 1. TÓM TẮT ĐỒ ÁN

FixFlow là nguyên mẫu website hỗ trợ điều phối yêu cầu bảo trì thiết bị trong trường học hoặc doanh nghiệp. Sản phẩm mô phỏng quy trình từ khi người dùng phát hiện sự cố, tạo yêu cầu bảo trì, kỹ thuật viên tiếp nhận và xử lý, quản lý phân công – theo dõi SLA, đến quản trị viên quản lý danh mục thiết bị và người dùng.

Khác với cách tiếp nhận yêu cầu qua điện thoại hoặc tin nhắn rời rạc, FixFlow chuẩn hóa thông tin thành ticket gồm thiết bị, vị trí, mô tả lỗi, mức độ ưu tiên, người phụ trách, trạng thái và thời gian xử lý. Giao diện được phân chia theo bốn vai trò: Người yêu cầu, Kỹ thuật viên, Quản lý bảo trì và Quản trị viên.

Phiên bản hiện tại là **frontend web tĩnh**, sử dụng HTML5, CSS3, Bootstrap 5 CDN và JavaScript thuần. Dữ liệu mẫu được khởi tạo trong JavaScript, các thay đổi chính được lưu bằng LocalStorage để mô phỏng sự liên thông giữa các màn hình và giữ dữ liệu sau khi tải lại trang. **Dự án chưa có API, backend, cơ sở dữ liệu máy chủ hoặc xác thực người dùng thật.**

Nhóm xây dựng ba trải nghiệm AI dưới dạng mô phỏng theo luật JavaScript:

- Ticket Classifier: gợi ý nhóm xử lý cho ticket.
- Repair Checklist AI: gợi ý checklist sửa chữa theo loại lỗi.
- Failure Pattern Summary: tóm tắt các lỗi lặp lại của thiết bị.

Các tính năng AI trên không gọi mô hình máy học hoặc API LLM thật; kết quả chỉ nhằm minh họa trải nghiệm sản phẩm có đầu vào, trạng thái xử lý, kết quả, giải thích và quyền kiểm soát của người dùng.

---

# 2. NGỮ CẢNH, VẤN ĐỀ VÀ MỤC TIÊU

## 2.1. Ngữ cảnh

Trong trường học và doanh nghiệp, các sự cố như hỏng máy chiếu, điều hòa không hoạt động, máy in kẹt giấy hoặc máy tính không khởi động thường được thông báo qua điện thoại, nhóm chat hoặc trao đổi trực tiếp. Cách làm này có một số hạn chế:

- Thông tin thiết bị và vị trí thường không đầy đủ.
- Người quản lý khó biết ticket nào đang chờ, đang xử lý hoặc quá hạn.
- Kỹ thuật viên không có hàng đợi công việc tập trung.
- Người gửi yêu cầu không theo dõi được tiến độ.
- Các lỗi lặp lại của cùng một thiết bị khó được nhận biết.

## 2.2. Phát biểu vấn đề

- **P1 – Ticket thiếu thông tin chuẩn:** Yêu cầu gửi tự do thường thiếu mã thiết bị, vị trí, mức độ và mô tả lỗi.
- **P2 – Khó phân công:** Quản lý phải kiểm tra thủ công để chọn kỹ thuật viên và theo dõi ticket chưa được nhận.
- **P3 – Thiếu khả năng theo dõi:** Người gửi không biết yêu cầu đang ở trạng thái nào và có bị quá hạn hay không.
- **P4 – Khó phát hiện lỗi lặp:** Dữ liệu sửa chữa không được tổng hợp, khiến việc nhận biết thiết bị thường xuyên hỏng gặp khó khăn.

## 2.3. Mục tiêu sản phẩm

1. Xây dựng luồng tạo và xử lý ticket rõ ràng từ đầu đến cuối.
2. Mô phỏng bốn vai trò nghiệp vụ trong một hệ thống thống nhất.
3. Áp dụng HTML semantic, CSS responsive, Bootstrap và JavaScript DOM.
4. Cho phép tìm kiếm, lọc, kiểm tra hợp lệ biểu mẫu và cập nhật trạng thái.
5. Lưu dữ liệu mô phỏng bằng LocalStorage để các màn hình có thể dùng chung dữ liệu trên cùng trình duyệt.
6. Mô phỏng ba tính năng AI gắn với dữ liệu bảo trì, không làm ba hộp chat chung chung.
7. Thể hiện quy trình làm việc nhóm qua task, branch, commit, pull request, review và OBS.
8. Xây dựng nền tảng có thể mở rộng thành hệ thống có API/backend trong tương lai.

---

# 3. PHẠM VI VÀ ĐỐI TƯỢNG SỬ DỤNG

## 3.1. Phạm vi thực hiện

Phiên bản hiện tại tập trung vào:

- Trang giới thiệu và điều hướng.
- Các màn hình đăng nhập, đăng ký, khôi phục mật khẩu và hồ sơ ở mức mô phỏng.
- Tạo ticket bảo trì.
- Danh sách và chi tiết ticket.
- Hàng đợi công việc của kỹ thuật viên.
- Chi tiết sửa chữa và lịch sử sửa chữa.
- Bảng điều phối của quản lý.
- Theo dõi SLA.
- Phân tích lỗi lặp lại ở mức mô phỏng.
- Quản lý thiết bị, nhóm lỗi và người dùng ở phía giao diện.
- Tìm kiếm, lọc, validation, trạng thái rỗng và responsive.

## 3.2. Những nội dung chưa thuộc phạm vi

- API/backend thật.
- Cơ sở dữ liệu máy chủ và đồng bộ dữ liệu giữa nhiều thiết bị.
- Đăng nhập, phân quyền và mã hóa mật khẩu thật.
- Upload ảnh lên máy chủ.
- Gửi email hoặc thông báo đẩy thật.
- Tích hợp mô hình AI hoặc API LLM thật.
- Theo dõi vị trí kỹ thuật viên theo thời gian thực.
- Báo cáo vận hành phục vụ production.

Do chưa có API, dữ liệu LocalStorage chỉ tồn tại trong trình duyệt hiện tại. Khi xóa dữ liệu trình duyệt hoặc mở trên thiết bị khác, dữ liệu sẽ không được đồng bộ.

---

# 4. VAI TRÒ VÀ TRÁCH NHIỆM

| Vai trò | Mục tiêu | Nhiệm vụ chính | Dữ liệu liên quan |
|---|---|---|---|
| Người yêu cầu | Gửi và theo dõi yêu cầu bảo trì | Chọn thiết bị, tạo ticket, xem chi tiết, theo dõi trạng thái, phản hồi hoặc hủy yêu cầu | assets, tickets, notifications |
| Kỹ thuật viên | Tiếp nhận và xử lý sự cố | Xem hàng đợi, nhận ticket, thực hiện checklist, cập nhật trạng thái, ghi chú và xem lịch sử | tickets, assignments, checklists, activityLogs |
| Quản lý bảo trì | Điều phối nguồn lực và kiểm soát SLA | Xem ticket, phân công kỹ thuật viên, theo dõi cảnh báo/quá hạn, xem phân tích lỗi | tickets, assignments, slaEvents, aiSuggestions |
| Quản trị viên | Quản lý dữ liệu nền | Thêm/sửa/lưu trữ thiết bị, quản lý nhóm lỗi và tài khoản | assets, categories, users |

---

# 5. HÀNH TRÌNH NGƯỜI DÙNG

## 5.1. Luồng tổng quát

```text
Trang giới thiệu / Đăng nhập
        ↓
Chọn vai trò và vào màn hình phù hợp
        ↓
Người yêu cầu tạo ticket
        ↓
Ticket được lưu vào LocalStorage
        ↓
Kỹ thuật viên xem hàng đợi và nhận việc
        ↓
Kỹ thuật viên cập nhật sửa chữa, checklist và trạng thái
        ↓
Quản lý phân công, theo dõi SLA và ticket quá hạn
        ↓
Quản trị viên quản lý thiết bị và dữ liệu nền
        ↓
Người yêu cầu theo dõi kết quả xử lý
```

## 5.2. Luồng minh họa

Người yêu cầu chọn thiết bị “Máy chiếu P302”, nhập mô tả “Không nhận tín hiệu HDMI” và chọn mức độ “Cao”. Sau khi kiểm tra hợp lệ, hệ thống tạo ticket mới với trạng thái “Chờ phân công” và lưu vào LocalStorage. Ticket có thể được hiển thị trên danh sách của người yêu cầu, hàng đợi kỹ thuật viên và bảng điều phối của quản lý.

Quản lý chọn ticket, chọn kỹ thuật viên rồi thực hiện phân công. Trạng thái ticket được cập nhật thành “Đã nhận”. Kỹ thuật viên mở chi tiết sửa chữa, thực hiện checklist và chuyển trạng thái theo tiến độ. Quản lý theo dõi phần trăm SLA, cảnh báo và các ticket quá hạn.

---

# 6. KIỂM KÊ MÀN HÌNH

Phiên bản mã nguồn hiện tại có các nhóm màn hình sau:

## 6.1. Màn hình dùng chung

| Màn hình | Tệp | Chức năng |
|---|---|---|
| Trang vào | `/index.html` | Giới thiệu FixFlow và đi tới đăng nhập |
| Đăng nhập | `pages/login.html` | Mô phỏng truy cập hệ thống |
| Đăng ký | `pages/register.html` | Nhập thông tin tạo tài khoản mô phỏng |
| Khôi phục mật khẩu | `pages/forgot-password.html` | Mô phỏng gửi yêu cầu khôi phục |
| Dashboard | `pages/dashboard.html` | Xem tổng quan KPI và ticket |
| Thông báo | `pages/notifications.html` | Xem thông báo |
| Hồ sơ | `pages/profile.html` | Xem/sửa thông tin cá nhân |
| Không có quyền | `pages/403.html` | Thông báo truy cập không hợp lệ |
| Không tìm thấy | `pages/404.html` | Xử lý đường dẫn không tồn tại |

## 6.2. Người yêu cầu

| Màn hình | Tệp | Chức năng | CRUD/trạng thái |
|---|---|---|---|
| Tạo ticket | `pages/requester-ticket-create.html` | Chọn thiết bị, nhập vị trí, mô tả lỗi, mức độ và gửi yêu cầu | C; validation, loading, success, error |
| My Tickets | `pages/requester-my-tickets.html` | Tìm kiếm, lọc và mở ticket | R/U/CANCEL; normal, empty, error |
| Ticket Detail | `pages/requester-ticket-detail.html` | Xem thông tin, timeline và trạng thái ticket | R/U/CANCEL; pending, assigned, repairing, completed |

## 6.3. Kỹ thuật viên

| Màn hình | Tệp | Chức năng | CRUD/trạng thái |
|---|---|---|---|
| Work Queue | `pages/technician-work-queue.html` | Xem, tìm kiếm, lọc và nhận ticket | R/U; normal, empty, loading, error |
| Repair Detail | `pages/technician-repair-detail.html` | Checklist, ghi chú, vật tư, cập nhật trạng thái | R/U; loading, success, error |
| Repair History | `pages/technician-repair-history.html` | Tra cứu các lần sửa chữa | R/U/ARCHIVE; normal, empty, error |

## 6.4. Quản lý bảo trì

| Màn hình | Tệp | Chức năng | CRUD/trạng thái |
|---|---|---|---|
| Dispatch Board | `pages/manager-dispatch-board.html` | Lọc ticket và phân công kỹ thuật viên | R/U; unassigned, assigned, loading, error |
| SLA Monitor | `pages/manager-sla-monitor.html` | Theo dõi trong hạn, cảnh báo và quá hạn | R/U; normal, warning, overdue, empty |
| Failure Insights | `pages/manager-failure-insights.html` | Xem tóm tắt lỗi lặp và gợi ý xử lý | R/U; processing, result, uncertain, error |

## 6.5. Quản trị viên

| Màn hình | Tệp | Chức năng | CRUD/trạng thái |
|---|---|---|---|
| Asset Management | `pages/admin-asset-management.html` | Thêm, sửa, tìm kiếm và lưu trữ thiết bị | C/R/U/ARCHIVE |
| Issue Category | `pages/admin-issue-category-management.html` | Quản lý nhóm lỗi | C/R/U/D |
| User Management | `pages/admin-user-management.html` | Quản lý tài khoản và trạng thái người dùng | C/R/U/DISABLE |

Bảng truy vết chi tiết gồm Role, User Goal, User Task, Screen, File, CRUD, States, AI, Assignee, Task ID, Branch và OBS được lưu tại `docs/screen-inventory.md`.

---

# 7. KIẾN TRÚC VÀ TỔ CHỨC MÃ NGUỒN

## 7.1. Kiến trúc hiện tại

Ứng dụng được tổ chức theo mô hình frontend tĩnh:

1. Trình duyệt tải tệp HTML.
2. HTML nạp Bootstrap CDN, `css/style.css`, `css/responsive.css` và JavaScript.
3. JavaScript đọc dữ liệu seed trong `js/app.js`.
4. Các thao tác tạo hoặc cập nhật ticket/thiết bị được ghi vào LocalStorage.
5. JavaScript đọc LocalStorage và dựng lại bảng, thẻ, badge, timeline hoặc thông báo trên DOM.

Dự án **không có tầng API thật**. Tệp `js/api.js` hiện chỉ cung cấp lớp tiện ích cho việc đọc JSON bằng `fetch()` và thao tác LocalStorage; nó không kết nối tới server hoặc cơ sở dữ liệu từ xa.

## 7.2. Cấu trúc thư mục

```text
project-root/
├── index.html
├── README.md
├── assets/
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── api.js
│   ├── main.js
│   └── modules/
├── pages/
│   ├── requester-*.html
│   ├── technician-*.html
│   ├── manager-*.html
│   ├── admin-*.html
│   └── shared screens
├── design/
└── docs/
```

## 7.3. Các tệp logic chính

- `js/app.js`: dữ liệu seed, đọc/ghi ticket và thiết bị, render bảng, tìm kiếm/lọc và xử lý một số luồng nghiệp vụ.
- `js/api.js`: tiện ích đọc JSON và LocalStorage, xử lý lỗi cơ bản.
- `js/main.js`: điểm khởi tạo JavaScript dùng chung.
- `css/style.css`: biến màu, bố cục, thành phần giao diện và trạng thái.
- `css/responsive.css`: các quy tắc hiển thị trên màn hình nhỏ.

---

# 8. THIẾT KẾ DỮ LIỆU VÀ CRUD

## 8.1. Các thực thể nghiệp vụ dự kiến

| Thực thể | Ý nghĩa | Trường tiêu biểu |
|---|---|---|
| `assets` | Thiết bị cần quản lý | id, name, category, location, status |
| `tickets` | Yêu cầu bảo trì | id, asset, location, priority, status, assignee, SLA, description |
| `users` | Người dùng hệ thống | id, name, email, role, status |
| `assignments` | Quan hệ ticket – kỹ thuật viên | ticketId, technicianId, assignedAt, status |
| `checklists` | Các bước kiểm tra/sửa chữa | ticketId, items, completed, note |
| `slaEvents` | Các mốc theo dõi SLA | ticketId, startAt, dueAt, completedAt, status |
| `activityLogs` | Nhật ký thay đổi | ticketId, actor, action, createdAt |
| `aiSuggestions` | Kết quả AI mô phỏng | type, input, output, confidence, decision |

## 8.2. Dữ liệu thực tế trong phiên bản hiện tại

Phiên bản hiện tại khởi tạo dữ liệu mẫu trực tiếp trong `js/app.js`, gồm các ticket và thiết bị mẫu. Thay đổi do người dùng thực hiện được lưu trong LocalStorage với các khóa chính:

- `fixflow_tickets`
- `fixflow_assets`

Cách làm này phù hợp với bản prototype web tĩnh và giúp minh họa dữ liệu không bị mất ngay sau khi F5. Tuy nhiên, đây chưa phải cơ chế lưu trữ tập trung; dữ liệu không thể đồng bộ giữa nhiều máy hoặc nhiều người dùng.

## 8.3. Vòng đời ticket

```text
Mới / Chờ phân công
        ↓
Đã nhận
        ↓
Đang sửa
        ↓
Hoàn tất
```

Các nhánh ngoại lệ gồm:

- Quá hạn: SLA vượt thời gian quy định.
- Đã hủy: người yêu cầu hủy khi ticket chưa hoàn tất.
- Lưu trữ: dữ liệu cũ được ẩn khỏi danh sách chính thay vì xóa cứng.

## 8.4. Ma trận CRUD

| Thực thể | Tạo | Đọc | Sửa | Xóa/lưu trữ |
|---|---:|---:|---:|---:|
| `assets` | Có ở giao diện quản trị | Có | Có/mục tiêu hoàn thiện | Lưu trữ |
| `tickets` | Có | Có | Có một phần | Hủy/lưu trữ |
| `assignments` | Mô phỏng | Có | Có | Hủy phân công |
| `checklists` | Mô phỏng | Có | Có | Lưu theo ticket |
| `slaEvents` | Mô phỏng | Có | Cập nhật trạng thái | Không xóa cứng |
| `users` | Giao diện quản trị | Có | Có | Vô hiệu hóa |

---

# 9. CÁC TRẢI NGHIỆM AI MÔ PHỎNG

## 9.1. AI-1 – Ticket Classifier

**Mục đích:** hỗ trợ phân loại ticket và gợi ý nhóm xử lý dựa trên thiết bị, mô tả lỗi và mức độ ưu tiên.

**Đầu vào:** thiết bị, mô tả lỗi, mức độ ưu tiên.  
**Xử lý:** JavaScript kiểm tra từ khóa và thuộc tính dữ liệu.  
**Kết quả:** nhóm kỹ thuật hoặc hướng xử lý gợi ý.  
**Giải thích:** kết quả dựa trên loại thiết bị, từ khóa lỗi và mức độ.  
**Quyền kiểm soát:** người dùng có thể chấp nhận, bỏ qua hoặc tiếp tục nhập thủ công.  
**Lưu/áp dụng:** ticket vẫn được tạo theo thông tin người dùng xác nhận.

## 9.2. AI-2 – Repair Checklist AI

**Mục đích:** gợi ý các bước kiểm tra cho kỹ thuật viên theo loại thiết bị và lỗi.

Ví dụ với lỗi “Không nhận tín hiệu HDMI”, hệ thống có thể gợi ý kiểm tra dây HDMI, nguồn vào, cổng kết nối và thử với thiết bị khác. Kỹ thuật viên có thể xem, chỉnh sửa hoặc bỏ qua checklist trước khi lưu vào tiến trình sửa chữa.

## 9.3. AI-3 – Failure Pattern Summary

**Mục đích:** hỗ trợ quản lý nhận biết thiết bị hoặc nhóm lỗi xuất hiện lặp lại.

Hệ thống đọc danh sách ticket mẫu, nhóm theo thiết bị hoặc mô tả lỗi và tạo bản tóm tắt. Kết quả có thể được dùng để đề xuất bảo trì định kỳ, thay thế thiết bị hoặc kiểm tra nguyên nhân gốc.

## 9.4. Nguyên tắc an toàn

- AI trong dự án là mock JavaScript, không phải mô hình AI thật.
- Không đưa API key hoặc secret vào mã nguồn frontend.
- Kết quả AI chỉ là đề xuất, không tự động thay người dùng quyết định.
- Người dùng có thể chấp nhận, sửa, từ chối hoặc dùng quy trình thủ công.
- Khi thiếu dữ liệu hoặc không đủ độ tin cậy, giao diện cần báo “Không đủ dữ liệu để đưa ra đề xuất” hoặc “AI chưa chắc chắn”.

---

# 10. TRẠNG THÁI, KIỂM TRA HỢP LỆ VÀ KHẢ NĂNG SỬ DỤNG

## 10.1. Trạng thái giao diện

Các trạng thái được phân tích cho những màn hình chính:

- **Normal:** danh sách có dữ liệu.
- **Loading/Processing:** đang xử lý dữ liệu hoặc AI.
- **Empty:** không có ticket hoặc bộ lọc không trả về kết quả.
- **Error:** dữ liệu không tải được hoặc thao tác thất bại.
- **Success:** tạo/cập nhật thành công.
- **Pending:** ticket đang chờ phân công hoặc xác nhận.
- **Overdue:** ticket vượt SLA.
- **Completed:** yêu cầu đã hoàn tất.
- **Cancelled/Archived:** yêu cầu bị hủy hoặc dữ liệu được lưu trữ.

## 10.2. Validation

Form tạo ticket cần kiểm tra:

- Thiết bị bắt buộc phải được chọn.
- Vị trí không được bỏ trống.
- Mô tả lỗi phải có nội dung.
- Mức độ ưu tiên phải hợp lệ.
- Không gửi biểu mẫu khi dữ liệu không hợp lệ.

Các form quản trị cần kiểm tra trường bắt buộc, trạng thái và dữ liệu không trùng khi nhóm hoàn thiện kết nối LocalStorage.

## 10.3. Responsive và accessibility

Giao diện dùng Bootstrap grid kết hợp CSS riêng. Nhóm cần kiểm thử tại các kích thước 320px, 375px, 768px và 1280px; kiểm tra không tràn ngang, bảng có thể cuộn hoặc chuyển đổi phù hợp, nhãn input rõ ràng, ảnh có `alt` và phần tử có thể thao tác bằng bàn phím.

---

# 11. CÀI ĐẶT VÀ CHẠY BẢN DEMO

## 11.1. Yêu cầu

- Trình duyệt hiện đại hỗ trợ JavaScript và LocalStorage.
- VS Code.
- Live Server hoặc một web server tĩnh.
- Kết nối Internet nếu cần tải Bootstrap từ CDN.

## 11.2. Các bước chạy

1. Mở thư mục dự án bằng VS Code.
2. Cài hoặc sử dụng extension Live Server.
3. Mở `index.html` bằng Live Server.
4. Chọn “Bắt đầu sử dụng”, sau đó đi tới `pages/login.html`.
5. Mở các màn hình trong thư mục `pages/` để kiểm tra từng vai trò.
6. Dùng DevTools để kiểm tra LocalStorage và trạng thái responsive.

Không nên mở bằng cách nhấp đúp trực tiếp vào tệp HTML nếu trình duyệt hạn chế đường dẫn hoặc thao tác fetch cục bộ.

## 11.3. Ghi chú về dữ liệu

Website không cần khởi động API vì phiên bản hiện tại **chưa có API**. Dữ liệu mô phỏng được tạo bằng JavaScript và lưu trong LocalStorage. Đây là điểm khác biệt quan trọng so với các dự án sử dụng JSON Server hoặc REST API.

---

# 12. KIỂM THỬ VÀ MINH CHỨNG

## 12.1. Kịch bản kiểm thử chức năng

| Nhóm | Kịch bản | Kết quả mong đợi |
|---|---|---|
| Truy cập | Mở trang vào và đi tới đăng nhập | Liên kết hoạt động, không có dead link |
| Tạo ticket | Bỏ trống hoặc nhập thiếu trường | Hiển thị validation, không tạo bản ghi |
| Tạo ticket | Nhập dữ liệu hợp lệ | Tạo mã ticket và thông báo thành công |
| LocalStorage | Tạo ticket rồi tải lại trang | Ticket vẫn còn trong trình duyệt |
| Tìm kiếm | Nhập từ khóa không khớp | Hiển thị empty state |
| Lọc | Kết hợp từ khóa, trạng thái hoặc mức độ | Danh sách được lọc đúng |
| Chi tiết | Mở ticket theo tham số `id` | Hiển thị đúng ticket |
| Điều phối | Chọn ticket và kỹ thuật viên | Cập nhật người phụ trách/trạng thái theo luồng mô phỏng |
| SLA | Mở màn hình SLA | Hiển thị trong hạn, cảnh báo và quá hạn |
| AI | Chạy classifier/checklist/summary | Có input, processing, output và giải thích |
| AI lỗi | Thiếu mô tả hoặc dữ liệu không đủ | Báo không đủ dữ liệu, cho phép nhập thủ công/thử lại |
| Responsive | Kiểm tra 320px, 375px, 768px, desktop | Không vỡ bố cục hoặc tràn ngang bất thường |

## 12.2. Minh chứng theo barem

Nhóm cần bổ sung và liên kết các minh chứng thật trước khi nộp:

- Link GitHub và các branch `main`, `dev`, `feature/*`.
- Pull Request và nhận xét review của thành viên khác.
- Link Figma/Canva.
- Link Trello/Jira/Notion.
- Link triển khai công khai nếu có.
- Video OBS tương ứng với từng màn hình độc lập.
- Bảng liên kết `TASK → File → Branch → Commit → PR → OBS`.

Báo cáo không tự coi các minh chứng trên là đã hoàn thành nếu nhóm chưa cung cấp đường dẫn thật.

---

# 13. QUY TRÌNH NHÓM VÀ PHÂN CÔNG

## 13.1. Phân công

### SV1 – Người yêu cầu và giao diện dùng chung

- `requester-ticket-create.html`
- `requester-my-tickets.html`
- `requester-ticket-detail.html`
- Đăng nhập, đăng ký, khôi phục mật khẩu, hồ sơ, thông báo.
- Trách nhiệm chéo: design system, khả năng sử dụng và responsive.

### SV2 – Kỹ thuật viên và dữ liệu JavaScript

- `technician-work-queue.html`
- `technician-repair-detail.html`
- `technician-repair-history.html`
- Trách nhiệm chéo: sự kiện JavaScript, LocalStorage, mock data và trạng thái.

### SV3 – Quản lý, quản trị và tích hợp

- `manager-dispatch-board.html`
- `manager-sla-monitor.html`
- `manager-failure-insights.html`
- `admin-asset-management.html`
- `admin-issue-category-management.html`
- `admin-user-management.html`
- Trách nhiệm chéo: điều hướng, tích hợp, QA và phát hành.

Mỗi thành viên cần hoàn thành một lát cắt dọc gồm mockup, HTML, CSS, JavaScript, dữ liệu, responsive, branch, commit, PR, review và OBS; không chỉ phụ trách riêng một loại công việc.

## 13.2. Quy trình Git đề xuất

```text
Task trên Trello/Jira/Notion
        ↓
Tạo feature branch
        ↓
Viết HTML/CSS/JavaScript
        ↓
Commit theo Conventional Commits
        ↓
Push branch
        ↓
Tạo Pull Request
        ↓
Thành viên khác review
        ↓
Merge vào dev
        ↓
Kiểm thử tích hợp và merge main
```

Ví dụ commit:

- `feat: add requester ticket form`
- `feat: save ticket to local storage`
- `feat: add technician repair checklist`
- `feat: add manager sla monitor`
- `fix: improve mobile ticket layout`
- `docs: update screen inventory`

---

# 14. ĐÁNH GIÁ HIỆN TRẠNG, HẠN CHẾ VÀ HƯỚNG PHÁT TRIỂN

## 14.1. Kết quả đã thực hiện

- Có trang giới thiệu FixFlow và điều hướng vào sản phẩm.
- Có bốn nhóm vai trò theo đề tài.
- Có hệ thống màn hình requester, technician, manager và admin.
- Có Bootstrap, CSS thuần và responsive breakpoint.
- Có dữ liệu ticket/asset mẫu.
- Có tạo ticket, validation, tìm kiếm và lọc.
- Có đọc chi tiết ticket theo tham số URL.
- Có lưu ticket và thiết bị bằng LocalStorage ở các luồng đã triển khai.
- Có ba ý tưởng AI đúng ngữ cảnh bảo trì.
- Có tài liệu screen inventory, project proposal, hướng dẫn Git/OBS và kiểm tra khoảng trống theo barem.

## 14.2. Hạn chế hiện tại

- Chưa có API hoặc backend thật.
- LocalStorage chỉ lưu dữ liệu trên từng trình duyệt, không đồng bộ nhiều người dùng.
- Phân quyền mới ở mức giao diện mô phỏng, chưa có xác thực máy chủ.
- Một số thao tác CRUD của quản lý/quản trị còn cần hoàn thiện kết nối dữ liệu.
- Luồng nhận việc, cập nhật sửa chữa, hủy ticket và đánh giá cần được nối đầy đủ hơn.
- AI hiện là luật JavaScript, chưa sử dụng mô hình học máy hoặc LLM.
- Chưa có test tự động, CI/CD, logging tập trung và audit log.
- Các liên kết Figma/Canva, Trello, deploy, PR và OBS cần được nhóm bổ sung bằng minh chứng thật.

## 14.3. Hướng phát triển

1. Xây dựng REST API bằng Node.js/Express hoặc công nghệ phù hợp.
2. Chuyển dữ liệu sang PostgreSQL/MySQL hoặc MongoDB.
3. Bổ sung JWT, hash mật khẩu và RBAC ở backend.
4. Hoàn thiện vòng đời ticket, assignment, checklist, SLA và activity log.
5. Bổ sung upload ảnh lỗi và lưu tệp an toàn.
6. Đồng bộ dữ liệu theo thời gian thực giữa người yêu cầu, kỹ thuật viên và quản lý.
7. Tích hợp AI an toàn qua server-side proxy, có fallback khi API không khả dụng.
8. Bổ sung biểu đồ SLA, báo cáo CSV/JSON và lịch sử thay đổi.
9. Bổ sung unit test, integration test, end-to-end test và kiểm thử accessibility.
10. Triển khai bản production có HTTPS, giám sát lỗi và sao lưu dữ liệu.

---

# 15. KẾT LUẬN

FixFlow đã chuyển bài toán tiếp nhận và điều phối bảo trì thiết bị thành một nguyên mẫu frontend có nhiều vai trò, luồng ticket, trạng thái nghiệp vụ, tìm kiếm/lọc, validation và các trải nghiệm AI mô phỏng theo lĩnh vực. Sản phẩm giúp minh họa cách HTML, CSS, Bootstrap, JavaScript DOM và LocalStorage có thể phối hợp để tạo một website tĩnh có tính tương tác thay vì chỉ là các trang giao diện rời rạc.

Trong phạm vi hiện tại, nhóm xác định rõ sản phẩm **chưa có API và backend thật**. Vì vậy, LocalStorage và dữ liệu seed chỉ được sử dụng để trình diễn luồng nghiệp vụ trên cùng trình duyệt, không được mô tả như cơ sở dữ liệu hoặc API production. Đây là cơ sở để nhóm tiếp tục phát triển phiên bản sau với REST API, cơ sở dữ liệu, xác thực, phân quyền và đồng bộ nhiều người dùng.

Để hoàn thiện hồ sơ theo barem CSE122, nhóm cần tiếp tục bổ sung các minh chứng Figma/Canva, task board, branch/commit/PR/review, bản deploy và video OBS tương ứng với bảng kiểm kê màn hình.

---

# PHỤ LỤC A – CẤU TRÚC REPO

```text
project-root/
├── index.html
├── README.md
├── assets/
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── api.js
│   ├── main.js
│   └── modules/
├── pages/
├── design/
└── docs/
```

# PHỤ LỤC B – TÀI LIỆU LIÊN QUAN

- `docs/project-proposal.md`: đề cương và phạm vi dự án.
- `docs/screen-inventory.md`: bảng truy vết màn hình 12 cột.
- `docs/screen-list.md`: danh sách màn hình MVP và phân công.
- `docs/team-work-and-obs.md`: phân công, kịch bản demo và OBS.
- `docs/README-MVP.md`: tình trạng chức năng MVP.
- `docs/assessment-gap.md`: đối chiếu với barem và việc cần hoàn thiện.
- `docs/ai-usage-report.md`: khai báo sử dụng công cụ AI.

# PHỤ LỤC C – KHAI BÁO SỬ DỤNG AI

Trong quá trình chuẩn bị dự án và tài liệu, nhóm có thể sử dụng công cụ AI để:

- phân tích đề bài và barem;
- gợi ý sitemap, user flow và screen inventory;
- gợi ý khung HTML/Bootstrap, CSS và JavaScript;
- giải thích LocalStorage, validation và quy trình Git/OBS;
- hỗ trợ biên tập báo cáo.

Sinh viên có trách nhiệm kiểm tra lại mã nguồn bằng cách chạy website, kiểm tra DevTools, thử form, thử LocalStorage, kiểm tra responsive và đối chiếu với barem. Các tính năng Ticket Classifier, Repair Checklist AI và Failure Pattern Summary trong sản phẩm là **AI mock bằng JavaScript**, chưa gọi API AI thật. Nhóm không đưa API key hoặc thông tin bí mật vào frontend hay kho mã nguồn.
