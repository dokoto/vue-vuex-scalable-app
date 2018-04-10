const state = {
  fakeB: {}
};

const path = {
  DOSOMETHING: 'DO-SOMEHTING'
};

const actions = {
  doSomething({ commit }) {
    commit(path.DOSOMETHING);
  }
};

const mutations = {
  [path.DOSOMETHING](currState) {
    currState.fakeB.message = 'hola fake B';
  }
};

export default {
  namespaced: true,
  actions,
  mutations,
  state
};
