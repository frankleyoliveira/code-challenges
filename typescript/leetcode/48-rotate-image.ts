// 48. Rotate Image
// https://leetcode.com/problems/rotate-image/description/

/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  let edgeStart = 0
  let edgeEnd = matrix.length - 1

  while (edgeStart < edgeEnd) {
    for (let i = 0; edgeStart + i < edgeEnd; i++) {
      // 1  ->  2
      // /\     |
      // |     \/
      // 4  <-  3
      const edge1 = matrix[edgeStart][edgeStart + i]
      const edge2 = matrix[edgeStart + i][edgeEnd]
      const edge3 = matrix[edgeEnd][edgeEnd - i]
      const edge4 = matrix[edgeEnd - i][edgeStart]

      matrix[edgeStart][edgeStart + i] = edge4
      matrix[edgeStart + i][edgeEnd] = edge1
      matrix[edgeEnd][edgeEnd - i] = edge2
      matrix[edgeEnd - i][edgeStart] = edge3
    }

    edgeStart++
    edgeEnd--
  }
}

const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
rotate(matrix1)
console.log(matrix1) // [[7,4,1],[8,5,2],[9,6,3]]

const matrix2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]
rotate(matrix2)
console.log(matrix2) // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]


export { }
