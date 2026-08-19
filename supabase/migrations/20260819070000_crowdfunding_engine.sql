create table if not exists public.crowdfunding_campaigns (
  id uuid primary key default gen_random_uuid(), owner_id uuid not null references auth.users(id), title text not null,
  goal_amount numeric(30,9) not null check(goal_amount>0), funded_amount numeric(30,9) not null default 0 check(funded_amount>=0),
  deadline timestamptz not null, escrow_address text not null, status text not null default 'DRAFT', created_at timestamptz not null default now()
);
create table if not exists public.crowdfunding_refunds (
  id uuid primary key default gen_random_uuid(), campaign_id uuid not null references public.crowdfunding_campaigns(id), contributor_id uuid not null references auth.users(id), amount numeric(30,9) not null check(amount>0), signature text, status text not null, created_at timestamptz not null default now(), unique(campaign_id,contributor_id,signature)
);
alter table public.crowdfunding_campaigns enable row level security;
alter table public.crowdfunding_refunds enable row level security;
create policy "campaigns public read published" on public.crowdfunding_campaigns for select using(status in ('OPEN','SUCCESS','FAILED','REFUNDING','CLOSED') or owner_id=auth.uid());
create policy "owners insert campaign" on public.crowdfunding_campaigns for insert to authenticated with check(owner_id=auth.uid());
create policy "owners update own campaign metadata" on public.crowdfunding_campaigns for update to authenticated using(owner_id=auth.uid()) with check(owner_id=auth.uid());
create policy "contributors read own refunds" on public.crowdfunding_refunds for select to authenticated using(contributor_id=auth.uid());
revoke update (funded_amount, escrow_address, status) on public.crowdfunding_campaigns from authenticated, anon;
create or replace function public.guard_crowdfunding_financial_columns() returns trigger language plpgsql security definer set search_path=public as $$ begin
 if new.funded_amount is distinct from old.funded_amount or new.escrow_address is distinct from old.escrow_address then raise exception 'financial columns are indexer/service-role managed'; end if; return new; end $$;
drop trigger if exists trg_guard_crowdfunding_financial on public.crowdfunding_campaigns;
create trigger trg_guard_crowdfunding_financial before update on public.crowdfunding_campaigns for each row execute function public.guard_crowdfunding_financial_columns();
