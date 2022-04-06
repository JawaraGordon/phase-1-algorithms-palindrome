function isPalindrome(string) {
  return reverseString(string);
}
function reverseString(word) {
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");

  if (reversedWord === word) {
    // console.log(true);
    return true;
  } else {
    // console.log(false);
    return false;
  }
}

// isPalindrome("racecar");

/* 
  Add your pseudocode here
  function isPalindrome receives one string argument
    use regular expression: 
  returns true if the string is a palindrome  
  returns false if it's not a palindrome
  lowercase strings only - no spaces or special characters

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
