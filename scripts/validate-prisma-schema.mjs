import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const schemaPath = resolve(root, "prisma/schema.prisma");
const schema = readFileSync(schemaPath, "utf8");
const rootPackage = JSON.parse(readFileSync(resolve(root, "package.json"), "utf8"));
const databasePackage = JSON.parse(readFileSync(resolve(root, "packages/database/package.json"), "utf8"));
const errors = [];

function requireBlock(name) {
  const block = new RegExp(`\\b${name}\\s+[A-Za-z_][A-Za-z0-9_]*\\s*\\{[\\s\\S]*?\\}`, "m").exec(schema)?.[0];
  if (!block) {
    errors.push(`Missing or malformed ${name} block.`);
    return null;
  }
  if (!block.includes("\n")) errors.push(`${name} blocks must use canonical multiline Prisma syntax.`);
  return block;
}

const generator = requireBlock("generator");
const datasource = requireBlock("datasource");
if (generator && !/provider\s*=\s*"prisma-client-js"/.test(generator)) errors.push('Generator provider must be "prisma-client-js" for Prisma 6.19.3.');
if (datasource && !/provider\s*=\s*"postgresql"/.test(datasource)) errors.push('Datasource provider must be "postgresql".');
if (datasource && !/url\s*=\s*env\("DATABASE_URL"\)/.test(datasource)) errors.push('Datasource URL must read DATABASE_URL.');

const expected = "6.19.3";
if (rootPackage.devDependencies?.prisma !== expected) errors.push(`Root prisma must be pinned to ${expected}.`);
if (rootPackage.devDependencies?.["@prisma/client"] !== expected) errors.push(`Root @prisma/client must be pinned to ${expected} so postinstall generation cannot auto-install it.`);
if (databasePackage.dependencies?.["@prisma/client"] !== expected) errors.push(`@powerchain/database @prisma/client must be pinned to ${expected}.`);

let depth = 0;
for (const char of schema) {
  if (char === "{") depth += 1;
  if (char === "}") depth -= 1;
  if (depth < 0) { errors.push("Unbalanced closing brace in Prisma schema."); break; }
}
if (depth !== 0) errors.push("Unbalanced braces in Prisma schema.");

const modelNames = [...schema.matchAll(/^model\s+([A-Za-z_][A-Za-z0-9_]*)\s*\{/gm)].map((match) => match[1]);
const duplicates = modelNames.filter((name, index) => modelNames.indexOf(name) !== index);
if (duplicates.length) errors.push(`Duplicate Prisma model names: ${[...new Set(duplicates)].join(", ")}`);

if (errors.length) {
  console.error(`Prisma schema preflight failed (${schemaPath}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log(`Prisma schema preflight OK: ${modelNames.length} models, Prisma ${expected} client/CLI lock, canonical generator/datasource blocks.`);
