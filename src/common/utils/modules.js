import getDeep from './objects';
import store from '../../modules/app/logic/store';
import DisabledModule from '../components/DisabledModule';

export default function toggle(toogleName, next) {
  return () => {
    const toggleValue = getDeep(store, `state.app.toggles.${toogleName}`, true);
    return toggleValue
      ? next()
      : Promise.resolve(DisabledModule);
  };
}
