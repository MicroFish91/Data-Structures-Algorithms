/*
 * Write a function called findLongestSubstring which accepts a string
 * and returns the length of the longest substring with all distinct
 * characters.
 */
function findLongestSubstring(phrase: string): number {
  let start = 0;
  let maxLength = 0;
  const charLocation: { [char: string]: number } = {};

  if (!phrase.length) {
    return 0;
  }

  for (let i = 0; i < phrase.length; i++) {
    const currentChar = phrase[i];

    if (charLocation[currentChar] !== undefined) {
      start = Math.max(start, charLocation[currentChar]);
    }

    maxLength = Math.max(maxLength, i - start + 1);

    charLocation[currentChar] = i + 1;
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
