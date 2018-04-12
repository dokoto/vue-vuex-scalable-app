import ajax from './modules/ajax/logic/store';
import local from './modules/local/logic/store';

export default {
  namespaced: true,
  modules: {
    ajax,
    local
  }
};
