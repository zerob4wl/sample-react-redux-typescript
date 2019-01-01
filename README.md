# Sample Project Based on React, Redux, React-router and Typescript
[![Build Status](https://travis-ci.org/zerob4wl/sample-react-redux-typescript.svg?branch=master)](https://travis-ci.org/zerob4wl/sample-react-redux-typescript)

This is a sample project and starter based on reactJs, Redux, React-router (v4) and Typescript.

After run this project you can search your location and know about current temperature.

This project use https://metaweather.com/api/ to provide data and for 
handle `cors` use https://cors-anywhere.herokuapp.com service. 

## project structure

    .
    ├── cypress                              # Cypress E2E testing folders 
    ├── dist                                 # Compiled files (index.html & assets)
    ├── src                                  # Source files (alternatively `lib` or `app`)
    │   ├── components                       # Global Components   
    |   ├── _test_                           # Test folder (jest)
    │   │   ├── CityBox                      # City card component
    │   │   │   ├── style.less               # component styles
    │   │   │   └── index.tsx                # source of `dashboard` component 
    │   │   .         
    │   │                                           
    │   ├── containers                       # Main containers (react components with route)
    │   │   ├── Search                       # Search location component
    │   │   │   ├── style.les                # component styles
    │   │   │   └── index.ts                 # source of component 
    │   │   .         
    │   │   .                            
    │   │   ├── app.less                     # Main application styles
    │   │   └── app.ts                       # Main application router
    │   │
    │   ├── lib                              # Libraries and helper classes 
    │   ├── redux                            # Redux store, actions and reducers
    │   ├── theme                            # Main style and Less variables
    │   └── translation                      # Translations files and utilities
    .
    .
    ├── tsconfig.json
    ├── webpack.config.js
    └── README.md
 

## Contains

- [x] [Babel 7](https://babeljs.io)
- [x] [Typescript](https://www.typescriptlang.org/)
- [x] [React](https://facebook.github.io/react/)
- [x] [Redux](https://github.com/reactjs/redux)
- [x] [React Router](https://github.com/ReactTraining/react-router)
- [x] [i18next](https://react.i18next.com)
- [x] [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [x] [Cypress (E2E Test)](https://github.com/cypress-io/cypress)
- [x] [Jest](https://github.com/facebook/jest)

## Setup

```
$ yarn install
```

## Running

```
$ yarn start
```

## Build

```
$ yarn build
```

## Test

```
$ yarn test
```
