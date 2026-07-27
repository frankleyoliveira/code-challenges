// 74. Search a 2D Matrix
// https://leetcode.com/problems/search-a-2d-matrix/description/

function searchMatrix(matrix: number[][], target: number): boolean {
  let t = 0 // top
  let b = matrix.length - 1 // bottom
  let row = 0

  while (t <= b) {
    row = Math.floor((b + t) / 2)
    if (matrix[row][0] > target) {
      b = row - 1
    } else if (matrix[row][matrix[row].length - 1] < target) {
      t = row + 1
    } else {
      break
    }
  }

  let l = 0
  let r = matrix[row].length - 1

  while (l <= r) {
    const midIdx = Math.floor((r + l) / 2)
    const midVal = matrix[row][midIdx]

    if (midVal > target) {
      r = midIdx - 1
    } else if (midVal < target) {
      l = midIdx + 1
    } else {
      return true
    }
  }

  return false
}

console.log(searchMatrix([[1], [3]], 3)) // true
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)) // true
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)) // false

export { }
