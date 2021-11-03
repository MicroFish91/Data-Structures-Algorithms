# Binary Search Tree

![Binary Search Tree](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1200px-Binary_search_tree.svg.png)

A binary tree is a type of data structure for storing data such as numbers in an organized way. Binary search trees allow binary search for fast lookup, addition and removal of data items, and can be used to implement dynamic sets and lookup tables. The order of nodes in a BST means that each comparison skips about half of the remaining tree, so the whole lookup takes time proportional to the binary logarithm of the number of items stored in the tree. This is much better than the linear time required to find items by key in an (unsorted) array, but slower than the corresponding operations on hash tables.

In a BST the following conditions are satisfied:

- Every parent node has at most 2 children
- Every node to the left of a parent node is always less than the parents
- Every node to the right of a parent node is always greater than the parent

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

![Tree Traversal Methods](https://leetcode.com/articles/Figures/145_transverse.png)

### Breadth-First Search

- Create a queue and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as anything is in the queue
  - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  - If there is a left property on the node, enqueue it
  - If there is a right property on the node, enqueue it
- Return the variable that stores the values

## O(n)

Most of the time:

Insertion - O(log(n)); Searching - O(log(n))

If we get a long one-sided search tree it might be more linear.