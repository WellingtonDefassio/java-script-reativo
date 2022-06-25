const fs = require('node:fs')
const path = require('path')


function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())
        })  
        console.log('Depois de ler?')
    })
}


// const lerArquivo = (test) => {
//    return new Promise((resolve) => {
   
//      const result = fs.readFile(caminho)
//     resolve(result);
//    })
// }

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
.then(console.log)




