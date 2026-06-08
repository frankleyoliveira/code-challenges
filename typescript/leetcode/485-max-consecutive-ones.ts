// 485. Max Consecutive Ones
// https://leetcode.com/problems/max-consecutive-ones/description

function findMaxConsecutiveOnes(nums: number[]): number {
  let count = 0
  let max = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      count++
      max = Math.max(count, max)
    } else {
      count = 0
    }
  }

  return max
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])) // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])) // 2

export { }
