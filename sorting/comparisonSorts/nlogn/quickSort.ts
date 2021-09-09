/*
 * For this version of the quicksort algorithm, we specifically chose to
 * start on the first index; the efficiency of the algorithm heavily relies
 * on how well the pivot is chosen.  Different algorithms may employ:
 * Always pick first element as pivot.
 * Always pick last element as pivot (implemented below)
 * Pick a random element as pivot.
 * Pick median as pivot.
 */

function quickSort(
  numList: number[],
  leftIdx: number = 0,
  rightIdx: number = numList.length - 1
): number[] {
  if (leftIdx < rightIdx) {
    const pivotIdx = pivot(numList, leftIdx, rightIdx);

    quickSort(numList, leftIdx, pivotIdx - 1);
    quickSort(numList, pivotIdx + 1, rightIdx);
  }

  return numList;
}

// Since we chose to pivot from the start, we set that value as our pivot element
// and compare the rest of the subarray against that value
// if higher, we do nothing, if lower, we increment pivotIdx and swap the current
// element with the element in the pivotIdx
// at the end we finally swap the chosen pivot element with whatever is currently
// at the pivot index
function pivot(
  numList: number[],
  start: number = 0,
  end: number = numList.length - 1
): number {
  const swap = (numList: number[], idxOne: number, idxTwo: number): void => {
    [numList[idxOne], numList[idxTwo]] = [numList[idxTwo], numList[idxOne]];
  };

  const pivotElem = numList[start];
  let pivotIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivotElem > numList[i]) {
      pivotIdx++;
      swap(numList, pivotIdx, i);
    }
  }

  swap(numList, start, pivotIdx);

  return pivotIdx;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])); // 3
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
