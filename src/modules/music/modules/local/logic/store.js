import { accendingSort, descendingSort } from '@/common/utils/functionalCb';
import { getTracks, modifyTrack } from '@/common/utils/api';
import * as types from './types';

const state = {
  songs: [],
  filterSongs: [],
  pages: {
    index: 1,
    total: 0
  },
  filters: {
    query: '',
    limit: 10
  }
};

const getters = {
  songsByPage: currState => {
    if (currState.filters.query) {
      return currState.filterSongs;
    }
    return currState.songs.slice(
      ((currState.pages.index - 1) * currState.filters.limit),
      ((currState.pages.index - 1) * currState.filters.limit) +
        currState.filters.limit
    );
  }
};

const actions = {
  async getTracks({ commit }) {
    const response = await getTracks();
    commit(types.SONGS_RECEIVED, response.data);
    commit(types.REFRESH_PAGES, {
      index: 1,
      total: response.data.length
    });
  },

  async doSort({ commit }, { id, order }) {
    commit(types.SORTED_SONGS_RECEIVED, { id, order });
    commit(types.REFRESH_PAGES, {
      index: 1
    });
  },

  async doFilter({ commit }, query) {
    const filterSongs = query
      ? state.songs.filter(item => item.Name && item.Name.includes(query))
      : [];
    commit(types.FILTERED_SONGS_RECEIVED, { query, filterSongs });
    commit(types.REFRESH_PAGES, {
      index: 1,
      total: filterSongs.length ? filterSongs.length : state.songs.length
    });
  },

  async switchPage({ commit }, id) {
    let index = state.pages.index;
    if (id === 'prev' && state.pages.index >= 2) {
      index = state.pages.index - 1;
    } else if (id === 'next' && state.pages.index < state.pages.total) {
      index = state.pages.index + 1;
    }
    if (index !== state.pages.index) {
      commit(types.REFRESH_PAGES, {
        index
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
  [types.SORTED_SONGS_RECEIVED](currState, { order, id }) {
    if (currState.filterSongs.length) {
      currState.filterSongs = currState.filterSongs.sort(
        order === 'asc' ? accendingSort(id) : descendingSort(id)
      );
    } else {
      currState.songs = currState.songs.sort(
        order === 'asc' ? accendingSort(id) : descendingSort(id)
      );
    }
  },

  [types.FILTERED_SONGS_RECEIVED](currState, { query, filterSongs }) {
    currState.filters.query = query;
    currState.filterSongs = filterSongs;
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
    currState.songs = songs.sort(accendingSort('Name'));
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
  state,
  getters
};
