export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const letterMap = {};

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    letterMap[letter] = letterMap[letter] + 1 || 1;
  }

  for (let i = 0; i < t.length; i++) {
    const letter = t[i];

    if (!letterMap[letter]) return false;
    letterMap[letter] = letterMap[letter] - 1;
  }

  return true;
}

// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"));
