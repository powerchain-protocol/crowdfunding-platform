import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
const root = new URL("..", import.meta.url).pathname;
const scanRoots = ["apps", "packages", "services", "config", "constants", "common", "modals"].map((p) => join(root, p));
const violations=[];
const forbidden = [
  [/NEXT_PUBLIC_[A-Z0-9_]*(PRIVATE_KEY|SECRET|API_KEY)/g, "public secret variable"],
  [/\b(privateKey|private_key)\s*[:=]/gi, "private key material reference"]
];
function walk(dir){
  if (!statSync(dir).isDirectory()) return;
  for(const name of readdirSync(dir)){
    if(["node_modules",".next",".git"].includes(name)) continue;
    const p=join(dir,name); const st=statSync(p);
    if(st.isDirectory()) walk(p);
    else if(/\.(ts|tsx|js|mjs)$/.test(name)){
      const text=readFileSync(p,"utf8");
      for(const [rx,label] of forbidden){ if(rx.test(text)) violations.push(`${p.replace(root,"")}: ${label}`); rx.lastIndex=0; }
    }
  }
}
for (const dir of scanRoots) walk(dir);
if(violations.length){ console.error("Conformance issues:\n- "+violations.join("\n- ")); process.exit(1); }
console.log("Conformance scan passed: no public-secret or private-key material patterns in runtime source.");
