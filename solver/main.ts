import { solveSudoku } from "./sudoku.ts";

// const sample: number[][] = [
//   [5, 3, 0, 0, 7, 0, 0, 0, 0],
//   [6, 0, 0, 1, 9, 5, 0, 0, 0],
//   [0, 9, 8, 0, 0, 0, 0, 6, 0],
//   [8, 0, 0, 0, 6, 0, 0, 0, 3],
//   [4, 0, 0, 8, 0, 3, 0, 0, 1],
//   [7, 0, 0, 0, 2, 0, 0, 0, 6],
//   [0, 6, 0, 0, 0, 0, 2, 8, 0],
//   [0, 0, 0, 4, 1, 9, 0, 0, 5],
//   [0, 0, 0, 0, 8, 0, 0, 7, 9],
// ];
//
const sample: number[][] = [
  [2, 0, 4, 0, 5, 0, 0, 0, 8],
  [0, 0, 0, 1, 0, 7, 0, 0, 0],
  [0, 0, 7, 2, 0, 8, 6, 0, 0],
  [0, 9, 1, 0, 0, 0, 0, 4, 0],
  [5, 0, 0, 0, 0, 0, 0, 0, 7],
  [0, 2, 0, 0, 0, 0, 3, 1, 0],
  [0, 0, 5, 3, 0, 4, 9, 0, 0],
  [0, 0, 0, 5, 0, 9, 0, 0, 0],
  [8, 0, 0, 0, 6, 0, 4, 0, 2],
];

if (solveSudoku(sample)) {
  console.log("Solved!");
  console.table(sample);
} else {
  console.log("No solution found.");
}
