# KAN Marketplace PHP

A production-oriented PHP 8+ multi-vendor marketplace starter built with a small MVC kernel, MySQL, Bootstrap 5, secure authentication, CSRF protection, prepared statements, modular payments, REST API endpoints, admin/vendor/customer dashboards, migrations, and seed data.

## Requirements

- PHP 8.1+
- MySQL 8+
- Apache/Nginx with URL rewriting
- PHP extensions: PDO MySQL, GD, mbstring, openssl, json

## Installation

1. Copy `.env.example` to `.env` and update database, mail, app URL, and gateway settings.
2. Create a MySQL database and import `database/schema.sql`, then `database/seed.sql`.
3. Point your web server document root to `public/`.
4. Ensure `storage/uploads`, `storage/logs`, and `storage/cache` are writable.
5. Visit `/setup/check` to verify permissions and database connectivity.

Demo accounts seeded by `database/seed.sql`:

- Admin: `admin@example.com` / `password`
- Vendor: `vendor@example.com` / `password`
- Customer: `customer@example.com` / `password`

## Architecture

- `app/Core`: router, controller, model, request, response, validation, auth, CSRF, uploads, payments, notifications, and API helpers.
- `app/Controllers`: web, panel, checkout, webhook, and REST API controllers.
- `app/Models`: PDO-backed domain models.
- `app/Views`: Bootstrap responsive reusable views.
- `config`: environment-driven application configuration.
- `database`: schema and demo data.
- `public`: front controller and assets.

## Security

The application uses PDO prepared statements, password hashing, session hardening, CSRF tokens on state-changing web forms, HTML escaping helpers, MIME/extension image validation, randomized upload names, signed payment webhook verification, role checks, and activity/security logs.

## API

REST endpoints are under `/api/v1` and return JSON. Use `Authorization: Bearer <token>` for protected customer/vendor endpoints.

- `GET /api/v1/products`
- `GET /api/v1/categories`
- `GET /api/v1/vendors/{slug}`
- `POST /api/v1/auth/login`
- `POST /api/v1/orders`
- `GET /api/v1/payments/{reference}`

## Extending payments and integrations

Payment gateways implement `App\Core\Payments\PaymentGatewayInterface` and are registered in `config/payments.php`. Shipping, SMS, email, and WhatsApp integration contracts live under `app/Integrations`.
