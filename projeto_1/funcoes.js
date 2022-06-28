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

export function filtrarExtensao(extensao) {
   return new Promise((resolve) => {
      return function (array) {
         const result = array.filter(el => el.endsWith(extensao))
         resolve(result)
      }
   })
}

export function lerArquivo(caminho) {
   return new Promise((resolve, reject) => {
      const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
      resolve(conteudo);
   })
}
export function lerArquivos(caminhos) {
   return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

export function removerSeVazio(array) {
   return array.filter(el => el.trim())
}

export function removerSeIncluir(texto) {
   return function (array) {
      return array.filter(el => !el.includes(texto))
   }
}

export function removerSeApenasNumero(array) {
   return array.filter(el => {
      const num = parseInt(el.trim())
      return num !== num;
   })
}

export function removerSimbolos(simbolos) {
   return function (array) {
      return array.map(el => {
         return simbolos.reduce((acc, simbolo) => {
            return acc.split(simbolo).join('').trim()
         }, el)
      })
   }
}

export function ordenarPorAtributoNumerico(attr, ordem = 'asc') {
   return function (array) {
      const desc = (o1, o2) => o2[attr] - o1[attr]
      const asc = (o1, o2) => o1[attr] - o2[attr]
      return [...array].sort(ordem === 'asc' ? asc : desc)
   }
}

export function composicao(...fns) {
   return function (valor) {
       return fns.reduce(async (acc, fn) => {
           if (Promise.resolve(acc) == acc) {
               return fn(await acc)
           }
           else {
               return fn(acc)
           }
       }, valor)
   }
}
