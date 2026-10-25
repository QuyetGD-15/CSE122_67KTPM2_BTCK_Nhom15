# Đối chiếu FixFlow với barem chấm điểm CSE122

## Kết luận nhanh

Hiện tại dự án **chưa đủ 5 Gatekeepers** để bảo vệ. Phần code giao diện đã có nền tảng, nhưng nhóm còn thiếu minh chứng và một số chức năng thực chất.

| Gatekeeper | Hiện trạng | Việc bắt buộc |
|---|---|---|
| ĐK1 Thiết kế trước code | Thiếu link Figma/Canva công khai, thiếu User Flow chính thức | Tạo Figma/Canva, thêm link vào README và docs/project-proposal.md |
| ĐK2 GitHub hợp lệ | Có main/dev, chưa có branch/PR/review của cả 3 SV | Mỗi SV tạo feature branch, có commit, PR, review và merge vào dev |
| ĐK3 Deploy | Chưa có link deploy | Deploy GitHub Pages/Vercel/Netlify, kiểm tra Incognito và điện thoại |
| ĐK4 OBS 1:1 | Chưa có video | Quay đủ 1 video cho mỗi màn hình trong inventory cuối cùng |
| ĐK5 Khai báo AI | Chưa có `docs/ai-usage-report.md` | Viết trung thực công cụ, prompt, phần AI sinh, lỗi và phần tự sửa |

## Đối chiếu 8 tiêu chí

### 1. Tư duy sản phẩm, phân tích, Figma/Canva — 1.00 điểm

**Đã có:** ngữ cảnh, P1–P4, O1–O7 trong đề gốc; PDF wireframe vòng 1; 4 role; danh sách màn hình cơ bản.

**Thiếu:**
- `docs/project-proposal.md` đầy đủ.
- User Goal → User Task → User Flow cho từng role.
- Ma trận entity và vòng đời trạng thái.
- `docs/screen-inventory.md` đủ 12 cột: Role, User Goal, User Task, Screen, File, CRUD, States, AI, Assignee, Task ID, Branch, OBS.
- Link Figma/Canva công khai gồm sitemap, flow, desktop/mobile, component guide, loading/empty/error và AI mockup.

### 2. Multi-role, nghiệp vụ, CRUD, state — 2.00 điểm

**Đã có:** 4 role, 20 file HTML, form tạo ticket, tìm kiếm/lọc cơ bản, một số AI mockup.

**Thiếu hoặc còn mock:**
- Gán kỹ thuật viên chưa cập nhật dữ liệu thật.
- Nhận việc/cập nhật sửa chữa chưa nối trọn luồng.
- CRUD thiết bị chưa lưu thật đầy đủ.
- Hủy ticket, archive, đánh giá chưa hoàn thiện.
- Dữ liệu sau khi tạo ở role này phải xuất hiện ở role khác và giữ sau F5.
- Loading, Error, Success, Pending, Cancelled cần có cách bật để demo.
- Role Switcher/Breadcrumb chưa hoàn chỉnh trên mọi trang.

### 3. UI, responsive, accessibility — 1.50 điểm

**Đã có:** Bootstrap, CSS variables cơ bản, breakpoint mobile cơ bản.

**Thiếu/cần kiểm tra:**
- Test thật ở 320px, 375px, 768px, 1280px và zoom 200%.
- Không được có horizontal scroll ngoài ý muốn ở 320px.
- Sidebar cần hamburger/drawer rõ ràng trên mobile.
- Bảng nên chuyển thành card hoặc có table-responsive hợp lý.
- Thêm `:focus-visible`.
- Rà soát label-for/aria-label cho 100% input.
- Rà soát semantic header/nav/main/section/footer, đúng 1 h1 mỗi trang.
- Ảnh nếu có phải có alt.

### 4. HTML5, CSS3, Bootstrap — 1.00 điểm

**Đã có:** Bootstrap CDN, một CSS chung.

**Thiếu/cần sửa:**
- Tách `css/responsive.css` theo yêu cầu minh chứng.
- Sửa lỗi CSS hiện tại: đoạn `.btn-primary` bị mất selector trước biến Bootstrap.
- Rà soát semantic HTML và W3C Validator.
- Tránh inline style ở các trang mới.

### 5. JavaScript, DOM, validation, data/API — 1.50 điểm

**Đã có:** JS thuần, LocalStorage cho ticket, tìm kiếm, lọc, form validation.

**Thiếu:**
- `js/api.js`, `js/main.js`, `js/modules/` để chứng minh kiến trúc module.
- Dữ liệu ban đầu 15–25 bản ghi thực tế, không chỉ 4 ticket/4 asset.
- Tìm kiếm + ít nhất 2 bộ lọc cùng lúc.
- Sort hoặc pagination.
- `fetch()` có response.ok + try/catch/finally hoặc module mock tương đương.
- Disabled submit khi đang xử lý.
- Error state có nút Thử lại.
- Tránh nối thẳng dữ liệu người dùng vào `innerHTML`.

### 6. AI Product UX — 1.00 điểm

**Đã có:** ý tưởng AI-1 Classifier, AI-2 Checklist, AI-3 Failure Insights.

**Thiếu/cần nối thật:**
- Đủ 6 bước: Input → Processing → Output → Explain → Control → Save/Apply.
- Nút Chấp nhận phải cập nhật dữ liệu thật.
- Nút Chỉnh sửa phải cho sửa kết quả trước khi lưu.
- Nút Từ chối/Thử lại phải có tác dụng.
- Có AI Failure/Uncertainty khi input quá ngắn hoặc mâu thuẫn.

### 7. Task, Git/GitHub, deploy, báo cáo — 1.00 điểm

**Đã có:** hướng dẫn branch/PR; main/dev hiện tồn tại.

**Thiếu:**
- Trello/Jira/Notion công khai với 5 cột: Backlog, To Do, In Progress, Review, Done.
- Mỗi task có Task ID, Screen, Assignee, Branch, PR, OBS.
- Branch feature của cả 3 SV.
- PR có review thật trước merge.
- Link deploy.
- README đủ thông tin chạy, role, flow, data, AI, Git, deploy, video.
- `docs/ai-usage-report.md`.

### 8. OBS, vấn đáp, live modification — 1.00 điểm

**Đã có:** hướng dẫn quay tại `docs/team-work-and-obs.md` và `docs/git-team-guide.md`.

**Thiếu:**
- Video thật có webcam và giọng của từng SV.
- Mỗi màn hình trong inventory cuối có 1 video.
- Video phải có mockup, code, giải thích, sửa trực tiếp, chạy thử, commit/push, Task/Branch/Commit.
- Mỗi SV tập ít nhất 3 đề live modification.
- Mỗi SV học 4 câu hỏi vấn đáp từ chính code của mình.

## Việc làm theo thứ tự ưu tiên

1. Chốt `screen-inventory.md`, User Flow, Figma/Canva.
2. Tạo 3 branch và chia đúng 3 vertical slice.
3. Nối workflow requester → technician → manager/admin bằng LocalStorage.
4. Hoàn thiện state coverage và AI 6 bước.
5. Tách module JS và bổ sung data JSON.
6. Test 320/375/768/1280/zoom 200%/Tab/Esc.
7. Tạo Trello và cập nhật task hằng ngày.
8. Deploy công khai.
9. Quay OBS 1:1.
10. Tập demo 6 phút và live modification.

## Không được làm giả minh chứng

Figma, Trello, PR, deploy và video phải do nhóm thật sự tạo. Không ghi link giả hoặc đánh dấu DONE trước khi có bằng chứng.
