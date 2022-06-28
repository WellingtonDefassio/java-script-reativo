import fs from 'fs'
import path, { resolve } from 'path'

export function lerDiretorio(caminho) {
   return new Promise((resolve, reject) => {
      try {

         let arquivos = fs.readdirSync(caminho)
         const mappedArquivo = arquivos.map(arquivo => path.join(caminho, arquivo))
         resolve(mappedArquivo)
      } catch (error) {
         reject(error.message)
      }
 
   })

}

export function filtrarExtensao(array, extensao){
   return new Promise((resolve) => {
      const result = array.filter(el =>el.endsWith(extensao))
      resolve(result)
   })     
}

export function lerArquivo(caminho){
   return new Promise((resolve, reject) => {
    const conteudo =  fs.readFileSync(caminho, {encoding: 'utf-8'})
    resolve(conteudo);
   })
}
export function lerArquivos(caminhos){
   return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
   }

