const randtoken = require('rand-token');

let users = [];

function view(obj, fields) {
  return fields.reduce((curr, prev) => {
    if (obj[prev]) {
      curr[prev] = obj[prev];
    }
    return curr;
  }, {});
}

function parseNewUser(masterToken, headers, body) {
  if (!body) {
    return {
      code: 404,
      data: { message: 'Recurso no encontrado' }
    };
  }

  if (headers['x-access-token'] !== masterToken) {
    return {
      code: 401,
      data: {
        message: `El accessToken "${
          headers['x-access-token']
        }" no es correcto or no existe`
      }
    };
  }

  const user = {
    user: body.user,
    password: body.password,
    email: body.email,
    access_token: randtoken.generate(16)
  };

  const exist = users.find(item => item.user === user.user);
  if (exist) {
    return {
      code: 200,
      data: user
    };
  }

  users.push(user);
  return {
    code: 201,
    data: view(user, ['access_token', 'user', 'email'])
  };
}

function parseUser(masterToken, headers, body) {
  if (!body) {
    return {
      code: 404,
      data: { message: 'Recurso no encontrado' }
    };
  }

  if (headers['x-access-token'] !== masterToken) {
    return {
      code: 401,
      data: {
        message: `El accessToken "${
          headers['x-access-token']
        }" no es correcto or no existe`
      }
    };
  }

  const user = users.find(item => item.user === body.user);
  if (!user || user.password !== body.password) {
    console.log('User no found', body.user);
    return {
      code: 404
    };
  }

  console.log('User found', user);
  user.access_token = randtoken.generate(16);
  return {
    code: 200,
    data: view(user, ['access_token', 'user', 'email'])
  };
}

module.exports = function addRoutes(masterToken, server) {
  server.post('/login', (req, res) => {
    const response = parseUser(masterToken, req.headers, req.body);
    res.status(response.code).jsonp(response.data);
  });

  server.post('/login/signup', (req, res) => {
    const response = parseNewUser(masterToken, req.headers, req.body);
    res.status(response.code).jsonp(response.data);
  });

  server.put('/login', (req, res) => {
    res.status(200).jsonp(req.query);
  });

  server.delete('/login', (req, res) => {
    res.status(200).jsonp(req.query);
  });

  return server;
};
