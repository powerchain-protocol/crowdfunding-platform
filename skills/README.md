# PowerChain skills

Skills are policy-constrained assistance contracts, not autonomous financial, moderation, verification, or treasury authorities.

`skills/registry.json` is the machine-readable inventory. Each skill directory contains a `SKILL.md` defining allowed scope, required inputs, expected outputs, forbidden actions, authority boundaries, and audit requirements.

Skills may summarize, analyze, classify, prepare drafts, suggest actions, and assemble proposals. They must not hold private keys, sign transactions, forge KYC/business verification, fabricate settlement, rewrite escrow amounts, self-promote roles, release treasury funds, or mutate append-only audit history.

Validate the registry with:

```bash
pnpm skills:check
```
