import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins
import VueI18n from 'vue-i18n';

// Install Vue plugins.
Vue.use(Vuex);
Vue.use(VueI18n);


function loadStories() {
  // You can require as many stories as you need.
  require('./stories');
}

configure(loadStories, module);
