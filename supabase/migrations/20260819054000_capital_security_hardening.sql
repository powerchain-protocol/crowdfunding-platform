-- PowerChain v1.0.0 — capital security hardening.
-- Defense in depth on top of RLS: FORCE RLS, least-privilege column grants,
-- protected deal-term economics, and indexes used by authorization policies.

-- Force RLS for table owners that do not have BYPASSRLS. Trusted service/BYPASSRLS
-- workflows remain server-only and must still go through application policy/audit.
alter table public.profiles force row level security;
alter table public.organizations force row level security;
alter table public.organization_members force row level security;
alter table public.founder_listings force row level security;
alter table public.listing_team_members force row level security;
alter table public.listing_deal_terms force row level security;
alter table public.listing_tranches force row level security;
alter table public.investor_preferences force row level security;
alter table public.watchlist_items force row level security;
alter table public.investor_interests force row level security;
alter table public.investor_offers force row level security;
alter table public.deal_rooms force row level security;
alter table public.deal_room_participants force row level security;
alter table public.deal_room_messages force row level security;
alter table public.deal_room_attachments force row level security;
alter table public.verification_checks force row level security;
alter table public.escrow_accounts force row level security;
alter table public.escrow_tranches force row level security;
alter table public.milestone_proofs force row level security;
alter table public.audit_log force row level security;

-- Functions are not meant to become a generic RPC surface. PostgreSQL grants
-- EXECUTE on functions to PUBLIC by default, so remove that default explicitly.
revoke all on function public.pc_is_service_role() from public, anon, authenticated;
revoke all on function public.pc_app_role() from public, anon, authenticated;
revoke all on function public.pc_is_platform_reviewer() from public, anon, authenticated;
revoke all on function public.pc_validate_listing_tranche_plan() from public, anon, authenticated;
revoke all on function public.pc_guard_profile_privilege_columns() from public, anon, authenticated;
revoke all on function public.pc_guard_listing_verification_columns() from public, anon, authenticated;
revoke all on function public.pc_guard_verification_result() from public, anon, authenticated;
revoke all on function public.pc_guard_escrow_tranche_columns() from public, anon, authenticated;
revoke all on function public.pc_guard_offer_state() from public, anon, authenticated;
revoke all on function public.pc_guard_milestone_proof_result() from public, anon, authenticated;
revoke all on function public.pc_forbid_audit_mutation() from public, anon, authenticated;

-- RLS policies need only these read-only helpers for the authenticated role.
grant execute on function public.pc_app_role() to authenticated;
grant execute on function public.pc_is_platform_reviewer() to authenticated;
-- pc_is_room_participant was already restricted in the base migration.

-- Client profile updates are limited to display data. Role and verification fields
-- cannot be targeted even before the trigger guard runs.
revoke update on table public.profiles from authenticated;
grant update (display_name, updated_at) on public.profiles to authenticated;

-- Listing lifecycle/verification/ownership is server-controlled. Founders may edit
-- ordinary listing content while the RLS policy permits the row.
revoke update on table public.founder_listings from authenticated;
grant update (
  product_name,
  tagline,
  category,
  stage,
  location,
  pitch_deck_storage_key,
  demo_video_storage_key,
  updated_at
) on public.founder_listings to authenticated;

-- Platform fee and counsel template selection are trusted workflow inputs. Deal-term
-- writes therefore go through the server API rather than a direct publishable-key write.
revoke insert, update, delete on table public.listing_deal_terms from authenticated;
grant select on table public.listing_deal_terms to authenticated;

-- Investor can update the economics of their own offer while RLS and the offer-state
-- trigger still restrict ownership and state transitions.
revoke update on table public.investor_offers from authenticated;
grant update (amount_minor, currency, terms_json, status, updated_at) on public.investor_offers to authenticated;

-- Founder proof metadata may be inserted directly only into their own escrow tranche;
-- result/verification columns are omitted from INSERT privilege entirely.
grant insert (escrow_tranche_id, submitter_user_id, ipfs_uri, sha256)
  on public.milestone_proofs to authenticated;

