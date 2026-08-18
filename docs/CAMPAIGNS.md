# Campaigns

## 1. Creation wizard

```text
01 Basics
02 Campaign Type
03 Problem & Necessity
04 Goal
05 Beneficiaries
06 Budget
07 Milestones
08 Participation
09 Treasury
10 Evidence
11 Verification
12 Review
13 Publish
```

## 2. Core campaign model

```ts
interface Campaign {
  id: string;
  slug: string;
  organizationId: string;
  purpose: CampaignPurpose;
  participationMode: ParticipationMode;
  title: string;
  summary: string;
  canonicalAccountingCurrency: "EUR" | "USD";
  fundingPolicyId: string;
  treasuryId?: string;
  verificationStatus: VerificationStatus;
  status: CampaignStatus;
  publishedVersionId?: string;
  createdAt: string;
  updatedAt: string;
}
```

## 3. Funding policy

```ts
interface FundingPolicy {
  targetAmount: string;
  currency: "EUR" | "USD";
  model: "FLEXIBLE" | "ALL_OR_NOTHING";
  overfunding: "ALLOW" | "CAP_AT_TARGET";
  minimumContribution?: string;
  maximumContribution?: string;
  startsAt: string;
  endsAt?: string;
}
```

## 4. Lifecycle

```text
DRAFT
  -> CONFIGURED
  -> SUBMITTED
  -> VALIDATING
  -> TREASURY_PROVISIONING
  -> VERIFIED
  -> PUBLISHABLE
  -> PUBLISHED
  -> FUNDING
  -> FUNDED
  -> EXECUTING
  -> COMPLETED
  -> CLOSED
```

Exceptional states:

```text
UNDER_REVIEW
SUSPENDED
REJECTED
CANCELLED
```

## 5. Publish gate

Before publish, verify at minimum:

- campaign version locked
- organization/creator checks complete as required
- target and funding policy valid
- budget totals valid
- milestone structure valid when required
- treasury deployed/configured
- owners and approval threshold verified
- settlement asset enabled
- provider monitoring enabled
- privacy classification complete
- disclosures accepted

## 6. Disaster relief profile

```ts
interface EmergencyCampaignConfig {
  disasterType: "FLOOD" | "EARTHQUAKE" | "WILDFIRE" | "STORM" | "CONFLICT" | "OTHER";
  urgency: "NORMAL" | "HIGH" | "CRITICAL";
  affectedRegion: string;
  estimatedBeneficiaries?: number;
  immediateNeeds: string[];
  evidenceUpdateIntervalHours?: number;
  emergencyTreasuryPolicyId?: string;
}
```

Emergency status must never bypass treasury authorization. It can select a pre-approved emergency policy with tighter limits and stronger post-execution evidence requirements.

## 7. Completeness vs legitimacy

AI may calculate campaign completeness. It must not output an authoritative legitimacy score or self-approve publication.
