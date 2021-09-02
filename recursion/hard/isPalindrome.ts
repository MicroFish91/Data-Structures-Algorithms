/*
 * Write a function called isPalindrome which returns true if the string
 * passed to it is a palindrome (reads the same forward and backward).
 * Otherwise, return false
 */
function isPalindrome(phrase: string): boolean {
  // tac o cat
  if (!phrase.length) return true;
  const firstEqualsLast = phrase[0] === phrase[phrase.length - 1];
  const newPhrase = phrase.slice(1, phrase.length - 1);
  return firstEqualsLast && isPalindrome(newPhrase);
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
