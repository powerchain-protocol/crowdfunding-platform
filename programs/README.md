# On-chain programs

`programs/` contains chain-specific program source and interface scaffolding for PowerChain crowdfunding, contributor accounting, registry/discovery, reserve/grants, certificates, rewards and token integrations.

Deployment identifiers are configuration, not source-code assumptions. Mainnet/devnet program IDs must come from reviewed deployment manifests and be verified on the target network before writes are enabled.

No UI or backend endpoint should claim an on-chain action succeeded merely because a transaction was prepared or submitted. The indexer/reconciliation path must observe the authoritative chain state.

See `programs/solana/README.md` and `programs/sui/README.md`.
