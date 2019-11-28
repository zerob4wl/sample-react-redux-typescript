FROM node:12.4.0-stretch-slim

WORKDIR /develop

# This will help with docker cache to generate docker image
# docker cache will be discarded in case package.json or yarn.lock have been changed by developer
COPY package.json .
COPY yarn.lock .


RUN yarn install

COPY . .

RUN yarn build
CMD npx local-web-server -d ./dist --spa index.html -p 3000 -z

EXPOSE 3000
