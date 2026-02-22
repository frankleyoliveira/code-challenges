// 169. Majority Element
// https://leetcode.com/problems/majority-element/description/

function majorityElement(nums: number[]): number {
  let candidate = nums[0]
  let count = 1

  for (let i = 1; i < nums.length; i++) {
    if (count == 0) {
      candidate = nums[i]
      count = 1

      continue
    }

    if (candidate == nums[i]) {
      count++
    } else {
      count--
    }
  }

  return candidate
}

console.log(majorityElement([3, 2, 3])) // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])) // 2

export { }
