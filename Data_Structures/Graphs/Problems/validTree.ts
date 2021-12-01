// Must contain no cycles
// All nodes must be fully connected
function validTree(n: number, edges: number[][]) {
  const adj = {};
  const visited = new Set();
  const parent = {};
  let hasCycles = false;

  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }

  for (let i = 0; i < edges.length; i++) {
    const adjArr = edges[i];
    adj[adjArr[0]].push(adjArr[1]);
    adj[adjArr[1]].push(adjArr[0]);
  }

  function traverse(root: number) {
    const adjList = adj[root];

    visited.add(root);

    for (let i = 0; i < adjList.length; i++) {
      const neighbor = adjList[i];

      if (visited.has(neighbor)) {
        // tree nodes cannot have more than 1 parent, so if we've visited
        // before we can check if there is a diff parent than the current
        // in the parent table

        // When we set the relationship of parent below, we must check the swap
        // because the neighbor is now the root since it has been added to callstack
        if (parent[root] !== neighbor) {
          hasCycles = true;
        }
      } else {
        parent[neighbor] = root;
        traverse(neighbor);
      }
    }
  }

  traverse(0);
  if (hasCycles) return false;

  return visited.size === n ? true : false;
}

// True
console.log(
  validTree(5, [
    [1, 4],
    [0, 2],
    [0, 1],
    [0, 3],
  ])
);

// False
console.log(
  validTree(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 3],
    [1, 4],
  ])
);
