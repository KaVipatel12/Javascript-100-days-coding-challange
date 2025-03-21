// There are two arrays, write a function which checks if two arrays are same or not; 

let arr1 = [2 , 3 , 1]
let arr2 = [1 , 2 , 3]

function compareArray(arr1 , arr2){
    arr1.sort((a , b) => a - b); 
    arr2.sort((a , b) => a - b);
    
    if(arr1.length == arr2.length){
        for (let i = 0; i < arr1.length; i++) {
              arr1[i] === arr2[i]
              return true
            }
    }
    else return false
}

console.log(compareArray(arr1 , arr2))