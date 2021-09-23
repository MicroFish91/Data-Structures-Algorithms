## Stacks

A stack is an abstract data type that serves as a collection of elements, with two main principal operations:

- Push, which adds an element to the collection, and
- Pop, which removes the most recently added element that was not yet removed.
- Additionally, a peek operation may give access to the top without modifying the stack.

Stacks are a last-in-first-out (LIFO) data structure.

Where stacks are used:

1. Function invocations
2. Undo/Redo
3. Routing History

Array vs SLL implementation considerations:

![Comparison](https://miro.medium.com/max/700/1*Lnb0IARMGORn_c-gYf-24g.png)

In particular, arrays are contiguous memory blocks, so large chunks of them will be loaded into the cache upon first access. This makes it comparatively quick to access future elements of the array. Linked lists on the other hand aren't necessarily in contiguous blocks of memory, and could lead to more cache misses, which increases the time it takes to access them.

Memory consumption is more in Linked Lists when compared to arrays element for element (because each node contains a pointer in linked list and it requires extra memory). For arrays, memory is allocated during the compile time (Static memory allocation) so there is the potential for more wasted space.
