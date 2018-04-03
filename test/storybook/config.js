import { configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import {
  configure as setViewport,
  INITIAL_VIEWPORTS
} from '@storybook/addon-viewport';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins
import VueI18n from 'vue-i18n';

import devices from './devices';

// Install Vue plugins.
Vue.use(Vuex);
Vue.use(VueI18n);

setOptions({
  name: 'Re-Design',
  url: 'https://github.com/malfarokn/redesign',
  addonPanelInRight: true
});

setViewport({
  // defaultViewport: 'ipad',
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...devices
  }
});

const req = require.context('./stories/', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
