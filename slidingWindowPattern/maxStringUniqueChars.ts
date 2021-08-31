/*
 * Same as previous but with max number of unique letters.
 * Assumes there are no spaces
 */

function maxStringUniqueChars(phrase: string): number | null {
  let maxChars = 0;
  let tempChars = 0;
  let currentWindow: { [letter: string]: number } = {};

  for (const letter of phrase) {
    if (!(letter in currentWindow)) {
      currentWindow[letter] = 1;
      tempChars++;
    } else {
      currentWindow = {};
      currentWindow[letter] = 1;
      tempChars = 1;
    }
    maxChars = Math.max(tempChars, maxChars);
  }

  return maxChars;
}

console.log(maxStringUniqueChars("hellothere")); // 6
