function textoComTamanhoEntre(min) {
    return function(max){
        return function(erro){
          return function(text){
            const tamanho = (text || '').trim().length
            if(tamanho<min || tamanho>max){
                throw erro
            }
          } 
        }
    }
}

function aplicarValidacao(fn, valor) {
    try {
        fn(valor)
    } catch (error) {
        return {error}
    }
}
function aplicarValidacaoComCurryng(fn) {
    return function(valor){
        try {
            fn(valor)
        } catch (error) {
            return {error}
        }
    }
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome produto Invalido!')
const validarNomeProduto = aplicarValidacaoComCurryng(forcarNomeProdutoValido)


const p1 = {nome: 'A', preco: 14.99, desc: 0.25}

aplicarValidacao(validarNomeProduto(p1.nome))