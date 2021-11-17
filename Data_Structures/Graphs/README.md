# Graphs

A graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph.

A graph can be represented in mainly two ways. They are: (1) Adjacency List, (2) Adjacency Matrix

## Graph Terms

- Vertex: a node
- Edge: A connection between nodes
- Weighted/Unweighted: values assigned to distances between vertices
- Directed/Undirected: directions assigned to distances between vertices

## Adjacency Matrix/Adjacency List

![Undirected graph](https://media.geeksforgeeks.org/wp-content/uploads/20200609203724/graph.png)

1. Adjacency List: An adjacency list is an array consisting of the address of all the linked lists. The first node of the linked list represents the vertex and the remaining lists connected to this node represents the vertices to which this node is connected. This representation can also be used to represent a weighted graph. The linked list can slightly be changed to even store the weight of the edge.

In the adjacency list representation, a graph is represented as an array of linked list. The index of the array represents a vertex and each element in its linked list represents the vertices that form an edge with the vertex. The following image represents the adjacency list representation:

![AL](https://media.geeksforgeeks.org/wp-content/uploads/20200609204414/linklist.png)

2. Adjacency Matrix: Adjacency Matrix is a 2D array of size V x V where V is the number of vertices in a graph. Let the 2D array be adj[][], a slot adj[i][j] = 1 indicates that there is an edge from vertex i to vertex j. Adjacency matrix for undirected graph is always symmetric. Adjacency Matrix is also used to represent weighted graphs. If adj[i][j] = w, then there is an edge from vertex i to vertex j with weight w.

In the adjacency matrix representation, a graph is represented in the form of a two-dimensional array. The size of the array is V x V, where V is the set of vertices. The following image represents the adjacency matrix representation:

![AM](https://media.geeksforgeeks.org/wp-content/uploads/20200609204115/matrix.png)

Hash map is a good alternative.

{
A: ["B", "F"],
B: ["A", "C"],
C: ["B", "D"]
...
}

## Big O

V = number of vertices;
E = number of edges

| Operation     | Adjacency List | Adjacency Matrix |
| ------------- | -------------- | ---------------- |
| Add Vertex    | O(1)           | O(V^2)           |
| Add Edge      | O(1)           | O(1)             |
| Remove Vertex | O(V + E)       | O(V^2)           |
| Remove Edge   | O(E)           | O(1)             |
| Query         | O(V)           | O(1)             |
| Storage       | O(V + E)       | O(V^2)           |

## Adjacency List vs. Adjacency Matrix

- Adjacency List

  - Can take up less space (in sparse graphs)
  - Faster to iterate over all edges
  - Can be slower to look up a specific edge

- Adjacency Matrix
  - Takes up more space (in sparse graphs)
  - Slower to iterate over all edges
  - Faster to look up a specific edge

Typically going to use adjacency list since most data in the real world tends to lend itself to sparser and/or larger graphs

## Uses

- Social Network
- Recommendation Engines: "People also watched...", "You might also like...", "People you might know...", "Frequently bought with..."
- Location Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimization
- Modelling the Internet
