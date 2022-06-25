


Array.prototype.meuMap = function(fn) {
    const mapped = []
    for (let i = 0; i < this.length; i++) {
     mapped.push(fn(this[i], i, this)) 
    }
    return mapped;
}


const pegaNomes = obj => obj.nome
const precoTotal = obj => obj.qtde * obj.preco


const carrinho = [
    {nome: 'Caneta', qtde:10 , preco: 7.99},
    {nome: 'Impressora', qtde:0  , preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10 },
    {nome: 'Lapis', qtde: 3 , preco: 5.82 },
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
]

console.log(carrinho.meuMap(pegaNomes))
console.log(carrinho.meuMap(precoTotal))