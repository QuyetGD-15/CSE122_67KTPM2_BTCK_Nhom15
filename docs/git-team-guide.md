# Hướng dẫn làm việc nhóm bằng Git/GitHub cho FixFlow

Tài liệu này dành cho nhóm 3 sinh viên. Hãy làm đúng thứ tự, không cần biết Git nâng cao.

## 1. Đề bài yêu cầu điều gì?

Đề bài yêu cầu nhóm chứng minh được chuỗi:

```text
Task trên Trello/Jira/Notion
→ branch riêng
→ code
→ commit có tên rõ ràng
→ push lên GitHub
→ Pull Request
→ thành viên khác review
→ merge vào dev
→ test tích hợp
→ merge main
→ video OBS
```

Không chỉ làm xong HTML rồi gửi file qua Zalo. File gửi cho nhau chỉ để tham khảo; bản chính thức phải nằm trên GitHub qua branch và Pull Request.

## 2. Quy tắc quan trọng trước khi chia việc

- Không sửa trực tiếp trên `main`.
- Không sửa trực tiếp trên `dev`, trừ người tích hợp khi merge PR.
- Mỗi sinh viên làm trên branch riêng.
- Trước khi code phải cập nhật branch từ `dev`.
- Không tự ý sửa màn hình do bạn khác phụ trách.
- Nếu cần sửa file dùng chung `css/style.css` hoặc `js/app.js`, phải báo trước trong nhóm.
- Mỗi PR nên tập trung vào một phần rõ ràng.
- Mỗi PR phải có một người khác review.

## 3. Phân công đúng 3 sinh viên

Tên bên dưới là SV1, SV2, SV3. Nhóm thay bằng tên thật trong Trello và GitHub.

### SV1 - Người yêu cầu

Ba màn hình cốt lõi:

```text
pages/requester-ticket-create.html
pages/requester-my-tickets.html
pages/requester-ticket-detail.html
```

SV1 chịu trách nhiệm:

- Chọn thiết bị rồi tự điền phòng.
- Validation form.
- Tạo ticket và lưu LocalStorage.
- Tìm kiếm/lọc danh sách ticket.
- Xem chi tiết theo mã ticket.
- Timeline, phản hồi, hủy ticket, đánh giá sau hoàn tất.
- Kiểm tra giao diện mobile của phần requester.

File thường được sửa:

```text
pages/requester-ticket-create.html
pages/requester-my-tickets.html
pages/requester-ticket-detail.html
js/app.js                 # chỉ sửa phần requester hoặc báo nhóm trước
css/style.css             # chỉ sửa style chung khi cần
```

SV1 hỗ trợ thêm giao diện dùng chung:

```text
pages/register.html
pages/forgot-password.html
pages/profile.html
pages/notifications.html
```

### SV2 - Kỹ thuật viên

Ba màn hình cốt lõi:

```text
pages/technician-work-queue.html
pages/technician-repair-detail.html
pages/technician-repair-history.html
```

SV2 chịu trách nhiệm:

- Hiển thị hàng đợi công việc.
- Tìm kiếm/lọc theo trạng thái, ưu tiên, SLA.
- Nhận ticket.
- Cập nhật trạng thái sửa chữa.
- Checklist sửa chữa.
- Vật tư, ghi chú và ảnh bằng chứng.
- Repair Checklist AI.
- Lịch sử sửa chữa.
- Kiểm tra mobile của phần technician.

File thường được sửa:

```text
pages/technician-work-queue.html
pages/technician-repair-detail.html
pages/technician-repair-history.html
js/app.js                 # chỉ sửa phần technician hoặc báo nhóm trước
assets/data/tickets.json  # nếu cần cập nhật dữ liệu mẫu
```

### SV3 - Quản lý, quản trị và tích hợp

Ba màn hình cốt lõi:

```text
pages/manager-dispatch-board.html
pages/manager-sla-monitor.html
pages/admin-asset-management.html
```

SV3 chịu trách nhiệm:

- Xem ticket chưa phân công.
- Gán ticket cho kỹ thuật viên.
- Theo dõi SLA.
- Cảnh báo sắp quá hạn/quá hạn.
- Thêm, sửa, lưu trữ thiết bị.
- Tích hợp navigation.
- Kiểm tra toàn bộ hệ thống.
- Quản lý PR và merge vào `dev`/`main`.

File thường được sửa:

```text
pages/manager-dispatch-board.html
pages/manager-sla-monitor.html
pages/manager-failure-insights.html
pages/admin-asset-management.html
pages/admin-issue-category-management.html
pages/admin-user-management.html
index.html
pages/dashboard.html
```

SV3 không có nghĩa là làm một mình toàn bộ giao diện phụ. SV3 là người tích hợp; SV1/SV2 vẫn phải hỗ trợ review và sửa lỗi khi giao diện liên quan đến phần mình.

## 4. Tên branch phải đặt thế nào?

