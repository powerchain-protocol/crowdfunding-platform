import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@powerchain/ui/theme-provider";
import { LocaleProvider } from "@powerchain/ui/locale-provider";
export const metadata: Metadata = { title: "Treasury · PowerChain", description: "PowerChain transparent crowdfunding platform" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body><LocaleProvider><ThemeProvider>{children}</ThemeProvider></LocaleProvider></body></html>; }
