-- PowerChain v1.0.0 security companion migration.
-- These first-party tables are server-API owned. Public/anon browser keys receive no direct write policy.
alter table if exists public.auth_identities enable row level security;
alter table if exists public.user_rpc_settings enable row level security;
alter table if exists public.capital_pots enable row level security;
alter table if exists public.capital_contributions enable row level security;
alter table if exists public.ledger_journals enable row level security;
alter table if exists public.ledger_postings enable row level security;
alter table if exists public.x_tip_records enable row level security;
alter table if exists public.saved_prompts enable row level security;

-- No permissive anon/authenticated policies are created here on purpose.
-- Prisma/server operations use the protected server database credential and enforce session/organization ownership.
revoke all on table public.auth_identities from anon, authenticated;
revoke all on table public.user_rpc_settings from anon, authenticated;
revoke all on table public.capital_contributions from anon, authenticated;
revoke all on table public.ledger_journals from anon, authenticated;
revoke all on table public.ledger_postings from anon, authenticated;
