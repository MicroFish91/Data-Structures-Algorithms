class bstNode {
  public val: any;
  public left: bstNode;
  public right: bstNode;

  constructor(val) {
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
}

const bst = new BST();

bst.root = new bstNode(10);
bst.root.left = new bstNode(7);
bst.root.right = new bstNode(15);
