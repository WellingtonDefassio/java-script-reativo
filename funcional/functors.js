


const nums = [1,2,3,4,5,6]

const nums10 = nums.map(el => el +10).map(el => el*2)
console.log(nums10)


function TipoSeguro(valor) {
    return {
        valor,
        map(fn){
            const novoValor = fn(this.valor)
            return TipoSeguro(novoValor)
        }
    }
}

const resultado = TipoSeguro('Esse é um texto')
.map(t => t.toUpperCase())
.map(t => `${t}!!!!`)
.map(t => t.split('').join(' '))

console.log(resultado.valor)