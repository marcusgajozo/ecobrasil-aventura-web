# base stage
ARG NODE_VERSION=22.11.0
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /game

# development stage
FROM base AS development
CMD ["npm", "run", "dev"]

# build stage
FROM base AS builder
COPY . /game
RUN npm install yarn
RUN yarn install
RUN yarn build

# production stage
FROM nginx:alpine as production
COPY --from=builder /game/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
