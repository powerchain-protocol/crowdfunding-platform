# Payments

## 1. PaymentIntent is the canonical payment abstraction

```ts
type PaymentIntent =
  | BankingPaymentIntent
  | WalletPaymentIntent
  | SolanaPayPaymentIntent
  | OnrampPaymentIntent;
```

Common fields:

```ts
interface PaymentIntentBase {
  id: string;
  campaignId: string;
  actorId?: string;
  fundingPurpose: "DONATION" | "CONTRIBUTION" | "TICKET_PURCHASE";
  displayAmount: string;
  displayCurrency: "EUR" | "USD";
  expectedSettlementAsset: "EURe" | "USDC";
  idempotencyKey: string;
  expiresAt?: string;
  status: PaymentIntentStatus;
}
```

## 2. Generic payment states

```text
CREATED
QUOTED
READY
AWAITING_PAYMENT_OR_SIGNATURE
SUBMITTED
OBSERVED
CONFIRMING
CONFIRMED
RECONCILING
RECONCILED
RECEIPTED
```

Failure/review:

```text
EXPIRED
CANCELLED
FAILED
REJECTED
REQUIRES_REVIEW
```

## 3. Banking state machine

```text
CREATED
  -> AWAITING_BANK_TRANSFER
  -> BANK_TRANSFER_OBSERVED
  -> ISSUANCE_OBSERVED
  -> ONCHAIN_SETTLEMENT_OBSERVED
  -> CONFIRMED
  -> RECONCILING
  -> RECONCILED
  -> CONTRIBUTION_CONFIRMED
```

A QR scan, banking-app launch or provider-side "initiated" state is not a settled contribution.

## 4. Payment references

Every checkout attempt gets a unique reference independent of the campaign ID.

```text
PC-6WQ9-K2M7
```

Matching order:

1. exact reference
2. destination treasury
3. asset/currency
4. amount
5. settlement transaction/order identifiers
6. time window

Amount-only matching is prohibited.

## 5. Issuance side effects

Only `CONTRIBUTION_CONFIRMED` may authorize:

- campaign raised total update
- supporter receipt completion
- ticket entitlement becoming issuable
- supporter attestation issuance
- campaign funded transition
- downstream impact notifications

## 6. Wallet payments

Wallet flows follow:

```text
Select
-> Quote
-> Review fees + destination
-> Build
-> Simulate where supported
-> Wallet approval
-> Submit
-> Observe
-> Confirm
-> Reconcile
-> Receipt
```

The first authoritative submitted signature/transaction identifier for a review should be bound to that review and protected from substitution during confirmation.
