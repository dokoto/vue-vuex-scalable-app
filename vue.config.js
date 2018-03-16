const _ = require('lodash/object');

module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap(args => [Object.assign(_.get(args, '[0]'), { title: process.env.APP_TITLE })]);
  },
};
