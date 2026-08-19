/**
 * Real end-user RLS verification harness.
 * Run only in a dedicated staging/production test tenant with disposable fixtures.
 * Requires service-role access in the CI environment to confirm that forbidden
 * end-user PATCH requests did not mutate protected rows.
 */
const required = [
  "SUPABASE_URL",
  "SUPABASE_PUBLISHABLE_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "RLS_TEST_USER_EMAIL",
  "RLS_TEST_USER_PASSWORD",
  "RLS_TEST_PROFILE_ID",
  "RLS_TEST_VERIFICATION_CHECK_ID",
  "RLS_TEST_ESCROW_TRANCHE_ID",
];
for (const key of required) if (!process.env[key]) throw new Error(`Missing ${key}`);

const base = process.env.SUPABASE_URL.replace(/\/$/, "");
const publishable = process.env.SUPABASE_PUBLISHABLE_KEY;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function login() {
  const response = await fetch(`${base}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: { apikey: publishable, "content-type": "application/json" },
    body: JSON.stringify({ email: process.env.RLS_TEST_USER_EMAIL, password: process.env.RLS_TEST_USER_PASSWORD }),
  });
  if (!response.ok) throw new Error(`Test-user login failed (${response.status}).`);
  const data = await response.json();
  if (!data.access_token) throw new Error("Test-user login did not return an access token.");
  return data.access_token;
}

async function serviceRow(table, id) {
  const response = await fetch(`${base}/rest/v1/${table}?id=eq.${encodeURIComponent(id)}&select=*`, {
    headers: { apikey: service, authorization: `Bearer ${service}`, accept: "application/json" },
  });
  if (!response.ok) throw new Error(`Service read failed for ${table} (${response.status}).`);
  const rows = await response.json();
  if (!rows[0]) throw new Error(`Fixture missing: ${table}/${id}`);
  return rows[0];
}

async function userPatch(token, table, id, patch) {
  return fetch(`${base}/rest/v1/${table}?id=eq.${encodeURIComponent(id)}`, {
    method: "PATCH",
    headers: { apikey: publishable, authorization: `Bearer ${token}`, "content-type": "application/json", prefer: "return=representation" },
    body: JSON.stringify(patch),
  });
}

async function assertUnchanged({ token, table, id, patch, protectedKeys, label }) {
  const before = await serviceRow(table, id);
  await userPatch(token, table, id, patch);
  const after = await serviceRow(table, id);
  for (const key of protectedKeys) {
    if (JSON.stringify(before[key]) !== JSON.stringify(after[key])) throw new Error(`${label}: protected column ${key} changed.`);
  }
  console.log(`PASS ${label}`);
}

const token = await login();
await assertUnchanged({ token, table: "profiles", id: process.env.RLS_TEST_PROFILE_ID, patch: { app_role: "SUPER_ADMIN", verification_level: "ENHANCED" }, protectedKeys: ["app_role","verification_level"], label: "end user cannot self-promote" });
await assertUnchanged({ token, table: "verification_checks", id: process.env.RLS_TEST_VERIFICATION_CHECK_ID, patch: { status: "VERIFIED", verified_at: new Date().toISOString() }, protectedKeys: ["status","verified_at"], label: "end user cannot forge verification" });
const tranche = await serviceRow("escrow_tranches", process.env.RLS_TEST_ESCROW_TRANCHE_ID);
const alteredAmount = String(BigInt(String(tranche.amount_minor)) + 1n);
await assertUnchanged({ token, table: "escrow_tranches", id: process.env.RLS_TEST_ESCROW_TRANCHE_ID, patch: { amount_minor: alteredAmount, platform_fee_bps_snapshot: 0 }, protectedKeys: ["amount_minor","platform_fee_bps_snapshot"], label: "end user cannot rewrite funded escrow economics" });
console.log("Production RLS security contract verified for configured fixtures.");
