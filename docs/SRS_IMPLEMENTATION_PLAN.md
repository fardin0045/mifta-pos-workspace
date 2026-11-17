# Mifta POS — SRS Implementation Plan and Status

This document keeps the client SRS as the requirements authority. **The provided frontend is an architecture starter only**, not a completed go-live application. It contains mock data and placeholder controls specifically to demonstrate the intended module boundaries.

## Design rules from the SRS
- POS must preserve 4-zone layout, labels, module tab order and familiar buttons, with 1024×768 min screen, no page scroll (UI-01 to UI-14).
- Admin **must be a responsive web admin with a left menu, searchable lists and forms**; head office must have a branch switcher (UI-15 to UI-17). It does not have to reproduce the old POS styling.
- The old screenshot shows UI controls that require confirmation: portions, Free Topping, Size, Model, Style, GN and GE (Q4/Q5). Their behavior must not be invented.
- Restaurant dine-in, SMS, live online ordering website, integrated card payments, stock, loyalty and driver mobile app are out of scope for this release.

## Frontend implementation phases

| Phase | Requirement groups | Frontend work | Starter status |
|---|---|---|---|
| 0. Architecture | QLT-01, QLT-04 | Routes, modules, typed DTOs, API layer, dev mocks, error UI | **Starter built** |
| 1. Login / roles | AUTH, ROLE, SEC | Email login, session restore, logout, POS code+PIN, role/branch guards | **Email UI/API contract built; POS PIN and server authorization pending** |
| 2. Admin foundation | UI-15 to UI-17 | Sidebar, branch switcher, responsive shell, lists, search and forms | **Shell and read-only lists built; functional branch scoping/forms pending** |
| 3. Master data | BR, EMP, MENU | Branch/employee creation, edit, deactivation, menu types/items, offers, options, imports | **Read-only lists built; mutations pending** |
| 4. Pricing | PRC | Channel prices, branch overrides, fallback chain, schedule, VAT-inclusive UI | **Grid and chain fallback demo built; branch override/API pending** |
| 5. POS order-taking | ORD, UI | Exact 4-zone UI, QTY/item number, item selection, bill, food detail, notes, discounts, park | **Interactive demo started; end-to-end workflow not finished** |
| 6. Caller ID / customers | TEL, CUS | Incoming call popup, customer lookup, address, order history, repeat | **Customer list + simulated lookup; live CLI pending** |
| 7. Payments / printing | PAY, PRN, BRG | Payment buttons, cash/change, split, receipt/kitchen preview, local bridge and reprint | **UI boundaries only; no real charges or printing** |
| 8. Orders / day-end | OM, DAY | Order statuses, edit, driver assignment, shifts, X/Z reports | **Order list only; mutations/reports pending** |
| 9. Reports / audit | RPT, CMP | VAT/sales/channel/employee reports, CSV/PDF, immutable audit, GDPR export/erase | **Summary + audit list; real reporting/GDPR actions pending** |
| 10. Offline / launch | NFR, SEC, QLT, UI-18/19 | IndexedDB cached menu/orders, sync idempotency, errors, test coverage, staff usability | **Interfaces planned only; not implemented** |

## Product and technical acceptance checklist

- [ ] Backend contract signed off and documented in OpenAPI (endpoint paths, DTOs, pagination, authorization, error envelope).
- [ ] Separate environment configs for development, staging and production.
- [ ] Server-side role and branch enforcement on every request; frontend UI guards are not security.
- [ ] End-to-end counter order and phone/delivery order workflows work with backend.
- [ ] PRC-06 branch + channel resolution and historical price snapshots tested.
- [ ] Manager PIN for void/refund and audit trail tested.
- [ ] Local bridge, printer retries and offline sync tested on actual terminals.
- [ ] Tests for pricing, VAT, permissions, order total and offline sync (QLT-02).
- [ ] Cashier can take a five-item delivery order unassisted (UI-19) on the 1024×768 till.
- [ ] Postcode lookup and delivery charge rules confirmed with Mifta.
- [ ] No payment-card sensitive data collected.
- [ ] Customer GDPR export/erase and six-year sales/audit retention verified.

## Backend teammate ownership

The backend teammate is responsible for all data persistence, authentication, secret management, branch authorization, VAT/price calculations, accounting and payments state, idempotent offline sync, call adapters, hardware/printing bridge integration, and authoritative reports. The frontend cannot complete those requirements alone.
