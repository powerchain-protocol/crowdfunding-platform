import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const registry = JSON.parse(readFileSync(resolve(root, "skills/registry.json"), "utf8"));
const errors = [];
for (const skill of registry.skills ?? []) {
  const file = resolve(root, "skills", skill.name, "SKILL.md");
  if (!existsSync(file)) { errors.push(`Missing ${skill.name}/SKILL.md`); continue; }
  const text = readFileSync(file, "utf8");
  for (const heading of ["## Purpose", "## Allowed scopes", "## Required inputs", "## Output contract", "## Forbidden", "## Audit"]) if (!text.includes(heading)) errors.push(`${skill.name} missing ${heading}`);
}
if (errors.length) { console.error(`Skill validation failed:\n- ${errors.join("\n- ")}`); process.exit(1); }
console.log(`Skills OK: ${registry.skills.length} registered policy-constrained skills.`);
