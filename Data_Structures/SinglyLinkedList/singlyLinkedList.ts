export class sllNode {
  public val: any;
  public next: sllNode;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList {
  public head: sllNode;
  public tail: sllNode;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Description: Place value at end of linked list
  // Input: any value, Output: none or length
  push(val: any): void {
    const newNode = new sllNode(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
  }

  // Description pops off the node at the end of the linked list
  // Input: None, Output: Return popped node's value | undefined
  pop(): sllNode {
    let current = this.head;
    let pre = null;

    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current.val;
    }

    while (current.next) {
      pre = current;
      current = current.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    return current.val;
  }

  // Description: Removes the first node and returns that removed node
  // Input: None, Output: current node at head
  shift(): sllNode {
    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      this.tail = null;
    }

    const front = this.head;
    this.head = this.head.next;
    this.length--;
    return front;
  }

  // Description: add a value to the front of the linkedList
  // Input: any value, Output: returns the updated linkedList
  unshift(val: any): SinglyLinkedList {
    const newNode = new sllNode(val);
    const front = this.head;

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    this.head = newNode;
    this.head.next = front;
    this.length++;
    return this;
  }

  // Description: See what node occupies the current index
  // Input: index number, Output: Node
  get(index: number): sllNode {
    let current = this.head;

    if (index < 0 || index > this.length - 1) {
      return null;
    }

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  // Description: Update the value of an existing node
  // Input: (index number, new value); Output: true or false
  set(index: number, val: any): boolean {
    const updateNode = this.get(index);

    if (!updateNode) {
      return false;
    }

    updateNode.val = val;
    return true;
  }

  // Description: Inserts the inputted value as a node at the target index
  // Input: (index number, any value), Output: true or false
  insert(index: number, val: any): boolean {
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

    const newNode = new sllNode(val);
    const nodeBefore = this.get(index - 1);
    const nodeAfter = nodeBefore.next;
    newNode.next = nodeAfter;
    nodeBefore.next = newNode;
    this.length++;

    return true;
  }

  // Description: Removes the node at the target index
  // Input: index number, Output: Node
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

    const pre = this.get(index - 1);
    const removed = pre.next;
    const next = removed.next;

    pre.next = next;
    this.length--;

    return removed.val;
  }

  reverse(): SinglyLinkedList {
    if (this.head === null || this.head === this.tail) return this;

    [this.head, this.tail] = [this.tail, this.head];

    let prev = null;
    let current = this.tail;
    let next;

    while (next !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

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

const sll = new SinglyLinkedList();

sll.push(1);
sll.push(2);

console.log(sll);
