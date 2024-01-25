const http = require('node:http')
const { findAvailablePort } = require('./free-port.js')

const server = http.createServer((req, resp) => {
  console.log('request received')
  resp.end('Hola Mundo')
})

findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`server listerning on port ${port}`)
  })
})
