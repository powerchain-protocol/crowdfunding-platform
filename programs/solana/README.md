# Solana programs

PowerChain's Solana program surface includes the crowdfunding engine, discovery registry, contributor leaderboard, reserve fund, grants, certificate, rewards and token integrations.

## Crowdfunding lifecycle

```text
create campaign
   ↓
contribute()
   ↓
escrowed funds
   ├─ goal reached → withdraw() / proof-gated claim_milestone()
   └─ deadline missed → contributor pull refund_single()
```

## Production requirements

Before enabling writes, each program needs reviewed account/PDA derivation, signer/authority constraints, SPL Token or Token-2022 program validation, arithmetic/invariant tests, replay/double-claim protection, explicit fee snapshots where required, deployment manifests, program-ID verification, transaction simulation, indexer/reconciliation coverage and external security review appropriate to funds at risk.

Program IDs must never be invented or silently defaulted for production.
