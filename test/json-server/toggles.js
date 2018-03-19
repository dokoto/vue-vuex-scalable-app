
const toggles = {
  home: true,
  HeavyMod: false,
};

function checkToken(masterToken, body) {
  if (masterToken !== body.access_token) {
    res.status(401);
  }
}

module.exports = function addRoutes(masterToken, server) {
  server.get('/toggles', (req, res) => {
    res.status(200).jsonp(toggles);
  });

  return server;
};
