import { BT, treeNode } from "../BinaryTree";

function minDepth(root: treeNode) {
  if (!root) return 0;
  let min = Infinity;

  function traverse(root: treeNode, height: number) {
    if (!root?.left && !root?.right) {
      min = Math.min(min, height);
    }
    if (root?.left) traverse(root.left, height + 1);
    if (root?.right) traverse(root.right, height + 1);
  }

  traverse(root, 1);
  return min;
}

const bt = new BT();

bt.root = new treeNode(3);

bt.root.right = new treeNode(9);
bt.root.left = new treeNode(20);

bt.root.left.left = new treeNode(15);
bt.root.left.right = new treeNode(7);

console.log(minDepth(bt.root));
