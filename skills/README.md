# PowerChain skills

Skills are policy-constrained assistance contracts, not autonomous financial or administrative authorities.

The registry currently covers campaign, payments, reconciliation, reporting, treasury, identity, milestones, moderation, deal-room and notification workflows. `skills/registry.json` is the machine-readable inventory; each skill directory contains a `SKILL.md` contract.

## Required skill contract

Each skill defines allowed scopes, required inputs, expected output, forbidden actions, authority boundaries, and audit requirements.

Skills may read authoritative data, summarize, analyze, classify, prepare drafts, suggest actions and assemble proposals. They must not hold private keys, sign wallet transactions, mark KYC/business checks verified, fabricate settlement, rewrite escrow amounts, self-promote roles, execute treasury releases, or mutate append-only audit history.

Validate the registry with:

```bash
pnpm skills:check
```
