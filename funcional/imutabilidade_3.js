const pessoa = {
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end: {
        rua: 'Feliz!!'
    }
}


pessoa.nome = 'João'
pessoa.cidade = 'São Paulo'

console.log(pessoa)

function alteraPessoa(pessoa) {
    const novaPessoa = {...pessoa}
    novaPessoa.nome = 'Marcio',
    novaPessoa.cidade = 'Fortaliza'
    return novaPessoa
}

console.log(alteraPessoa(pessoa))
console.log((pessoa))