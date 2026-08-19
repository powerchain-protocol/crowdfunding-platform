# Runtime & Next.js — Canonical v1.0.0

The product/API version remains **1.0.0**. Toolchain upgrades do not change the product contract.

- Node.js: **26.x** repository runtime.
- Next.js: **16.3.1**, App Router, typed routes, Turbopack-capable.
- TypeScript: **6.0.x** compiler line.
- TypeScript base target: ES2024 with bundler resolution, strict mode, exact optional properties, no unchecked indexed access and verbatim module syntax.

`.nvmrc`, `.node-version`, `engines.node` and `scripts/doctor.mjs` are aligned to Node 26.

Node 26 is a Current release at the time of this upgrade rather than the Node 24 LTS line. Production operators should deliberately accept that trade-off and retest native/cryptography/blockchain dependencies before deployment.
