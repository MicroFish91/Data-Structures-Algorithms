function buyAndSell(prices: number[]): number {
  let max = -Infinity;
  let min = Infinity;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }

  return max;
}

console.log(buyAndSell([7, 1, 5, 3, 6, 4])); //5
console.log(buyAndSell([7, 6, 4, 3, 1])); //0
