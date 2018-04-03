/**
 * @module Common/Utils/sevices
 */

import * as paths from './paths';

function createPostJsonBody(params) {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  };
}

function handleServiceResponse(response) {
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }
  return {
    error: {
      text: response.statusText,
      code: response.status
    }
  };
}

/**
 * @function doLogin
 * @description Login user
 * @param {String} user
 * @param {String} password
 * @return {Object} Service response
 * @example
 * const response = await doLogin(username, password);
 */
export function doLogin(user, password) {
  return fetch(
    paths.login,
    createPostJsonBody({
      user,
      password,
      access_token: process.env.VUE_APP_MASTER_TOKEN
    })
  ).then(handleServiceResponse);
}

/**
 * @function signUp
 * @description Create a new user
 * @param {String} user
 * @param {String} email
 * @param {String} password
 * @return {Object} Service response
 * @example
 * const response = await signUp(username, email, password);
 */
export function signUp(user, email, password) {
  return fetch(
    paths.signup,
    createPostJsonBody({
      user,
      email,
      password,
      access_token: process.env.VUE_APP_MASTER_TOKEN
    })
  ).then(handleServiceResponse);
}

export function getToogles() {
  return fetch(paths.toggles).then(handleServiceResponse);
}
