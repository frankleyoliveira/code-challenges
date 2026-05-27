// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/description/

function moveZeroes(nums: number[]): void {
  // let len = nums.length
  // for (let i = 0; i < len; i++) {
  //   if (nums[i] === 0) {
  //     nums.splice(i, 1)
  //     nums.push(0)
  //     len--
  //     i--
  //   }
  // }

  let write = 0
  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      // Swap nums[read] and nums[write]
      [nums[write], nums[read]] = [nums[read], nums[write]]
      write++
    }
  }
}

const nums1 = [0, 1, 0, 3, 12]
moveZeroes(nums1)
console.log(nums1) // [1,3,12,0,0]

const nums2 = [0]
moveZeroes(nums2)
console.log(nums2) // [0]

export { }
