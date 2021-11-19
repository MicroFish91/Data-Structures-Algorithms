// Naive priority queue for quick dijkstras implementation

export class NaiveQueue {
  public values: { node: string; weight: number }[];

  constructor() {
    this.values = [];
  }

  enqueue(node: string, weight: number) {
    this.values.push({ node, weight });
    this._sort();
  }

  dequeue() {
    return this.values.shift();
  }

  _sort() {
    this.values.sort((a, b) => a.weight - b.weight);
  }
}
