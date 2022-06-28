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

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome produto Invalido!')


const p1 = {nome: 'A', preco: 14.99, desc: 0.25}

forcarNomeProdutoValido(p1.nome)