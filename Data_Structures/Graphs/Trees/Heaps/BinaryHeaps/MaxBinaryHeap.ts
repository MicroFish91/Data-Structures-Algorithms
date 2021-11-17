class MaxBinaryHeap {
  public values: number[];

  constructor() {
    this.values = [];
  }

  extractMax() {
    if (!this.values.length) return null;

    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];

    const extractedVal = this.values.pop();

    this.bubbleDown(0);
    return extractedVal;
  }

  bubbleDown(idx: number) {
    let childOne, childTwo, childOneIdx, childTwoIdx, currentVal, swapIdx;

    while (true) {
      currentVal = this.values[idx];
      childOneIdx = 2 * idx + 1;
      childTwoIdx = 2 * idx + 2;
      swapIdx = undefined;

      childOne =
        childOneIdx < this.values.length ? this.values[childOneIdx] : undefined;
      childTwo =
        childTwoIdx < this.values.length ? this.values[childTwoIdx] : undefined;

      // If no children, just swap to end
      if (!childOne && !childTwo) {
        [this.values[idx], this.values[this.values.length - 1]] = [
          this.values[this.values.length - 1],
          this.values[idx],
        ];
        return;
      }

      // If childOne exists, set to swapIdx
      if (childOne) {
        if (childOne > currentVal) swapIdx = childOneIdx;
      }

      // If childTwo exists and is greater, set to swapIdx
      if (childTwo) {
        if (childTwo > childOne && childTwo > currentVal) {
          swapIdx = childTwoIdx;
        }
      }

      if (!swapIdx) return;

      // Swap values at current idx and swapIdx
      [this.values[idx], this.values[swapIdx]] = [
        this.values[swapIdx],
        this.values[idx],
      ];

      // Set idx to old swapIdx
      idx = swapIdx;
    }
  }

  // [30, 29, 28, 27, 26, 25] 31
  //  0   1   2   3   4   5   6
  insert(val: number): number[] {
    this.values.push(val);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    if (this.values.length === 1) return;

    let currentIndex = this.values.length - 1;
    let parentIndex;

    while (true) {
      parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.values[currentIndex] > this.values[parentIndex]) {
        [this.values[currentIndex], this.values[parentIndex]] = [
          this.values[parentIndex],
          this.values[currentIndex],
        ];
      }
      if (!parentIndex) return;

      currentIndex = parentIndex;
    }
  }
}

const mbh = new MaxBinaryHeap();

mbh.insert(41);
mbh.insert(39);
mbh.insert(33);
mbh.insert(18);
mbh.insert(27);
mbh.insert(12);
mbh.insert(55);

console.log(mbh);
console.log(mbh.extractMax());
console.log(mbh);
console.log(mbh.extractMax());
console.log(mbh);
console.log(mbh.extractMax());
console.log(mbh);
console.log(mbh.extractMax());
console.log(mbh);
