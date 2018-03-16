import Vue from 'vue';
import Router from 'vue-router';
import Home from '../home/view.vue';
import Auth from '../auth/view.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      name: 'Auth',
      path: '/',
      components: { container: Auth },
    },
    {
      name: 'home',
      path: '/home',
      components: { container: Home },
    },
  ],
});
