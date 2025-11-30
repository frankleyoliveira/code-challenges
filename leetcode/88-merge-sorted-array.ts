// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/description/

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let n1Idx = m - 1
  let n2Idx = n - 1
  let i = m + n - 1

  while (i >= 0 && n1Idx >= 0 && n2Idx >= 0) {
    if (nums1[n1Idx] >= nums2[n2Idx]) {
      nums1[i] = nums1[n1Idx]
      n1Idx--
    } else {
      nums1[i] = nums2[n2Idx]
      n2Idx--
    }

    i--
  }

  while (n2Idx >= 0) {
    nums1[n2Idx] = nums2[n2Idx]
    n2Idx--
  }

  console.log(nums1)
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3) // [1,2,2,3,5,6]
merge([1], 1, [], 0) // [1]
merge([0], 0, [1], 1) // [1]

export { }
