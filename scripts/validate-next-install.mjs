import { existsSync, readFileSync, realpathSync } from "node:fs";
import { resolve } from "node:path";
import { POWERCHAIN_APPS } from "../config/workspace/apps.mjs";

const root = resolve(new URL("..", import.meta.url).pathname);
const expected = "16.3.1";
const failures = [];

if (!existsSync(resolve(root, "node_modules"))) {
  console.error("node_modules is missing. Run pnpm install before pnpm dev.");
  process.exit(1);
}

for (const app of POWERCHAIN_APPS) {
  const manifestPath = resolve(root, "apps", app.dir, "package.json");
  if (!existsSync(manifestPath)) {
    failures.push(`apps/${app.dir}/package.json is missing`);
    continue;
  }
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  const declared = manifest.dependencies?.next ?? manifest.devDependencies?.next;
  if (declared !== expected) failures.push(`apps/${app.dir} declares next=${declared ?? "missing"}; expected ${expected}`);

  const nextManifest = resolve(root, "apps", app.dir, "node_modules", "next", "package.json");
  if (!existsSync(nextManifest)) {
    failures.push(`apps/${app.dir}/node_modules/next is missing; run pnpm install from the workspace root`);
    continue;
  }

  try {
    const installed = JSON.parse(readFileSync(realpathSync(nextManifest), "utf8")).version;
    if (installed !== expected) failures.push(`apps/${app.dir} resolves Next.js ${installed}; expected ${expected}`);
  } catch (error) {
    failures.push(`apps/${app.dir} has a broken Next.js link: ${error instanceof Error ? error.message : error}`);
  }
}

if (failures.length) {
  console.error(`Next.js workspace validation failed:\n- ${failures.join("\n- ")}`);
  console.error("Stop all dev servers before reinstalling or replacing node_modules.");
  process.exit(1);
}
console.log(`Next.js install OK: ${POWERCHAIN_APPS.length} apps resolve Next.js ${expected}.`);
