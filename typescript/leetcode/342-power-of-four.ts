// 342. Power of Four
// https://leetcode.com/problems/power-of-four/description

function isPowerOfFour(n: number): boolean {
  let result = n

  while (result > 1) {
    result /= 4
  }

  return result === 1
}

console.log(isPowerOfFour(16)) // true
console.log(isPowerOfFour(5)) // false
console.log(isPowerOfFour(1)) // true

export { }
