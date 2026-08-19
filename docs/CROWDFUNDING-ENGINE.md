# Crowdfunding Engine — Canonical v1.0.0

## Goal-based lifecycle

```text
DRAFT -> OPEN -> SUCCESS -> WITHDRAWN/CLOSED
                  \
                   -> milestone claim(s)
OPEN -> deadline + goal missed -> FAILED -> pull refunds -> CLOSED
```

### On-chain instructions

- `contribute()` escrows funds and emits the contribution event.
- `withdraw()` is success-only and uses the fee snapshot taken for the funding/campaign state.
- `refund_single()` is pull-based: each contributor reclaims only their own recorded contribution after a failed goal.
- `claim_milestone()` requires a proof URI/hash and campaign-owner authorization; release still requires the configured milestone approval policy.

`treasury_fund` receives transparent platform fees. `reserve_fund` / grants disbursement flows remain separate from campaign-owner authority.

## Off-chain indexer

The indexer consumes program/registry/contributor events and serves discovery, progress, leaderboard, history and notification views. Wallet signatures remain authoritative for on-chain state changes.

```text
Solana programs -> stream/webhook -> normalizer -> idempotent event store -> projections -> API -> UI
```

No API projection is allowed to fabricate an on-chain event during an RPC/indexer outage.

## Discovery

The registry program exposes canonical campaign references/status. Search text, cover images and rich metadata remain off-chain and are joined by campaign ID after validating the registry record.

## Leaderboard

Top contributor ranking is wallet-level public data from the contributors program/indexer. KYC identity, donor email and private profile data are never written into the leaderboard program.

## Realtime

Client transport order:

```text
WebSocket -> SSE -> polling (5–15 seconds)
```

Polling interval is clamped to that range. UI shows degraded realtime status instead of synthesizing events.

## Payments

Midtrans is an optional fiat payment rail. The server creates a hosted Snap redirect; the redirect result is UX only. Payment state must be updated from verified Midtrans notification/status and then reconciled into PowerChain records. In `PAYMENTS_MODE=demo`, checkout returns a contact-support outcome instead of creating a fake success.

## API v1 engine endpoints

```text
GET  /api/v1/projects
GET  /api/v1/projects/count
GET  /api/v1/campaigns/:id/progress
POST /api/v1/campaigns/:id/contribute
POST /api/v1/campaigns/:id/withdraw
GET  /api/v1/refunds/:campaignId
POST /api/v1/refunds/:campaignId
POST /api/v1/campaigns/:campaignId/milestones/:milestoneId/claim
GET  /api/v1/leaderboard/:campaignId
GET  /api/v1/activity
GET  /api/v1/activity/stream
GET  /api/v1/funding/history/:campaignId
GET  /api/v1/funding/fees/:campaignId
GET  /api/v1/funding/treasury/:campaignId
POST /api/v1/funding/checkout
POST /api/v1/webhooks/midtrans
GET  /api/v1/donations/history
```

Preparation endpoints never imply execution. `contribute`, `withdraw`, `refund_single` and `claim_milestone` state changes are completed only after wallet signature, network confirmation, indexing and reconciliation.
