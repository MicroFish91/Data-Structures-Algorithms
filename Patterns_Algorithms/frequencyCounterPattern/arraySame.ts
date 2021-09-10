/*
 * Write a function called same which accepts two arrays. The function should return true if every value
 * in the array has its corresponding value squared in the second array.
 * The frequency of values must be the same.
 * O(n) implementation using object mapping vs O(n2) for nested looping
 */
function same(arr1: number[], arr2: number[]): boolean {
  const mapOne: { [arr1Val: string]: number } = {};
  const mapTwo: { [arr2Val: string]: number } = {};

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (const val of arr1) {
    mapOne[val] = ++mapOne[val] || 1;
  }
  for (const val of arr2) {
    mapTwo[val] = ++mapTwo[val] || 1;
  }

  for (const key in mapOne) {
    if (!(parseInt(key) ** 2 in mapTwo)) {
      return false;
    }
    if (mapOne[key] !== mapTwo[parseInt(key) ** 2]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 2, 5], [25, 4, 1, 4])); // true
console.log(same([1, 2, 2, 5], [1, 4, 16, 25])); // false
