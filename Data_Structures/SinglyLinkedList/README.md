# Singly Linked List

A singly linked list is a type of linked list that is unidirectional, that is, it can be traversed in only one direction from head to the last node (tail).

Each element in a linked list is called a node. A single node contains data and a pointer to the next node which helps in maintaining the structure of the list.

## Table of Contents

## Linked List vs Array

Arrays store elements in contiguous memory locations, resulting in easily calculable addresses for the elements stored and this allows faster access to an element at a specific index. Linked lists are less rigid in their storage structure and elements are usually not stored in contiguous locations, hence they need to be stored with additional tags giving a reference to the next element.

So Linked list provides the following two advantages over arrays

1. Dynamic size (The size of the arrays is fixed: So we must know the upper limit on the number of elements in advance; also, generally, the allocated memory is equal to the upper limit irrespective of the usage, and in practical uses, the upper limit is rarely reached).
2. Ease of insertion/deletion (Inserting a new element in an array of elements is expensive because room has to be created for the new elements and to create room existing elements have to be shifted)

Linked lists have the following drawbacks:

1. Random access is not allowed. We have to access elements sequentially starting from the first node. So we cannot do a binary search with linked lists.
2. Extra memory space for a pointer is required with each element of the list.
3. Arrays have better cache locality that can make a pretty big difference in performance.
4. It takes a lot of time in traversing and changing the pointers.
5. It will be confusing when we work with pointers.

## .push()

Insert a node to the end of the list.

Edgecase:

- If there is no head property on the list (so length 0), set the head and tail to be the newly created node

Base:

- create a new node using the value passed to the function
- set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
- increment the length by one

| Name | Best | Average | Worst | Space Complexity (Aux.) | Space Complexity (Gen.) |
| ---- | :--: | :-----: | :---: | :---------------------: | :---------------------: |
| push | O(1) |  O(1)   | O(1)  |          O(1)           |          O(n)           |

## .pop()

Remove a node from the end of the list

Edgecase:

- If there are no nodes in the list, return undefined

Base:

- Loop through the list until you reach the tail
- Set the next property of the second to last node to be null
- Set the tail to be the 2nd to last node
- Decrement the length of the list by 1
- Return the value of the node removed

Base:

| Name | Best | Average | Worst | Space Complexity (Aux.) | Space Complexity (Gen.) |
| ---- | :--: | :-----: | :---: | :---------------------: | :---------------------: |
| pop  | O(n) |  O(n)   | O(n)  |          O(1)           |          O(n)           |

## .shift()

Removes the first node and returns that removed node's value

Edgecase:

- If there are no nodes return undefined

Base:

- Store the current head property in a variable
- Set the head property to be the current head's next property
- Decrement the length by 1
- Return the value of the node removed

Base:

| Name  | Best | Average | Worst | Space Complexity (Aux.) | Space Complexity (Gen.) |
| ----- | :--: | :-----: | :---: | :---------------------: | :---------------------: |
| shift | O(1) |  O(1)   | O(1)  |          O(1)           |          O(n)           |

## .unshift()

Add a value to the front of the Linked List

Edgecase:

- If there is no head property on the list (length = 0), set the head and tail to be the newly created node

Base:

- Create a new node based on the value passed to the function
- Set the newly created node's next property to the current head
- Set the head property to the newly created node
- Increment the length by 1
- Return the list

Base:

| Name    | Best | Average | Worst | Space Complexity (Aux.) | Space Complexity (Gen.) |
| ------- | :--: | :-----: | :---: | :---------------------: | :---------------------: |
| unshift | O(1) |  O(1)   | O(1)  |          O(1)           |          O(n)           |

## .get()

Retrieve a node by its position (index) in the Linked List

Edgecase:

- If the index is less than 0 or greater than or equal to the length of the list, return null

Base:

- Loop through the list until you reach the index and return the node at the specified index
- Return the node

Base:

| Name | Best | Average | Worst | Space Complexity (Aux.) | Space Complexity (Gen.) |
| ---- | :--: | :-----: | :---: | :---------------------: | :---------------------: |
| get  | O(1) |  O(n)   | O(n)  |          O(1)           |          O(n)           |

## .set()

Change the value of a node based on it's position (index)

- Use get to the find the specified node
- If no node found (null), return false
- If the node is found, set the value of the node to what was passed and return true

| Name | Best | Average | Worst | Space Complexity (Aux.) | Space Complexity (Gen.) |
| ---- | :--: | :-----: | :---: | :---------------------: | :---------------------: |
| set  | O(1) |  O(n)   | O(n)  |          O(1)           |          O(n)           |

## .insert()

Add a node at a specific position (index)

Edgecase:

- If the index is less than 0 or greater than the length return false
- If the index is the same as the length, push a new node to the end of the list
- If the index is 0, unshift a new node to the start of the list

Base:

- Using the get method, access the node at the index - 1
- Set the next property on that node to be the new node
- Set the next property on the new node to be the previous next
- Increment the length
- Return true

| Name   | Best | Average | Worst | Space Complexity (Aux.) | Space Complexity (Gen.) |
| ------ | :--: | :-----: | :---: | :---------------------: | :---------------------: |
| insert | O(1) |  O(n)   | O(n)  |          O(1)           |          O(n)           |

## .remove()

Remove a node from a specific position (index)

Edgecases:

- If the index is less than zero or greater than the length, return undefined
- If the index is equal to the length - 1 => pop()
- If the index is 0 => shift()

Base:

- Using the get method, access the node at the index - 1
- Set the next property on that node to be the next of the next node
- Decrement the length
- Return the value of the node removed

| Name   | Best | Average | Worst | Space Complexity (Aux.) | Space Complexity (Gen.) |
| ------ | :--: | :-----: | :---: | :---------------------: | :---------------------: |
| remove | O(1) |  O(n)   | O(n)  |          O(1)           |          O(n)           |

# reverse()

Reverse a Linked List in place.

| Name    | Best | Average | Worst | Space Complexity (Aux.) | Space Complexity (Gen.) |
| ------- | :--: | :-----: | :---: | :---------------------: | :---------------------: |
| reverse | O(n) |  O(n)   | O(n)  |          O(1)           |          O(n)           |

![SLL Reverse Visual](https://i.giphy.com/media/d9TdpWRIDu9CXONF8P/giphy.gif)
