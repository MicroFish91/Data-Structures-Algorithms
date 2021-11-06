import { SinglyLinkedList } from "../singlyLinkedList";

function removeNthFromEnd(list: SinglyLinkedList, idx: number) {
  let previous, next;
  let pointerOne = list.head;
  let pointerTwo = list.head;
  let counter = 0;

  // Sets up idx distance at beginning between pt1 and pt2
  while (true) {
    if (counter === idx) {
      break;
    }

    if (!pointerOne) {
      return null;
    }

    pointerOne = pointerOne.next;
    counter++;
  }

  // move pointers to end of list while maintaining distance
  while (pointerOne.next) {
    previous = pointerTwo;
    pointerOne = pointerOne.next;
    pointerTwo = pointerTwo.next;
  }

  // Rewire the sll after removing the node
  next = pointerTwo.next;
  previous.next = next;

  return pointerTwo.val;
}

const sll = new SinglyLinkedList();

sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.push(5);

sll.print();

console.log(removeNthFromEnd(sll, 2));
sll.print();
