# Product Contract

## 1. Purpose

PowerChain is a goal-based crowdfunding platform for:

- disaster relief
- humanitarian aid
- medical and emergency campaigns
- public-good and community projects
- infrastructure and energy initiatives
- ticketed cause-based events

The platform combines familiar supporter payment UX with transparent campaign treasuries and verifiable post-funding operations.

## 2. Product promise

The supporter should be able to understand five things quickly:

1. What is the campaign trying to achieve?
2. How much is needed and by when?
3. Who controls the funds?
4. What has already been received and disbursed?
5. What evidence shows that the campaign delivered?

## 3. Campaign dimensions

Do not collapse campaign purpose and participation into one field.

```ts
type CampaignPurpose =
  | "DISASTER_RELIEF"
  | "HUMANITARIAN"
  | "MEDICAL"
  | "PUBLIC_GOOD"
  | "COMMUNITY"
  | "INFRASTRUCTURE"
  | "ENERGY"
  | "EVENT"
  | "OTHER";

type ParticipationMode =
  | "CONTRIBUTION"
  | "ATTESTATION"
  | "TICKET";
```

Examples:

```text
DISASTER_RELIEF + CONTRIBUTION
HUMANITARIAN + ATTESTATION
PUBLIC_GOOD + ATTESTATION
EVENT + TICKET
```

## 4. Funding models

```ts
type FundingModel = "FLEXIBLE" | "ALL_OR_NOTHING";
type OverfundingPolicy = "ALLOW" | "CAP_AT_TARGET";
```

Humanitarian/disaster defaults should normally allow flexible funding and continued disbursement unless the campaign policy says otherwise.

## 5. Supporter-facing language

Display familiar money first:

```text
Give €50
```

Do not force a bank supporter to understand the settlement token:

```text
Incorrect primary UX: Buy 50 EURe
```

The receipt/transparency views can disclose that the contribution settled as EURe or USDC.

## 6. Product surfaces

```text
Discover
Campaign
Contribute
SEPA QR checkout
Wallet checkout
Receipt
Transparency
Campaign operator dashboard
Treasury
Milestones
Evidence
Impact
Explorer
Admin / review
Developer API
```

## 7. Safety language

PowerChain can enforce product-level restrictions such as no equity, no yield, no revenue share and no repayment rights for its supporter badges. It must not promise that those settings alone determine legal classification.
