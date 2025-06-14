export type Board = number[][];

function getBoxIndex(row: number, col: number): number {
  return Math.floor(row / 3) * 3 + Math.floor(col / 3);
}

export function solveSudoku(board: Board): boolean {
  const rowSets: Set<number>[] = Array.from(
    { length: 9 },
    () => new Set<number>(),
  );
  const colSets: Set<number>[] = Array.from(
    { length: 9 },
    () => new Set<number>(),
  );
  const boxSets: Set<number>[] = Array.from(
    { length: 9 },
    () => new Set<number>(),
  );

  // Initalize sets with existing numbers
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const num = board[row][col];

      if (num !== 0) {
        rowSets[row].add(num);
        colSets[col].add(num);
        boxSets[getBoxIndex(row, col)].add(num);
      }
    }
  }

  function backTrack(row = 0, col = 0): boolean {
    // Move to next row if past end of column
    if (col === 9) return backTrack(row + 1, 0);
    // Solved
    if (row === 9) return true;

    // Skip filled cells
    if (board[row][col] !== 0) return backTrack(row, col + 1);

    const boxIdx = getBoxIndex(row, col);
    for (let num = 1; num <= 9; num++) {
      if (
        !rowSets[row].has(num) &&
        !colSets[col].has(num) &&
        !boxSets[boxIdx].has(num)
      ) {
        // Try the number
        board[row][col] = num;
        rowSets[row].add(num);
        colSets[col].add(num);
        boxSets[boxIdx].add(num);

        if (backTrack(row, col + 1)) return true;

        // Backtrack
        board[row][col] = 0;
        rowSets[row].delete(num);
        colSets[col].delete(num);
        boxSets[boxIdx].delete(num);
      }
    }
    return false;
  }
  return backTrack();
}
