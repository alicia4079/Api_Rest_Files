require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const consoleRoutes = require('./src/api/routes/console.routes')
const videogamesRoutes = require('./src/api/routes/videogames.routes')
const usersRoutes = require('./src/api/routes/user.routes')

connectDB()

const PORT = 3000
const server = express()

server.use(express.json())

server.use('/api/videogames', videogamesRoutes)
server.use('/api/consoles', consoleRoutes)
server.use('/api/users', usersRoutes)

server.use('*', (req, res, next) => {
  const error = new Error('Route not found')
  error.status = 404
  res.status(404).json({ error: 'Ruta no encontrada😡' })
})

server.listen(PORT, () => {
  console.log(`Server running 😊 in http://localhost:${PORT}`)
})
