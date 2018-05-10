const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
var server = null

// Este start é um modelo bacana para deixar o projeto menos acoplado
function start (api, repository, callback) {
  const app = express()
  app.use(morgan('dev'))
  app.use(helmet())
  app.use((err, req, res, next) => {
    callback(new Error('Something went wrong!, err:' + err), null)
    res.status(500).send('Something went wrong!')
  })

  api(app, repository)
  server = app.listen(parseInt(process.env.PORT), () => callback(null, server))
}

function stop () {
  if (server) server.close()
  return true
}

module.exports = {
  start,
  stop
}
