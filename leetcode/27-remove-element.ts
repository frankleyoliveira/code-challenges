// 27. Remove Element
// https://leetcode.com/problems/remove-element/

function removeElement(nums: number[], val: number): number {
  let end = nums.length - 1
  for (let i = 0; i <= end; i++) {
    if (nums[i] === val) {
      nums[i] = nums[end]
      end--
      i--
    }
  }

  return end + 1
}

const nums1 = [3, 2, 2, 3]
console.log(removeElement(nums1, 3), nums1) // 2, [2,2,_,_]

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2]
console.log(removeElement(nums2, 2), nums2) // 5, [0,1,4,0,3,_,_,_]

export { }