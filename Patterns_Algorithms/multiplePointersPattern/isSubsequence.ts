/*
 * Write a function called isSubsequence which takes in two strings and
 * checks whether the characters in the first string form a subsequence
 * of the other characters in the second string.  In other words, the function
 * should check whether the characters in the first string appear somewhere
 * in the second string without their order changing
 */

function isSubsequence(phraseOne: string, phraseTwo: string): boolean {
  let leftPointer = 0;
  let rightPointer = 0;

  for (let i = 0; i < phraseTwo.length; i++) {
    if (phraseOne[leftPointer] === phraseTwo[rightPointer]) leftPointer++;
    if (leftPointer === phraseOne.length) return true;
    rightPointer++;
  }

  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false
console.log(isSubsequence("abc", "acbc")); // true
