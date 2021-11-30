function numberOfIslands(map: number[][]): number {
  if (!map?.length || !map[0]?.length) return null;

  const DIRS = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const visited = [];
  let islands = 0;

  // Created blank visited map
  for (let i = 0; i < map.length; i++) {
    visited.push(new Array(map[0].length).fill(0));
  }

  //
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      traverse(true, i, j);
    }
  }

  return islands;

  function traverse(start: boolean, row: number, col: number) {
    if (!isInBounds(map, row, col)) return;
    if (visited[row][col] === 1) return;
    if (map[row][col] === 0) return;
    if (start) islands++;

    visited[row][col] = 1;

    for (let [dr, dc] of DIRS) {
      const newRow = row + dr;
      const newCol = col + dc;

      traverse(false, newRow, newCol);
    }
  }

  function isInBounds(arr, row, col) {
    const isInRow = row >= 0 && row < arr.length;
    const isInCol = col >= 0 && col < arr[0].length;
    return isInRow && isInCol;
  }
}

// 1
console.log(
  numberOfIslands([
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);

// 3
console.log(
  numberOfIslands([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
  ])
);
