import { BT, treeNode } from "../BinaryTree";

function kthSmallest(root: treeNode, k: number): number {
  let count = 0;
  let kthElement;

  function traverse(root) {
    if (kthElement) return;
    if (root?.left) traverse(root.left);
    count++;
    if (count === k) {
      kthElement = root.val;
      return;
    }
    if (root?.right) traverse(root.right);
  }
  traverse(root);
  return kthElement;
}

const bt1 = new BT();
const bt2 = new BT();

bt1.root = new treeNode(3);

bt1.root.left = new treeNode(1);
bt1.root.right = new treeNode(4);

bt1.root.left.right = new treeNode(2);

bt2.root = new treeNode(5);

bt2.root.left = new treeNode(3);
bt2.root.right = new treeNode(6);

bt2.root.left.left = new treeNode(2);
bt2.root.left.right = new treeNode(4);

bt2.root.left.left.left = new treeNode(1);

console.log(kthSmallest(bt1.root, 1));
console.log(kthSmallest(bt2.root, 3));
