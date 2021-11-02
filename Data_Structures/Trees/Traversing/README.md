# Tree Traversal

Goal: Visit every node once.

## Breadth-First Search

![SLL Reverse Visual](https://upload.wikimedia.org/wikipedia/commons/4/46/Animated_BFS.gif)

- Create a queue and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as anything is in the queue
  - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  - If there is a left property on the node, enqueue it
  - If there is a right property on the node, enqueue it
- Return the variable that stores the values

- Depth-first search
  - In-order
  - Post-order
