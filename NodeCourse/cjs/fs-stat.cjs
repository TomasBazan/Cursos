const fs = require('node:fs') // A partir de node 16 se recomentda poner node:

const stats = fs.statSync('./archivo.txt')
console.log(
  stats.isDirectory(),
  stats.isFile(),
  stats.size,
  stats.isSymbolicLink()
)
