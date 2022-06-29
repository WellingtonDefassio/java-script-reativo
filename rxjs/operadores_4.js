const { from, Observable } = require('rxjs')


function primeiro() {
    return function (obsSource) {
        return new Observable(sub => {
            obsSource.subscribe({
                next(v) {
                    sub.next(v)
                    sub.complete()
                }
            })
        })
    }
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
        nenhum(),
        primeiro(),
         ultimo(),
    )
    .subscribe(console.log)