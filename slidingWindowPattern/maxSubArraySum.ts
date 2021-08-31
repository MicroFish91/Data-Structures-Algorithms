/*
 * Write a function called maxSubarraySum which accepts an array of
 * integers and a number called n.  The function should calculate the
 * maximum sum of n consectuvei elements in the array.
 */
function maxSubarraySum(numList: number[], numLength: number): number | null {
  let tempSum = 0;
  let maxSum = 0;

  if (!numList.length || numLength > numList.length) {
    return null;
  }

  for (let i = 0; i < numLength; i++) {
    maxSum += numList[i];
  }

  tempSum = maxSum;

  for (let i = numLength; i < numList.length; i++) {
    tempSum += numList[i] - numList[i - numLength];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
