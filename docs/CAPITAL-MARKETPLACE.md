# Founder & Investor Capital Marketplace

**Canonical product version:** `1.0.0`

PowerChain supports a structured founder/investor marketplace alongside humanitarian/public-good crowdfunding. Investment listings are a distinct product domain because offering eligibility, disclosures, investor suitability and legal structure may differ from donation campaigns.

## Founder workflow

```text
Founder identity + business verification
  -> Product listing
  -> Pitch deck + demo video
  -> Team bios
  -> Deal terms
  -> 3–5 milestone tranches
  -> Derived raise goal
  -> Review / verification
  -> Live marketplace
  -> Investor interest / offers
  -> Deal room negotiation
  -> Counsel-approved agreement
  -> E-signature
  -> Escrow funding
  -> Milestone proof
  -> Investor approval
  -> claim_milestone
```

### Raise goal invariant

A founder does **not** type an independent funding goal for the capital product.

```text
DerivedRaiseGoal = sum(tranche[0..n].amount), where n is 3–5 tranches
```

Changing a tranche amount changes the derived goal while the listing is editable. Once the corresponding escrow becomes funded, the funded tranche amount and platform-fee snapshot become immutable.

## Listing structure

```text
Product profile
├── product name
├── one-line pitch
├── category
├── stage
├── location
├── product description
├── pitch deck
└── demo video

Team
├── name
├── role
├── biography
└── optional professional profile

Deal terms
├── currency
├── instrument
├── minimum investment
├── jurisdiction/policy metadata
├── counsel-approved template
└── platform fee

Milestone tranches (3–5)
├── title
├── amount
├── milestone definition
├── proof requirements
└── target date (optional)
```

## Investor workflow

```text
Marketplace
  -> Search / filters
  -> Verified-only
  -> Preference match
  -> Watchlist
  -> Due diligence
  -> Express interest / offer
  -> Deal room
  -> Negotiate terms
  -> E-sign
  -> Fund escrow
  -> Review milestone proof
  -> Approve tranche release
```

## Marketplace UX

The marketplace supports:

- text search
- category filters
- verified-only filtering
- preference-match filtering/scoring
- sort by match, raise size or name
- private watchlists
- business-verification indicators
- derived raise goal
- tranche count and funded state

Match scores are recommendation signals, not investment advice or a guarantee of suitability.

## Due diligence page

Each listing should expose a structured diligence record:

```text
Overview
Product
Market / traction
Team
Deal terms
Milestone tranche plan
Funding / escrow state
Identity & business checks
Pitch deck
Demo
Data room documents
Disclosed risks
Agreement status
Audit references
```

Sensitive diligence documents remain participant-controlled/private rather than becoming public blockchain data.

## Investment-product boundary

The capital marketplace must not assume that calling an instrument a `SAFE`, `note`, `equity` or `token` determines regulatory treatment. Production launch requires jurisdiction-specific legal/compliance review, investor eligibility rules and approved offering documents.
