function minWindowSubstring(s: string, t: string): string {
  if (s.length < t.length) return "";

  const tLetterMap = {};
  const stUnion = []; // queue
  let minString = s;
  let currentString = "";
  let pt1 = 0;

  // Set up t-string letter map
  for (let i = 0; i < t.length; i++) {
    const letter = t[i];
    tLetterMap[letter] = tLetterMap[letter] + 1 || 1;
  }

  // Look for minwindow substring in s
  for (let pt2 = 0; pt2 < s.length; pt2++) {
    const letter = s[pt2];

    currentString += letter;

    // Check if letter we added is part of t string
    if (tLetterMap[letter] !== undefined) {
      if (tLetterMap[letter] - 1 !== 0) {
        tLetterMap[letter] = tLetterMap[letter] - 1;
      }
      stUnion.push(letter);
    }

    // Check if all the letters in t are within s, if min, change to minstring
    if (stUnion.length === t.length) {
      // Is it a new minimum?
      if (
        Math.min(currentString.length, minString.length) ===
        currentString.length
      ) {
        minString = currentString;
      }

      // Can we shorten the string?
      while (true) {
        const letter2 = s[pt1];

        if (letter2 === stUnion[0]) {
          const oldLetter = stUnion.shift();
          tLetterMap[oldLetter] = tLetterMap[oldLetter] + 1;
        }

        currentString = currentString.slice(1);
        pt1++;

        if (stUnion.length >= t.length) {
          // Is it a new minimum?
          if (
            Math.min(currentString.length, minString.length) ===
            currentString.length
          ) {
            minString = currentString;
          }
        } else {
          break;
        }
      }
    }
  }

  return minString;
}

console.log(minWindowSubstring("ADOBECODEBANC", "ABC"));
console.log(minWindowSubstring("a", "a"));
console.log(minWindowSubstring("acbaxacba", "aa"));
console.log(minWindowSubstring("a", "aa"));
