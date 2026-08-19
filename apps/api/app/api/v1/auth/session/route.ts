import { currentSession } from "../../../../../lib/current-session";
export const dynamic = "force-dynamic";
export async function GET() {
  const session = await currentSession();
  if (!session) return Response.json({ data: { authenticated: false, user: null, organizations: [] }, meta: { requestId: crypto.randomUUID() } }, { headers: { "cache-control": "no-store" } });
  return Response.json({ data: { authenticated: true, user: { id: session.user.id, email: session.user.email, displayName: session.user.displayName, avatarUrl: session.user.avatarUrl, primaryRole: session.user.primaryRole }, organizations: session.user.memberships.map((m: (typeof session.user.memberships)[number]) => ({ id: m.organization.id, name: m.organization.name, slug: m.organization.slug, role: m.role })), expiresAt: session.expiresAt.toISOString(), remembered: session.remembered }, meta: { requestId: crypto.randomUUID() } }, { headers: { "cache-control": "no-store" } });
}
