import path from 'path';
import { fileURLToPath } from 'url';
import { lerDiretorio, composicao, filtrarExtensao, juntarConteudos, lerArquivos, removerSeVazio, removerSeIncluir, removerSeApenasNumero, removerSimbolos, ordenarPorAtributoNumerico } from './funcoes.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')', ':'
]


composicao(lerDiretorio, lerArquivos,
    juntarConteudos,
    separarPorLinhas,
    removerSeVazio,
    removerSeIncluir('-->'),
    removerSeApenasNumero,
    removerSimbolos(simbolos),
    juntarConteudos,
    separarPorPalavras,
    removerSeVazio,
    removerSeApenasNumero,
    agruparPalavras,
    ordenarPorAtributoNumerico('qtde', 'desc'))(caminho)


