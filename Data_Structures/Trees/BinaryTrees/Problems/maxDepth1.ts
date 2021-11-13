import { BT, treeNode } from "../BinaryTree";

function maxDepth(root: treeNode) {
  if (!root) return 0;
  let max = -Infinity;

  function traverse(root: treeNode, height: number) {
    if (!root?.left && !root?.right) {
      max = Math.max(max, height);
    }
    if (root?.left) traverse(root.left, height + 1);
    if (root?.right) traverse(root.right, height + 1);
  }

  traverse(root, 1);
  return max;
}

const bt = new BT();

bt.root = new treeNode(3);

bt.root.left = new treeNode(9);
bt.root.right = new treeNode(20);

bt.root.right.left = new treeNode(15);
bt.root.right.right = new treeNode(7);

console.log(maxDepth(bt.root));
