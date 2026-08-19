# Stability Upgrade — v1.0.0

This upgrade keeps the canonical product version at `1.0.0` and hardens local development, shared boundaries, and deployment metadata.

## Fixed from the reported development failures

- `.env.example` is included and `pnpm env:init` retains the development-template fallback.
- Database mutation commands load `.env.local`, require `DATABASE_URL`, and check PostgreSQL reachability before Prisma/seed execution.
- `pnpm dev` runs only `apps/*` through a supervisor rather than starting the whole workspace task graph.
- Every app source directory is checked before startup.
- Every app must resolve its direct `next@16.3.1` installation before startup.
- Running dev processes are stopped if an app directory or `node_modules` disappears while Next.js is running.
- Generated-output cleanup is implemented in `scripts/clean.mjs`; it refuses to run while the PowerChain dev supervisor is active and does not delete source folders.
- Turborepo is pinned to stable `2.10.10`; pnpm remains `11.22.0`, Node `24.19.0`.

## Shared architecture

Added `@powerchain/constants` and `@powerchain/contracts`, and expanded `@powerchain/common`. The old root `constants/`, `contracts/`, and `common/` trees are now compatibility/documentation surfaces rather than parallel sources of truth.

## Contract posture

Solana program configuration now distinguishes **configured** from **verified**. `claim_milestone` remains disabled until the milestone escrow program ID is configured and `SOLANA_MILESTONE_ESCROW_VERIFIED=true` is explicitly set. The new `/api/v1/system/contracts` endpoint exposes posture only, not signing material.
