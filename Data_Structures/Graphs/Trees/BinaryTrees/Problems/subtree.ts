import { BT, treeNode } from "../BinaryTree";

function isSubTree(root: treeNode, subRoot: treeNode): boolean {
  let same;
  let isSub = false;
  let currentSubroot = subRoot;

  function traverseMain(root) {
    if (root.val === currentSubroot.val) {
      same = true;
      traverseSub(currentSubroot, root);
      isSub = isSub || same;
      currentSubroot = subRoot;
    } else {
      if (root?.left) traverseMain(root.left);
      if (root?.right) traverseMain(root.right);
    }
  }

  function traverseSub(subRoot, mainRoot) {
    if ((!subRoot && mainRoot) || (!mainRoot && subRoot)) {
      same = false;
      return;
    }
    same = same && subRoot.val === mainRoot.val;
    if (subRoot?.left || mainRoot?.left)
      traverseSub(subRoot?.left, mainRoot?.left);
    if (subRoot?.right || mainRoot?.right)
      traverseSub(subRoot?.right, mainRoot?.right);
  }

  traverseMain(root);
  return isSub;
}

const main = new BT();
const sub = new BT();

main.root = new treeNode(3);

main.root.left = new treeNode(4);
main.root.right = new treeNode(5);

main.root.left.left = new treeNode(1);
main.root.left.right = new treeNode(2);

main.root.left.right.left = new treeNode(0);

sub.root = new treeNode(4);

sub.root.left = new treeNode(1);
sub.root.right = new treeNode(2);

console.log(isSubTree(main.root, sub.root));
