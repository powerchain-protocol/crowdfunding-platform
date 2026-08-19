# Constants, Contracts & Common Boundaries

PowerChain v1.0.0 separates shared values, deployment metadata, and generic utilities so application code does not accumulate duplicate literals or hidden chain assumptions.

## `@powerchain/constants`

Canonical domain/runtime constants live in `packages/constants`:

- campaign categories, lifecycle states, participation modes, and 3–5 tranche policy;
- basis-point denominator, supported settlement assets, and asset decimals;
- realtime polling bounds and transport order;
- security/request header names and upload limits;
- application ports and public route constants;
- Solana network names, crowdfunding instruction names, and program environment keys.

The root `constants/` directory is compatibility-only. New code imports `@powerchain/constants` or its subpath exports.

## `@powerchain/contracts`

`packages/contracts` owns deployment metadata and fail-closed chain references. It intentionally does **not** contain invented production addresses. `contracts/deployments.example.json` remains unconfigured by design.

A program/contract must move through explicit configuration and verification before a financial API enables preparation of a write. Merely setting an environment variable does not make a deployment trusted.

`GET /api/v1/system/contracts` exposes only configuration/verification posture. It does not expose private keys and does not certify deployment security.

## `@powerchain/common`

`packages/common` is browser/server-neutral and contains:

- class-name/string helpers;
- money formatting and integer basis-point arithmetic;
- tranche-derived funding-goal arithmetic using `bigint`;
- request IDs and UUID checks;
- common error/invariant helpers;
- typed `Result` helpers;
- date and URL utilities.

It must not import Prisma, secrets, Node-only filesystem/network modules, or wallet signing implementations.

## Development stability

`pnpm dev` now runs only the eleven applications through a supervisor. Before startup it validates the complete source tree and every app-local Next.js resolution. While running it watches application directories and `node_modules`; if the live workspace is replaced or deleted it stops rather than allowing Next.js/Turbopack to continue in a corrupted working directory.

Use `pnpm clean` for generated `.next`/Turborepo output. Use `pnpm clean:deps` only while dev is stopped. Both commands refuse to run while the PowerChain dev supervisor is active and never delete source directories.

## Database commands

Database-mutating commands use `scripts/db-command.mjs`. They load `.env.local`, require a real `DATABASE_URL`, verify PostgreSQL is reachable, and only then execute Prisma/seed actions. Schema-only generation and validation may use the non-connecting placeholder in the existing Prisma tooling; writes never do.
