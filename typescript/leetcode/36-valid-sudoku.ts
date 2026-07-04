// 36. Valid Sudoku
// https://leetcode.com/problems/valid-sudoku/description/

function isValidSudoku(board: string[][]): boolean {
  const sudoku: Record<string, Set<string>> = {}
  const boxNumMap = new Map<string, number>([
    ['11', 0],
    ['12', 1],
    ['13', 2],
    ['21', 3],
    ['22', 4],
    ['23', 5],
    ['31', 6],
    ['32', 7],
    ['33', 8],
  ])

  for (let i = 0; i < 9; i++) {
    sudoku['r' + i] = new Set<string>() // row
    sudoku['c' + i] = new Set<string>() // col
    sudoku['b' + i] = new Set<string>() // box
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        continue
      }

      if (sudoku['r' + i].has(board[i][j])) {
        return false
      }
      if (sudoku['c' + j].has(board[i][j])) {
        return false
      }

      // get box number

      let boxRow = '1'
      if (i > 5) {
        boxRow = '3'
      } else if (i > 2) {
        boxRow = '2'
      }

      let boxCol = '1'
      if (j > 5) {
        boxCol = '3'
      } else if (j > 2) {
        boxCol = '2'
      }

      const boxNum = boxNumMap.get(boxRow + boxCol)!

      if (sudoku['b' + boxNum].has(board[i][j])) {
        return false
      }

      sudoku['r' + i].add(board[i][j])
      sudoku['c' + j].add(board[i][j])
      sudoku['b' + boxNum].add(board[i][j])
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
