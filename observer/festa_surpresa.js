const readline = require('readline')

function obterResposta(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp)
            rl.close()
        })
    })
}

function namorada() {
        console.log('N: Apagar as luzes')
        console.log('N: Pedir silencio')
        console.log('N: Surpresa!!!')
}

function sindico() {
    console.log('S: Monitorando o barulho')
}

async function porteiro(interessados){
      while(true) {
        const resp = await obterResposta('O namorado chegou? (s/N/q) ')
        if(resp.toLowerCase() === 's') {
            (interessados || []).forEach(obs => obs())
            break;
        } else if(resp.toLowerCase() === 'q') {
            break;
        }
      }
}

porteiro([namorada, sindico])