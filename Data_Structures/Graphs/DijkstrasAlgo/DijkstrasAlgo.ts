import { NaiveQueue } from "../../PriorityQueue/naiveQueue";

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

  shortestPath(start: string, end: string): string[] {
    // swap this with minbinaryheap for faster runtime
    const nodeList = new NaiveQueue();
    const distanceMap = {};
    const previous = {};
    const finalPath = [];

    for (let node in this.adjacencyList) {
      const weight = node === start ? 0 : Infinity;

      distanceMap[node] = weight;
      previous[node] = null;
      // nodeList.enqueue(node, weight);
    }

    nodeList.enqueue(start, 0);

    while (nodeList.values.length) {
      const currentNode = nodeList.dequeue();
      const adjNodeList = this.adjacencyList[currentNode.node];

      if (currentNode.node === end) {
        let spNode = previous[end];

        while (spNode) {
          finalPath.push(spNode);
          spNode = previous[spNode];
        }

        break;
      }

      if (adjNodeList) {
        for (let i = 0; i < adjNodeList.length; i++) {
          const adjNode = adjNodeList[i];
          const pathSum = distanceMap[currentNode.node] + adjNode.weight;

          if (pathSum < distanceMap[adjNode.node]) {
            distanceMap[adjNode.node] = pathSum;
            previous[adjNode.node] = currentNode.node;

            nodeList.enqueue(adjNode.node, adjNode.weight);
          }
        }
      }
    }

    return [end, ...finalPath].reverse();
  }
}

const g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

console.log(g.shortestPath("A", "F"));
console.log(g.shortestPath("A", "E"));
