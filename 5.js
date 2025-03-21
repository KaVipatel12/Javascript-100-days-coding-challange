// sort the array in ascending order
// requirements :- don't use sort method

// one method is to pass arr in the new array and sort it which is the simplist step. I am using logical approach here

// we will use the bubble sort approach

function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
         if(arr[j] > arr[j + 1]){
            let temp = arr[j]; 
            arr[j] = arr[j+1]
            arr[j + 1] = temp
         }
        }
    }
    return arr; 
}

console.log(bubbleSort([3,20, 30 , 100 , 69]))