const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')
const folder = process.argv[2] ?? '.'

async function ls (dir) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch (err) {
    console.error(pc.red(`\tError al leer el directorio: ${dir}`))
    process.exit(1)
  }
  const filePromises = files.map(async (file) => {
    const filePath = path.join(dir, file)
    let stats
    try {
      stats = await fs.stat(filePath)
    } catch (err) {
      console.log(pc.red(`\terror tratando de conseguir las stats de ${file}`))
      process.exit(1)
    }
    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? pc.green('d') : pc.white('f')
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return `${pc.bold(fileType)} ${pc.blue(file.padEnd(30))} ${pc.yellow(
      fileSize.toString().padStart(10)
    )} ${pc.red(fileModified.padStart(10))}`
  })
  const filesInfo = await Promise.all(filePromises)
  console.log(pc.green('File Type\t|\tName\t|\tSize\t|\tLast Modified'))
  console.log(
    pc.gray(
      '======================================================================'
    )
  )
  filesInfo.forEach((fileInfo) => console.log(fileInfo))
}
ls(folder)
