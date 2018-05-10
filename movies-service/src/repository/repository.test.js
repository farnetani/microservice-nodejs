const test = require('tape')
const repository = require('./repository')

function runTests () {
  var id = null
  // tests here
}

module.exports = {
  runTests
}

var id = null

test('Repository GetAllMovies', (t) => {
  repository.getAllMovies((err, movies) => {
    if (movies && movies.length > 0) id = movies[0]._id

    t.assert(!err && movies && movies.length > 0, 'All Movies Returned')
    t.end()
  })
})

test('Repository GetMovieById', (t) => {
  if (!id) {
    t.assert(false, 'Movie by Id Returned')
    t.end()
    return
  }

  repository.getMovieById(id, (err, movie) => {
    t.assert(!err && movie, 'Movie by Id Returned')
    t.end()
  })
})

test('Repository GetMoviePremiers', (t) => {
  repository.getMoviePremiers((err, movies) => {
    t.assert(!err && movies && movies.length > 0, 'Movie Premiers Returned')
    t.end()
  })
})

test('Repository Disconnect', (t) => {
  t.assert(repository.disconnect(), 'Disconnect Ok')
  t.end()
})
