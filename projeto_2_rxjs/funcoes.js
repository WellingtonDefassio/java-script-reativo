import fs from 'fs'
import path, { resolve } from 'path'
import { Observable } from 'rxjs'

export function lerDiretorio(caminho) {
   return new Observable(subscriber => {
      try {

         fs.readdirSync(caminho).forEach(arquivo => {
            subscriber.next(path.join(caminho, arquivo))
         })
         subscriber.complete
      } catch (error) {
         subscriber.error(error.message)
      }

   })

}

export function filtrarExtensao(extensao) {
   return createPipeOperator((subscriber) => ({
      next(texto) {
         if(texto.endsWith(extensao)) {
            subscriber.next(texto)
         }
      }
   }))
}
// export function filtrarExtensao(extensao) {
//    return new Promise((resolve) => {
//       return function (array) {
//          const result = array.filter(el => el.endsWith(extensao))
//          resolve(result)
//       }
//    })
// }

export function lerArquivo() {
      return createPipeOperator((subscriber) => ({
         next(caminho) {
            try {
               const conteudo = (fs.readFileSync(caminho, { encoding: 'utf-8' }))
               subscriber.next(conteudo.toString())
            } catch (error) {
               subscriber.error(error)
            }
         }
      }))
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

export function separarTextoPor(simbolo) {
   return createPipeOperator((subscriber) => ({
      next(textao){
         textao.split(simbolo).forEach(part => {
            subscriber.next(part)
         })
      }
   }))
}

export function ordenarPorAtributoNumerico(attr, ordem = 'asc') {
   return function (array) {
      const desc = (o1, o2) => o2[attr] - o1[attr]
      const asc = (o1, o2) => o1[attr] - o2[attr]
      return [...array].sort(ordem === 'asc' ? asc : desc)
   }
}

function createPipeOperator(operatorFn){
   return function (obsSource) {
       return new Observable(subscribe => {
           const sub = operatorFn(subscribe)
           obsSource.subscribe({
               next: sub.next,
               error: sub.error || (e => subscribe.error(e)),
               complete: sub.complete || (() => subscribe.complete())
           })
       })
   }

}
// export function composicao(...fns) {
//    return function (valor) {
//        return fns.reduce(async (acc, fn) => {
//            if (Promise.resolve(acc) == acc) {
//                return fn(await acc)
//            }
//            else {
//                return fn(acc)
//            }
//        }, valor)
//    }
// }
