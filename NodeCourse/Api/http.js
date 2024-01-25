const http = require('node:http')
const desiredPort = process.env.PORT ?? 1234
const fs = require('node:fs')
const processRequest = (req, res) => {
  if (req.url === '/') {
    res.statuCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>Bienvenido a la pagina de inicio</h1>')
  } else if (req.url === '/contacto') {
    res.statuCode = 200
    res.end('<h1>Contacto</h1>')
  } else if (req.url === '/imagen-super-bonita') {
    fs.readFile('./LaCosaBackground.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1> Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else {
    res.statuCode = 400
    res.end('<h1>Error 404</h1>')
  }
}
const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listerning on port ${desiredPort}`)
})
