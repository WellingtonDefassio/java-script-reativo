function gerarNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise((resolve) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        resolve(aleatorio);
    })
}

gerarNumerosEntre(1, 99)
.then(n => n *10)
.then(n2 => n2 -1000)
.then(n3 => `o valor interpolado é ${n3}`)
.then(console.log)