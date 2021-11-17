# Binary Heaps

![Binary Heap](https://media.geeksforgeeks.org/wp-content/cdn-uploads/MinHeapAndMaxHeap.png)

A Heap is a special Tree-based data structure in which the tree is a complete binary tree; that is, all levels of the tree, except possibly the last one (deepest) are fully filled, and, if the last level of the tree is not complete, the nodes of that level are filled from left to right.

Generally, Heaps can be of two types:

- Max-Heap: In a Max-Heap the key present at the root node must be greatest among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.

- Min-Heap: In a Min-Heap the key present at the root node must be minimum among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.

Child -> Parent => Math.floor( (n-1) / 2 )
Parent -> Child => (2n+1) & (2n+2)

## Insertion

![Insertion](https://www.algolist.net/img/binary-heap-insertion-2.png)

Add a new element to the end of an array
Bubble up the new element. Bubbling is done as following: compare node's value with parent's value. If they are in wrong order, swap them.

## Deletion (extractMax)

The standard deletion operation on Heap is to delete the element present at the root node of the Heap. That is if it is a Max Heap, the standard deletion operation will delete the maximum element and if it is a Min heap, it will delete the minimum element.

Process:

- Replace the root or element to be deleted by the last element.
- Pop from the values property, so you can return value at end
- Have the new root or element sink down to the correct spot
  - Your parent index starts at 0 (the root)
  - Find the index of the left child: 2 \* index + 1
  - Find the index of the right child: 2 \* index + 1
  - If the left or right child is greater than the element... swap. If both are larger, swap with the largest child
  - The child index you swapped to now becomes the new parent index
  - Keep looping and swapping until neither child is larger than the element
  - Return the old root

## Min Binary Heap

See Priority Queue implementation for an example

## Time Complexity

Insertion - O (log n)
Removal - O (log n)
Search - O(n)
