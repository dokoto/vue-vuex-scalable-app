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
 * Post.fetch(paths.login, { user, password });
 */
class Post extends ReqBase {
  /**
   * @public
   * @description Fetch a post request
   * @param {String} path Endpoint url
   * @param {Object} [body = {}] Payload data
   * @returns {module:Common/Utils/Api/Req~jsend} jsend object type
   * @example
   * Post.fetch(paths.login, { user, password });
   */
  static fetch(path, body = {}) {
    return fetch(path, this.options(body))
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
   * @param {Object} [body = {}] Payload data
   * @returns {object} Options fetch object
   */
  static options(body = {}) {
    return {
      method: METHODS.POST,
      headers: HEADERS.JSON_TYPE,
      body: JSON.stringify(body)
    };
  }

  /**
   * @private
   * @description Handle post server response
   * @param {object} response Request object
   */
  static response(response) {
    const { CREATED, ERROR, NO_AUTH, BAD_REQUEST, RESOURCE_EXIST } = CODES.POST;

    if ([CREATED].includes(response.status)) {
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
 * Put.fetch(paths.login, { user, email });
 */
class Put extends ReqBase {
  /**
   * @public
   * @description Fetch a put request
   * @param {String} path Endpoint url
   * @param {Object} [body = {}] Payload data
   * @returns {module:Common/Utils/Api/Req~jsend} jsend object type
   * @example
   * Put.fetch(paths.login, data);
   */
  static fetch(path, body = {}) {
    return fetch(path, this.options(body))
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
   * @param {Object} [body = {}] Payload data
   * @returns {object} Options fetch object
   */
  static options(body = {}) {
    return {
      method: METHODS.PUT,
      headers: HEADERS.JSON_TYPE,
      body: JSON.stringify(body)
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
 * Delete.fetch(paths.login, id);
 */
class Delete extends ReqBase {
  /**
   * @public
   * @description Fetch a delete request
   * @param {String} path Endpoint url
   * @returns {module:Common/Utils/Api/Req~jsend} jsend object type
   * @example
   * Delete.fetch(`${paths.login}/${id}`);
   */
  static fetch(path) {
    return fetch(path, this.options())
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
   * @returns {object} Options fetch object
   */
  static options() {
    return {
      method: METHODS.DELETE,
      headers: HEADERS.JSON_TYPE
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
 * Get.fetch(paths.toggles);
 */
class Get extends ReqBase {
  /**
   * @public
   * @description Fetch a get request
   * @param {String} path Endpoint url
   * @returns {module:Common/Utils/Api/Req~jsend} jsend object type
   * @example
   * Get.fetch(paths.toggles);
   */
  static fetch(path) {
    return fetch(path, this.options())
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
   * @returns {object} Options fetch object
   */
  static options() {
    return {
      method: METHODS.GET,
      headers: HEADERS.JSON_TYPE
    };
  }

  /**
   * @private
   * @description Handle get server response
   * @param {object} response Request object
   */
  static response(response) {
    debugger;
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
