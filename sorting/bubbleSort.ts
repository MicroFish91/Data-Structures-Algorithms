/*
 * In bubble sort, the largest value will bubble to the top (end of the array).  Because
 * of this, we do not need to run through to the very end of the array each time.
 * After each pass we can reduce the length of the for loop by 1.
 * With bubble sort we are potentially doing multiple swaps per pass.
 */

function bubbleSort(numList: number[]): number[] {
  let swapped;
  let length = numList.length - 1;

  while (true) {
    swapped = false;
    for (let i = 0; i < length; i++) {
      if (numList[i] > numList[i + 1]) {
        [numList[i], numList[i + 1]] = [numList[i + 1], numList[i]];
        swapped = true;
      }
    }

    length--;

    if (!swapped) {
      return numList;
    }
  }
}

console.log(bubbleSort([6, 1, 89, 24, 43, 3, 1, 19]));
