import { STATUS } from './constants';

/**
 * @class ReqBase
 * @classdesc Req Base class
 */
class ReqBase {
  /**
   * @private
   * @description Build a success response
   * @param {module:Common/Utils/api/request~jsend} response jsend object type
   */
  static success(response) {
    return response
      .json()
      .then(data => ({ status: STATUS.SUCCESS, data }))
      .catch(err => ({ status: STATUS.ERROR, message: err.message }));
  }

  /**
   * @private
   * @description Build a error response
   * @param {module:Common/Utils/api/request~jsend} response jsend object type
   */
  static error(response) {
    return response
      .json()
      .then(data => ({ status: STATUS.ERROR, message: data.statusText }))
      .catch(err => ({ status: STATUS.ERROR, message: err.message }));
  }

  /**
   * @private
   * @description Build a fail response
   * @param {module:Common/Utils/api/request~jsend} response jsend object type
   */
  static fail(response) {
    return response
      .json()
      .then(data => {
        return { status: STATUS.FAIL, data };
      })
      .catch(err => ({ status: STATUS.ERROR, message: err.message }));
  }
}

export default ReqBase;
