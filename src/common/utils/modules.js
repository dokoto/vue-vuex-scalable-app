/**
 * @module Common/Utils/modules
 */

import getDeep from './objects';
import store from '../../modules/app/logic/store';
import DisabledModule from '../components/DisabledModule';

/**
 * @function toggle
 * @description Utitlity to enrute if toggle is true
 * @param {String} toogleName
 * @param {Function} view View component to be imported
 * @return {Promise} If toogle is true Promise to view if
 * toogle is false promise to disableModule view
 *
 * @example
 * const Home = () => import('../home/view.vue');
 * toggle('home', Home)
 */

export default function toggle(toogleName, next) {
  return () => {
    const toggleValue = getDeep(store, `state.app.toggles.${toogleName}`, true);
    return toggleValue
      ? next()
      : Promise.resolve(DisabledModule);
  };
}
