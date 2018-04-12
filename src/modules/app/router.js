import Vue from 'vue';
import Router from 'vue-router';
import toggle from '@/common/utils/modules';
import Auth from '../auth/view';

const Home = () => import(/* webpackChunkName: 'Home' */ '../home/view.vue');
const musicAjax = () =>
  import(/* webpackChunkName: 'musicAjax' */ '../music/modules/ajax/view.vue');
const musicLocal = () =>
  import(/* webpackChunkName: 'musicLocal' */ '../music/modules/local/view.vue');
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
      name: 'music:ajax',
      path: '/music/ajax',
      components: {
        container: toggle(
          'music:ajax',
          musicAjax
        )
      }
    },
    {
      name: 'music:local',
      path: '/music/local',
      components: {
        container: toggle(
          'music:local',
          musicLocal
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
