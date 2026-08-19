# Docker, environment and ignore-file security

PowerChain v1.0.0 treats the repository and container build context as security boundaries.

## Files

- `Dockerfile` — generic production image for one PowerChain Next.js app.
- `infra/Dockerfile.dev` — Node 24.19.0 / pnpm 11.22.0 development image.
- `infra/docker-compose.yml` — PostgreSQL, Redis, and optional app profile.
- `.dockerignore` — prevents secrets, signer material, local databases and generated output entering the Docker build context.
- `.gitignore` — prevents local environment files, keys, local databases and generated output being committed.
- `.npmignore` — second-line protection if a private workspace is accidentally packed/published.
- `.nvmrc` / `.node-version` — canonical Node version. There is no standard `.nvmignore` file.

## Environment contract

Run:

```bash
pnpm env:init
```

The resulting `.env.local` is ignored by Git. `.env.example` and `env/*.env.example` contain placeholders only. Do not place seed phrases, private keys, signer JSON, service-role keys or production credentials in tracked files.

`NEXT_PUBLIC_*` variables are browser-visible. Secret variables must never use that prefix.

## Container networking

PostgreSQL, Redis, and optional application ports are loopback-bound by default. Changing `POWERCHAIN_DOCKER_BIND` to `0.0.0.0` exposes services beyond the local host and should be a deliberate development-only action protected by host firewalling.

## Validation

```bash
pnpm docker:files:check
pnpm config:check
pnpm conformance
```

These checks validate the presence of Docker/ignore/environment boundaries without requiring Docker itself to be installed.
