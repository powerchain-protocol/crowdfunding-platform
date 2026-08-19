import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { repairRepositoryFiles } from "./lib/repository-files.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const { missingTemplates } = repairRepositoryFiles(root);

if (missingTemplates.length) {
  console.error("Repository repair is incomplete because canonical templates are missing:");
  for (const file of missingTemplates) console.error(`- ${file}`);
  console.error("Restore config/repository/templates from the canonical repository archive.");
  process.exit(2);
}
