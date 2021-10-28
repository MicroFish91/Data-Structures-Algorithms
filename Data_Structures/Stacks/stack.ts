interface Stack {
  length: number;
  start: NodeProtoType;
  end: NodeProtoType;
}

interface NodeProtoType {
  val: any;
  next: NodeProtoType;
}
//@ts-ignore
class NodeProto {
  public val: any;
  public next: NodeProtoType;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

// Implementing a stack using SLL
// Here we use push and pop as basically sub-ins for shift and unshift
// This is because shift and unshift are O(1) for SLL and O(n) for classic push/pop implementation
class Stack {
  public length: number;
  public start: NodeProtoType;
  public end: NodeProtoType;

  constructor() {
    this.length = 0;
    this.start = null;
    this.end = null;
  }

  push(val: any) {
    const newNode = new NodeProto(val);

    if (this.length === 0) {
      this.start = newNode;
      this.end = newNode;
      return ++this.length;
    }

    const start = this.start;
    newNode.next = start;
    this.start = newNode;

    return ++this.length;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }

    const start = this.start;

    if (this.length === 1) {
      this.start = null;
      this.end = null;
      this.length--;
      return start.val;
    }

    this.start = this.start.next;
    this.length--;
    return start.val;
  }

  peek() {
    if (this.length === 0) {
      return null;
    }

    return this.start.val;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log("Peeking: ", stack.peek());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
