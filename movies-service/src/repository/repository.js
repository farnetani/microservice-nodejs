const mongodb = require('../config/mongodb')

function getAllMovies (callback) {
  mongodb.connect((err, db) => {
    db.collection('movies').find().toArray(callback)
  })
}

function getMovieById (id, callback) {
  mongodb.connect((err, db) => {
    db.collection('movies').findOne({
      _id: require('mongodb').ObjectId(id)
    }, callback)
  })
}

function getMoviePremiers (callback) {
  var monthAgo = new Date()
  monthAgo.setMonth(monthAgo.getMonth() - 1)
  monthAgo.setHours(0, 0, 0)
  monthAgo.setMilliseconds(0)

  mongodb.connect((err, db) => {
    db.collection('movies').find({
      dataLancamento: {
        $gte: monthAgo
      }
    }).toArray(callback)
  })
}

function disconnect () {
  return mongodb.disconnect()
}

module.exports = {
  getAllMovies,
  getMovieById,
  getMoviePremiers,
  disconnect
}
