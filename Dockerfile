# syntax=docker/dockerfile:1.7
# Generic production image for one PowerChain Next.js app.
# Example:
# docker build --build-arg POWERCHAIN_APP=@powerchain/web --build-arg PORT=3000 -t powerchain-web .

ARG NODE_VERSION=24.19.0
FROM node:${NODE_VERSION}-bookworm-slim AS base
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PNPM_HOME=/pnpm \
    PATH=/pnpm:$PATH
RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates openssl tini \
    && rm -rf /var/lib/apt/lists/* \
    && corepack enable \
    && corepack prepare pnpm@11.22.0 --activate
WORKDIR /workspace

FROM base AS deps
ENV NODE_ENV=development
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY prisma ./prisma
COPY scripts ./scripts
COPY config ./config
COPY apps ./apps
COPY packages ./packages
COPY services ./services
COPY skills ./skills
RUN pnpm install --frozen-lockfile

FROM deps AS builder
ARG POWERCHAIN_APP=@powerchain/web
ARG PORT=3000
ENV POWERCHAIN_APP=${POWERCHAIN_APP} PORT=${PORT} NODE_ENV=production
RUN pnpm --filter "${POWERCHAIN_APP}" build

FROM base AS runner
ARG POWERCHAIN_APP=@powerchain/web
ARG PORT=3000
ENV POWERCHAIN_APP=${POWERCHAIN_APP} \
    PORT=${PORT} \
    HOSTNAME=0.0.0.0
COPY --from=builder --chown=node:node /workspace /workspace
USER node
EXPOSE 3000
ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["sh", "-lc", "pnpm --filter \"$POWERCHAIN_APP\" start -- --hostname 0.0.0.0 --port \"$PORT\""]
