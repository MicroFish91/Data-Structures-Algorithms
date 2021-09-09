// Get the value of a number at a certain digit location
function getDigit(num: number, position: number): number {
  return Math.floor(num / 10 ** position) % 10;
}

// Count the number of digits in a number
function digitCount(num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Go through a list and count the highest number of occurring digits
function mostDigits(numList: number[]): number {
  let maxDigits = 0;
  for (let i = 0; i < numList.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(numList[i]));
  }

  return maxDigits;
}

function radixSort(numList: number[]): number[] {
  const largestDigits = mostDigits(numList);

  for (let i = 0; i < largestDigits; i++) {
    const sortingBuckets: number[][] = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < numList.length; j++) {
      const bucketIndex = getDigit(numList[j], i);
      sortingBuckets[bucketIndex].push(numList[j]);
    }
    numList = [].concat(...sortingBuckets);
  }

  return numList;
}

// console.log(digitCount(1234)); // 4
// console.log(digitCount(123)); // 3

// console.log(getDigit(12345, 0)); // 5
// console.log(getDigit(12345, 1)); // 4
// console.log(getDigit(12345, 2)); // 3
// console.log(getDigit(12345, 3)); // 2
// console.log(getDigit(12345, 4)); // 1
// console.log(getDigit(12345, 5)); // 0

// console.log(mostDigits([23, 567, 89, 1223432, 90])); // 7
console.log(radixSort([6, 1, 89, 24, 43, 3, 1, 19])); // 7
