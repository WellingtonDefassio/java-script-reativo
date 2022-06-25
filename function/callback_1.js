
const exec = (fn, a, b) => {
    return fn(a, b)
}

const somarNoTerminal = (a, b) => console.log(a + b)
const subtrairNoTerminal = (a, b) => console.log(a - b)
const subtrair = (a, b) => (a - b)

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

const resultadoSub = exec(subtrair,50, 25)

console.log(resultadoSub)

const cb = () => console.log('exec...')

setInterval(function(){
    let number = 0
    somarNoTerminal(number, 5)
    number += 10
    somarNoTerminal(number, 5)
} , 1000)