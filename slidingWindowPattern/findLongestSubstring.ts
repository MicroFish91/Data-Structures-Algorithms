/*
 * Write a function called findLongestSubstring which accepts a string
 * and returns the length of the longest substring with all distinct
 * characters.
 */
function findLongestSubstring(phrase: string): number {
  let maxLength = 1;
  let leftPointer = 0;
  let rightPointer = 0;
  let leftChar = "";
  let rightChar = "";
  let shouldMoveRight = true;
  let charMap: { [char: string]: number } = {};

  if (!phrase.length) {
    return 0;
  }

  charMap[phrase[0]] = 1;

  while (true) {
    if (shouldMoveRight) {
      rightPointer++;

      if (rightPointer === phrase.length) {
        break;
      }

      rightChar = phrase[rightPointer];

      if (charMap[rightChar]) {
        shouldMoveRight = false;
      } else {
        charMap[rightChar] = 1;
        maxLength = Math.max(maxLength, rightPointer - leftPointer + 1);
      }
    } else {
      leftChar = phrase[leftPointer];

      while (leftChar !== rightChar) {
        delete charMap[phrase[leftPointer]];
        leftPointer++;
        leftChar = phrase[leftPointer];
      }

      leftPointer++;
      leftChar = "";

      shouldMoveRight = true;
    }
  }

  return maxLength;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); //1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
