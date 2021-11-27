// https://leetcode.com/problems/walls-and-gates/
const EMPTY = 2147483647;
const GATE = 0;
const DIRECTIONS = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
]; // [👆, 👇, 👈, 👉]

function isInBounds(arr, rows, cols) {
  const inRows = rows >= 0 && rows < arr.length;
  const inCols = arr.length && cols >= 0 && cols < arr[0].length;
  return inRows && inCols;
}

function wallsAndGates(rooms: number[][]): void {
  // m x n => rows x cols
  const m = rooms?.length;
  const n = m && rooms[0]?.length;
  const queue = [];

  if (!m || !n) return;

  // Find gates
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const panel = rooms[i][j];
      if (panel === GATE) {
        queue.push([i, j]);
      }
    }
  }

  // Explore all directions starting at gates using BFS
  while (queue.length) {
    const [r, c] = queue.shift();

    for (let [dr, dc] of DIRECTIONS) {
      const nextRow = r + dr;
      const nextCol = c + dc;

      if (isInBounds(rooms, nextRow, nextCol)) {
        const nextRoom = rooms[nextRow][nextCol];

        if (nextRoom === EMPTY) {
          rooms[nextRow][nextCol] = rooms[r][c] + 1;
          queue.push([nextRow, nextCol]);
        }
      }
    }
  }
}

const myRoom = [
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647],
];

wallsAndGates(myRoom);

console.log(myRoom);
