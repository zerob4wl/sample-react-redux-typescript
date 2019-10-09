FROM node:12.4.0-stretch-slim

COPY . develop

WORKDIR /develop

RUN yarn install
RUN yarn build
CMD npx local-web-server -d ./dist --spa index.html -p 3000 -z

EXPOSE 3000
