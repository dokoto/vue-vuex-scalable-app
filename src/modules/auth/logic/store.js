import router from '../../app/router';
import * as services from '../../../common/utils/services';
import * as types from './types';


const state = {
  user: {},
  isAuth: false,
  error: {},
  mode: 'signin',
};


const getters = {};

const actions = {
  async doLogin({ commit }, { username, password }) {
    const response = await services.doLogin(username, password);
    if (response.error) {
      commit(types.LOGIN_ERROR, { error: response.error });
    } else {
      commit(types.LOGIN_SUCCESS, { user: response });
      router.push({ name: 'home' });
    }
  },
  async registrer({ commit }, { username, email, password }) {
    const response = await services.signUp(username, email, password);
    if (response.error) {
      commit(types.LOGIN_ERROR, { error: response.error });
    } else {
      commit(types.LOGIN_SUCCESS, { user: response });
      router.push({ name: 'home' });
    }
  },
  toogleToSignUp({ commit }) {
    commit(types.TOOGLE_LOGIN_MODE);
  },
  logOut({ commit }) {
    commit(types.LOGOUT);
    router.push({ name: 'login' });
  },
};

const mutations = {
  [types.LOGIN_SUCCESS](currState, { user }) {
    currState.isAuth = true;
    currState.user = user;
    currState.error = {};
  },
  [types.LOGIN_ERROR](currState, { error }) {
    currState.isAuth = false;
    currState.error = error;
  },
  [types.TOOGLE_LOGIN_MODE](currState) {
    currState.error = {};
    currState.mode = currState.mode === 'signin' ? 'signup' : 'signin';
  },
  [types.LOGOUT](currState) {
    currState.isAuth = false;
    currState.user = {};
    currState.error = {};
    currState.mode = 'signin';
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
