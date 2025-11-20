// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position/description/

function searchInsert(nums: number[], target: number): number {
  // Solution 1
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] >= target) {
  //     return i
  //   }
  // }

  // return nums.length

  // --------------------------

  // Now using O(log n)...

  // Solution 2
  let firstIdx = 0
  let lastIdx = nums.length - 1

  while ((lastIdx - firstIdx) > 0) {
    let middleIdx = Math.round((lastIdx - firstIdx) / 2) + firstIdx

    if (nums[middleIdx] <= target) {
      // target on right
      firstIdx = middleIdx
    } else {
      // target on left
      lastIdx = middleIdx - 1
    }
  }

  if (nums[firstIdx] < target) {
    return firstIdx + 1
  }

  return firstIdx

  // --------------------------

  // Solution 3 (leetcode)
  // let left = 0
  // let right = nums.length - 1

  // while (left <= right) {
  //   const mid = left + Math.floor((right - left) / 2);
  //   if (nums[mid] === target) {
  //     return mid;
  //   } else if (nums[mid] > target) {
  //     right = mid - 1;
  //   } else {
  //     left = mid + 1;
  //   }
  // }
  // return left;

}


console.log(searchInsert([1, 3, 5, 6], 5)) // 2
console.log(searchInsert([1, 3, 5, 6], 2)) // 1
console.log(searchInsert([1, 3, 5, 6], 7)) // 4
console.log(searchInsert([1, 3, 5, 6], 0)) // 0

export { }