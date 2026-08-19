import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const required = [
  "packages/common/src/index.ts",
  "packages/constants/src/index.ts",
  "packages/contracts/src/index.ts",
  "contracts/deployments.example.json",
  "constants/README.md",
  "common/README.md",
];
const errors = required
  .filter((file) => !existsSync(resolve(root, file)))
  .map((file) => `Missing ${file}`);

const manifest = JSON.parse(readFileSync(resolve(root, "contracts/deployments.example.json"), "utf8"));
for (const deployment of manifest.deployments ?? []) {
  if (deployment.address) {
    errors.push(`contracts/deployments.example.json must not contain a live address for ${deployment.key}`);
  }
  if (deployment.status !== "UNCONFIGURED") {
    errors.push(`example deployment ${deployment.key} must remain UNCONFIGURED`);
  }
}

for (const [app, dep] of [
  ["api", "@powerchain/contracts"],
  ["api", "@powerchain/constants"],
  ["crowdfunding", "@powerchain/constants"],
]) {
  const pkg = JSON.parse(readFileSync(resolve(root, "apps", app, "package.json"), "utf8"));
  if (pkg.dependencies?.[dep] !== "workspace:*") {
    errors.push(`apps/${app} must depend on ${dep}@workspace:*`);
  }
}

if (errors.length) {
  console.error(`Architecture validation failed:\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log("Architecture OK: common/constants/contracts boundaries are wired and fail closed.");
