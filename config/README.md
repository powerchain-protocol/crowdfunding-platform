# Canonical configuration

`config/` is the single source for monorepo-wide runtime and build configuration.

```text
config/typescript/          strict TypeScript profiles
config/next/                shared Next.js/Turbopack config
config/security/            security/header constants
config/runtime/             canonical runtime versions
config/workspace/           canonical app inventory
config/repository/templates non-hidden recovery templates for root dotfiles
```

The recovery templates exist because some archive/copy workflows omit dotfiles. Missing safe root files can be recreated without guessing:

```bash
pnpm repair:repository
```

Next.js apps extend `config/typescript/nextjs.json`; libraries opt into the narrow Node/React profile they actually need. The shared base intentionally avoids implicit ambient type discovery so pnpm's isolated dependency model remains deterministic.
