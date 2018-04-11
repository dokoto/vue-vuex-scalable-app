import { sortMusic, filterMusic, saveMusic, getTracks } from '@/common/utils/api';
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

  async doSort({ commit }, { id, order }) {
    const response = await sortMusic(id, order);
    commit(types.SORTED_ACTIVITIES_RECEIVED, response.data);
  },

  async doFilter({ commit }, query) {
    const response = await filterMusic(query);
    commit(types.FILTERED_ACTIVITIES_RECEIVED, response.data);
  },

  async switchPage({ commit }) {
    console.log('CHANGE PAGE');
  },

  async doChange({ commit }) {
    console.log('SAVING');
    // const response = await saveMusic();
    // commit(types.ACTIVITY_CHANGED, response.data);
  }
};

const mutations = {
  [types.SORTED_ACTIVITIES_RECEIVED](currState, songs) {
    currState.songs = songs;
  },

  [types.FILTERED_ACTIVITIES_RECEIVED](currState, songs) {
    currState.songs = songs;
  },

  [types.ACTIVITY_CHANGED](currState, songs) {
    currState.songs = songs;
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
