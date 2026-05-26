// 268. Missing Number
// https://leetcode.com/problems/missing-number/description

function missingNumber(nums: number[]): number {
  // const sortedArray = nums.sort((a, b) => a - b)
  // for (let i = 0; i < sortedArray.length; i++) {
  //   if (i !== sortedArray[i]) {
  //     return i
  //   }
  // }
  // return nums.length

  // Math approach
  const n = nums.length
  const expectedSum = (n * (n + 1) / 2)
  const actualSum = nums.reduce((sum, num) => sum + num, 0)
  return expectedSum - actualSum
}

console.log(missingNumber([3, 0, 1])) // 2
console.log(missingNumber([0, 1])) // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])) // 8

export { }
