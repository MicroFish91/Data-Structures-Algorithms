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
