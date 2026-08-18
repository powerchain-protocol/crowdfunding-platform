# API v1

Base namespace:

```text
/api/v1
```

## 1. Resource groups

```text
auth/
organizations/

campaigns/
campaign-verifications/
funding-policies/
milestones/
evidence/
impact/

contributions/
donations/
ticket-orders/
tickets/
attestations/

payment-intents/
payment-references/
quotes/
receipts/
refunds/

banking/
  sepa/
  qr/
  accounts/
providers/
  monerium/

wallets/
assets/
networks/

solana-pay/
actions/
blinks/

cross-chain/
cctp/

safes/
treasuries/
treasury-policies/
disbursements/
approvals/

ledger/
reconciliation/

policy/
risk/
compliance/
audit/

agents/
skills/

blockchain/
explorer/

webhooks/
  monerium/
  helius/
  cctp/
  onramp/

health/
readiness/
system/
```

## 2. Campaign endpoints

```http
GET    /api/v1/campaigns
POST   /api/v1/campaigns
GET    /api/v1/campaigns/:id
PATCH  /api/v1/campaigns/:id
POST   /api/v1/campaigns/:id/submit
POST   /api/v1/campaigns/:id/publish
POST   /api/v1/campaigns/:id/suspend
POST   /api/v1/campaigns/:id/close
```

## 3. Payment intent endpoints

```http
POST /api/v1/payment-intents
GET  /api/v1/payment-intents/:id
POST /api/v1/payment-intents/:id/quote
POST /api/v1/payment-intents/:id/prepare
POST /api/v1/payment-intents/:id/confirm
POST /api/v1/payment-intents/:id/cancel
```

## 4. Banking endpoints

```http
POST /api/v1/banking/sepa/payment-intents
GET  /api/v1/banking/sepa/payment-intents/:id
GET  /api/v1/banking/sepa/payment-intents/:id/qr
GET  /api/v1/banking/sepa/payment-intents/:id/status
```

The server generates canonical beneficiary/payment reference data. A frontend-provided arbitrary IBAN is never accepted as a campaign treasury destination without authorization and registry validation.

## 5. Treasury/disbursement endpoints

```http
GET  /api/v1/treasuries/:id
GET  /api/v1/treasuries/:id/balances
POST /api/v1/disbursements
GET  /api/v1/disbursements/:id
POST /api/v1/disbursements/:id/approve
POST /api/v1/disbursements/:id/execute
POST /api/v1/disbursements/:id/reconcile
```

## 6. Response standard

Success:

```json
{
  "data": {},
  "meta": {
    "requestId": "req_xxx",
    "correlationId": "cor_xxx"
  }
}
```

Error:

```json
{
  "error": {
    "code": "PAYMENT_EXPIRED",
    "message": "Payment intent has expired.",
    "requestId": "req_xxx"
  }
}
```

## 7. Idempotency

Require `Idempotency-Key` for financial creates/mutations including:

- payment intent creation when it has side effects
- provider session/order creation
- CCTP transfer creation
- disbursement execution
- refund execution
- ticket/attestation issuance where duplicate issuance is harmful

## 8. Webhooks

Webhook endpoints acknowledge quickly after authentication, validation and durable ingestion.

```json
{ "received": true }
```

They do not perform full payment/disbursement reconciliation inline.

## v1.3 milestone evidence

```http
GET  /api/v1/campaigns/:campaignId/milestones/:milestoneId/evidence
POST /api/v1/campaigns/:campaignId/milestones/:milestoneId/evidence
POST /api/v1/campaigns/:campaignId/milestones/:milestoneId/evidence/:evidenceId/verify
```

Evidence writes require authenticated organization context, object-storage preparation, SHA-256 commitment validation and append-only audit persistence. The scaffold routes fail closed until those server integrations are configured.

## v1.3 authentication

```http
POST /api/v1/auth/login
POST /api/v1/auth/register
POST /api/v1/auth/reset-password
```

The login and registration stubs return `AUTH_PROVIDER_NOT_CONFIGURED` until production identity/session infrastructure is wired. Reset-password returns a non-enumerating accepted response.
