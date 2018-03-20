import * as services from '../../../common/utils/services';
import * as types from './types';

const state = {
  user: {},
  isAuth: false,
  error: {},
  mode: 'signin'
};

const actions = {
  doLogin({ commit }, { username, password }) {
    return new Promise(async resolve => {
      const response = await services.doLogin(username, password);
      if (response.error) {
        commit(types.LOGIN_ERROR, { error: response.error });
      } else {
        commit(types.LOGIN_SUCCESS, { user: response });
        resolve({ name: 'home' });
      }
    });
  },
  registrer({ commit }, { username, email, password }) {
    return new Promise(async resolve => {
      const response = await services.signUp(username, email, password);
      if (response.error) {
        commit(types.LOGIN_ERROR, { error: response.error });
      } else {
        commit(types.LOGIN_SUCCESS, { user: response });
        resolve({ name: 'home' });
      }
    });
  },
  toogleToSignUp({ commit }) {
    commit(types.TOOGLE_LOGIN_MODE);
  },
  logOut({ commit }) {
    return new Promise(resolve => {
      commit(types.LOGOUT);
      resolve({ name: 'login' });
    });
  }
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
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
