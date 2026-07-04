// 128. Longest Consecutive Sequence
// https://leetcode.com/problems/longest-consecutive-sequence/description/

function longestConsecutive(nums: number[]): number {
  if (!nums.length) return 0

  let max = 1
  let count = 1

  nums.sort((a, b) => a - b)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue
    if (nums[i] - 1 === nums[i - 1]) {
      count++
    } else {
      max = Math.max(max, count)
      count = 1
    }
  }

  return Math.max(max, count)
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])) // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])) // 9
console.log(longestConsecutive([1, 0, 1, 2])) // 3

export { }
