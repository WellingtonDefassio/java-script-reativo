const nums =  [1,2,3,4,5,]

const dobro = (n, i) => n * 2 + i 

const result =  nums.map(dobro)

const result2 =  nums.map((data, index, array) => {
    console.log(data * 2)
})

const nomesAleatorio = ['ana', 'bia', 'lia', 'digo', 'bru', 'ruy']


const maiusculo = n => n.toString().toUpperCase();

console.log(result)
console.log(nomesAleatorio.map(maiusculo))


const pegaNomes = obj => obj.nome
const precoTotal = obj => obj.qtde * obj.preco


const carrinho = [
    {nome: 'Caneta', qtde:10 , preco: 7.99},
    {nome: 'Impressora', qtde:0  , preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10 },
    {nome: 'Lapis', qtde: 3 , preco: 5.82 },
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
]

console.log(carrinho.map(pegaNomes))
console.log(carrinho.map(precoTotal))