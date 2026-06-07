// 461. Hamming Distance
// https://leetcode.com/problems/hamming-distance/description

function hammingDistance(x: number, y: number): number {
  let count = 0
  let n = x ^ y // XOR to find different bits

  while (n > 0) {
    n = n & (n - 1) // Remove rightmost 1 bit
    count++
  }

  return count
}

console.log(hammingDistance(1, 4)) // 2
console.log(hammingDistance(3, 1)) // 1

export { }
