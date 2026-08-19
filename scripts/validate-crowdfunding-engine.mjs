import { existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const root=fileURLToPath(new URL("..",import.meta.url));
const required=[
  "packages/types/src/reserve-fund.ts",
  "packages/types/src/leaderboard.ts",
  "packages/types/src/escrow.ts",
  "packages/types/src/refunds.ts",
  "packages/data/src/leaderboard.ts",
  "packages/hooks/src/use-fundings.ts",
  "packages/funding/src/clients.ts",
  "packages/ui/src/counter.tsx",
  "packages/ui/src/countdown.tsx",
  "programs/solana/crowdfunding-engine/src/lib.rs",
  "programs/solana/registry/README.md",
  "programs/solana/contributors/README.md",
  "apps/api/app/api/v1/funding/checkout/route.ts",
  "apps/api/app/api/v1/webhooks/midtrans/route.ts"
];
const missing=required.filter((path)=>!existsSync(join(root,path)));
if(missing.length){
  console.error(`Crowdfunding engine validation failed:\n- ${missing.join("\n- ")}`);
  process.exit(1);
}
console.log(`Crowdfunding engine structure OK: ${required.length} required engine surfaces.`);
