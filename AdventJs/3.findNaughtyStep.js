function findNaughtyStep(original, modified) {
  const [lessWords, mostWords] = [original,modified].sort((x,y)=>x.length - y.length) 
  return [...mostWords].find((x,i) =>lessWords[i] != x) ?? "";
}
//const original = 'abcd'
//const modified = 'abcde'
//findNaughtyStep(original, modified) // 'e'

//const original = 'stepfor'
//const modified = 'stepor'
//findNaughtyStep(original, modified) // 'f'
//
const original = 'aacda'
const modified = 'aacdaa'
findNaughtyStep(original, modified) // ''
