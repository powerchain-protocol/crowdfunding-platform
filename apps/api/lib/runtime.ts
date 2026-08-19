export function isMockDataMode(): boolean {
  return (process.env.POWERCHAIN_DATA_MODE ?? "mock") === "mock";
}

export function providerRequired(code: string, message: string): Response {
  return Response.json({ error: { code, message, requestId: crypto.randomUUID() } }, { status: 503 });
}
