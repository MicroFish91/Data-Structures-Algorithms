import { BST, bstNode } from "../BinarySearchTrees/BST";

function deleteNode(root: bstNode, key: number): bstNode {
  if (!root) return null;

  // Rebuild the part of the tree in-place..

  // Traverse left
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  }
  // Traverse right
  else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  }
  // We found a matching value/key
  else {
    // If our key is a leaf node
    if (!root?.left && !root?.right) {
      return null;
    }
    // No left child, but has a right child
    else if (!root.left && root?.right) {
      root = root.right;
    }
    // No right child, but has a left child
    else if (root?.left && !root?.right) {
      root = root.left;
    }
    // Has 2 children
    else {
      const successor = findSuccessor(root.right);
      root.val = successor.val;
      root.right = deleteNode(root.right, root.val);
    }
  }

  return root;

  function findSuccessor(node: bstNode) {
    while (node?.left) {
      node = node.left;
    }
    return node;
  }
}

const bstOne = new BST([5, 3, 6, 2, 4, null, 7]);
const bstTwo = new BST([]);

console.log(deleteNode(bstOne.root, 3));
console.log(bstOne.dfsInOrder());
