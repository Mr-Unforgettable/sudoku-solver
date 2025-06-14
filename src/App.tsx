import { useState } from "react";
import "./App.css";
import { solveSudoku } from "../solver/sudoku.ts";

// Create an empty board (9x9)
const emptyBoard = Array.from({ length: 9 }, () => Array(9).fill(""));

function App() {
  const [board, setBoard] = useState<string[][]>(emptyBoard);
  const [solved, setSolved] = useState(false);

  const handleChange = (row: number, col: number, value: string) => {
    if (value === "" || /^[1-9]$/.test(value)) {
      const updated = board.map((r, i) =>
        i === row ? [...r.slice(0, col), value, ...r.slice(col + 1)] : r
      );
      setBoard(updated);
    }
  };

  const handleSolve = () => {
    const numericBoard = board.map(row =>
      row.map(val => (val === "" ? 0 : parseInt(val)))
    );
    const copy: number[][] = JSON.parse(JSON.stringify(numericBoard));
    if (solveSudoku(copy)) {
      setBoard(copy.map(row => row.map(num => num.toString())));
      setSolved(true);
    } else {
      alert("No solution found.");
    }
  };

  const handleReset = () => {
    setBoard(emptyBoard);
    setSolved(false);
  };

  const getCellClass = (row: number, col: number): string => {
    return [
      "w-10",
      "h-10",
      "text-center",
      "text-lg",
      "focus:outline-none",
      "transition-colors",
      "border",
      "border-gray-300",
      "dark:border-gray-600",
      solved ? "bg-green-100 dark:bg-green-900" : "bg-white dark:bg-gray-700",
      row % 3 === 0 ? "border-t-2 border-t-dashed border-t-black dark:border-t-white" : "",
      col % 3 === 0 ? "border-l-2 border-l-dashed border-l-black dark:border-l-white" : "",
      row === 8 ? "border-b-2 border-b-dashed border-b-black dark:border-b-white" : "",
      col === 8 ? "border-r-2 border-r-dashed border-r-black dark:border-r-white" : "",
    ].join(" ");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gray-100 dark:bg-gray-900 p-4 transition-colors">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Sudoku Solver</h1>

      <div className="grid grid-cols-9 border-0.5 border-black dark:border-white bg-white dark:bg-gray-800 rounded shadow-lg">
        {board.map((row, rowIdx) =>
          row.map((value, colIdx) => (
            <input
              key={`${rowIdx}-${colIdx}`}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(rowIdx, colIdx, e.target.value)}
              className={getCellClass(rowIdx, colIdx)}
              disabled={solved}
            />
          ))
        )}
      </div>

      <div className="mt-6 space-x-4">
        <button
          onClick={handleSolve}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200"
        >
          Solve Puzzle
        </button>

        <button
          onClick={handleReset}
          className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition-colors duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
