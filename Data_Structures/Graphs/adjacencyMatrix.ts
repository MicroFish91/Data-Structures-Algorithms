const vertices = ["A", "B", "C", "D", "E"];

const vertexIdxMap = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
};

const adjacencyMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];

// O(V)
function adjacentNodes(vertex: string): string[] {
  const adjList = [];
  const vertexIdx = vertexIdxMap[vertex];

  for (let i = 0; i < adjacencyMatrix.length; i++) {
    if (adjacencyMatrix[vertexIdx][i]) {
      adjList.push(vertices[i]);
    }
  }

  return adjList;
}

// O(1)
function isConnected(vertexOne: string, vertexTwo: string): boolean {
  const vertexOneIdx = vertexIdxMap[vertexOne];
  const vertexTwoIdx = vertexIdxMap[vertexTwo];

  return !!adjacencyMatrix[vertexOneIdx][vertexTwoIdx];
}

console.log(adjacentNodes("B"));

console.log(isConnected("A", "B"));
console.log(isConnected("B", "D"));
