// Types
interface NodeProtoType {
  val: any;
  next: NodeProtoType;
}

interface SinglyLinkedListType {
  head: NodeProtoType;
  tail: NodeProtoType;
  val: any;
}

// Starts here

class NodeProto {
  public val: number;
  public next: NodeProtoType;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  public head: NodeProto;
  public tail: NodeProto;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: any): void {
    const newNode = new NodeProto(val);

    if (this.length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
  }

  pop(): NodeProto {
    let current = this.head;
    let pre = null;

    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current;
    }

    while (current.next) {
      pre = current;
      current = current.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    return current;
  }
}

let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(1);
singlyLinkedList.push(2);
singlyLinkedList.push(3);
singlyLinkedList.push(4);

console.log(singlyLinkedList);

console.log(singlyLinkedList.pop());
console.log(singlyLinkedList.pop());
console.log(singlyLinkedList.pop());
console.log(singlyLinkedList.pop());

console.log(singlyLinkedList);
