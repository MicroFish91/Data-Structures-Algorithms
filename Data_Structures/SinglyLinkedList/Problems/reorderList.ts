import { SinglyLinkedList, sllNode } from "../singlyLinkedList";

function reorderList(list: SinglyLinkedList) {
  if (list.head === null || !list.head?.next || !list.head?.next?.next)
    return list;

  const middlePointer = findMiddle(list);
  const midReverseList = reverseMid(middlePointer, list);
  const mergedList = mergeInPlace(middlePointer, midReverseList);

  return mergedList;
}

function mergeInPlace(
  preMidPointer: sllNode,
  list: SinglyLinkedList
): SinglyLinkedList {
  let pointerOne = list.head;
  let pointerTwo = preMidPointer.next;
  let nextOne, nextTwo;

  preMidPointer.next = null;

  while (pointerOne.next) {
    nextOne = pointerOne.next;
    nextTwo = pointerTwo.next;
    pointerOne.next = pointerTwo;
    pointerTwo.next = nextOne;
    pointerOne = nextOne;
    pointerTwo = nextTwo;
  }

  pointerOne.next = pointerTwo;

  if (pointerTwo.next) {
    pointerOne.next = pointerTwo;
    list.tail = pointerTwo.next;
  } else {
    list.tail = pointerTwo;
  }

  return list;
}

//         prev   C      N
//          null                 T
//         FH                   BH
// (1) => (2) => (3) => (4) => (5) => null
// (1) => (2) => (5) => (4) => (3) => null
//                N      C     prev
function reverseMid(
  prevNode: sllNode,
  list: SinglyLinkedList
): SinglyLinkedList {
  const frontHalf = prevNode;
  let prev = null;
  let current = prevNode.next;
  let next = current.next;

  while (next) {
    current.next = prev;
    prev = current;
    current = next;
    next = current.next;
  }

  current.next = prev;
  frontHalf.next = current;

  return list;
}

// Returns the previous node to the middle node
function findMiddle(list: SinglyLinkedList): sllNode {
  let slowPointer = list.head;
  let fastPointer = list.head;
  let prev;

  while (fastPointer && fastPointer.next) {
    prev = slowPointer;
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return prev || slowPointer;
}

const sll = new SinglyLinkedList();

sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.push(5);
sll.push(6);
sll.push(7);

const newSLL = reorderList(sll);
newSLL.print();
console.log(newSLL);
