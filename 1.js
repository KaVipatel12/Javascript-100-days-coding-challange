// Find the longest word in the sentence. if the word doesn't contain any word then return false. If there are multiple similar length words then return the first occurance.. 

function findLongestWord(sentence) {
    // let wordArray = sentence.split(" ");
    let longestWord = "";
    
    if(sentence.trim().length === 0){
        longestWord = false; 
        return longestWord
    }
    // Method 1
    // for (let i = 0; i < wordArray.length; i++) {
    //     if (longestWord.length < wordArray[i].length) {
    //         longestWord = wordArray[i];
    //     }
    // }

    // Method 2
    return sentence.split(" ").reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
      }, "");
}

// Example usage:
let sentence = "This is the longest word in the javalength javascript";
let longest = findLongestWord(sentence);
console.log("The longest word is " + longest);
