
const { of, last, first, map } = require('rxjs')


of(1,2,3,4,'ana',false,'ultimo')
.pipe(
    last(), 
    map(v => v[0]),
    map(v => v.toUpperCase())               
    )
.subscribe((valor) => console.log(valor))