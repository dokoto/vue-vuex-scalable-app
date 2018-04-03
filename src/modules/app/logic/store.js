/**
 * @module App/Logic/Store
 */
import Vue from 'vue';
import Vuex from 'vuex';

import * as types from './types';
import { getToogles } from '../../../common/utils/services';
import auth from '../../auth/logic/store';
import home from '../../home/logic/store';

Vue.use(Vuex);

const state = {};

const actions = {
  /**
   * @function getToogles
   * @description Fetch modules toogles to know what modules must be enable
   * @param {Object} commit default action param (bind param)
   * @example
   * // dispatch RECEIVE_TOGGLES mutation
   * this.$store.dispatch('app/getToogles')
   */
  async getToogles({ commit }) {
    const toggles = await getToogles();
    commit(types.RECEIVE_TOGGLES, toggles);
  }
};

const mutations = {
  [types.RECEIVE_TOGGLES](currState, toggles) {
    currState.toggles = toggles;
  }
};

const app = {
  namespaced: true,
  mutations,
  actions
};

const store = new Vuex.Store({
  state,
  modules: {
    app,
    home,
    auth
  },
  strict: process.env.ENV !== 'production'
});

export default store;
