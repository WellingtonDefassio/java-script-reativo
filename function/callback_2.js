const fs = require('node:fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')


const exibirConteudo = (err, conteudo) => {
    console.log(conteudo.toString())
}


fs.readFile(caminho, {}, (_, conteudo) => {
    console.log(conteudo);
})
fs.readFile(caminho, exibirConteudo)


console.log(caminho)