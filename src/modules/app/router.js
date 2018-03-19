import Vue from 'vue';
import Router from 'vue-router';
import Auth from '../auth/view.vue';

// Lazy loading, allow split webpack code
const Home = () => import(/* webpackChunkName: "Home" */'../home/view.vue');
const HeavyMod = () => import(/* webpackChunkName: "Fake" */'../heavyMod/view.vue');

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
    {
      name: 'HeavyMod',
      path: '/HeavyMod',
      components: { container: HeavyMod },
    },
  ],
});
