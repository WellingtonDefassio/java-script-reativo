
setTimeout(() => {
  
    console.log('Executando callback...' )
   return setTimeout(() => {
        console.log('Executando callback2...')
      return  setTimeout(() => {
            console.log('Executando callback3...')
        },2000)
    },2000)
}, 2000)


function esperarPor(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Executando promise...')
            resolve('BARATA')
        }, tempo)
    })
}

esperarPor(3000)
.then(esperarPor)
.then(console.log)