# Proposed Frontend ↔ Backend API Contract (Review Required)

**Status: PROPOSAL — not defined by the SRS.** Agree this with the backend teammate before implementation.

Base URL: `VITE_API_BASE_URL` e.g. `http://localhost:5000/api/v1`.
JSON body, ISO 8601 timestamps, UK timezone presentation in frontend, all money as **integer pence** in transport and database.

## Authentication (cookie-based)
- `POST /auth/login` body `{ email, password }` → `200 { user: { id, name, email, role, branchIds } }`; server sets `HttpOnly; Secure; SameSite` session cookie.
- `GET /auth/me` → `200 { user }` or `401`.
- `POST /auth/logout` → `204`, invalidates session and clears cookie.
- POS PIN authentication should use a separate endpoint, e.g. `POST /auth/pos-pin`, payload needs staff code, PIN, branch, terminal ID. **Do not send manager PIN through the same ordinary cashier flow**; backend issues bounded authorization for overrides.
- For cross-origin cookie auth configure exact allowed origins, `Access-Control-Allow-Credentials`, appropriate SameSite policy, and CSRF protection per deployment architecture. No access tokens stored in browser localStorage.

## Lists (current starter uses these GET paths)
- `GET /branches` → `Branch[]`
- `GET /employees` → `Employee[]`
- `GET /menu/types` → `MenuType[]`
- `GET /menu/items` → `MenuItem[]`
- `GET /customers` → `Customer[]`
- `GET /orders` → `Order[]`
- `GET /audit-log` → `AuditEntry[]`
- `GET /reports/summary` → `ReportSummary`

These are suggested arrays for the starter. For production, use documented pagination envelopes, filtering, sorting, search, role-specific response scoping and API schema validation. Coordinate response shapes before coding the mutations.

## Mutations needed in next iteration
- `POST/PATCH /branches/:id` / deactivate
- `POST/PATCH /employees/:id` / PIN reset
- `POST/PATCH /menu/items/:id`; type availability; offer bundles
- `PUT /prices/...` with branch/channel and start date; backend owns price resolution
- `POST /orders` with client-generated idempotency key; `PATCH /orders/:id` changes, reprint, refund, void, status and driver assignment
- `POST /customers`, duplicate checks, postcode lookup, export and erase
- `POST /day-end` / shift close with manager approval
- `POST /bridge/jobs`, local bridge status and device management
- `POST /offline/sync` accepts idempotency key and conflict-safe queue replays
- `GET /calls/stream` or WebSocket for incoming calls; agree supported CLI hardware

## Permission model
`SUPER_ADMIN`, `BRANCH_MANAGER`, `CASHIER`. Frontend route hiding is only a convenience. Server must enforce role + branch scope on *every* route (SEC-02).

## High-priority backend confirmation
1. API resource paths and response shape (array vs pagination envelope).
2. Auth method, cookies, CORS, CSRF, session expiry and branch switching.
3. Price rule: branch+channel override → chain+channel → chain Counter; VAT-inclusive.
4. Concurrency and order idempotency. No duplicate offline orders.
5. Caller-ID adapter, branch bridge, printers, cash drawer and offline UX contracts.
6. UK postcode provider, delivery radius / fee algorithm (SRS Q2, Q7).

All list rows and sales totals in this starter are **fixture-only**, not real data.
