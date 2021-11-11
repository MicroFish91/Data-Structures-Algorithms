/*

Given an integer array nums, return an array answer such that answer[i] is equal
to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

*/

// [2, 3, 4, 5]
// left:
// [1, 2, 6, 24]
// right:
// [60, 20, 5, 1]

function productExceptSelf(numList: number[]): number[] {
  const left = [];
  const right = [];
  const answer = [];
  let prefix;
  let suffix;

  for (let i = 0; i < numList.length; i++) {
    if (prefix === undefined) {
      prefix = 1;
    } else {
      prefix *= numList[i - 1];
    }
    left[i] = prefix;
  }

  for (let i = 0; i < numList.length; i++) {
    if (suffix === undefined) {
      suffix = 1;
    } else {
      suffix *= numList[numList.length - i];
    }
    right[numList.length - 1 - i] = suffix;
  }

  for (let i = 0; i < numList.length; i++) {
    answer[i] = left[i] * right[i];
  }

  return answer;
}

console.log(productExceptSelf([2, 3, 4, 5])); // [60, 40, 30, 24]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
