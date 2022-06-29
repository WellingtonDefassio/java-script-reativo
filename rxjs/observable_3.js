const {Observable, noop} = require('rxjs')

//desafio
//criar uma stream de numeros
// entra min e max com Observable

function entre(min, max) {
    return new Observable(sub => {
       Array(max + 1 - min ).fill().map((_, i) => {
        sub.next(min + i)
       })
        sub.complete()
    })
    
}

entre(4,250).subscribe({
    next: (n) => console.log(`aqui está o ${n}`),
    error: (e) => console.log(e),
    complete:() => console.log('completo!')
})