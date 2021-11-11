function containsDuplicate(numList: number[]): boolean {
  const numMap = {};

  for (let i = 0; i < numList.length; i++) {
    let num = numList[i];
    if (numMap[num]) {
      return true;
    } else {
      numMap[num] = 1;
    }
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
