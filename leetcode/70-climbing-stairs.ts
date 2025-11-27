// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/description/

function climbStairs(n: number): number {
  let previous = 1
  let result = 1

  for (let i = 2; i <= n; i++) {
    const temp = result
    result += previous
    previous = temp
  }

  return result
}

// The results pattern is the fibonacci sequence
console.log(climbStairs(2)) // 2
console.log(climbStairs(3)) // 3
console.log(climbStairs(4)) // 5
console.log(climbStairs(5)) // 8
console.log(climbStairs(6)) // 13

export { }
