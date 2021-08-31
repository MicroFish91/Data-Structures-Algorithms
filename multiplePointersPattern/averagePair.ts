/*
 * Write a function called averagePair.  Given a sorted array of integers
 * and a target average, determine if there is a pair of values in the array
 * where the average of the pair equals the target average.
 */
function averagePair(numList: number[], avg: number): boolean {
  let leftPointer = 0;
  let rightPointer = numList.length - 1;

  while (leftPointer < rightPointer) {
    const rollingAvg = (numList[leftPointer] + numList[rightPointer]) / 2;
    if (rollingAvg === avg) {
      return true;
    } else if (rollingAvg > avg) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
