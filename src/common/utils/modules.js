import _ from 'lodash/object';
import store from '../../modules/app/logic/store';
import DisabledModule from '../components/DisabledModule';

export default function toggle(toogleName, next) {
  return () => {
    const toggleValue = _.get(store, `state.app.toggles.${toogleName}`, true);
    return toggleValue
      ? next()
      : Promise.resolve(DisabledModule);
  };
}
