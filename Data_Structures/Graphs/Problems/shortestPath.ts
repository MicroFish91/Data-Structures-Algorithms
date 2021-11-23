import { Graph, GraphNode } from "../adjacencyList";

const Mary = new GraphNode("Mary");
const Hannah = new GraphNode("Hannah");
const Mel = new GraphNode("Mel");
const Max = new GraphNode("Max");
const Nis = new GraphNode("Nis");
const Dan = new GraphNode("Dan");
const Chris = new GraphNode("Chris");
const Nicolette = new GraphNode("Nicolette");
const Yait = new GraphNode("Yait");
const Mabel = new GraphNode("Mabel");
const Liz = new GraphNode("Liz");

Hannah.connect(Mary);
Hannah.connect(Mel);
Hannah.connect(Max);
Hannah.connect(Nis);
Hannah.connect(Liz);
Chris.connect(Nicolette);
Nis.connect(Dan);
Nis.connect(Yait);
Nis.connect(Chris);
Yait.connect(Mabel);
Yait.connect(Liz);
Mabel.connect(Liz);

const g = new Graph([
  Hannah,
  Mel,
  Max,
  Nis,
  Dan,
  Chris,
  Nicolette,
  Yait,
  Mabel,
  Liz,
]);

console.log(g.shortestPath(Hannah, Mabel));
