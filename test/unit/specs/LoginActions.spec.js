import store from '@/modules/auth/logic/store';

jest.mock('@/common/utils/api');

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
    return expect(store.actions.doLogin(context, input)).resolves.toEqual({
      name: 'home'
    });
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
    return expect(store.actions.registrer(context, input)).resolves.toEqual({
      name: 'home'
    });
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
    return expect(store.actions.doLogin(context, input)).rejects.toEqual({
      error: 'Unauthorized-dsfds'
    });
  });
});
