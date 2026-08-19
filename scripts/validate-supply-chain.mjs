import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const pkg = JSON.parse(readFileSync(resolve(root, "package.json"), "utf8"));
const workspace = readFileSync(resolve(root, "pnpm-workspace.yaml"), "utf8");
const failures = [];

if (pkg.devDependencies?.turbo !== "2.10.10") failures.push(`root turbo=${pkg.devDependencies?.turbo ?? "missing"}; expected 2.10.10`);
if (!/turbo:\s*["']2\.10\.10["']/.test(workspace)) failures.push("pnpm override for turbo 2.10.10 is missing");
if (!/^minimumReleaseAge:\s*1440\s*$/m.test(workspace)) failures.push("minimumReleaseAge: 1440 is missing");
if (!/^minimumReleaseAgeStrict:\s*true\s*$/m.test(workspace)) failures.push("minimumReleaseAgeStrict: true is missing");
if (!/^minimumReleaseAgeIgnoreMissingTime:\s*false\s*$/m.test(workspace)) failures.push("minimumReleaseAgeIgnoreMissingTime: false is missing");
if (!/^trustLockfile:\s*false\s*$/m.test(workspace)) failures.push("trustLockfile: false is missing");
if (!/^blockExoticSubdeps:\s*true\s*$/m.test(workspace)) failures.push("blockExoticSubdeps: true is missing");
if (/minimumReleaseAgeExclude:\s*[\s\S]*turbo/m.test(workspace)) failures.push("turbo must not bypass minimumReleaseAge through an exclusion");

if (failures.length) {
  console.error(`Supply-chain configuration failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}
console.log("Supply-chain configuration OK: 24h strict maturity window, Turborepo 2.10.10, lockfile verification enabled.");
