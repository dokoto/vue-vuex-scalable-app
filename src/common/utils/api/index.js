/**
 * @module Common/Utils/api/sevices
 */

import * as paths from './paths';
import { Post, Get } from './req';

/**
 * @public
 * @function bearerAuth
 * @description Build a toke autentication header
 * @param {String} token
 * @returns {Object} Authorization header
 * @example
 * const authAttr = bearerAuth('808ds678asoionxc8787');
 */
export function bearerAuth(token) {
  return { Authorization: `Bearer ${token}` };
}

/**
 * @public
 * @function basicAuth
 * @description Build a basic http header authorization
 * @param {String} token
 * @returns {Object} Authorization header
 * @example
 * const authAttr = basicAuth('manuel', 'complicatedPass');
 */
export function basicAuth(username, password) {
  return { Authorization: `Basic ${btoa(`${username}:${password}`)}` };
}

/**
 * @public
 * @function doLogin
 * @description Login user
 * @param {String} user
 * @param {String} password
 * @returns {module:Common/Utils/Api/Req~jsend} jsend object type
 * @example
 * const response = await doLogin(username, password);
 */
export function doLogin(user, password) {
  return Post.fetch(paths.login, {
    body: {
      user,
      password
    },
    headers: { ...bearerAuth(process.env.VUE_APP_MASTER_TOKEN) }
  });
}

/**
 * @public
 * @function signUp
 * @description Create a new user
 * @param {String} user
 * @param {String} email
 * @param {String} password
 * @returns {module:Common/Utils/Api/Req~jsend} jsend object type
 * @example
 * const response = await signUp(username, email, password);
 */
export function signUp(user, email, password) {
  return Post.fetch(paths.signup, {
    body: {
      user,
      email,
      password
    },
    headers: { ...bearerAuth(process.env.VUE_APP_MASTER_TOKEN) }
  });
}

/**
 * @public
 * @function getToogles
 * @description Get all toggles that activate or disable funcionality
 * @returns {module:Common/Utils/Api/Req~jsend} jsend object type
 * @example
 * const toogles = await getToogles();
 */
export function getToogles() {
  return Get.fetch(paths.toggles, {
    headers: { ...bearerAuth(process.env.VUE_APP_MASTER_TOKEN) }
  });
}


export function getTracks() {
  return Get.fetch(`${paths.tracks}&_sort=Name&_order=asc`);
}

export function sortMusic(fieldName, order = 'desc') {
  return Get.fetch(`${paths.tracks}&_sort=${fieldName}&_order=${order === 'desc' ? 'desc' : 'asc'}`);
}

export function filterMusic(query) {
  return Get.fetch(`${paths.tracks}${query ? `&Name_like=${query}` : ''}`);
}
