FROM node:20-alpine3.17 AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN yarn build


FROM base AS runner
WORKDIR /app
RUN yarn add sharp
ENV NODE_ENV production
COPY --from=builder /app/public ./public
RUN mkdir .next
COPY --from=builder /app/.next/standalone ./
COPY --from=builder  /app/.next/static ./.next/static
EXPOSE 3000
ENV PORT 3000
ENV NODE_TLS_REJECT_UNAUTHORIZED 0
ENV HOSTNAME "0.0.0.0"
CMD ["node", "server.js"]