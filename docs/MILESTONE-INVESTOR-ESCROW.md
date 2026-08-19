# Investor-Approved Milestone Escrow

## Funding

An investment escrow is funded against an agreed 3–5 tranche plan.

At authoritative funding time each tranche snapshots:

```text
amount
asset
platform_fee_bps_snapshot
funded_at
```

## Proof

Founder submits proof:

```text
ipfs:// URI
SHA-256/content commitment
supporting metadata
submission timestamp
```

The application must not treat an IPFS link as verified merely because it resolves. An authorized investor/reviewer compares the evidence against the contractual milestone release condition.

## Approval

```text
Founder proof submitted
  -> investor review
  -> approved proof commitment
  -> audit event
  -> tranche READY_FOR_APPROVAL / APPROVED
```

## Claim

```text
claim_milestone
```

The founder/campaign owner signs the claim transaction, but on-chain state must also require:

- escrow funded
- tranche funded
- fee snapshot present
- proof commitment present
- approved commitment matches submitted commitment
- authorized investor approval
- tranche not already claimed
- correct mint/token program
- correct destination account

The API does not own an unrestricted private key. It can prepare and validate a transaction for wallet approval.

## Fee transparency

UI must display:

```text
Gross tranche
Platform fee percentage
Platform fee amount
Network/provider cost (when known)
Net beneficiary/founder release
```
