-- PowerChain v1.0.0 — capital marketplace security layer.
-- Supabase/Postgres migration: RLS + column guards + append-only audit controls.
-- Run only after review against the actual production schema.

create extension if not exists pgcrypto;

create or replace function public.pc_is_service_role()
returns boolean
language sql
stable
set search_path = ''
as $$
  select coalesce(auth.role(), '') = 'service_role';
$$;

create or replace function public.pc_app_role()
returns text
language sql
stable
set search_path = ''
as $$
  select coalesce((auth.jwt() -> 'app_metadata' ->> 'app_role'), 'USER');
$$;

create or replace function public.pc_is_platform_reviewer()
returns boolean
language sql
stable
set search_path = ''
as $$
  select public.pc_app_role() in ('SUPER_ADMIN','PLATFORM_ADMIN','COMPLIANCE_REVIEWER','MODERATOR');
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  app_role text not null default 'USER' check (app_role in ('USER','FOUNDER','INVESTOR','ORG_ADMIN','COMPLIANCE_REVIEWER','MODERATOR','PLATFORM_ADMIN','SUPER_ADMIN')),
  verification_level text not null default 'NONE' check (verification_level in ('NONE','BASIC','IDENTITY','BUSINESS','ENHANCED')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null references auth.users(id),
  legal_name text not null,
  country_code text not null,
  verification_status text not null default 'PENDING' check (verification_status in ('PENDING','UNDER_REVIEW','VERIFIED','REJECTED','EXPIRED')),
  created_at timestamptz not null default now()
);

create table if not exists public.organization_members (
  organization_id uuid not null references public.organizations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  member_role text not null check (member_role in ('OWNER','ADMIN','FOUNDER','FINANCE','VIEWER')),
  created_at timestamptz not null default now(),
  primary key (organization_id, user_id)
);

create table if not exists public.founder_listings (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  founder_user_id uuid not null references auth.users(id),
  organization_id uuid not null references public.organizations(id),
  product_name text not null,
  tagline text not null,
  category text not null,
  stage text not null,
  location text not null,
  pitch_deck_storage_key text,
  demo_video_storage_key text,
  status text not null default 'DRAFT' check (status in ('DRAFT','UNDER_REVIEW','VERIFIED','LIVE','PAUSED','CLOSED')),
  verification_status text not null default 'PENDING' check (verification_status in ('PENDING','UNDER_REVIEW','VERIFIED','REJECTED','EXPIRED')),
  verified boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.listing_team_members (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.founder_listings(id) on delete cascade,
  name text not null,
  role text not null,
  bio text not null,
  sort_order integer not null default 0
);

create table if not exists public.listing_deal_terms (
  listing_id uuid primary key references public.founder_listings(id) on delete cascade,
  currency text not null check (currency in ('EUR','USD')),
  instrument text not null,
  minimum_investment_minor numeric(40,0),
  terms_json jsonb not null default '{}'::jsonb,
  platform_fee_bps integer not null check (platform_fee_bps between 0 and 10000),
  counsel_template_id text,
  updated_at timestamptz not null default now()
);

create table if not exists public.listing_tranches (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.founder_listings(id) on delete cascade,
  ordinal smallint not null check (ordinal between 1 and 5),
  title text not null,
  amount_minor numeric(40,0) not null check (amount_minor > 0),
  milestone_summary text not null,
  proof_requirements jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (listing_id, ordinal)
);

create or replace view public.listing_raise_totals
with (security_invoker = true)
as
select listing_id, count(*)::int as tranche_count, coalesce(sum(amount_minor),0)::numeric(40,0) as derived_goal_minor
from public.listing_tranches
group by listing_id;

create table if not exists public.investor_preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  categories text[] not null default '{}',
  stages text[] not null default '{}',
  countries text[] not null default '{}',
  min_ticket_minor numeric(40,0),
  max_ticket_minor numeric(40,0),
  updated_at timestamptz not null default now()
);

