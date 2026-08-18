# Tokenization, Tickets and Attestations

## 1. Principle

A contribution is a payment/accounting event. A ticket or attestation is a separate entitlement/credential created from a confirmed contribution when the campaign config requires it.

```text
Payment != Contribution != Ticket != Attestation != Investment
```

## 2. Participation modes

### Contribution only

No supporter asset is issued.

### Soft tokenized / attestation

Use a non-financial credential for participation, support, verification or impact recognition.

```ts
interface ContributionAttestation {
  campaignId: string;
  contributionBand?: string;
  campaignVersionHash: string;
  receiptHash: string;
  issuedAt: string;
  transferable: false;
  financialRights: false;
}
```

Do not put donor names, bank details, email, identity documents or beneficiary PII into public attestations by default.

### Ticket

Use a ticket for access/utility rights.

```text
PENDING_PAYMENT
  -> ISSUABLE
  -> ACTIVE
  -> TRANSFERRED (if policy allows)
  -> REDEEMED
```

Failure states:

```text
CANCELLED
REFUNDED
```

## 3. Issuance rule

Tickets and attestations may be prepared early but may only become authoritative after contribution reconciliation.

## 4. EAS-style attestation architecture

Where Ethereum Attestation Service is used:

```text
Schema
  -> Attestation request
  -> On-chain or off-chain issuance
  -> UID/reference persisted
  -> campaign/supporter receipt linkage
```

Use off-chain/selective-disclosure variants where public storage would expose unnecessary information.

## 5. Legal/product restrictions

PowerChain's non-investment participation mode should prohibit by product policy:

- equity rights
- debt/repayment rights
- yield/APY/APR promises
- revenue share
- profit share
- automatic appreciation claims

Those restrictions reduce product ambiguity but do not constitute a legal determination in every jurisdiction.
