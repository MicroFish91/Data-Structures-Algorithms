/*
 * Write a function called sameFrequency.  Given two positive integers, find out
 * if the two numbers have the same frequency of digits.
 */
function sameFrequency(numOne: number, numTwo: number): boolean {
  const valOne = numOne.toString();
  const valTwo = numTwo.toString();
  const mapOne: { [val: string]: number } = {};

  if (valOne.length !== valTwo.length) {
    return false;
  }

  for (const val of valOne) {
    mapOne[val] = ++mapOne[val] || 1;
  }

  for (const val of valTwo) {
    if (!mapOne[val]) {
      return false;
    } else {
      mapOne[val]--;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
