import Vue from 'vue';
import Router from 'vue-router';
import toggle from '@/common/utils/modules';
import Auth from '../auth/view';

const Home = () => import(/* webpackChunkName: 'Home' */ '../home/view.vue');
const fakeComplexModAFakeSubModA = () =>
  import(/* webpackChunkName: 'fakeComplexModAFakeSubModA' */ '../fakeComplexModA/modules/fakeSubModA/view.vue');
const fakeComplexModAFakeSubModB = () =>
  import(/* webpackChunkName: 'fakeComplexModAFakeSubModB' */ '../fakeComplexModA/modules/fakeSubModB/view.vue');
const fakeComplexModB = () =>
  import(/* webpackChunkName: 'FakeComplexModB' */ '../fakeComplexModB/view.vue');
const FakeComplexModBFakeSubModA = () =>
  import(/* webpackChunkName: 'FakeComplexModBFakeSubModA' */ '../fakeComplexModB/modules/fakeSubModA/view.vue');
const FakeComplexModBFakeSubModB = () =>
  import(/* webpackChunkName: 'FakeComplexModBFakeSubModB' */ '../fakeComplexModB/modules/fakeSubModB/view.vue');

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      name: 'Auth',
      path: '/',
      components: { container: Auth }
    },
    {
      name: 'home',
      path: '/home',
      components: { container: toggle('home', Home) }
    },
    {
      name: 'fakeComplexModA:fakeSubModA',
      path: '/fakeComplexModA/fakeSubModA',
      components: {
        container: toggle(
          'fakeComplexModA:fakeSubModA',
          fakeComplexModAFakeSubModA
        )
      }
    },
    {
      name: 'fakeComplexModA:fakeSubModB',
      path: '/fakeComplexModA/fakeSubModB',
      components: {
        container: toggle(
          'fakeComplexModA:fakeSubModB',
          fakeComplexModAFakeSubModB
        )
      }
    },
    {
      name: 'fakeComplexModB',
      path: '/fakeComplexModB',
      components: {
        container: toggle('fakeComplexModB', fakeComplexModB)
      }
    },
    {
      name: 'fakeComplexModB:fakeSubModA',
      path: '/fakeComplexModB/fakeSubModA',
      components: {
        container: toggle(
          'fakeComplexModB:fakeSubModA',
          FakeComplexModBFakeSubModA
        )
      }
    },
    {
      name: 'fakeComplexModB:fakeSubModB',
      path: '/fakeComplexModB/fakeSubModB',
      components: {
        container: toggle(
          'fakeComplexModB:fakeSubModB',
          FakeComplexModBFakeSubModB
        )
      }
    }
  ]
});
