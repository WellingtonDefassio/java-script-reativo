import path from 'path';
import {fileURLToPath} from 'url';
import {lerDiretorio, filtrarExtensao, lerArquivos} from './funcoes.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const result = lerDiretorio(caminho).then((arquivos) => filtrarExtensao(arquivos, 'srt')).then(lerArquivos).then(console.log)

