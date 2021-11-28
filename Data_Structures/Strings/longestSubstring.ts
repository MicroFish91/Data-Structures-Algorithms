// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Given a string s, find the length of the longest substring without repeating characters.

function longestSubstring(phrase: string): number {
  let letterMap = {};
  let max = 0;
  let count = 0;

  for (let i = 0; i < phrase.length; i++) {
    const letter = phrase[i];

    if (!letterMap[letter]) {
      letterMap[letter] = 1;
      count++;
    } else {
      max = Math.max(max, count);
      letterMap = {
        [letter]: 1,
      };
      count = 1;
    }
  }

  return Math.max(max, count);
}

console.log(longestSubstring("abcabcbb")); // 3
console.log(longestSubstring("bbbbb")); // 1
console.log(longestSubstring("pwwkew")); // 3
console.log(longestSubstring("")); // 0
