// write a function findMax that takes an array of numbers as input and returns the maximum number of array

let arr = [ 100 , 20 , 150 , 390 , 12, 27 , 73 , 10]

// method 1 : using reduce. 
function findMaxNumber(arr){
    return arr.reduce((acm , cur) => acm > cur ? acm : cur, 0)
}

console.log(findMaxNumber(arr))

// method 2: using Math.reduce

function findMaxNumber(arr){
   return Math.max(...arr)
}
console.log(findMaxNumber(arr))

