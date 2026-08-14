// 62. Unique Paths
// https://leetcode.com/problems/unique-paths/description/

function uniquePaths(m: number, n: number): number {
  // Dynamic Programming
  // let row = new Array(m).fill(1)

  // for (let i = 0; i < n - 1; i++) {
  //   const newRow = new Array(m).fill(1)
  //   for (let j = m - 2; j >= 0; j--) {
  //     newRow[j] = newRow[j + 1] + row[j]
  //   }
  //   row = newRow
  // }

  // return row[0]


  // #############
  // Math solution
  // #############
  const total = m + n - 2
  const choose = m - 1

  // Calculate C(total, choose)
  // Use the multiplicative formula to avoid huge factorials:
  // C(n,k) = (n × (n-1) × ... × (n-k+1)) / k!
  let result = 1
  for (let i = 0; i < choose; i++) {
    result = result * (total - i) / (i + 1)
  }

  return Math.round(result)
}

console.log(uniquePaths(3, 7)) // 28
console.log(uniquePaths(3, 2)) // 3

export { }
