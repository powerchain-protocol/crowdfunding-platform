-- pgTAP-oriented security expectations for local/staging Supabase testing.
-- Requires test fixtures and authenticated JWT context supplied by the test harness.
begin;
select plan(8);
select has_table('public','profiles','profiles exists');
select has_table('public','founder_listings','founder listings exists');
select has_table('public','escrow_tranches','escrow tranches exists');
select has_table('public','audit_log','audit log exists');
select policies_are('public','watchlist_items',array['pc_watchlist_owner'],'watchlist is owner-scoped');
select policies_are('public','deal_room_messages',array['pc_room_messages_select','pc_room_messages_insert'],'deal-room messages are participant-scoped');
select trigger_is('public','profiles','pc_profiles_privilege_guard','public.pc_guard_profile_privilege_columns()','profile privilege columns guarded');
select trigger_is('public','audit_log','pc_audit_append_only','public.pc_forbid_audit_mutation()','audit log is append-only');
select * from finish();
rollback;
