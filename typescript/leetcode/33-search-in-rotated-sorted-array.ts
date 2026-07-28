// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

function search(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1

  const searchSortedInterval = (): number => {
    while (l <= r) {
      const m = Math.floor((l + r) / 2)
      if (target < nums[m]) {
        r = m - 1
      } else if (nums[m] < target) {
        l = m + 1
      } else {
        return m
      }
    }

    return -1
  }

  while (l <= r) {
    const m = Math.floor((l + r) / 2)

    if (nums[l] <= nums[m]) { // left side is sorted
      if (target >= nums[l] && target <= nums[m]) {
        // Target in sorted interval:
        r = m
        return searchSortedInterval()
      } else {
        l = m + 1
      }
    } else { // right side is sorted
      if (target >= nums[m] && target <= nums[r]) {
        // Target in sorted interval:
        l = m
        return searchSortedInterval()
      } else {
        r = m - 1
      }
    }
  }

  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)) // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)) // -1
console.log(search([1], 0)) // -1

export { }
