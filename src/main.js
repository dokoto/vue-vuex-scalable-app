import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import VueI18n from 'vue-i18n';
import * as languaje from './common/utils/languaje';
import App from './modules/app/App.vue';
import router from './modules/app/router';
import store from './modules/app/store';

sync(store, router);
Vue.use(VueI18n);

const i18n = new VueI18n(languaje);
Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
