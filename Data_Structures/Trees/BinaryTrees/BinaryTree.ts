export class treeNode {
  public val: number;
  public left: treeNode;
  public right: treeNode;

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export class BT {
  public root: treeNode;

  constructor() {
    this.root = null;
  }
}
