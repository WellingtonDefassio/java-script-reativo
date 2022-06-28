function textoComTamanhoEntre(min,max,erro,text) {
    const tamanho = (text || '').trim().length

    if(tamanho<min || tamanho> max) {
        throw erro
    }
}

const p1 = {nome: 'A', preco: 14.99, desc: 0.25}

textoComTamanhoEntre(4,255, 'Nome Invalido!', p1.nome)