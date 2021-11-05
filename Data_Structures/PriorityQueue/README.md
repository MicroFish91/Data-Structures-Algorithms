# Priority Queue

A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

## Naive Implementation O(n)

Use a list to store all elements

[priority: 3, priority: 1, priority: 2, priority: 5, priority: 4]

Iterate over entire thing to find the highest priority element

## Better Implementation O(log(n))

Using a binary heap to store and pull elements.

Insertion - O (log n)
Removal - O (log n)
Search - O(n)

## Dealing with Same Priority

In the real world, there would likely be additional logic to determine how to prioritize 2 elements with the same priority - additional considerations such as resources required/available, length of time waiting, etc.
