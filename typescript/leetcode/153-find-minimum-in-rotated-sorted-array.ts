// 153. Find Minimum in Rotated Sorted Array
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

function findMin(nums: number[]): number {
  let l = 0
  let r = nums.length - 1
  let min = Infinity

  while (l <= r) {
    if (nums[l] <= nums[r]) {
      return Math.min(min, nums[l])
    }

    const m = Math.floor((l + r) / 2)
    min = Math.min(min, nums[m])

    if (nums[m] >= nums[l]) {
      l = m + 1
    } else {
      r = m - 1
    }
  }

  return min
}

console.log(findMin([2, 1])) // 1
console.log(findMin([1])) // 1
console.log(findMin([3, 4, 5, 1, 2])) // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])) // 0
console.log(findMin([11, 13, 15, 17])) // 11

export { }
