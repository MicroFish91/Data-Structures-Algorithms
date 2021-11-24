class GraphNode {
  public val: any;
  public edgesList: GraphNode[];

  constructor(val: any) {
    this.val = val;
    this.edgesList = [];
  }

  connect(node: GraphNode) {
    this.edgesList.push(node);
    node.edgesList.push(this);
  }
}

class Graph {
  public nodes: GraphNode[];

  constructor(...nodes) {
    this.nodes = nodes;
  }

  addNode(node: GraphNode) {
    this.nodes.push(node);
  }
}

function cloneGraph(startNode: GraphNode) {
  const cloned = new GraphNode(startNode.val);
  const queue = [];
  const visited = {
    [startNode.val]: cloned,
  };

  queue.push(startNode);

  while (queue.length) {
    const ogCurrentNode = queue.shift();
    const currentClonedNode = visited[ogCurrentNode.val];
    const adjList = ogCurrentNode.edgesList;

    for (let i = 0; i < adjList.length; i++) {
      const ogAdjNode = adjList[i];

      if (!visited[ogAdjNode.val]) {
        const newNode = new GraphNode(ogAdjNode.val);
        visited[ogAdjNode.val] = newNode;
        queue.push(ogAdjNode);
        currentClonedNode.edgesList.push(newNode);
      } else {
        const nodeRef = visited[ogAdjNode.val];
        currentClonedNode.edgesList.push(nodeRef);
      }
    }
  }

  return cloned;
}

const one = new GraphNode(1);
const two = new GraphNode(2);
const three = new GraphNode(3);
const four = new GraphNode(4);

one.connect(two);
two.connect(three);
three.connect(four);
four.connect(one);

const g = new Graph(one, two, three, four);

console.log(cloneGraph(one).edgesList[0]);
