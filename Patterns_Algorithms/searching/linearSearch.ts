/*
 * This function accepts an array and a value.  Loop through the array
 * and check if the current array element is equal to the value.  If it
 * is, return the first index at which the element is found.  If the value is
 * not found, return -1
 */
function linearSearch(elementList: any[], element: any): number {
  for (let i = 0; i < elementList.length; i++) {
    if (elementList[i] === element) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 2, 5, 7, 2, 19, 21], 7)); // 3
console.log(linearSearch([100, 200], 300)); // -1
