const path = require('node:path')
// para construir nuevas rutas, ver extension de archivos, crear rutas absolutas
// unir rutas con path.join
// con path.sep muestra como se separan los archivos en el path por ej: unix: \ en windows /
const filePath = path.join('./content', 'subfolder', 'test.txt')
console.log('filepath', filePath)
const base = path.basename('/temp/folder/script.py')
console.log('base ', base)
const filename = path.basename('/temp/folder/script.py', '.py') // el segundo parametro es para quitar la extesion, o el string final que yo le indique
console.log('filename ', filename)

const extension = path.extname('my.super.image.jpg') // forma mas usada y menos imperativa de sacar la extension
console.log('extension', extension)
