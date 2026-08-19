"use client";

import * as React from "react";
import { Button, Input, StatusBadge } from "@powerchain/ui";

export function AgreementSignPanel({ contentHash }: { contentHash: string }) {
  const [name, setName] = React.useState("");
  const [accepted, setAccepted] = React.useState(false);
  const [prepared, setPrepared] = React.useState(false);
  return <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"><div className="flex items-center justify-between"><h3 className="font-bold">Electronic signature</h3><StatusBadge>Not signed</StatusBadge></div><p className="mt-2 text-xs leading-5 text-neutral-500">Sign only after reviewing the final rendered agreement. The signed content hash is bound to the signature record so later content changes require a new agreement version.</p><label className="mt-4 block text-xs font-bold text-neutral-700">Full legal name<Input className="mt-2" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Type your full name"/></label><label className="mt-4 flex items-start gap-2 text-xs leading-5 text-neutral-600"><input type="checkbox" className="mt-1" checked={accepted} onChange={(event)=>setAccepted(event.target.checked)}/><span>I intend to sign this agreement electronically and confirm I have reviewed the document identified by hash <code className="font-mono">{contentHash.slice(0,16)}…</code>.</span></label><Button type="button" className="mt-4 w-full" disabled={!name.trim() || !accepted || prepared} onClick={()=>setPrepared(true)}>{prepared?"Signature request prepared":"Sign agreement"}</Button>{prepared?<div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-900"><strong>Prepared, not executed.</strong> Production signing requires authenticated server persistence, signer authorization, timestamping and append-only audit recording.</div>:null}</div>
}
