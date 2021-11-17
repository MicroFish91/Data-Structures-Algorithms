// Undirected Graph
class Graph {
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
}

const g = new Graph();

g.addVertex("Tokyo");
g.addVertex("Seoul");
g.addVertex("Beijing");
console.log(g.addEdge("Tokyo", "Seoul"));
console.log(g.addEdge("Seoul", "Beijing"));

console.log(g);

console.log(g.removeEdge("Tokyo", "Seoul"));

console.log(g);
