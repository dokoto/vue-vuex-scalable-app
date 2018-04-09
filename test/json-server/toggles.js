const toggles = {
  home: true,
  HeavyMod: false
};
function handleTokens(masterToken, headers) {
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

  return {
    code: 200,
    data: toggles
  };
}

module.exports = function addRoutes(masterToken, server) {
  server.get('/toggles', (req, res) => {
    debugger;
    const response = handleTokens(masterToken, req.headers);
    res.status(response.code).jsonp(response.data);
  });

  server.get('/toggles/e500', (req, res) => {
    res.status(500).jsonp(null);
  });

  return server;
};
