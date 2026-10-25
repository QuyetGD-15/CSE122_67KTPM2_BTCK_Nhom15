# Báo cáo sử dụng AI - FixFlow

Tài liệu này phải được nhóm cập nhật trung thực theo từng thành viên.

## 1. Công cụ AI đã dùng

- Chatbox / GPT 5.6 Sol: hỗ trợ phân tích đề bài, lập bảng màn hình, gợi ý HTML/CSS/JavaScript và tài liệu.
- Công cụ khác: `GHI TÊN HOẶC GHI Không dùng`.

## 2. Prompt chính đã dùng

Ví dụ:

- Phân tích đề bài FixFlow và lập danh sách màn hình.
- Tạo wireframe đơn giản bằng HTML/Bootstrap.
- Giải thích cách làm LocalStorage và validation cho sinh viên mới học.
- Kiểm tra cấu trúc Git branch/PR/OBS theo barem.

Nhóm phải bổ sung prompt thực tế của mình nếu dùng công cụ khác.

## 3. Phần AI hỗ trợ sinh

| Phần | AI hỗ trợ | Sinh viên kiểm tra/chỉnh sửa |
|---|---|---|
| Sitemap và screen inventory | Gợi ý ban đầu | Đối chiếu đề và đổi tên file |
| HTML Bootstrap | Tạo khung ban đầu | Kiểm tra link, semantic, responsive |
| CSS | Gợi ý token/breakpoint | Sửa màu, mobile, lỗi bố cục |
| JavaScript | Gợi ý event/localStorage | Tự chạy thử, sửa nghiệp vụ và validation |
| Tài liệu Git/OBS | Gợi ý quy trình | Đối chiếu lịch sử Git thật |

## 4. Lỗi AI hoặc phần chưa đúng

Nhóm phải ghi ví dụ thật, không bỏ trống. Ví dụ ban đầu giao diện dùng `pages/index.html`, nhưng sau khi đối chiếu cấu trúc đã chuyển trang vào thành `/index.html` và dashboard thành `pages/dashboard.html`.

Ví dụ khác: bản đầu chưa nối đầy đủ CRUD và chưa có localStorage liên thông giữa role; nhóm phải tự hoàn thiện và kiểm chứng.

## 5. Cách kiểm chứng

- Chạy Live Server.
- Mở DevTools Console.
- Test form trống/sai.
- Tạo dữ liệu rồi F5.
- Mở trang role khác kiểm tra dữ liệu.
- Test mobile 320/375/768/1280.
- Review code bởi thành viên khác.
- Đối chiếu với PDF barem.

## 6. Tính năng AI mock hay API thật

Hiện tại:

- AI-1 Ticket Classifier: mock JavaScript.
- AI-2 Repair Checklist: mock JavaScript.
- AI-3 Failure Pattern Summary: mock JavaScript.
- Chưa dùng API LLM thật.

Không đưa API key thật vào frontend hoặc GitHub.

## 7. Cam kết của từng sinh viên

| Sinh viên | Màn hình | Phần tự viết | PR | OBS |
|---|---|---|---|---|
| SV1 | Requester | HTML + CSS + JS + data | | |
| SV2 | Technician | HTML + CSS + JS + data | | |
| SV3 | Manager/Admin | HTML + CSS + JS + integration | | |
