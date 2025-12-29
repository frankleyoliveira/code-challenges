// 118. Pascal's Triangle
// https://leetcode.com/problems/pascals-triangle/

function generate(numRows: number): number[][] {
  const triangle = [[1]]

  for (let i = 1; i < numRows; i++) {
    const row = [1]
    for (let j = 1; j < i; j++) {
      const lastRow = triangle[i - 1]
      const sum = lastRow[j - 1] + lastRow[j]
      row[j] = sum
    }
    row.push(1)
    triangle.push(row)
  }

  return triangle
}

console.log(generate(1)) // [[1]]

console.log(generate(5)) // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

export { }
