// 62. Unique Paths
// https://leetcode.com/problems/unique-paths/description/

function uniquePaths(m: number, n: number): number {
  // Dynamic Programming
  let row = new Array(m).fill(1)

  for (let i = 0; i < n - 1; i++) {
    const newRow = new Array(m).fill(1)
    for (let j = m - 2; j >= 0; j--) {
      newRow[j] = newRow[j + 1] + row[j]
    }
    row = newRow
  }

  return row[0]
}

console.log(uniquePaths(3, 7)) // 28
console.log(uniquePaths(3, 2)) // 3

export { }
