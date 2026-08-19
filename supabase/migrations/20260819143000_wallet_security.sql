-- Browser/public-key access is denied by default. The first-party API uses a
-- server-side database role and remains the authorization boundary.
ALTER TABLE IF EXISTS public.user_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.trusted_wallets ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.operator_profiles ENABLE ROW LEVEL SECURITY;

-- No permissive anon/authenticated policies are intentionally created here.
-- In particular, clients cannot promote themselves to operators or write
-- verifiedAt / verificationSource / verifiedByOperatorId through Supabase.
DO $$
BEGIN
  IF to_regclass('public.operator_profiles') IS NOT NULL THEN
    EXECUTE 'REVOKE INSERT, UPDATE, DELETE ON TABLE public.operator_profiles FROM anon, authenticated';
  END IF;
  IF to_regclass('public.trusted_wallets') IS NOT NULL THEN
    EXECUTE 'REVOKE UPDATE ("verifiedAt", "verificationSource", "verifiedByOperatorId") ON TABLE public.trusted_wallets FROM anon, authenticated';
  END IF;
END $$;
