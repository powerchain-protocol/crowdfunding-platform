import { readdirSync, statSync } from "node:fs";
import { dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const apiRoot = resolve(root, "apps/api/app/api");
const routes = [];
function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = resolve(dir, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (entry === "route.ts") routes.push(relative(apiRoot, dirname(full)).replaceAll("\\\\", "/"));
  }
}
walk(apiRoot);
const canonical = new Map();
const conflicts = [];
for (const route of routes) {
  const shape = route.replace(/\\[[^/]+\\]/g, "[]");
  const previous = canonical.get(shape);
  if (previous) conflicts.push(`${shape}: ${previous} <> ${route}`);
  else canonical.set(shape, route);
}
if (conflicts.length) {
  console.error(`API route validation failed (${conflicts.length} dynamic-route conflict(s)):\\n- ${conflicts.join("\\n- ")}`);
  process.exit(1);
}
console.log(`API routes OK: ${routes.length} route handlers, no conflicting dynamic segment aliases.`);
