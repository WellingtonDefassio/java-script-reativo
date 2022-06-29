const {Observable} = require('rxjs')

function ofWithDelay(time, ...elementos) {
    return new Observable(sub => {
        (elementos || []).forEach((el, i) => {
            setTimeout(() => {
                sub.next(el)
                if(elementos.length === i +1) {
                    sub.complete()
                }
            }, time * (i+1))
        })
    })

}

ofWithDelay(1000,[1,2,3,4,5,6,7,8,9,10])
.subscribe(console.log)