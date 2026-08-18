# Ledger + Reconciliation

## 1. Why both are required

The blockchain is settlement infrastructure, not PowerChain's complete accounting system.

PowerChain maintains:

```text
Provider observation
Blockchain observation
Internal double-entry ledger
Campaign aggregate views
```

These are reconciled, not silently overwritten to match one another.

## 2. Suggested ledger accounts

```text
ASSET:EURE_TREASURY
ASSET:USDC_TREASURY
ASSET:SETTLEMENT_PENDING

LIABILITY:CAMPAIGN_FUNDS
LIABILITY:REFUNDS
LIABILITY:RESERVED_DISBURSEMENTS

REVENUE:PLATFORM_FEES

EXPENSE:NETWORK_FEES
EXPENSE:PAYMENT_FEES
```

## 3. Contribution example

```text
Dr ASSET:EURE_TREASURY
Cr LIABILITY:CAMPAIGN_FUNDS
```

## 4. Disbursement example

```text
Dr LIABILITY:CAMPAIGN_FUNDS
Cr ASSET:EURE_TREASURY
```

Fees are separate entries rather than hidden adjustments to campaign balances.

## 5. Reconciliation sources

```text
Expected PaymentIntent
Provider bank/order event
On-chain transfer
Treasury balance
Ledger entries
Campaign aggregates
```

## 6. Reconciliation exceptions

```text
AMOUNT_MISMATCH
REFERENCE_UNKNOWN
DUPLICATE_REFERENCE
TREASURY_MISMATCH
ASSET_MISMATCH
DUPLICATE_SETTLEMENT
SETTLEMENT_REVERSED
PAYMENT_EXPIRED
MISSING_ONCHAIN_CONFIRMATION
LEDGER_IMBALANCE
```

Never execute `UPDATE balance = observedBalance` without a controlled reconciliation entry and audit trail.

## 7. Finality model

Blockchain payment observations should distinguish:

```text
OBSERVED
CONFIRMED
FINALIZED (where applicable)
RECONCILED
```

Application-facing "confirmed contribution" policy selects the required network confidence level per rail and risk tier.

## 8. Idempotency

All financial POST operations require an idempotency key. Store request hash and response/result association. Reusing a key with a different request hash must fail.
