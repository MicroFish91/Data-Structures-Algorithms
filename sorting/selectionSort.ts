/*
 * In bubble sort, the largest value will bubble to the top (end of the array).  Because
 * of this, we do not need to run through to the very end of the array each time.
 * After each pass we can reduce the length of the for loop by 1.
 * With selection sort we only do one swap per pass.
 */
function selectionSort(numList: number[]): number[] {
  let smallestIndex;
  let smallest = Infinity;
  let start = 0;

  while (start < numList.length - 1) {
    for (let i = start; i < numList.length; i++) {
      if (numList[i] < smallest) {
        smallest = numList[i];
        smallestIndex = i;
      }
    }
    [numList[start], numList[smallestIndex]] = [
      numList[smallestIndex],
      numList[start],
    ];
    start++;
    smallest = Infinity;
  }

  return numList;
}

console.log(selectionSort([6, 1, 89, 24, 43, 3, 1, 19]));
