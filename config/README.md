# Root Configuration

Canonical configuration lives here so apps and packages do not drift.

- `typescript/base.json` — strict shared TypeScript baseline with **no implicit ambient type packages**.
- `typescript/nextjs.json` — Next.js app config with Node + React ambient types.
- `typescript/react-node-library.json` — React workspace libraries that also read build-time `process.env` values.
- `typescript/react-library.json` — browser React libraries without Node globals.
- `typescript/node-library.json` — server/runtime libraries.
- `typescript/library.json` — framework-neutral TypeScript libraries.
- `next/shared.mjs` — shared Next.js 16/Turbopack monorepo config.
- `security/headers.ts` — API Proxy CORS/security header constants.
- `runtime/versions.json` — canonical runtime/toolchain versions.

## Why `types: []` in the base config?

pnpm intentionally isolates dependencies. Allowing TypeScript to discover every `@types/*` package implicitly can make editor behavior depend on hoisting and partial installs. The base config disables implicit ambient packages and each project opts into exactly what it needs.

Next apps use `node`, `react`, and `react-dom`; the shared UI uses the React+Node library profile because Next replaces selected `NEXT_PUBLIC_*` environment values at build time.
