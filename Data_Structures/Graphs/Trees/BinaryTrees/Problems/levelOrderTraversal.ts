import { Queue } from "../../../Queues/queue";
import { BT, treeNode } from "../BinaryTree";

function levelOrder(root: treeNode): number[] {
  const order = [];
  const queue = new Queue();
  queue.enqueue(root);

  while (queue.length) {
    let currentNode = queue.dequeue();
    order.push(currentNode.val);
    if (currentNode?.left) queue.enqueue(currentNode.left);
    if (currentNode?.right) queue.enqueue(currentNode.right);
  }

  return order;
}

const bt = new BT();

bt.root = new treeNode(3);

bt.root.left = new treeNode(9);
bt.root.right = new treeNode(20);

bt.root.right.left = new treeNode(15);
bt.root.right.right = new treeNode(7);

console.log(levelOrder(bt.root));
