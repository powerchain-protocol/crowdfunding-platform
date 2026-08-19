const expected = "24.19.0";
const actual = process.versions.node;
if (actual !== expected) {
  console.error(`PowerChain requires Node ${expected}; current runtime is v${actual}. Use corepack + the repository .nvmrc/.node-version.`);
  process.exit(1);
}
console.log(`Node runtime OK: v${actual}`);