Đề bài cho phép dạng:

```text
feature/<feature-name>
fix/<bug-name>
docs/<document-name>
```

Tên branch đề xuất cho nhóm:

```text
feature/sv1-requester
feature/sv2-technician
feature/sv3-manager-admin
```

Nếu muốn tách nhỏ hơn:

```text
feature/sv1-ticket-create
feature/sv1-ticket-list
feature/sv2-work-queue
feature/sv2-repair-detail
feature/sv3-dispatch-board
feature/sv3-asset-crud
```

Nên dùng branch nhỏ khi nhóm đã quen Git. Nếu nhóm mới học, dùng 3 branch chính trước.

## 5. Lần đầu thiết lập branch

Một người có quyền quản lý repo làm bước này một lần trên máy của mình:

```powershell
git checkout dev
git pull origin dev
git push -u origin dev
```

Sau đó mỗi sinh viên làm trên máy của mình.

### SV1 tạo branch

```powershell
git checkout dev
git pull origin dev
git checkout -b feature/sv1-requester
git push -u origin feature/sv1-requester
```

### SV2 tạo branch

```powershell
git checkout dev
git pull origin dev
git checkout -b feature/sv2-technician
git push -u origin feature/sv2-technician
```

### SV3 tạo branch

```powershell
git checkout dev
git pull origin dev
git checkout -b feature/sv3-manager-admin
git push -u origin feature/sv3-manager-admin
```

Giải thích:

- `checkout dev`: chuyển về nhánh dev.
- `pull`: lấy code mới nhất.
- `checkout -b ...`: tạo nhánh mới và chuyển sang nhánh đó.
- `push -u origin ...`: đưa branch lên GitHub.

## 6. Quy trình mỗi lần sửa code

Ví dụ SV1 làm màn hình tạo ticket:

```powershell
git checkout feature/sv1-requester
git pull origin dev
```

Sau đó mở project bằng VS Code và sửa file. Chạy thử bằng Live Server.

Kiểm tra trạng thái:

```powershell
git status
```

Xem những file đã thay đổi:

```powershell
git diff --name-only
```

Thêm file vào commit:

```powershell
git add pages/requester-ticket-create.html js/app.js css/style.css
```

Commit:

```powershell
git commit -m "feat: improve requester ticket creation"
```

Đẩy lên GitHub:

```powershell
git push origin feature/sv1-requester
```

Lưu ý: nếu nhóm đã cấu hình GitHub bắt buộc trailer theo quy định của project thì thêm trailer Co-authored-by theo hướng dẫn của người quản lý repo. Không dùng commit message kiểu `update`, `done`, `final`.

## 7. Pull Request là gì?

Pull Request, viết tắt PR, là lời đề nghị:

> “Tôi đã làm xong phần của mình, hãy xem lại rồi cho phép ghép vào dev.”

Sau khi push branch:

1. Mở repo trên GitHub.
2. Chọn **Compare & pull request**.
3. Chọn:
   - Base: `dev`
   - Compare: branch của mình, ví dụ `feature/sv1-requester`
4. Đặt tiêu đề:

```text
feat: complete requester ticket flow
```

5. Mô tả PR:

```text
## Đã làm
- Hoàn thiện form tạo ticket
- Chọn thiết bị và tự điền phòng
- Thêm validation
- Lưu ticket vào LocalStorage

## Đã kiểm tra
- Tạo ticket thành công
- Bỏ trống form
- Test màn hình mobile

## File chính
- pages/requester-ticket-create.html
- pages/requester-my-tickets.html
- js/app.js
```

6. Chọn một người khác làm reviewer.
7. Không tự merge PR của mình ngay nếu chưa được review.

## 8. Review code đơn giản như thế nào?

Reviewer mở PR và kiểm tra:

- Trang có mở được không?
- Link có bị hỏng không?
- Có lỗi console không?
- Form bỏ trống có báo lỗi không?
- Nút chính có hoạt động không?
- Dữ liệu mới có lưu/hiển thị không?
- Mobile có bị tràn ngang không?
- Có sửa nhầm file của người khác không?
- Tên commit và mô tả PR có rõ không?

Nếu đạt, reviewer bình luận:

```text
Đã kiểm tra luồng chính, validation và mobile. Có thể merge.
```

Nếu chưa đạt:

```text
Cần sửa: mobile bị tràn bảng ở màn hình 375px và nút Lưu chưa cập nhật danh sách.
```

## 9. Merge vào dev

Sau khi reviewer đồng ý:

1. Người quản lý repo bấm **Merge pull request** trên GitHub.
2. Chọn merge vào `dev`.
3. Không merge thẳng vào `main` ở bước này.
4. Các thành viên cập nhật code mới:

```powershell
git checkout dev
git pull origin dev
```

Sau mỗi lần merge, cả nhóm phải test lại luồng có liên quan.

## 10. Khi branch bị cũ hoặc bị xung đột

