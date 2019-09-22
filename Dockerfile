FROM node:12.4.0-stretch-slim

COPY . develop

WORKDIR /develop

RUN yarn install
CMD yarn build && npx local-web-server -d ./dist --spa index.html -p 3000 -z

EXPOSE 3000
