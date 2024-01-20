const Console = require('../models/Console')

const postConsole = async (req, res, next) => {
  try {
    const newConsole = new Console(req.body)
    const consoleSaved = await newConsole.save()
    return res.status(201).json(consoleSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const getConsole = async (req, res, next) => {
  try {
    const consoles = await Console.find().populate('videogames')
    return res.status(200).json(consoles)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const putConsole = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldConsole = await Console.findById(id)
    const newConsole = new Console(req.body)
    newConsole._id = id
    newConsole.juegos = [...oldConsole.videogames, ...req.body.videogames]
    const consoleUpdated = await Console.findByIdAndUpdate(id, newConsole, {
      new: true
    })
    return res.status(200).json(consoleUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const deleteConsole = async (req, res, next) => {
  try {
    const { id } = req.params
    const consoleDeleted = await Console.findByIdAndDelete(id)
    return res.status(200).json(consoleDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

module.exports = { getConsole, postConsole, putConsole, deleteConsole }
