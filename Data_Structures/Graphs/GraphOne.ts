import { Queue } from "../Queues/queue";

// Undirected Graph
export class Graph {
  public adjacencyList: { [key: string]: any[] };

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(node: string) {
    if (!this.adjacencyList[node]) {
      this.adjacencyList[node] = [];
    }
  }

  addEdge(nodeOne: string, nodeTwo: string): boolean {
    const adjacencyOne = this.adjacencyList[nodeOne];
    const adjacencyTwo = this.adjacencyList[nodeTwo];

    if (!adjacencyOne || !adjacencyTwo) {
      return false;
    }

    if (adjacencyOne.findIndex((adjNode) => adjNode === nodeTwo) === -1) {
      adjacencyOne.push(nodeTwo);
    }

    if (adjacencyTwo.findIndex((adjNode) => adjNode === nodeOne) === -1) {
      adjacencyTwo.push(nodeOne);
    }

    return true;
  }

  removeEdge(nodeOne: string, nodeTwo: string): boolean {
    const adjacencyOne = this.adjacencyList[nodeOne];
    const adjacencyTwo = this.adjacencyList[nodeTwo];

    if (!adjacencyOne || !adjacencyTwo) {
      return false;
    }

    this.adjacencyList[nodeOne] = adjacencyOne.filter((adjNode) => {
      return adjNode !== nodeTwo;
    });

    this.adjacencyList[nodeTwo] = adjacencyTwo.filter((adjNode) => {
      return adjNode !== nodeOne;
    });

    return true;
  }

  removeVertex(node: string): boolean {
    if (!this.adjacencyList[node]) return false;

    delete this.adjacencyList[node];

    const adjKeys = Object.keys(this.adjacencyList);

    for (let i = 0; i < adjKeys.length; i++) {
      const adjKey = adjKeys[i];
      this.adjacencyList[adjKey] = this.adjacencyList[adjKey].filter(
        (adjNode) => {
          return adjNode !== node;
        }
      );
    }

    return true;
  }

  dfsRecursive(startNode: string) {
    const dfsResults = [];
    const visitedNodes = {};
    const adjacencyList = this.adjacencyList;

    if (!this.adjacencyList[startNode]) return dfsResults;

    function traverse(node: string) {
      const adjNodes = adjacencyList[node];

      dfsResults.push(node);
      visitedNodes[node] = true;

      for (let i = 0; i < adjNodes.length; i++) {
        const adjNode = adjNodes[i];
        if (!visitedNodes[adjNode]) {
          traverse(adjNode);
        }
      }
    }

    traverse(startNode);
    return dfsResults;
  }

  dfsIterative(startNode: string) {
    const dfsResults = [];
    const visitedNodes = {};
    const nodeStack = [];

    nodeStack.push(startNode);
    visitedNodes[startNode] = true;

    while (nodeStack.length) {
      const node = nodeStack.pop();
      const nodeList = this.adjacencyList[node];

      if (nodeList) {
        dfsResults.push(node);

        for (let i = 0; i < nodeList.length; i++) {
          const adjNode = nodeList[i];

          if (!visitedNodes[adjNode]) {
            nodeStack.push(adjNode);
            visitedNodes[adjNode] = true;
          }
        }
      }
    }

    return dfsResults;
  }

  bfs(startNode: string) {
    const bfsResults = [];
    const visitedNodes = {};
    const queue = new Queue();

    queue.enqueue(startNode);
    visitedNodes[startNode] = true;

    while (queue.length) {
      const node = queue.dequeue();
      const nodeList = this.adjacencyList[node];

      if (nodeList) {
        bfsResults.push(node);

        for (let i = 0; i < nodeList.length; i++) {
          const adjNode = nodeList[i];

          if (!visitedNodes[adjNode]) {
            queue.enqueue(adjNode);
            visitedNodes[adjNode] = true;
          }
        }
      }
    }

    return bfsResults;
  }
}

const g = new Graph();

/*
        A
      /  \
    B     C
    |     |
    D --- E
    \    /
      F
*/

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.dfsRecursive("A"));
console.log(g.dfsIterative("A"));
console.log(g.bfs("A"));
