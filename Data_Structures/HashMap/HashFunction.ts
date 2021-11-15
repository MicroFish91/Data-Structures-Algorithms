// Sample hash function
function hash(key: string, tableLength: number): number {
  let hashTotal = 0;
  const PRIME_FACTOR = 31;

  for (let i = 0; i < Math.min(key.length, 57); i++) {
    const char = key[i];
    const charVal = char.charCodeAt(0);

    hashTotal = Math.abs((hashTotal * PRIME_FACTOR + charVal) % tableLength);
  }

  return hashTotal;
}

console.log(hash("whatup", 47));
console.log(hash("pink", 47));
console.log(hash("pie", 47));
console.log(hash("matt", 47));
console.log(hash("apple", 47));
console.log(hash("tape", 47));
console.log(hash("wham", 47));
