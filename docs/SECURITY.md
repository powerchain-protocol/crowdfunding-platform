# Security Architecture

## 1. Defense in depth

```text
Browser
  -> CDN / WAF
  -> API gateway
  -> authentication
  -> authorization
  -> organization isolation
  -> request validation
  -> rate limits
  -> policy engine
  -> risk engine
  -> provider/blockchain adapter
  -> treasury approval
  -> audit
  -> reconciliation
```

## 2. Secrets

Server-only:

```text
Monerium credentials
Helius API keys / private RPC URLs
Safe service credentials
CCTP/provider credentials
KMS keys
webhook secrets
private signing material
```

Prohibited:

```text
NEXT_PUBLIC_PRIVATE_KEY
NEXT_PUBLIC_HELIUS_API_KEY
NEXT_PUBLIC_MONERIUM_SECRET
```

## 3. Signing

User wallet signatures occur in user-controlled wallet contexts. Treasury signing occurs through configured treasury owners/signers. The backend must not silently substitute itself as a general-purpose signer unless an explicitly designed custody service and policy model exists.

## 4. Transaction safety

Before sensitive execution:

```text
Build
-> decode
-> simulate where supported
-> verify destination
-> verify amount and asset
-> verify program/contract
-> policy
-> risk
-> approval
-> sign
-> submit
```

## 5. Review binding

For transaction reviews, bind the first accepted submitted signature/transaction identifier to the review. A different identifier for the same finalized review must fail unless a deliberate retry/replacement workflow creates a new review version.

Review expiry applies to unsigned/prepared intents; a transaction validly submitted before expiry may continue through post-submission verification.

## 6. Webhooks

Require provider-appropriate authentication/verification, replay resistance, schema validation, durable event IDs and idempotency.

## 7. Evidence privacy

Sensitive evidence uses encrypted object storage with access control. Publish hashes/commitments or redacted evidence rather than raw PII.

## 8. Security testing

- authorization and organization isolation
- webhook forgery/replay
- idempotency collision/reuse
- transaction substitution
- unsafe destination changes
- duplicate settlement
- race conditions
- secret scanning
- dependency scanning
- SAST/DAST
- smart-contract review/audit
- property/fuzz testing for money and state machines
