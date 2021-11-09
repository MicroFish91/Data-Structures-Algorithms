import { Stack } from "../stack";

// https://leetcode.com/problems/valid-parentheses/

/*
  Given a string containing just the characters
  '(', ')', '{', '}', '[' and ']',
  determine if the input string is valid.

  An input string is valid if:

  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
*/

function validParenthesis(code: string): boolean {
  if (!code) {
    return true;
  }

  const stack = new Stack();
  const open = {
    "(": true,
    "{": true,
    "[": true,
  };
  const closed = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < code.length; i++) {
    let codeUnit = code[i];

    if (codeUnit in open) {
      stack.push(codeUnit);
    }

    if (closed[codeUnit]) {
      if (closed[codeUnit] === stack.peek()) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return !stack.length ? true : false;
}

console.log(validParenthesis("({}[{}])"));
console.log(validParenthesis("({}[{])"));
