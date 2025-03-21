// Make a function that checks wether the word is palindrome or not
// Palindrome? Oppo reverse is Oppo so it is a palindrome, it should not be case sensetive for eg. Oppo === oppo 
// If there are special characters like (eg. @_-/\ etc) then remove that (we can use .repalce(/\W/g, ""))

// method 1 :- Using Inbuilt reverse method of javascript

let str = "Oppo"
function isPallindrome(str){
    return str.split("").reverse().join("").toLowerCase().replace(/\W/g, "") === str.toLowerCase().replace(/\W/g, "") ?
      `${str} is a palindrome` : `${str} is not a palindrome`
}; 
console.log(isPallindrome(str)); 

// Method 2 :- Without using reverse method. 

function isPallindrome(str){
    let reversedStr = []; 
    for (let i = str.length; i >= 0; i--) {
        reversedStr.push(str[i]); 
    }
    return reversedStr.join("").replace(/\W/g, "").toLowerCase() === str.toLowerCase().replace(/\W/g, "") ? `${str} is a palindrome` :`${str} is not a palindrome`; 
}

console.log(isPallindrome("/oppo"))
console.log(isPallindrome("Oppo"))
console.log(isPallindrome("OPpo"))
console.log(isPallindrome("apple"))
