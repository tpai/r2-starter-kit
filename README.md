# R^2 Starter Kit with [TocasUI](https://github.com/TeaMeow/TocasUI/)

> R^2 Starter Kit is an boilerplate for web development built on top of React, Redux, Redux Saga and Webpack 4.

[![Travis Build Status][build-badge]][build]
[![Heroku][heroku-deployment-badge]][heroku-app]
[![Coverage Status][coveralls-badge]][coveralls]
[![Maintainability][maintainability-badge]][maintainability]
[![Total alerts](https://img.shields.io/lgtm/alerts/g/tpai/r2-starter-kit.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/tpai/r2-starter-kit/alerts/)
[![Snyk][snyk-badge]][snyk]
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Ftpai%2Fr2-starter-kit.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Ftpai%2Fr2-starter-kit?ref=badge_shield)

![demo](http://i.giphy.com/RMwOR7Z42FpiHnU0tw.gif)

## Presets And Loaders

- .babelrc
  - @babel/preset-env
  - @babel/preset-react
  - @babel/plugin-proposal-class-properties
  - @babel/plugin-syntax-dynamic-import
- webpack.config.js
  - css-loader
  - postcss-loader
    - postcss-preset-env
    - postcss-import
    - cssnano
  - sass-loader
  - file-loader
  - image-webpack-loader
  - svg-inline-loader

## Get Started

Clone this repo and install dependencies.

```
$ git clone https://github.com/tpai/r2-starter-kit.git
$ cd r2-starter-kit
$ yarn
```

## Usage

### Run Developing Server

```
yarn dev
```

It will start a development server which listen to port 8080.

### Build Bundled JS

```
yarn build
```

It will distribute the files into `dist/` directory, and open bundle analyzation report.

### Run E2E test

```
yarn e2e
```

It will automatically start dev server and run end to end test.

### Code Coverage Report

```
yarn test:cov
```

Check out the report at `./coverage/lconv-report/index.html`.

## CI/CD

|                | Trigger       | Action                                                   |
| -------------- | ------------- | -------------------------------------------------------- |
| Github Actions | Pull Request  | Unit Test                                                |
| Travis CI      | Master Branch | Unit Test, Generate Test Coverage                        |
| Layer CI       | Master Branch | Deployment                                               |
| Heroku         | Master Branch | Deployment                                               |
| Okteto         | Master Branch | Kubernetes Deployment                                    |
| LGTM           | Pull Request  | Code vulnerability check                                 |
| Snyk           | --            | Packages Vulnerability Check, Autofix PR (e.g. lockfile) |
| CodeClimate    | --            | Code Maintainability, Coverage Report                    |
| Coveralls      | --            | Coverage Report                                          |

[maintainability-badge]: https://api.codeclimate.com/v1/badges/807d78f313c0b1eec23b/maintainability
[maintainability]: https://codeclimate.com/github/tpai/r2-starter-kit/maintainability
[build-badge]: https://api.travis-ci.com/tpai/r2-starter-kit.svg?branch=master
[build]: https://travis-ci.com/github/tpai/r2-starter-kit
[coveralls-badge]: https://coveralls.io/repos/github/tpai/r2-starter-kit/badge.svg?branch=master
[coveralls]: https://coveralls.io/github/tpai/r2-starter-kit?branch=master
[snyk-badge]: https://snyk.io/test/github/tpai/r2-starter-kit/badge.svg
[snyk]: https://snyk.io/test/github/tpai/r2-starter-kit
[heroku-deployment-badge]: https://heroku-badge.herokuapp.com/?app=r2-starter-kit
[heroku-app]: http://r2-starter-kit.herokuapp.com

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Ftpai%2Fr2-starter-kit.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Ftpai%2Fr2-starter-kit?ref=badge_large)
