FROM node:12.4.0-stretch-slim

WORKDIR /develop

COPY package.json .
COPY yarn.lock .


RUN yarn install

COPY . .

RUN yarn build
CMD npx local-web-server -d ./dist --spa index.html -p 3000 -z

EXPOSE 3000
