import { readFile } from 'node:fs/promises'
// Esto lee ambos en paralelo
Promise.all([
  await readFile('./archivo.txt', 'utf-8'),
  await readFile('./archivo2.txt', 'utf-8')
]).then(([text1, text2]) => {
  console.log('texto1:\n\t', text1)
  console.log('texto2:\n\t', text2)
})
