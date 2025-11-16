// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

function removeDuplicates(nums: number[]): number {
  let k = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[k]) {
      k++
      nums[k] = nums[i]
    }
  }

  return k + 1
}

const nums1 = [1, 1, 2]
console.log(removeDuplicates(nums1), nums1) // 2, [1,2,_]

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums2), nums2) // 5, [0,1,2,3,4,_,_,_,_,_]

export { }