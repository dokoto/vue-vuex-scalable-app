const state = {
  fakeA: {}
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
    currState.fakeA.message = 'hola fake A';
  }
};

export default {
  namespaced: true,
  actions,
  mutations,
  state
};
