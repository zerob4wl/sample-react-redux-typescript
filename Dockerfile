FROM node:12.4.0-stretch-slim

COPY . develop

WORKDIR /develop

RUN yarn install
CMD yarn build && cd ./dist &&  npx local-web-server ./dist -p 3000

EXPOSE 3000
