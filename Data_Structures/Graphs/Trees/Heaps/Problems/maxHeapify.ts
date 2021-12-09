function buildMaxHeap(nodesArray: number[]): number[] {
  // i can start on the row above the bottom
  // we divide by 2 because excluding the bottom row means divide by 2
  // and we don't need to check leaf nodes for subArrays
  for (let i = Math.floor(nodesArray.length / 2); i >= 0; i--) {
    heapifySubtree(nodesArray, i);
  }

  return nodesArray;

  function heapifySubtree(subArray, i) {
    const leftChildIdx = 2 * i + 1;
    const rightChildIdx = 2 * i + 2;
    let largestIdx = i;

    // Check if any children are larger, store Idx in largest if so
    if (
      leftChildIdx <= subArray.length &&
      subArray[leftChildIdx] > subArray[largestIdx]
    ) {
      largestIdx = leftChildIdx;
    }

    if (
      rightChildIdx <= subArray.length &&
      subArray[rightChildIdx] > subArray[largestIdx]
    ) {
      largestIdx = rightChildIdx;
    }

    // If a child is larger, we swap
    if (largestIdx != i) {
      [subArray[i], subArray[largestIdx]] = [subArray[largestIdx], subArray[i]];

      // If we swapped, check that subtrees heap structure have not been broken
      heapifySubtree(subArray, largestIdx);
    }
  }
}

// Solution: [90, 57, 20, 30, 27, 17, 5, 2, 1, 3, 16]
console.log(buildMaxHeap([1, 16, 5, 30, 27, 17, 20, 2, 57, 3, 90]));
