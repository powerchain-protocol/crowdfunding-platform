# Solana deployment manifest

`programs.example.json` is the non-secret deployment manifest shape for PowerChain Solana programs.

Program IDs must come from real deployment output and remain `verified: false` until independently checked on the intended cluster. Wallet private keys, seed phrases and signer JSON files never belong in this directory.

PowerChain supports the `devnet` and `mainnet-beta` application modes. The active network is a runtime choice; deployment identities remain explicit per environment.
