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

function parseNewUser(env, body) {
  if (!body) {
    return {
      code: 404,
    };
  }

  if (body.access_token !== env.MASTER_TOKEN) {
    return {
      code: 401,
    };
  }

  const user = {
    user: body.user,
    password: body.password,
    access_token: randtoken.generate(16),
  };

  const exist = users.find(item => item.user === user.user);
  if (exist) {
    return {
      code: 200,
      user,
    };
  }

  users.push(user);
  console.log('Users DB', JSON.stringify(users, 4, false));
  return {
    code: 201,
    user: view(user, ['access_token', 'user']),
  };
}

function parseUser(env, body) {
  if (!body) {
    return {
      code: 404,
    };
  }

  if (body.access_token !== env.MASTER_TOKEN) {
    return {
      code: 401,
    };
  }

  const user = users.find(item => item.user === body.user);
  if (!user || user.password !== body.password) {
    console.log('User no found', body.user);
    return {
      code: 401,
    };
  }

  console.log('User found', user);
  user.access_token = randtoken.generate(16);
  return {
    code: 200,
    user: view(user, ['access_token', 'user']),
  };
}

module.exports = function addRoutes(env, server) {
  server.get('/login', (req, res) => {
    res.status(200).jsonp(req.query);
  });

  server.post('/login', (req, res) => {
    const response = parseUser(env, req.body);
    res.status(response.code).jsonp(response.user);
  });

  server.post('/login/signup', (req, res) => {
    const response = parseNewUser(env, req.body);
    res.status(response.code).jsonp(response.user);
  });

  server.put('/login', (req, res) => {
    res.status(200).jsonp(req.query);
  });

  server.delete('/login', (req, res) => {
    res.status(200).jsonp(req.query);
  });

  return server;
};
