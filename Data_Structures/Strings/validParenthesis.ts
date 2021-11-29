function validParentheses(code: string) {
  const stack = [];
  const OPEN = {
    "{": true,
    "[": true,
    "(": true,
  };
  const CLOSE = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let i = 0; i < code.length; i++) {
    const letter = code[i];

    if (letter in OPEN) {
      stack.push(letter);
    }

    if (letter in CLOSE) {
      const lastOpen = stack.pop();

      if (lastOpen !== CLOSE[letter]) {
        return false;
      }
    }
  }

  return !stack.length ? true : false;
}

console.log(validParentheses("()[]{}")); // true
console.log(validParentheses("([)]")); // false
