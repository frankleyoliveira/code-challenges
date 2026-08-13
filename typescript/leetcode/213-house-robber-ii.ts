// 213. House Robber II
// https://leetcode.com/problems/house-robber-ii/description/

function rob(nums: number[]): number {
  if (nums.length <= 3) {
    return Math.max(...nums)
  }

  const calcMoney = (firstIdx: number, lastIdx: number): number => {
    let prevPrev = 0
    let prev = 0

    for (let i = firstIdx; i <= lastIdx; i++) {
      const sum = Math.max(nums[i] + prevPrev, prev)
      prevPrev = prev
      prev = sum
    }

    return prev
  }

  return Math.max(calcMoney(0, nums.length - 2), calcMoney(1, nums.length - 1))
}

console.log(rob([1, 2, 1, 1])) // 3
console.log(rob([2, 3, 2])) // 3
console.log(rob([1, 2, 3, 1])) // 4
console.log(rob([1, 2, 3])) // 3

export { }
