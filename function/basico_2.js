function bomDia() {
    console.log('Bom dia!!!')
}
const boaTarde = function boaTardeNome (){
    console.log('Boa tarde!!!')
}

function executarQualquerCoisa(fn) {
        if(typeof fn === 'function') {
            fn()
        }
}


executarQualquerCoisa(3)
executarQualquerCoisa(bomDia())
executarQualquerCoisa(boaTarde())


// 2) retornar uma função a partir e uma outra função

function potencia(base){
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potencia)

const resolvido = potenciaDe2(8)

console.log(resolvido)

console.log(potencia(3)(3))


console.log('DESAFIO')

const somar = function(a) {
    return function (b) {
        return function (c) {
            return a + b + c 
        }
    }
}

console.log(somar(2)(2)(2))


const calcular = function(a){
  return function(b) {
       return function(fn){
            return fn(a,b)
       }
    }
}

function multiplicar(a, b){
    return a * b
}
function somar2(a,b){
    return a + b
}


const potenciaArrow = (base, exp) => Math.pow(base,exp)

const potenciaArrowInsideArrow = base =>  exp =>  Math.pow(base, exp)


// function potenciaArrow(base){
//     return function(exp) {
//         return Math.pow(base, exp)
//     }
// }

console.log(potenciaArrow(10,5))
console.log(calcular(10)(5)(multiplicar))
console.log(calcular(5)(6)(somar2))
console.log(potenciaArrowInsideArrow(10)(5))