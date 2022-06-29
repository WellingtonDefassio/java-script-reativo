const { from, Observable } = require('rxjs')


function createPipeOperator(operatorFn){
    return function (obsSource) {
        return new Observable(subscribe => {
            const sub = operatorFn(subscribe)
            obsSource.subscribe({
                next: sub.next,
                error: sub.error || (e => subscribe.error(e)),
                complete: sub.complete || (() => subscribe.complete())
            })
        })
    }

}
// function createPipeOperator(nextFn){
//     return function (obsSource) {
//         return new Observable(sub => {
//             obsSource.subscribe({
//                 next(v) {
//                     nextFn(sub, v)
//                 }
//             })
//         })
//     }

// }


function primeiro() {
    return createPipeOperator((subscribe) => ({
        next(v) {
            subscribe.next(v),
            subscribe.complete()
        },
        complete() {
            subscribe.complete()
        }

    }))
}

    // return createPipeOperator((subscriber, value) => {
    //     subscriber.next(value)
    //     subscriber.complete()
    // })


function nenhum() {
    return createPipeOperator((subscribe) => ({
        next(v) {
            console.log('nenhum!')
            subscribe.complete();
        }
    }))

}

function ultimo() {
    let ultimo
    return createPipeOperator((subscribe) => ({
        next(v) {
            ultimo = v 
        },
        complete() {
            if(ultimo !== undefined) {
                subscribe.next(ultimo)
            }
            subscribe.complete()
        }
    }))
}

from([1, 2, 3, 4, 5])
    .pipe(
        primeiro(),
         //nenhum(),
        //ultimo(),
    )
    .subscribe(console.log)