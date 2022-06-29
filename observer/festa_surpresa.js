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

export function sindico(evento) {
    console.log('S: Monitorando o barulho')
    console.log(`S: ${evento.resp}`)
    console.log(`S: ${evento.date}`)
}

 export async function porteiro(interessados){
      while(true) {
        const resp = await obterResposta('O namorado chegou? (s/N/q) ')
        if(resp.toLowerCase() === 's') {
            (interessados || []).forEach(obs => obs({ resp, date: Date.now() }))
            break;
        } else if(resp.toLowerCase() === 'q') {
            break;
        }
      }
}

porteiro([namorada, sindico])