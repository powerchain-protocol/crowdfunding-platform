# Services

`services/` contains provider-facing, background and asynchronous boundaries that should not be embedded directly into UI components.

Current services include agreements, audit, banking, capital, deal-room, identity, indexer, moderation, notifications, realtime, reconciliation, security, webhooks and worker processing.

## Service contract

Each service should define:

- owned capabilities and external dependencies
- idempotency/retry behavior
- authentication/authorization expectations
- emitted/consumed events
- failure and degraded-mode behavior
- observability fields such as request/trace/correlation IDs
- whether the service is critical for API readiness

The canonical service inventory lives in `@powerchain/service-registry` and is exposed by `/api/v1/system/services`.

## Financial/provider safety

Provider adapters never translate an initiation acknowledgement into settlement success. Webhooks must be authenticated where supported, processed idempotently, and reconciled against authoritative provider/on-chain state before campaign-facing balances advance.
