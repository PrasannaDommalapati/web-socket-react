FROM node:16-alpine

WORKDIR /app/socket-server

COPY package.json ./socket-server

COPY yarn.lock ./socket-server

RUN yarn install --frozen-lockfile

COPY . ../