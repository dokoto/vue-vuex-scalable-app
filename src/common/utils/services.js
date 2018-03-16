import * as paths from './paths';

function createPostJsonBody(params) {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  };
}

function handleServiceResponse(response) {
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }
  return {
    error: {
      text: response.statusText,
      code: response.status,
    },
  };
}

export function doLogin(user, password) {
  return fetch(paths.login, createPostJsonBody({
    user,
    password,
    access_token: process.env.VUE_APP_MASTER_TOKEN,
  })).then(handleServiceResponse);
}

export function signUp(user, email, password) {
  return fetch(paths.signup, createPostJsonBody({
    user,
    email,
    password,
    access_token: process.env.VUE_APP_MASTER_TOKEN,
  })).then(handleServiceResponse);
}
