import fs from 'fs'
import path from 'path'

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
   return array.filter(el =>el.endsWith(extensao))
     
}