// 36. Valid Sudoku
// https://leetcode.com/problems/valid-sudoku/description/

function isValidSudoku(board: string[][]): boolean {
  const sudoku: Record<string, Set<string>> = {}

  for (let i = 0; i < 9; i++) {
    sudoku['r' + i] = new Set<string>() // row
    sudoku['c' + i] = new Set<string>() // col
    sudoku['b' + i] = new Set<string>() // box
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j]

      if (val === '.') {
        continue
      }

      if (sudoku['r' + i].has(val)) {
        return false
      }

      if (sudoku['c' + j].has(val)) {
        return false
      }

      const boxNum = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      if (sudoku['b' + boxNum].has(val)) {
        return false
      }

      sudoku['r' + i].add(val)
      sudoku['c' + j].add(val)
      sudoku['b' + boxNum].add(val)
    }
  }

  return true
}

console.log(isValidSudoku(
  [["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]])) // true

console.log(isValidSudoku(
  [["8", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]])) // false

export { }
