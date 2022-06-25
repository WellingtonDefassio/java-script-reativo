

const nums =  [1,2,3,4,5,]

const dobro = (n, i) => n * 2 + i 

const result =  nums.map(dobro)

const result2 =  nums.map((data, index, array) => {
    console.log(data * 2)
})

console.log(result)