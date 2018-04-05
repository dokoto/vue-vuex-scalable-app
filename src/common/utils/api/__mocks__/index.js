import { STATUS } from '../constants';

const users = {
  manuel: {
    status: STATUS.SUCCESS,
    data: {
      user: 'manuel',
      email: 'manuel@gg.com',
      password: '123'
    }
  }
};

const Unauthorized = {
  status: STATUS.FAIL,
  data: {
    message: 'Unauthorized'
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
