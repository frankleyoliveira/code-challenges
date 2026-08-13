// 213. House Robber II
// https://leetcode.com/problems/house-robber-ii/description/

function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])
  if (nums.length === 3) return Math.max(nums[0], nums[1], nums[2])

  // robbing first house path
  let prevPrev = nums[0] // 2
  let prev = nums[2] + nums[0] // 4

  for (let i = 3; i < nums.length - 1; i++) {
    const sum = Math.max(nums[i] + prevPrev, prev)
    prevPrev = prev
    prev = sum
  }

  let moneyRobbingFirst = prev

  // skip first house path
  prevPrev = nums[1]
  prev = Math.max(nums[1], nums[2])
  for (let i = 3; i < nums.length; i++) {
    const sum = Math.max(nums[i] + prevPrev, prev)
    prevPrev = prev
    prev = sum
  }

  return Math.max(moneyRobbingFirst, prev)
}

console.log(rob([1, 2, 1, 1])) // 3
console.log(rob([2, 3, 2])) // 3
console.log(rob([1, 2, 3, 1])) // 4
console.log(rob([1, 2, 3])) // 3

export { }
