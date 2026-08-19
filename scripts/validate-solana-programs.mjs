import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const inventory = resolve(root, "programs/solana/programs.json");
if (!existsSync(inventory)) { console.error("Missing programs/solana/programs.json"); process.exit(1); }
const manifest = JSON.parse(readFileSync(inventory, "utf8"));
if (JSON.stringify(manifest.supportedNetworks) !== JSON.stringify(["devnet", "mainnet-beta"])) {
  console.error("Solana program inventory must declare devnet and mainnet-beta."); process.exit(1);
}
for (const entry of manifest.programs) {
  const dir = resolve(root, "programs/solana", entry.path);
  if (!existsSync(dir)) { console.error(`Missing Solana program boundary: ${entry.path}`); process.exit(1); }
  const source = resolve(dir, "src/lib.rs");
  if (existsSync(source)) {
    const text = readFileSync(source, "utf8");
    if (/require!\([^,;]+\);/.test(text)) { console.error(`One-argument Anchor require! found in ${entry.path}.`); process.exit(1); }
  }
}
console.log(`Solana program inventory OK: ${manifest.programs.length} program boundaries across devnet/mainnet-beta.`);
