'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  APP_TITLE: '"OKN-2018 DEV-MODE"',
  VUE_APP_API_HOST: '"http://localhost:3000"',
  VUE_APP_MASTER_TOKEN: '"VAXtabZ35h0xzpFmYskOf0ZqQdjQSsgj"'
})
