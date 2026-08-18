# Domain Events

## Campaign

```text
campaign.created
campaign.submitted
campaign.verified
campaign.published
campaign.suspended
campaign.funded
campaign.completed
campaign.closed
```

## Payment

```text
payment.created
payment.quoted
payment.submitted
payment.observed
payment.confirmed
payment.failed
payment.reconciliation.requested
payment.reconciled
payment.receipted
```

## Banking

```text
bank.transfer.observed
bank.issue.observed
bank.settlement.observed
bank.settlement.review_required
```

## Contribution

```text
contribution.confirmed
contribution.refunded
receipt.created
```

## Tickets / attestations

```text
ticket.issuable
ticket.issued
ticket.redeemed
ticket.refunded
attestation.issuable
attestation.issued
attestation.revoked
```

## Treasury

```text
treasury.provisioned
treasury.deposit.observed
disbursement.created
disbursement.approval_requested
disbursement.approved
disbursement.executed
disbursement.confirmed
disbursement.reconciled
```

## CCTP

```text
cctp.burn.confirmed
cctp.message.available
cctp.mint.confirmed
cctp.reconciled
```

## Evidence / impact

```text
milestone.created
milestone.approved
milestone.completed
evidence.submitted
evidence.verified
impact.report.published
```

## Event envelope

```ts
interface DomainEvent<T> {
  id: string;
  type: string;
  version: number;
  occurredAt: string;
  aggregateType: string;
  aggregateId: string;
  organizationId?: string;
  campaignId?: string;
  correlationId: string;
  causationId?: string;
  data: T;
}
```

Consumers must be idempotent. Event delivery is at-least-once unless a specific transport provides stronger semantics.
