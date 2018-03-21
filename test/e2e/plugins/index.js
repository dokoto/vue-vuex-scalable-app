// https://docs.cypress.io/guides/guides/plugins-guide.html

const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('test', 'e2e', 'config', `${file}.json`);

  return fs.readJson(pathToConfigFile);
}

module.exports = (on, config) => {
  const file = config.env.configFile || 'local';
  return getConfigurationByFile(file);
};
