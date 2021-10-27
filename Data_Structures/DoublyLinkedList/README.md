# Doubly Linked List

A doubly linked list is a type of linked list that is bidirectional, that is, it can be traversed in both directions from head to the last node (tail).

Each element in a linked list is called a node. A single node contains data and a pointer to the next node and the previous node which helps in maintaining the structure of the list.

## Table of Contents

## push()

Insert a node to the end of the list.

Edgecase:

- If the head property is null (length = 0), set the head and tail to be the newly created node

Base:

- Create a new node with the value passed
- Set the tail to be the newly created node
- Set the previous property on the newly created node to be the old tail
- Increment the length
- Return the length

| Name | Best | Average | Worst | Space Complexity (Aux.) | Space Complexity (Gen.) |
| ---- | :--: | :-----: | :---: | :---------------------: | :---------------------: |
| push | O(1) |  O(1)   | O(1)  |          O(1)           |          O(n)           |
