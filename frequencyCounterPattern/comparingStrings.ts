/*
 * Given two strings, write a function to determine if the second string
 * is an anagram of the first.  An anagram is a word, phrase, or name
 * formed by rearranging the letters of another, such as cinema, formed
 * from iceman.
 */

function validAnagram(wordOne: string, wordTwo: string): boolean {
  const mapOne: { [letterOne: string]: number } = {};

  if (wordOne.length !== wordTwo.length) {
    return false;
  }

  for (const letter of wordOne) {
    mapOne[letter] = ++mapOne[letter] || 1;
  }

  for (const letter of wordTwo) {
    if (!mapOne[letter]) {
      return false;
    } else {
      mapOne[letter]--;
    }
  }

  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
