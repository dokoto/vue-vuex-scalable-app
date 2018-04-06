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
    ERROR: 500,
    NO_AUTH: 401,
    BAD_REQUEST: 400,
    CREATED: 201,
    RESOURCE_EXIST: 409
  },
  PUT: {
    SUCCESS: 200,
    ERROR: 500,
    NO_AUTH: 401,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    NO_CONTENT: 204
  },
  GET: {
    SUCCESS: 200,
    ERROR: 500,
    NO_AUTH: 401,
    NOT_FOUND: 404
  }
};
