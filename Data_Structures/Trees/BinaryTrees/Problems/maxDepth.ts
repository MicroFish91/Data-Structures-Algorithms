import { BT, treeNode } from "../BinaryTree";

function maxDepth(root) {
  if (!root) {
    return 0;
  }

  return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right));
}

const bt = new BT();

bt.root = new treeNode(1);

bt.root.left = new treeNode(2);
bt.root.right = new treeNode(7);

bt.root.left.left = new treeNode(3);
bt.root.left.right = new treeNode(4);

bt.root.left.right.left = new treeNode(5);
bt.root.left.right.right = new treeNode(6);

console.log(maxDepth(bt.root));
