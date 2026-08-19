# Shared packages

`packages/` contains reusable UI, domain rules, persistence access, client SDKs, realtime helpers, security contracts, and infrastructure abstractions. Packages should expose narrow typed interfaces and avoid importing deployable apps.

## Major groups

**Experience:** `ui`, `i18n`, `hooks`, `store`, `storage`, `data`, `activity`, `realtime`.

**Identity and collaboration:** `auth`, `identity`, `agreements`, `deal-room`, `deals`, `notifications`, `moderation`, `audit`.

**Crowdfunding and finance:** `campaign`, `payment-intent`, `funding`, `escrow`, `treasury`, `ledger`, `reconciliation`, `evidence`, `proofs`.

**Platform:** `api-core`, `sdk`, `providers`, `database`, `saas`, `security-data`, `service-registry`, `config`, `common`, `types`, `events`, `zk`.

## Package rules

- Use `workspace:*` only with the exact scoped package name declared by the target workspace package.
- Every package declares the direct dependencies it imports; do not depend on accidental hoisting.
- TypeScript ambient types are explicit via canonical profiles under `config/typescript/`.
- Domain packages contain deterministic validation/policy logic where possible; provider I/O belongs behind adapters.
- Money, token amounts and fees should use exact integer/base-unit or decimal-safe representations at authoritative boundaries.
- Public client packages must not import server secrets, Prisma clients, or private signing material.

Validate package wiring with:

```bash
pnpm workspace:check
pnpm config:check
```

## Core infrastructure-neutral packages

- `@powerchain/common` — generic runtime-safe utilities.
- `@powerchain/constants` — canonical cross-app/domain constants; avoid duplicated literals in apps.
- `@powerchain/contracts` — deployment metadata and fail-closed program/contract references; no invented production addresses.
- `@powerchain/config` — application/environment configuration and public registry.

Apps must declare workspace dependencies directly. Do not reach into another package's source directory with relative imports.