Trước khi mở PR hoặc trước khi tiếp tục làm:

```powershell
git checkout feature/sv1-requester
git fetch origin
git merge origin/dev
```

Nếu có conflict:

1. VS Code sẽ đánh dấu phần xung đột.
2. Giữ lại phần đúng của cả hai bên.
3. Xóa các dấu:

```text
<<<<<<<
=======
>>>>>>>
```

4. Lưu file.
5. Chạy test.
6. Gõ:

```powershell
git add .
git commit -m "fix: resolve merge conflict"
git push origin feature/sv1-requester
```

Nếu nhóm chưa hiểu conflict, không tự xóa bừa. Gửi ảnh conflict vào nhóm để SV3 hỗ trợ.

## 11. Merge dev vào main khi nào?

Chỉ merge `dev` vào `main` khi:

- 3 luồng chính đều chạy được.
- Không có lỗi link.
- Đã test desktop và mobile.
- Đã review đủ 3 phần.
- Đã có video OBS.
- README, screen-list và báo cáo AI đã cập nhật.

SV3 tạo PR:

```text
base: main
compare: dev
```

Tiêu đề:

```text
release: FixFlow MVP
```

Không làm ngược lại từ `main` vào từng branch cá nhân trong lúc đang phát triển.

## 12. Mỗi người cần quay video những file nào?

### SV1

```text
SV1-01-requester-ticket-create.mp4
SV1-02-requester-my-tickets.mp4
SV1-03-requester-ticket-detail.mp4
```

Trong mỗi video mở đúng file HTML, sau đó có thể mở thêm `js/app.js` để giải thích logic.

### SV2

```text
SV2-01-technician-work-queue.mp4
SV2-02-technician-repair-detail.mp4
SV2-03-technician-repair-history.mp4
```

### SV3

```text
SV3-01-manager-dispatch-board.mp4
SV3-02-manager-sla-monitor.mp4
SV3-03-admin-asset-management.mp4
```

Các trang phụ như dashboard, login, failure insights, user management vẫn phải làm đủ, nhưng có thể quay bổ sung sau hoặc phân vào video tích hợp nếu giảng viên chấp nhận. Bảng kiểm kê cuối cùng phải ghi đầy đủ video tương ứng.

## 13. Mẫu kịch bản một video

Ví dụ SV1 quay `requester-ticket-create.html`:

1. Bật OBS, bật webcam nếu giảng viên yêu cầu.
2. Nói tên, vai trò và mã task.
3. Mở bản thiết kế của màn hình.
4. Mở `pages/requester-ticket-create.html`.
5. Chỉ rõ Bootstrap `container`, `row`, `col-md-6`, `form-control`, `btn`.
6. Chọn thiết bị, chứng minh phòng tự điền.
7. Bấm AI Classifier, chờ loading, giải thích kết quả.
8. Bỏ trống một trường, chứng minh validation.
9. Tạo ticket thành công.
10. Mở My Tickets, chứng minh ticket mới xuất hiện.
11. Mở `js/app.js`, chỉ hàm `initCreateForm`.
12. Nói branch, commit và PR.
13. Thực hiện một thay đổi nhỏ trực tiếp, ví dụ đổi nội dung placeholder, chạy lại và commit.

## 14. Trello/Jira/Notion nên có các task nào?

```text
TASK-01 Chốt cấu trúc project và design system - SV3
TASK-02 Hoàn thiện requester create - SV1
TASK-03 Hoàn thiện requester list/detail - SV1
TASK-04 Hoàn thiện technician work queue - SV2
TASK-05 Hoàn thiện technician repair detail - SV2
TASK-06 Hoàn thiện technician history - SV2
TASK-07 Hoàn thiện manager dispatch - SV3
TASK-08 Hoàn thiện manager SLA - SV3
TASK-09 Hoàn thiện admin asset CRUD - SV3
TASK-10 Tích hợp LocalStorage và test chéo - SV1 + SV2 + SV3
TASK-11 Test responsive và accessibility - SV1 + reviewer
TASK-12 AI states và fallback - SV2 + SV3
TASK-13 Quay OBS 9 màn hình cốt lõi - cả nhóm
TASK-14 Cập nhật README, screen-list, AI report - SV3
TASK-15 Release dev vào main - SV3
```

Mỗi task nên có: người làm, file, branch, PR, reviewer, video OBS và trạng thái.

## 15. Quy tắc gửi file cho hai bạn

Có thể gửi cho bạn bè các file màn hình để họ xem trước, nhưng cách làm chính thức là:

- Gửi tên 3 file được giao.
- Gửi link repo GitHub.
- Gửi lệnh tạo branch.
- Họ sửa trên branch riêng.
- Họ push branch.
- Họ tạo PR vào `dev`.
- Bạn review rồi mới merge.

Không nên gửi file qua lại rồi chép đè thủ công, vì sẽ mất lịch sử ai làm gì và dễ làm hỏng code của nhau.
