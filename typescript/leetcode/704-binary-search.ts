// 704. Binary Search
// https://leetcode.com/problems/binary-search/description

function search(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const mid = Math.ceil((r + l) / 2)

    if (nums[mid] === target) {
      return mid
    }

    if (nums[mid] < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 9)) // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)) // -1

export { }
