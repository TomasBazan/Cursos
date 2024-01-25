const express = require('express')
const ditto = require('./pokemon/ditto.json')
const app = express()
app.disable('x-powered-by')

  const PORT = process.env.PORT ?? 1234
// the next is to tell the middleware to continue with the normal flow of express
// Todo la funcion siguiente viene en la siguiente funcion
app.use(express.static('public'))
app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  // middleware para manejar las request que son POST y content-type application/json
  let body = ''
  req.on('data', chunk => {
    body += chunk.toString()
  })
  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    req.body = data// mutamos la request y mandamos la info a req.body
    next()
  })
})
app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  res.json(req.body)
})
// Esto va al final pq se ejecuta en orden
// Sintacticamente esto es un middleware pero no semanticamente
app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
