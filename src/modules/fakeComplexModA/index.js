import fakeSubModA from './modules/fakeSubModA/logic/store';
import fakeSubModB from './modules/fakeSubModB/logic/store';

export default {
  namespaced: true,
  modules: {
    fakeSubModA,
    fakeSubModB
  }
};
