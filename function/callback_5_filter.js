


const carrinho = [
    {nome: 'Caneta', qtde:10 , preco: 7.99},
    {nome: 'Impressora', qtde:8  , preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10 },
    {nome: 'Lapis', qtde: 0 , preco: 5.82 },
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
]

const quantidadeMaiorQueZero = obj => obj.qtde > 0
const getNome = obj => obj.nome


const result = carrinho.filter(quantidadeMaiorQueZero).map(getNome)

console.log(result)


Array.prototype.meuFilter = function(fn) {
    const novoArray = []

    for(let i = 0; i < this.length; i++ ) {
        if(fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray;
}

const result2 = carrinho.meuFilter(quantidadeMaiorQueZero).map(getNome)

console.log(result2)