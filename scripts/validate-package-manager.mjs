const expectedNode = "24.19.0";
const expectedPnpm = "11.22.0";
const actualNode = process.versions.node;
const userAgent = process.env.npm_config_user_agent ?? "";
const match = userAgent.match(/(?:^|\s)pnpm\/([^\s]+)/);
const actualPnpm = match?.[1] ?? null;
const failures = [];

if (actualNode !== expectedNode) {
  failures.push(`Node ${actualNode} is active; expected ${expectedNode}`);
}
if (!actualPnpm) {
  failures.push("pnpm was not detected from npm_config_user_agent; run commands with pnpm/Corepack");
} else if (actualPnpm !== expectedPnpm) {
  failures.push(`pnpm ${actualPnpm} is active; expected ${expectedPnpm}`);
}

if (failures.length) {
  console.error(`Toolchain validation failed:\n- ${failures.join("\n- ")}`);
  console.error("Run: corepack enable && corepack prepare pnpm@11.22.0 --activate");
  process.exit(1);
}

console.log(`Toolchain OK: Node ${actualNode}, pnpm ${actualPnpm}.`);
