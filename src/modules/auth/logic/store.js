/**
 * @module Auth/Auth/Store
 */
import * as services from '../../../common/utils/api';
import { STATUS } from '../../../common/utils/api/constants';
import * as constants from '../../../common/constants';
import * as types from './types';

const state = {
  user: constants.EMPTY_OBJECT,
  isAuth: false,
  error: constants.EMPTY_STRING,
  mode: 'signin'
};

const actions = {
  /**
   * @public
   * @function doLogin
   * @description Check user and password exists
   * @param {Object} commit default action param (bind param)
   * @param {String} username
   * @param {String} password
   * @example
   * // dispatch LOGIN_SUCCESS mutation and enroute to home
   *  .dispatch('auth/doLogin', { username: 'user', password: 'pass' });
   */
  doLogin({ commit }, { username, password }) {
    return new Promise(async (resolve, reject) => {
      const response = await services.doLogin(username, password);
      if (response.status === STATUS.SUCCESS) {
        commit(types.LOGIN_SUCCESS, { user: response.data });
        resolve({ name: 'home' });
      } else if (response.status === STATUS.ERROR) {
        commit(types.LOGIN_ERROR, { error: response.message });
        reject({ error: response.message });
      } else {
        commit(types.LOGIN_ERROR, { error: response.data.message });
        reject({ error: response.data.message });
      }
    });
  },

  /**
   * @public
   * @function registrer
   * @description Create a new user
   * @param Object commit default action param (bind param)
   * @param {String} username
   * @param {String} email
   * @param {String} password
   * @example
   * // dispatch LOGIN_SUCCESS mutation and enroute to home
   *  .dispatch('auth/doLogin', { username: 'user', password: 'pass' });
   */
  registrer({ commit }, { username, email, password }) {
    return new Promise(async (resolve, reject) => {
      const response = await services.signUp(username, email, password);
      if (response.status === STATUS.SUCCESS) {
        commit(types.LOGIN_SUCCESS, { user: response.data });
        resolve({ name: 'home' });
      } else if (response.status === STATUS.ERROR) {
        commit(types.LOGIN_ERROR, { error: response.message });
        reject({ error: response.message });
      } else {
        commit(types.LOGIN_ERROR, { error: response.data.message });
        reject({ error: response.data.message });
      }
    });
  },

  /**
   * @public
   * @function toogleToSignUp
   * @description Switch between signIn and singUp mode
   * @param {Object} commit default action param (bind param)
   * @example
   * // dispatch TOOGLE_LOGIN_MODE
   *  .dispatch('auth/toogleToSignUp');
   */
  toogleToSignUp({ commit }) {
    commit(types.TOOGLE_LOGIN_MODE);
  },

  /**
   * @public
   * @function logOut
   * @description Finish user session
   * @param {Object} commit default action param (bind param)
   * @example
   * // dispatch LOGOUT and enroute to login view
   *  .dispatch('auth/logOut');
   */
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
    currState.error = constants.EMPTY_STRING;
  },
  [types.LOGIN_ERROR](currState, { error }) {
    currState.isAuth = false;
    currState.error = error;
  },
  [types.TOOGLE_LOGIN_MODE](currState) {
    currState.error = constants.EMPTY_STRING;
    currState.mode = currState.mode === 'signin' ? 'signup' : 'signin';
  },
  [types.LOGOUT](currState) {
    currState.isAuth = false;
    currState.user = constants.EMPTY_OBJECT;
    currState.error = constants.EMPTY_STRING;
    currState.mode = 'signin';
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
