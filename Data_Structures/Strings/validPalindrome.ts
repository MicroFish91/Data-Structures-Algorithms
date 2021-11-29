// function validPalindrome(s: string) {
//   let newString = "";

//   for (let i = 0; i < s.length; i++) {
//     const letter = s[i];
//     newString = letter + newString;
//   }

//   return newString === s ? true : false;
// }

export function validPalindrome(s: string) {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
}

console.log(validPalindrome("amanaplanacanalpanama"));
console.log(validPalindrome("raceacar"));
