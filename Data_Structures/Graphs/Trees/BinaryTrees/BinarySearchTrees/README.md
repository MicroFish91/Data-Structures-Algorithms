# Binary Search Tree

A binary tree is a type of non-linear data structure for storing data such as numbers in an organized way. Binary search trees allow binary search for fast lookup, addition and removal of data items, and can be used to implement dynamic sets and lookup tables. The order of nodes in a BST means that each comparison skips about half of the remaining tree, so the whole lookup takes time proportional to the binary logarithm of the number of items stored in the tree. This is much better than the linear time required to find items by key in an (unsorted) array, but slower than the corresponding operations on hash tables.

In a BST the following conditions are satisfied:

- Every parent node has at most 2 children
- Every node to the left of a parent node is always less than the parents
- Every node to the right of a parent node is always greater than the parent

Binary search trees are a more specific version of a binary tree in which every node left must be less and every node to the right must be greater than. In contrast, a simple binary tree just needs to satisfy having 2 or less children to each parent.

## Insert

Inserting a node into the BST.

- Create a new node
- Starting at the root
  - Check if there is a root, if not - the root now becomes that new node
  - If there is a root, check if the value of the new node is greater than or less than the value of the root
  - If it is greater
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the left property
  - If it is less
    - Check to see if there is a ndoe to the left
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the left property

## Finding

Similar to Insert

## Tree Traversal

### Breadth-First Search

![DFS Pre](https://media.geeksforgeeks.org/wp-content/cdn-uploads/2009/06/tree12.gif)

Breadth-First or Level Order Traversal: 1 2 3 4 5

Left -> Right
Top -> Bottom

Breadth-first search (BFS) is an algorithm for searching a tree data structure for a node that satisfies a given property. It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level. Extra memory, usually a queue, is needed to keep track of the child nodes that were encountered but not yet explored.

Plan:

- Create a queue and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as anything is in the queue
  - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  - If there is a left property on the node, enqueue it
  - If there is a right property on the node, enqueue it
- Return the variable that stores the values

## Depth-First Search

Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.

## Depth-First Search Preorder

![DFS Pre](https://media.geeksforgeeks.org/wp-content/cdn-uploads/2009/06/tree12.gif)

Preorder (Root, Left, Right) : 1 2 4 5 3

Top -> Bottom
Left -> Right

Plan: recursion

## Depth-First Search Postorder

![DFS Post](https://media.geeksforgeeks.org/wp-content/cdn-uploads/2009/06/tree12.gif)

Postorder (Left, Right, Root) : 4 5 2 3 1

Bottom -> Top
Left -> Right

Plan: recursion

## Depth-First Search InOrder

![DFS Post](https://media.geeksforgeeks.org/wp-content/cdn-uploads/2009/06/tree12.gif)

Inorder (Left, Root, Right) : 4 2 5 1 3

Plan: recursion

## O(n)

Most of the time:

Insertion - O(log(n)); Searching - O(log(n))

If we get a long one-sided search tree it might be more linear.

### BFS vs DFS

- O(n) time complexity is same between the two

- Space complexity differs between the two based on the shape of the tree.
  - Horizontally heavy trees have heavier space complexity with BFS.
  - Vertically heavy trees have heavier space complexity with DFS.
