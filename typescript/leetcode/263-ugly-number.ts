// 263. Ugly Number
// https://leetcode.com/problems/ugly-number/description

function isUgly(n: number): boolean {
  if (n < 1) return false

  let result = n

  while (result % 2 === 0) {
    result = result / 2
  }
  while (result % 3 === 0) {
    result = result / 3
  }
  while (result % 5 === 0) {
    result = result / 5
  }

  return result === 1
}

console.log(isUgly(6)) // true
console.log(isUgly(1)) // true
console.log(isUgly(14)) // false

export { }
