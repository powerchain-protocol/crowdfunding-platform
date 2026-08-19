import fs from "node:fs";
const required=["apps/api/lib/oauth.ts","apps/api/app/api/v1/auth/oauth/google/start/route.ts","apps/api/app/api/v1/auth/oauth/x/start/route.ts","apps/web/app/api/auth/callback/x/route.ts","apps/web/app/api/auth/callback/google/route.ts","apps/api/app/api/v1/sessions/route.ts","apps/api/app/api/v1/users/me/route.ts","packages/ui/src/cookies.tsx"];
const missing=required.filter(x=>!fs.existsSync(x));if(missing.length){console.error("Auth integration files missing:",missing.join(", "));process.exit(1)}
const env=fs.readFileSync(".env.example","utf8");for(const k of ["AUTH_X_ID=","AUTH_GOOGLE_ID=","AUTH_REMEMBER_DAYS=27","SEED_DEMO_USERS=false","ENABLE_DEMO_AUTH=false"])if(!env.includes(k)){console.error(`Missing ${k} in .env.example`);process.exit(1)}
const seed=fs.readFileSync("prisma/seed.ts","utf8");if(!seed.includes('SEED_DEMO_USERS!=="true"')||!seed.includes('POWERCHAIN_ENV==="production"')){console.error("Seed guard is missing.");process.exit(1)}
console.log("Auth integrations OK: Google/X OAuth boundaries, 27-day opt-in session, local-only demo guard, sessions and account deletion surfaces present.");
