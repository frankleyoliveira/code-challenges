// 118. Pascal's Triangle II
// https://leetcode.com/problems/pascals-triangle-ii/description/

function getRow(rowIndex: number): number[] {
  let lastRow = [1]

  for (let i = 1; i <= rowIndex; i++) {
    const row = [1]
    for (let j = 1; j < i; j++) {
      const sum = lastRow[j - 1] + lastRow[j]
      row[j] = sum
    }
    row.push(1)
    lastRow = row
  }

  return lastRow
}

console.log(getRow(3)) // [1,3,3,1]

console.log(getRow(0)) // [1]

console.log(getRow(1)) // [1,1]

export { }
