const {
  getVideogames,
  postVideogames,
  putVideogames,
  deleteVideogames
} = require('../controllers/videogames')

const videogamesRoutes = require('express').Router()

videogamesRoutes.get('/', getVideogames),
  videogamesRoutes.post('/', postVideogames),
  videogamesRoutes.put('/:id', putVideogames)
videogamesRoutes.delete('/:id', deleteVideogames)

module.exports = videogamesRoutes
