// Question : - You are required to implement a function generateHash that generated a hash tag from a given input String. The hash tag should be constructed as follow

// Each word should be capitalized 
// If the length of string is greater than 250 or empty then return false

// eg. this is the string => #ThisIsTheString


let str = "this is the string"; 

function hashedWord(str){
    if(str.trim().length === 0){
        return "Sentence should contain at least one word"
    }
    else if(str.trim().length > 250){
        return "Sentence should be less than 250 characters"
    }
    let capitalizedStr = "#" + str.split(" ").map((words) => words.charAt(0).toUpperCase() + words.slice(1)).join(''); 
    return capitalizedStr
}

console.log(hashedWord(str)); 