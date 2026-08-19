"use client";

import * as React from "react";
import { Button, Card, Icon, StatusBadge } from "@powerchain/ui";

const ACCEPTED = ["application/pdf", "image/jpeg", "image/png"];
const MAX_BYTES = 15 * 1024 * 1024;

async function sha256(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest)).map((value) => value.toString(16).padStart(2, "0")).join("");
}

export function IdentityDocumentUpload() {
  const [documents, setDocuments] = React.useState<Array<{ name: string; size: number; hash: string; kind: string }>>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [submitted, setSubmitted] = React.useState(false);

  async function addFiles(files: FileList | null) {
    if (!files) return;
    setError(null);
    const next = [...documents];
    for (const file of Array.from(files)) {
      if (!ACCEPTED.includes(file.type)) { setError(`${file.name}: use PDF, JPG or PNG.`); continue; }
      if (file.size > MAX_BYTES) { setError(`${file.name}: maximum file size is 15 MB.`); continue; }
      const hash = await sha256(file);
      if (next.some((item) => item.hash === hash)) { setError(`${file.name}: duplicate document.`); continue; }
      next.push({ name: file.name, size: file.size, hash, kind: "IDENTITY_DOCUMENT" });
    }
    setDocuments(next);
    setSubmitted(false);
  }

  return <div className="space-y-4">
    <label className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-9 text-center transition hover:border-emerald-700 hover:bg-emerald-50/40">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-emerald-950 shadow-sm"><Icon name="id-card" className="h-5 w-5"/></span>
      <span className="mt-3 text-sm font-bold text-slate-950">Upload verification documents</span>
      <span className="mt-1 max-w-md text-xs leading-5 text-slate-500">PDF, JPG or PNG · max 15 MB each. Files are hashed locally before a secure upload session is requested.</span>
      <input className="sr-only" type="file" multiple accept="application/pdf,image/jpeg,image/png" onChange={(event) => void addFiles(event.target.files)} />
    </label>
    {error ? <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-800">{error}</div> : null}
    {documents.length ? <Card className="divide-y divide-slate-200">{documents.map((document) => <div key={document.hash} className="flex items-center gap-3 p-4"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600"><Icon name="file"/></span><div className="min-w-0 flex-1"><div className="truncate text-sm font-semibold">{document.name}</div><div className="mt-1 font-mono text-[10px] text-slate-400">SHA-256 {document.hash.slice(0, 18)}…</div></div><button type="button" onClick={() => setDocuments((items) => items.filter((item) => item.hash !== document.hash))} className="text-xs font-bold text-slate-500 hover:text-red-700">Remove</button></div>)}</Card> : null}
    <div className="flex items-center justify-between gap-3"><div className="text-xs leading-5 text-slate-500">Identity files are sensitive. Production storage must be encrypted, access-controlled and retention-limited.</div><Button type="button" disabled={!documents.length || submitted} onClick={() => setSubmitted(true)}>{submitted ? "Ready for secure upload" : "Prepare submission"}</Button></div>
    {submitted ? <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs text-emerald-900"><strong>Prepared, not verified.</strong> The production API must create secure upload URLs and submit the check to the configured verification provider.</div> : null}
  </div>;
}
