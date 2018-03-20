import store from '@/modules/auth/logic/store';

jest.mock('@/common/utils/services');

describe('doLogin action should return "home" path name when do login o register with a real user', () => {
  it('Do login', () => {
    const context = {
      commit: jest.fn(),
      dispatch: jest.fn()
    };
    const input = {
      username: 'manuel',
      password: '123'
    };
    store.actions
      .doLogin(context, input)
      .then(resp => expect(resp).toEqual({ name: 'home' }));
  });

  it('Register', () => {
    const context = {
      commit: jest.fn(),
      dispatch: jest.fn()
    };
    const input = {
      username: 'manuel',
      password: '123',
      email: 'manuel@gg.com'
    };
    store.actions
      .registrer(context, input)
      .then(resp => expect(resp).toEqual({ name: 'home' }));
  });
});

describe('doLogin action should return erro 401 path name when do login o register with a fake user', () => {
  it('Do login with fake user', () => {
    const context = {
      commit: jest.fn(),
      dispatch: jest.fn()
    };
    const input = {
      username: 'manuel-bad',
      password: '123-bad'
    };
    store.actions.doLogin(context, input).then(resp =>
      expect(resp).toEqual({
        error: {
          text: 'Unauthorized',
          code: 401
        }
      })
    );
  });
});
