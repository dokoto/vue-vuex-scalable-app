import { getTracks, modifyTrack } from '@/common/utils/api';
import * as types from './types';

const state = {
  songs: [],
  pages: {
    index: 0,
    total: 0
  },
  filters: {
    _limit: 10,
    _page: 1
  }
};

const actions = {
  async getTracks({ commit }) {
    const response = await getTracks(state.filters);
    commit(types.SONGS_RECEIVED, response.data);
    commit(types.REFRESH_PAGES, {
      index: 1,
      total: response.headers['x-total-count']
    });
  },

  async doSort({ commit }, { id, order }) {
    const filters = Object.assign({}, state.filters, {
      _sort: id,
      _order: order,
      _page: 1
    });
    const response = await getTracks(filters);
    commit(types.SORTED_SONGS_RECEIVED, response.data);
    commit(types.REFRESH_PAGES, {
      index: 0,
      total: response.headers['x-total-count']
    });
    commit(types.CHANGE_FILTERS, filters);
  },

  async doFilter({ commit }, query) {
    const filters = Object.assign({}, state.filters, {
      Name_like: query,
      _page: 1
    });
    const response = await getTracks(filters);
    commit(types.FILTERED_SONGS_RECEIVED, response.data);
    commit(types.REFRESH_PAGES, {
      index: 1,
      total: response.headers['x-total-count']
    });
    commit(types.CHANGE_FILTERS, filters);
  },

  async switchPage({ commit }, id) {
    let index = state.pages.index;
    if (id === 'prev' && state.pages.index >= 2) {
      index = state.pages.index - 1;
    } else if (id === 'next' && state.pages.index < state.pages.total) {
      index = state.pages.index + 1;
    }
    if (index !== state.pages.index) {
      const filters = Object.assign({}, state.filters, { _page: index });
      const response = await getTracks(filters);
      commit(types.SWITCHED_PAGE, response.data);
      commit(types.REFRESH_PAGES, {
        index,
        total: response.headers['x-total-count']
      });
    }
  },

  async doChange({ commit }, field) {
    const track = state.songs.find(item => item.Id === field.id);
    await modifyTrack(field.id, { ...track, [field.key]: field.value });
    commit(types.SONG_CHANGED, field);
  }
};

const mutations = {
  [types.SORTED_SONGS_RECEIVED](currState, songs) {
    currState.songs = songs;
  },

  [types.FILTERED_SONGS_RECEIVED](currState, songs) {
    currState.songs = songs;
  },

  [types.SWITCHED_PAGE](currState, songs) {
    currState.songs = songs;
  },

  [types.SONG_CHANGED](currState, song) {
    currState.songs = currState.songs.map(item => {
      if (item.Id === song.id) {
        return { ...item, [song.key]: song.value };
      }
      return item;
    });
  },

  [types.SONGS_RECEIVED](currState, songs) {
    currState.songs = songs;
  },

  [types.CHANGE_FILTERS](currState, filters) {
    currState.filters = Object.assign(currState.filters, filters);
  },

  [types.REFRESH_PAGES](currState, { index, total }) {
    currState.pages.index = Number(index);
    currState.pages.total = total
      ? Math.floor(Number(total) / 10)
      : currState.pages.total;
  }
};

export default {
  namespaced: true,
  actions,
  mutations,
  state
};
