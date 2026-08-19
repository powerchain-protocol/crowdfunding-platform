import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const required = [
  "Dockerfile",
  ".dockerignore",
  ".npmignore",
  ".gitignore",
  ".env.example",
  "env/docker.env.example",
  "infra/Dockerfile.dev",
  "infra/docker-compose.yml",
];
const problems = [];
for (const file of required) if (!existsSync(resolve(root, file))) problems.push(`Missing ${file}`);

function text(file) {
  return existsSync(resolve(root, file)) ? readFileSync(resolve(root, file), "utf8") : "";
}
const compose = text("infra/docker-compose.yml");
const gitignore = text(".gitignore");
const dockerignore = text(".dockerignore");
const env = text(".env.example");

for (const marker of [
  "127.0.0.1",
  "no-new-privileges:true",
  "POSTGRES_PASSWORD",
  "REDIS_PASSWORD",
  "service_healthy",
]) {
  if (!compose.includes(marker)) problems.push(`Compose security marker missing: ${marker}`);
}
for (const marker of [".env.*", "*.pem", "*.key", "id.json"]) {
  if (!gitignore.includes(marker)) problems.push(`.gitignore security rule missing: ${marker}`);
  if (!dockerignore.includes(marker)) problems.push(`.dockerignore security rule missing: ${marker}`);
}
if (!env.includes("POWERCHAIN_DOCKER_BIND=127.0.0.1")) problems.push(".env.example must default Docker ports to loopback only");
if (!env.includes("REDIS_PASSWORD=")) problems.push(".env.example must define the local Redis password variable");

const suspicious = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /\b(?:seed phrase|mnemonic)\s*=\s*[^\s#]+/i,
];
for (const [name, content] of [[".env.example", env], ["env/docker.env.example", text("env/docker.env.example")]]) {
  for (const pattern of suspicious) if (pattern.test(content)) problems.push(`${name} contains secret-like material`);
}

if (problems.length) {
  console.error(`Docker/security configuration validation failed:\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log("Docker/security files OK: local-only bindings, passworded Redis/Postgres, secret ignores, and container hardening are present.");
