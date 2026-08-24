// 79. Word Search
// https://leetcode.com/problems/word-search/description/

function exist(board: string[][], word: string): boolean {
  const visited = new Set<string>()

  const hasCorrectNeighbors = (row: number, col: number, wordIdx: number): boolean => {
    const nextIdx = wordIdx + 1

    if (nextIdx === word.length) return true

    // up
    if (row - 1 >= 0 && board[row - 1][col] === word[nextIdx] && !visited.has(`${row - 1},${col}`)) {
      visited.add(`${row - 1},${col}`)
      if (hasCorrectNeighbors(row - 1, col, nextIdx)) return true
      visited.delete(`${row - 1},${col}`)
    }

    // left
    if (col - 1 >= 0 && board[row][col - 1] === word[nextIdx] && !visited.has(`${row},${col - 1}`)) {
      visited.add(`${row},${col - 1}`)
      if (hasCorrectNeighbors(row, col - 1, nextIdx)) return true
      visited.delete(`${row},${col - 1}`)
    }

    // right
    if (col + 1 < board[0].length && board[row][col + 1] === word[nextIdx] && !visited.has(`${row},${col + 1}`)) {
      visited.add(`${row},${col + 1}`)
      if (hasCorrectNeighbors(row, col + 1, nextIdx)) return true
      visited.delete(`${row},${col + 1}`)
    }

    // down
    if (row + 1 < board.length && board[row + 1][col] === word[nextIdx] && !visited.has(`${row + 1},${col}`)) {
      visited.add(`${row + 1},${col}`)
      if (hasCorrectNeighbors(row + 1, col, nextIdx)) return true
      visited.delete(`${row + 1},${col}`)
    }

    return false
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === word[0]) {
        visited.add(`${r},${c}`)
        if (hasCorrectNeighbors(r, c, 0)) return true
        visited.clear()
      }
    }
  }

  return false
}

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'ABCCED')) // true
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'SEE')) // true
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'ABCB')) // false

export { }
