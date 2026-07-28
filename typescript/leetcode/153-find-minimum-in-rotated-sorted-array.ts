// 153. Find Minimum in Rotated Sorted Array
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

function findMin(nums: number[]): number {
  let r = nums.length - 1

  if (nums[0] <= nums[r]) {
    return nums[0]
  }

  let l = 0
  let min = 0

  while (l <= r) {
    const mid = Math.floor((l + r) / 2)

    if (nums[mid] >= nums[l]) {
      if (nums[mid + 1] < nums[l]) {
        return nums[mid + 1]
      }

      l = mid + 1
    } else {
      min = nums[mid]
      r = mid - 1
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
