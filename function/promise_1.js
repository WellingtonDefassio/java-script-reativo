


const p = new Promise(function(comprimirPromessa) {
     comprimirPromessa(['ana','bia','lia'])
})

p.then(valor => valor[0])
.then(valor => valor.toUpperCase())
.then(console.log)