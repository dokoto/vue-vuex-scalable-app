import musicAjax from './modules/musicAjax/logic/store';
import fakeSubModB from './modules/fakeSubModB/logic/store';

export default {
  namespaced: true,
  modules: {
    musicAjax,
    fakeSubModB
  }
};
