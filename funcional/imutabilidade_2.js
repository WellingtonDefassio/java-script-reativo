const nums = [4,8,3,2,9,9,1,3]

let total = 0

for(let i = 0; i<nums.length; i++){
    total += nums[i]
}

console.log(total)

const total2 = nums.reduce((a,b) => a + b)

console.log(total2)


function somarArray(array, total =0){
        if(!array){
            return total;
        }
     return somarArray(array.slice(1), total + array[0])
}

console.log(somarArray(nums))