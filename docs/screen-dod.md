# Definition of Done - 14 bước cho mỗi màn hình

Đánh dấu một màn hình là DONE chỉ khi có đủ bằng chứng:

- [ ] 1. Có trong `docs/screen-inventory.md` đã được duyệt.
- [ ] 2. Có Mockup Figma/Canva desktop và định hướng responsive.
- [ ] 3. Có HTML5 semantic: header, nav, main, section/article phù hợp, footer.
- [ ] 4. Có CSS dùng design tokens chung.
- [ ] 5. Test desktop >=1024px, tablet 768px, mobile 320–375px.
- [ ] 6. Có tương tác JavaScript thực tế.
- [ ] 7. Có validation nếu là form.
- [ ] 8. Có JSON/fetch/localStorage, không hardcode dữ liệu rác trong HTML.
- [ ] 9. Có Empty State với hướng dẫn và CTA.
- [ ] 10. Có Loading và Error State khi phù hợp.
- [ ] 11. Có A11y cơ bản: label, focus-visible, alt/aria khi cần.
- [ ] 12. Có branch riêng, commit rõ, PR và peer review.
- [ ] 13. Đã merge vào dev/main và test không xung đột.
- [ ] 14. Có video OBS có mặt sinh viên, giải thích code, sửa trực tiếp, chạy thử, commit/push và cập nhật link README.

## Cột bằng chứng cần điền

| Screen | Branch | Commit | PR | Reviewer | Figma | OBS | Test mobile | Done |
|---|---|---|---|---|---|---|---|---|
| requester-ticket-create | | | | | | | | |
| requester-my-tickets | | | | | | | | |
| requester-ticket-detail | | | | | | | | |
| technician-work-queue | | | | | | | | |
| technician-repair-detail | | | | | | | | |
| technician-repair-history | | | | | | | | |
| manager-dispatch-board | | | | | | | | |
| manager-sla-monitor | | | | | | | | |
| admin-asset-management | | | | | | | | |
