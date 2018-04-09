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

function wrongToken(masterToken, headers) {
  if (
    !headers.authorization &&
    headers.authorization.split[0].toLocaleLowerCase() === 'bearer' &&
    headers.authorization.split[1] !== masterToken
  ) {
    return {
      code: 401,
      data: {
        message: `El accessToken "${
          headers.authorization
        }" no es correcto or no existe`
      }
    };
  }

  return null;
}

function parseNewUser(masterToken, headers, body) {
  const response = wrongToken(masterToken, headers);
  if (response) return response;

  if (!body) {
    return {
      code: 400,
      data: { message: 'Se esperaban un payload...' }
    };
  }

  if (!body.user || !body.password || !body.email) {
    return {
      code: 400,
      data: { message: 'Faltan datos obligatorios' }
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
      code: 409,
      data: {
        message: 'Ya existe un usuario con ese nick'
      }
    };
  }

  users.push(user);
  return {
    code: 201,
    data: view(user, ['access_token', 'user', 'email'])
  };
}

function parseUser(masterToken, headers, body) {
  const response = wrongToken(masterToken, headers);
  if (response) return response;

  if (!body) {
    return {
      code: 400,
      data: { message: 'Se esperaban un payload...' }
    };
  }

  const user = users.find(item => item.user === body.user);
  if (!user || user.password !== body.password) {
    console.log('User no found', body.user);
    return {
      code: 401,
      data: { message: 'Usuario no autorizado' }
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
