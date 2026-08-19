import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

export const REPOSITORY_FILE_TEMPLATES = Object.freeze([
  [".env.example", "config/repository/templates/env.example"],
  [".dockerignore", "config/repository/templates/dockerignore.txt"],
  [".npmignore", "config/repository/templates/npmignore.txt"],
  [".gitignore", "config/repository/templates/gitignore.txt"],
  [".npmrc", "config/repository/templates/npmrc.txt"],
  [".nvmrc", "config/repository/templates/nvmrc.txt"],
  [".node-version", "config/repository/templates/node-version.txt"],
  [".prettierignore", "config/repository/templates/prettierignore.txt"],
]);

export function repairRepositoryFiles(root, { log = true } = {}) {
  const repaired = [];
  const missingTemplates = [];

  for (const [targetRelative, templateRelative] of REPOSITORY_FILE_TEMPLATES) {
    const target = resolve(root, targetRelative);
    if (existsSync(target)) continue;

    const template = resolve(root, templateRelative);
    if (!existsSync(template)) {
      missingTemplates.push(templateRelative);
      continue;
    }

    mkdirSync(dirname(target), { recursive: true });
    copyFileSync(template, target);
    repaired.push(targetRelative);
  }

  if (log) {
    if (repaired.length) {
      console.log("Repository root files restored from tracked non-hidden templates:");
      for (const file of repaired) console.log(`- ${file}`);
    } else {
      console.log("Repository root files OK: no safe template restoration was needed.");
    }
  }

  return { repaired, missingTemplates };
}
