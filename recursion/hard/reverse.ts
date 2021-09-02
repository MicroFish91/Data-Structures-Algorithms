/*
 * Write a function called reverse which accepts a string and returns
 * a new string in reverse.
 */
function reverse(phrase: string): string {
  // "emosewa" = e + "mosewa"
  if (!phrase.length) return "";
  return (
    phrase[phrase.length - 1] + reverse(phrase.slice(0, phrase.length - 1))
  );
}

console.log(reverse("awesome")); // emosewa
console.log(reverse("rithmschool")); // loohcsmtir
