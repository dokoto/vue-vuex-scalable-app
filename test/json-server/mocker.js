const jsonServer = require('json-server')
const login = require('./login')
const env = require('../../config/dev.env')

let server = jsonServer.create()
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// ALWAY AFTER
// Add custom routes before JSON Server router
server = login(env.VUE_APP_MASTER_TOKEN.replace(/"/g, ''), server)

server.listen(3000, () => {
  console.log('Mock JSON Server is running on http://localhost:3000')
})
