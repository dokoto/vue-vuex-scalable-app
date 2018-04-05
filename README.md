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
$> npm run e2e-local

# run all tests
$> npm test
```

## Cli Extended options

``` bash
# show all options
$> npm run

# Run mocker and webpack-dev-server
$> npm start-local-dev

# Build release and run mocker and deploy release
$> npm start-local-pro

# Build docs and deploy them
$> npmstart-docs

# run mocker restfull server
$> npm run mocker

# deploy dist built to test it
$> npm run deploy

# run unit tests with detailed step test information
$> npm run unit-verbose

# run unit test in debug mode to user with Chrome DevTools
$> npm run unit-dbg

# run e2e on console mode with local config
$> npm run e2e-cli-local

# run e2e on console mode with desa config
$> npm run e2e-cli-desa

# run e2e on visual mode with local config
$> npm run e2e-local

# run e2e on visual mode with local config
$> npm run e2e-local

# run storybook server
$> npm run storybook

# Generate JSDoc documentaion en dist/
$> npm run generate-jsdocs

# Deploy JSDoc documentaion
$> npm run docs-deploy
```

# Architecture
- Generated with [vue-cli](https://github.com/vuejs/vue-cli) stable (2.9.3)
- App backbone: [vue](https://vuejs.org/) + [vuex](https://github.com/vuejs/vuex) + [vue-router](https://router.vuejs.org/en/)+ [vue-i18n](https://github.com/kazupon/vue-i18n)
- Builder backbone: [webpack](https://webpack.js.org/) + [babel](https://babeljs.io/) + [eslint(airbnb)](https://github.com/airbnb/javascript)
- RestFull mocker: [json-server](https://github.com/typicode/json-server)
- Test backbone: [TDD-Jest](https://facebook.github.io/jest/) [E2E-Cypress](https://www.cypress.io/)

# Features
- [Splited code generation](https://webpack.js.org/guides/code-splitting/)
- [Lazy routing module loading](https://router.vuejs.org/en/advanced/lazy-loading.html)
- [Gzipped compressed modules](https://github.com/webpack-contrib/compression-webpack-plugin)
- Conditional toggle route module loading
- [Component oriented programming](https://medium.com/@dan.shapiro1210/understanding-component-based-architecture-3ff48ec0c238)
- [State pattern](https://medium.com/@patrickackerman/the-state-pattern-with-vanilla-javascript-e40ff83e85d0)
- [SCSS Style](https://sass-lang.com/)
- [postCSS](http://postcss.org/)
- [Storybook component modeling and testing tool](https://storybook.js.org/)
- [JSDoc3 documentation generator](http://usejsdoc.org/)
- [DocDash JSDoc template](https://github.com/clenemt/docdash)


# Currently Scaffolding
- Three modules: App, Auth, Home, HeavyModule
- Modules have local components and logic
- Cross components
- Cross base style
- Cross utils
- Centralizated services calls and paths

# TDD-JEST Samples created
- How to inspect with chrome devtools [ $> npm run unit-dbg ]
- How to create a component with i18n text inside and check it
- How create component with props
- How create component with sub-components(slots) inside, and check sub-components
- How trigger component events and check what dispachers were called
- How test async vuex actions with mocker datas

# E2E-Crypess Samples created
- Hoe to inspect with Chrome devTools [Debug docs](https://docs.cypress.io/guides/guides/debugging.html#Using)
- Register a new user and finish session
- Login with an existing user and finish session
- Login with an fake user and get an error

# Styles
- SCSS styles extension
- postCSS with addons: autoprefixer, stylelint, postcss-flexbugs-fixes, postcss-reporter

# StoryBook
- [Readme Addon](https://github.com/tuchk4/storybook-readme) Allow show markdown like documentarion close to component
- [Viewport Addon](https://github.com/storybooks/storybook/tree/master/addons/viewport) Add responsive tools to test the component
- [Knobs Addon](https://www.npmjs.com/package/@storybook/addon-knobs) Add props inteface for components. Easy way to populate props from UI
- [Options Addon](https://github.com/storybooks/storybook/tree/master/addons/options) Allow configure UI interface details

# Vue facts
- [Performance](http://www.stefankrause.net/js-frameworks-benchmark7/table.html)
- [Comparison with other frameworks](https://vuejs.org/v2/guide/comparison.html)
