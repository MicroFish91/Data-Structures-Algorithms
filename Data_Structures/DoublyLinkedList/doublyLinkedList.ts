interface NodoProtoType {
  val: any;
  next: NodeProtoType;
  previous: NodeProtoType;
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
}
