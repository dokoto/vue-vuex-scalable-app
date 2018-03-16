import * as paths from './paths';

export function doLogin(user, password) {
  return fetch(paths.login, {
    method: 'POST',
    body: JSON.stringify({
      user,
      password,
      access_token: process.env.MASTER_TOKEN,
    }),
  }).then(response => response.json());
}

export function signUp(user, password) {
  return fetch(paths.login, {
    method: 'POST',
    body: JSON.stringify({
      user,
      password,
      access_token: process.env.MASTER_TOKEN,
    }),
  }).then(response => response.json());
}
