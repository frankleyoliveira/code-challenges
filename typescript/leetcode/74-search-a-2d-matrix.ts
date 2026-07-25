// 74. Search a 2D Matrix
// https://leetcode.com/problems/search-a-2d-matrix/description/

function searchMatrix(matrix: number[][], target: number): boolean {
  let rowL = 0
  let rowR = matrix.length - 1
  let targetRow = -1

  while (rowL < rowR && targetRow === -1) {
    const mid = rowL + Math.floor((rowR - rowL) / 2)
    if (matrix[mid][0] > target) {
      rowR = mid - 1
    } else if (matrix[mid][matrix[mid].length - 1] < target) {
      rowL = mid + 1
    } else {
      targetRow = mid
    }
  }

  if (targetRow === -1) {
    targetRow = rowL
  }

  let colL = 0
  let colR = matrix[targetRow].length - 1

  let count = 0
  while (colL < colR && count < 10) {
    const midIdx = colL + Math.floor((colR - colL) / 2)
    const midVal = matrix[targetRow][midIdx]

    if (midVal > target) {
      colR = midIdx - 1
    } else if (midVal < target) {
      colL = midIdx + 1
    } else {
      return true
    }
    count++
  }

  return matrix[targetRow][colL] === target
}

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)) // true
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)) // false

export { }
