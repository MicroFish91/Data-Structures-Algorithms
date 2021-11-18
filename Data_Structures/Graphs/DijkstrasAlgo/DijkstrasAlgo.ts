class WeightedGraph {
  public adjacencyList: { [key: string]: { node: string; weight: number }[] };

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertexOne: string, vertexTwo: string, weight: number): boolean {
    if (!this.adjacencyList[vertexOne] || !this.adjacencyList[vertexTwo])
      return false;

    const listOne = this.adjacencyList[vertexOne];
    const listTwo = this.adjacencyList[vertexTwo];

    const listOneIdx = listOne.findIndex(
      (adjNode) => adjNode.node === vertexTwo
    );
    const listTwoIdx = listTwo.findIndex(
      (adjNode) => adjNode.node === vertexOne
    );

    if (listOneIdx === -1) {
      listOne.push({ node: vertexTwo, weight });
    } else {
      listOne[listOneIdx] = { node: vertexTwo, weight };
    }

    if (listTwoIdx === -1) {
      listTwo.push({ node: vertexOne, weight });
    } else {
      listTwo[listTwoIdx] = { node: vertexOne, weight };
    }

    return true;
  }

  removeVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) return;

    delete this.adjacencyList[vertex];

    const keys = Object.keys(this.adjacencyList);

    for (let i = 0; i < keys.length; i++) {
      const node = keys[i];

      this.adjacencyList[node] = this.adjacencyList[node].filter(
        (adjNode) => adjNode.node !== vertex
      );
    }
  }

  removeEdge(vertexOne: string, vertexTwo: string) {
    if (!this.adjacencyList[vertexOne] || !this.adjacencyList[vertexTwo])
      return;

    this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(
      (adjNode) => adjNode.node !== vertexTwo
    );
    this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(
      (adjNode) => adjNode.node !== vertexOne
    );
  }
}

const g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");

g.addEdge("A", "B", 50);
g.addEdge("A", "B", 60);
g.addEdge("B", "C", 30);
g.addEdge("A", "C", 30);

console.log(g.adjacencyList["A"]);
console.log(g.adjacencyList["B"]);
console.log(g.adjacencyList["C"]);

g.removeVertex("B");

console.log(g.adjacencyList["A"]);
console.log(g.adjacencyList["B"]);
console.log(g.adjacencyList["C"]);
