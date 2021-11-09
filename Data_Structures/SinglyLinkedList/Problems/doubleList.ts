import { SinglyLinkedList, sllNode } from "../singlyLinkedList";

function doubleList(list: SinglyLinkedList): SinglyLinkedList {
  if (list.head === null) return list;

  let current = list.head;
  let currentVal, newNode, next;

  //  c      n
  // (1) => (2) => (3) => (4) => null
  //  (1)           c
  // (1) => (1) => (2) => (2) => (3) => (3) => (4) => (4) => null

  while (current) {
    next = current.next;
    currentVal = current.val;
    newNode = new sllNode(currentVal);
    newNode.next = next;
    current.next = newNode;
    current = current.next.next;
  }

  return list;
}

const sll = new SinglyLinkedList();

sll.push(1);

sll.print();
doubleList(sll);

sll.print();
console.log(sll);
