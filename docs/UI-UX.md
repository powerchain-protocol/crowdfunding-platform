# UI/UX System — Canonical v1.0.0

PowerChain keeps the product version at **1.0.0** while continuously improving presentation, accessibility and workflow clarity.

## Visual direction

- institutional, calm, modern and financially trustworthy
- dark green as the primary brand action color
- white/light-neutral default surfaces with an equally complete dark theme
- restrained shadows and 18–28px surface radii
- no neon, speculative trading visual language or excessive gradients
- clear hierarchy: eyebrow → title → description → action
- dense financial information grouped into cards, status badges and progressive disclosure

## Core interaction rules

1. Important financial actions have one dominant CTA.
2. Destructive/review actions are never visually confused with execution.
3. QR scan/payment initiation is visually separated from settlement/reconciliation.
4. Evidence submission, reviewer verification, milestone approval and treasury approval are separate controls.
5. Campaign totals always label reconciled funding where applicable.
6. Loading states use skeleton structure instead of flashing empty pages.
7. Dark theme uses the same semantic information hierarchy as light theme.

## Marketing

The public website leads with campaign outcomes and transparency rather than blockchain terminology. The primary journey is:

```text
Explore projects → understand campaign → contribute → verify transparency
```

Blockchain, Safe, EURe, USDC and other provider details remain available in secondary transparency/developer views.

## Campaign cards

Campaign discovery cards include:

- category and participation mode
- region
- concise public summary
- reconciled funding amount
- target amount and percentage
- verified-treasury status
- single clear project CTA

## Create campaign

The 11-step wizard uses a persistent progress sidebar, contextual guidance and a stable footer action bar. Step 1 remains:

```text
Basics
Campaign title *
Short description *
Category *
Country / region
Cover image URL
```

## Dashboard

Operational screens prioritize:

- metrics that need interpretation
- milestone threshold chart
- blockers requiring action
- recent verified activity
- direct links to evidence or treasury workflows

## Evidence

Evidence submission uses a document drop zone, visible file commitments, clear statuses, explicit reviewer verification and a release-gate summary. Proposal preparation remains visually and functionally distinct from treasury execution.

## Trust badges

Use per-check badges such as `Business verified`, `Bank account verified` and `Treasury control verified`. Do not compress multiple checks into a vague global trust score.

## Agreements

The final signature screen must show template version, counsel reference, deal-term summary, document hash, signer identity/role and consent text. Never display “Signed” before server persistence succeeds.

## Escrow / tranche UX

Show gross tranche amount, platform fee policy, estimated network/provider cost, net recipient amount, evidence gate, agreement gate and approval threshold before release authorization.

## Moderation

Reporting must be easy to find but visually secondary to legitimate campaign actions. If a campaign is auto-suspended, show a neutral review state rather than implying a final finding of wrongdoing.
