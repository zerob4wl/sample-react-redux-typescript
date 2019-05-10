FROM alpine:3.7

RUN apk add nodejs nodejs-npm git yarn && \
    npx degit zerob4wl/sample-react-redux-typescript develop

WORKDIR /develop

RUN yarn install
CMD yarn start

EXPOSE 3000

