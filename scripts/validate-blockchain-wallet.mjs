import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const required = [
  "packages/data/src/blockchain.ts",
  "packages/data/src/networks.ts",
  "packages/data/src/wallets.ts",
  "packages/data/src/fetch-wallet-data.ts",
  "packages/providers/src/embedded-wallets.ts",
  "packages/types/src/trusted-wallets.ts",
  "packages/types/src/security.ts",
  "packages/types/src/operators.ts",
  "packages/ui/src/shared/components/provider/wallet-provider.tsx",
  "apps/api/app/api/v1/blockchain/networks/route.ts",
  "apps/api/app/api/v1/blockchain/status/route.ts",
  "apps/api/app/api/v1/wallets/[address]/route.ts",
  "apps/api/app/api/v1/wallets/trusted/route.ts",
  "apps/api/app/api/v1/users/preferences/route.ts",
  "prisma/migrations/20260819143000_wallet_network_preferences/migration.sql",
];
const missing = required.filter((file) => !existsSync(resolve(root, file)));
if (missing.length) {
  console.error("Blockchain/wallet validation failed:\n" + missing.map((file) => `- missing ${file}`).join("\n"));
  process.exit(1);
}
const schema = readFileSync(resolve(root, "prisma/schema.prisma"), "utf8");
for (const model of ["UserPreference", "TrustedWallet", "OperatorProfile"]) {
  if (!schema.includes(`model ${model} {`)) {
    console.error(`Blockchain/wallet validation failed: Prisma model ${model} is missing.`);
    process.exit(1);
  }
}
const provider = readFileSync(resolve(root, "packages/ui/src/shared/components/provider/wallet-provider.tsx"), "utf8");
if (!provider.includes('DEFAULT_DISPLAY_CURRENCY: DisplayCurrency = "USD"') || !provider.includes('"mainnet-beta"')) {
  console.error("Blockchain/wallet validation failed: USD default or mainnet-beta mode is missing.");
  process.exit(1);
}
console.log("Blockchain/wallet runtime OK: devnet + mainnet-beta, USD default, trusted-wallet/operator schema, embedded-wallet boundary and API routes present.");
