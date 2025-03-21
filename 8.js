// Factorial Finder 
// Find a factorial of a given Array for positive integers onplay. 
// We can use recursion too but it gives function overheads so We are using reduce approach

let arr = [1,2,3,4,5,6]

function factorialFind(arr){
    if(arr.includes(0)){
        arr = arr.filter(num => num != 0)
    }
    return arr.reduce((acc , cur) => acc * cur, 1); 
}

console.log(factorialFind(arr))