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

## pop()

Remove a node from the end of the list.

Edgecase:

- If the head property is null (length = 0), return undefined
- If the length is 1, set the head and the tail to be null

Base:

- Store the current tail in a variable to return later
- Update the tail to be the previous node
- Set the new tail's next to null
- Decrement the length
- Return the value removed

| Name | Best | Average | Worst | Space Complexity (Aux.) | Space Complexity (Gen.) |
| ---- | :--: | :-----: | :---: | :---------------------: | :---------------------: |
| pop  | O(1) |  O(1)   | O(1)  |          O(1)           |          O(n)           |

## shift()

Removes the first node and returns that removed node's value

Edgecase:

- If the head property is null (length = 0), return undefined
- If the length is 1, set head & tail to null, decrement length, return node's value

Base:

- Store the current head in a variable to return later
- Update the head to be the next of the old head
- Set the head's prev property to null
- Decrement the length
- Return the old head's value

| Name  | Best | Average | Worst | Space Complexity (Aux.) | Space Complexity (Gen.) |
| ----- | :--: | :-----: | :---: | :---------------------: | :---------------------: |
| shift | O(1) |  O(1)   | O(1)  |          O(1)           |          O(n)           |

## unshift()

Add a value to the front of the Linked List

Edgecase:

- If length = 0, set head and tail to be the new node

Base:

- Create a new node with the value passed to the function
- Set the prev property on the head to be the new node
- Set the new node's next to be the head of the list
- Update the head to be the new node
- Increment and return the length

| Name    | Best | Average | Worst | Space Complexity (Aux.) | Space Complexity (Gen.) |
| ------- | :--: | :-----: | :---: | :---------------------: | :---------------------: |
| unshift | O(1) |  O(1)   | O(1)  |          O(1)           |          O(n)           |

## get() \*

Retrieve a node from the Linked List based on its position (index)

Edgecase:

- If the index is less than 0 or greater than or equal to the length, return undefined

Base:

- If the index is less than or equal to half the length:
  - Loop through the list starting from the head towards the middle
  - Return node when found
- If the index is greater than half the length of the list:
  - Loop through the list starting from the tail towards the middle
  - Return node when found

| Name | Best |  Average   |   Worst    | Space Complexity (Aux.) | Space Complexity (Gen.) |
| ---- | :--: | :--------: | :--------: | :---------------------: | :---------------------: |
| get  | O(1) | O(n) (n/2) | O(n) (n/2) |          O(1)           |          O(n)           |

## set() \*

Change the value of a node based on it's position (index), return boolean

Edgecase:

- If get returns undefined, return false

Base:

- Create a variable that is the result of the get method at the index passed
- If a value is returned, update the node's value with the value passed
- Return true

| Name | Best | Average | Worst | Space Complexity (Aux.) | Space Complexity (Gen.) |
| ---- | :--: | :-----: | :---: | :---------------------: | :---------------------: |
| set  | O(1) |  O(n)   | O(n)  |          O(1)           |          O(n)           |
