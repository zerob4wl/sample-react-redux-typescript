FROM node:12.4.0-stretch-slim

# Run it from project root (docker build -f ./.storybook/DockerFile .)
COPY . storybook

WORKDIR /storybook

RUN yarn install
RUN yarn build:storybook
CMD npx local-web-server -d ./storybook-static --spa index.html -p 3001 -z

EXPOSE 3001

