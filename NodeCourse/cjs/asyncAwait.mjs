import { readFile } from 'node:fs/promises'

const text1 = await readFile('./archivo.txt', 'utf-8')
console.log('texto1:\n\t', text1)
const text2 = await readFile('./archivo2.txt', 'utf-8')
console.log('texto2:\n\t', text2)
