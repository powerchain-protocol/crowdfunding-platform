const [major] = process.versions.node.split(".").map(Number);
if (major !== 26) {
  console.error(`PowerChain requires Node 26.x; current runtime is ${process.version}. Node 26 is the configured runtime for this repository.`);
  process.exit(1);
}
console.log(`Node runtime OK: ${process.version}`);
