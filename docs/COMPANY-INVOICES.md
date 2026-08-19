# Company Profiles & PowerChain Invoices

**Canonical version:** `1.0.0`

## Company profile

Organizations can maintain a reusable profile for listings, agreements, invoices and public trust surfaces:

- legal name and trading name
- entity type: company, foundation, nonprofit, association, sole proprietor or other
- registration and tax/VAT IDs
- foundation registration number, founding date and purpose
- company/foundation logo
- website, billing email and phone
- registered address
- public social links
- independent business/tax/bank/treasury verification states

Verification fields remain authoritative server data. Editing a company profile must never let an organization forge its own `VERIFIED` state.

## Logo storage

The browser may preview a selected logo, but durable logos belong in authenticated object storage. Persist only an object key/asset reference in the database. Enforce content type, file-size limits and safe image delivery at the storage boundary.

## Invoices

`PowerChainInvoice` renders a professional invoice using immutable issuer/customer snapshots. When an invoice is issued, the backend should snapshot organization data so later profile edits cannot rewrite historical invoices.

Invoice fields include:

```text
invoice number
status
issuer snapshot
customer snapshot
campaign/project/agreement references
currency
issue/due dates
line items
per-line tax rate
transparent fees
discount
settlement instructions
payment reference
notes/payment terms
audit hash
```

## Financial invariants

- Draft previews may calculate display totals client-side.
- Issued totals must be recomputed and validated server-side using exact decimal/base-unit logic.
- Invoice numbering is organization-scoped and generated server-side.
- Issued invoices use immutable party snapshots.
- Voiding creates a state transition/audit event; it does not delete the historical invoice.
- Settlement status comes from the payment/reconciliation layer, not from a user clicking “mark paid.”
- Tax handling is jurisdiction-specific and must not be inferred from a generic UI field alone.

## Source locations

```text
packages/types/src/company.ts
packages/types/src/invoices.ts
packages/data/src/invoices.ts
packages/hooks/src/use-invoices.ts
apps/dashboard/components/company-profile-form.tsx
apps/dashboard/components/powerchain-invoice.tsx
apps/dashboard/tools/invoice-preview.tsx
apps/dashboard/app/settings/company/page.tsx
apps/dashboard/app/invoices/page.tsx
apps/dashboard/app/tools/invoice-preview/page.tsx
apps/api/app/api/v1/company/profile/route.ts
apps/api/app/api/v1/invoices/route.ts
```
