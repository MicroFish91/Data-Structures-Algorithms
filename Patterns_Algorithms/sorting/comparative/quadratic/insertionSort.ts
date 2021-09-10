/*
 * Insertion Sort
 */
function insertionSort(numList: number[]): number[] {
  // Loop starting from here:
  // [6, 1, 89, 24, 43, 3, 1, 19]
  //     X
  for (let i = 1; i < numList.length; i++) {
    const elementToSort = numList[i];
    let elementToSortIndex = i;
    let sortedArrayIndex = i - 1;

    // Ex: If we are here in the for loop:
    // [_, _, _, _, _, _, _, _]\
    //              X
    // We loop backwards and check X against previous 4 values to figure out
    // where to insert.  Swap positions each time if X is less than the number.
    while (sortedArrayIndex >= 0) {
      if (elementToSort >= numList[sortedArrayIndex]) {
        break;
      } else {
        [numList[sortedArrayIndex], numList[elementToSortIndex]] = [
          numList[elementToSortIndex],
          numList[sortedArrayIndex],
        ];
        elementToSortIndex = sortedArrayIndex;
      }
      sortedArrayIndex--;
    }
  }

  return numList;
}

// Alternate
function insertionSort2(numList: number[]): number[] {
  for (let i = 1; i < numList.length; i++) {
    const elementToSort = numList[i];

    for (let j = i - 1; j >= 0 && numList[j] > elementToSort; j--) {
      numList[j + 1] = numList[j];
      numList[j] = elementToSort;
    }
  }

  return numList;
}

console.log(insertionSort([6, 1, 89, 24, 43, 3, 1, 19]));
console.log(insertionSort2([6, 1, 89, 24, 43, 3, 1, 19]));
