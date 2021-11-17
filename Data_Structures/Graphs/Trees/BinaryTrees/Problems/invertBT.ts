import { BT, treeNode } from "../BinaryTree";

function invertBinary(root: treeNode) {
  [root.left, root.right] = [root.right, root.left];
  if (root?.left) invertBinary(root.left);
  if (root?.right) invertBinary(root.right);
}

const bt = new BT();

bt.root = new treeNode(4);

bt.root.left = new treeNode(2);
bt.root.right = new treeNode(7);

bt.root.left.left = new treeNode(1);
bt.root.left.right = new treeNode(3);

bt.root.right.left = new treeNode(6);
bt.root.right.right = new treeNode(9);

bt.root.right.right.left = new treeNode(10);

console.log(bt);
invertBinary(bt.root);
console.log(bt.root.right);
console.log(bt.root.left.left);
