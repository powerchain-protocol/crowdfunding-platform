# PowerChain API

The API app is the canonical HTTP boundary for PowerChain v1.0.0 and is served under `/api/v1`.

## Responsibilities

The API owns server authentication/session validation, organization authorization, persistence access, idempotency, provider adapters, verification/moderation authority checks, financial state transitions, audit creation, and projections consumed by frontend apps.

The browser must not directly self-assign admin roles, verified badges, escrow amounts, reconciliation states, or treasury release states.

## Endpoint groups

The route tree includes health/system, auth, campaigns/projects, contributions/funding, refunds, milestones/evidence, identity, agreements/signatures, escrow/tranches, notifications, moderation/reports, audit, invoices/company profiles, SaaS plans/subscriptions/usage, leaderboard/activity, and provider/webhook boundaries.

Discover the current route inventory with:

```bash
pnpm routes:check
```

Operational discovery endpoints:

```text
GET /api/v1/health/live
GET /api/v1/health/ready
GET /api/v1/system/services
GET /api/v1/system/endpoints
```

## State-change rule

A successful HTTP preparation response is not equivalent to blockchain finalization, provider settlement, KYC verification, e-signature completion, or treasury execution. Those states require their authoritative provider/on-chain/database confirmations and reconciliation.

## CORS / Proxy

Next.js 16 `proxy.ts` applies the API network-boundary policy. Allowed origins come from configured PowerChain application URLs; credentialed requests must never be combined with wildcard origins.

## Contract deployment posture

`GET /api/v1/system/contracts` returns whether known program deployments are configured and explicitly marked verified. It intentionally does not treat an environment variable as deployment proof and does not expose signing material.
