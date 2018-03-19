import Vue from 'vue';
import Vuex from 'vuex';
import auth from '../auth/logic/store';
import home from '../home/logic/store';

Vue.use(Vuex);
const state = {};

const store = new Vuex.Store({
  state,
  modules: {
    home,
    auth,
  },
  strict: process.env.ENV !== 'production',
});

export default store;
