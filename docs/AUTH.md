# Authentication & Authorization

**Revision:** `1.0.0`

The web application exposes `/auth/login`, `/auth/sign-in`, `/auth/sign-up` and `/auth/reset-password`, with compatibility aliases for `/auth/signin` and `/auth/signup`.

Authentication does not collapse organization and treasury permissions into a generic administrator role. Shared role contracts include campaign, finance, reviewer, field, audit and treasury-specific roles.

The current API endpoints are intentionally fail-closed until a server-side identity provider, session persistence, MFA policy and rate-limiting layer are configured. The UI must never fabricate a successful session.

Minimum production controls:

- server-owned session cookies;
- MFA for privileged roles;
- CSRF protection where relevant;
- login/reset rate limiting;
- organization isolation;
- resource-level authorization;
- treasury role separation;
- audit events for authentication and privilege changes.
