// write a function called countChar that takes two parameters : a string and a character to count. The function should return the number of times the specified character appears in the string.
// Function should be case sensetive. 

let str = "MIssisipI"; 
let findLetter = "i"; 

function counterLetter(str , findLetter){
    let counter = 0; 
      
    for (let i = 0; i < str.length; i++) {
        if(str[i].toLowerCase() === findLetter.toLowerCase()){
            counter++; 
        }
    }
    return counter;
}

console.log(counterLetter(str , findLetter)); 