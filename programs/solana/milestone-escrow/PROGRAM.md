# PowerChain Milestone Escrow Program — v1.0.0 interface

Purpose: release a funded tranche only after the configured milestone proof has been committed and an authorized investor/reviewer has approved it.

## Core instruction

```text
claim_milestone(milestone_index, proof_commitment)
```

The campaign/founder owner signs the claim, but owner signature alone is insufficient.

Required state before claim:

```text
escrow funded
tranche funded
platform_fee_bps_snapshot fixed at funding time
milestone proof commitment recorded
IPFS URI commitment recorded off-chain/on-chain as configured
approved_by == authorized investor/reviewer
approved_at != null
claimed == false
recipient token account validated
mint / token program validated
```

Recommended PDAs:

```text
["escrow", listing_or_campaign]
["tranche", escrow, milestone_index]
["proof", tranche]
```

The program should store hashes/commitments, not large IPFS URLs or documents. The application stores the `ipfs://...` URI and SHA-256/content commitment; the on-chain state stores the commitment needed to bind the claim to the reviewed proof.

When SPL/Token-2022 assets are released, use token-program CPI with PDA signer seeds and validate mint, destination token account, token program and escrow authority. Platform fee and net beneficiary transfer are calculated from the fee snapshot captured when funding became authoritative.

Program IDs are intentionally absent until deployment. Production API preparation remains disabled until `SOLANA_MILESTONE_ESCROW_PROGRAM_ID` references a verified deployment.
