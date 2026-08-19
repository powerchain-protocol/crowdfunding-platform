import type { Metadata } from "next";
import "./globals.css";
import { PlatformProviders } from "@powerchain/ui/providers/platform-provider";
export const metadata: Metadata = { title: "Crowdfunding · PowerChain", description: "PowerChain transparent crowdfunding platform" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body><PlatformProviders>{children}</PlatformProviders></body></html>; }
