// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

function search(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const m = Math.floor((l + r) / 2)

    if (nums[m] === target) {
      return m
    }

    // left sorted portion
    if (nums[l] <= nums[m]) {
      if (target < nums[l] || target > nums[m]) {
        l = m + 1
      } else {
        r = m - 1
      }
    } else { // right sorted portion
      if (target < nums[m] || target > nums[r]) {
        r = m - 1
      } else {
        l = m + 1
      }
    }
  }

  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)) // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)) // -1
console.log(search([1], 0)) // -1

export { }
