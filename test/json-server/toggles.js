const toggles = {
  home: true,
  HeavyMod: false
};

function handleTokens (masterToken, headers) {
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
  return {
    code: 200,
    data: toggles
  };
}

module.exports = function addRoutes(masterToken, server) {
  server.get('/toggles', (req, res) => {
    const response = handleTokens(masterToken, req.headers);
    res.status(response.code).jsonp(response.data);
  });

  return server;
};
