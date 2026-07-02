// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/description/

function productExceptSelf(nums: number[]): number[] {
  const result: number[] = new Array(nums.length)

  let prefix = 1
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix
    prefix *= nums[i]
  }

  let sufix = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= sufix
    sufix *= nums[i]
  }

  return result
}

console.log(productExceptSelf([1, 2, 3, 4])) // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])) // [0,0,9,0,0]

export { }
