# R^2 Starter Kit with [TocasUI](https://github.com/TeaMeow/TocasUI/)

> R^2 Starter Kit is an boilerplate for web development built on top of React, Redux, Redux Saga and Webpack 4.

[![Maintainability][maintainability-badge]][maintainability]
[![Travis Build Status][build-badge]][build]
[![Coverage Status][coveralls-badge]][coveralls]
[![Dependency Status][deps-badge]][deps]
[![devDependency Status][dev-deps-badge]][dev-deps]
[![Heroku][heroku-deployment-badge]][heroku-app]

![](http://i.giphy.com/69jtJzHmbccnmL1W8k.gif)

### Presets And Loaders

* .babelrc
  * @babel/preset-env
  * @babel/preset-react
  * @babel/plugin-proposal-class-properties
  * @babel/plugin-syntax-dynamic-import
* webpack.config.js
  * css-loader
  * postcss-loader
    * postcss-preset-env
    * postcss-import
    * cssnano
  * sass-loader
  * file-loader
  * image-webpack-loader
  * svg-inline-loader

### Get Started

Clone this repo and install dependencies.

```
$ git clone https://github.com/tpai/r2-starter-kit.git
$ cd r2-starter-kit
$ yarn
```

### Usage

#### Run Developing Server

```
yarn dev
```

It will start a development server which listen to port 8080.

#### Build Bundled JS

```
yarn build
```

It will distribute the files into `dist/` directory, and open bundle analyzation report.

#### Run E2E test

```
yarn build && yarn start
yarn e2e
```

Start server first, then run the tests.

#### Code Coverage Report

```
yarn test:cov
```

Check out the report in `tests/__coverage__/index.html`.

[maintainability-badge]: https://api.codeclimate.com/v1/badges/807d78f313c0b1eec23b/maintainability
[maintainability]: https://codeclimate.com/github/tpai/r2-starter-kit/maintainability

[build-badge]: https://travis-ci.org/tpai/r2-starter-kit.svg?branch=master
[build]: https://travis-ci.org/tpai/r2-starter-kit

[coveralls-badge]: https://coveralls.io/repos/github/tpai/r2-starter-kit/badge.svg?branch=master
[coveralls]: https://coveralls.io/github/tpai/r2-starter-kit?branch=master

[deps-badge]: https://david-dm.org/tpai/r2-starter-kit.svg
[deps]: https://david-dm.org/tpai/r2-starter-kit

[dev-deps-badge]: https://david-dm.org/tpai/r2-starter-kit/dev-status.svg
[dev-deps]: https://david-dm.org/tpai/r2-starter-kit#info=devDependencies

[heroku-deployment-badge]: https://heroku-badge.herokuapp.com/?app=r2-starter-kit
[heroku-app]: http://r2-starter-kit.herokuapp.com
