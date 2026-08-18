import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
const root = new URL("..", import.meta.url).pathname;
const requiredApps = ["web","crowdfunding","donate","checkout","dashboard","treasury","admin","explorer","docs","pwa","api"];
const requiredPackages = ["ui","config","types","campaign","payment-intent","treasury","ledger","reconciliation","events","providers","sdk","api-core","common","evidence","auth"];
const missing=[];
for (const app of requiredApps) if (!existsSync(join(root,"apps",app,"package.json"))) missing.push(`apps/${app}`);
for (const pkg of requiredPackages) if (!existsSync(join(root,"packages",pkg,"package.json"))) missing.push(`packages/${pkg}`);
for (const file of ["README.md","pnpm-workspace.yaml","turbo.json","tsconfig.base.json",".env.example","docs/PLATFORM-APPS.md"]) if (!existsSync(join(root,file))) missing.push(file);
const rootPkg=JSON.parse(readFileSync(join(root,"package.json"),"utf8"));
if (rootPkg.version !== "1.3.0") missing.push("root package version 1.3.0");
if (missing.length) { console.error("Structure validation failed:\n- "+missing.join("\n- ")); process.exit(1); }
console.log(`Structure OK: ${requiredApps.length} apps, ${requiredPackages.length} shared packages.`);
