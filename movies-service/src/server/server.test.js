const test = require('tape')
const server = require('./server')

function apiMock (app, repo) {
  console.log('do nothing')
}

function runTests () {
  // tests here
}

module.exports = {
  runTests
}

test('Server Start', (t) => {
  server.start(apiMock, null, (err, srv) => {
    t.assert(!err && srv, 'Server started')
    t.end()
  })
})

test('Server Stop', (t) => {
  t.assert(server.stop(), 'Server stopped')
  t.end()
})
