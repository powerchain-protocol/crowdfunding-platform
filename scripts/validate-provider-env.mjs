import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const files = [
  ".env.example",
  "env/development.env.example",
  "env/test.env.example",
  "env/production.env.example",
  "env/solana.env.example",
  "env/supabase.env.example",
];

const requiredSolana = [
  "SOLANA_CLUSTER",
  "SOLANA_DEVNET_RPC_URL",
  "SOLANA_MAINNET_RPC_URL",
  "SOLANA_TOKEN_2022_PROGRAM_ID",
  "CROWDFUNDING_PROGRAM_ID",
  "SOLANA_MILESTONE_ESCROW_PROGRAM_ID",
];
const requiredSupabase = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "DATABASE_URL",
  "DIRECT_URL",
];

const errors = [];
for (const file of files) {
  const text = readFileSync(resolve(root, file), "utf8");
  const keys = new Set(
    text
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#") && line.includes("="))
      .map((line) => line.slice(0, line.indexOf("="))),
  );

  const wantsSolana = !file.includes("supabase.env");
  const wantsSupabase = !file.includes("solana.env");
  if (wantsSolana) for (const key of requiredSolana) if (!keys.has(key)) errors.push(`${file}: missing ${key}`);
  if (wantsSupabase) for (const key of requiredSupabase) if (!keys.has(key)) errors.push(`${file}: missing ${key}`);

  for (const line of text.split(/\r?\n/)) {
    if (/^(HELIUS_API_KEY|SUPABASE_SERVICE_ROLE_KEY)=.+/.test(line.trim())) {
      errors.push(`${file}: secret-bearing key must be blank in tracked templates`);
    }
  }
}

const rootEnv = readFileSync(resolve(root, ".env.example"), "utf8");
for (const [key, expected] of Object.entries({
  SOLANA_DEVNET_RPC_URL: "https://api.devnet.solana.com",
  SOLANA_MAINNET_RPC_URL: "https://api.mainnet.solana.com",
  SOLANA_TOKEN_2022_PROGRAM_ID: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
})) {
  if (!rootEnv.includes(`${key}=${expected}`)) errors.push(`.env.example: ${key} does not match canonical value`);
}

const sourceProgramFiles = {
  CROWDFUNDING_PROGRAM_ID: "programs/solana/crowdfunding-engine/src/lib.rs",
  REGISTRY_PROGRAM_ID: "programs/solana/registry/src/lib.rs",
  CONTRIBUTORS_PROGRAM_ID: "programs/solana/contributors/src/lib.rs",
};
for (const [envKey, file] of Object.entries(sourceProgramFiles)) {
  const source = readFileSync(resolve(root, file), "utf8");
  const match = source.match(/declare_id!\("([^"]+)"\)/);
  if (!match) {
    errors.push(`${file}: missing declare_id!`);
    continue;
  }
  if (!rootEnv.includes(`${envKey}=${match[1]}`)) {
    errors.push(`.env.example: ${envKey} must match ${file} declare_id!`);
  }
}

if (errors.length) {
  console.error(`Provider environment validation failed:\n- ${errors.join("\n- ")}`);
  process.exit(1);
}

console.log("Provider environment OK: Solana/Helius/Supabase/Prisma templates are complete and tracked secrets remain blank.");
