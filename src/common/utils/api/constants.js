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

/**
 * @constant
 * @description Allowed HTTP methods
 * @property {String} POST A POST request is used to send data to the server,
 * for example, customer information, file upload, etc. using HTML forms.
 * @property {String} PUT Replaces all current representations of the target
 * resource with the uploaded content.
 * @property {String} GET The GET method is used to retrieve information
 * from the given server using a given URI. Requests using GET should only
 * retrieve data and should have no other effect on the data.
 * @property {String} DELETE Removes all current representations of the target resource given by a URI.
 */
export const METHODS = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

/**
 * @constant
 * @description Resolved request status
 * @property {String} SUCCESS Request was successful, when you GET, DELETE, or PUT ok
 * @property {String} FAIL Request failed, when (404) PUT o DELETE with a wrong id.
 * When (401) request with a wrong token. Or when (400) POST without a required field
 * @property {String} ERROR When backend has a truly bad error or when something occurs
 * on fetch client code
 */
export const STATUS = {
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
  ERROR: 'ERROR'
};

/**
 * @constant
 * @description HTTP Status codes supported
 * @property {Object} POST Supported HTTP POST Codes
 * @property {String} POST.ERROR Internal Server Error. The request was not completed.
 * The server met an unexpected condition.
 * @property {String} POST.NO_AUTH Unauthorized. The requested page needs a username and
 * a password or access token.
 * @property {String} POST.BAD_REQUEST Bad Request. The server did not understand the request
 * because needs mandatory fields
 * @property {String} POST.CREATED Created. The request is complete, and a new resource is created.
 * @property {String} POST.RESOURCE_EXIST Conflict. The request could not be completed because
 * of a conflict. Commonly the resource id already exist.
 * @property {Object} PUT Supported HTTP PUT Codes
 * @property {String} PUT.ERROR Internal Server Error. The request was not completed.
 * The server met an unexpected condition.
 * @property {String} PUT.NO_AUTH Unauthorized. The requested page needs a username and
 * a password or access token.
 * @property {String} PUT.BAD_REQUEST Bad Request. The server did not understand the request
 * because needs mandatory fields
 */
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
  DELETE: {
    SUCCESS: 200,
    ERROR: 500,
    NO_AUTH: 401,
    NOT_FOUND: 404
  },
  GET: {
    SUCCESS: 200,
    ERROR: 500,
    NO_AUTH: 401,
    NOT_FOUND: 404
  }
};
