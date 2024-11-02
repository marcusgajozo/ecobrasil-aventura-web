# base stage
ARG NODE_VERSION=22.11.0
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /game

# development stage
FROM base AS development
CMD ["npm", "run", "dev"]

# build stage
FROM base AS build
COPY . /game
RUN npm ci
RUN npm run build

# production stage
FROM base AS production
COPY --from=build /next/.next ./.next
COPY --from=build /next/node_modules ./node_modules
COPY --from=build /next/package.json ./package.json
COPY --from=build /next/public ./public
CMD ["npm", "run", "start"]