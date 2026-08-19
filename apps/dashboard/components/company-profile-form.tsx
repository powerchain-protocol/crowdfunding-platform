"use client";

import * as React from "react";
import { Card, Icon, StatusBadge } from "@powerchain/ui";
import type { CompanyProfile, OrganizationEntityType, SocialNetwork } from "@powerchain/types";

const STORAGE_KEY = "powerchain.company-profile.draft.v1";

const initialProfile: CompanyProfile = {
  id: "company_local_draft",
  legalName: "",
  tradingName: "",
  entityType: "COMPANY",
  registrationNumber: "",
  taxId: "",
  foundationNumber: "",
  foundationPurpose: "",
  foundedAt: "",
  website: "",
  billingEmail: "",
  phone: "",
  logoUrl: "",
  description: "",
  registeredAddress: { line1: "", line2: "", postalCode: "", city: "", region: "", countryCode: "" },
  socialLinks: [],
  verification: { business: "UNVERIFIED", tax: "UNVERIFIED", bank: "UNVERIFIED", treasury: "UNVERIFIED" },
  updatedAt: new Date().toISOString()
};

const entityOptions: Array<{ value: OrganizationEntityType; label: string }> = [
  { value: "COMPANY", label: "Company" },
  { value: "FOUNDATION", label: "Foundation" },
  { value: "NONPROFIT", label: "Nonprofit / NGO" },
  { value: "ASSOCIATION", label: "Association" },
  { value: "SOLE_PROPRIETOR", label: "Sole proprietor" },
  { value: "OTHER", label: "Other" }
];

const socialOptions: Array<{ value: SocialNetwork; label: string }> = [
  { value: "LINKEDIN", label: "LinkedIn" },
  { value: "X", label: "X / Twitter" },
  { value: "INSTAGRAM", label: "Instagram" },
  { value: "YOUTUBE", label: "YouTube" },
  { value: "FACEBOOK", label: "Facebook" },
  { value: "GITHUB", label: "GitHub" },
  { value: "OTHER", label: "Other" }
];

function Input({ label, value, onChange, placeholder, type = "text", required = false }: { label: string; value?: string; onChange: (value: string) => void; placeholder?: string; type?: string; required?: boolean }) {
  return <label className="grid gap-2 text-sm font-semibold text-neutral-800 dark:text-neutral-100"><span>{label}{required ? " *" : ""}</span><input type={type} value={value ?? ""} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="h-11 rounded-xl border border-neutral-200 bg-white px-3 font-normal outline-none transition focus:border-emerald-800 focus:ring-2 focus:ring-emerald-900/10 dark:border-neutral-700 dark:bg-neutral-950" /></label>;
}

