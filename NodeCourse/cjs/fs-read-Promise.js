const fs = require('node:fs/promises')
// const text = fs.readFileSync("./archivo.txt", "utf-8"); la forma sincrona
fs.readFile('./archivo2.txt', 'utf-8').then((text) => {
  console.log('Leyendo el primer archivo')
  console.log('El primer archivo:\n\t', text)
})
fs.readFile('./archivo.txt', 'utf8').then((text) => {
  console.log('Leyendo el segundo archivo')
  console.log('El segundo archivo tiene:\n\t', text)
})
