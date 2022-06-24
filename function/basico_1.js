let a = 4;
console.log(a)


//function declaration

function bomDia() {
    console.log('Bom dia!')
}

bomDia()

//function expression

const boaTarde = function () {
    console.log('Boa tarde!!')
}

boaTarde()

function somarDeclaration(a,b) {
    return a + b;
}


const somarExpression = function (a,b) {
    return a + b;
}

console.log(somarExpression(4, 6))
console.log(somarDeclaration(4, 6))