export function CompanyProfileForm() {
  const [profile, setProfile] = React.useState<CompanyProfile>(initialProfile);
  const [savedAt, setSavedAt] = React.useState<string | null>(null);
  const [logoPreview, setLogoPreview] = React.useState<string | null>(null);

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setProfile(JSON.parse(stored) as CompanyProfile);
    } catch { /* ignore malformed local drafts */ }
  }, []);

  const update = <K extends keyof CompanyProfile>(key: K, value: CompanyProfile[K]) => setProfile((current) => ({ ...current, [key]: value, updatedAt: new Date().toISOString() }));
  const updateAddress = (key: keyof NonNullable<CompanyProfile["registeredAddress"]>, value: string) => setProfile((current) => ({ ...current, registeredAddress: { ...(current.registeredAddress ?? initialProfile.registeredAddress!), [key]: value }, updatedAt: new Date().toISOString() }));

  const saveDraft = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    const now = new Date().toISOString();
    setSavedAt(now);
  };

  const addSocial = () => update("socialLinks", [...profile.socialLinks, { network: "LINKEDIN", url: "" }]);
  const updateSocial = (index: number, patch: Partial<(typeof profile.socialLinks)[number]>) => update("socialLinks", profile.socialLinks.map((item, itemIndex) => itemIndex === index ? { ...item, ...patch } : item));
  const removeSocial = (index: number) => update("socialLinks", profile.socialLinks.filter((_, itemIndex) => itemIndex !== index));

  return <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-lg font-bold">Organization identity</h2><p className="mt-1 text-sm text-neutral-500">Used across listings, agreements, invoices, receipts and public trust surfaces.</p></div><StatusBadge tone="neutral">Local draft</StatusBadge></div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Input label="Legal name" required value={profile.legalName} onChange={(value) => update("legalName", value)} placeholder="PowerChain Foundation" />
          <Input label="Trading name" value={profile.tradingName} onChange={(value) => update("tradingName", value)} placeholder="PowerChain" />
          <label className="grid gap-2 text-sm font-semibold">Entity type<select value={profile.entityType} onChange={(event) => update("entityType", event.target.value as OrganizationEntityType)} className="h-11 rounded-xl border border-neutral-200 bg-white px-3 font-normal dark:border-neutral-700 dark:bg-neutral-950">{entityOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
          <Input label="Registration number" value={profile.registrationNumber} onChange={(value) => update("registrationNumber", value)} />
          <Input label="Tax / VAT ID" value={profile.taxId} onChange={(value) => update("taxId", value)} />
          <Input label="Founded" type="date" value={profile.foundedAt} onChange={(value) => update("foundedAt", value)} />
        </div>
        {profile.entityType === "FOUNDATION" ? <div className="mt-5 grid gap-5 md:grid-cols-2"><Input label="Foundation registration number" value={profile.foundationNumber} onChange={(value) => update("foundationNumber", value)} /><label className="grid gap-2 text-sm font-semibold md:col-span-2">Foundation purpose<textarea value={profile.foundationPurpose ?? ""} onChange={(event) => update("foundationPurpose", event.target.value)} className="min-h-28 rounded-xl border border-neutral-200 bg-white p-3 font-normal dark:border-neutral-700 dark:bg-neutral-950" placeholder="Describe the foundation's purpose and public-benefit mission." /></label></div> : null}
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-bold">Brand & contact</h2><p className="mt-1 text-sm text-neutral-500">Keep billing and public brand information separate from KYC documents.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Input label="Website" value={profile.website} onChange={(value) => update("website", value)} placeholder="https://example.org" />
          <Input label="Billing email" type="email" value={profile.billingEmail} onChange={(value) => update("billingEmail", value)} placeholder="billing@example.org" />
          <Input label="Phone" value={profile.phone} onChange={(value) => update("phone", value)} />
          <Input label="Logo URL" value={profile.logoUrl} onChange={(value) => update("logoUrl", value)} placeholder="https://…/logo.png" />
          <label className="grid gap-2 text-sm font-semibold md:col-span-2">Company logo upload <input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-4 text-sm font-normal dark:border-neutral-700 dark:bg-neutral-900" onChange={(event) => { const file = event.target.files?.[0]; if (!file) return; if (file.size > 5 * 1024 * 1024) return; const url = URL.createObjectURL(file); setLogoPreview((previous) => { if (previous) URL.revokeObjectURL(previous); return url; }); }} /><span className="text-xs font-normal text-neutral-500">Preview only until object storage is connected. PNG, JPEG, WebP or SVG, max 5 MB.</span></label>
          <label className="grid gap-2 text-sm font-semibold md:col-span-2">Organization description<textarea value={profile.description ?? ""} onChange={(event) => update("description", event.target.value)} className="min-h-28 rounded-xl border border-neutral-200 bg-white p-3 font-normal dark:border-neutral-700 dark:bg-neutral-950" placeholder="Short description for invoices, listings and public profiles." /></label>
        </div>
      </Card>

      <Card className="p-6"><h2 className="text-lg font-bold">Registered address</h2><div className="mt-6 grid gap-5 md:grid-cols-2"><Input label="Address line 1" value={profile.registeredAddress?.line1} onChange={(value) => updateAddress("line1", value)} /><Input label="Address line 2" value={profile.registeredAddress?.line2} onChange={(value) => updateAddress("line2", value)} /><Input label="Postal code" value={profile.registeredAddress?.postalCode} onChange={(value) => updateAddress("postalCode", value)} /><Input label="City" value={profile.registeredAddress?.city} onChange={(value) => updateAddress("city", value)} /><Input label="Region / state" value={profile.registeredAddress?.region} onChange={(value) => updateAddress("region", value)} /><Input label="Country code" value={profile.registeredAddress?.countryCode} onChange={(value) => updateAddress("countryCode", value.toUpperCase())} placeholder="FI" /></div></Card>

      <Card className="p-6"><div className="flex items-center justify-between"><div><h2 className="text-lg font-bold">Social links</h2><p className="mt-1 text-sm text-neutral-500">Displayed only where the organization chooses to make them public.</p></div><button type="button" onClick={addSocial} className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-bold dark:border-neutral-700 dark:bg-neutral-950">Add link</button></div><div className="mt-5 space-y-3">{profile.socialLinks.length === 0 ? <div className="rounded-xl border border-dashed border-neutral-300 p-5 text-sm text-neutral-500 dark:border-neutral-700">No social links added.</div> : profile.socialLinks.map((link, index) => <div key={`${link.network}-${index}`} className="grid gap-2 rounded-xl bg-neutral-50 p-3 sm:grid-cols-[160px_1fr_auto] dark:bg-neutral-900"><select value={link.network} onChange={(event) => updateSocial(index, { network: event.target.value as SocialNetwork })} className="h-10 rounded-lg border border-neutral-200 bg-white px-2 text-sm dark:border-neutral-700 dark:bg-neutral-950">{socialOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select><input value={link.url} onChange={(event) => updateSocial(index, { url: event.target.value })} placeholder="https://" className="h-10 rounded-lg border border-neutral-200 bg-white px-3 text-sm dark:border-neutral-700 dark:bg-neutral-950"/><button type="button" onClick={() => removeSocial(index)} className="rounded-lg px-3 text-sm font-semibold text-red-700 hover:bg-red-50 dark:text-red-300 dark:hover:bg-red-950/30">Remove</button></div>)}</div></Card>

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end"><button type="button" onClick={saveDraft} className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-950 px-5 text-sm font-bold text-white"><Icon name="check"/> Save company draft</button></div>
    </div>

    <aside className="space-y-4 xl:sticky xl:top-24 xl:self-start">
      <Card className="overflow-hidden"><div className="bg-emerald-950 p-5 text-white"><div className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">Profile preview</div><div className="mt-4 flex items-center gap-3">{logoPreview || profile.logoUrl ? <img src={logoPreview ?? profile.logoUrl} alt="Organization logo preview" className="h-14 w-14 rounded-2xl bg-white object-contain p-1"/> : <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10"><Icon name="briefcase"/></span>}<div><div className="font-bold">{profile.tradingName || profile.legalName || "Organization name"}</div><div className="mt-1 text-xs text-emerald-100">{entityOptions.find((option) => option.value === profile.entityType)?.label}</div></div></div></div><div className="space-y-3 p-5 text-sm"><div className="flex justify-between gap-4"><span className="text-neutral-500">Legal name</span><span className="text-right font-semibold">{profile.legalName || "—"}</span></div><div className="flex justify-between gap-4"><span className="text-neutral-500">Registration</span><span className="font-mono text-xs">{profile.registrationNumber || "—"}</span></div><div className="flex justify-between gap-4"><span className="text-neutral-500">Billing</span><span className="truncate text-right">{profile.billingEmail || "—"}</span></div></div></Card>
      <Card className="p-5"><h3 className="font-bold">Verification</h3><div className="mt-4 space-y-3">{Object.entries(profile.verification).map(([label, status]) => <div key={label} className="flex items-center justify-between"><span className="text-sm capitalize text-neutral-600 dark:text-neutral-300">{label}</span><StatusBadge tone={status === "VERIFIED" ? "success" : "neutral"}>{status.toLowerCase()}</StatusBadge></div>)}</div><a href="/trust" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-950 dark:text-emerald-300">Manage verification <Icon name="arrow-right"/></a></Card>
      {savedAt ? <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-xs text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200">Draft saved locally at {new Date(savedAt).toLocaleTimeString()}.</div> : null}
    </aside>
  </div>;
}
