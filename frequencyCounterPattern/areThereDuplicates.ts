/*
 * Write a function called areThereDuplicates which accepts a variable number
 * of arguments and checks whether there are any duplicates among the arguments
 * passed in.
 */
function areThereDuplicates(...args: number[] | string[]): boolean {
  const argMap: { [arg: string]: number } = {};

  for (const arg of args) {
    if (argMap[arg]) {
      return true;
    }
    argMap[arg] = 1;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
