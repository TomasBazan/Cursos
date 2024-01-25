const fs = require('node:fs')
// const text = fs.readFileSync("./archivo.txt", "utf-8"); la forma sincrona
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  if (err) {
    console.error('Error al leer el archivo')
  }
  // cuando termina ejecuta el callback
  console.log('Leyendo el primer archivo')
  console.log('El primer archivo:\n\t', text)
})
fs.readFile('./archivo.txt', 'utf8', (err, text) => {
  if (err) {
    console.log('error en el segundo archivo: ', err)
  }
  console.log('Leyendo el segundo archivo')
  console.log('El segundo archivo tiene:\n\t', text)
})
