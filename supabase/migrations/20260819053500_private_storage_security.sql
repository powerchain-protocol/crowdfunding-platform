-- PowerChain private storage policies for KYC, deal-room media, and milestone proofs.
-- Bucket creation/provider configuration should be performed through controlled infrastructure.

create or replace function public.pc_first_storage_folder(object_name text)
returns text
language sql
immutable
set search_path = ''
as $$
  select nullif((storage.foldername(object_name))[1], '');
$$;

create or replace function public.pc_first_storage_folder_uuid(object_name text)
returns uuid
language plpgsql
immutable
set search_path = ''
as $$
declare value text;
begin
  value := public.pc_first_storage_folder(object_name);
  if value is null then return null; end if;
  return value::uuid;
exception when invalid_text_representation then
  return null;
end;
$$;

-- KYC files use: <user_uuid>/<random_object_name>
drop policy if exists pc_kyc_owner_upload on storage.objects;
create policy pc_kyc_owner_upload on storage.objects
for insert to authenticated
with check (bucket_id = 'kyc-private' and public.pc_first_storage_folder_uuid(name) = (select auth.uid()));

drop policy if exists pc_kyc_owner_read on storage.objects;
create policy pc_kyc_owner_read on storage.objects
for select to authenticated
using (bucket_id = 'kyc-private' and public.pc_first_storage_folder_uuid(name) = (select auth.uid()));

-- Deal-room files use: <room_uuid>/<random_object_name>
drop policy if exists pc_deal_room_file_upload on storage.objects;
create policy pc_deal_room_file_upload on storage.objects
for insert to authenticated
with check (bucket_id = 'deal-room-private' and public.pc_is_room_participant(public.pc_first_storage_folder_uuid(name)));

drop policy if exists pc_deal_room_file_read on storage.objects;
create policy pc_deal_room_file_read on storage.objects
for select to authenticated
using (bucket_id = 'deal-room-private' and public.pc_is_room_participant(public.pc_first_storage_folder_uuid(name)));

-- Milestone proofs are uploaded under the escrow tranche UUID. Founder ownership is checked in DB.
drop policy if exists pc_milestone_proof_upload on storage.objects;
create policy pc_milestone_proof_upload on storage.objects
for insert to authenticated
with check (
  bucket_id = 'milestone-proof-private'
  and exists (
    select 1
    from public.escrow_tranches t
    join public.escrow_accounts e on e.id = t.escrow_id
    where t.id = public.pc_first_storage_folder_uuid(name)
      and e.founder_user_id = (select auth.uid())
  )
);

drop policy if exists pc_milestone_proof_read on storage.objects;
create policy pc_milestone_proof_read on storage.objects
for select to authenticated
using (
  bucket_id = 'milestone-proof-private'
  and exists (
    select 1
    from public.escrow_tranches t
    join public.escrow_accounts e on e.id = t.escrow_id
    where t.id = public.pc_first_storage_folder_uuid(name)
      and (e.founder_user_id = (select auth.uid()) or e.investor_user_id = (select auth.uid()) or public.pc_is_platform_reviewer())
  )
);
