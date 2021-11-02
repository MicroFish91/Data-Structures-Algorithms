class bstNode {
  public val: any;
  public left: bstNode;
  public right: bstNode;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  public root: bstNode;

  constructor() {
    this.root = null;
  }

  insert(val: number): BST {
    const newNode = new bstNode(val);
    let currentNode = this.root;

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    while (true) {
      if (val > currentNode.val) {
        if (currentNode?.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          return this;
        }
      } else if (val < currentNode.val) {
        if (currentNode?.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          return this;
        }
      } else {
        return undefined;
      }
    }
  }

  contains(val: number): boolean {
    let currentNode = this.root;

    if (!this.root) {
      return false;
    }

    while (true) {
      if (val === currentNode.val) {
        return true;
      } else if (val > currentNode.val) {
        if (currentNode?.right) {
          currentNode = currentNode.right;
        } else {
          return false;
        }
      } else if (val < currentNode.val) {
        if (currentNode?.left) {
          currentNode = currentNode.left;
        } else {
          return false;
        }
      }
    }
  }
}

const bst = new BST();

bst.insert(5);
bst.insert(7);
bst.insert(3);
bst.insert(9);
bst.insert(6);
bst.insert(10);

console.log(bst.contains(0));
