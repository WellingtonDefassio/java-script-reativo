function gerarNumeros(fn) {
    return {
        iniciar(fn, interval = 1000) {
            let num = 0
           const i = setInterval(() => {
                fn(num++)
            }, interval)
            return{
                parar() {
                    clearInterval(i)
                }
            }
        }
    }
}

const temp1 = gerarNumeros()
const exec1 = temp1.iniciar(numero => {
    console.log(numero * 2)
})


const temp2 = gerarNumeros()
const exec2 = temp2.iniciar(numero => {
    console.log(numero + 100)
}, 2000)

setTimeout(() => {
    exec1.parar();
    exec2.parar();
},10000)