-- Index authorization/filter columns used repeatedly by RLS to keep policies practical
-- at marketplace scale.
create index if not exists idx_org_members_user_org on public.organization_members (user_id, organization_id);
create index if not exists idx_founder_listings_founder_status on public.founder_listings (founder_user_id, status);
create index if not exists idx_founder_listings_org_status on public.founder_listings (organization_id, status);
create index if not exists idx_listing_team_listing on public.listing_team_members (listing_id);
create index if not exists idx_listing_tranches_listing on public.listing_tranches (listing_id, ordinal);
create index if not exists idx_watchlist_user on public.watchlist_items (user_id, created_at desc);
create index if not exists idx_interests_investor_listing on public.investor_interests (investor_user_id, listing_id);
create index if not exists idx_offers_investor_listing on public.investor_offers (investor_user_id, listing_id);
create index if not exists idx_deal_room_participants_user_room on public.deal_room_participants (user_id, room_id);
create index if not exists idx_deal_room_messages_room_created on public.deal_room_messages (room_id, created_at desc);
create index if not exists idx_deal_room_attachments_room_created on public.deal_room_attachments (room_id, created_at desc);
create index if not exists idx_verification_subject on public.verification_checks (subject_user_id, status);
create index if not exists idx_verification_org on public.verification_checks (organization_id, status);
create index if not exists idx_escrow_parties on public.escrow_accounts (investor_user_id, founder_user_id);
create index if not exists idx_escrow_tranches_escrow on public.escrow_tranches (escrow_id, status);
create index if not exists idx_milestone_proofs_tranche on public.milestone_proofs (escrow_tranche_id, status);
create index if not exists idx_audit_resource on public.audit_log (resource_type, resource_id, sequence desc);

-- Ownership-aware marketplace policies. Knowing a UUID must never be enough to attach
-- a listing to another organization or negotiate against a non-live listing.
drop policy if exists pc_listing_founder_insert on public.founder_listings;
create policy pc_listing_founder_insert on public.founder_listings
for insert to authenticated
with check (
  founder_user_id = (select auth.uid())
  and exists (
    select 1
    from public.organizations o
    where o.id = organization_id
      and (
        o.owner_user_id = (select auth.uid())
        or exists (
          select 1 from public.organization_members m
          where m.organization_id = o.id
            and m.user_id = (select auth.uid())
            and m.member_role in ('OWNER','ADMIN','FOUNDER')
        )
      )
  )
);

drop policy if exists pc_watchlist_owner on public.watchlist_items;
create policy pc_watchlist_owner on public.watchlist_items
for all to authenticated
using (user_id = (select auth.uid()))
with check (
  user_id = (select auth.uid())
  and exists (select 1 from public.founder_listings l where l.id = listing_id and l.status = 'LIVE' and l.verified)
);

drop policy if exists pc_interest_investor_insert on public.investor_interests;
create policy pc_interest_investor_insert on public.investor_interests
for insert to authenticated
with check (
  investor_user_id = (select auth.uid())
  and exists (select 1 from public.founder_listings l where l.id = listing_id and l.status = 'LIVE' and l.verified)
);

drop policy if exists pc_offer_investor_insert on public.investor_offers;
create policy pc_offer_investor_insert on public.investor_offers
for insert to authenticated
with check (
  investor_user_id = (select auth.uid())
  and exists (select 1 from public.founder_listings l where l.id = listing_id and l.status = 'LIVE' and l.verified)
);

drop policy if exists pc_proofs_founder_insert on public.milestone_proofs;
create policy pc_proofs_founder_insert on public.milestone_proofs
for insert to authenticated
with check (
  submitter_user_id = (select auth.uid())
  and exists (
    select 1
    from public.escrow_tranches t
    join public.escrow_accounts e on e.id = t.escrow_id
    where t.id = escrow_tranche_id
      and e.founder_user_id = (select auth.uid())
      and e.status in ('FUNDED','ACTIVE')
      and t.status in ('FUNDED','EVIDENCE_REQUIRED')
  )
);
