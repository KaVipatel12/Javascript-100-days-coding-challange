// Return the average of the array

let arr = [1,2,3,4,5,6,7,8,9];

function calculateAverage(arr) {
  if(arr.length == 0) return 0; 
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}
console.log(calculateAverage(arr));
