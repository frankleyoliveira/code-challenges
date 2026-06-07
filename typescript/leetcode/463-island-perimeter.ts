// 463. Island Perimeter
// https://leetcode.com/problems/island-perimeter/description/

function islandPerimeter(grid: number[][]): number {
  let perimeter = 0
  const rows = grid.length
  const cols = grid[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j]) {
        const top = i - 1
        if (top < 0 || !grid[top][j]) {
          perimeter++
        }

        const bottom = i + 1
        if (bottom >= rows || !grid[bottom][j]) {
          perimeter++
        }

        const left = j - 1
        if (left < 0 || !grid[i][left]) {
          perimeter++
        }

        const right = j + 1
        if (right >= cols || !grid[i][right]) {
          perimeter++
        }
      }
    }
  }

  return perimeter
}

console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]])) // 16
console.log(islandPerimeter([[1]])) // 4
console.log(islandPerimeter([[1, 0]])) // 4

export { }
