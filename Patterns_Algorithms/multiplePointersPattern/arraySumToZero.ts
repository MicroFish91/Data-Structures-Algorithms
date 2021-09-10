/*
 * Write a function called sumZero which accepts a sorted array
 * of integers.  The function should find the first pair where
 * the sum is 0.  Return an array that includes both values that
 * sum to zero or undefined if a pair does not exist.
 */
function sumZero(sorted: number[]): number[] | void {
  let leftPointer = 0;
  let rightPointer = sorted.length - 1;

  while (leftPointer < rightPointer) {
    const sum = sorted[leftPointer] + sorted[rightPointer];
    if (sum === 0) {
      return [sorted[leftPointer], sorted[rightPointer]];
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
