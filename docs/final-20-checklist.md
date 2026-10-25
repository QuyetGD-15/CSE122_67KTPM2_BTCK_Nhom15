# Checklist tự rà soát 20 điểm trước khi bảo vệ

## Khối 1 — Sản phẩm, màn hình, thiết kế

- [ ] 1. `docs/screen-inventory.md` đủ 100% màn hình và khớp file thật.
- [ ] 2. Figma/Canva công khai có sitemap, user flow, desktop/mobile, component guide, AI mockup.
- [ ] 3. Tên file HTML đúng kebab-case role-function-action.
- [ ] 4. Có navigation/role switcher đi qua các role mà không gõ URL.

## Khối 2 — HTML, CSS, Responsive, A11y

- [ ] 5. Mỗi trang có header/nav/main/footer phù hợp, một h1, label cho input, alt cho ảnh.
- [ ] 6. Test 320px, 375px, 768px, 1280px và zoom 200%, không tràn ngang không chủ ý.
- [ ] 7. Tab thấy focus-visible; Esc đóng modal/drawer.
- [ ] 8. Ba thành viên dùng chung `:root`, font, màu, button, spacing.

## Khối 3 — JavaScript, data, state, AI

- [ ] 9. Có 15–25 bản ghi thực tế trong JSON/localStorage.
- [ ] 10. Search + ít nhất 2 filter + sort/pagination chạy đồng thời.
- [ ] 11. Create + Update + Cancel/Archive lưu và giữ sau F5.
- [ ] 12. Có cách bật nhanh Normal, Loading, Empty, Error.
- [ ] 13. Cả 3 AI đủ Input → Processing → Output → Explain → Control → Save.
- [ ] 14. Có AI Failure/Uncertainty test được.

## Khối 4 — Task, Git, OBS, vấn đáp

- [ ] 15. Trello/Jira/Notion có 5 cột và task có Screen/Assignee/Branch/PR/OBS.
- [ ] 16. Có main/dev/feature, Conventional Commit, PR review trước merge.
- [ ] 17. Có đủ OBS 1:1 với screen inventory, có webcam và sửa code trực tiếp.
- [ ] 18. `README.md` và `docs/ai-usage-report.md` trung thực, đầy đủ.
- [ ] 19. Link deploy chạy trong Incognito và trên điện thoại, không 404 CSS/JS/ảnh.
- [ ] 20. Cả 3 SV tập demo 6 phút và ít nhất 3 đề Live Modification mỗi người.
