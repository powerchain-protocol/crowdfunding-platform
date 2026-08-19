export function safeUrl(value: string, allowedProtocols: readonly string[] = ["https:", "http:"]): URL | null {
  try {
    const url = new URL(value);
    return allowedProtocols.includes(url.protocol) ? url : null;
  } catch {
    return null;
  }
}

export function joinUrl(base: string, pathname: string): string {
  const url = new URL(base);
  url.pathname = `${url.pathname.replace(/\/$/, "")}/${pathname.replace(/^\//, "")}`;
  return url.toString();
}
