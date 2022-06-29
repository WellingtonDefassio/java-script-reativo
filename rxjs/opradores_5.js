const { of, Observable } = require('rxjs')

function terminadoCom(textoFinal) {
    return function (obsSource) {
        return new Observable(sub => {
            obsSource.subscribe({
                next(valor) {
                    if (Array.isArray(valor)) {
                        sub.next(valor.filter(el => el.toUpperCase().endsWith(textoFinal.toUpperCase())))

                    } else if (valor.toUpperCase().endsWith(textoFinal.toUpperCase())) {
                        sub.next(valor)
                    }
                },
                error(e) {
                    sub.error(e)
                },
                complete() {
                    sub.complete()
                }
            })
        })
    }
}



of(['Ana Silva', 'Maria Silva', 'Pedro Rocha'])
    .pipe(terminadoCom('Silva'))
    .subscribe(console.log)