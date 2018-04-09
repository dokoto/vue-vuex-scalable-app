import ReqBase from './reqBase';
import { HEADERS, METHODS, STATUS, CODES } from './constants';

/**
 * @typedef {object} jsend
 * @property {('success' | 'error' | 'fail')} status Response state
 * @property {object} [data] If status is 'success' or 'fail'
 * @property {String} [message] If status is 'error'
 */

/**
 * @class Post
 * @extends ReqBase
 * @classdesc Static Request Post Method
 * @example
 * // Not use new()
 * Post.fetch(paths.login, { body: { user, password },
 * header: { Authorization: `Bearer ${token}`}});
 */
class Post extends ReqBase {
  /**
   * @public
   * @description Fetch a post request
   * @param {String} path Endpoint url
   * @param {Object} [options = {}] Fetch options (body, headers)
   * @param {String} [options.headers = {}] Http fetch headers
   * @param {String} [options.body = {}] Http payload
   * @returns {module:Common/Utils/Api/Req~jsend} jsend object type
   * @example
   * Post.fetch(paths.login, { body: { user, password },
   * header: { Authorization: `Bearer ${token}`}});
   */
  static fetch(path, options = {}) {
    return fetch(path, this.options(options))
      .then(this.response)
      .catch(err =>
        Promise.reject({
          status: STATUS.ERROR,
          message: err.message
        })
      );
  }

  /**
   * @private
   * @description Build fetch options for post method
   * @param {Object} [options = {}] Fetch options (body, headers)
   * @param {String} [options.headers = {}] Http fetch headers
   * @param {String} [options.body = {}] Http payload
   * @returns {Object} Options fetch object
   */
  static options(options = {}) {
    const headers = options.headers
      ? { ...HEADERS.JSON_TYPE, ...options.headers }
      : HEADERS.JSON_TYPE;
    return {
      method: METHODS.POST,
      headers,
      body: JSON.stringify(options.body)
    };
  }

  /**
   * @private
   * @description Handle post server response
   * @param {object} response Request object
   */
  static response(response) {
    const { CREATED, SUCCESS, ERROR, NO_AUTH, BAD_REQUEST, RESOURCE_EXIST } = CODES.POST;

    if ([CREATED, SUCCESS].includes(response.status)) {
      return super.success(response);
    } else if (response.status === ERROR) {
      return super.error(response);
    } else if (
      [NO_AUTH, RESOURCE_EXIST, BAD_REQUEST].includes(response.status)
    ) {
      return super.fail(response);
    }
    return super.error(response);
  }
}

/**
 * @class Put
 * @extends ReqBase
 * @classdesc Request Put Method
 * @example
 * // Not use new()
 * Put.fetch(paths.users, { body: { user, email },
 * header: { Authorization: `Bearer ${token}`}});
 */
class Put extends ReqBase {
  /**
   * @public
   * @description Fetch a put request
   * @param {String} path Endpoint url
   * @param {Object} [options = {}] Fetch options (body, headers)
   * @param {String} [options.headers = {}] Http fetch headers
   * @param {String} [options.body = {}] Http payload
   * @returns {module:Common/Utils/Api/Req~jsend} jsend object type
   * @example
   * Put.fetch(paths.users, { body: { user, email },
   * header: { Authorization: `Bearer ${token}`}});
   */
  static fetch(path, options = {}) {
    return fetch(path, this.options(options))
      .then(this.response)
      .catch(err =>
        Promise.reject({
          status: STATUS.ERROR,
          message: err.message
        })
      );
  }

  /**
   * @private
   * @description Build fetch options for put method
   * @param {Object} [options = {}] Fetch options (body, headers)
   * @param {String} [options.headers = {}] Http fetch headers
   * @param {String} [options.body = {}] Http payload
   * @returns {object} Options fetch object
   */
  static options(options = {}) {
    const headers = options.headers
      ? { ...HEADERS.JSON_TYPE, ...options.headers }
      : HEADERS.JSON_TYPE;
    return {
      method: METHODS.PUT,
      headers,
      body: JSON.stringify(options.body)
    };
  }

