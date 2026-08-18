# Operations Runbook

## 1. Bank payment stuck

Check in order:

1. PaymentIntent status
2. payment reference
3. provider event ingestion
4. provider order/issue observation
5. expected treasury address
6. on-chain EURe transfer/issuance observation
7. confirmation/finality policy
8. reconciliation exception

Do not manually mark `RECONCILED` without a privileged audited reconciliation action.

## 2. Duplicate incoming event

Idempotency should absorb duplicates. If a duplicate created side effects, pause affected consumer and reconcile event IDs before continuing.

## 3. Treasury mismatch

If observed settlement went to an unexpected address:

```text
stop automatic contribution confirmation
open reconciliation exception
preserve raw provider/blockchain evidence
notify finance/security
investigate configuration history
```

## 4. Provider outage

- mark affected rail degraded
- keep existing authoritative states
- queue retryable reads/events
- disable unsafe writes if verification dependencies are unavailable
- never invent confirmations

## 5. Emergency pause

Pause can block new campaigns, new payment intents or treasury execution independently. Already-submitted blockchain transactions continue to be observed and reconciled.

## 6. Reconciliation backlog

Alert on age and count, not only total failures. A growing backlog is a financial operations incident even if new payments continue to settle.
