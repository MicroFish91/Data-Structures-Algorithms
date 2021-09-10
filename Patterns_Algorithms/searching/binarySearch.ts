/*
 * Write a function called binarySearch which accepts a sorted array and
 * a value and returns the index at which the value exists.  Otherwise
 * return -1
 */
function binarySearch(numList: number[], num: number): number {
  let leftPointer = 0;
  let rightPointer = numList.length - 1;

  while (leftPointer <= rightPointer) {
    const middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    const middleVal = numList[middlePointer];

    if (middleVal === num) {
      return middlePointer;
    } else if (middleVal > num) {
      rightPointer = middlePointer - 1;
    } else {
      leftPointer = middlePointer + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); //1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
