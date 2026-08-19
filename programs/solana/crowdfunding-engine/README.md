# PowerChain Crowdfunding Engine (Solana)

Canonical instruction contract:

- `create_campaign` — stores goal, deadline, owner, escrow vault and fee snapshot.
- `contribute` — transfers contributor funds into the campaign escrow and emits an indexed contribution event.
- `withdraw` — success-path owner withdrawal after goal/deadline policy; routes snapshotted platform fee to `treasury_fund`.
- `refund_single` — pull-based contributor refund after a failed campaign. No mass refund loop.
- `claim_milestone` — proof-gated tranche claim using a stored proof URI/hash and approval state.

All state-changing instructions require wallet/program authority checks. Public clients never provide arbitrary vault or authority addresses without PDA/owner validation.

## Implementation status

`src/lib.rs` is the canonical instruction/account contract scaffold. Production deployment still requires SPL/Token-2022 escrow CPI wiring, PDA vault initialization, fee-transfer tests, invariant/property tests, program audit and verified deployment IDs. UI/API code must not claim an escrow transfer occurred until the indexed on-chain transfer is observed and reconciled.
