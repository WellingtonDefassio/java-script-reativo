const { Observable } = require('rxjs')

const obs$ = new Observable(sub =>{
    sub.next('RxJS')
    sub.next('é')
    sub.next('bem')
    sub.next('poderoso!!')

    if(Math.random()> 0.5){
        sub.complete()
    }else{
        sub.error('Que problema?!?')
    }
})

obs$.subscribe({
    next: (v) => console.log(v),
    error: (e) => console.log(e),
    complete: (c) => console.log('fim!!')
})


/*
    na aula
    obs$.subscribe(
        valor => console.log(valor),
        erro => console.log(erro),
        () => console.log('fim)
    )
*/