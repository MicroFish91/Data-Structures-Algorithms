//@ts-ignore
class GraphNode {
  public val: number;
  public neighbors: GraphNode[];

  constructor(val: number, neighbors?: GraphNode[]) {
    this.val = val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

// graph.adjacencyList = [ (1), (2), (3), (4) ]

class Graph {
  public adjacencyList: GraphNode[];

  constructor() {
    this.adjacencyList = [];
  }
}

// adjlist = [nodeOne, nodeThree]

// function cloneGraph(graphNode: GraphNode): Graph {
//   const cloned = new Graph();

//   function traverse(node) {
//     if (!node) return;

//     if (!cloned.adjacencyList[node.val]) {
//       cloned.adjacencyList[node.val] = new GraphNode(node.val);
//       cloned.adjacencyList[node.val].neighbors = node.neighbors.map(traverse);
//     }

//     return cloned.adjacencyList[node.val];
//   }

//   traverse(graphNode);
//   return cloned;
// }

function cloneGraph(graphNode: GraphNode): Graph {}

const g = new Graph();

const nodeOne = new GraphNode(0);
const nodeTwo = new GraphNode(1);
const nodeThree = new GraphNode(2);
const nodeFour = new GraphNode(3, [nodeOne, nodeThree]);

nodeOne.neighbors = [nodeTwo, nodeFour];
nodeTwo.neighbors = [nodeOne, nodeThree];
nodeThree.neighbors = [nodeTwo, nodeFour];

g.adjacencyList = [nodeOne, nodeTwo, nodeThree, nodeFour];

const clonedGraph = cloneGraph(g.adjacencyList[0]);
console.log(clonedGraph.adjacencyList[1]);
