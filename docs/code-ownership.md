# Quy ước sở hữu code FixFlow

## Mục tiêu

Ba thành viên cùng làm trên một repo nhưng không chép đè code của nhau. Mỗi người có:

1. Ba màn hình chính.
2. Một branch riêng.
3. Một vùng CSS riêng.
4. Một module JavaScript riêng.
5. Một người review khác.

## Branch cố định

```text
main                         # bản nộp cuối, không code trực tiếp
dev                          # bản tích hợp của nhóm
feature/sv1-requester        # SV1
feature/sv2-technician       # SV2
feature/sv3-manager-admin    # SV3
```

## Vùng file của từng người

### SV1 - Requester

```text
pages/requester-ticket-create.html
pages/requester-my-tickets.html
pages/requester-ticket-detail.html
js/modules/requester.js
css/parts/sv1-requester.css
```

SV1 có thể sửa vùng `[SV1]` trong:

```text
js/app.js
css/style.css
```

### SV2 - Technician

```text
pages/technician-work-queue.html
pages/technician-repair-detail.html
pages/technician-repair-history.html
js/modules/technician.js
css/parts/sv2-technician.css
```

SV2 có thể sửa vùng `[SV2]` trong file dùng chung.

### SV3 - Manager/Admin

```text
pages/manager-dispatch-board.html
pages/manager-sla-monitor.html
pages/admin-asset-management.html
js/modules/manager.js
css/parts/sv3-manager-admin.css
```

SV3 có thể sửa vùng `[SV3]` trong file dùng chung.

## File dùng chung - không tự ý sửa

```text
js/app.js
js/api.js
js/main.js
css/style.css
css/responsive.css
```

Nếu bắt buộc sửa file dùng chung:

1. Ghi vào comment commit phần đang sửa.
2. Báo nhóm trước.
3. Chỉ sửa trong vùng của mình.
4. Không xóa code của người khác.
5. Chạy lại toàn bộ luồng trước khi push.

## Ký hiệu vùng trong file dùng chung

```javascript
// ===== SHARED CORE - SV3 quản lý, cả nhóm review =====

// ===== [SV1] REQUESTER AREA - SV1 sở hữu =====

// ===== [SV2] TECHNICIAN AREA - SV2 sở hữu =====

// ===== [SV3] MANAGER / ADMIN AREA - SV3 sở hữu =====
```

CSS dùng cùng quy tắc:

```css
/* ===== SHARED TOKENS - chỉ đổi khi cả nhóm thống nhất ===== */
/* ===== [SV1] REQUESTER COMPONENTS ===== */
/* ===== [SV2] TECHNICIAN COMPONENTS ===== */
/* ===== [SV3] MANAGER / ADMIN COMPONENTS ===== */
```

## Quy tắc sửa file HTML

- SV1 không sửa HTML chính của SV2/SV3.
- SV2 không sửa HTML chính của SV1/SV3.
- SV3 không sửa HTML chính của SV1/SV2.
- Sửa navigation dùng chung phải báo nhóm và ghi trong PR.
- Không đổi tên file sau khi đã ghi vào screen inventory nếu chưa thống nhất.

## Quy tắc sửa JavaScript

- Hàm dùng chung đặt trong `js/api.js`, `js/main.js`.
- Logic requester đặt trong `js/modules/requester.js`.
- Logic technician đặt trong `js/modules/technician.js`.
- Logic manager/admin đặt trong `js/modules/manager.js`.
- Không tạo lại hàm lưu LocalStorage ở nhiều file.
- Dùng chung khóa dữ liệu:

```text
fixflow_tickets
fixflow_assets
fixflow_users
fixflow_categories
fixflow_activity_logs
```

## Quy tắc CSS

- Màu và spacing chung sửa ở `:root` trong `css/style.css`.
- CSS responsive chung sửa ở `css/responsive.css`.
- CSS riêng requester ở `css/parts/sv1-requester.css`.
- CSS riêng technician ở `css/parts/sv2-technician.css`.
- CSS riêng manager/admin ở `css/parts/sv3-manager-admin.css`.
- Không viết màu hex mới trong HTML nếu token đã có.
- Không dùng `!important` trừ trường hợp giải thích rõ trong PR.

## Review chéo

```text
SV1 review SV2
SV2 review SV3
SV3 review SV1
```

Người review phải kiểm tra ít nhất:

- Chức năng chính.
- Validation.
- Empty/loading/error.
- Mobile 320/375px.
- Link không hỏng.
- Không sửa nhầm vùng sở hữu.
- Commit/PR rõ ràng.

## Khi có conflict

Không chọn bừa `Accept Current` hoặc `Accept Incoming`. Đọc cả hai đoạn, giữ logic của cả hai nếu cần, chạy test rồi mới commit:

```powershell
git add .
git commit -m "fix: resolve shared file conflict"
git push
```
