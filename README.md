# FixFlow - Cấu trúc và cách chạy

## Cấu trúc chính

```text
project-root/
├── index.html                 # Trang vào chính ở thư mục gốc
├── README.md
├── pages/
│   ├── dashboard.html         # Dashboard sau đăng nhập
│   ├── login.html
│   ├── register.html
│   ├── forgot-password.html
│   ├── requester-*.html
│   ├── technician-*.html
│   ├── manager-*.html
│   ├── admin-*.html
│   ├── notifications.html
│   ├── profile.html
│   ├── 403.html
│   └── 404.html
├── css/style.css
├── js/app.js
├── assets/data/
├── docs/
└── design/
```

## Chạy website

Mở `index.html` ở thư mục gốc bằng Live Server. Trang này là landing page; bấm **Đăng nhập** để vào `pages/login.html`, sau đó vào `pages/dashboard.html`.


## Công nghệ

HTML, Bootstrap 5 CDN, CSS thuần, JavaScript thuần, LocalStorage và JSON mock.

## Tài liệu liên quan

- `docs/screen-list.md`: bảng kiểm kê màn hình.
- `docs/team-work-and-obs.md`: phân công 3 SV và kịch bản quay OBS.
- `docs/README-MVP.md`: tình trạng tính năng và phần cần hoàn thiện.
- `docs/fixflow-screen-inventory.xls`: bảng Excel giao diện.
