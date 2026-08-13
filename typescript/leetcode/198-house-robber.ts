// 198. House Robber
// https://leetcode.com/problems/house-robber/description/

function rob(nums: number[]): number {
  let prev1 = 0
  let prev2 = 0

  for (const num of nums) {
    const sum = Math.max(num + prev2, prev1)
    prev2 = prev1
    prev1 = sum
  }

  return prev1
}


console.log(rob([1, 2, 3, 1])) // 4
console.log(rob([2, 7, 9, 3, 1])) // 12

export { }
