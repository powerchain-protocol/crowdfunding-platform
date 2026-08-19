# Security-First Data Layer: Postgres RLS + Column Guards

**Canonical product version:** `1.0.0`

PowerChain uses several independent control planes. It is inaccurate to say that “Solana protects every database table.”

```text
Postgres RLS + grants + triggers
  -> database row/column integrity

Application auth + policy
  -> actor/resource authorization

Solana programs
  -> on-chain state and escrow invariants

ZK proofs
  -> selective proof of private facts where configured

KMS / private object storage
  -> secrets and private documents

Audit log
  -> tamper-evident operational history
```

## Canonical Supabase migration

`supabase/migrations/20260819053000_capital_security.sql`

Additional defense-in-depth migration:

`supabase/migrations/20260819054000_capital_security_hardening.sql`

The migration adds:

- RLS to capital marketplace tables
- authenticated-role-scoped policies
- participant-only deal-room policies
- investor-private watchlists/preferences
- offer visibility limited to counterparties
- subject-limited verification reads
- escrow counterparty reads
- proof access restrictions
- protected-column triggers
- append-only audit trigger
- FORCE RLS on capital/security tables
- least-privilege column grants for profile/listing/offer updates
- organization-membership validation when creating listings
- live+verified checks for watchlist/interest/offer creation
- funded/active escrow checks for milestone-proof insertion
- policy-column indexes for RLS performance

## Protected-column guards

Direct authenticated/public-key requests cannot legitimately mutate:

```text
profiles.app_role
profiles.verification_level
founder_listings.verified
founder_listings.verification_status
verification_checks.status
verification_checks.verified_at
verification_checks.provider_reference
funded escrow amount / asset
funded platform-fee snapshot
escrow release transaction ID
```

A direct client may edit permitted founder-owned draft data, but server-controlled trust and funded-escrow state are guarded independently of RLS row visibility. The hardening migration also removes broad table-level UPDATE privileges where protected columns would otherwise be addressable and re-grants only the ordinary columns required by the client.

## Fee snapshot

At funding time:

```text
platform_fee_bps_snapshot = configured fee at authoritative funding event
```

After funding, the snapshot is immutable. A later platform fee change does not retroactively change the economics of an already funded tranche.

## Verification harness

Run in a dedicated staging/production test tenant:

```bash
pnpm security:verify:production
```

Required secure CI environment variables include a publishable key, service-role key, a disposable authenticated user and fixture IDs.

The harness:

1. signs in as a real end user,
2. attempts to self-promote to `SUPER_ADMIN`,
3. attempts to forge a verified check,
4. attempts to rewrite funded escrow economics,
5. uses a server-side service-role read to confirm protected columns remain unchanged.

Do not claim production verification unless this harness (plus the broader authorization suite) actually ran successfully against the target production configuration.

## Audit log

`audit_log` is append-only. Update and delete operations raise an exception. Corrections are represented by new events rather than mutating history.
