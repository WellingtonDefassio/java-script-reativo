const letrasAninhadas = [['o', 'l', 'a'],[' '],['m','u','n','d','o','!','!']]

const letras = letrasAninhadas.flat(Infinity)

const result = letras.flatMap(l => [l, ','])
// .reduce((a,b) => a + b)

console.log(result)