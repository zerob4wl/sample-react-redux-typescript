FROM node:12.4.0-stretch-slim

# Run it from project root (docker build ./.storybook)
COPY . storybook

WORKDIR /storybook

RUN yarn install
CMD yarn build:storybook &&  npx local-web-server -d ./storybook-static --spa index.html -p 3001 -z

EXPOSE 3001

