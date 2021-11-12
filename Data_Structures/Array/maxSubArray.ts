function maxSubArray(numList: number[]): number {
  if (numList.length === 0) return null;

  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < numList.length; i++) {
    if (currentSum < 0) {
      currentSum = 0;
    }

    currentSum += numList[i];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5]));
