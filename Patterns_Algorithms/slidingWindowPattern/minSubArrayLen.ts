/*
 * Write a function called minSubArrayLen which accepts two parameters -
 * an array of positive integers and a positive integer
 * This function should return the minimal length of a contiguous subarray
 * of which the sum is greater than or equal to the integer passed to the
 * function.  If there isn't one, return 0 instead.
 */
function minSubArrayLen(numList: number[], threshold: number): number {
  let leftBoundary = 0;
  let rightBoundary = 0;
  let rollingSum = numList[0];
  let smallestBoundary = Infinity;

  while (true) {
    if (rollingSum >= threshold) {
      rollingSum -= numList[leftBoundary];
      leftBoundary++;
    } else {
      rightBoundary++;
      if (rightBoundary >= numList.length) {
        break;
      }
      rollingSum += numList[rightBoundary];
    }

    if (
      rollingSum >= threshold &&
      rightBoundary - leftBoundary + 1 < smallestBoundary
    ) {
      smallestBoundary = rightBoundary - leftBoundary + 1;
    }
  }

  return smallestBoundary === Infinity ? 0 : smallestBoundary;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 --> [4, 3]
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 --> [5, 4]
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 --> [62]
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 1, 1], 5)); // 0
