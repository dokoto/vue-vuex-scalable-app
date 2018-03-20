import { mount, createLocalVue } from 'vue-test-utils';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import * as languaje from '@/common/utils/languaje';
import Login from '@/modules/auth/components/Login';

const localVue = createLocalVue();
localVue.use(VueI18n);
const i18n = new VueI18n(languaje);

localVue.use(Vuex);

describe('Auth/Login Actions', () => {
  const state = {};
  let auth;
  let store;

  beforeEach(() => {
    auth = {
      namespaced: true,
      state: {
        user: {},
        isAuth: false,
        error: {},
        mode: 'signin'
      },
      actions: {
        doLogin: jest.fn(),
        registrer: jest.fn()
      }
    };

    store = new Vuex.Store({
      state,
      modules: {
        auth
      }
    });
  });

  it('DoLogin should be called when submit in "signin" mode', () => {
    debugger;
    const wrapper = mount(Login, { store, localVue, i18n });
    wrapper.find('#loginForm').trigger('submit');
    expect(auth.actions.doLogin).toHaveBeenCalled();
  });

  it('registrer should be called when submit in "signup" mode', () => {
    debugger;
    const wrapper = mount(Login, {
      propsData: { mode: 'signup' },
      store,
      localVue,
      i18n
    });
    const loginForm = wrapper.find('#loginForm');
    loginForm.trigger('submit');
    expect(auth.actions.registrer).toHaveBeenCalled();
  });
});
