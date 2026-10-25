# Đồng bộ repo cho cả 3 sinh viên

## Mốc nền chung

SV3 là người tạo commit nền sau khi nhóm thống nhất. Không ai bắt đầu từ file cũ trong máy cá nhân.

## Nếu chưa clone repo

```powershell
git clone <LINK_GITHUB_REPO>
cd CSE122_67KTPM2_BTCK_Nhom15
git checkout dev
git pull origin dev
```

## Nếu đã có repo trên máy

Trước khi làm:

```powershell
git status
git checkout dev
git pull origin dev
```

Nếu `git status` có file chưa commit, không chạy reset bừa. Hãy commit phần cá nhân hoặc sao lưu trước.

## Tạo branch đúng người

### SV1

```powershell
git checkout -b feature/sv1-requester
git push -u origin feature/sv1-requester
```

### SV2

```powershell
git checkout -b feature/sv2-technician
git push -u origin feature/sv2-technician
```

### SV3

```powershell
git checkout -b feature/sv3-manager-admin
git push -u origin feature/sv3-manager-admin
```

Chỉ tạo branch sau khi đã cập nhật `dev`.

## File được phép sửa

### SV1

```text
pages/requester-ticket-create.html
pages/requester-my-tickets.html
pages/requester-ticket-detail.html
js/modules/requester.js
css/parts/sv1-requester.css
```

### SV2

```text
pages/technician-work-queue.html
pages/technician-repair-detail.html
pages/technician-repair-history.html
js/modules/technician.js
css/parts/sv2-technician.css
```

### SV3

```text
pages/manager-dispatch-board.html
pages/manager-sla-monitor.html
pages/admin-asset-management.html
js/modules/manager.js
css/parts/sv3-manager-admin.css
```

## File dùng chung

```text
js/app.js
js/api.js
js/main.js
css/style.css
css/responsive.css
```

Không tự ý sửa file dùng chung. Nếu bắt buộc sửa:

- SV1 chỉ sửa vùng comment `[SV1]`.
- SV2 chỉ sửa vùng comment `[SV2]`.
- SV3 chỉ sửa vùng comment `[SV3]`.
- Vùng `SHARED CORE` chỉ sửa khi cả nhóm đồng ý.
- Ghi rõ trong Pull Request.

## CSS riêng

Dùng file riêng:

```text
css/parts/sv1-requester.css
css/parts/sv2-technician.css
css/parts/sv3-manager-admin.css
```

Nếu HTML của bạn cần class riêng, đặt tên có tiền tố:

```text
.requester-...
.technician-...
.manager-...
.admin-...
```

Không đặt tên quá chung như `.box`, `.item`, `.active2` vì dễ đụng code.

## JavaScript riêng

Dùng module:

```text
js/modules/requester.js
js/modules/technician.js
js/modules/manager.js
```

Hàm dùng chung để trong `js/api.js`, ví dụ:

```javascript
FixFlowAPI.read('fixflow_tickets', []);
FixFlowAPI.write('fixflow_tickets', tickets);
```

Không viết ba hàm `saveTickets()` khác nhau ở ba file.

## Cách làm một task

1. Kéo thẻ Trello sang `ĐANG LÀM`.
2. Cập nhật branch.
3. Sửa file thuộc quyền mình.
4. Chạy Live Server.
5. Test chức năng và mobile.
6. Kiểm tra `git diff`.
7. Commit nhỏ, tên rõ.
8. Push branch.
9. Kéo thẻ sang `CHỜ DUYỆT`.
10. Tạo Pull Request vào `dev`.
11. Người khác review.
12. Sửa feedback nếu có.
13. Merge.
14. Cập nhật link PR/commit/OBS vào Trello.
15. Chỉ khi đủ bằng chứng mới chuyển `ĐÃ XONG`.

## Lệnh commit và push

```powershell
git status
git diff --check
git add pages/requester-ticket-create.html js/modules/requester.js css/parts/sv1-requester.css
git commit -m "feat: improve requester ticket creation"
git push origin feature/sv1-requester
```

Thay branch và file tương ứng với SV2/SV3.

## Cập nhật branch sau khi dev có code mới

```powershell
git fetch origin
git checkout dev
git pull origin dev
git checkout feature/sv1-requester
git merge origin/dev
```

Nếu có conflict ở file dùng chung, dừng lại và báo nhóm. Không xóa một bên theo cảm tính.

## Quy ước review chéo

```text
SV1 review SV2
SV2 review SV3
SV3 review SV1
```

Reviewer phải kiểm tra: chức năng, link, mobile, validation, trạng thái, file sở hữu và không có conflict.
