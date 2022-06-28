function composicao(...fns){
    return function(valor){
        return fns.reduce((acc, fn) => {
            console.log(acc + ' '+ fn)
            return fn(acc)
        }, valor)
    }
}

function gritrar(texto){
    return texto.toUpperCase()
}

function enfatizar(texto){
    return `${texto}!!!!`
}
function tornarLento(texto){
    return texto.split('').join(' ')
}

const exagerado = composicao(gritrar, enfatizar, tornarLento)
const umPoucoMenosExagerado = composicao(gritrar, enfatizar)

const resultado = exagerado('para')
const resultado2 = umPoucoMenosExagerado('olha o buraco!!')

console.log(resultado)
console.log(resultado2)