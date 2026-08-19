# Prisma migrations

Migrations are append-only database history. Do not edit a migration after it has been deployed.

The `20260819143000_wallet_network_preferences` migration adds user currency/network preferences, trusted wallets and server-managed operator profiles. Browser database roles must not be permitted to promote operators or write wallet verification fields; the companion Supabase hardening migration lives under `supabase/migrations/`.

Use:

```bash
pnpm db:migrate:status
pnpm db:migrate
pnpm db:migrate:deploy
```

Database commands require a reachable `DATABASE_URL`.
