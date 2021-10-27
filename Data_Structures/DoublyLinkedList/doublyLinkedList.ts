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
}
