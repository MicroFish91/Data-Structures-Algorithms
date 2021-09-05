## Bubble Sort

Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.

![Bubble Sort Visual](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

| Name            | Best |    Average    |     Worst     | Memory |
| --------------- | :--: | :-----------: | :-----------: | :----: |
| **Bubble sort** |  n   | n<sup>2</sup> | n<sup>2</sup> |   1    |

## Insertion Sort

Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages:

- Efficient for (quite) small data sets, much like other quadratic sorting algorithms
- More efficient in practice than most other simple quadratic (i.e., O(n2)) algorithms such as selection sort or bubble sort
- Efficient for data sets that are already substantially sorted

![Insert Sort Visual](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

| Name               | Best |    Average    |     Worst     | Memory |
| ------------------ | :--: | :-----------: | :-----------: | :----: |
| **Insertion sort** |  n   | n<sup>2</sup> | n<sup>2</sup> |   1    |

## Selection Sort

Selection sort is an in-place comparison sorting algorithm. It has an O(n2) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity and has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.

![Selection Sort Visual](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)

| Name               |     Best      |    Average    |     Worst     | Memory |
| ------------------ | :-----------: | :-----------: | :-----------: | :----: |
| **Selection sort** | n<sup>2</sup> | n<sup>2</sup> | n<sup>2</sup> |   1    |
