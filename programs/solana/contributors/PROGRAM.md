# PowerChain Contributors Program — v1.0.0 interface

Purpose: keep an on-chain, campaign-scoped top-3 contributor leaderboard without making the frontend authoritative for contribution amounts.

## Security invariant

`record_contribution` MUST only accept a signer/authority stored in the campaign leaderboard account as the trusted settlement authority. A browser or arbitrary supporter wallet cannot call `record_contribution` with a fabricated amount and become a leaderboard entry.

Recommended PDA:

```text
["contributors", campaign_pubkey]
```

Account:

```text
ContributorLeaderboard
- campaign: Pubkey
- settlement_authority: Pubkey
- top[3]: ContributorRank
- bump: u8

ContributorRank
- contributor: Pubkey
- cumulative_amount: u64/u128-compatible representation
```

Instructions:

```text
initialize_leaderboard(campaign, settlement_authority)
record_contribution(contributor, settled_amount)
rotate_settlement_authority(new_authority)   # campaign authority + policy controlled
```

`record_contribution` updates cumulative contribution for the contributor and re-sorts only the top three entries. It should be invoked after PowerChain has authoritative settlement, preferably by CPI from the canonical settlement/crowdfunding program or by a tightly controlled settlement authority.

Program IDs are deployment artifacts and are intentionally not fabricated in source control. Production reads require `SOLANA_CONTRIBUTORS_PROGRAM_ID` plus a verified deployment manifest.
