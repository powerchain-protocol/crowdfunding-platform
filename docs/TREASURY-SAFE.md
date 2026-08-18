# Treasury + Safe

## 1. Per-campaign treasury

Each campaign receives an independent treasury identity where practical.

```ts
interface CampaignTreasury {
  id: string;
  campaignId: string;
  provider: "SAFE" | "SOLANA_MULTISIG" | "SUI_TREASURY";
  network: string;
  chainId?: number;
  address: string;
  settlementAssets: string[];
  policyId: string;
  status: "PROVISIONING" | "READY" | "PAUSED" | "CLOSED";
}
```

## 2. Safe is an EVM treasury provider

Safe Smart Accounts use owners and a threshold. PowerChain models Safe under the EVM treasury adapter and never presents it as a native Solana/Sui multisig.

```text
Campaign Safe
Owners: 3
Threshold: 2
```

## 3. Treasury policy

```ts
interface TreasuryPolicy {
  id: string;
  treasuryId: string;
  approvalThreshold: number;
  ownerCount: number;
  singleTransactionLimit?: string;
  dailyLimit?: string;
  milestoneApprovalRequired: boolean;
  evidenceRequired: boolean;
  emergencyPolicyId?: string;
  beneficiaryChangePolicy: "MULTISIG" | "MULTISIG_AND_REVIEW";
  largePaymentPolicy: "NORMAL" | "EXTRA_APPROVAL";
}
```

## 4. Disbursement flow

```text
Organizer creates proposal
  -> validate recipient/amount/asset
  -> policy evaluation
  -> risk evaluation
  -> transaction simulation / decoding
  -> approval workflow
  -> Safe proposal
  -> threshold signatures
  -> execute
  -> observe on-chain
  -> confirm
  -> reconcile
  -> ledger
  -> evidence follow-up
```

## 5. Emergency policy

Emergency campaigns may select a pre-approved emergency policy:

```text
Emergency reason required
Maximum emergency amount
Threshold still enforced
Enhanced audit event
Post-disbursement evidence deadline
```

There is no generic unrestricted emergency override.

## 6. Organizer wording

Prefer:

> Organizers propose and execute disbursements according to the campaign treasury policy.

Avoid language implying that one organizer can withdraw arbitrarily from a multisig treasury.

## 7. Treasury public view

Expose:

```text
Received
Committed
Reserved
Disbursed
Available
Treasury address
Settlement assets
Approval threshold
Recent disbursements
Explorer links
```
