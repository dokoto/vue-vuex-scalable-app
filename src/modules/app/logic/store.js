/**
 * @module App/Logic/Store
 */
import Vue from 'vue';
import Vuex from 'vuex';

import { getToogles } from '@/common/utils/api';
import * as types from './types';
import auth from '../../auth/logic/store';
import fakeComplexModA from '../../fakeComplexModA';
import fakeComplexModB from '../../fakeComplexModB/logic/store';

Vue.use(Vuex);

const state = {
  toggles: {}
};

const actions = {
  /**
   * @public
   * @function getToogles
   * @description Fetch modules toogles to know what modules must be enable
   * @param {Object} commit default action param (bind param)
   * @example
   * // dispatch RECEIVE_TOGGLES mutation
   * this.$store.dispatch('app/getToogles')
   */
  async getToogles({ commit }) {
    const toggles = await getToogles();
    commit(types.RECEIVE_TOGGLES, toggles.data);
  }
};

const mutations = {
  [types.RECEIVE_TOGGLES](currState, toggles) {
    currState.toggles = toggles;
  }
};

const app = {
  namespaced: true,
  state,
  mutations,
  actions
};

const store = new Vuex.Store({
  modules: {
    app,
    auth,
    fakeComplexModA,
    fakeComplexModB
  },
  strict: process.env.ENV !== 'production'
});

export default store;
