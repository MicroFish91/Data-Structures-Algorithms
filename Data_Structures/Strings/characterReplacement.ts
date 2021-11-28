function characterReplacement(s: string, k: number): number {
  const letterMap = {};
  let p1 = 0;
  let currentMax = 0;
  let max = 0;

  for (let p2 = 0; p2 < s.length; p2++) {
    const letter = s[p2];
    letterMap[letter] = letterMap[letter] + 1 || 1;
    currentMax = Math.max(currentMax, letterMap[letter]);

    if (p2 - p1 + 1 - currentMax > k) {
      const letter2 = s[p1];
      letterMap[letter2] = letterMap[letter2] - 1;
      p1++;
    }

    max = Math.max(max, p2 - p1 + 1);
  }

  return max;
}

console.log(characterReplacement("ABAB", 2)); // 4
console.log(characterReplacement("AABABBA", 2)); // 5
console.log(characterReplacement("CBACCBAAAABAAB", 2)); // 8
