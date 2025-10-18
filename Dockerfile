FROM node:22.19-alpine AS base
RUN npm install -g pnpm
WORKDIR /game

FROM base AS builder
COPY . /game
RUN pnpm install --frozen-lockfile
RUN pnpm build

FROM nginx:alpine AS production
COPY --from=builder /game/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
