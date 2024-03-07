function reverseString(str) {
  // type your code here
  let result = '';
  for (let char of str) {
    result = char + result;
  }
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log('=>', reverseString('hi'));

  console.log('');

  console.log("Expecting: 'ybabtac'");
  console.log('=>', reverseString('catbaby'));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*
Receive a string.
Set a result variable to an empty string.
Iterating from the first letter of the received string, save the result string as 
that letter + the previous result string (concatenating to the front basically)

*/
