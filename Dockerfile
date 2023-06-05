FROM node:alpine as base

WORKDIR /client

COPY package.json yarn.lock ./

RUN rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean

COPY . .

RUN yarn build
RUN yarn dev

EXPOSE 4173
