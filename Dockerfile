FROM node:12.4.0-stretch-slim

COPY . develop

WORKDIR /develop

RUN yarn install
CMD yarn start

EXPOSE 3000
