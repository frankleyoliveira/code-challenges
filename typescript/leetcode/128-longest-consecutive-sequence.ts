// 128. Longest Consecutive Sequence
// https://leetcode.com/problems/longest-consecutive-sequence/description/

function longestConsecutive(nums: number[]): number {
  const numsSet = new Set(nums)

  let max = 0

  for (const num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let count = 1

      while (numsSet.has(num + count)) {
        count++
      }

      if (count > max) {
        max = count
      }
    }
  }

  return max
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])) // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])) // 9
console.log(longestConsecutive([1, 0, 1, 2])) // 3

export { }
