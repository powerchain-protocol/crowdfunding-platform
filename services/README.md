# Services

`services/` contains provider-facing, background and asynchronous boundaries: agreements, audit, banking, capital, deal-room, identity, indexer, moderation, notifications, realtime, reconciliation, security, webhooks and worker processing.

Each service defines its capabilities, dependencies, authorization expectations, idempotency/retry policy, events, degraded behavior, observability fields and readiness criticality.

The canonical inventory is exposed through `@powerchain/service-registry` and `/api/v1/system/services`.

Provider acknowledgements are never treated as authoritative settlement. Webhooks are authenticated where supported, handled idempotently, and reconciled against provider/on-chain state before campaign-facing balances advance.
