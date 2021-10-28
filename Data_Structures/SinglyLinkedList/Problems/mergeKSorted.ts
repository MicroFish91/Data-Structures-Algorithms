import { SinglyLinkedList } from "../singlyLinkedList";

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

// Core solution:
function mergeList(starterList) {
  while (starterList.length > 1) {
    for (let i = 0; i < starterList.length; i++) {
      if (starterList[i + 1] !== undefined) {
        starterList[i] = mergeTwo(
          starterList[i],
          starterList.splice(i + 1, 1)[0]
        );
      }
    }
  }
  starterList[0].print();
}

function mergeTwo(
  sllOne: SinglyLinkedList,
  sllTwo: SinglyLinkedList
): SinglyLinkedList {
  const sllList = [sllOne, sllTwo];
  let nodeOne, nodeTwo, currentList, otherList;

  if (sllOne.head.val < sllTwo.head.val) {
    nodeOne = sllOne.head;
    nodeTwo = sllTwo.head;
    currentList = 0;
    otherList = 1;
  } else {
    nodeOne = sllTwo.head;
    nodeTwo = sllOne.head;
    currentList = 1;
    otherList = 0;
  }

  while (nodeTwo !== null) {
    if (nodeOne.next === null) {
      nodeOne.next = nodeTwo;
      sllList[currentList].length += sllList[otherList].length;
      break;
    } else {
      if (nodeTwo.val <= nodeOne.next.val) {
        const tempCurrent = nodeTwo;
        const tempNext = nodeOne.next;

        nodeTwo = nodeTwo.next;
        nodeOne.next = tempCurrent;
        tempCurrent.next = tempNext;
        nodeOne = nodeOne.next;
        sllList[currentList].length++;
        sllList[otherList].length--;
      } else {
        nodeOne = nodeOne.next;
      }
    }
  }

  return sllList[currentList];
}

// main
const starterList = createSllList(8);
mergeList(starterList);

// ------------- Don't pay attention this part --------------
// Don't need to change, basically my customized starter code
// to set up and randomize the starting list
function createSllList(length: number): SinglyLinkedList[] {
  const list = [];
  for (let i = 0; i < length; i++) {
    const sortedSLL = createSortedSLL(Math.floor(Math.random() * 3) + 2);
    sortedSLL.print();
    list.push(sortedSLL);
  }
  return list;
}

function createSortedSLL(length: number): SinglyLinkedList {
  const list = [];
  const sll = new SinglyLinkedList();
  for (let i = 0; i < length; i++) {
    list.push(+(Math.random() * 100).toFixed(0));
  }

  list.sort((a, b) => a - b);

  list.forEach((elem) => {
    sll.push(elem);
  });

  return sll;
}
