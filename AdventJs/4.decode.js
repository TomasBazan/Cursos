function decode(message) {
  let count = message.match(/\(/g).length;
  const regex = /\(([^()]+)\)/g
  
  const replacer = (_, group) => [...group].reverse().join("");
  
  while (count--) {
    message = message.replace(regex, replacer);
  }
  return message
}
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
