# Contracts

PowerChain contract metadata and fail-closed deployment helpers live in `@powerchain/contracts`. The root `contracts/` tree contains chain-specific source/deployment documentation. No production address is considered valid merely because it appears in configuration: deployment status must be verified by operations before writes are enabled.

- `evm/` — EVM/Safe integration notes and deployment manifest.
- `safe/` — Safe treasury policy notes.
- `deployments.example.json` — intentionally unconfigured deployment registry template.
