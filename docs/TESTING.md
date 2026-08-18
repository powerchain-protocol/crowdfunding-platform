# Testing

## Unit

```text
FundingPolicy
Payment state machines
SEPA QR payload builder/parser
PaymentReference matcher
Fee engine
Policy engine
Risk engine
Ledger balancing
Reconciliation matcher
CCTP registry
Asset registry
```

## Integration

```text
Monerium sandbox
Safe test deployment / transaction service
Solana devnet + Helius test configuration
Sui testnet
EVM testnet
CCTP test environment
Database
Queue
Object storage
```

## E2E

### Humanitarian bank contribution

```text
Create campaign
-> provision treasury
-> publish
-> create €50 bank intent
-> render QR
-> simulate/receive bank transfer
-> observe EURe settlement
-> reconcile
-> confirm contribution
-> issue receipt
-> optional attestation
```

### Ticket campaign

```text
Create campaign
-> create ticket inventory
-> purchase
-> reconcile payment
-> issue ticket
-> redeem
```

### Disbursement

```text
Create proposal
-> policy
-> approvals
-> execute Safe transaction
-> observe
-> reconcile
-> attach evidence
```

## Adversarial tests

- replay webhook
- duplicate provider event
- same idempotency key with changed payload
- amount-only false match
- wrong campaign treasury
- wrong asset
- transaction signature substitution
- expired pre-sign review
- post-submission confirmation after review expiry
- repeated confirmation attempts
- ticket double issuance
- attestation duplicate issuance
- unauthorized beneficiary change
- stale offline sync