  /**
   * @private
   * @description Handle put server response
   * @param {object} response Request object
   */
  static response(response) {
    const {
      SUCCESS,
      NO_CONTENT,
      NOT_FOUND,
      NO_AUTH,
      BAD_REQUEST,
      ERROR
    } = CODES.PUT;
    if ([SUCCESS, NO_CONTENT].includes(response.status)) {
      return super.success(response);
    } else if (response.status === ERROR) {
      return super.error(response);
    } else if ([NOT_FOUND, NO_AUTH, BAD_REQUEST].includes(response.status)) {
      return super.fail(response);
    }
    return super.error(response);
  }
}

/**
 * @class Delete
 * @extends ReqBase
 * @classdesc Request Delete Method
 * @example
 * // Not use new()
 * Delete.fetch(`${paths.users}/${id}`,
 * { header: { Authorization: `Bearer ${token}`}});
 */
class Delete extends ReqBase {
  /**
   * @public
   * @description Fetch a delete request
   * @param {String} path Endpoint url
   * @param {Object} [options = {}] Fetch options (body, headers)
   * @param {String} [options.headers = {}] Http fetch headers
   * @param {String} [options.body = {}] Http payload
   * @returns {module:Common/Utils/Api/Req~jsend} jsend object type
   * @example
   * Delete.fetch(`${paths.users}/${id}`,
   * { header: { Authorization: `Bearer ${token}`}});
   */
  static fetch(path, options = {}) {
    return fetch(path, this.options(options))
      .then(this.response)
      .catch(err =>
        Promise.reject({
          status: STATUS.ERROR,
          message: err.message
        })
      );
  }

  /**
   * @private
   * @description Build fetch options for delete method
   * @param {Object} [options = {}] Fetch options (body, headers)
   * @param {String} [options.headers = {}] Http fetch headers
   * @param {String} [options.body = {}] Http payload
   * @returns {object} Options fetch object
   */
  static options(options = {}) {
    const headers = options.headers
      ? { ...HEADERS.JSON_TYPE, ...options.headers }
      : HEADERS.JSON_TYPE;
    return {
      method: METHODS.DELETE,
      headers
    };
  }

  /**
   * @private
   * @description Handle delete server response
   * @param {object} response Request object
   */
  static response(response) {
    const { SUCCESS, NOT_FOUND, NO_AUTH, ERROR } = CODES.DELETE;
    if ([SUCCESS].includes(response.status)) {
      return super.success(response);
    } else if (response.status === ERROR) {
      return super.error(response);
    } else if ([NOT_FOUND, NO_AUTH].includes(response.status)) {
      return super.fail(response);
    }
    return super.error(response);
  }
}

/**
 * @class Get
 * @extends ReqBase
 * @classdesc Request Get Method
 * @example
 * // Not use new()
 * Get.fetch(`${paths.users}/${id}`,
 * { header: { Authorization: `Bearer ${token}`}});
 */
class Get extends ReqBase {
  /**
   * @public
   * @description Fetch a get request
   * @param {String} path Endpoint url
   * @param {Object} [options = {}] Fetch options (body, headers)
   * @param {String} [options.headers = {}] Http fetch headers
   * @param {String} [options.body = {}] Http payload
   * @returns {module:Common/Utils/Api/Req~jsend} jsend object type
   * @example
   * Get.fetch(`${paths.users}/${id}`,
   * { header: { Authorization: `Bearer ${token}`}});
   */
  static fetch(path, options = {}) {
    return fetch(path, this.options(options))
      .then(this.response)
      .catch(err =>
        Promise.reject({
          status: STATUS.ERROR,
          message: err.message
        })
      );
  }

  /**
   * @private
   * @description Build fetch options for get method
   * @param {Object} [options = {}] Fetch options (body, headers)
   * @param {String} [options.headers = {}] Http fetch headers
   * @param {String} [options.body = {}] Http payload
   * @returns {object} Options fetch object
   */
  static options(options = {}) {
    const headers = options.headers
      ? { ...HEADERS.JSON_TYPE, ...options.headers }
      : HEADERS.JSON_TYPE;
    return {
      method: METHODS.GET,
      headers
    };
  }

  /**
   * @private
   * @description Handle get server response
   * @param {object} response Request object
   */
  static response(response) {
    const { SUCCESS, ERROR, NO_AUTH, NOT_FOUND } = CODES.GET;
    if (SUCCESS === response.status) {
      return super.success(response);
    } else if (response.status === ERROR) {
      return super.error(response);
    } else if ([NOT_FOUND, NO_AUTH].includes(response.status)) {
      return super.fail(response);
    }
    return super.error(response);
  }
}

export { Post, Put, Get, Delete };
