function isPalindrome(word) {
  // Write your algorithm here
  // Convert the input string to lowercase for case-insensitive comparison
  const lowerCaseWord = word.toLowerCase();
  
  // Convert the input string to an array of characters
  const strArray = lowerCaseWord.split('');
  
  // Reverse the array
  const reversedArray = strArray.slice().reverse();
  
  // Compare the reversed array with the original array
  return strArray.join('') === reversedArray.join('');
}
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
