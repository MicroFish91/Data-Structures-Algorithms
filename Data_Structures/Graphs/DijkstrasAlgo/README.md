# Dijkstras Algorithm

Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph.

## Pseudocode

- Function should accept a starting and ending vertex
- Create a distance mapping object where each vertex is a key and each value is the shortest distance from the starting node to the given key's vertex. Set each key's value to Infinity to start except the starting vertex which should have a value of 0.
- Create a 'previous' object which holds the key to the last vertex travelled for the min. distance path. Each starting value will be null
- Add the starting vertex with name/weight to a priority queue (minbinaryheap)
- Start a while loop
  - Dequeue a vertex from the PQ
  - If that vertex is the same as the end vertex, we are done => compile the final list using "previous"
  - Otherwise loop through each value in the adjacency list for the dequeued vertex
    - Calculate the distance to that vertex from the starting index (should be able to pull last value from the distance map and add it with the current node's weight)
    - If the value calculated is smaller than what is stored in the distance map, update the distance map, update the previous object, and add that node to the PQ

## Uses

- GPS: Find fastest route
- Network Routing: Finds shortest path for data
- Biology: Used to model the spread of viruses among humans
- Airline tickets: finds cheapest route to your destination
- etc.
