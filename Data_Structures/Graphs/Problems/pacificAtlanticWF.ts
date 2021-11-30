function pacificAtlantic(heights: number[][]) {
  if (!heights?.length) return null;

  const DIRECTIONS = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const atlantic = [];
  const pacific = [];
  const union = [];

  // O(m * n)
  // Make empty arrays
  for (let i = 0; i < heights.length; i++) {
    atlantic.push(new Array(heights[0].length).fill(0));
    pacific.push(new Array(heights[0].length).fill(0));
  }

  // O(m * traverse)
  // Top and Bottom
  for (let i = 0; i < heights[0].length; i++) {
    traverse(0, i, Number.MIN_SAFE_INTEGER, pacific);
    traverse(heights.length - 1, i, Number.MIN_SAFE_INTEGER, atlantic);
  }

  // O(n * traverse)
  // Left and Right
  for (let i = 0; i < heights.length; i++) {
    traverse(i, 0, Number.MIN_SAFE_INTEGER, pacific);
    traverse(i, heights.length - 1, Number.MIN_SAFE_INTEGER, atlantic);
  }

  // O(m * traverse)
  // Find Union
  for (let i = 0; i < atlantic.length; i++) {
    for (let j = 0; j < atlantic[0].length; j++) {
      if (atlantic[i][j] === 1 && pacific[i][j] === 1) {
        union.push([i, j]);
      }
    }
  }

  return union;

  function traverse(row, col, previous, ocean) {
    if (!isInBounds(heights, row, col)) return;
    if (ocean[row][col] === 1) return;
    if (heights[row][col] < previous) return;

    ocean[row][col] = 1;

    for (let [dr, dc] of DIRECTIONS) {
      const newRow = row + dr;
      const newCol = col + dc;

      traverse(newRow, newCol, heights[row][col], ocean);
    }
  }

  function isInBounds(arr, row, col) {
    const isInRow = row >= 0 && row < arr.length;
    const isInCol = col >= 0 && col < arr[0].length;
    return isInRow && isInCol;
  }
}

// O(m * n)

// [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
