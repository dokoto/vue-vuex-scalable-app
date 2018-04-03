/**
 * @module Common/Utils/paths
 */

/**
 * @name Login
 * @description Endpoint to login a existign user
 * @route {POST} /login
 * @bodyparam {String} username
 * @bodyparam {String} password
 */
export const login = `${process.env.VUE_APP_API_HOST}/login`;

/**
 * @name SignUp
 * @description Endpoint to create a new user
 * @route {POST} /login/signup
 * @bodyparam {String} username
 * @bodyparam {String} email
 * @bodyparam {String} password
 */
export const signup = `${process.env.VUE_APP_API_HOST}/login/signup`;

/**
 * @name Toggles
 * @description Endpoint to get all toggles
 * @route {GET} /toggles
 */
export const toggles = `${process.env.VUE_APP_API_HOST}/toggles`;
