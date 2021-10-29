interface NodeProtoType {
  val: any;
  next: NodeProtoType;
  prev: NodeProtoType;
}

interface DoublyLinkedListType {
  head: NodeProtoType;
  tail: NodeProtoType;
  length: number;
}

// @ts-ignore
class NodeProto {
  public val: any;
  public next: NodeProtoType;
  public prev: NodeProtoType;

  constructor(val: any) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  public head: NodeProtoType;
  public tail: NodeProtoType;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: any): number {
    const newNode = new NodeProto(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      return ++this.length;
    }

    const prev = this.tail;
    newNode.prev = prev;
    this.tail = newNode;
    prev.next = this.tail;
    return ++this.length;
  }

  pop(): any {
    if (this.length === 0) {
      return undefined;
    }

    const current = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const { prev } = this.tail;
      prev.next = null;
      this.tail = prev;
    }

    this.length--;
    return current.val;
  }

  shift(): any {
    if (this.length === 0) {
      return undefined;
    }

    const current = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current.val;
    }

    this.head = current.next;
    current.prev = null;
    this.length--;
    return current.val;
  }

  unshift(val: any): number {
    const newNode = new NodeProto(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      return ++this.length;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    return ++this.length;
  }

  get(index: number): NodeProtoType {
    if (index < 0 || index >= this.length) return undefined;

    if (index < this.length / 2) {
      let counter = 0;
      let start = this.head;

      while (counter !== index) {
        start = start.next;
        counter++;
      }

      return start;
    } else {
      let counter = this.length - 1;
      let start = this.tail;

      while (counter !== index) {
        start = start.prev;
        counter--;
      }

      return start;
    }
  }

  set(val: any, index: number): boolean {
    const getNode = this.get(index);
    if (!getNode) return false;
    getNode.val = val;
    return true;
  }

  insert(val: any, index: number): boolean {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(val);
      return true;
    }

    if (index === this.length) {
      this.push(val);
      return true;
    }

    const newNode = new NodeProto(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    prevNode.next = newNode;
    nextNode.prev = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;

    this.length++;

    return true;
  }

  remove(index: number): any {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    const nextNode = removedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.length--;

    return removedNode.val;
  }

  reverse(): DoublyLinkedList {
    if (this.length <= 1) return this;

    let current = this.head;
    let next;

    while (current !== null) {
      next = current.next;
      [current.next, current.prev] = [current.prev, current.next];
      current = next;
    }

    [this.head, this.tail] = [this.tail, this.head];

    return this;
  }

  print(): void {
    const list = [];
    let current = this.head;

    while (current !== null) {
      list.push(current.val);
      current = current.next;
    }

    console.log(list);
  }
}
