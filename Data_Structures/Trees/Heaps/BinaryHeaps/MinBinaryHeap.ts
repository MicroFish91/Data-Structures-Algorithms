// Parent => Child => 2n + 1 | 2n + 2
// Child => Parent => Math.floor( (n - 1) / 2)
class MinBinaryHeap {
  public values: number[];

  constructor() {
    this.values = [];
  }

  insert(val: number): number[] {
    this.values.push(val);

    let parentIdx, currentVal, parentVal;
    let currentIdx = this.values.length - 1;

    while (true) {
      if (currentIdx === 0) {
        return this.values;
      }

      parentIdx = Math.floor((currentIdx - 1) / 2);
      currentVal = this.values[currentIdx];
      parentVal = this.values[parentIdx];

      if (currentVal < parentVal) {
        [this.values[currentIdx], this.values[parentIdx]] = [
          this.values[parentIdx],
          this.values[currentIdx],
        ];
        currentIdx = parentIdx;
      } else {
        return this.values;
      }
    }
  }

  extractMin(): number {
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];

    const min = this.values.pop();
    this.bubbleDown(0);
    return min;
  }

  bubbleDown(idx: number): boolean {
    let currentIdx = idx;
    let currentVal, childOneIdx, childOneVal, childTwoIdx, childTwoVal, swapIdx;

    while (true) {
      if (currentIdx >= this.values.length) {
        return false;
      }

      swapIdx = undefined;
      currentVal = this.values[currentIdx];
      childOneIdx = 2 * currentIdx + 1;
      childTwoIdx = 2 * currentIdx + 2;

      if (childOneIdx < this.values.length) {
        childOneVal = this.values[childOneIdx];
        if (childOneVal < currentVal) {
          swapIdx = childOneIdx;
        }
      }

      if (childTwoIdx < this.values.length) {
        childTwoVal = this.values[childTwoIdx];
        if (childTwoVal < childOneVal) {
          swapIdx = childTwoIdx;
        }
      }

      if (!swapIdx) return true;

      [this.values[currentIdx], this.values[swapIdx]] = [
        this.values[swapIdx],
        this.values[currentIdx],
      ];

      currentIdx = swapIdx;
    }
  }
}

const minbh = new MinBinaryHeap();

console.log(minbh.insert(10));
console.log(minbh.insert(15));
console.log(minbh.insert(13));
console.log(minbh.insert(1));
console.log(minbh.insert(4));
console.log(minbh.insert(2));
console.log(minbh.insert(5));

console.log(minbh.extractMin());
console.log(minbh);
console.log(minbh.extractMin());
console.log(minbh);
