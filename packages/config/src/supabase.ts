function present(value?: string): boolean {
  return Boolean(value?.trim());
}

export function getSupabaseConfigStatus(env: NodeJS.ProcessEnv = process.env) {
  return {
    publicUrlConfigured: present(env.NEXT_PUBLIC_SUPABASE_URL ?? env.SUPABASE_URL),
    publishableKeyConfigured: present(env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? env.SUPABASE_PUBLISHABLE_KEY),
    serviceRoleConfigured: present(env.SUPABASE_SERVICE_ROLE_KEY),
    projectRefConfigured: present(env.SUPABASE_PROJECT_REF),
  } as const;
}

export function getPrismaDatabaseConfigStatus(env: NodeJS.ProcessEnv = process.env) {
  return {
    databaseUrlConfigured: present(env.DATABASE_URL),
    directUrlConfigured: present(env.DIRECT_URL),
    shadowDatabaseUrlConfigured: present(env.SHADOW_DATABASE_URL),
  } as const;
}
