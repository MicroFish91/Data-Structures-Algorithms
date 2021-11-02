import { Queue } from "../../Queues/queue";
import { BST, bstNode } from "../BinarySearchTrees/BST";

function breadthFirstSearch(tree: BST): bstNode[] {
  const bfsResults = [];
  const queue = new Queue();
  let currentNode;

  queue.enqueue(tree.root);

  while (queue.length) {
    currentNode = queue.dequeue();
    bfsResults.push(currentNode.val);
    if (currentNode?.left) queue.enqueue(currentNode.left);
    if (currentNode?.right) queue.enqueue(currentNode.right);
  }

  return bfsResults;
}

const bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(breadthFirstSearch(bst));
