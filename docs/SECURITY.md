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

## 9. Identity/KYC security

KYC and business-verification documents are high-sensitivity data. Require encrypted private storage, short-lived server-generated upload credentials, strict reviewer authorization, malware scanning, retention policy and access audit. Do not write raw identity material to public chains.

## 10. Electronic signature integrity

The signing request must bind the signer to the exact rendered agreement hash. Changing any signed term requires a new agreement version. Signature events, voiding and supersession append audit events rather than rewriting history.

## 11. Tranche release separation

Evidence approval is not fund release. Escrow/tranche execution checks authoritative evidence, identity/business status, agreement signatures, fee policy, beneficiary/destination, treasury policy and multisig state server-side before transaction preparation.

## 12. Moderation safety

Auto-suspension is deterministic, configurable, reversible and audit-logged. A suspension can restrict campaign activity but must not itself authorize treasury movement, asset seizure or fund redistribution.

## Capital marketplace database hardening

The capital module adds a Supabase/Postgres security contract under `supabase/migrations/`:

```text
RLS on exposed application tables
+ role-scoped policies (`TO authenticated` / explicit anon reads)
+ protected-column triggers
+ private Storage RLS
+ immutable funded-escrow economics
+ append-only audit log
```

Protected columns include application role, verification status, verified timestamps, funded escrow amount/asset, fee snapshot, and release transaction identifiers.

`pnpm security:verify:production` is the real-auth negative-test harness. The repository must not claim that a target production tenant is verified until the harness and broader authorization tests are run against that tenant with disposable fixtures.

ZK is selective privacy/attestation infrastructure. A valid ZK proof is still passed through application policy, RLS/resource authorization and escrow rules; it is not a replacement for those controls.
