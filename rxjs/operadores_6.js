const { from, Observable } = require('rxjs')


function createPipeOperator(nextFn){
    return function (obsSource) {
        return new Observable(sub => {
            obsSource.subscribe({
                next(v) {
                    nextFn(sub, v)
                }
            })
        })
    }

}


function primeiro() {
    return createPipeOperator((subscriber, value) => {
        subscriber.next(value)
        subscriber.complete()
    })
}
function nenhum() {
    return function (obsSource) {
        return new Observable(sub => {
            obsSource.subscribe({
                next(v) {
                    sub.complete()
                }
            })
        })
    }
}

function ultimo() {
    return function (obsSource) {
        return new Observable(sub => {
            let ultimo
            obsSource.subscribe({
                next(v) {
                    ultimo = v
                },
                complete() {
                    if (ultimo !== undefined) {
                        sub.next(ultimo)
                    }
                    sub.complete()
                }
            })
        })
    }

}

from([1, 2, 3, 4, 5])
    .pipe(
        primeiro(),
        // nenhum(),
        //  ultimo(),
    )
    .subscribe(console.log)