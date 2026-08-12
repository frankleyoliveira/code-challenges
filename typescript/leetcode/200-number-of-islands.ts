// 200. Number of Islands
// https://leetcode.com/problems/number-of-islands/description/

function numIslands(grid: string[][]): number {
  let islands = 0
  const rows = grid.length
  const cols = grid[0].length

  const sink = (r: number, c: number) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') {

      return
    }

    grid[r][c] = '0'

    sink(r + 1, c)
    sink(r - 1, c)
    sink(r, c + 1)
    sink(r, c - 1)
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        sink(r, c)
        islands++
      }
    }
  }

  return islands
}

console.log(numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
])) // 1

console.log(numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
])) // 3

export { }
