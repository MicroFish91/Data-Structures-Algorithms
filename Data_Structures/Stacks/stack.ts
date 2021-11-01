//@ts-ignore
class StackElement {
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
class Stack {
  public bottom: StackElement;
  public top: StackElement;
  public length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val: any): number {
    const newElement = new StackElement(val);

    if (this.top === null) {
      this.top = newElement;
      this.bottom = newElement;
      return ++this.length;
    }

    const originalTop = this.top;
    this.top = newElement;
    this.top.next = originalTop;

    return ++this.length;
  }

  pop(): any {
    if (this.top === null) {
      return undefined;
    }

    const returnNode = this.top;

    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
      this.length--;
      return returnNode.val;
    }

    const nextNode = this.top.next;
    this.top = nextNode;
    this.length--;
    return returnNode.val;
  }

  peek(): any {
    return this.top.val;
  }
}
