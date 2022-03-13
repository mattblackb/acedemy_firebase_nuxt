FROM node:16-alpine as base
RUN apk update
RUN apk add git
RUN apk add openssh

WORKDIR /dating-app
COPY package.json ./dating-app
COPY . /dating-app
RUN npm install
EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000