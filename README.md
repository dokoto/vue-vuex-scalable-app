# Re-Design

## Build Setup

``` bash
# install dependencies
$> npm install

# Check correct dependencies
$> npm ls --depth=0

# If the last command throw "npm ERR! missing" run:
$> npm i --no-optional
$> npm dedupe
$> npm ls --depth=0

# serve with hot reload at localhost:8080
$> npm run dev

# build for production with minification
$> npm run build

# build for production and view the bundle analyzer report
$> npm run build --report

# run unit tests
$> npm run unit

# run e2e tests
$> npm run e2e

# run all tests
$> npm test
```

## Cli Extended options

``` bash
# show all options
$> npm run

# run mocker restfull server
$> npm run mocker

# deploy dist built to test it
$> npm run deploy
```

# Architecture
- Generated with [vue-cli](https://github.com/vuejs/vue-cli) stable (2.9.3)
- App backbone: [vue](https://vuejs.org/) + [vuex](https://github.com/vuejs/vuex) + [vue-router](https://router.vuejs.org/en/)+ [vue-i18n](https://github.com/kazupon/vue-i18n)
- Builder backbone: [webpack](https://webpack.js.org/) + [babel](https://babeljs.io/) + [eslint(airbnb)](https://github.com/airbnb/javascript)
- RestFull mocker: [json-server](https://github.com/typicode/json-server)
- Test backbone: [TDD-Jest](https://facebook.github.io/jest/) [E2N-Cypress](https://www.cypress.io/)

# Features
- [Splited code generation](https://webpack.js.org/guides/code-splitting/)
- [Lazy routing module loading](https://router.vuejs.org/en/advanced/lazy-loading.html)
- [Gzipped compressed modules](https://github.com/webpack-contrib/compression-webpack-plugin)
- Conditional toggle route module loading
- [Component oriented programming](https://medium.com/@dan.shapiro1210/understanding-component-based-architecture-3ff48ec0c238)
- [State pattern](https://medium.com/@patrickackerman/the-state-pattern-with-vanilla-javascript-e40ff83e85d0)
- SCSS Style postprocessing

# Currently Scaffolding
- Three modules: App, Auth, Home, HeavyModule
- Modules have local components and logic
- Cross components
- Cross base style
- Cross utils
- Centralizated services calls and paths

# TDD-JEST Samples of
- How to debug with chrome devtools
- How to create a component with i18n text inside and check it
- How create component with props
- How create component with sub-components(slots) inside, and check sub-components
- How component events and check what dispacher were called
- How test async vuex actions with mocker datas

# Vue facts
- [Performance](http://www.stefankrause.net/js-frameworks-benchmark7/table.html)
- [Comparison with other frameworks](https://vuejs.org/v2/guide/comparison.html)
