"use client";
import { useState } from "react";
import { Button } from "../button";
import { Card } from "../card";
import { SavedPrompts } from "./saved-prompts";
export function MessagesWorkspace() { const [draft, setDraft] = useState(""); return <div className="grid gap-4 lg:grid-cols-[1fr_320px]"><Card className="p-5"><div className="text-sm font-bold">Message / prompt</div><textarea value={draft} onChange={(e) => setDraft(e.target.value)} className="mt-3 min-h-40 w-full rounded-xl border border-neutral-200 bg-white p-3 text-sm dark:border-neutral-800 dark:bg-neutral-950" placeholder="Ask about a campaign, milestone, token model or operational task…"/><div className="mt-3 flex justify-end"><Button disabled={!draft.trim()}>Prepare</Button></div><p className="mt-3 text-[11px] leading-5 text-neutral-500">AI may prepare plans and review objects. It does not sign transactions or override treasury/identity policy.</p></Card><div><div className="mb-3 text-sm font-bold">Saved prompts</div><SavedPrompts onUse={setDraft}/></div></div>; }
