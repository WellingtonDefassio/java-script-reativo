function ordenar(array){
   return [...array].sort()
}

const nums = [3,1,7,9,4,6]



console.log(ordenar(nums))

console.log(nums)

const parteNums = nums.slice(2)

console.log(parteNums)
console.log(nums)