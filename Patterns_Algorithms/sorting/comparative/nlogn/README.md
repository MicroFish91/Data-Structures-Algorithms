## Merge Sort

Conceptually, a merge sort works as follows:

Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.

Time Complexity: The depth of the tree is log(n), and merging the sorted arrays on each row takes O(n + m), we can round to n\*log(n).

Space Complexity: At any given time, only one branch of the tree is being explored. The "call stack" represents this branch. At the
bottom of the callstack we have an array of size n, then n/2, then n/4, etc.

n + n/2 + n/4 + n/8 .... approaches at most 2n => so at any given time we have at most O(2n) ~ O(n)

![Merge Sort Visual](https://upload.wikimedia.org/wikipedia/commons/e/e6/Merge_sort_algorithm_diagram.svg)

| Name           |     Best      |    Average    |     Worst     | Memory |
| -------------- | :-----------: | :-----------: | :-----------: | :----: |
| **Merge sort** | n&nbsp;log(n) | n&nbsp;log(n) | n&nbsp;log(n) |   n    |

## Quick Sort

QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around this value. There are many different versions of quickSort that pick pivot in different ways.

- Always pick first element as pivot.
- Always pick last element as pivot (implemented below)
- Pick a random element as pivot.
- Pick median as pivot.

The key process in quickSort is pivot() or partition(). Given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.

Quicksort is usually done in-place with O(log(n)) stack space

Best case we have log(n) divisions, with O(n) partitions per level.

Worst case (if we continually choose the minimum or maximum value), we have n partitions, with O(n) partitions per level.

![Quick Sort Visual](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

| Name           |     Best      |    Average    |     Worst     | Memory |
| -------------- | :-----------: | :-----------: | :-----------: | :----: |
| **Quick sort** | n&nbsp;log(n) | n&nbsp;log(n) | n<sup>2</sup> | log(n) |
