import { Queue } from "../Queues/queue";

export class GraphNode {
  public val: any;
  public edgesList: GraphNode[];

  constructor(val: any) {
    this.val = val;
    this.edgesList = [];
  }

  connect(vertex: GraphNode) {
    if (this.edgesList.findIndex((vtx) => vtx === vertex) === -1) {
      this.edgesList.push(vertex);
      vertex.edgesList.push(this);
    }
  }

  isConnected(vertex: GraphNode): boolean {
    if (this.edgesList.findIndex((node) => node === vertex) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  getAdjacentNodes(): GraphNode[] {
    return this.edgesList;
  }
}

export class Graph {
  public nodes: GraphNode[];

  constructor(nodes) {
    this.nodes = nodes;
  }

  addToGraph(node: GraphNode) {
    this.nodes.push(node);
  }

  // O(V+E)
  bfs(start: GraphNode): string[] {
    const bfsResults = [];
    const visited = {};
    const queue = new Queue();

    queue.enqueue(start);
    visited[start.val] = true;

    while (queue.length) {
      const node = queue.dequeue();
      const adjList = node.edgesList;

      bfsResults.push(node.val);

      for (let i = 0; i < adjList.length; i++) {
        const adjNode = adjList[i];

        if (!visited[adjNode.val]) {
          visited[adjNode.val] = true;
          queue.enqueue(adjNode);
        }
      }
    }

    return bfsResults;
  }

  reconstructPath(visitedMap, end: GraphNode): string[] {
    const shortestPath = [end.val];
    let currentNode = visitedMap[end.val];

    while (currentNode) {
      shortestPath.push(currentNode);
      currentNode = visitedMap[currentNode];
    }

    return shortestPath.reverse();
  }

  shortestPath(start: GraphNode, end: GraphNode) {
    const visitedPath = {};
    const queue = [];

    queue.push(start);
    visitedPath[start.val] = null;

    while (queue.length) {
      const node = queue.shift();
      const adjList = node.edgesList;

      for (let i = 0; i < adjList.length; i++) {
        const adjNode = adjList[i];

        if (visitedPath[adjNode.val] === undefined) {
          visitedPath[adjNode.val] = node.val;
          queue.push(adjNode);
        }

        if (adjNode === end) {
          break;
        }
      }
    }

    return this.reconstructPath(visitedPath, end);
  }

  dfs(start: GraphNode): string[] {
    const dfsResults = [];
    const stack = [];
    const visited = {};

    stack.push(start);
    visited[start.val] = true;

    while (stack.length) {
      const node = stack.pop();
      const adjList = node.edgesList;

      dfsResults.push(node.val);

      for (let i = 0; i < adjList.length; i++) {
        const adjNode = adjList[i];

        if (!visited[adjNode.val]) {
          visited[adjNode.val] = true;
          stack.push(adjNode);
        }
      }
    }

    return dfsResults;
  }
}

const DFW = new GraphNode("DFW");
const HNL = new GraphNode("HNL");
const LAX = new GraphNode("LAX");
const EWR = new GraphNode("EWR");
const SAN = new GraphNode("SAN");
const JFK = new GraphNode("JFK");
const BOS = new GraphNode("BOS");
const MIA = new GraphNode("MIA");
const MCO = new GraphNode("MCO");
const PBI = new GraphNode("PBI");

HNL.connect(LAX);
LAX.connect(EWR);
LAX.connect(SAN);
LAX.connect(DFW);
DFW.connect(JFK);
JFK.connect(BOS);
JFK.connect(MIA);
MIA.connect(MCO);
MIA.connect(PBI);
PBI.connect(MCO);

const g = new Graph([DFW, HNL, LAX, EWR, SAN, JFK, BOS, MIA, MCO, PBI]);

console.log(g.bfs(DFW));
console.log(g.dfs(DFW));
