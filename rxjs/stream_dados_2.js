const numeros = [1,2,3,4,5,6,7,8,9,10]

function gerarElementos(array) {
    return {
        iniciar(fn){
           let indice = 0 
           const i = setInterval(() => {
                if(indice>= array.length) {
                    clearInterval(i)
                } else {
                    fn(array[indice])
                    indice++
                }
           },500)
           return{
            parar() {
                clearInterval(i)
            }
           }
        }
    }
}

const tempor = gerarElementos(numeros)
const exec = tempor.iniciar(num => {
    console.log(Math.pow(2, num))
})

setTimeout(() => {
    exec.parar()
}, 4000)