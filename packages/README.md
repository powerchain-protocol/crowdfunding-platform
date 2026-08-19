# Shared packages

`packages/` contains reusable UI, domain, security, persistence, SDK, realtime and provider abstractions. Packages must not import deployable apps.

## Key boundaries

- `@powerchain/ui` — shared Tailwind v4/shadcn UI, icons, Web3 icons, modals and themes.
- `@powerchain/common` — runtime-safe IDs, money, date, URL, result and error helpers.
- `@powerchain/constants` — canonical product/domain constants.
- `@powerchain/contracts` — fail-closed Solana/EVM/Safe deployment references.
- `@powerchain/config` — runtime/provider configuration and RPC resolution.
- `@powerchain/database` — Prisma client boundary.
- `@powerchain/auth`, `@powerchain/identity`, `@powerchain/saas` — identity/access/SaaS rules.
- `@powerchain/campaign`, `@powerchain/escrow`, `@powerchain/treasury`, `@powerchain/ledger`, `@powerchain/reconciliation` — crowdfunding/finance rules.

## Rules

- `workspace:*` must use the exact scoped package name.
- Every imported package is declared directly; do not rely on hoisting.
- Framework-neutral packages do not inherit ambient Node/React types accidentally.
- Authoritative money/fees use exact integer/base-unit or decimal-safe representations.
- Browser packages do not import Prisma, secrets, private signing material, or server-only adapters.

Validate package wiring with:

```bash
pnpm workspace:check
pnpm typecheck
```
