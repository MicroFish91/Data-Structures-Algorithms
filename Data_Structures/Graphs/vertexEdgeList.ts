const vertices = ["A", "B", "C", "D", "E"];

const edges = [
  ["A", "B"],
  ["A", "D"],
  ["B", "C"],
  ["C", "D"],
  ["C", "E"],
  ["D", "E"],
];

// Find adjacent nodes
// O(E)
function adjacentNodes(vertex: string): string[] {
  const adjList = [];

  for (let i = 0; i < edges.length; i++) {
    const vertexIdx = edges[i].findIndex((node) => node === vertex);
    if (vertexIdx !== -1) {
      adjList.push(vertexIdx === 0 ? edges[i][1] : edges[i][0]);
    }
  }

  return adjList;
}

// Are two nodes connected
// O(E)
function isConnected(vertexOne: string, vertexTwo: string): boolean {
  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    const idxOne = edge.findIndex((node) => node === vertexOne);
    const idxTwo = edge.findIndex((node) => node === vertexTwo);

    if (idxOne !== -1 && idxTwo !== -1) {
      return true;
    }
  }

  return false;
}

console.log(adjacentNodes("B"));

console.log(isConnected("A", "D"));
console.log(isConnected("A", "E"));
