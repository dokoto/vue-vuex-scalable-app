/**
 * @module Common/Utils/api/sevices
 */

import * as paths from './paths';
// import * as request from './request';
import { Post, Get } from './req';

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
    user,
    password
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
    user,
    email,
    password
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
  return Get.fetch(paths.toggles);
}
