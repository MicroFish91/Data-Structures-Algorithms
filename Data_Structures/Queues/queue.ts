class QueueElement {
  public val: any;
  public next: QueueElement;

  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  public front: QueueElement;
  public back: QueueElement;
  public length: number;

  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  // SLL push
  enqueue(val: any): number {
    const newElement = new QueueElement(val);

    if (this.front === null) {
      this.front = newElement;
    } else {
      this.back.next = newElement;
    }

    this.back = newElement;
    return ++this.length;
  }

  // SLL shift
  dequeue(): any {
    if (this.front === null) {
      return undefined;
    }

    const removedNode = this.front;

    if (this.front === this.back) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
    }

    this.length--;
    return removedNode.val;
  }
}
