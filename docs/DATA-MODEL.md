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

## Identity and trust domain

```text
VerificationCheck
IdentityDocument
```

`VerificationCheck` is the authoritative per-check state. `IdentityDocument` stores only metadata + secure storage reference; raw KYC bytes live in restricted object storage.

## Agreements domain

```text
AgreementTemplate
Agreement
AgreementSignature
```

Templates are versioned. Agreements store the exact rendered content hash. Signatures bind signer identity/role and consent version to that hash.

## Escrow domain

```text
CampaignEscrow
EscrowTranche
```

Every tranche references a campaign milestone, exact amount/asset, configured platform fee basis points and release transaction when executed.

## Notifications / moderation domain

```text
Notification
NotificationPreference
ModerationReport
ModerationAction
AuditEvent
```

`AuditEvent` is append-only and includes sequence, payload hash, previous event hash and event hash for tamper-evident verification.
