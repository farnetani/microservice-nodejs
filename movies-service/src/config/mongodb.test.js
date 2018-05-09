const test = require('tape')
const mongodb = require('./mongodb')

function runTests () {
  test('MongoDB Connection', (t) => {
    mongodb.connect((err, conn) => {
      t.assert(conn, 'Connection established')
      t.end() // Para finalizar, senão o teste não finaliza
    })
  })

  test('MongoDB Disconnection', (t) => {
    t.assert(mongodb.disconnect(), 'Disconnected')
    t.end() // Para finalizar, senão o teste não finaliza
  })
}

module.exports = {
  runTests
}
