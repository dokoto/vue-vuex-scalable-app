import * as env from '../../../../config/test.env';

const users = {
  manuel: {
    access_token: env.VUE_APP_MASTER_TOKEN.replace(/"/g, ''),
    user: 'manuel',
    email: 'manuel@gg.com',
    password: '123'
  }
};

const Unauthorized = {
  error: {
    text: 'Unauthorized',
    code: 401
  }
};

export function doLogin(username, password) {
  return new Promise(resolve => {
    process.nextTick(
      () =>
        (users[username] && users[username].password === password
          ? resolve(users[username])
          : resolve(Unauthorized))
    );
  });
}

export function signUp(username, email, password) {
  return new Promise(resolve => {
    process.nextTick(
      () =>
        (users[username] && users[username].password === password
          ? resolve(users[username])
          : resolve(Unauthorized))
    );
  });
}
