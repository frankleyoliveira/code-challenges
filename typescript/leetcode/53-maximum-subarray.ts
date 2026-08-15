// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/description/

function maxSubArray(nums: number[]): number {
  let maxSub = nums[0]
  let curSum = 0

  for (let i = 0; i < nums.length; i++) {
    if (curSum < 0) {
      curSum = 0
    }
    curSum += nums[i]
    maxSub = Math.max(maxSub, curSum)
  }

  return maxSub
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
console.log(maxSubArray([1])) // 1
console.log(maxSubArray([5, 4, -1, 7, 8])) // 23

export { }
