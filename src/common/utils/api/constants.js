/**
 * @module Common/Utils/api/constants
 */

export const HEADERS = {
  JSON_TYPE: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'X-Access-Token': process.env.VUE_APP_MASTER_TOKEN
  }
};

export const METHODS = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

export const STATUS = {
  SUCCESS: 'success',
  FAIL: 'FAIL',
  ERROR: 'ERROR'
};

export const CODES = {
  POST: {
    SUCCESS: 200,
    CREATED: 201,
    ERROR: 500,
    NO_AUTH: 401,
    RESOURCE_EXIST: 409,
    NO_ALLOWED: 405
  },
  PUT: {
    ERROR: 500,
    SUCCESS: 200,
    NO_CONTENT: 204,
    NOT_FOUND: 404,
    NO_AUTH: 401,
    NO_ALLOWED: 405
  },
  GET: {
    SUCCESS: 200,
    ERROR: 500,
    NO_AUTH: 401,
    NOT_FOUND: 404
  }
};
