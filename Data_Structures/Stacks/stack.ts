//@ts-ignore
export class StackElement {
  public val: any;
  public next: StackElement;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

// Implementing a stack using SLL
// Here we use push and pop as basically sub-ins for shift and unshift
// This is because shift and unshift are O(1) for SLL and O(n) for classic push/pop implementation
export class Stack {
  public bottom: StackElement;
  public top: StackElement;
  public length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  isEmpty(): boolean {
    return this.top ? false : true;
  }

  push(val: any): number {
    const newElement = new StackElement(val);

    if (this.top === null) {
      this.top = newElement;
      this.bottom = this.top;
    } else {
      newElement.next = this.top;
      this.top = newElement;
    }

    return ++this.length;
  }

  pop(): any {
    const topNode = this.top;

    if (!this.top) return undefined;

    if (this.top === this.bottom) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }

    this.length--;
    return topNode.val;
  }

  peek(): any {
    return this.top?.val;
  }

  print() {
    let vals = [];
    let currentNode = this.top;

    while (currentNode) {
      vals.push(currentNode.val);
      currentNode = currentNode.next;
    }

    console.log(vals);
  }
}
