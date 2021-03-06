import path from 'path';
import { first } from 'rxjs';
import { toArray  } from 'rxjs/operators';
import {fileURLToPath} from 'url';
import {lerDiretorio, filtrarExtensao,separarTextoPor, lerArquivos,lerArquivo, removerSeVazio, removerSeIncluir,removerSeApenasNumero, removerSimbolos, ordenarPorAtributoNumerico} from './funcoes.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',','"', '♪', '_', '<i>', '</i>', '\r', '[', ']','(', ')', ':'
]

const juntarConteudos = (array) => {
        return array.join(' ')
}
const separarPorLinhas = todoConteudo => todoConteudo.split('\n')
const separarPorPalavras = todoConteudo => todoConteudo.split(' ')


const agruparPalavras = (palavras) => {
    return Object.values(palavras.reduce((acc, palavra) => {
        const p = palavra.toLowerCase()
        const qtde = acc[p]? acc[p].qtde + 1 : 1
        acc[p] = {elemento: p, qtde}
        return acc
    }, {})
)}


lerDiretorio(caminho).pipe(
    filtrarExtensao('srt'),
    lerArquivo(),
    separarTextoPor('\n'),
    removerSeVazio(),
    removerSeApenasNumero(),
    removerSimbolos(simbolos),
    separarTextoPor(' '),
    removerSeVazio(),
    removerSeApenasNumero(),
    toArray()

).subscribe(value => console.log(value))


//  lerDiretorio(caminho)
// .then(filtrarExtensao('srt'))
// .then(lerArquivos)
// .then(juntarConteudos)
// .then(separarPorLinhas)
// .then(removerSeVazio)
// .then(removerSeIncluir('-->'))
// .then(removerSeApenasNumero)
// .then(removerSimbolos(simbolos))
// .then(juntarConteudos)
// .then(separarPorPalavras)
// .then(removerSeVazio)
// .then(removerSeApenasNumero)
// .then(agruparPalavras)
// .then(ordenarPorAtributoNumerico('qtde', 'desc'))
// .then(console.log)


