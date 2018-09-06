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

// Cheatsheet for regular expressions: https://www.rexegg.com/regex-quickstart.html
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

// anagrams with the sort method
function anagramsSortMethod(inString1, inString2) {
  inString1 = inString1.replace(/\W/g, ''); // Strip all non-alphanumeric characters
  inString2 = inString2.replace(/\W/g, '');

  // If the remaining strings without punctuation don't have the same amount of  characters overall, they cannot be anagrams
  if (inString1.length !== inString2.length) {
    return false;
  }

  /*
    railsafety
    fairytales

    aaefilrsty
    aaefilrsty

    r: 1
    a: 2
    i: 1
    l: 1
    s: 1
    f: 1
    e: 1
    t: 1
    y: 1

    f: 1
    a: 2
    i: 1
    r: 1
    y: 1
    t: 1
    l: 1
    e: 1
    s: 1

    Hithere
    Byethere

    eehHirt <-- First string sorted
    Beeehrty <-- second string sorted
  */

  // console.log(inString1);
  // console.log(inString2);

  let stringAry1 = inString1.split('');
  let stringAry2 = inString2.split('');

  // console.log(stringAry1);
  // console.log(stringAry2);

  stringAry1.sort();
  stringAry2.sort();

  // console.log(stringAry1);
  // console.log(stringAry2);

  for (let i = 0; i < stringAry1.length; i++) {
    if (stringAry1[i] !== stringAry2[i]) {
      // If any of our characters from the first string do not match the character at the same position in the second string, we return false because they are not anagrams
      return false;
    }
  }

  return true; // If they all pass, return true
}

function anagrams(inString1, inString2) {
  // Clean out punctuation
  inString1 = inString1.replace(/\W/g, '');
  inString2 = inString2.replace(/\W/g, '');

  if (inString1.length !== inString2.length) {
    return false;
  }

  // Declare character map
  const charMap1 = {};
  const charMap2 = {};

  // Fill in character map
  for (let i = 0; i < inString1.length; i++) {
    // Logic for filling out map:
    // If the current character already exists in the map: increment the value tied to it
    if (charMap1[inString1[i]]) {
      charMap1[inString1[i]]++;
    } else {
      // Otherwise, put the character in the map with a value of 1
      charMap1[inString1[i]] = 1;
    }
    if (charMap2[inString2[i]]) {
      charMap2[inString2[i]]++;
    } else {
      charMap2[inString2[i]] = 1;
    }
  }

  let letters = Object.keys(charMap1); // Get all of the keys off the first charMap
  // We don't need the keys of the second one because we know what they SHOULD be if they are anagrams based on the first map

  // Loop through all the keys
  for (let i = 0; i < letters.length; i++) {
    // Check if the number of occurences in each map is the same for a given key
    let currentLetter = letters[i];

    if (charMap1[currentLetter] !== charMap2[currentLetter]) {
      return false; // If they don't occur the same amount of times, return false
    }
  }

  // If all letters occur the same number of times, return true
  return true;
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

function chunk(inputArray, chunkSize) {
  // Pseudocode:
  /*
  
    while there are still items left in the array(first parameter)
      add a chunk of length N(second parameter) that has been removed from our array to our result
  
  */
  const resultArray = [];

  // while (inputArray.length != 0) {
  // Keep going while there are still items left to remove
  // let chunk = inputArray.splice(0, chunkSize);
  // resultArray.push(chunk);

  //resultArray.push(inputArray.splice(0, chunkSize)); // 1 line
  //   let chunk = [];
  //   for (let i = 0; i < chunkSize; i++) {
  //     if (inputArray[0] !== undefined) {
  //       chunk.push(inputArray.shift());
  //     }
  //   }
  //   resultArray.push(chunk);
  // }

  /*
    [1,2,3,4,5,6,7,8,9,10,11,12,13] with chunks of 3

    i = 0, we want to grab [1,2,3]

    put array.slice(0, 3) into the result array

    i will now be 3

    [1,2,3,4,5,6,7,8,9,10,11,12,13]
           i
    
    i = 3, we want to grab [4,5,6]

    put array.slice(3, 6) into result array

    i will now be 6

    [1,2,3,4,5,6,7,8,9,10,11,12,13]
                 i

    i = 6, we want [7,8,9]

    put array.slice(6, 9) into result array

    i will now be 9
  
  
  
  */

  /*
    with chunk(array size 13, chunkSize 3)
    For an array of size 13 we can't go past index 12

    i = 0 grab 3 items
    i = 3 grab 3 items
    i = 6 grab 3 items
    i = 9 grab 3 items
    i = 12 grab 1 item
    i = 15 <- stop the loop


  */

  // We don't need to look at EVERY item, just every nth item where chunkSize is n
  for (let i = 0; i < inputArray.length; i += chunkSize) {
    let chunk = inputArray.slice(i, i + chunkSize);
    resultArray.push(chunk);
  }

  return resultArray;
}

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(inString) {
  // Split/reverse method:
  // let inStringCopy = inString
  //   .split('') // Split into characters
  //   .reverse() // Reverse the characters
  //   .join(''); // Make it a string again
  // if (inString === inStringCopy) {
  //   return true;
  // } else {
  //   return false;
  // }

  // Using pointers

  /*
  'a really long string this string is really long yllaer a'


*/

  let leftCounter = 0; // Counter for left side
  let rightCounter = inString.length - 1; // Counter for right side

  // While the counters haven't met
  while (leftCounter < rightCounter) {
    if (inString[leftCounter] !== inString[rightCounter]) {
      return false;
    } else {
      leftCounter++; // Move left counter to right
      rightCounter--; // Move right counter to left
    }
  }

  return true;
}

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // Remove the negative while it is still a number
  let isNegative = false;
  if (n < 0) {
    n *= -1;
    isNegative = true;
  }

  // Math.abs notation: Math.abs(-4); <- will result to 4
  //                    Math notation: | -4 | = 4
  // Flip the digits
  // Everything that is left in our number is only digits

  n = n
    .toString() // Convert to string
    .split('') // Convert to array
    .reverse() // Reverse array
    .join(''); // Convert to string

  n = parseInt(n); // Convert to integer
  console.log(n);
  // If the number was negative, multiply it by -1 and return it.
  // Else, multiply it by 1 and return it

  if (isNegative) {
    return n * -1;
  } else {
    return n;
  }
}
