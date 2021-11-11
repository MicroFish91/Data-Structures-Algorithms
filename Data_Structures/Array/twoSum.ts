// O(n2)
// function twoSum(list: number[], target: number): number[] {
//   for (let x = 0; x < list.length; x++) {
//     for (let y = x + 1; y < list.length; y++) {
//       const sum = list[x] + list[y];

//       if (sum === target) {
//         return [x, y];
//       }
//     }
//   }

//   return null;
// }

// O(n)    O(2n)
function twoSum(list: number[], target: number): number[] {
  const numMap = {};

  for (let i = 0; i < list.length; i++) {
    const num = list[i];
    numMap[num] = i;
  }

  for (let i = 0; i < list.length; i++) {
    const diff = target - list[i];
    if (numMap[diff]) {
      return [i, numMap[diff]];
    }
  }

  return null;
}

console.log(twoSum([2, 11, 7, 15], 9));
