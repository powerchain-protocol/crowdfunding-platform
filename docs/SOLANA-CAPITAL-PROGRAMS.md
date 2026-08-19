# Solana Capital Program Interfaces

PowerChain v1.0.0 includes security-oriented program interfaces under:

```text
programs/solana/contributors/
programs/solana/milestone-escrow/
```

## Contributors

Stores a campaign-scoped top-three contributor leaderboard. Arbitrary clients cannot submit a fabricated contribution amount; `record_contribution` is restricted to the stored settlement authority / canonical settlement CPI path.

Production API reads require a verified `SOLANA_CONTRIBUTORS_PROGRAM_ID` and indexer/RPC configuration.

## Milestone escrow

Defines:

```text
fund_tranche
submit_proof_commitment
approve_milestone
claim_milestone
```

The claim path binds the founder signature to previously approved proof/escrow state rather than allowing the owner to unilaterally withdraw.

## PDA / CPI rules

Recommended design uses deterministic campaign/escrow/tranche PDAs. When moving SPL or Token-2022 assets, the program validates the token program, mint, destination account and PDA signer seeds before CPI transfer.

No program ID is fabricated in source control. A deployment manifest must be verified before enabling production writes.
