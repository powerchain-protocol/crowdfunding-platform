# Identity & Trust

**Canonical product version:** `1.0.0`

PowerChain models trust as independent checks rather than a single opaque “verified” flag.

## Verification checks

```text
Identity document
Proof of address
Business registry
Beneficial owner / control
Bank account ownership
Treasury control
Campaign beneficiary
```

Each check has its own lifecycle:

```text
NOT_STARTED
  -> PENDING
  -> UNDER_REVIEW
  -> VERIFIED | REJECTED
  -> EXPIRED (when applicable)
```

A green badge means that **specific check** completed under the configured verification policy. It is not a guarantee that a campaign will succeed or that every campaign claim is true.

## Sensitive document flow

```text
Operator selects requested document
  -> browser validates type/size
  -> browser computes SHA-256 commitment
  -> server authenticates actor + organization
  -> server creates short-lived encrypted upload session
  -> malware/content checks
  -> document stored in restricted object storage
  -> verification provider/reviewer evaluates check
  -> result normalized into VerificationCheck
  -> audit event appended
  -> notification queued
```

Do not write passports, identity cards, proof-of-address documents, beneficial-owner records or equivalent KYC material to a public blockchain.

## Storage requirements

- encrypted object storage
- server-generated storage keys
- no public bucket access
- access scoped to authorized compliance/reviewer roles
- malware scanning before reviewer access
- retention and deletion policy per jurisdiction/provider obligations
- audit events for view/download/decision actions
- never expose provider API secrets to the browser

## Business verification

A business can show “Business verified” only when the configured business-registry and required ownership/control checks are verified. Bank-account and treasury-control badges remain separate.
