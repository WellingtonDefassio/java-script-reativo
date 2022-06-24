const felizNatal = () => console.log('Feliz natal');

felizNatal()

const bemVindo = nome => `bem vindo senhor ${nome}`

console.log(bemVindo('Maria'))

const bemVindoMuitos = (nome, numero) => `bem vindo ${nome} e ${numero}`

console.log(bemVindoMuitos('joão', 50))

const somar = (array) => {
    let total = 0
    array.forEach(element => {
     total += element   
    });
    return total
}
const somarWithRest = (...array) => {
    let total = 0
    array.forEach(element => {
     total += element   
    });
    return total
}





console.log(somar([1,2,3,4,5]))
console.log(somarWithRest(1,2,5,6,3,69))
console.log(somarWithRest(1,2,5))