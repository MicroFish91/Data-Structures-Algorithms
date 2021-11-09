// Decode String

/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the
encoded_string inside the square brackets is being
repeated exactly k times. Note that k is guaranteed
to be a positive integer.

You may assume that the input string is always valid;
No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not
contain any digits and that digits are only for those repeat
numbers, k. For example, there won't be input like 3a or 2[4].

Constraints:

1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].
*/

// console.log("Z".codePointAt(0));

// a-A, Z-Z
// 65-97      122

// 0 - 9
// 48 - 57

// [ ]
// 91, 93

import { Stack } from "../stack";

function decodeString(s: string) {
  const stack = new Stack();

  let newString = "";
  let tempNum = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let charCode = char.codePointAt(0);

    // Encounter a number
    if (charCode >= 48 && charCode <= 57) {
      tempNum += char;
    } else if (char === "[") {
      stack.push(tempNum);
      stack.push(char);
      tempNum = "";
    } else if (char === "]") {
      stack.push(buildStackString(stack));
    } else {
      // Encounter a letter or symbol
      stack.push(char);
    }
  }

  while (!stack.isEmpty()) {
    newString = stack.pop() + newString;
  }

  return newString;
}

function buildStackString(stack: Stack) {
  let newString = "";
  let tempString = "";
  let k = 1;

  while (stack.peek() !== "[" && !stack.isEmpty()) {
    tempString = stack.pop() + tempString;
  }

  if (stack.peek() === "[") {
    stack.pop();
  } else {
    return "Bracket Mismatch.";
  }

  // pop number
  k = parseInt(stack.pop());

  for (let i = 0; i < k; i++) {
    newString += tempString;
  }

  return newString;
}

console.log(decodeString("zcvcxzbcxz3[a2[c]]"));
