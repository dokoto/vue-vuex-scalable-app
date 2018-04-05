/**
 * @module Common/Utils/Objects
 */

/**
 * @public
 * @function getDeep
 * @description Utitlity to safe object access
 * @param {Object} obj Data structure where extract he value
 * @param {String} path Dot separate path 'attr1.attr2.attr3'
 * @param {*} [fallBack] Default value to return if path not found
 * @return {*} Value of path or fallBack if path not found or undefined
 * if no path found and no fallback
 *
 * @example
 * // Return 3
 * getDeep({uno: 1, dos: { tres: 3 }, cuatro: 4}, 'dos.tres', 'NOT_FOUND')
 */
export default function getDeep(obj, path, fallBack) {
  if (!path) {
    return fallBack;
  }
  const pathArray = path.split('.');
  if (!Array.isArray(pathArray)) {
    return fallBack;
  }
  return pathArray.reduce((curr, next) => {
    if (curr && typeof curr === 'object' && next in curr) {
      return curr[next];
    }
    return fallBack;
  }, obj);
}
