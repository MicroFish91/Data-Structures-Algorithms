import { BT, treeNode } from "../BinaryTree";

function sameTree(rootOne, rootTwo) {
  let same = true;

  function traverseCompare(rootOne, rootTwo) {
    if ((rootOne && !rootTwo) || (rootTwo && !rootOne)) {
      same = false;
    }
    same = same && rootOne?.val === rootTwo?.val;
    if (rootOne?.left || rootTwo?.left)
      traverseCompare(rootOne?.left, rootTwo?.left);
    if (rootOne?.right || rootTwo?.right)
      traverseCompare(rootOne?.right, rootTwo?.right);
  }

  traverseCompare(rootOne, rootTwo);
  return same;
}

// function sameTree(treeOne, treeTwo) {
//   if (!treeOne && !treeTwo) {
//     return true;
//   }
//   if (!treeOne || !treeTwo || treeOne.val !== treeTwo.val) {
//     return false;
//   }
//   return (
//     sameTree(treeOne.left, treeTwo.left) &&
//     sameTree(treeOne.right, treeTwo.right)
//   );
// }

const bt1 = new BT();
const bt2 = new BT();

bt1.root = new treeNode(1);

bt1.root.left = new treeNode(2);
bt1.root.right = new treeNode(7);

bt1.root.left.left = new treeNode(3);
bt1.root.left.right = new treeNode(4);

bt1.root.left.right.left = new treeNode(5);
bt1.root.left.right.right = new treeNode(6);

bt2.root = new treeNode(1);

bt2.root.left = new treeNode(2);
bt2.root.right = new treeNode(7);

bt2.root.left.left = new treeNode(3);
bt2.root.left.right = new treeNode(4);

bt2.root.left.right.left = new treeNode(5);
bt2.root.left.right.right = new treeNode(6);

console.log(sameTree(bt1.root, bt2.root));
