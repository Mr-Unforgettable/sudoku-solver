# 🧩 Sudoku Solver

A modern Sudoku puzzle solver built with **React**, **TailwindCSS**, and **TypeScript**—running on **Deno** for backend logic. Enter any Sudoku puzzle (easy to evil), and it will solve it instantly. The UI adapts to your system's dark/light mode and offers a clean, responsive experience.

---

## ✨ Features

- ✅ Real-time Sudoku puzzle input via 9×9 grid
- ✅ Solves any valid Sudoku using a backtracking algorithm
- ✅ Clean 3×3 sub-grid layout with visual separators
- ✅ Automatic **light/dark mode** via system preference
- ✅ Fully styled with **TailwindCSS**
- ✅ Built using **TypeScript** and runs on **Deno**

---

## 🖥️ Tech Stack

| Technology   | Purpose                     |
|--------------|-----------------------------|
| React        | UI rendering                |
| TailwindCSS  | Utility-first styling       |
| TypeScript   | Type safety & structure     |
| Deno         | Runtime for TS logic        |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/sudoku-solver.git
cd sudoku-solver
```

### 2. Install Dependencies
Using your package manager (e.g., npm, pnpm, or yarn):

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

## 🧠 How It Works

The core logic is implemented using a backtracking algorithm that recursively checks all valid number placements in the grid until a solution is found.

The validation uses:

- Row & column checks

- 3x3 sub-grid checks

- Caching with hash sets for optimization (optional)

## 📷 Screenshots

## 🙌 Acknowledgements

- Sudoku solving logic inspired by common backtracking techniques

- UI powered by the flexibility of TailwindCSS

- Deno for native TypeScript runtime

## 💡 Future Enhancements

- 🔢 Pencil mark (candidate) inputs

- 🧠 Difficulty detection

- 📱 Mobile-first UX improvements

- 🌐 PWA support
