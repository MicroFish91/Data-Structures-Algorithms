/*
 * Write a function called productOfArray which takes an array of
 * numbers and returns the product of them all.
 */
function productOfArray(numList: number[]): number {
  if (numList.length === 0) return 1;
  return numList[0] * productOfArray(numList.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
