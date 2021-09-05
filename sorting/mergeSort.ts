// Merge-sort (log(n)) * O(n + m)
function mergeSort(numList: number[]): number[] {
  if (numList.length <= 1) return numList;

  const middle = Math.floor(numList.length / 2);
  const left = mergeSort(numList.slice(0, middle));
  const right = mergeSort(numList.slice(middle));

  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));

// Function that merges two sorted arrays (merge + sort)
// O(n + m)
function merge(listOne: number[], listTwo: number[]): number[] {
  let merged = [];
  let pointerOne = 0;
  let pointerTwo = 0;

  while (true) {
    if (listOne[pointerOne] <= listTwo[pointerTwo]) {
      merged.push(listOne[pointerOne]);
      pointerOne++;
    } else {
      merged.push(listTwo[pointerTwo]);
      pointerTwo++;
    }

    if (pointerOne === listOne.length) {
      merged = merged.concat(listTwo.slice(pointerTwo));
      break;
    }

    if (pointerTwo === listTwo.length) {
      merged = merged.concat(listOne.slice(pointerOne));
      break;
    }
  }

  return merged;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
