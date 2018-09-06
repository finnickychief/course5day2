// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(inputString) {
  const vowelListArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const vowelListStr = 'aeiou';

  const vowelMap = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };

  let vowelCount = 0;
  inputString = inputString.toLowerCase();

  for (let i = 0; i < inputString.length; i++) {
    // Is the current Character in our list / If our vowel List includes the character

    // if (
    //   inputString[i] === 'a' ||
    //   inputString[i] === 'e' ||
    //   inputString[i] === 'i' ||
    //   inputString[i] === 'o' ||
    //   inputString[i] === 'u' ||
    //   inputString[i] === 'A' . . .
    // ) {
    //   vowelCount++;
    // }

    // if (vowelListArr.includes(inputString[i].toLowerCase())) {
    //   vowelCount++;
    // }

    if (vowelMap[inputString[i]] !== undefined) {
      vowelCount++;
    }
  }

  return vowelCount;
}

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(sentence) {
  // Get the individual words
  let words = sentence.split(' ');

  // Capitalize the first character in each word
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  // Difference between slice and substr:
  // Slice grabs the items from index 1 to and NOT including index 2
  // 'Hello'.slice(0,3) - > 'Hel'
  // If you leave off the second parameter, it gives you all of the remaining characters

  // substr grabs N items from a string, starting at the index where N is the second parameter
  // 'Hello'.slice(1,3) -> 'el'
  // 'Hello'.slice(1, 1+3);
  // 'Hello'.substr(1,3) - > 'ell'

  // Put the words back together
  return words.join(' ');
}

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams() {
  // Do sort method then charmap method

  // Cheasheet for regular expressions: https://www.rexegg.com/regex-quickstart.html
  // Remove all dollar signs from a string:
  let exampleString = 'This$ has$$$$ too $many$ dollarsigns';
  // the replace method takes in a 'mask', and a replacement value for anything that is matched by the mask.
  // The double /'s are used to indicate that it is a regular expression, and the g tells the replace method to search the entire string. If you only want to look for one value, you can place it within the //'s by itself like this:

  // Remove spaces from the string
  exampleString = exampleString.replace(/ /g, '');

  // Remove $ signs:(you must escape the $ because it is a reserved character that has another meaning in regular expression syntax)
  exampleString = exampleString.replace(/\$/g, '');

  // With regular expressions you can look for more than one value to replace by using the brackets - []'s. List out all of the items you want to target within them, and it will search for all of them at once.

  // So to replace both the $ signs and the spaces use the following:
  exampleString = exampleString.replace(/[ \$]/g, '');

  // Replace all non-alphanumeric characters:
  exampleString = exampleString.replace(/\W/g, '');

  //replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk() {}

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome() {}

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {}
