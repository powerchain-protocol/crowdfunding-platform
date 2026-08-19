"use client";

import { FormEvent, useState } from "react";
import { Button, Icon, Input, StatusBadge } from "@powerchain/ui";

type Mode = "login" | "signup" | "reset";

export function AuthForm({ mode }: { mode: Mode }) {
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const api = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3010";
  const title = mode === "login" ? "Welcome back" : mode === "signup" ? "Create your account" : "Reset your password";
  const description = mode === "login" ? "Sign in to manage campaigns, evidence reviews and treasury workflows." : mode === "signup" ? "Create campaigns and join an organization with role-separated permissions." : "Enter your email address to request a secure reset link.";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setMessage(null);
    const form = new FormData(event.currentTarget);
    const endpoint = mode === "login" ? "/api/v1/auth/login" : mode === "signup" ? "/api/v1/auth/register" : "/api/v1/auth/reset-password";
    try {
      const response = await fetch(`${api}${endpoint}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(Object.fromEntries(form.entries())) });
      const payload = await response.json().catch(() => null) as { error?: { message?: string }; data?: { message?: string } } | null;
      setMessage(payload?.data?.message ?? payload?.error?.message ?? "Authentication service returned an unexpected response.");
    } catch { setMessage("Authentication service is unavailable. Check NEXT_PUBLIC_API_URL and the API app."); }
    finally { setBusy(false); }
  }

  return <div className="w-full max-w-md"><div className="flex items-center justify-between gap-3"><StatusBadge tone="success">Secure access</StatusBadge><a href="/" className="text-xs font-semibold text-slate-500 hover:text-slate-950">Back home</a></div><h1 className="mt-6 text-3xl font-bold tracking-[-.04em] text-slate-950">{title}</h1><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p><form className="mt-7 grid gap-4" onSubmit={submit}>{mode === "signup" ? <label className="grid gap-2 text-sm font-semibold text-slate-800">Full name<Input name="name" autoComplete="name" placeholder="Your name" required/></label> : null}<label className="grid gap-2 text-sm font-semibold text-slate-800">Email address<Input name="email" type="email" autoComplete="email" placeholder="name@organization.org" required/></label>{mode !== "reset" ? <label className="grid gap-2 text-sm font-semibold text-slate-800">Password<Input name="password" type="password" autoComplete={mode === "login" ? "current-password" : "new-password"} minLength={12} placeholder="••••••••••••" required/></label> : null}{mode === "login" ? <div className="flex items-center justify-between"><label className="flex items-center gap-2 text-xs text-slate-500"><input type="checkbox" className="h-4 w-4 accent-emerald-950"/>Remember me</label><a href="/auth/reset-password" className="text-xs font-bold text-emerald-950">Forgot password?</a></div> : null}<Button className="mt-1 w-full" type="submit" disabled={busy}>{busy ? "Please wait…" : mode === "login" ? <>Sign in <Icon name="arrow-right"/></> : mode === "signup" ? <>Create account <Icon name="arrow-right"/></> : <>Send reset link <Icon name="arrow-right"/></>}</Button></form>{message ? <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs leading-5 text-slate-600">{message}</div> : null}<div className="mt-7 border-t border-slate-200 pt-5 text-center text-xs text-slate-500">{mode === "login" ? <>New to PowerChain? <a href="/auth/sign-up" className="font-bold text-emerald-950">Create an account</a></> : mode === "signup" ? <>Already registered? <a href="/auth/login" className="font-bold text-emerald-950">Sign in</a></> : <>Remembered your password? <a href="/auth/login" className="font-bold text-emerald-950">Return to sign in</a></>}</div><p className="mt-5 text-center text-[10px] leading-4 text-slate-400">By continuing you agree to the platform terms and acknowledge that treasury authorization remains subject to configured organization policies.</p></div>;
}
