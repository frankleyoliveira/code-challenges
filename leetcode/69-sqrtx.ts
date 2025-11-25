// 69. Sqrt(x)
// https://leetcode.com/problems/sqrtx/description/

function mySqrt(x: number): number {
  let left = 0
  let right = x
  let answer = 0

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (mid * mid <= x) {
      answer = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return answer
}


console.log(mySqrt(4)) // 2
console.log(mySqrt(8)) // 2
console.log(mySqrt(2)) // 1
console.log(mySqrt(1)) // 1

export { }
