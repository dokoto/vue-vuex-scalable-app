import {
  sortMusic,
  filterMusic,
  saveMusic,
  getTracks
} from '@/common/utils/api';
// import { STATUS } from '@/common/utils/api/constants';
// import * as constants from '@/common/constants';
import * as types from './types';

const state = {
  songs: [],
  pages: {
    index: 0,
    total: 100
  }
};

const actions = {
  async getTracks({ commit }) {
    const response = await getTracks();
    commit(types.MUSIC_RECEIVED, response.data);
  },

  async doSort({ commit }) {
    const response = await sortMusic();
    commit(types.SORTED_ACTIVITIES_RECEIVED, response.data);
  },

  async doFilter({ commit }) {
    const response = await filterMusic();
    commit(types.FILTERED_ACTIVITIES_RECEIVED, response.data);
  },

  async doChange({ commit }) {
    const response = await saveMusic();
    commit(types.ACTIVITY_CHANGED, response.data);
  }
};

const mutations = {
  [types.SORTED_ACTIVITIES_RECEIVED](currState, activities) {
    currState.activities = activities;
  },

  [types.FILTERED_ACTIVITIES_RECEIVED](currState, activities) {
    currState.activities = activities;
  },

  [types.ACTIVITY_CHANGED](currState, activity) {
    currState.activities = activity;
  },

  [types.MUSIC_RECEIVED](currState, songs) {
    currState.songs = songs;
  }
};

export default {
  namespaced: true,
  actions,
  mutations,
  state
};
