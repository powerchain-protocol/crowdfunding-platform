import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";
import { POWERCHAIN_APPS } from "../config/workspace/apps.mjs";

const root = resolve(new URL("..", import.meta.url).pathname);
const errors = [];
const warnings = [];
const sourceExtensions = new Set([".ts", ".tsx", ".mts", ".cts", ".mjs", ".js"]);
const resolvableExtensions = ["", ".ts", ".tsx", ".mts", ".cts", ".mjs", ".js", ".json", ".css"];
const projectRoots = [];
const workspaceByName = new Map();

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    errors.push(`${relative(root, path)} is not valid JSON: ${error instanceof Error ? error.message : String(error)}`);
    return null;
  }
}

function walk(dir, callback) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next", ".turbo", "dist", "coverage", "target"].includes(entry.name)) continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path, callback);
    else callback(path);
  }
}

for (const collection of ["apps", "packages", "services"]) {
  const collectionRoot = resolve(root, collection);
  if (!existsSync(collectionRoot)) continue;
  for (const entry of readdirSync(collectionRoot, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const projectRoot = resolve(collectionRoot, entry.name);
    const manifestPath = resolve(projectRoot, "package.json");
    if (!existsSync(manifestPath)) continue;
    const manifest = readJson(manifestPath);
    if (!manifest) continue;
    projectRoots.push({ root: projectRoot, manifest, manifestPath });
    if (typeof manifest.name === "string") workspaceByName.set(manifest.name, { root: projectRoot, manifest, manifestPath });
  }
}

const rootManifest = readJson(resolve(root, "package.json"));
if (rootManifest) {
  if (rootManifest.version !== "1.0.0") errors.push(`root package version is ${rootManifest.version}; expected 1.0.0`);
  if (rootManifest.packageManager !== "pnpm@11.22.0") errors.push(`packageManager is ${rootManifest.packageManager}; expected pnpm@11.22.0`);
  if (rootManifest.engines?.node !== "24.19.0") errors.push(`engines.node is ${rootManifest.engines?.node}; expected 24.19.0`);
  if (rootManifest.devDependencies?.postcss !== "8.5.23") errors.push(`root postcss is ${rootManifest.devDependencies?.postcss}; expected 8.5.23`);
  if (rootManifest.devDependencies?.turbo !== "2.10.10") errors.push(`root turbo is ${rootManifest.devDependencies?.turbo}; expected 2.10.10`);
}

for (const app of POWERCHAIN_APPS) {
  const appRoot = resolve(root, "apps", app.dir);
  const manifest = readJson(resolve(appRoot, "package.json"));
  if (!manifest) continue;

  const expectedScripts = {
    dev: `next dev -p ${app.port}`,
    build: "next build",
    typecheck: "tsc --noEmit",
  };
  for (const [name, expected] of Object.entries(expectedScripts)) {
    if (manifest.scripts?.[name] !== expected) {
      errors.push(`apps/${app.dir} script ${name}=${JSON.stringify(manifest.scripts?.[name])}; expected ${JSON.stringify(expected)}`);
    }
  }
  if ((manifest.dependencies?.next ?? manifest.devDependencies?.next) !== "16.3.1") {
    errors.push(`apps/${app.dir} must declare next 16.3.1 directly`);
  }
  if ((manifest.dependencies?.react ?? manifest.devDependencies?.react) !== "19.2.8") {
    errors.push(`apps/${app.dir} must declare react 19.2.8 directly`);
  }
  if ((manifest.dependencies?.["react-dom"] ?? manifest.devDependencies?.["react-dom"]) !== "19.2.8") {
    errors.push(`apps/${app.dir} must declare react-dom 19.2.8 directly`);
  }

  const tsconfigPath = resolve(appRoot, "tsconfig.json");
  const tsconfig = readJson(tsconfigPath);
  if (tsconfig?.extends !== "../../config/typescript/nextjs.json") {
    errors.push(`apps/${app.dir}/tsconfig.json must extend ../../config/typescript/nextjs.json`);
  }

  const nextConfigPath = resolve(appRoot, "next.config.mjs");
  if (existsSync(nextConfigPath)) {
    const source = readFileSync(nextConfigPath, "utf8");
    if (!source.includes("createPowerChainNextConfig")) errors.push(`apps/${app.dir}/next.config.mjs must use createPowerChainNextConfig`);
    if (!source.includes("appDir: import.meta.dirname")) errors.push(`apps/${app.dir}/next.config.mjs must pass appDir: import.meta.dirname`);
  }

  if (!existsSync(resolve(appRoot, "app", "layout.tsx"))) errors.push(`apps/${app.dir}/app/layout.tsx is missing`);
  if (!existsSync(resolve(appRoot, "app", "globals.css"))) errors.push(`apps/${app.dir}/app/globals.css is missing`);
}

function hasDependency(manifest, name) {
  return Boolean(
    manifest.dependencies?.[name] ||
    manifest.devDependencies?.[name] ||
    manifest.peerDependencies?.[name] ||
    manifest.optionalDependencies?.[name]
  );
}

function resolveRelativeImport(fromFile, specifier) {
  const base = resolve(dirname(fromFile), specifier);
  for (const suffix of resolvableExtensions) {
    const candidate = `${base}${suffix}`;
    if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  }
  if (existsSync(base) && statSync(base).isDirectory()) {
    for (const suffix of [".ts", ".tsx", ".mts", ".cts", ".mjs", ".js", ".json"]) {
      const candidate = resolve(base, `index${suffix}`);
      if (existsSync(candidate)) return candidate;
    }
  }
  return null;
}

function packageNameFromSpecifier(specifier) {
  if (!specifier.startsWith("@powerchain/")) return null;
  const parts = specifier.split("/");
  return parts.length >= 2 ? `${parts[0]}/${parts[1]}` : specifier;
}

function exportAllows(manifest, specifier, packageName) {
  if (specifier === packageName) return true;
  const subpath = `.${specifier.slice(packageName.length)}`;
  const exportsField = manifest.exports;
  if (!exportsField) return false;
  if (typeof exportsField === "string" || Array.isArray(exportsField)) return false;
  if (Object.prototype.hasOwnProperty.call(exportsField, subpath)) return true;
  for (const key of Object.keys(exportsField)) {
    if (!key.includes("*")) continue;
    const [prefix, suffix = ""] = key.split("*");
    if (subpath.startsWith(prefix) && subpath.endsWith(suffix)) return true;
  }
  return false;
}

const importPatterns = [
  /\b(?:import|export)\s+(?:type\s+)?(?:[^"'`]*?\s+from\s+)?["']([^"']+)["']/g,
  /\bimport\(\s*["']([^"']+)["']\s*\)/g,
  /\brequire\(\s*["']([^"']+)["']\s*\)/g,
];

for (const project of projectRoots) {
  walk(project.root, (file) => {
    if (!sourceExtensions.has(extname(file))) return;
    const source = readFileSync(file, "utf8");
    const specs = new Set();
    for (const pattern of importPatterns) {
      pattern.lastIndex = 0;
      let match;
      while ((match = pattern.exec(source))) specs.add(match[1]);
    }

    for (const specifier of specs) {
      if (specifier.startsWith(".")) {
        if (!resolveRelativeImport(file, specifier)) {
          errors.push(`${relative(root, file)} imports missing relative module ${specifier}`);
        }
        continue;
      }
      const workspacePackageName = packageNameFromSpecifier(specifier);
      if (!workspacePackageName) continue;
      const target = workspaceByName.get(workspacePackageName);
      if (!target) {
        errors.push(`${relative(root, file)} imports missing workspace package ${workspacePackageName}`);
        continue;
      }
      if (workspacePackageName !== project.manifest.name && !hasDependency(project.manifest, workspacePackageName)) {
        errors.push(`${project.manifest.name} imports ${workspacePackageName} in ${relative(project.root, file)} but does not declare it as a dependency`);
      }
      if (!exportAllows(target.manifest, specifier, workspacePackageName)) {
        errors.push(`${relative(root, file)} imports ${specifier}, but ${workspacePackageName} does not export that subpath`);
      }
    }
  });
}

// Next.js 15+ / 16 dynamic App Router params are asynchronous. Catch the common
// accidental synchronous signature before it reaches a build.
for (const app of POWERCHAIN_APPS) {
  const appDir = resolve(root, "apps", app.dir, "app");
  walk(appDir, (file) => {
    if (!/[\\/]\[[^/]+\][\\/]/.test(file)) return;
    if (!/[\\/](?:page|layout|route)\.tsx?$/.test(file)) return;
    const source = readFileSync(file, "utf8");
    if (/params\s*:\s*\{/.test(source) && !/params\s*:\s*Promise\s*</.test(source)) {
      errors.push(`${relative(root, file)} appears to use synchronous dynamic params; use params: Promise<...> and await it`);
    }
  });
}

const sharedGlobals = resolve(root, "packages/ui/src/styles/globals.css");
if (!existsSync(sharedGlobals)) errors.push("packages/ui/src/styles/globals.css is missing");
for (const app of POWERCHAIN_APPS) {
  const globals = resolve(root, "apps", app.dir, "app", "globals.css");
  if (!existsSync(globals)) continue;
  const css = readFileSync(globals, "utf8");
  if (!css.includes('@import "@powerchain/ui/styles/globals.css"')) {
    errors.push(`apps/${app.dir}/app/globals.css must import @powerchain/ui/styles/globals.css`);
  }
}

if (errors.length) {
  console.error(`Build surface validation failed (${errors.length} issue${errors.length === 1 ? "" : "s"}):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}

if (warnings.length) console.warn(`Build surface warnings:\n- ${warnings.join("\n- ")}`);
console.log(`Build surface OK: ${POWERCHAIN_APPS.length} Next.js apps, ${projectRoots.length} workspace projects, imports/exports and dynamic route params validated.`);
