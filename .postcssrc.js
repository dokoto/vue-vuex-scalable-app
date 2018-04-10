// https://github.com/michael-ciniawsky/postcss-load-config

const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': { path: [path.resolve(__dirname, 'src')] },
    'postcss-url': {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    stylelint: {},
    'postcss-flexbugs-fixes': {},
    'postcss-reporter': { clearReportedMessages: true }
  }
};
