const express = require('express')

const MovieCtrl = require('../controllers/movie-ctrl')

const movieRouter = express.Router()

movieRouter.post('/movie', MovieCtrl.createMovie)
movieRouter.put('/movie/:id', MovieCtrl.updateMovie)
movieRouter.delete('/movie/:id', MovieCtrl.deleteMovie)
movieRouter.get('/movie/:id', MovieCtrl.getMovieById)
movieRouter.get('/movies', MovieCtrl.getMovies)

module.exports = movieRouter
