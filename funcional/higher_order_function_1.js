

function executar(fn, ...params) {
  return fn(...params)
}

function somar(a,b,c) {
    return a + b + c
}

function subtrair(a,b,c){
    return a - b - c
}

console.log(executar(somar,1,2,3))
console.log(executar(subtrair,1,2,3))