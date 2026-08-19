# Production Conformance Checklist

A release is not "production ready" merely because it builds.

## Campaign

- [ ] immutable published campaign version
- [ ] funding policy validated
- [ ] budget totals validated
- [ ] milestone policy validated
- [ ] verification records auditable
- [ ] publish gate enforced server-side

## Bank / SEPA

- [ ] canonical server-generated payment intent
- [ ] interoperable QR payload strategy
- [ ] unique payment references
- [ ] SEPA Instant wording includes fallback/degraded behavior
- [ ] provider sandbox and production separated
- [ ] provider events authenticated/validated/idempotent
- [ ] QR scan cannot confirm a contribution

## Treasury

- [ ] per-campaign treasury mapping verified
- [ ] Safe treated as EVM-specific provider where used
- [ ] owners/threshold verified
- [ ] beneficiary changes policy-controlled
- [ ] disbursement limits enforced
- [ ] emergency policy does not bypass approval

## Reconciliation

- [ ] amount-only matching impossible
- [ ] duplicate settlement detection
- [ ] provider + on-chain + ledger matching
- [ ] exception queue and operator workflow
- [ ] financial aggregates derived from reconciled entries

## Tickets / attestations

- [ ] issued only after authoritative contribution confirmation
- [ ] duplicate issuance protected
- [ ] no sensitive PII in public attestation data
- [ ] financial-rights restrictions explicit for soft-tokenized mode

## Security

- [ ] no client-side provider secrets
- [ ] no unrestricted backend treasury signer
- [ ] origin/CORS/CSRF controls appropriate to auth mode
- [ ] rate limiting
- [ ] resource authorization
- [ ] organization isolation
- [ ] transaction review binding
- [ ] webhook replay protection
- [ ] secret scanning
- [ ] dependency/security scanning

## Reliability

- [ ] idempotent financial writes
- [ ] bounded retries + DLQ
- [ ] readiness fails closed for write-critical dependencies
- [ ] no synthetic blockchain events
- [ ] incident alerts and runbooks
- [ ] backup/restore tested

## Audit

- [ ] append-only material audit events
- [ ] request/correlation IDs
- [ ] policy decisions persisted
- [ ] approvals persisted
- [ ] agent runs reference tools/policies/outputs


## Identity & trust

- [ ] sensitive documents are private, encrypted and retention-limited
- [ ] each public trust badge maps to a specific verified check
- [ ] document upload never sets verification status directly
- [ ] reviewer/provider decisions are auditable

## Agreements / e-signature

- [ ] only versioned counsel-approved templates can enter signing state
- [ ] exact rendered content hash is bound to every signature
- [ ] signed documents cannot be mutated in place
- [ ] signature actions append audit events

## Escrow / tranche release

- [ ] evidence approval does not directly release funds
- [ ] identity + agreement + treasury gates are enforced server-side
- [ ] platform fee is shown before approval and booked separately
- [ ] released tranches are duplicate-protected

## Moderation / notifications

- [ ] report creation is rate-limited and durable
- [ ] auto-suspension is policy-driven, reversible and audited
- [ ] audit records are append-only and hash-linked
- [ ] email sends are idempotent and user-preference aware
