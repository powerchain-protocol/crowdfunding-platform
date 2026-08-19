# Solana programs

PowerChain v1.0.0 supports two explicit application modes: **devnet** and **mainnet-beta**. Program deployment identity is never inferred from the UI-selected network; each deployment must be configured and verified independently before writes are enabled.

## Program surface

- `crowdfunding-engine` — `contribute`, `withdraw`, `refund_single`, `claim_milestone`.
- `registry` — campaign discovery registry.
- `contributors` — public contribution aggregates / leaderboard source.
- `milestone-escrow` — proof-gated tranche release boundary.
- `reserve-fund`, `grants`, `certificate`, `rewards`, `token` — explicit integration boundaries.

`programs.json` is the source inventory. `contracts/solana/programs.example.json` is the non-secret deployment-manifest shape.

## Safety boundary

A selected network does not authorize a transaction. Before a wallet signs, the review object must bind the selected network, wallet, program ID, exact instructions, recipients, amount, fees and any proof commitment. PowerChain prepares transaction material; the connected wallet remains the signer.

Production writes remain disabled until the relevant program ID is populated from actual deployment output and the deployment is marked verified after independent cluster checks.
