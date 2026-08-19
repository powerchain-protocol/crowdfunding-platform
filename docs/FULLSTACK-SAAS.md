# Full-Stack SaaS Architecture — v1.0.0

## Runtime

PowerChain is pinned to **Node.js 24.19.0 LTS**. Every workspace package, `.nvmrc`, `.node-version`, runtime doctor and CI contract must agree on the exact version.

## SaaS control plane

```text
User
 -> httpOnly database-backed session
 -> OrganizationMembership
 -> Organization
 -> SaaSSubscription
 -> plan entitlements
 -> application/domain actions
 -> UsageEvent
 -> AuditEvent
```

Authentication uses salted scrypt password hashes and opaque random session tokens. Only SHA-256 hashes of session tokens are stored in PostgreSQL. Logout revokes the persisted session.

## Local stack

`infra/docker-compose.yml` provides PostgreSQL and Redis. Prisma is the typed PostgreSQL access layer. `pnpm db:push` is for local development; reviewed migrations and `pnpm db:migrate:deploy` are the production path.

## Organization isolation

Every SaaS/domain write must resolve the authenticated user, active organization membership and relevant entitlement on the server. Browser-visible role values are presentation only and never authorize a privileged operation.

## Fully wired vs provider-dependent

The repository is fully wired for local application -> API -> authenticated session -> PostgreSQL SaaS state. Financial/external providers (Solana RPC/Helius, Safe, Monerium, Midtrans, KYC, email, e-sign and object storage) remain adapter-driven and require real credentials, deployment IDs and webhook verification. Missing providers fail closed.

## Wired first-party flows

- Registration -> PostgreSQL user + organization + OWNER membership + SaaS trial + persisted session cookie.
- Login -> scrypt verification -> opaque persisted session.
- Session endpoint -> current user and organization memberships.
- Campaign create -> authenticated membership -> SaaS entitlement -> PostgreSQL campaign -> usage event.
- SaaS settings -> authenticated subscription and monthly usage endpoints.
- Password reset -> hashed expiring reset token; development exposure is opt-in only.
- Cross-app auth -> credentialed CORS restricted to configured PowerChain app origins.

## Monorepo dependency policy

Root `pnpm.overrides` keeps Next.js, React, TypeScript, Tailwind and Node types consistent across every application. pnpm build-script approvals are limited to the native/build packages required by Prisma/Next tooling. All Next.js apps transpile the shared `@powerchain/*` workspace packages from source.

## Database exposure

The Supabase migration enables RLS on first-party credential/session/SaaS tables without browser policies. These records are intentionally server-API-only; clients cannot self-promote memberships, modify subscriptions, forge sessions or write usage records directly through a publishable database key.
