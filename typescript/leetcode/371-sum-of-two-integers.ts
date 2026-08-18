// 371. Sum of Two Integers
// https://leetcode.com/problems/sum-of-two-integers/description/

function getSum(a: number, b: number): number {
  while (b !== 0) {
    const tmp = (a & b) << 1
    a = a ^ b
    b = tmp
  }

  return a
}

console.log(getSum(1, 2)) // 3
console.log(getSum(2, 3)) // 5

export { }
