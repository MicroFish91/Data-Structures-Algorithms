import { BT, treeNode } from "../BinaryTree";

function isValidBST(root: treeNode): boolean {
  let isBST = true;
  function traverse(root) {
    if (root?.left) {
      isBST = isBST && root.left.val < root.val;
      traverse(root.left);
    }
    if (root?.right) {
      isBST = isBST && root.right.val > root.val;
      traverse(root.right);
    }
  }
  traverse(root);
  return isBST;
}

const bt1 = new BT();
const bt2 = new BT();

bt1.root = new treeNode(2);

bt1.root.left = new treeNode(1);
bt1.root.right = new treeNode(3);

bt2.root = new treeNode(5);

bt2.root.left = new treeNode(1);
bt2.root.right = new treeNode(4);

bt2.root.right.left = new treeNode(3);
bt2.root.right.right = new treeNode(6);

console.log(isValidBST(bt1.root));
console.log(isValidBST(bt2.root));
