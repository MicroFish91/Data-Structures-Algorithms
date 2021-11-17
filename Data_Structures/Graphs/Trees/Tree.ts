class treeNode {
  public val: any;
  public children: treeNode[];

  constructor(val: any) {
    this.val = val;
    this.children = [];
  }
}

class Tree {
  public root: treeNode;

  constructor() {
    this.root = null;
  }
}
