import { SinglyLinkedList } from "../singlyLinkedList";

function hasCycle(sll: SinglyLinkedList): boolean {
  let fastPointer = sll.head;
  let slowPointer = sll.head;

  while (fastPointer?.next) {
    fastPointer = fastPointer?.next?.next;
    slowPointer = slowPointer?.next;

    if (!fastPointer || !slowPointer) {
      return false;
    }

    if (fastPointer === slowPointer) {
      return true;
    }
  }

  return false;
}

const sll = new SinglyLinkedList();

sll.push(3);
sll.push(2);
sll.push(0);
sll.push(-4);

// sll.head.next.next.next.next = sll.head.next;
// console.log(sll.head.next.next.next);
console.log(hasCycle(sll));
