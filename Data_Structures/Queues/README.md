## Queues

A queue is an abstract data structure, somewhat similar to Stacks. Unlike stacks, a queue is open at both its ends. One end is always used to insert data (enqueue) and the other is used to remove data (dequeue). Queue follows First-In-First-Out methodology, i.e., the data item stored first will be accessed first.

Queues are a first-in-first-out (FIFO) data structure.

Operations (usually utilize a SLL with enqueue as push, and dequeue as shift to keep O(1) time) -

enqueue() − add (store) an item to the queue.
dequeue() − remove (access) an item from the queue.

Optional methods:

peek() − Gets the element at the front of the queue without removing it.
isfull() − Checks if the queue is full.
isempty() − Checks if the queue is empty.

Uses:

- Waiting in line to join a game lobby
- Background Tasks
- Printing
