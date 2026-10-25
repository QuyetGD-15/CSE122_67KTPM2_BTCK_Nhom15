# FixFlow - Project Proposal

## 1. Thông tin

- Mã đề tài: BTL-15
- Tên sản phẩm: FixFlow - Điều phối yêu cầu bảo trì thiết bị
- Học phần: Phát triển ứng dụng Web cơ bản - CSE122
- Nhóm: 3 sinh viên
- Link GitHub: `DÁN LINK REPO VÀO ĐÂY`
- Link Deploy: `DÁN LINK GITHUB PAGES/VERCEL/NETLIFY VÀO ĐÂY`
- Link Figma/Canva: `DÁN LINK THIẾT KẾ CÔNG KHAI VÀO ĐÂY`
- Link Trello/Jira/Notion: `DÁN LINK BẢNG CÔNG VIỆC VÀO ĐÂY`

## 2. Ngữ cảnh

Trong trường học/doanh nghiệp, yêu cầu sửa chữa thường gửi bằng chat hoặc điện thoại. Người quản lý thiếu lịch sử, kỹ thuật viên khó nhận việc phù hợp và người gửi không biết ticket đang ở trạng thái nào.

## 3. Vấn đề

- P1: Ticket thiếu thông tin chuẩn.
- P2: Khó phân công đúng kỹ thuật viên.
- P3: Người gửi không biết trạng thái.
- P4: Thiết bị lỗi lặp lại khó nhận biết.

## 4. Mục tiêu

- O1: Tạo luồng gửi và xử lý ticket rõ ràng.
- O2: Có đủ role Người yêu cầu, Kỹ thuật viên, Quản lý bảo trì, Quản trị viên.
- O3: CRUD/Cancel/Archive đúng vòng đời nghiệp vụ.
- O4: Dùng DOM, event, validation, search/filter/sort.
- O5: Dùng JSON và LocalStorage để dữ liệu liên thông, giữ sau F5.
- O6: Có 3 AI feature có giải thích và quyền kiểm soát.
- O7: Có quy trình Task → Branch → Commit → PR → Review → Merge → OBS.

## 5. Role và mục tiêu

| Role | Mục tiêu | Nhiệm vụ |
|---|---|---|
| Người yêu cầu | Gửi và theo dõi lỗi | Chọn thiết bị, tạo ticket, xem SLA, phản hồi, hủy/đánh giá |
| Kỹ thuật viên | Nhận và sửa ticket | Lọc hàng đợi, nhận việc, checklist, ghi chú, hoàn tất |
| Quản lý bảo trì | Điều phối và kiểm soát SLA | Gán người, theo dõi quá hạn, xem insight |
| Quản trị viên | Quản lý nền dữ liệu | CRUD thiết bị, nhóm lỗi, người dùng |

## 6. User flow đầu-cuối

```text
Index/Đăng nhập
→ Người yêu cầu chọn thiết bị
→ Tạo ticket + AI Classifier
→ Lưu ticket vào LocalStorage
→ Kỹ thuật viên thấy ticket trong Work Queue
→ Nhận việc + AI Repair Checklist
→ Cập nhật sửa chữa/hoàn tất
→ Quản lý theo dõi SLA và phân công
→ AI Failure Insights tóm tắt lỗi lặp
→ Người yêu cầu nhận thông báo và đánh giá
```

## 7. Entity

- `assets`: thiết bị, phòng, nhóm, trạng thái.
- `tickets`: yêu cầu, mô tả, mức độ, trạng thái, người phụ trách.
- `users`: tài khoản và role.
- `assignments`: quan hệ ticket - kỹ thuật viên.
- `checklists`: các bước sửa chữa.
- `slaEvents`: mốc thời gian SLA.
- `activityLogs`: nhật ký thay đổi.
- `aiSuggestions`: kết quả AI, độ tin cậy, lý do, trạng thái áp dụng.

## 8. Công nghệ

HTML5 semantic, Bootstrap 5 CDN, CSS3 variables, JavaScript thuần, JSON, Fetch, LocalStorage. Không sử dụng framework phức tạp.

## 9. Definition of Done

Một màn hình chỉ đánh dấu DONE khi đủ 14 mục trong `docs/screen-dod.md`.
