'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  APP_TITLE: '"OKN-2018 TEST-MODE"',
  VUE_APP_API_HOST: '"http://localhost:3000"',
  VUE_APP_MASTER_TOKEN: '"VAXtabZ35h0xzpFmYskOf0ZqQdjQSsgj"'
})
