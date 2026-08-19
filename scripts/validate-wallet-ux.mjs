import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const errors = [];
const wallet = read("packages/ui/src/wallet-session.tsx");
const uiPkg = JSON.parse(read("packages/ui/package.json"));
const hero = read("apps/web/components/marketing/home.tsx");
const auth = read("apps/web/components/auth/auth-form.tsx");
const env = read(".env.example");

if (!uiPkg.exports?.["./wallet-session"]) errors.push("@powerchain/ui must export ./wallet-session");
for (const token of ["WalletConnectModal", "WalletSignInButton", "DashboardWalletControl", "powerchain_wallet_address", "NEXT_PUBLIC_WALLET_COOKIE_DOMAIN"]) {
  if (!wallet.includes(token)) errors.push(`wallet-session.tsx missing ${token}`);
}
if (!auth.includes("WalletSignInButton") || !auth.includes("NEXT_PUBLIC_DASHBOARD_URL")) errors.push("Auth form must expose wallet sign-in and redirect to dashboard.");
if (!env.includes("NEXT_PUBLIC_WALLET_COOKIE_DOMAIN=")) errors.push(".env.example missing NEXT_PUBLIC_WALLET_COOKIE_DOMAIN");
if (!hero.includes('accountMode="website"')) errors.push("Marketing home must enable website account actions.");

const heroCta = hero.match(/<div className="mt-8 grid max-w-xl[\s\S]*?<\/div>/)?.[0] ?? "";
const heroButtons = (heroCta.match(/<a /g) ?? []).length;
if (heroButtons !== 2) errors.push(`Website hero must have exactly 2 CTA links; found ${heroButtons}.`);

const dashboardRoot = path.join(root, "apps/dashboard/app");
const dashboardPages = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name === "page.tsx") dashboardPages.push(full);
  }
}
walk(dashboardRoot);
for (const file of dashboardPages) {
  const source = fs.readFileSync(file, "utf8");
  if (source.includes("<AppShell") && !source.includes('accountMode="dashboard"')) {
    errors.push(`${path.relative(root, file)} is missing accountMode=dashboard`);
  }
}

if (errors.length) {
  console.error("Wallet/access UX validation failed:\n" + errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}
console.log(`Wallet/access UX OK: 2 hero CTAs, wallet modal/sign-in, ${dashboardPages.length} dashboard pages checked.`);
