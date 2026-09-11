# Cloudflare Worker Backend - ducme.vn

Backend serverless cho tính năng **Liên hệ & Góp ý** (`/lien-he/`) của website [ducme.vn](https://ducme.vn).

## Hạ Tầng & Công Nghệ
- **Cloudflare Worker**: Xử lý HTTP requests, CORS, multipart stream, xác thực CAPTCHA.
- **Cloudflare D1**: Cơ sở dữ liệu SQLite serverless lưu thông tin liên hệ và biên nhận (`ducmevn_feedback`).
- **Cloudflare R2**: Lưu trữ an toàn các tệp tin hình ảnh/tài liệu đính kèm (`ducmevn-feeback`).
- **Cloudflare Turnstile**: Ngăn chặn spam tự động thông minh.
- **Cloudflare Email Routing**: Gửi email thông báo tức thì tới hòm thư quản trị qua binding `send_email`.

## Cấu Trúc Thư Mục
```
worker/
├── scripts/
│   └── test-submission.js   # Script kiểm thử API tự động
├── src/
│   ├── cors.js              # Middleware CORS (whitelist ducme.vn, localhost:4321)
│   ├── db.js                # Xử lý thao tác D1 database
│   ├── email.js             # Soạn thảo và gửi email qua Cloudflare Email Routing
│   ├── index.js             # Router chính và fetch handler
│   ├── r2.js                # Tải file lên R2, sinh signed token, cleanup rollback
│   ├── turnstile.js         # Xác thực Cloudflare Turnstile token
│   └── validator.js         # Kiểm tra fields, MIME types, magic bytes
├── .dev.vars.example        # Mẫu biến môi trường cho local development
├── package.json
├── schema.sql               # D1 Database Schema
└── wrangler.jsonc           # Cấu hình Cloudflare Worker bindings
```

## Khởi Chạy Local Development
1. Cài đặt dependencies:
   ```bash
   npm install
   ```
2. Thiết lập biến môi trường cục bộ:
   ```bash
   cp .dev.vars.example .dev.vars
   ```
3. Khởi tạo schema trên D1 cục bộ:
   ```bash
   npx wrangler d1 execute ducmevn_feedback --local --file=./schema.sql
   ```
4. Khởi chạy server dev:
   ```bash
   npm run dev
   ```

## Triển Khai (Deployment)
1. Cấu hình secret Turnstile cho production:
   ```bash
   npx wrangler secret put TURNSTILE_SECRET_KEY
   ```
2. Chạy migration schema trên D1 production:
   ```bash
   npx wrangler d1 execute ducmevn_feedback --remote --file=./schema.sql
   ```
3. Deploy Worker:
   ```bash
   npm run deploy
   ```
