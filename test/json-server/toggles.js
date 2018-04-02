const toggles = {
  home: true,
  HeavyMod: false
};

module.exports = function addRoutes(masterToken, server) {
  server.get('/toggles', (req, res) => {
    res.status(200).jsonp(toggles);
  });

  return server;
};