create table if not exists public.watchlist_items (
  user_id uuid not null references auth.users(id) on delete cascade,
  listing_id uuid not null references public.founder_listings(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, listing_id)
);

create table if not exists public.investor_interests (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.founder_listings(id) on delete cascade,
  investor_user_id uuid not null references auth.users(id),
  status text not null default 'OPEN' check (status in ('OPEN','ACCEPTED','DECLINED','WITHDRAWN')),
  note text,
  created_at timestamptz not null default now(),
  unique (listing_id, investor_user_id)
);

create table if not exists public.investor_offers (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.founder_listings(id) on delete cascade,
  investor_user_id uuid not null references auth.users(id),
  amount_minor numeric(40,0) not null check (amount_minor > 0),
  currency text not null check (currency in ('EUR','USD')),
  terms_json jsonb not null default '{}'::jsonb,
  status text not null default 'SUBMITTED' check (status in ('DRAFT','SUBMITTED','COUNTERED','ACCEPTED','REJECTED','WITHDRAWN','EXPIRED')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.deal_rooms (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.founder_listings(id) on delete cascade,
  offer_id uuid references public.investor_offers(id),
  status text not null default 'OPEN' check (status in ('OPEN','AGREEMENT_PENDING','SIGNED','CLOSED')),
  created_at timestamptz not null default now()
);

create table if not exists public.deal_room_participants (
  room_id uuid not null references public.deal_rooms(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  participant_role text not null check (participant_role in ('FOUNDER','INVESTOR','ADVISOR','PLATFORM_REVIEWER')),
  created_at timestamptz not null default now(),
  primary key (room_id, user_id)
);

create table if not exists public.deal_room_messages (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references public.deal_rooms(id) on delete cascade,
  sender_user_id uuid not null references auth.users(id),
  kind text not null check (kind in ('TEXT','DOCUMENT','IMAGE','VIDEO','SYSTEM')),
  body text,
  created_at timestamptz not null default now(),
  edited_at timestamptz
);

create table if not exists public.deal_room_attachments (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references public.deal_rooms(id) on delete cascade,
  uploader_user_id uuid not null references auth.users(id),
  storage_key text not null,
  file_name text not null,
  content_type text not null,
  size_bytes bigint not null check (size_bytes > 0),
  sha256 text not null check (length(sha256) = 64),
  created_at timestamptz not null default now()
);

create table if not exists public.verification_checks (
  id uuid primary key default gen_random_uuid(),
  subject_user_id uuid references auth.users(id),
  organization_id uuid references public.organizations(id),
  check_type text not null,
  status text not null default 'PENDING' check (status in ('PENDING','UNDER_REVIEW','VERIFIED','REJECTED','EXPIRED')),
  provider_reference text,
  reviewer_id uuid references auth.users(id),
  verified_at timestamptz,
  created_at timestamptz not null default now(),
  check (subject_user_id is not null or organization_id is not null)
);

create table if not exists public.escrow_accounts (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.founder_listings(id),
  investor_user_id uuid not null references auth.users(id),
  founder_user_id uuid not null references auth.users(id),
  asset text not null,
  status text not null default 'PENDING' check (status in ('PENDING','FUNDED','ACTIVE','PAUSED','COMPLETED','CANCELLED')),
  funded_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.escrow_tranches (
  id uuid primary key default gen_random_uuid(),
  escrow_id uuid not null references public.escrow_accounts(id) on delete cascade,
  listing_tranche_id uuid not null references public.listing_tranches(id),
  amount_minor numeric(40,0) not null check (amount_minor > 0),
  asset text not null,
  platform_fee_bps_snapshot integer check (platform_fee_bps_snapshot between 0 and 10000),
  status text not null default 'DRAFT' check (status in ('DRAFT','FUNDED','EVIDENCE_REQUIRED','READY_FOR_APPROVAL','APPROVED','RELEASED','REJECTED')),
  funded_at timestamptz,
  release_transaction_id text,
  released_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.milestone_proofs (
  id uuid primary key default gen_random_uuid(),
  escrow_tranche_id uuid not null references public.escrow_tranches(id) on delete cascade,
  submitter_user_id uuid not null references auth.users(id),
  ipfs_uri text not null check (ipfs_uri like 'ipfs://%'),
  sha256 text not null check (length(sha256) = 64),
  status text not null default 'SUBMITTED' check (status in ('SUBMITTED','UNDER_REVIEW','VERIFIED','REJECTED')),
  verified_by_investor_id uuid references auth.users(id),
  verified_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.audit_log (
  sequence bigint generated always as identity primary key,
  id uuid not null default gen_random_uuid() unique,
  event_type text not null,
  resource_type text not null,
  resource_id text not null,
  actor_user_id uuid references auth.users(id),
  payload_hash text not null,
  previous_event_hash text,
  event_hash text not null unique,
  created_at timestamptz not null default now()
);

-- Helper used by participant-only policies.
create or replace function public.pc_is_room_participant(target_room uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.deal_room_participants p
    where p.room_id = target_room and p.user_id = auth.uid()
  );
$$;
revoke all on function public.pc_is_room_participant(uuid) from public;
grant execute on function public.pc_is_room_participant(uuid) to authenticated;


-- Listing submission gate: the capital raise is structurally 3–5 tranches and has no independent typed goal.
create or replace function public.pc_validate_listing_tranche_plan()
returns trigger
language plpgsql
set search_path = ''
as $$
declare
  tranche_count integer;
begin
  if new.status in ('UNDER_REVIEW','VERIFIED','LIVE') and new.status is distinct from old.status then
    select count(*) into tranche_count from public.listing_tranches where listing_id = new.id;
    if tranche_count < 3 or tranche_count > 5 then
      raise exception 'capital listing requires 3 to 5 milestone tranches before submission/live status' using errcode = '23514';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists pc_listing_tranche_plan_guard on public.founder_listings;
create trigger pc_listing_tranche_plan_guard before update on public.founder_listings for each row execute function public.pc_validate_listing_tranche_plan();

-- Column guards: direct client requests cannot self-promote or forge trust state.
create or replace function public.pc_guard_profile_privilege_columns()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if not public.pc_is_service_role() then
    if new.app_role is distinct from old.app_role or new.verification_level is distinct from old.verification_level then
      raise exception 'protected profile columns may only be changed by trusted server workflows' using errcode = '42501';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists pc_profiles_privilege_guard on public.profiles;
create trigger pc_profiles_privilege_guard before update on public.profiles for each row execute function public.pc_guard_profile_privilege_columns();

create or replace function public.pc_guard_listing_verification_columns()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if not public.pc_is_service_role() then
    if tg_op = 'INSERT' then
      if new.verified or new.verification_status <> 'PENDING' or new.status <> 'DRAFT' then
        raise exception 'client-created listings must begin as unverified drafts' using errcode = '42501';
      end if;
    elsif new.verified is distinct from old.verified or new.verification_status is distinct from old.verification_status or new.status is distinct from old.status then
      raise exception 'listing verification/status columns are protected' using errcode = '42501';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists pc_listing_verification_guard on public.founder_listings;
create trigger pc_listing_verification_guard before insert or update on public.founder_listings for each row execute function public.pc_guard_listing_verification_columns();

create or replace function public.pc_guard_verification_result()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if not public.pc_is_service_role() then
    if tg_op = 'UPDATE' and (new.status is distinct from old.status or new.provider_reference is distinct from old.provider_reference or new.reviewer_id is distinct from old.reviewer_id or new.verified_at is distinct from old.verified_at) then
      raise exception 'verification results are server-controlled' using errcode = '42501';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists pc_verification_result_guard on public.verification_checks;
create trigger pc_verification_result_guard before update on public.verification_checks for each row execute function public.pc_guard_verification_result();

create or replace function public.pc_guard_escrow_tranche_columns()
returns trigger
language plpgsql
set search_path = ''
as $$
declare
  configured_fee_bps integer;
  agreed_amount numeric(40,0);
begin
  if not public.pc_is_service_role() then
    if new.status is distinct from old.status or new.funded_at is distinct from old.funded_at or new.release_transaction_id is distinct from old.release_transaction_id or new.released_at is distinct from old.released_at then
      raise exception 'escrow state is server-controlled' using errcode = '42501';
    end if;
    if old.status <> 'DRAFT' and (new.amount_minor is distinct from old.amount_minor or new.asset is distinct from old.asset or new.platform_fee_bps_snapshot is distinct from old.platform_fee_bps_snapshot) then
      raise exception 'funded escrow economics are immutable' using errcode = '42501';
    end if;
  end if;

  -- Funding transition snapshots the then-current platform fee and binds the escrow amount
  -- to the agreed listing tranche amount. The client cannot supply a different snapshot.
  if old.status = 'DRAFT' and new.status = 'FUNDED' then
    select dt.platform_fee_bps, lt.amount_minor
      into configured_fee_bps, agreed_amount
    from public.listing_tranches lt
    join public.listing_deal_terms dt on dt.listing_id = lt.listing_id
    where lt.id = new.listing_tranche_id;

    if configured_fee_bps is null or agreed_amount is null then
      raise exception 'cannot fund tranche without agreed deal terms and tranche amount' using errcode = '23514';
    end if;
    if new.amount_minor is distinct from agreed_amount then
      raise exception 'escrow amount must match agreed listing tranche amount' using errcode = '23514';
    end if;
    new.platform_fee_bps_snapshot := configured_fee_bps;
    new.funded_at := coalesce(new.funded_at, now());
  end if;

  if old.status <> 'DRAFT' and new.platform_fee_bps_snapshot is distinct from old.platform_fee_bps_snapshot then
    raise exception 'platform fee snapshot is immutable after funding' using errcode = '23514';
  end if;
  if new.status <> 'DRAFT' and new.platform_fee_bps_snapshot is null then
    raise exception 'platform fee snapshot is required before escrow funding' using errcode = '23514';
  end if;
  return new;
end;
$$;

drop trigger if exists pc_escrow_tranche_guard on public.escrow_tranches;
create trigger pc_escrow_tranche_guard before update on public.escrow_tranches for each row execute function public.pc_guard_escrow_tranche_columns();

create or replace function public.pc_guard_offer_state()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if not public.pc_is_service_role() then
    if tg_op = 'INSERT' and new.status not in ('DRAFT','SUBMITTED') then
      raise exception 'client-created offers may only begin as draft/submitted' using errcode = '42501';
    end if;
    if tg_op = 'UPDATE' then
      if new.investor_user_id is distinct from old.investor_user_id or new.listing_id is distinct from old.listing_id then
        raise exception 'offer ownership cannot be reassigned by client' using errcode = '42501';
      end if;
      if new.status is distinct from old.status and new.status not in ('DRAFT','SUBMITTED','WITHDRAWN') then
        raise exception 'counter/accept/reject states are server-controlled' using errcode = '42501';
      end if;
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists pc_offer_state_guard on public.investor_offers;
create trigger pc_offer_state_guard before insert or update on public.investor_offers for each row execute function public.pc_guard_offer_state();

create or replace function public.pc_guard_milestone_proof_result()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if not public.pc_is_service_role() then
    if tg_op = 'INSERT' then
      if new.status <> 'SUBMITTED' or new.verified_by_investor_id is not null or new.verified_at is not null then
        raise exception 'client-submitted proof cannot self-verify' using errcode = '42501';
      end if;
    elsif new.status is distinct from old.status or new.verified_by_investor_id is distinct from old.verified_by_investor_id or new.verified_at is distinct from old.verified_at then
      raise exception 'milestone proof verification is server-controlled' using errcode = '42501';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists pc_milestone_proof_guard on public.milestone_proofs;
create trigger pc_milestone_proof_guard before insert or update on public.milestone_proofs for each row execute function public.pc_guard_milestone_proof_result();

create or replace function public.pc_forbid_audit_mutation()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  raise exception 'audit_log is append-only' using errcode = '42501';
end;
$$;

drop trigger if exists pc_audit_append_only on public.audit_log;
create trigger pc_audit_append_only before update or delete on public.audit_log for each row execute function public.pc_forbid_audit_mutation();

-- RLS is explicit and role-scoped. Service role remains a trusted server capability.
alter table public.profiles enable row level security;
alter table public.organizations enable row level security;
alter table public.organization_members enable row level security;
alter table public.founder_listings enable row level security;
alter table public.listing_team_members enable row level security;
alter table public.listing_deal_terms enable row level security;
alter table public.listing_tranches enable row level security;
alter table public.investor_preferences enable row level security;
alter table public.watchlist_items enable row level security;
alter table public.investor_interests enable row level security;
alter table public.investor_offers enable row level security;
alter table public.deal_rooms enable row level security;
alter table public.deal_room_participants enable row level security;
alter table public.deal_room_messages enable row level security;
alter table public.deal_room_attachments enable row level security;
alter table public.verification_checks enable row level security;
alter table public.escrow_accounts enable row level security;
alter table public.escrow_tranches enable row level security;
alter table public.milestone_proofs enable row level security;
alter table public.audit_log enable row level security;

-- Profiles: owner can read/update ordinary columns, protected columns remain trigger-guarded.
drop policy if exists pc_profile_self_select on public.profiles;
create policy pc_profile_self_select on public.profiles for select to authenticated using ((select auth.uid()) = id);
drop policy if exists pc_profile_self_update on public.profiles;
create policy pc_profile_self_update on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);

-- Organizations and memberships.
drop policy if exists pc_org_member_select on public.organizations;
create policy pc_org_member_select on public.organizations for select to authenticated using (
  owner_user_id = (select auth.uid()) or exists (select 1 from public.organization_members m where m.organization_id = id and m.user_id = (select auth.uid()))
);
drop policy if exists pc_org_owner_update on public.organizations;
create policy pc_org_owner_update on public.organizations for update to authenticated using (owner_user_id = (select auth.uid())) with check (owner_user_id = (select auth.uid()));

drop policy if exists pc_org_members_select on public.organization_members;
create policy pc_org_members_select on public.organization_members for select to authenticated using (
  user_id = (select auth.uid()) or exists (select 1 from public.organizations o where o.id = organization_id and o.owner_user_id = (select auth.uid()))
);

-- Public marketplace reads only LIVE listings; founders can read own drafts.
drop policy if exists pc_listing_public_select on public.founder_listings;
create policy pc_listing_public_select on public.founder_listings for select to anon, authenticated using (status = 'LIVE' or founder_user_id = (select auth.uid()));
drop policy if exists pc_listing_founder_insert on public.founder_listings;
create policy pc_listing_founder_insert on public.founder_listings for insert to authenticated with check (founder_user_id = (select auth.uid()));
drop policy if exists pc_listing_founder_update on public.founder_listings;
create policy pc_listing_founder_update on public.founder_listings for update to authenticated using (founder_user_id = (select auth.uid())) with check (founder_user_id = (select auth.uid()));

-- Team and deal terms follow listing visibility; founders may edit only drafts/review state.
drop policy if exists pc_team_read on public.listing_team_members;
create policy pc_team_read on public.listing_team_members for select to anon, authenticated using (exists (select 1 from public.founder_listings l where l.id = listing_id and (l.status = 'LIVE' or l.founder_user_id = (select auth.uid()))));
drop policy if exists pc_team_founder_write on public.listing_team_members;
create policy pc_team_founder_write on public.listing_team_members for all to authenticated using (exists (select 1 from public.founder_listings l where l.id = listing_id and l.founder_user_id = (select auth.uid()) and l.status in ('DRAFT','UNDER_REVIEW'))) with check (exists (select 1 from public.founder_listings l where l.id = listing_id and l.founder_user_id = (select auth.uid()) and l.status in ('DRAFT','UNDER_REVIEW')));

drop policy if exists pc_deal_terms_read on public.listing_deal_terms;
create policy pc_deal_terms_read on public.listing_deal_terms for select to anon, authenticated using (exists (select 1 from public.founder_listings l where l.id = listing_id and (l.status = 'LIVE' or l.founder_user_id = (select auth.uid()))));
drop policy if exists pc_deal_terms_founder_write on public.listing_deal_terms;
create policy pc_deal_terms_founder_write on public.listing_deal_terms for all to authenticated using (exists (select 1 from public.founder_listings l where l.id = listing_id and l.founder_user_id = (select auth.uid()) and l.status in ('DRAFT','UNDER_REVIEW'))) with check (exists (select 1 from public.founder_listings l where l.id = listing_id and l.founder_user_id = (select auth.uid()) and l.status in ('DRAFT','UNDER_REVIEW')));

-- Tranche details: public for live listings; founder may edit while listing is not live.
drop policy if exists pc_tranche_read on public.listing_tranches;
create policy pc_tranche_read on public.listing_tranches for select to anon, authenticated using (exists (select 1 from public.founder_listings l where l.id = listing_id and (l.status = 'LIVE' or l.founder_user_id = (select auth.uid()))));
drop policy if exists pc_tranche_founder_write on public.listing_tranches;
create policy pc_tranche_founder_write on public.listing_tranches for all to authenticated using (exists (select 1 from public.founder_listings l where l.id = listing_id and l.founder_user_id = (select auth.uid()) and l.status in ('DRAFT','UNDER_REVIEW'))) with check (exists (select 1 from public.founder_listings l where l.id = listing_id and l.founder_user_id = (select auth.uid()) and l.status in ('DRAFT','UNDER_REVIEW')));

-- Watchlists and preferences are investor-private.
drop policy if exists pc_watchlist_owner on public.watchlist_items;
create policy pc_watchlist_owner on public.watchlist_items for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
drop policy if exists pc_preferences_owner on public.investor_preferences;
create policy pc_preferences_owner on public.investor_preferences for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

-- Interest/offer rows are visible only to the investor or listing founder.
drop policy if exists pc_interest_parties on public.investor_interests;
create policy pc_interest_parties on public.investor_interests for select to authenticated using (investor_user_id = (select auth.uid()) or exists (select 1 from public.founder_listings l where l.id = listing_id and l.founder_user_id = (select auth.uid())));
drop policy if exists pc_interest_investor_insert on public.investor_interests;
create policy pc_interest_investor_insert on public.investor_interests for insert to authenticated with check (investor_user_id = (select auth.uid()));

drop policy if exists pc_offer_parties on public.investor_offers;
create policy pc_offer_parties on public.investor_offers for select to authenticated using (investor_user_id = (select auth.uid()) or exists (select 1 from public.founder_listings l where l.id = listing_id and l.founder_user_id = (select auth.uid())));
drop policy if exists pc_offer_investor_insert on public.investor_offers;
create policy pc_offer_investor_insert on public.investor_offers for insert to authenticated with check (investor_user_id = (select auth.uid()));
drop policy if exists pc_offer_investor_update on public.investor_offers;
create policy pc_offer_investor_update on public.investor_offers for update to authenticated using (investor_user_id = (select auth.uid()) and status in ('DRAFT','SUBMITTED','COUNTERED')) with check (investor_user_id = (select auth.uid()));

-- Deal-room access is participant-only.
drop policy if exists pc_room_participant_select on public.deal_rooms;
create policy pc_room_participant_select on public.deal_rooms for select to authenticated using (public.pc_is_room_participant(id));
drop policy if exists pc_room_participants_select on public.deal_room_participants;
create policy pc_room_participants_select on public.deal_room_participants for select to authenticated using (public.pc_is_room_participant(room_id));
drop policy if exists pc_room_messages_select on public.deal_room_messages;
create policy pc_room_messages_select on public.deal_room_messages for select to authenticated using (public.pc_is_room_participant(room_id));
drop policy if exists pc_room_messages_insert on public.deal_room_messages;
create policy pc_room_messages_insert on public.deal_room_messages for insert to authenticated with check (sender_user_id = (select auth.uid()) and public.pc_is_room_participant(room_id));
drop policy if exists pc_room_attachments_select on public.deal_room_attachments;
create policy pc_room_attachments_select on public.deal_room_attachments for select to authenticated using (public.pc_is_room_participant(room_id));
drop policy if exists pc_room_attachments_insert on public.deal_room_attachments;
create policy pc_room_attachments_insert on public.deal_room_attachments for insert to authenticated with check (uploader_user_id = (select auth.uid()) and public.pc_is_room_participant(room_id));

-- Verification is readable by its subject/organization owner; results are server-written.
drop policy if exists pc_verification_subject_select on public.verification_checks;
create policy pc_verification_subject_select on public.verification_checks for select to authenticated using (
  subject_user_id = (select auth.uid()) or exists (select 1 from public.organizations o where o.id = organization_id and o.owner_user_id = (select auth.uid())) or public.pc_is_platform_reviewer()
);

-- Escrow and proof rows are visible only to counterparties and privileged reviewers.
drop policy if exists pc_escrow_parties_select on public.escrow_accounts;
create policy pc_escrow_parties_select on public.escrow_accounts for select to authenticated using (investor_user_id = (select auth.uid()) or founder_user_id = (select auth.uid()) or public.pc_is_platform_reviewer());
drop policy if exists pc_escrow_tranches_select on public.escrow_tranches;
create policy pc_escrow_tranches_select on public.escrow_tranches for select to authenticated using (exists (select 1 from public.escrow_accounts e where e.id = escrow_id and (e.investor_user_id = (select auth.uid()) or e.founder_user_id = (select auth.uid()) or public.pc_is_platform_reviewer())));
drop policy if exists pc_proofs_parties_select on public.milestone_proofs;
create policy pc_proofs_parties_select on public.milestone_proofs for select to authenticated using (exists (select 1 from public.escrow_tranches t join public.escrow_accounts e on e.id=t.escrow_id where t.id = escrow_tranche_id and (e.investor_user_id = (select auth.uid()) or e.founder_user_id = (select auth.uid()) or public.pc_is_platform_reviewer())));
drop policy if exists pc_proofs_founder_insert on public.milestone_proofs;
create policy pc_proofs_founder_insert on public.milestone_proofs for insert to authenticated with check (submitter_user_id = (select auth.uid()) and exists (select 1 from public.escrow_tranches t join public.escrow_accounts e on e.id=t.escrow_id where t.id = escrow_tranche_id and e.founder_user_id = (select auth.uid())));

-- Audit is not directly writable by regular clients; reviewers can read.
drop policy if exists pc_audit_reviewer_select on public.audit_log;
create policy pc_audit_reviewer_select on public.audit_log for select to authenticated using (public.pc_is_platform_reviewer() or actor_user_id = (select auth.uid()));

-- Explicit grants: direct client roles receive only the operations covered by RLS.
grant select, insert, update on public.profiles to authenticated;
grant select, insert, update on public.founder_listings to authenticated;
grant select, insert, update, delete on public.listing_tranches to authenticated;
grant select, insert, update, delete on public.listing_team_members to authenticated;
grant select, insert, update, delete on public.listing_deal_terms to authenticated;
grant select, insert, update, delete on public.watchlist_items to authenticated;
grant select, insert, update on public.investor_preferences to authenticated;
grant select, insert, update on public.investor_interests to authenticated;
grant select, insert, update on public.investor_offers to authenticated;
grant select on public.deal_rooms, public.deal_room_participants to authenticated;
grant select, insert on public.deal_room_messages, public.deal_room_attachments to authenticated;
grant select on public.verification_checks, public.escrow_accounts, public.escrow_tranches, public.milestone_proofs, public.audit_log to authenticated;
grant select on public.founder_listings, public.listing_tranches, public.listing_team_members, public.listing_deal_terms, public.listing_raise_totals to anon;
grant select on public.listing_raise_totals to authenticated;
