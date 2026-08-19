import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const required = [
  "packages/ui/src/styles/globals.css",
  "packages/ui/src/components/button.tsx",
  "packages/ui/src/components/card.tsx",
  "packages/ui/src/components/input.tsx",
  "packages/ui/src/components/textarea.tsx",
  "packages/ui/src/components/label.tsx",
  "packages/ui/src/components/badge.tsx",
  "packages/ui/src/components/progress.tsx",
  "packages/ui/src/components/table.tsx",
  "packages/ui/src/components/alert.tsx",
  "packages/ui/src/components/empty-state.tsx",
  "packages/ui/src/components/form-field.tsx",
];

const errors = required.filter((file) => !fs.existsSync(path.join(root, file))).map((file) => `Missing ${file}`);
const pkg = JSON.parse(fs.readFileSync(path.join(root, "packages/ui/package.json"), "utf8"));
if (pkg.exports?.["./styles/globals.css"] !== "./src/styles/globals.css") {
  errors.push("@powerchain/ui must export ./styles/globals.css");
}

for (const app of fs.readdirSync(path.join(root, "apps"))) {
  const globals = path.join(root, "apps", app, "app", "globals.css");
  if (!fs.existsSync(globals)) continue;
  const content = fs.readFileSync(globals, "utf8");
  if (!content.includes('@import "@powerchain/ui/styles/globals.css"')) {
    errors.push(`apps/${app}/app/globals.css does not import the shared global stylesheet`);
  }
}

if (errors.length) {
  console.error("Shared UI validation failed:\n- " + errors.join("\n- "));
  process.exit(1);
}

console.log(`Shared UI OK: ${required.length - 1} components + canonical globals.css are wired across all apps.`);
