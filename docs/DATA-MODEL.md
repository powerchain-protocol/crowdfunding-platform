# Data Model

## Campaign domain

```text
User
Organization
OrganizationMembership
Campaign
CampaignVersion
CampaignBeneficiary
CampaignBudget
CampaignBudgetLine
FundingPolicy
EmergencyCampaignConfig
CampaignMilestone
CampaignEvidence
CampaignImpact
VerificationRecord
```

## Funding/payment domain

```text
PaymentIntent
PaymentQuote
PaymentReference
PaymentObservation
Payment
FundingTransaction
Donation
Contribution
TicketOrder
Ticket
Attestation
Receipt
Refund
```

## Banking/provider domain

```text
BankAccountLink
ProviderAccount
ProviderOrder
RawProviderEvent
NormalizedProviderEvent
```

## Treasury/accounting domain

```text
CampaignTreasury
TreasuryPolicy
Approval
Disbursement
LedgerAccount
LedgerTransaction
LedgerEntry
LedgerBalanceSnapshot
ReconciliationJob
ReconciliationMatch
ReconciliationException
```

## Cross-chain domain

```text
CrossChainTransfer
CctpTransfer
BlockchainObservation
```

## Intelligence/control domain

```text
RiskAssessment
PolicyDecision
AgentRun
SkillExecution
AuditEvent
WebhookEvent
Notification
```

## Money storage

Never use floating-point values for money. Persist exact decimal/base-unit representations with asset decimals and currency metadata.

Suggested boundaries:

```ts
type DecimalString = string;
type BaseUnitString = string;
```

Conversion between display amount and base units happens in shared financial utility code with explicit asset decimals.

## Versioning

Published campaign content uses immutable `CampaignVersion` records. The public page references the published version, allowing later edits to be audited and reviewed rather than silently mutating what supporters originally saw.
