import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@powerchain/ui/theme-provider";
export const metadata: Metadata = { title: "API · PowerChain", description: "PowerChain transparent crowdfunding platform" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body><ThemeProvider>{children}</ThemeProvider></body></html>; }
