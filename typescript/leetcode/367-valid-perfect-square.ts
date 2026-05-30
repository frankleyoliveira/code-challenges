// 367. Valid Perfect Square
// https://leetcode.com/problems/valid-perfect-square/description

function isPerfectSquare(num: number): boolean {
  let left = 1
  let right = Math.ceil(num / 2)

  while (true) {
    const rResult = right * right
    const lResult = left * left

    if (rResult < num || lResult > num) return false
    if (rResult === num || lResult === num) return true

    const mid = Math.floor((right + left) / 2)

    const midResult = mid * mid
    if (midResult > num) {
      right = mid - 1
    } else if (midResult < num) {
      left = mid + 1
    } else {
      return true
    }
  }
}

console.log(isPerfectSquare(1)) // true
console.log(isPerfectSquare(16)) // true
console.log(isPerfectSquare(14)) // false


export { }
