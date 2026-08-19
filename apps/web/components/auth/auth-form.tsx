"use client";

import { FormEvent, useState } from "react";
import { Button, Icon, Input, StatusBadge, WalletSignInButton, useLocale } from "@powerchain/ui";

type Mode = "login" | "signup" | "reset";

export function AuthForm({ mode }: { mode: Mode }) {
  const { locale } = useLocale();
  const es = locale === "es";
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [rememberSocial, setRememberSocial] = useState(false);
  const api = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3010";
  const dashboard = process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "http://localhost:3004";
  const title = mode === "login" ? (es ? "Bienvenido de nuevo" : "Welcome back") : mode === "signup" ? (es ? "Crea tu cuenta" : "Create your account") : (es ? "Restablece tu contraseña" : "Reset your password");
  const description = mode === "login" ? (es ? "Google es la opción principal. También puedes usar X, correo o una wallet Solana." : "Google is the primary sign-in. You can also use X, email or a Solana wallet.") : mode === "signup" ? (es ? "Crea tu espacio de creador con permisos separados por rol." : "Create your creator workspace with role-separated permissions.") : (es ? "Introduce tu correo para solicitar un enlace seguro." : "Enter your email address to request a secure reset link.");
  const oauth = (provider: "google" | "x") => `${api}/api/v1/auth/oauth/${provider}/start?returnTo=${encodeURIComponent(dashboard)}${rememberSocial ? "&remember=1" : ""}`;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setMessage(null);
    const form = new FormData(event.currentTarget);
    const values = Object.fromEntries(form.entries());
    if (mode === "login") values.rememberMe = form.get("rememberMe") === "on";
    const endpoint = mode === "login" ? "/api/v1/auth/login" : mode === "signup" ? "/api/v1/auth/register" : "/api/v1/auth/reset-password";
    try {
      const response = await fetch(`${api}${endpoint}`, { method: "POST", credentials: "include", headers: { "content-type": "application/json" }, body: JSON.stringify(values) });
      const payload = await response.json().catch(() => null) as { error?: { message?: string }; data?: { message?: string } } | null;
      setMessage(payload?.data?.message ?? payload?.error?.message ?? (response.ok ? "Success." : "Authentication service returned an unexpected response."));
      if (response.ok && mode !== "reset") window.location.assign(dashboard);
    } catch { setMessage(es ? "El servicio de autenticación no está disponible." : "Authentication service is unavailable. Check the API configuration."); }
    finally { setBusy(false); }
  }

  return <div className="w-full max-w-[480px]">
    <div className="flex items-center justify-between gap-3"><StatusBadge tone="success">{es ? "Acceso seguro" : "Secure access"}</StatusBadge><a href="/" className="text-xs font-semibold text-neutral-500 hover:text-neutral-950">{es ? "Volver al inicio" : "Back home"}</a></div>
    <h1 className="mt-6 text-3xl font-bold tracking-[-.04em] text-neutral-950 dark:text-white">{title}</h1><p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{description}</p>
    {mode === "login" ? <div className="mt-7 grid gap-3"><a href={oauth("google")} className="flex h-11 items-center justify-center gap-3 rounded-xl bg-emerald-950 px-4 text-sm font-bold text-white shadow-sm"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-black text-neutral-950">G</span>{es ? "Continuar con Google" : "Continue with Google"}</a><a href={oauth("x")} className="flex h-11 items-center justify-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 text-sm font-bold text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"><span className="font-black">X</span>{es ? "Continuar con X" : "Continue with X"}</a><label className="flex items-center justify-center gap-2 text-xs text-neutral-500"><input type="checkbox" checked={rememberSocial} onChange={(event)=>setRememberSocial(event.target.checked)} className="h-4 w-4 accent-emerald-950"/>{es ? "Recordar sesión social durante 27 días" : "Remember social sign-in for 27 days"}</label>{process.env.NODE_ENV !== "production" && process.env.NEXT_PUBLIC_ENABLE_DEMO_AUTH === "true" ? <div className="grid gap-2 rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-3 text-[11px] leading-5 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"><div className="font-bold text-neutral-950 dark:text-white">Local demo auth</div><div>Fake X: <a href={`${api}/api/v1/auth/oauth/demo/x?handle=powerchain_demo&returnTo=${encodeURIComponent(dashboard)}`} className="font-bold text-emerald-950 dark:text-emerald-300">powerchain_demo</a></div><div>Email fixtures require <code>SEED_DEMO_USERS=true</code>: <b>creator@powerchain.local</b> or <b>demo@powerchain.local</b> with local seed password <b>PowerChainLocal123</b>.</div></div> : null}<div className="flex items-center gap-3 py-1"><span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800"/><span className="text-[10px] font-bold uppercase tracking-[.14em] text-neutral-400">{es ? "o correo" : "or email"}</span><span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800"/></div></div> : null}
    <form className={`${mode === "login" ? "mt-1" : "mt-7"} grid gap-4`} onSubmit={submit}>
      {mode === "signup" ? <><label className="grid gap-2 text-sm font-semibold">{es ? "Nombre completo" : "Full name"}<Input name="displayName" autoComplete="name" required/></label><label className="grid gap-2 text-sm font-semibold">{es ? "Organización" : "Organization"}<Input name="organizationName" autoComplete="organization" required/></label></> : null}
      <label className="grid gap-2 text-sm font-semibold">{es ? "Correo electrónico" : "Email address"}<Input name="email" type="email" autoComplete="email" placeholder="name@organization.org" required/></label>
      {mode !== "reset" ? <label className="grid gap-2 text-sm font-semibold">{es ? "Contraseña" : "Password"}<Input name="password" type="password" autoComplete={mode === "login" ? "current-password" : "new-password"} minLength={12} placeholder="••••••••••••" required/></label> : null}
      {mode === "login" ? <div className="flex items-center justify-between gap-3"><label className="flex items-center gap-2 text-xs text-neutral-500"><input name="rememberMe" type="checkbox" className="h-4 w-4 accent-emerald-950"/>{es ? "Recordarme durante 27 días" : "Remember me for 27 days"}</label><a href="/auth/reset-password" className="text-xs font-bold text-emerald-950 dark:text-emerald-300">{es ? "¿Olvidaste la contraseña?" : "Forgot password?"}</a></div> : null}
      <Button className="mt-1 w-full" type="submit" disabled={busy}>{busy ? (es ? "Espera…" : "Please wait…") : mode === "login" ? <>{es ? "Iniciar con correo" : "Sign in with email"} <Icon name="arrow-right"/></> : mode === "signup" ? <>{es ? "Crear cuenta" : "Create account"} <Icon name="arrow-right"/></> : <>{es ? "Enviar enlace" : "Send reset link"} <Icon name="arrow-right"/></>}</Button>
    </form>
    {mode !== "reset" ? <div className="mt-5"><div className="flex items-center gap-3"><span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800"/><span className="text-[10px] font-bold uppercase tracking-[.14em] text-neutral-400">{es ? "wallet" : "wallet"}</span><span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800"/></div><WalletSignInButton className="mt-4 w-full" redirectOnConnect={dashboard}/><p className="mt-2 text-center text-[10px] leading-4 text-neutral-400">Wallet connection never gives PowerChain your private key and does not by itself grant account, KYC or treasury permissions.</p></div> : null}
    {message ? <div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-xs leading-5 text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">{message}</div> : null}
    <div className="mt-7 border-t border-neutral-200 pt-5 text-center text-xs text-neutral-500 dark:border-neutral-800">{mode === "login" ? <>New to PowerChain? <a href="/auth/sign-up" className="font-bold text-emerald-950 dark:text-emerald-300">Create an account</a></> : mode === "signup" ? <>Already registered? <a href="/auth/login" className="font-bold text-emerald-950 dark:text-emerald-300">Sign in</a></> : <>Remembered your password? <a href="/auth/login" className="font-bold text-emerald-950 dark:text-emerald-300">Return to sign in</a></>}</div>
  </div>;
}
