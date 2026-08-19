-- PowerChain v1.0.0 SaaS/auth hardening.
-- First-party sessions are resolved only by the server API. No browser role receives direct row access.
alter table if exists public.users enable row level security;
alter table if exists public.organizations enable row level security;
alter table if exists public.organization_memberships enable row level security;
alter table if exists public.sessions enable row level security;
alter table if exists public.saas_subscriptions enable row level security;
alter table if exists public.usage_events enable row level security;
alter table if exists public.password_reset_tokens enable row level security;

-- Intentionally no anon/authenticated policies on credentials, sessions, subscriptions, or reset tokens.
-- The server/database role is the only runtime path for these records.
