class PriorityElement {
  public val: any;
  public priority: number;

  constructor(val: any, priority: number) {
    this.val = val;
    this.priority = priority;
  }
}

// Min binary heap
class PriorityQueue {
  public values: PriorityElement[];

  constructor() {
    this.values = [];
  }

  enqueue(val: any, priority: number): PriorityElement[] {
    const newVal = new PriorityElement(val, priority);
    this.values.push(newVal);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    if (this.values.length === 1) return;

    let currentIdx = this.values.length - 1;
    let currentPrio = this.values[currentIdx].priority;
    let parentIdx, parentPrio;

    while (true) {
      parentIdx = Math.floor((currentIdx - 1) / 2);
      parentPrio = this.values[parentIdx].priority;

      if (currentPrio < parentPrio) {
        [this.values[currentIdx], this.values[parentIdx]] = [
          this.values[parentIdx],
          this.values[currentIdx],
        ];

        currentIdx = parentIdx;
        currentPrio = this.values[currentIdx].priority;
      } else {
        return;
      }

      if (!parentIdx) return;
    }
  }

  // extractMin()
  dequeue(): PriorityElement {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop();

    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];

    const extractedVal = this.values.pop();
    this.bubbleDown(0);
    return extractedVal;
  }

  bubbleDown(idx: number) {
    let currentPrio, childOneIdx, childTwoIdx, childOne, childTwo, swapIdx;

    while (true) {
      currentPrio = this.values[idx].priority;
      childOneIdx = 2 * idx + 1;
      childTwoIdx = 2 * idx + 2;
      swapIdx = undefined;

      childOne =
        childOneIdx < this.values.length ? this.values[childOneIdx] : undefined;
      childTwo =
        childTwoIdx < this.values.length ? this.values[childTwoIdx] : undefined;

      if (!childOne && !childTwo) return;

      if (childOne) {
        if (childOne.priority < currentPrio) swapIdx = childOneIdx;
      }

      if (childTwo) {
        if (childTwo.priority < childOne.priority) swapIdx = childTwoIdx;
      }

      if (!swapIdx) return;

      [this.values[idx], this.values[swapIdx]] = [
        this.values[swapIdx],
        this.values[idx],
      ];

      idx = swapIdx;
    }
  }
}

const pq = new PriorityQueue();

pq.enqueue("3", 3);
pq.enqueue("1", 1);
pq.enqueue("4", 4);
pq.enqueue("2", 2);
pq.enqueue("5", 5);

console.log(pq.values);

console.log(pq.dequeue());
console.log(pq.values);
console.log(pq.dequeue());
console.log(pq.values);
console.log(pq.dequeue());
console.log(pq.values);
console.log(pq.dequeue());
console.log(pq.values);
console.log(pq.dequeue());
console.log(pq.values);
console.log(pq.dequeue());
console.log(pq.values);
