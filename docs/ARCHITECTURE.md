# Architecture

## 1. Authoritative layers

```text
                 POWERCHAIN
                     │
                 CAMPAIGN
                     │
              PARTICIPATION
                     │
               PAYMENT INTENT
                     │
          ┌──────────┼──────────┐
          │          │          │
        BANK       WALLET    SOLANA PAY
          │          │          │
     SEPA / SCT   USDC/EURe      │
          │          │          │
      MONERIUM      ROUTER       │
          │          │          │
         EURe        │          USDC
          │          │          │
          └──────SETTLEMENT──────┘
                     │
                OBSERVATION
                     │
                CONFIRMATION
                     │
               RECONCILIATION
                     │
                   LEDGER
                     │
                  TREASURY
                     │
             POLICY / APPROVAL
                     │
               DISBURSEMENT
                     │
                 MILESTONE
                     │
                  EVIDENCE
                     │
                   IMPACT
                     │
             PUBLIC TRANSPARENCY
```

## 2. Core rule

Provider-specific SDKs must sit behind adapters. Domain services own business rules.

Avoid:

```text
CampaignService -> Monerium SDK
CampaignService -> Helius SDK
CampaignService -> Safe SDK
CampaignService -> CCTP SDK
```

Prefer:

```text
Campaign
  -> PaymentIntent
  -> PaymentRouter
  -> SettlementProvider
  -> BlockchainDataProvider
  -> ReconciliationService
  -> TreasuryProvider
```

## 3. Recommended monorepo

```text
powerchain/
├── apps/
│   ├── web/
│   ├── crowdfunding/
│   ├── checkout/
│   ├── donate/
│   ├── dashboard/
│   ├── treasury/
│   ├── admin/
│   ├── explorer/
│   └── docs/
│
├── packages/
│   ├── campaign/
│   ├── campaign-verification/
│   ├── funding/
│   ├── donation/
│   ├── contribution/
│   ├── tickets/
│   ├── attestations/
│   │
│   ├── payment-intent/
│   ├── payment/
│   ├── banking/
│   ├── sepa/
│   ├── monerium/
│   ├── onramp/
│   │
│   ├── treasury/
│   ├── safe/
│   ├── approvals/
│   ├── disbursement/
│   ├── refunds/
│   │
│   ├── ledger/
│   ├── reconciliation/
│   ├── cmr/
│   │
│   ├── solana/
│   ├── solana-pay/
│   ├── actions/
│   ├── blinks/
│   ├── sui/
│   ├── evm/
│   ├── cctp/
│   ├── helius/
│   ├── indexer/
│   │
│   ├── evidence/
│   ├── milestones/
│   ├── impact/
│   │
│   ├── identity/
│   ├── compliance/
│   ├── risk/
│   ├── policy/
│   ├── audit/
│   │
│   ├── agents/
│   ├── skills/
│   ├── notifications/
│   └── sdk/
│
├── services/
│   ├── api/
│   ├── banking/
│   ├── payment/
│   ├── treasury/
│   ├── indexer/
│   ├── reconciliation/
│   ├── risk/
│   ├── agents/
│   ├── notifications/
│   └── webhooks/
│
├── programs/
│   ├── solana/
│   └── sui/
│
├── contracts/
│   └── evm/
│
├── prisma/
├── migrations/
├── infra/
├── terraform/
├── docker/
├── scripts/
└── docs/
```

## 4. Network roles

### Solana

Primary for wallet donations, Solana Pay, Actions/Blinks, high-frequency USDC operations and Solana indexing through Helius.

### Sui

Secondary settlement/application network for Move objects, PTBs, campaign objects, wallet flows and selected tokenized assets.

### EVM

Required where PowerChain uses Safe Smart Accounts, EURe settlement, EVM attestations or other EVM-specific treasury infrastructure.

Safe must never be modeled as a Solana or Sui multisig abstraction.

## 5. CMR

CMR means Campaign Management & Reconciliation and acts as the operational control plane:

```text
Campaign
Funding
Treasury
Milestones
Disbursements
Evidence
Reconciliation
Impact
Audit
```

CMR is authoritative for business state; chains are authoritative for their own settlement state.
