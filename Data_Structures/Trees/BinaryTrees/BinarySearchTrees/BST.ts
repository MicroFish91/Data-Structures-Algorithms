import { Queue } from "../../../Queues/queue";

export class bstNode {
  public val: any;
  public left: bstNode;
  public right: bstNode;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export class BST {
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

  bfs(): any[] {
    const bfsResults = [];
    const queue = new Queue();
    let currentNode;

    queue.enqueue(this.root);

    while (queue.length) {
      currentNode = queue.dequeue();
      bfsResults.push(currentNode.val);
      if (currentNode?.left) queue.enqueue(currentNode.left);
      if (currentNode?.right) queue.enqueue(currentNode.right);
    }

    return bfsResults;
  }

  dfsPreOrder(): any[] {
    const dfsResults = [];
    function traverse(node: bstNode) {
      dfsResults.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return dfsResults;
  }

  dfsInOrder(): any[] {
    const dfsResults = [];
    function traverse(node: bstNode) {
      if (node.left) traverse(node.left);
      dfsResults.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return dfsResults;
  }

  dfsPostOrder(): any[] {
    const dfsResults = [];
    function traverse(node: bstNode) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      dfsResults.push(node.val);
    }
    traverse(this.root);
    return dfsResults;
  }
}

//        10
//     6     15
//   3  8  13  20

const bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(13);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(bst.dfsInOrder());
